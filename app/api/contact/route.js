import { NextResponse } from "next/server";

const HUBSPOT_UPSERT_URL = "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert";
const HUBSPOT_NOTES_URL = "https://api.hubapi.com/crm/v3/objects/notes";
const NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID = 202;

export async function POST(request) {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "HubSpot is not configured on the server." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, category, message } = body || {};

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const [firstname, ...rest] = (name || "").trim().split(" ");
  const lastname = rest.join(" ");

  const contactProperties = Object.fromEntries(
    Object.entries({ email, firstname, lastname, phone, message, category }).filter(
      ([, v]) => v !== undefined && v !== ""
    )
  );

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    // Upsert by email: creates the contact if it's new, updates it in place
    // if it already exists — no more "contact already exists" errors, and
    // no risk of duplicate records for the same person.
    const upsertRes = await fetch(HUBSPOT_UPSERT_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        inputs: [{ idProperty: "email", id: email, properties: contactProperties }],
      }),
    });

    if (!upsertRes.ok) {
      const errBody = await upsertRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errBody.message || "Failed to save contact to HubSpot." },
        { status: upsertRes.status }
      );
    }

    const upsertData = await upsertRes.json();
    const contactId = upsertData.results?.[0]?.id;

    // Log this submission as a Note on the contact so repeat submissions
    // build up a history instead of overwriting the previous message.
    if (contactId && message) {
      const noteBody = category ? `[${category}] ${message}` : message;
      await fetch(HUBSPOT_NOTES_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          properties: {
            hs_note_body: noteBody,
            hs_timestamp: Date.now(),
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID,
                },
              ],
            },
          ],
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, id: contactId });
  } catch {
    return NextResponse.json(
      { error: "Could not reach HubSpot. Please try again." },
      { status: 502 }
    );
  }
}

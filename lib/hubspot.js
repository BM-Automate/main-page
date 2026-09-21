// Shared HubSpot logic used by both the contact form (app/api/contact) and
// the chat widget's submit_lead tool (app/api/chat) — one place that talks
// to HubSpot so both entry points log leads the same way.
const HUBSPOT_UPSERT_URL = "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert";
const HUBSPOT_CREATE_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
const HUBSPOT_NOTES_URL = "https://api.hubapi.com/crm/v3/objects/notes";
const NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID = 202;

// Saves a lead to HubSpot: upserts the contact (updates in place if it
// already exists) and logs the message as a Note so repeat submissions build
// a history instead of overwriting each other. Throws on failure — callers
// decide how to surface that.
export async function saveHubspotLead({ name, email, phone, category, message }) {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    throw new Error("HubSpot is not configured on the server.");
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

  let contactId;

  if (email) {
    // Upsert by email: creates the contact if it's new, updates it in place
    // if it already exists — no duplicate records for the same person.
    const upsertRes = await fetch(HUBSPOT_UPSERT_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        inputs: [{ idProperty: "email", id: email, properties: contactProperties }],
      }),
    });
    if (!upsertRes.ok) {
      const errBody = await upsertRes.json().catch(() => ({}));
      throw new Error(errBody.message || "Failed to save contact to HubSpot.");
    }
    const upsertData = await upsertRes.json();
    contactId = upsertData.results?.[0]?.id;
  } else {
    // No email to upsert by (e.g. a WhatsApp-only chat lead) — email isn't a
    // default unique-indexed property for phone in HubSpot, so this creates
    // a plain new contact instead. A repeat phone-only conversation can
    // create a second record; acceptable tradeoff until phone is configured
    // as a unique property in the portal.
    const createRes = await fetch(HUBSPOT_CREATE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ properties: contactProperties }),
    });
    if (!createRes.ok) {
      const errBody = await createRes.json().catch(() => ({}));
      throw new Error(errBody.message || "Failed to save contact to HubSpot.");
    }
    const createData = await createRes.json();
    contactId = createData.id;
  }

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

  return { id: contactId };
}

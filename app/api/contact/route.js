import { NextResponse } from "next/server";
import { saveHubspotLead } from "@/lib/hubspot";

export async function POST(request) {
  if (!process.env.HUBSPOT_TOKEN) {
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

  try {
    const { id } = await saveHubspotLead({ name, email, phone, category, message });
    return NextResponse.json({ success: true, id });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Could not reach HubSpot. Please try again." },
      { status: 502 }
    );
  }
}

import { betaTool } from "@anthropic-ai/sdk/helpers/beta/json-schema";
import { siteName, contactEmail, contactPhone } from "@/lib/site";
import { saveHubspotLead } from "@/lib/hubspot";

// Model is overridable via env so it can be swapped without a code change —
// e.g. to a cheaper model for a low-traffic marketing site.
export const CHAT_MODEL = process.env.ANTHROPIC_CHAT_MODEL || "claude-opus-5";

export const SYSTEM_PROMPT = `You are the AI assistant for ${siteName} (bmautomate.com), a web, app, and AI automation studio based in Pakistan.

Your role:
- Answer visitor questions about BM Automate's services: custom web apps, mobile apps, AI automation, and custom software.
- Reference our core services: Web & App Development (Laravel, MERN stack), Business Automation (workflow automation, integrations), and AI Integration (chatbots, smart search, automated content).
- Be friendly, concise, and professional. Keep responses short (2-4 sentences) unless the visitor asks for detail.

Strict rules:
- NEVER quote, estimate, or promise any price, cost, or fixed budget — even ranges. Pricing depends on project scope and is decided by our team directly. If asked about pricing, say something like: "Pricing depends on your project's scope — I'll connect you with our team for an exact quote. Can I get your email or a quick description of what you need?"
- NEVER promise or estimate delivery timelines or deadlines. If asked, say timelines depend on the project and our team will confirm after understanding requirements.
- Do not make commitments on behalf of BM Automate (contracts, guarantees, refunds, discounts).
- If a question is outside your knowledge (technical specifics you're unsure of, legal/contract questions), say you'll connect them with the team instead of guessing.
- Always try to collect the visitor's name, email or WhatsApp number, and a brief description of their project need, so the team can follow up. As soon as you have at least an email or phone/WhatsApp number plus a brief description of what they need, call the submit_lead tool to save it — don't just say you will, actually call it.
- Company contact for escalation: ${contactEmail}, ${contactPhone}`;

// The greeting is shown client-side when the widget first opens, with no API
// call — kept here so the prompt and the greeting stay next to each other.
export const GREETING =
  "Hi! I'm BM Automate's AI assistant — I can answer questions about our services or help connect you with our team. How can I help?";

export const submitLeadTool = betaTool({
  name: "submit_lead",
  description:
    "Save a visitor's contact info and project need so the BM Automate team can follow up. Call this once you have collected at least an email or phone/WhatsApp number, plus a brief description of what they need — don't wait for every field.",
  inputSchema: {
    type: "object",
    properties: {
      name: { type: "string", description: "Visitor's name, if given." },
      email: { type: "string", description: "Visitor's email address, if given." },
      phone: { type: "string", description: "Visitor's phone or WhatsApp number, if given." },
      category: {
        type: "string",
        description:
          "Best-fit category: Web Platform, Mobile App, Custom Software, AI Automation, UI/UX Design, E-commerce Store, or Other.",
      },
      message: { type: "string", description: "Brief description of what they need." },
    },
    required: ["message"],
    additionalProperties: false,
  },
  run: async (input) => {
    if (!input.email && !input.phone) {
      return "No email or phone was provided — ask the visitor for one before calling this tool again.";
    }
    try {
      await saveHubspotLead(input);
      return "Saved. Let the visitor know the team will follow up.";
    } catch {
      return "Could not save the lead right now — apologize briefly and point the visitor to the contact page instead, but keep the conversation going normally.";
    }
  },
});

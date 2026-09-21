import Anthropic from "@anthropic-ai/sdk";
import { CHAT_MODEL, SYSTEM_PROMPT, submitLeadTool } from "@/lib/chat";

const MAX_MESSAGES = 40; // caps conversation length sent back each turn

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("Chat is not configured on the server.", { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid request body.", { status: 400 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages.slice(-MAX_MESSAGES) : [];
  if (messages.length === 0) {
    return new Response("No messages provided.", { status: 400 });
  }

  const client = new Anthropic();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const runner = client.beta.messages.toolRunner({
          model: CHAT_MODEL,
          max_tokens: 4096,
          thinking: { type: "adaptive" },
          output_config: { effort: "low" },
          system: SYSTEM_PROMPT,
          tools: [submitLeadTool],
          messages,
          stream: true,
        });

        for await (const messageStream of runner) {
          for await (const event of messageStream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          await messageStream.finalMessage();
        }
      } catch {
        controller.enqueue(
          encoder.encode(
            "\n\nSorry, something went wrong on my end. Please email contact@bmautomate.com or try again."
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

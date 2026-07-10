import type { ChatbotQA } from "@/lib/constants";

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function findChatbotAnswer(
  input: string,
  qa: readonly ChatbotQA[]
): ChatbotQA | null {
  const query = normalize(input);
  if (!query) return null;

  const exact = qa.find((item) => normalize(item.question) === query);
  if (exact) return exact;

  const partial = qa.find((item) => {
    const question = normalize(item.question);
    return question.includes(query) || query.includes(question);
  });
  if (partial) return partial;

  let best: { item: ChatbotQA; score: number } | null = null;

  for (const item of qa) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (query.includes(normalize(keyword))) {
        score += keyword.split(" ").length;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { item, score };
    }
  }

  return best?.item ?? null;
}

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

export function createMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  };
}

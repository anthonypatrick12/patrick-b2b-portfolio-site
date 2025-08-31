import type { Rule } from "./rules";
import { RULES } from "./rules";

export type ChatMessage = { id: string; role: "user" | "bot"; text: string; ts: number };
export type ChatReturn = { reply: string; suggestions?: string[]; matchedRuleId?: string };

const normalize = (s: string) => s.toLowerCase().trim();

const matchesRule = (input: string, rule: Rule) => {
  const msg = normalize(input);
  const has = rule.keywords.some(k => msg.includes(k.toLowerCase()));
  if (!has) return false;
  if (rule.notKeywords?.some(k => msg.includes(k.toLowerCase()))) return false;
  return true;
};

export function getReply(input: string, ctx?: any): ChatReturn {
  const matched = RULES.find(r => matchesRule(input, r));
  if (matched) {
    const reply = typeof matched.reply === "function" ? matched.reply(ctx) : matched.reply;
    return { reply, suggestions: matched.suggestions, matchedRuleId: matched.id };
  }
  // Fallback
  return {
    reply:
      "I might’ve missed that. Try asking about services, pricing, case studies—or book a call at /#contact.",
    suggestions: ["Services", "Pricing", "Case studies", "Book a call"],
  };
}

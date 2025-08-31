"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { getReply, type ChatMessage } from "./RuleEngine";

const LS_KEY = "patrick-chat-history-v1";

function useChatHistory() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);
  return { messages, setMessages };
}

const Bubble: React.FC<{ role: "user" | "bot"; children: React.ReactNode }> = ({ role, children }) => (
  <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} my-1`}>
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed border ${
        role === "user"
          ? "bg-brand-500 text-white border-white/10"
          : "bg-black/40 text-white border-white/10"
      }`}
    >
      {children}
    </div>
  </div>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [collecting, setCollecting] = useState<null | "name" | "email">(null);
  const [lead, setLead] = useState<{ name?: string; email?: string }>({});
  const { messages, setMessages } = useChatHistory();
  const listRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Seed a welcome message once
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "bot",
          text:
            "Hi! I’m Patrick’s assistant 🤖 Ask about services, pricing, case studies—or type ‘book’ to schedule a call.",
          ts: Date.now(),
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!prefersReducedMotion) {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    } else {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    }
  }, [messages, prefersReducedMotion]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed, ts: Date.now() };
    setMessages(m => [...m, userMsg]);

    // Collect lead flow
    if (collecting === "name") {
      setLead(prev => ({ ...prev, name: trimmed }));
      setCollecting("email");
      setMessages(m => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: "Nice to meet you! What’s your email?", ts: Date.now() },
      ]);
      return;
    }
    if (collecting === "email") {
      setLead(prev => ({ ...prev, email: trimmed }));
      setCollecting(null);
      setMessages(m => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text:
            "Got it ✅ I’ll pass this along before the call. You can also book a time at /#contact.",
          ts: Date.now(),
        },
      ]);
      return;
    }

    // Rule engine
    const { reply, suggestions } = getReply(trimmed, { lead });
    const botMsg: ChatMessage = { id: crypto.randomUUID(), role: "bot", text: reply, ts: Date.now() };
    setMessages(m => [...m, botMsg]);

    // If user asked to share details, start collection
    if (/share my details|share details|email me|contact me/i.test(trimmed)) {
      setCollecting("name");
      setMessages(m => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: "Great—what’s your name?", ts: Date.now() },
      ]);
    }

    // Quick auto-suggestions appended as a “system” bubble
    if (suggestions?.length) {
      const text = suggestions.map((s, i) => `${i + 1}. ${s}`).join("  ·  ");
      setMessages(m => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: `Try: ${text}`, ts: Date.now() },
      ]);
    }
  };

  const onQuick = (label: string) => {
    send(label);
  };

  const quicks = useMemo(
    () => ["Services", "Pricing", "Case studies", "Book a call"],
    []
  );

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(v => !v)}
        className="fixed z-50 bottom-6 right-6 rounded-full shadow-glow border border-white/10 bg-brand-500 text-white w-14 h-14 flex items-center justify-center hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        {open ? "×" : "💬"}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed z-50 bottom-24 right-6 w-[92vw] max-w-[360px] rounded-2xl border border-white/10 bg-black/70 backdrop-blur shadow-lg"
          role="dialog"
          aria-label="Chat with Patrick’s assistant"
        >
          <div className="p-3 border-b border-white/10 flex items-center justify-between">
            <div className="text-sm text-white/80">Patrick’s Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg px-2"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div ref={listRef} className="p-3 max-h-[50vh] overflow-y-auto">
            {messages.map(m => (
              <Bubble key={m.id} role={m.role}>
                {m.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </Bubble>
            ))}
          </div>

          <div className="px-3 pb-3">
            {/* Quick suggestions */}
            <div className="flex flex-wrap gap-2 mb-2">
              {quicks.map(q => (
                <button
                  key={q}
                  onClick={() => onQuick(q)}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 bg-black/40 text-white hover:bg-black/60"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={e => {
                e.preventDefault();
                const val = (e.currentTarget.elements.namedItem("msg") as HTMLInputElement).value;
                (e.currentTarget.elements.namedItem("msg") as HTMLInputElement).value = "";
                setInput("");
                send(val);
              }}
              className="flex gap-2"
            >
              <input
                name="msg"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 px-3 py-2 rounded-xl border border-white/10 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white border border-white/10"
                aria-label="Send message"
              >
                Send
              </button>
            </form>

            {/* Privacy hint */}
            <p className="text-[11px] text-white/50 mt-2">
              No server storage. Messages stay in your browser.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

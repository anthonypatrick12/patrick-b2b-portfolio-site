// components/chat/ChatWidget.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { getReply, type ChatMessage } from "./RuleEngine";

/** ——— Minimal styling knobs ——— */
const CFG = {
  bubbleBg: "bg-white/5",               // bot bubble
  bubbleBorder: "border-white/10",
  userBg: "bg-indigo-600",              // user bubble
  userHover: "hover:bg-indigo-500",
  text: "text-white",
  panelBg: "bg-black/70 backdrop-blur",
  radius: "rounded-2xl",
  ring: "focus:outline-none focus:ring-2 focus:ring-white/30",
  z: "z-40",
  width: "max-w-[360px]",               // panel max width
};

const LS_CHAT = "patrick-chat-history-v1";
const LS_SEEN = "patrick-chat-has-seen-v1";

/** Persist chat locally (no server) */
function useChatHistory() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_CHAT);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(LS_CHAT, JSON.stringify(messages));
    } catch {}
  }, [messages]);
  return { messages, setMessages };
}

/** Simple robot logo (SVG) */
const BotLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <rect x="10" y="16" width="44" height="34" rx="12" fill="currentColor" />
    <circle cx="24" cy="33" r="5" fill="black" />
    <circle cx="40" cy="33" r="5" fill="black" />
    <rect x="28" y="8" width="8" height="8" rx="2" fill="currentColor" />
    <rect x="6" y="26" width="8" height="12" rx="2" fill="currentColor" />
    <rect x="50" y="26" width="8" height="12" rx="2" fill="currentColor" />
    <rect x="22" y="44" width="20" height="3" rx="1.5" fill="black" />
  </svg>
);

const Bubble: React.FC<{ role: "user" | "bot"; children: React.ReactNode }> = ({ role, children }) => (
  <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} my-1`}>
    <div
      className={[
        "max-w-[78%] px-3 py-2 text-sm leading-relaxed border",
        CFG.radius,
        role === "user"
          ? `${CFG.userBg} ${CFG.text} border-transparent`
          : `${CFG.bubbleBg} ${CFG.text} ${CFG.bubbleBorder}`,
      ].join(" ")}
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

  // Seed + first-visit auto-open
  useEffect(() => {
    const hasSeed = messages.length > 0;
    const seen = typeof window !== "undefined" ? localStorage.getItem(LS_SEEN) : "1";

    if (!hasSeed) {
      // Seed two messages: intro + explicit “Hi, how can I help you?”
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: "Hi! I’m Patrick’s assistant.",
          ts: Date.now(),
        },
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: "Hi, how can I help you?",
          ts: Date.now(),
        },
      ]);
    }

    // Auto-open only on first visit
    if (!seen) {
      setOpen(true);
      localStorage.setItem(LS_SEEN, "1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // User message
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);

    // Lead capture flow
    if (collecting === "name") {
      setLead((prev) => ({ ...prev, name: trimmed }));
      setCollecting("email");
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: "Nice! What’s your email?", ts: Date.now() },
      ]);
      return;
    }
    if (collecting === "email") {
      setLead((prev) => ({ ...prev, email: trimmed }));
      setCollecting(null);
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: "Thanks — I’ll pass this along. You can also book at /#contact.", ts: Date.now() },
      ]);
      return;
    }

    // Rule engine reply
    const { reply, suggestions } = getReply(trimmed, { lead });
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "bot", text: reply, ts: Date.now() }]);

    // Start capture on intent
    if (/share my details|share details|email me|contact me/i.test(trimmed)) {
      setCollecting("name");
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: "Great — what’s your name?", ts: Date.now() },
      ]);
    }

    // Compact suggestion (one line)
    if (suggestions?.length) {
      const compact = suggestions.slice(0, 2).join(" · ");
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: `Try: ${compact}`, ts: Date.now() },
      ]);
    }
  };

  const quicks = useMemo(() => ["Services", "Pricing"], []);

  return (
    <>
      {/* Floating launcher with cool robot logo */}
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center",
          CFG.z,
          CFG.userBg,
          CFG.userHover,
          CFG.text,
          "rounded-full shadow-md",
          CFG.ring,
        ].join(" ")}
        style={{ lineHeight: 1 }}
      >
        {open ? "×" : <BotLogo className="w-6 h-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          className={[
            "fixed bottom-20 right-5 w-[92vw]",
            CFG.width,
            CFG.z,
            CFG.panelBg,
            CFG.radius,
            "border border-white/10 shadow-xl",
          ].join(" ")}
          role="dialog"
          aria-label="Chat with Patrick’s assistant"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-white/85">
              <BotLogo className="w-4 h-4 text-white/90" />
              <span>Patrick’s Assistant</span>
            </div>
            <div className="flex gap-2">
              {quicks.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className={`text-[11px] px-2 py-1 ${CFG.radius} border ${CFG.bubbleBorder} ${CFG.bubbleBg} ${CFG.ring}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="p-3 max-h-[50vh] overflow-y-auto">
            {messages.map((m) => (
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

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const val = (e.currentTarget.elements.namedItem("msg") as HTMLInputElement).value;
              (e.currentTarget.elements.namedItem("msg") as HTMLInputElement).value = "";
              setInput("");
              send(val);
            }}
            className="p-3 border-t border-white/10 flex gap-2"
          >
            <input
              name="msg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className={[
                "flex-1 px-3 py-2 text-sm",
                CFG.radius,
                "border border-white/10",
                "bg-white/5",
                CFG.text,
                CFG.ring,
              ].join(" ")}
              autoComplete="off"
            />
            <button
              type="submit"
              className={[
                "px-3 py-2 text-sm",
                CFG.radius,
                CFG.userBg,
                CFG.userHover,
                CFG.text,
                "border border-transparent",
                CFG.ring,
              ].join(" ")}
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

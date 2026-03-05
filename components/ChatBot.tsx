"use client";

import { useState, useRef, useEffect } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────────────
// Replace with your deployed Render/Railway backend URL
const API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://localhost:8000";

const SUGGESTED_QUESTIONS = [
  "What's your tech stack?",
  "Tell me about your experience",
  "Are you open to new roles?",
  "What projects are you most proud of?",
];

// ─── TYPES ──────────────────────────────────────────────────────────────────
type Message = {
  role: "user" | "assistant";
  content: string;
};

// ─── ICONS (inline SVG to avoid extra deps) ─────────────────────────────────
const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const BotIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <line x1="12" y1="3" x2="12" y2="7" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <circle cx="15" cy="16" r="1" fill="currentColor" />
  </svg>
);

// ─── TYPING INDICATOR ────────────────────────────────────────────────────────
const TypingDots = () => (
  <span
    style={{
      display: "inline-flex",
      gap: "3px",
      alignItems: "center",
      padding: "2px 0",
    }}
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent)",
          display: "inline-block",
          animation: "bounce 1.2s infinite",
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
  </span>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! I'm an AI trained on Zellie's background. Ask me anything — experience, projects, or whether they're open to new roles. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [shown, setShown] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fade-in on mount
    const t = setTimeout(() => setShown(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --bg: #0f0f0f;
          --surface: #161616;
          --surface2: #1e1e1e;
          --border: #2a2a2a;
          --accent: #c8f135;
          --accent-dim: rgba(200,241,53,0.12);
          --text: #f0f0f0;
          --muted: #777;
          --user-bubble: #1f1f1f;
          --bot-bubble: #131313;
          --radius: 14px;
          --font-serif: 'DM Serif Display', serif;
          --font-mono: 'DM Mono', monospace;
          --font-sans: 'DM Sans', sans-serif;
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes msgIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .chatbot-wrap {
          font-family: var(--font-sans);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .chatbot-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .chatbot-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 520px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.5);
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 22px;
          border-bottom: 1px solid var(--border);
          background: var(--bg);
        }

        .header-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--accent-dim);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .header-text h3 {
          font-family: var(--font-serif);
          font-size: 15px;
          color: var(--text);
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .header-text p {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          margin: 2px 0 0;
          letter-spacing: 0.05em;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          margin-left: auto;
          box-shadow: 0 0 8px var(--accent);
          flex-shrink: 0;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }

        .chat-messages::-webkit-scrollbar { width: 4px; }
        .chat-messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        .msg-row {
          display: flex;
          animation: msgIn 0.25s ease forwards;
        }
        .msg-row.user { justify-content: flex-end; }
        .msg-row.assistant { justify-content: flex-start; }

        .bubble {
          max-width: 80%;
          padding: 11px 15px;
          border-radius: var(--radius);
          font-size: 13.5px;
          line-height: 1.6;
          letter-spacing: 0.01em;
        }

        .bubble.user {
          background: var(--user-bubble);
          border: 1px solid var(--border);
          color: var(--text);
          border-bottom-right-radius: 4px;
        }

        .bubble.assistant {
          background: var(--bot-bubble);
          border: 1px solid var(--border);
          color: #d8d8d8;
          border-bottom-left-radius: 4px;
          border-left: 2px solid var(--accent);
        }

        .suggestions {
          padding: 0 20px 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .suggestion-btn {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 6px 12px;
          border-radius: 20px;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.15s ease;
          letter-spacing: 0.02em;
        }
        .suggestion-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-dim);
        }

        .chat-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .chat-input {
          flex: 1;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 14px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--text);
          outline: none;
          transition: border-color 0.15s;
          caret-color: var(--accent);
        }
        .chat-input::placeholder { color: var(--muted); }
        .chat-input:focus { border-color: var(--accent); }

        .send-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f0f0f;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .send-btn:hover:not(:disabled) {
          background: #d9ff4f;
          transform: scale(1.05);
        }
        .send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }
      `}</style>

      <div className={`chatbot-wrap ${shown ? "visible" : ""}`}>
        <p className="section-label">ask me anything</p>

        <div className="chatbot-card">
          {/* Header */}
          <div className="chat-header">
            <div className="header-avatar">
              <BotIcon />
            </div>
            <div className="header-text">
              <h3>Zellie — AI</h3>
              <p>trained on my experience &amp; projects</p>
            </div>
            <div className="status-dot" title="Online" />
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg-row ${msg.role}`}>
                <div className={`bubble ${msg.role}`}>{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div className="msg-row assistant">
                <div className="bubble assistant">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested prompts — only shown before any user message */}
          {messages.filter((m) => m.role === "user").length === 0 && (
            <div className="suggestions">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  className="suggestion-btn"
                  onClick={() => sendMessage(q)}
                  disabled={loading}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-input-row">
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              placeholder="Ask about my experience, stack, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

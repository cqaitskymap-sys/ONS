"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  Send,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";
import {
  CHATBOT_FALLBACK,
  CHATBOT_QA,
  CHATBOT_QUICK_QUESTIONS,
  CHATBOT_WELCOME,
  COMPANY,
} from "@/lib/constants";
import { createMessage, findChatbotAnswer, type ChatMessage } from "@/lib/chatbot";
import { cn } from "@/lib/utils";

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([createMessage("bot", CHATBOT_WELCOME)]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const respond = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, createMessage("user", trimmed)]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const match = findChatbotAnswer(trimmed, CHATBOT_QA);
      setMessages((prev) => [
        ...prev,
        createMessage("bot", match?.answer ?? CHATBOT_FALLBACK),
      ]);
      setTyping(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    respond(input);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-50 flex flex-col overflow-hidden border border-white/10 bg-[#0a0f1a]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl",
              "inset-x-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] h-[min(32rem,calc(100dvh-7rem))] rounded-2xl",
              "sm:inset-x-auto sm:right-6 sm:bottom-[calc(6.5rem+env(safe-area-inset-bottom))] sm:h-[min(34rem,calc(100dvh-8rem))] sm:w-[min(100vw-2rem,24rem)]"
            )}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-primary/5 px-4 py-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/25">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{COMPANY.name} Assistant</p>
                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "glass border border-white/10 text-foreground/90 rounded-bl-md"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl rounded-bl-md border border-white/10 px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick questions */}
            <div className="border-t border-white/10 px-3 py-2.5">
              <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                Quick questions
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {CHATBOT_QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => respond(question)}
                    disabled={typing}
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/85 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 bg-black/20 p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  disabled={typing}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-1 focus:ring-primary/20 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={typing || !input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:bg-primary/90 disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-2.5 py-1.5 text-[#25D366] transition-colors hover:bg-[#25D366]/15"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY.phone.split("/")[0].trim()}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Contact page
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed z-50 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-200",
          "bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))]",
          "h-14 w-14 sm:h-[3.75rem] sm:w-[3.75rem]",
          open
            ? "border border-white/15 bg-white/10 text-foreground"
            : "bg-primary text-primary-foreground glow-green hover:scale-105"
        )}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>
    </>
  );
}

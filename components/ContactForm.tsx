"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });
      const data = await res.json();
      if (data.ok) {
        setMessage("Thanks! I'll get back to you shortly.");
        formRef.current?.reset();
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (e) {
      console.error("Contact form error:", e);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} action={onSubmit} className="space-y-3 max-w-xl mx-auto">
      <div className="grid gap-3 sm:grid-cols-2">
        <input 
          name="name" 
          required 
          placeholder="Your name" 
          aria-label="Your name"
          className="w-full rounded-xl border px-3 py-2 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all" 
        />
        <input 
          name="email" 
          type="email" 
          required 
          placeholder="you@example.com" 
          aria-label="Your email address"
          className="w-full rounded-xl border px-3 py-2 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all" 
        />
      </div>
      <textarea 
        name="message" 
        required 
        minLength={3} 
        placeholder="Tell me about your project…" 
        aria-label="Your message"
        rows={5} 
        className="w-full rounded-xl border px-3 py-2 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all resize-vertical"
      ></textarea>
      <div className="flex justify-center">
        <button 
          disabled={loading} 
          type="submit"
          aria-describedby={message ? "form-message" : undefined}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 magnetic ripple-effect"
        >
          <span className={loading ? "animate-spin" : ""}>{loading ? "⏳" : "📤"}</span>
          {loading ? "Sending…" : "Send message"}
        </button>
      </div>
      {message && (
        <p 
          id="form-message" 
          className={`text-sm transition-colors ${
            message.includes("Thanks") 
              ? "text-emerald-600 dark:text-emerald-400" 
              : "text-red-600 dark:text-red-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  )
}

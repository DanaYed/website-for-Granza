"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle className="text-olive-600" size={48} />
        <h3 className="font-serif text-2xl text-bark-700">Thank You</h3>
        <p className="text-bark-500 max-w-sm">
          Your message has been received. We&apos;ll be in touch within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-xs tracking-widest uppercase text-bark-500">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="border border-cream-300 bg-white px-4 py-3 text-sm text-bark-700 placeholder-bark-300 focus:outline-none focus:border-olive-500 transition-colors"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-xs tracking-widest uppercase text-bark-500">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="border border-cream-300 bg-white px-4 py-3 text-sm text-bark-700 placeholder-bark-300 focus:outline-none focus:border-olive-500 transition-colors"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs tracking-widest uppercase text-bark-500">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-cream-300 bg-white px-4 py-3 text-sm text-bark-700 placeholder-bark-300 focus:outline-none focus:border-olive-500 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs tracking-widest uppercase text-bark-500">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="border border-cream-300 bg-white px-4 py-3 text-sm text-bark-700 focus:outline-none focus:border-olive-500 transition-colors"
        >
          <option value="">Select a topic</option>
          <option value="order">Order Inquiry</option>
          <option value="wholesale">Wholesale / B2B</option>
          <option value="product">Product Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs tracking-widest uppercase text-bark-500">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-cream-300 bg-white px-4 py-3 text-sm text-bark-700 placeholder-bark-300 focus:outline-none focus:border-olive-500 transition-colors resize-none"
          placeholder="Tell us how we can help…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>Sending…</>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}

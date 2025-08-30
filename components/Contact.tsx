"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS dashboard
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="card p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-xl border bg-black/40 text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-xl border bg-black/40 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded-xl border bg-black/40 text-white"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}

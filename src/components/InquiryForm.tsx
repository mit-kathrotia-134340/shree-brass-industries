"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const product = String(data.get("product") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Product interest: ${product}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal-500/30 bg-teal-500/10 p-8 text-center">
        <p className="font-display text-xl text-navy-900">Your email draft is ready.</p>
        <p className="mt-2 text-sm text-ink/70">
          Send it from your mail app, or message us on{" "}
          <a href={site.whatsapp.href} className="font-semibold text-teal-600">
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="company" label="Company" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" required />
      </div>
      <Field name="product" label="Product / drawing reference" />
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-navy-800">Requirement</span>
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-xl border border-navy-800/10 bg-white px-4 py-3 outline-none ring-teal-500/40 focus:ring-2"
          placeholder="Share sizes, material, quantity, drawing or sample notes."
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-navy-800">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-navy-800/10 bg-white px-4 py-3 outline-none ring-teal-500/40 focus:ring-2"
      />
    </label>
  );
}

import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need manufactured."
        text="Send a drawing, sample or specification. We will come back with material, process, finish and delivery."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-7 shadow-lift sm:p-10">
          <h2 className="display text-3xl">Enquiry</h2>
          <p className="mt-2 text-sm text-muted">We typically respond on email or WhatsApp with the next technical questions.</p>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-navy-950 p-8 text-white">
            <h2 className="font-display text-2xl">Works address</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-brass-400 hover:text-brass">
                  {p.label}: {p.display}
                </a>
              ))}
              <a href={site.whatsapp.href} className="block text-brass-400 hover:text-brass">
                WhatsApp: {site.whatsapp.display}
              </a>
              <a href={`mailto:${site.email}`} className="block text-brass-400 hover:text-brass">
                {site.email}
              </a>
            </div>
          </div>

          <a
            href={site.address.maps}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl bg-white p-6 shadow-lift transition hover:shadow-lg"
          >
            <h3 className="font-display text-lg text-navy-900">Find us on the map</h3>
            <p className="mt-2 text-sm text-muted">
              {site.address.line1}, {site.address.line2}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-brass-600">Open in Google Maps →</span>
          </a>

          <div className="rounded-3xl bg-white p-6 shadow-lift">
            <h3 className="font-display text-lg text-navy-900">Downloads</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-brass-600 hover:underline" href="/downloads/company-profile.pdf">
                  Company profile PDF
                </a>
              </li>
              <li>
                <a className="text-brass-600 hover:underline" href="/downloads/company-brochure.pdf">
                  32-page product brochure
                </a>
              </li>
              <li>
                <a className="text-brass-600 hover:underline" href="/downloads/iso-9001-certificate.pdf">
                  ISO 9001:2015 certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

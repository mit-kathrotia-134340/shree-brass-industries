import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";

const footerProducts = [
  { href: "/products/forging-parts", name: "Brass Forgings" },
  { href: "/products/cnc-machined-parts", name: "CNC Machined Components" },
  { href: "/products/turned-parts", name: "Turned Components" },
  { href: "/products/electrical-electronic", name: "Electrical Components" },
  { href: "/products/sanitary-gas-hardware", name: "Sanitary, Gas & Hardware" },
  { href: "/products/stainless-steel", name: "Stainless Steel Flanges & Fittings" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="relative mb-5 h-10 w-[210px]">
            <Image src="/images/logo.png" alt={site.name} fill className="object-contain object-left" />
          </div>
          <p className="max-w-[16rem] text-sm leading-relaxed text-white/60">
            ISO 9001:2015 certified manufacturer of precision brass components from Jamnagar, Gujarat.
          </p>
          <div className="mt-5 flex items-center gap-3 text-brass-400">
            <SocialIcon label="LinkedIn">
              <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.8-.6-3-2.2-3-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V20H10.5V9.5H13v1.4c.6-.9 1.7-2.2 4.1-2.2 3 0 4.9 2 4.9 6.2V20Z" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <path d="M14 8.5h2.5V5.8h-2.5c-2.3 0-3.8 1.6-3.8 4V12H8v2.8h2.2V20h2.8v-5.2H16l.5-2.8h-3.5v-1.7c0-.8.4-1.8 1-1.8Z" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <path d="M10 15.5v-7l6 3.5-6 3.5ZM21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9.2 2 12 2 12s0 2.8.4 4.8a2.5 2.5 0 0 0 1.8 1.8c2 0.4 7.8 0.4 7.8 0.4s5.8 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-2 .4-4.8.4-4.8s0-2.8-.4-4.8Z" />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-400">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brass-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-400">Products</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {footerProducts.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brass-400">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-400">Downloads</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <a href="/downloads/company-profile.pdf" className="hover:text-brass-400">
                Company Profile
              </a>
            </li>
            <li>
              <a href="/downloads/company-brochure.pdf" className="hover:text-brass-400">
                Product Brochure
              </a>
            </li>
            <li>
              <a href="/downloads/iso-9001-certificate.pdf" className="hover:text-brass-400">
                ISO 9001:2015 Certificate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-400">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <span className="mt-0.5 text-brass-400">
                <LocationIcon />
              </span>
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brass-400">
                <PhoneIcon />
              </span>
              <span className="space-y-1">
                <a href={site.phones[0].href} className="block hover:text-brass-400">
                  {site.phones[0].display}
                </a>
                <a href={site.phones[1].href} className="block hover:text-brass-400">
                  {site.phones[1].display}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brass-400">
                <MailIcon />
              </span>
              <a href={`mailto:${site.email}`} className="hover:text-brass-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <span>Privacy Policy</span>
            <span className="text-white/25">|</span>
            <span>Terms & Conditions</span>
            <span className="text-white/25">|</span>
            <span>Sitemap</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-brass-400" aria-label={label}>
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

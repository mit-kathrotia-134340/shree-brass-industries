import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="relative mb-5 h-11 w-[220px]">
            <Image src="/images/logo.png" alt={site.name} fill className="object-contain object-left" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/65">{site.tagline}. ISO 9001:2015 certified manufacturer, supplier and exporter from Jamnagar.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass-400">Navigate</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass-400">Downloads</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <a href="/downloads/company-profile.pdf" className="hover:text-teal-400">
                Company profile
              </a>
            </li>
            <li>
              <a href="/downloads/company-brochure.pdf" className="hover:text-teal-400">
                Product brochure
              </a>
            </li>
            <li>
              <a href="/downloads/iso-9001-certificate.pdf" className="hover:text-teal-400">
                ISO 9001:2015 certificate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass-400">Works</h3>
          <p className="text-sm leading-relaxed text-white/70">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </p>
          <p className="mt-4 space-y-1 text-sm text-white/70">
            <a href={site.phones[0].href} className="block hover:text-teal-400">
              {site.phones[0].display}
            </a>
            <a href={site.phones[1].href} className="block hover:text-teal-400">
              {site.phones[1].display}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-teal-400">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>ISO 9001:2015 · Certificate {site.iso.number}</p>
        </div>
      </div>
    </footer>
  );
}

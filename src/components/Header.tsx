"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt={site.name} width={180} height={34} className="h-8 w-auto object-contain object-left" priority />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-[13px] font-medium tracking-wide transition ${
                  active ? "border-b border-brass-400 pb-0.5 text-brass-400" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a href={site.phones[0].href} className="inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-white/80 hover:text-brass-400">
            <PhoneIcon />
            {site.phones[0].display}
          </a>
          <Link href="/contact" className="btn-primary !rounded-lg !px-5 !py-2.5">
            Request a Quote
            <ArrowRight />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-px w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base text-white/85">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full !rounded-lg">
              Request a Quote
              <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-brass" aria-hidden>
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}

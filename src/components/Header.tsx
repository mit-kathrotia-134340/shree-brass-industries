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
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="relative flex h-10 w-[210px] shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt={site.name} fill className="object-contain object-left" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition ${
                  active ? "text-teal-400" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.whatsapp.href} className="text-[13px] font-medium text-white/70 hover:text-teal-400">
            {site.phones[0].display}
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Request a quote
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/85"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

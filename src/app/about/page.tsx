import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const facts = [
  ["Company", "Shree Brass Industries"],
  ["Nature of business", "Manufacturer, supplier & exporter"],
  ["Location", "Jamnagar, Gujarat, India"],
  ["Core products", "Forging, CNC and turned brass parts"],
  ["Markets", "Domestic & international"],
  ["Commitment", "Quality, precision & timely delivery"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A brass manufacturing unit built around accuracy."
        text="We operate a manufacturing works in GIDC Dared, Jamnagar, with automatic and semi-automatic machines for a diverse and demanding range of brass components."
      />

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
          <Image src="/images/factory-hero.jpg" alt="Company facility" fill className="object-cover" />
        </div>
        <div>
          <p className="eyebrow">Works</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">We stand behind our products</h2>
          <div className="gold-line mt-5" />
          <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
            Shree Brass Industries manufactures brass products as per drawing and samples. The production cycle includes forging, CNC machining, turning, polishing, finishing and packing. Infrastructure is organised for world-class quality and accuracy, with a skilled team and documented inspection.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
            From Plot No. 4646, GIDC Phase-III, Dared, we supply OEM and industrial customers in India and overseas — with a focus on dimensional accuracy, surface finish and on-time delivery.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-px overflow-hidden rounded-3xl border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-white p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-teal-600">{k}</p>
              <p className="mt-2 font-display text-xl text-navy-900">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-8 py-20 lg:grid-cols-2">
        <article className="rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <h2 className="display text-3xl text-white">Why us</h2>
          <ul className="mt-6 space-y-3 text-white/75">
            {[
              "Broad range of brass products",
              "Professional and trained team",
              "Updated testing facilities",
              "Modern infrastructural unit",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-lift sm:p-10">
          <h2 className="display text-3xl">Our strength</h2>
          <ul className="mt-6 space-y-3 text-ink/75">
            {["Material control and research", "Dedicated production team", "Updated standards", "Quality assurance", "On-time delivery"].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/infrastructure" className="btn-dark mt-8">
            See infrastructure
          </Link>
        </article>
      </section>

      <section className="border-t border-navy-800/10 bg-paper py-12">
        <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-ink/70">ISO 9001:2015 · {site.iso.number} · Valid through {site.iso.expiry}</p>
          <Link href="/quality" className="btn-outline">
            Quality certificate
          </Link>
        </div>
      </section>
    </>
  );
}

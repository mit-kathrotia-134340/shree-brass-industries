import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Precision brass components for a wide range of critical applications."
        text="Plumbing and sanitary, automotive, electrical and electronics, pneumatic and hydraulic, industrial machinery and instrumentation."
      />
      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        {industries.map((ind) => (
          <article key={ind.slug} className="card grid sm:grid-cols-2">
            <div className="relative min-h-[200px]">
              <Image src={ind.image} alt={ind.name} fill className="object-cover" />
            </div>
            <div className="p-7">
              <h2 className="font-display text-2xl text-navy-900">{ind.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{ind.text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="container-page pb-20">
        <Link href="/contact" className="btn-primary">
          Talk to us about your application
        </Link>
      </section>
    </>
  );
}

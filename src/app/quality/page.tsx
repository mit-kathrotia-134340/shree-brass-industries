import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { qualityChecks } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Quality" };

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Precision in every step. Quality in every part."
        text={`${site.iso.standard} certified quality management for manufacturing and supply of precision brass components and brass machined parts.`}
      />

      <section className="container-page grid items-start gap-12 py-16 lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-white p-4 shadow-lift">
          <Image src="/images/iso-certificate.jpg" alt="ISO 9001:2015 certificate of registration" fill className="object-contain" />
        </div>
        <div>
          <p className="eyebrow">Certificate of registration</p>
          <h2 className="display mt-3 text-3xl">{site.iso.standard}</h2>
          <div className="gold-line mt-5" />
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["Certificate no.", site.iso.number],
              ["Certification body", site.iso.body],
              ["Initial registration", site.iso.registered],
              ["Valid through", site.iso.expiry],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-[0.16em] text-teal-600">{k}</dt>
                <dd className="mt-1 font-medium text-navy-900">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-ink/70">
            Scope: {site.iso.scope}, at {site.address.line1}, {site.address.line2}, {site.address.line3}.
          </p>
          <a href="/downloads/iso-9001-certificate.pdf" className="btn-dark mt-8">
            Download PDF
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="display text-3xl">Inspection stages</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualityChecks.map((item, i) => (
              <div key={item} className="rounded-2xl border border-navy-800/10 p-6">
                <p className="font-display text-2xl text-brass-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-medium text-navy-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-5 py-16 md:grid-cols-3">
        {[
          ["/images/qc-caliper.jpg", "Dimensional checks"],
          ["/images/qc-cmm.jpg", "Precision measurement"],
          ["/images/qc-station.jpg", "Final inspection station"],
        ].map(([src, alt]) => (
          <div key={alt} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </section>

      <section className="container-page pb-20">
        <Link href="/contact" className="btn-primary">
          Discuss inspection requirements
        </Link>
      </section>
    </>
  );
}

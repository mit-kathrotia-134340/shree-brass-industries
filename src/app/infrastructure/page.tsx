import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { facilities, processSteps } from "@/lib/data";

export const metadata: Metadata = { title: "Infrastructure" };

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="A works equipped for precision, quality and consistency."
        text="CNC machining, turning, forging and a quality-control lab — organised to handle both bulk and urgent OEM requirements."
      />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        {facilities.map((f) => (
          <article key={f.title} className="card">
            <div className="relative aspect-[16/9]">
              <Image src={f.image} alt={f.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl text-navy-900">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="container-page">
          <p className="eyebrow text-brass-400">Process</p>
          <h2 className="display mt-3 text-3xl text-white">Six stages from brass to dispatch</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-white/10 p-6">
                <p className="text-brass-400">{s.n}</p>
                <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { categories, industries, processSteps, whyUs } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-navy-950 text-white">
        <Image src="/images/factory-hero.jpg" alt="Shree Brass Industries works" fill priority className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,200,0.16),transparent_40%)]" />

        <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-20">
          <p className="eyebrow text-teal-400">Jamnagar · Gujarat · India</p>
          <h1 className="display mt-5 max-w-3xl text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Precision in brass.
            <span className="block text-brass-400">Perfection in every part.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            ISO 9001:2015 certified manufacturer of forging parts, CNC machined parts and turned components — made to your drawing or sample.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">
              Explore products
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request a quote
            </Link>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["ISO 9001:2015", "Certified QMS"],
              ["OEM custom", "Drawing & sample"],
              ["Export ready", "India & overseas"],
              ["±0.01 mm", "CNC capability"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-lg text-white">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About the company</p>
          <h2 className="display mt-3 text-4xl">Driven by precision. Defined by quality.</h2>
          <div className="gold-line mt-5" />
          <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
            Shree Brass Industries is a trusted manufacturer, supplier and exporter of high-quality brass components from GIDC Dared, Jamnagar. We specialise in forging parts, CNC machined parts and turned parts, produced on automatic and semi-automatic machines with in-house inspection.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
            The production cycle covers raw material, forging, CNC machining, turning, inspection and dispatch — built around dimensional accuracy, finish and on-time delivery for OEM and industrial customers.
          </p>
          <Link href="/about" className="btn-outline mt-8">
            Our story
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
          <Image src="/images/about-parts.jpg" alt="Precision brass components in production" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-teal-400">Product range</p>
              <h2 className="display mt-3 text-4xl text-white">Engineered with precision. Built for performance.</h2>
            </div>
            <Link href="/products" className="btn-ghost w-fit">
              View full catalogue
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((cat) => (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="group card bg-navy-900">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-white">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{cat.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Manufacturing</p>
        <h2 className="display mt-3 text-4xl">From premium brass to finished components</h2>
        <div className="gold-line mt-5" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.n} className="rounded-2xl bg-white p-6 shadow-lift">
              <p className="font-display text-3xl text-brass-500">{step.n}</p>
              <h3 className="mt-3 font-display text-xl text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/iso-certificate.jpg" alt="ISO 9001:2015 certificate" fill className="object-contain bg-paper p-4" />
          </div>
          <div>
            <p className="eyebrow">Quality management</p>
            <h2 className="display mt-3 text-4xl">{site.iso.standard}</h2>
            <div className="gold-line mt-5" />
            <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
              Assessed for manufacturing and supply of precision brass components and brass machined parts. Certificate {site.iso.number}, issued by {site.iso.body}, valid through {site.iso.expiry}.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              {["Raw material and in-process inspection", "Dimensional, thread and finish checks", "Final inspection before packing and dispatch"].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quality" className="btn-dark">
                Quality systems
              </Link>
              <a href="/downloads/iso-9001-certificate.pdf" className="btn-outline">
                Download certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Industries served</p>
        <h2 className="display mt-3 text-4xl">Components across critical applications</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <article key={ind.slug} className="group relative min-h-[240px] overflow-hidden rounded-2xl">
              <Image src={ind.image} alt={ind.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-xl">{ind.name}</h3>
                <p className="mt-1 text-sm text-white/70">{ind.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-teal-400">Why Shree Brass</p>
            <h2 className="display mt-3 text-4xl text-white">Quality. Accuracy. On-time delivery.</h2>
            <p className="mt-5 max-w-lg text-white/70">We stand behind our products — custom brass manufacturing with modern infrastructure, trained people and documented quality control.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <Image src="/images/parts-hero.jpg" alt="" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-paper/80" />
        <div className="container-page relative text-center">
          <p className="eyebrow">Start a requirement</p>
          <h2 className="display mx-auto mt-3 max-w-2xl text-4xl">Send a drawing, sample or specification</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">Share your brass or stainless requirement. We will confirm material, process, finish and lead time.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Request a quote
            </Link>
            <a href={site.whatsapp.href} className="btn-outline">
              WhatsApp {site.whatsapp.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

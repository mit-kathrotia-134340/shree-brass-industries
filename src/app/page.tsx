import Image from "next/image";
import Link from "next/link";
import { industries, processSteps, whyUs } from "@/lib/data";
import { site } from "@/lib/site";

const heroStats = [
  { icon: "shield", title: "ISO 9001:2015", text: "Certified quality system" },
  { icon: "cog", title: "OEM Manufacturing", text: "Drawing & sample based" },
  { icon: "globe", title: "Global Supply", text: "India & overseas" },
  { icon: "target", title: "±0.01 mm CNC", text: "Precision CNC capability" },
];

const aboutStats = [
  { icon: "badge", value: "20+", label: "Years of expertise", text: "Precision brass components manufacturing" },
  { icon: "users", value: "500+", label: "Precision components", text: "Custom, standard and OEM products" },
  { icon: "cube", value: "10M+", label: "Components supplied", text: "Delivered to industrial customers worldwide" },
];

const homeProducts = [
  {
    slug: "forging-parts",
    name: "Brass Forgings",
    short: "High-strength forged components for demanding applications.",
    image: "/images/home/home-prod-forgings.jpg",
  },
  {
    slug: "cnc-machined-parts",
    name: "CNC Machined Components",
    short: "Close-tolerance CNC components for critical applications.",
    image: "/images/home/home-prod-cnc.jpg",
  },
  {
    slug: "turned-parts",
    name: "Turned Components",
    short: "Precision turned parts with consistent quality and finish.",
    image: "/images/products/turned-knurled-nut.jpg",
  },
  {
    slug: "electrical-electronic",
    name: "Electrical & Electronic Components",
    short: "Connectors, terminals and custom components.",
    image: "/images/home/home-prod-electrical.jpg",
  },
  {
    slug: "sanitary-gas-hardware",
    name: "Sanitary, Gas & Hardware Components",
    short: "Reliable components for sanitary, gas and hardware applications.",
    image: "/images/home/home-prod-sanitary.jpg",
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel Flanges & Fittings",
    short: "SS 304, 316 flanges, pipes and fittings.",
    image: "/images/products/sorf-4.jpg",
  },
];

const isoChecks = [
  "Raw material and in-process inspection",
  "Dimensional and thread inspection",
  "Final product inspection",
  "Traceable quality documentation",
];

const industryIcons = ["plumbing", "automotive", "electrical", "pneumatic", "machinery", "instrumentation"] as const;
const whyIcons = ["material", "machine", "people", "iso", "drawing", "export"] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[640px] flex-col overflow-hidden bg-navy-950 text-white lg:min-h-[720px]">
        <Image
          src="/images/home/home-hero-cnc.jpg"
          alt="CNC machining of precision brass component"
          fill
          priority
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25" />

        <div className="container-page relative flex flex-1 flex-col justify-center py-14 lg:py-16">
          <p className="eyebrow text-brass-400">Jamnagar, Gujarat · India</p>
          <h1 className="mt-4 max-w-2xl font-sans text-[2.65rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Precision in Brass.
            <span className="block text-brass-400">Built Into Every Part.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
            ISO 9001:2015 certified manufacturer of precision brass forgings, CNC machined parts and turned components,
            manufactured to your drawing, specification or sample.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary !rounded-lg">
              Request a Quote
              <ArrowRight />
            </Link>
            <Link href="/products" className="btn-outline-light !rounded-lg">
              Explore Products
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-navy-950/90 backdrop-blur-sm">
          <div className="container-page grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {heroStats.map((item) => (
              <div key={item.title} className="flex gap-3 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brass-500/50 text-brass-400">
                  <StatIcon name={item.icon} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-white/55">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow">About the company</p>
            <h2 className="display mt-3 text-[2rem] leading-[1.15] sm:text-[2.35rem]">
              Driven by precision.
              <span className="block text-brass-600">Defined by quality.</span>
            </h2>
            <div className="gold-line mt-5" />
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              Shree Brass Industries is a trusted manufacturer, supplier and exporter of high-quality brass components from
              GIDC Dared, Jamnagar. We specialise in forging parts, CNC machined parts and turned components, manufactured
              to your drawing, specification or sample.
            </p>
            <Link href="/about" className="btn-outline-navy mt-8">
              Our Story
              <ArrowRight />
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6] lg:aspect-auto lg:h-[420px]">
            <Image src="/images/home/home-about-brass.jpg" alt="Precision brass fittings" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>

          <div className="divide-y divide-line rounded-2xl bg-white/60 px-1 py-2 lg:bg-transparent lg:px-0">
            {aboutStats.map((stat) => (
              <div key={stat.value} className="flex gap-4 px-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-brass-600">
                  <AboutStatIcon name={stat.icon} />
                </span>
                <div>
                  <p className="font-sans text-2xl font-bold leading-none text-navy-900">{stat.value}</p>
                  <p className="mt-1.5 text-sm font-semibold text-navy-900">{stat.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brass-400">Product range</p>
              <h2 className="display mt-3 max-w-xl text-[2rem] leading-tight text-white sm:text-[2.35rem]">
                Engineered with precision. Built for performance.
              </h2>
            </div>
            <Link href="/products" className="btn-outline-light !rounded-lg">
              View All Products
              <ArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProducts.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white text-navy-900 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image src={cat.image} alt={cat.name} fill className="object-contain p-5 transition duration-500 group-hover:scale-105" />
                </div>
                <div className="relative flex flex-1 flex-col p-5 pt-3">
                  <h3 className="pr-12 text-base font-semibold">{cat.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{cat.short}</p>
                  <span className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition group-hover:border-brass-500 group-hover:text-brass-600">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Manufacturing</p>
          <h2 className="display mt-3 max-w-2xl text-[2rem] leading-tight sm:text-[2.35rem]">
            From premium brass to finished components
          </h2>
          <div className="gold-line mt-5" />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <li key={step.n} className="relative text-center">
                <div className="relative mx-auto max-w-[10.5rem]">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                  <span className="absolute left-1/2 top-full z-[1] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brass text-xs font-bold text-navy-950">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-8 text-sm font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.text}</p>
                {index < processSteps.length - 1 && (
                  <span className="pointer-events-none absolute right-[-8px] top-[4rem] hidden text-brass-500 lg:block" aria-hidden>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-12">
          <div className="mx-auto w-full max-w-sm rounded-2xl border-2 border-brass-500 bg-white p-4 shadow-lift lg:mx-0">
            <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-brass-600">
              Quality certification
            </p>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white">
              <Image src="/images/iso-certificate.jpg" alt="ISO 9001:2015 certificate" fill className="object-contain" />
            </div>
          </div>

          <div>
            <p className="eyebrow">Quality management</p>
            <h2 className="display mt-3 text-[2rem] leading-tight sm:text-[2.35rem]">{site.iso.standard} Certified</h2>
            <div className="gold-line mt-5" />
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              Our quality management system supports consistent manufacturing, inspection and on-time delivery across all
              precision components. Certificate {site.iso.number}, valid through {site.iso.expiry}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quality" className="btn-primary !rounded-lg">
                Quality Systems
                <ArrowRight />
              </Link>
              <a href="/downloads/iso-9001-certificate.pdf" className="btn-outline-navy">
                Download Certificate
                <ArrowRight />
              </a>
            </div>
          </div>

          <ul className="space-y-4 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2">
            {isoChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy-900">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brass-400">Industries served</p>
              <h2 className="display mt-3 text-[2rem] leading-tight text-white sm:text-[2.35rem]">
                Components across critical applications
              </h2>
            </div>
            <Link href="/industries" className="btn-outline-light !rounded-lg">
              View All Industries
              <ArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map((ind, index) => (
              <article key={ind.slug} className="text-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={ind.image} alt={ind.name} fill className="object-cover" />
                </div>
                <span className="mx-auto mt-4 flex h-9 w-9 items-center justify-center text-brass-400">
                  <IndustryIcon name={industryIcons[index]} />
                </span>
                <h3 className="mt-2 text-sm font-semibold">{ind.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{ind.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="eyebrow">Why Shree Brass</p>
            <h2 className="display mt-3 text-[2rem] leading-[1.15] sm:text-[2.35rem]">
              Quality. Accuracy.
              <span className="block">On-Time Delivery.</span>
            </h2>
            <div className="gold-line mt-5" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              We stand behind our products — custom brass manufacturing with modern infrastructure, skilled people and a
              strong focus on quality and on-time delivery.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item, index) => (
              <div key={item.title} className="rounded-xl bg-white p-5 shadow-[0_8px_28px_-18px_rgba(11,18,32,0.35)]">
                <span className="flex h-9 w-9 items-center justify-center text-brass-600">
                  <WhyIcon name={whyIcons[index]} />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="container-page flex flex-col justify-center bg-[#ECEFF3] py-16 lg:max-w-none lg:py-20 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          <p className="eyebrow">Start a requirement</p>
          <h2 className="display mt-3 text-[2rem] leading-tight sm:text-[2.35rem]">
            Send us your drawing, sample or specification.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Share your brass component requirements. We will review and get back to you with the next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/contact" className="btn-primary !rounded-lg">
              Request a Quote
              <ArrowRight />
            </Link>
            <a href={site.phones[0].href} className="btn-contact">
              <PhoneOutline />
              Call {site.phones[0].display}
            </a>
            <a href={`mailto:${site.email}`} className="btn-contact">
              <MailOutline />
              {site.email}
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <Image src="/images/home/home-cta-brass.jpg" alt="" fill className="object-cover" />
        </div>
      </section>
    </>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function StatIcon({ name }: { name: string }) {
  const className = "h-5 w-5";
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M12 3 5 6.5v5.2c0 4.2 2.8 8 7 9.3 4.2-1.3 7-5.1 7-9.3V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (name === "cog") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AboutStatIcon({ name }: { name: string }) {
  const className = "h-6 w-6";
  if (name === "badge") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 3 5 6.5v5.2c0 4.2 2.8 8 7 9.3 4.2-1.3 7-5.1 7-9.3V6.5L12 3Z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M16 14.2c2.2.4 3.8 2.2 4.3 4.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" />
      <path d="M12 20V11.5M4 7.5l8 4 8-4" />
    </svg>
  );
}

function IndustryIcon({ name }: { name: (typeof industryIcons)[number] }) {
  const className = "h-5 w-5";
  if (name === "plumbing") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M8 14h8M10 14V8a2 2 0 1 1 4 0v6" />
        <path d="M6 20h12" />
      </svg>
    );
  }
  if (name === "automotive") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 17H3v-4l2-5h14l2 5v4h-2" />
      </svg>
    );
  }
  if (name === "electrical") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
      </svg>
    );
  }
  if (name === "pneumatic") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M8 12h8" />
      </svg>
    );
  }
  if (name === "machinery") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function WhyIcon({ name }: { name: (typeof whyIcons)[number] }) {
  const className = "h-5 w-5";
  if (name === "material") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" />
        <path d="M12 20V11.5M4 7.5l8 4 8-4" />
      </svg>
    );
  }
  if (name === "machine") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <rect x="3" y="10" width="18" height="9" rx="1.5" />
        <path d="M7 10V7h10v3M8 15h3M16 14.5v1" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M16 14.2c2.2.4 3.8 2.2 4.3 4.8" />
      </svg>
    );
  }
  if (name === "iso") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M12 3 5 6.5v5.2c0 4.2 2.8 8 7 9.3 4.2-1.3 7-5.1 7-9.3V6.5L12 3Z" />
      </svg>
    );
  }
  if (name === "drawing") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M7 3h8l5 5v13H7V3Z" />
        <path d="M15 3v5h5M10 13h6M10 17h4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M3 12h5l2-6 4 12 2-6h5" />
    </svg>
  );
}

function PhoneOutline() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brass-600" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}

function MailOutline() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brass-600" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

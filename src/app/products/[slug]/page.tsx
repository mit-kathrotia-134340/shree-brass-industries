import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { categories, getCategory } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  return { title: cat?.name ?? "Product" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();

  return (
    <>
      <PageHero eyebrow="Product range" title={cat.name} text={cat.description} />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {cat.items.map((item) => (
              <article key={item.slug} className="card">
                <div className="relative aspect-square bg-white">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
                <div className="border-t border-navy-800/5 p-4">
                  <h2 className="font-display text-lg text-navy-900">{item.name}</h2>
                  {item.spec && <p className="mt-1 text-xs leading-relaxed text-ink/60">{item.spec}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl bg-navy-950 p-6 text-white lg:sticky lg:top-24">
          <h2 className="font-display text-xl">Specifications</h2>
          <dl className="mt-5 space-y-4 text-sm">
            {cat.specs.map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-teal-400">{s.label}</dt>
                <dd className="mt-1 text-white/80">{s.value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/contact" className="btn-primary mt-8 w-full">
            Enquire this range
          </Link>
          <p className="mt-4 text-xs text-white/45">
            Product images are representative. Final dimensions, tolerances, inspection and certification follow the purchase specification.
          </p>
        </aside>
      </section>
    </>
  );
}

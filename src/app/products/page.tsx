import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { categories } from "@/lib/data";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Precision brass and metal components."
        text="Custom components manufactured as per drawing, sample or specified dimensions — forging, CNC, turning, electrical parts, sanitary and gas fittings, and stainless-steel flanges."
      />
      <section className="container-page grid gap-8 py-16">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className={`card group grid overflow-hidden md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative min-h-[260px] md:min-h-[320px]">
              <Image src={cat.cover} alt={cat.name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="eyebrow">0{i + 1} / 0{categories.length}</p>
              <h2 className="display mt-3 text-3xl">{cat.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{cat.description}</p>
              <span className="mt-6 text-sm font-semibold text-teal-600">View range →</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

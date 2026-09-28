export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,200,0.18),transparent_45%)]" />
      <div className="container-page relative py-16 sm:py-20">
        <p className="eyebrow text-teal-400">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-4xl text-white sm:text-5xl">{title}</h1>
        <div className="gold-line mt-5" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">{text}</p>
      </div>
    </section>
  );
}

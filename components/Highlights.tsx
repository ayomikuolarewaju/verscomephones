import { highlights } from "@/lib/config";

export default function Highlights() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl text-balance font-display text-4xl tracking-tight md:text-5xl">Why people buy from us</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink/10 ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div key={h.title} className="bg-cream p-7">
              <p className="font-display text-3xl text-gold-deep">0{i + 1}</p>
              <h3 className="mt-6 text-lg font-medium">{h.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import OrderButton from "./OrderButton";
import { products } from "@/lib/config";

export default function Products() {
  return (
    <section id="phones" className="bg-white/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest">The collection</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Choose your phone</h2>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {products.map((p, i) => (
            <article key={p.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={i % 2 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_30px_60px_-30px_rgba(20,40,30,.35)] ring-1 ring-ink/5">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={1080}
                    height={1080}
                    sizes="(min-width:768px) 520px, 100vw"
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-forest">{p.tag}</span>
                  {p.stock ? (
                    <span className="rounded-full bg-gold/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold-deep">Only {p.stock} left</span>
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{p.name}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/65">{p.blurb}</p>

                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 ring-1 ring-ink/10">
                  {p.specs.map((s) => (
                    <div key={s.label} className="bg-cream p-4">
                      <dt className="text-xs uppercase tracking-wider text-ink/45">{s.label}</dt>
                      <dd className="mt-1 font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-ink/45">Colour</span>
                  <ul className="flex gap-2">
                    {p.colours.map((c) => (
                      <li key={c.name} title={c.name} className="h-6 w-6 rounded-full ring-2 ring-cream ring-offset-1 ring-offset-ink/20" style={{ background: c.hex }}>
                        <span className="sr-only">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <OrderButton product={p.name} />
                  <p className="font-display text-3xl">{p.price ?? <span className="text-base text-ink/55">Chat for today&apos;s price</span>}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

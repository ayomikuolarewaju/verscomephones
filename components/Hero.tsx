import Image from "next/image";
import OrderButton from "./OrderButton";
import { store } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/25 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.05fr_1fr] md:pb-28 md:pt-24">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" /> Limited stock · Lagos
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Big screens.<br />
            Bigger battery.<br />
            <em className="text-forest">One chat</em> away.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
            Brand-new, boxed smartphones in elegant finishes. Pick your phone, tap the button, and we handle the rest on WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <OrderButton />
            <a href="#phones" className="px-2 py-3 text-[15px] font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline">
              Browse phones →
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/50">{store.location} · Replies fast</p>
        </div>

        <div className="reveal relative [animation-delay:.15s]">
          <div className="absolute inset-4 -z-10 rounded-[2rem] bg-forest/10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_40px_80px_-30px_rgba(20,40,30,.45)] ring-1 ring-ink/5">
            <Image
              src="/images/arbutus-colours.jpg"
              alt="Arbutus Ultra phones in champagne, titanium and black"
              width={1080}
              height={909}
              priority
              sizes="(min-width:768px) 520px, 100vw"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-ink px-5 py-3 text-cream shadow-xl">
            <p className="font-display text-2xl leading-none">5,000mAh</p>
            <p className="mt-1 text-xs text-cream/60">All-day battery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

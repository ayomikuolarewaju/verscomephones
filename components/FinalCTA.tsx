import OrderButton from "./OrderButton";
import { store } from "@/lib/config";

export default function FinalCTA() {
  return (
    <>
      <section className="px-5 pb-20 md:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-cream md:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Ready for your next phone?
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-cream/65">Send us a message and get your answer in minutes.</p>
          <div className="relative mt-9">
            <OrderButton variant="light" label="Start chat on WhatsApp" />
          </div>
        </div>
      </section>
      <footer className="border-t border-ink/10 pb-28 pt-10 text-center text-sm text-ink/50 md:pb-10">
        <p className="font-display text-lg text-ink">{store.name}</p>
        <p className="mt-1">{store.location}</p>
        <p className="mt-4">© {store.name}. All rights reserved.</p>
      </footer>
    </>
  );
}

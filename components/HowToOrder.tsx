const steps = [
  { t: "Pick your phone", d: "Choose the model and colour you like from the collection above." },
  { t: "Tap the button", d: "WhatsApp opens with your message already written. Just hit send." },
  { t: "Confirm & receive", d: "We confirm stock, price and delivery with you, then your phone is on its way." },
];

export default function HowToOrder() {
  return (
    <section id="how" className="bg-forest py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">Ordering is simple</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-cream/25 pt-6">
              <span className="font-display text-5xl text-gold">{i + 1}</span>
              <h3 className="mt-4 text-xl font-medium">{s.t}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

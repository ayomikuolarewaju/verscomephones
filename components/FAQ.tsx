import { faqs } from "@/lib/config";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center font-display text-4xl tracking-tight md:text-5xl">Questions, answered</h2>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-xl leading-none transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

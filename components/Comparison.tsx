import { comparison } from "@/lib/config";

export default function Comparison() {
  return (
    <section className="bg-white/50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest">Side by side</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Choose your match</h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/10">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="bg-ink text-cream">
                {comparison.headers.map((h, i) => (
                  <th key={i} className="px-4 py-4 font-display text-lg font-normal sm:px-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {comparison.rows.map(([label, a, b]) => (
                <tr key={label}>
                  <th scope="row" className="px-4 py-3.5 text-xs font-medium uppercase tracking-wider text-ink/50 sm:px-6">{label}</th>
                  <td className="px-4 py-3.5 font-medium sm:px-6">{a}</td>
                  <td className="px-4 py-3.5 font-medium sm:px-6">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

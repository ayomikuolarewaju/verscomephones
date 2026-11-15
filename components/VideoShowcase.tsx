import { videos } from "@/lib/config";

export default function VideoShowcase() {
  const portrait = videos.filter((v) => v.orientation === "portrait");
  const landscape = videos.filter((v) => v.orientation === "landscape");
  return (
    <section id="watch" className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Real phones, real footage</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">See them in action</h2>
        </div>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12 lg:grid-cols-[minmax(0,340px)_1fr]">
          {portrait.map((v) => (
            <figure key={v.src} className="mx-auto w-full max-w-[320px]">
              <video
                controls
                playsInline
                preload="metadata"
                poster={v.poster}
                className="aspect-[9/16] w-full rounded-[1.75rem] bg-black object-cover ring-1 ring-white/10 shadow-2xl"
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-center text-sm text-cream/55">{v.title}</figcaption>
            </figure>
          ))}
          {landscape.map((v) => (
            <figure key={v.src}>
              <video
                controls
                playsInline
                preload="metadata"
                poster={v.poster}
                className="aspect-video w-full rounded-[1.75rem] bg-black object-cover ring-1 ring-white/10 shadow-2xl"
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-center text-sm text-cream/55">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

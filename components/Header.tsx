import OrderButton from "./OrderButton";
import { store } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-xl tracking-tight">
          {store.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          <a href="#phones" className="hover:text-ink">Phones</a>
          <a href="#watch" className="hover:text-ink">Watch</a>
          <a href="#how" className="hover:text-ink">How to order</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <OrderButton label="Chat with us" className="!px-5 !py-2.5 !text-sm" />
      </div>
    </header>
  );
}

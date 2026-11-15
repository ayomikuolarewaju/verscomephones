import WhatsAppIcon from "./WhatsAppIcon";
import { orderMessage, whatsappLink } from "@/lib/config";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={whatsappLink(orderMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,.6)] transition hover:scale-110 md:grid"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-cream/90 p-3 backdrop-blur-xl md:hidden">
        <a
          href={whatsappLink(orderMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-forest py-3.5 font-medium text-cream"
        >
          <WhatsAppIcon /> Order on WhatsApp
        </a>
      </div>
    </>
  );
}

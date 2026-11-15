import WhatsAppIcon from "./WhatsAppIcon";
import { orderMessage, whatsappLink } from "@/lib/config";

type Props = {
  product?: string;
  label?: string;
  variant?: "solid" | "light" | "outline";
  className?: string;
};

const styles = {
  solid: "bg-forest text-cream hover:bg-forest-deep shadow-[0_10px_30px_-10px_rgba(20,60,42,.7)]",
  light: "bg-cream text-forest-deep hover:bg-white",
  outline: "border border-ink/20 text-ink hover:bg-ink hover:text-cream",
};

export default function OrderButton({ product, label = "Order on WhatsApp", variant = "solid", className = "" }: Props) {
  return (
    <a
      href={whatsappLink(orderMessage(product))}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-medium transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

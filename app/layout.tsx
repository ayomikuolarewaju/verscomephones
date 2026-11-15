import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { store } from "@/lib/config";


export const metadata: Metadata = {
  title: `${store.name} — Premium smartphones, order on WhatsApp`,
  description: `Brand-new boxed smartphones in ${store.location}. Pick your phone and order in one WhatsApp chat.`,
  openGraph: {
    title: store.name,
    description: store.tagline,
    images: ["/images/arbutus-colours.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#f7f2ea" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}

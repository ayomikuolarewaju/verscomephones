// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the page is driven from here.
// ─────────────────────────────────────────────────────────────

export const store = {
  name: "Verscomm",
  tagline: "Premium phones, ordered in one chat.",
  // International format, digits only, no "+" (e.g. Nigeria: 234 + number without leading 0)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348143337558",
  location: "Lagos, Nigeria",
};

export type Product = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  image: string;
  imageAlt: string;
  // Set a price string like "₦185,000" to show it. Leave null to show "Chat for today's price".
  price: string | null;
  colours: { name: string; hex: string }[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "arbutus-ultra",
    name: "Arbutus Ultra",
    tag: "Flagship",
    blurb:
      "A big-battery flagship look with a triple-lens camera system, available in three refined finishes.",
    image: "/images/arbutus-colours.jpg",
    imageAlt: "Arbutus Ultra phones in gold, titanium grey and black",
    price: null,
    colours: [
      { name: "Champagne", hex: "#d9c9b0" },
      { name: "Titanium", hex: "#a9adaf" },
      { name: "Black", hex: "#1b1b1d" },
    ],
    specs: [
      { label: "Rear camera", value: "108MP" },
      { label: "Front camera", value: "50MP" },
      { label: "Battery", value: "5000mAh" },
      { label: "Memory", value: "16GB RAM · 1TB" },
    ],
  },
  {
    id: "sayeah-a17",
    name: "SayYeah A17",
    tag: "Everyday value",
    blurb:
      "A roomy 6.8\" screen, dual SIM and USB-C charging in a sleek blue finish. Made for everyday life.",
    image: "/images/sayeah-a17.jpg",
    imageAlt: "SayYeah A17 phone in blue, front and back, with retail boxes",
    price: null,
    colours: [{ name: "Midnight Blue", hex: "#24407a" }],
    specs: [
      { label: "Display", value: '6.8" HD+ incell' },
      { label: "SIM", value: "Dual SIM" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Camera", value: "Triple-lens" },
    ],
  },
];

export const videos = [
  {
    title: "SayYeah A17 walkthrough",
    src: "/videos/a17-demo.mp4",
    poster: "/videos/a17-demo.jpg",
    orientation: "portrait" as const,
  },
  {
    title: "Arbutus Ultra walkthrough",
    src: "/videos/arbutus-demo.mp4",
    poster: "/videos/arbutus-demo.jpg",
    orientation: "landscape" as const,
  },
];

export const highlights = [
  { title: "Brand new, boxed", text: "Every phone arrives sealed in its original retail box with IMEI on the label." },
  { title: "Dual SIM ready", text: "Two lines, one phone. Keep work and personal numbers separate." },
  { title: "All-day battery", text: "5000mAh class batteries built to get you from morning to night." },
  { title: "See before you buy", text: "Ask for more photos or a live video of the exact phone in stock." },
];

export const faqs = [
  { q: "How do I order?", a: "Tap any “Order on WhatsApp” button. A message with your chosen phone is ready to send. We confirm stock, price and delivery with you in the chat." },
  { q: "Can I see the phone before I pay?", a: "Yes. Ask for a short video or extra photos of the exact unit, and we will send them on WhatsApp." },
  { q: "Do you deliver?", a: "Yes. Tell us your area in the chat and we will confirm the delivery options and timing." },
  { q: "What payment options do you accept?", a: "We will share the available payment options in the chat once you confirm your order." },
  { q: "Is there a warranty?", a: "Ask us about warranty and after-sales support for the model you want. We will explain exactly what is covered." },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const orderMessage = (productName?: string) =>
  productName
    ? `Hello ${store.name}, I'd like to order the ${productName}. Is it available?`
    : `Hello ${store.name}, I'd like to know more about your phones.`;

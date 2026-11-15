// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the page is driven from here.
// ─────────────────────────────────────────────────────────────

export const store = {
  name: "Verscomm",
  tagline: "Premium phones, ordered in one chat.",
  // International format, digits only, no "+" (e.g. Nigeria: 234 + number without leading 0)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000",
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
  stock?: number; // shows an "Only N left" badge
  colours: { name: string; hex: string }[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "arbutus-ultra",
    name: "Arbutus Ultra",
    tag: "Flagship",
    blurb:
      "Massive 1TB storage, a 108MP camera and a 5,000mAh battery on 5G, in three refined finishes. Brand new and unused.",
    image: "/images/arbutus-colours.jpg",
    imageAlt: "Arbutus Ultra phones in gold, titanium grey and black",
    price: "₦185,000",
    stock: 4,
    colours: [
      { name: "Champagne", hex: "#d9c9b0" },
      { name: "Titanium", hex: "#a9adaf" },
      { name: "Black", hex: "#1b1b1d" },
    ],
    specs: [
      { label: "Memory", value: "16GB RAM · 1TB" },
      { label: "Rear camera", value: "108MP" },
      { label: "Front camera", value: "50MP" },
      { label: "Battery", value: "5,000mAh" },
      { label: "Network", value: "5G" },
      { label: "Software", value: "Android 14" },
    ],
  },
  {
    id: "sayeah-a17",
    name: "SayYeah A17",
    tag: "Everyday value",
    blurb:
      "A stylish Android phone with a roomy 6.8\" screen, dual SIM and USB-C. Great for WhatsApp, TikTok, YouTube and everyday life. Brand new and unused.",
    image: "/images/sayeah-a17.jpg",
    imageAlt: "SayYeah A17 phone in blue, front and back, with retail boxes",
    price: "₦180,000",
    stock: 2,
    colours: [{ name: "Midnight Blue", hex: "#24407a" }],
    specs: [
      { label: "Memory", value: "6GB RAM · 128GB" },
      { label: "Rear camera", value: "50MP" },
      { label: "Display", value: '6.8" HD+ incell' },
      { label: "SIM", value: "Dual SIM" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Software", value: "Android 14" },
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
  { title: "Big battery, big storage", text: "Up to 5,000mAh and up to 1TB, so your phone keeps up all day." },
  { title: "Delivery available", text: "Based in Lagos with delivery available. Ask for photos or a video of your exact unit." },
];

export const faqs = [
  { q: "How do I order?", a: "Tap any “Order on WhatsApp” button. A message with your chosen phone is ready to send. Stock is limited, so we confirm availability and delivery with you in the chat." },
  { q: "Can I see the phone before I pay?", a: "Yes. Ask for a short video or extra photos of the exact unit, and we will send them on WhatsApp." },
  { q: "Do you deliver?", a: "Yes, delivery is available from Lagos. Tell us your area in the chat and we will confirm the options and timing." },
  { q: "What payment options do you accept?", a: "We will share the available payment options in the chat once you confirm your order." },
  { q: "Is there a warranty?", a: "Ask us about warranty and after-sales support for the model you want. We will explain exactly what is covered." },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const orderMessage = (productName?: string) =>
  productName
    ? `Hello ${store.name}, I'd like to order the ${productName}. Is it available?`
    : `Hello ${store.name}, I'd like to know more about your phones.`;

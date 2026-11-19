// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the page is driven from here.
// ─────────────────────────────────────────────────────────────

export const store = {
  name: "Broadlink Store",
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
  // Price string like "₦180,000". Leave null to show "Chat for today's price".
  price: string | null;
  wasPrice?: string; // crossed-out regular price
  save?: string; // e.g. "₦55,000"
  stock?: number; // shows an "Only N left" badge
  bestFor: string;
  colours: { name: string; hex: string }[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "arbutus-ultra",
    name: "Arbutus 5G",
    tag: "Flagship",
    blurb:
      "Built for heavy phone users, vendors and content creators who never want to see “Storage Full” again. 16GB RAM, 1TB storage and a 108MP camera, on 5G.",
    bestFor: "Content creators, online vendors and multitaskers",
    image: "/images/arbutus-colours.jpg",
    imageAlt: "Arbutus 5G phones in gold, titanium grey and black",
    price: "₦180,000",
    wasPrice: "₦235,000",
    save: "₦55,000",
    stock: 4,
    colours: [
      { name: "Champagne", hex: "#d9c9b0" },
      { name: "Titanium", hex: "#a9adaf" },
      { name: "Black", hex: "#1b1b1d" },
    ],
    specs: [
      { label: "Memory", value: "16GB RAM · 1TB" },
      { label: "Rear camera", value: "108MP" },
      { label: "Selfie camera", value: "50MP" },
      { label: "Battery", value: "5,000mAh" },
      { label: "Network", value: "5G / 4G LTE" },
      { label: "Software", value: "Android 14" },
      { label: "Port", value: "USB Type-C" },
      { label: "Lagos delivery", value: "Free" },
    ],
  },
  {
    id: "sayeah-a17",
    name: "SayYeah A17",
    tag: "Everyday value",
    blurb:
      "A stylish, durable Android 14 phone with a smooth 6.8\" 120Hz screen, IP68 dust and water resistance, and a 5,000mAh battery for all-day reliability.",
    bestFor: "Calls, WhatsApp, social media and online learning",
    image: "/images/sayeah-a17.jpg",
    imageAlt: "SayYeah A17 phone in blue, front and back, with retail boxes",
    price: "₦175,000",
    wasPrice: "₦230,000",
    save: "₦55,000",
    stock: 2,
    colours: [{ name: "Midnight Blue", hex: "#24407a" }],
    specs: [
      { label: "Memory", value: "6GB RAM · 128GB" },
      { label: "Display", value: '6.8" 120Hz' },
      { label: "Rear camera", value: "50MP" },
      { label: "Selfie camera", value: "8MP" },
      { label: "Battery", value: "5,000mAh" },
      { label: "Protection", value: "IP68 water & dust" },
      { label: "Network", value: "4G LTE · Dual SIM" },
      { label: "Lagos delivery", value: "Free" },
    ],
  },
];

export const comparison = {
  headers: ["", "Arbutus 5G", "SayYeah A17"],
  rows: [
    ["Price", "₦180,000", "₦175,000"],
    ["RAM + Storage", "16GB + 1TB", "6GB + 128GB"],
    ["Rear camera", "108MP", "50MP"],
    ["Selfie camera", "50MP", "8MP"],
    ["Battery", "5,000mAh", "5,000mAh"],
    ["Network", "5G / 4G LTE", "4G LTE · Dual SIM"],
    ["Software", "Android 14", "Android 14"],
    ["Charging port", "USB Type-C", "USB Type-C"],
    ["Lagos delivery", "Free", "Free"],
    ["Units left", "4", "2"],
  ],
};

export const videos = [
  {
    title: "SayYeah A17 walkthrough",
    src: "/videos/a17-demo.mp4",
    poster: "/videos/a17-demo.jpg",
    orientation: "portrait" as const,
  },
  {
    title: "Arbutus 5G walkthrough",
    src: "/videos/arbutus-demo.mp4",
    poster: "/videos/arbutus-demo.jpg",
    orientation: "landscape" as const,
  },
];

export const highlights = [
  { title: "100% brand new, sealed", text: "Unused devices, complete in the original box with all factory accessories." },
  { title: "Free Lagos delivery", text: "Doorstep delivery anywhere in Lagos at ₦0. Outside Lagos? We ship securely nationwide." },
  { title: "Factory unlocked", text: "Works with MTN, Airtel, Glo and 9mobile SIM cards." },
  { title: "Quality checked", text: "Every unit is verified before dispatch, so you buy with peace of mind." },
];

export const faqs = [
  { q: "Is shipping really free within Lagos?", a: "Yes. Delivery anywhere within Lagos is 100% free for both the Arbutus 5G and the SayYeah A17. We also ship nationwide if you are outside Lagos." },
  { q: "Are both phones brand new?", a: "Yes. Both models are 100% brand new and unused, complete with all factory accessories inside the box." },
  { q: "Will they work with my SIM?", a: "Yes. Both phones are factory unlocked and work with MTN, Airtel, Glo and 9mobile." },
  { q: "How many units are available?", a: "This is a strictly limited batch: only 4 units of the Arbutus 5G and 2 units of the SayYeah A17. Once sold out, the promo price ends." },
  { q: "How do I place my order?", a: "Tap either WhatsApp order button, tell us which model you want (Arbutus 5G or SayYeah A17) and send your Lagos delivery address." },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const orderMessage = (productName?: string) =>
  productName
    ? `Hello ${store.name}, I would like to order the ${productName}. Is it available?`
    : `Hello ${store.name}, I'd like to know more about your phones.`;

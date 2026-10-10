export interface Product {
  id: string;
  slug: string;
  name: string;
  variant?: string;
  altName?: string;
  category: string;
  categorySlug?: string;
  origin?: string;
  rate?: number;
  currency?: string;
  rateUnit?: string;
  rateBasis?: string;
  netWeight?: string;
  grossWeight?: string;
  packaging?: string;
  availablePackSizes?: string[];
  destination?: string;
  location?: string;
  size?: string;
  hands?: string[];
  availability?: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  productCount?: number;
  products: Product[];
}

/* =======================================================
   ALL 14 AGRICULTURAL PRODUCTS
   ======================================================= */
export const agriculturalProducts: Product[] = [
  {
    id: "g4-chilli",
    slug: "g4-chilli",
    name: "G4 Chilli",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India (Maharashtra / Gujarat)",
    rate: 198,
    currency: "₹",
    rateUnit: "/ Box",
    rateBasis: "Ex Mumbai",
    netWeight: "3.8 kg",
    grossWeight: "4.4 kg",
    packaging: "Carton Box",
    availability: "Subject to confirmation",
    image: "/images/products/g4-chilli.jpg",
    shortDescription:
      "Fresh G4 green chillies sourced for international and domestic buyer requirements with calibrated sorting.",
    description:
      "Fresh G4 chilli sourced for domestic and international buyer requirements, with packaging options based on current specifications and destination requirements.",
    seoTitle: "G4 Chilli Supplier & Sourcing India | Mali International",
    seoDescription:
      "Source G4 chilli from India through Mali International. View current indicative rates, packaging details and request a quotation.",
  },
  {
    id: "lemon",
    slug: "lemon",
    name: "Lemon",
    category: "Fresh Produce",
    categorySlug: "agriculture",
    origin: "India",
    rate: 310,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "6.5 kg",
    grossWeight: "7.2 kg",
    packaging: "Corrugated Box",
    availability: "Subject to confirmation",
    image: "/images/products/lemon.jpg",
    shortDescription:
      "Fresh Indian lemons with high juice content and firm yellow peel, packed in export-grade cartons.",
    description:
      "Selected Indian lemons suitable for international fresh produce sourcing, graded by size and packed for extended cold-chain transit.",
    seoTitle: "Indian Lemon Supplier & Export Sourcing | Mali International",
    seoDescription:
      "Explore Indian lemon sourcing through Mali International with current market rates, packing details and export enquiry support.",
  },
  {
    id: "pomegranate",
    slug: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India (Mahabaleshwar / Satara / Nashik)",
    location: "Mahabaleshwar",
    rate: 190,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "1.6 kg",
    grossWeight: "2.1 kg",
    packaging: "Ventilated Box",
    availability: "Subject to confirmation",
    image: "/images/products/pomegranate.jpg",
    shortDescription:
      "Selected Indian pomegranates known for deep red arils and balanced brix sweetness for international markets.",
    description:
      "Selected Indian pomegranates suitable for international sourcing requirements, sourced from the Mahabaleshwar and Satara farming belts.",
    seoTitle: "Indian Pomegranate Supplier | Mali International",
    seoDescription:
      "Source Indian pomegranates for international markets through Mali International. View current indicative rate and packaging details.",
  },
  {
    id: "drumstick",
    slug: "drumstick",
    name: "Drumstick",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 1080,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    grossWeight: "4 kg",
    packaging: "Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/drumstick.jpg",
    shortDescription:
      "Fresh tender Indian drumsticks (Moringa oleifera pods) sourced directly from prime farming belts.",
    description:
      "Explore drumstick sourcing from India for international buyers through Mali International, ensuring consistent pod thickness and freshness.",
    seoTitle: "Drumstick Supplier India | Mali International",
    seoDescription:
      "Explore drumstick sourcing from India for international buyers through Mali International.",
  },
  {
    id: "ginger",
    slug: "ginger",
    name: "Ginger",
    category: "Spices & Fresh Produce",
    categorySlug: "agriculture",
    origin: "India",
    rate: 430,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Ventilated Bag",
    availability: "Subject to confirmation",
    image: "/images/products/ginger.jpg",
    shortDescription:
      "Fresh washed Indian ginger roots with sharp pungency and high oleoresin content for culinary and industrial use.",
    description:
      "Source Indian ginger through Mali International with current indicative market rates and buyer-specific sourcing support.",
    seoTitle: "Indian Ginger Supplier & Sourcing | Mali International",
    seoDescription:
      "Source Indian ginger through Mali International with current indicative market rates and buyer-specific sourcing support.",
  },
  {
    id: "vellary",
    slug: "vellary",
    name: "Vellary",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 370,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "5 kg",
    grossWeight: "5.5 kg",
    packaging: "Export Box",
    availability: "Subject to confirmation",
    image: "/images/products/vellary.jpg",
    shortDescription:
      "Fresh Indian Vellary (golden cucumber / yellow melon) selected for international trade and specialty produce distributors.",
    description:
      "Explore Vellary sourcing from India through Mali International with current indicative rate and packing details.",
    seoTitle: "Vellary Supplier India | Mali International",
    seoDescription:
      "Explore Vellary sourcing from India through Mali International with current indicative rate and packing details.",
  },
  {
    id: "red-pumpkin",
    slug: "red-pumpkin",
    name: "Red Pumpkin",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 230,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "7 kg",
    packaging: "Breathable Bag",
    availability: "Subject to confirmation",
    image: "/images/products/red-pumpkin.jpg",
    shortDescription:
      "Mature whole red pumpkins with thick dense pulp, ideal for long-distance transport and international wholesale.",
    description:
      "Source red pumpkin from India for international markets through Mali International.",
    seoTitle: "Red Pumpkin Supplier India | Mali International",
    seoDescription:
      "Source red pumpkin from India for international markets through Mali International.",
  },
  {
    id: "suran",
    slug: "suran",
    name: "Suran",
    altName: "Elephant Foot Yam",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 34,
    currency: "₹",
    rateUnit: "/ kg",
    availablePackSizes: ["8 kg", "9 kg", "10 kg"],
    packaging: "PP / Gunny Bag (8kg / 9kg / 10kg)",
    availability: "Subject to confirmation",
    image: "/images/products/suran.jpg",
    shortDescription:
      "Fresh farm-harvested Suran (Elephant Foot Yam) sorted by tuber size with customizable bag packaging.",
    description:
      "Source Suran / Elephant Foot Yam from India through Mali International with multiple packing options and current indicative rates.",
    seoTitle: "Suran / Elephant Foot Yam Supplier India | Mali International",
    seoDescription:
      "Source Suran / Elephant Foot Yam from India through Mali International with multiple packing options and current indicative rates.",
  },
  {
    id: "small-onion",
    slug: "small-onion",
    name: "Small Onion",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 415,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/small-onion.jpg",
    shortDescription:
      "Piquant Indian shallots (small red onions) cured and packed in aerated mesh bags for optimal shelf life.",
    description:
      "Explore small onion sourcing from India through Mali International with current indicative market rates.",
    seoTitle: "Small Onion Supplier India | Mali International",
    seoDescription:
      "Explore small onion sourcing from India through Mali International with current indicative market rates.",
  },
  {
    id: "turmeric",
    slug: "turmeric",
    name: "Turmeric",
    category: "Spices",
    categorySlug: "agriculture",
    origin: "India (Maharashtra / Telangana)",
    rate: 270,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Standard Bag",
    availability: "Subject to confirmation",
    image: "/images/products/turmeric.jpg",
    shortDescription:
      "Indian whole turmeric fingers with high natural curcumin levels, thoroughly cleaned and sorted.",
    description:
      "Indian turmeric available for sourcing based on required quantity, packing and buyer specifications.",
    seoTitle: "Indian Turmeric Supplier | Mali International",
    seoDescription:
      "Source Indian turmeric through Mali International for international buyers and B2B sourcing requirements.",
  },
  {
    id: "banana-dubai-export-pack",
    slug: "banana-dubai-export-pack",
    name: "Banana",
    variant: "Dubai Export Pack",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India (Maharashtra)",
    rate: 455,
    currency: "₹",
    rateUnit: "/ Box",
    location: "Mahabaleshwar",
    destination: "Dubai, UAE",
    netWeight: "13 kg",
    grossWeight: "14 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (13 kg Net / 14 kg Gross)",
    availability: "Subject to confirmation",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Premium Cavendish bananas sourced from the Mahabaleshwar belt, packed in 13kg cartons with 4/5/6 hands for UAE markets.",
    description:
      "Indian bananas sourced from Mahabaleshwar with selected export packing options for international markets.",
    seoTitle: "Indian Banana Supplier for Dubai UAE | Mali International",
    seoDescription:
      "Source Indian bananas from Mahabaleshwar for Dubai and UAE markets through Mali International.",
  },
  {
    id: "banana-7kg-pack",
    slug: "banana-7kg-pack",
    name: "Banana",
    variant: "7 kg Pack",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India (Maharashtra)",
    rate: 295,
    currency: "₹",
    rateUnit: "/ Box",
    location: "Mahabaleshwar",
    netWeight: "7 kg",
    grossWeight: "8 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (7 kg Net / 8 kg Gross)",
    availability: "Subject to confirmation",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Mahabaleshwar Cavendish bananas in compact 7kg cartons, calibrated hands for specialized retail distribution.",
    description:
      "Explore Indian banana sourcing from Mahabaleshwar with current indicative rates and packaging options.",
    seoTitle: "Indian Banana Supplier from Mahabaleshwar | Mali International",
    seoDescription:
      "Explore Indian banana sourcing from Mahabaleshwar with current indicative rates and packaging options.",
  },
  {
    id: "semi-husk-coconut",
    slug: "semi-husk-coconut",
    name: "Semi-Husk Coconut",
    category: "Coconut",
    categorySlug: "agriculture",
    origin: "India (Tamil Nadu)",
    rate: 60,
    currency: "₹",
    rateUnit: "/ kg",
    rateBasis: "Ex Pollachi",
    packaging: "PP Bag",
    netWeight: "13 kg",
    grossWeight: "13 kg",
    availability: "Subject to confirmation",
    image: "/images/products/semi-husk-coconut.jpg",
    shortDescription:
      "Mature semi-husked coconuts from the Pollachi region, carefully graded and packed in PP bags for ocean transit.",
    description:
      "Source semi-husk coconut from Pollachi, India through Mali International with current indicative market rates.",
    seoTitle: "Semi Husk Coconut Supplier India | Mali International",
    seoDescription:
      "Source semi-husk coconut from Pollachi, India through Mali International with current indicative market rates.",
  },
  {
    id: "onion-dubai-uae",
    slug: "onion-dubai-uae",
    name: "Onion",
    variant: "Dubai / UAE",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India (Nashik / Pune)",
    destination: "Dubai, UAE",
    size: "55+ mm",
    rate: 26,
    currency: "₹",
    rateUnit: "/ kg",
    packaging: "Red Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/onion.jpg",
    shortDescription:
      "Export-grade Indian red onions sized 55mm and above, cured and container-stuffed for Dubai and UAE delivery.",
    description:
      "Source 55+ mm Indian onions for Dubai and UAE markets through Mali International with complete export coordination.",
    seoTitle: "Indian Onion Supplier for Dubai UAE | Mali International",
    seoDescription:
      "Source 55+ mm Indian onions for Dubai and UAE markets through Mali International.",
  },
];

/* =======================================================
   ADDITIONAL COMMODITY PORTFOLIOS FOR OTHER PAGES
   ======================================================= */
export const foodCommodities: Product[] = [
  {
    id: "rice",
    slug: "rice",
    name: "Rice Varieties (Basmati & Non-Basmati)",
    category: "Food & Commodities",
    origin: "India (Punjab / Haryana)",
    packaging: "PP bags, BoPP, Non-Woven bags (10kg, 25kg, 50kg)",
    availability: "Year-round, subject to export quotas",
    description: "Traditional and hybrid Basmati along with PR11, Sona Masoori, and IR64 parboiled rice.",
  },
  {
    id: "sugar",
    slug: "sugar",
    name: "Cane Sugar (ICUMSA 45 & S30)",
    category: "Food & Commodities",
    origin: "India (Maharashtra / Uttar Pradesh)",
    packaging: "50kg PP bags with inner liner",
    availability: "Subject to government policy & quotas",
    description: "Refined white cane sugar and raw sugar sourced from certified Indian mills.",
  },
  {
    id: "pulses",
    slug: "pulses",
    name: "Pulses & Legumes (Chickpeas, Lentils)",
    category: "Food & Commodities",
    origin: "India (Madhya Pradesh / Maharashtra)",
    packaging: "25kg / 50kg export bags",
    availability: "Seasonal availability",
    description: "Sortex-cleaned chickpeas (Kabuli & Desi), red lentils, and pigeon peas for global food service.",
  },
];

/* =======================================================
   MALI CHIKKI PRODUCTS (MAHABALESHWAR SPECIAL)
   ======================================================= */
export const chikkiProducts: Product[] = [
  {
    id: "peanut-butter-chikki",
    slug: "peanut-butter-chikki",
    name: "Peanut Butter Chikki",
    category: "Mali Chikki",
    categorySlug: "chikki",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    packaging: "Individual Flow Wrap / Master Carton Box",
    availability: "Available for Bulk Export",
    image: "/images/products/mali-peanut-butter-chikki.jpg",
    shortDescription:
      "Delicious & healthy Mali Peanut Butter Chikki crafted from rich roasted peanuts and smooth butter jaggery blend.",
    description:
      "Mali Peanut Butter Chikki offers a velvety, modern twist on the classic Indian energy candy. Prepared with export-grade roasted peanuts and nutrient-dense golden jaggery from Mahabaleshwar, it delivers melt-in-the-mouth texture and high natural protein.",
    seoTitle: "Mali Peanut Butter Chikki Exporter & Supplier | Mali International",
    seoDescription:
      "Source authentic Mali Peanut Butter Chikki from Mahabaleshwar, Maharashtra. Premium confectionery for retail and wholesale export.",
  },
  {
    id: "groundnut-chikki",
    slug: "groundnut-chikki",
    name: "Groundnut Chikki (250g Box)",
    category: "Mali Chikki",
    categorySlug: "chikki",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250 gm",
    packaging: "250g Monocarton Retail Box / Master Export Carton",
    availability: "Available for Bulk Export",
    image: "/images/products/mali-groundnut-chikki.jpg",
    shortDescription:
      "Authentic Mahabaleshwar special Mali Groundnut Chikki in a 250g box pack, made with golden jaggery and crunchy peanuts.",
    description:
      "Mali Groundnut Chikki (250g Box) represents the heritage taste of Mahabaleshwar. Prepared using handpicked whole peanuts caramelized with premium jaggery, offering exceptional crunch, high energy, and long shelf life for international markets.",
    seoTitle: "Mali Groundnut Chikki 250g Box Supplier | Mali International",
    seoDescription:
      "Buy & export 250g Mali Groundnut Chikki sourced directly from Mahabaleshwar, Satara. High quality traditional Indian chikki.",
  },
  {
    id: "peanut-crush-chikki",
    slug: "peanut-crush-chikki",
    name: "Peanut Crush Chikki",
    category: "Mali Chikki",
    categorySlug: "chikki",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    packaging: "Individual Flow Wrap / Master Carton Box",
    availability: "Available for Bulk Export",
    image: "/images/products/mali-peanut-crush-chikki.jpg",
    shortDescription:
      "Crispy and wholesome Mali Peanut Crush Chikki, finely crushed roasted nuts bound with pure jaggery for easy snacking.",
    description:
      "Mali Peanut Crush Chikki is made with finely crushed roasted groundnuts blended smoothly with traditional jaggery. Delivers a soft-crunch bite, rich nutty aroma, and clean nutrition without artificial preservatives or refined sugars.",
    seoTitle: "Mali Peanut Crush Chikki Manufacturer & Exporter | Mali International",
    seoDescription:
      "Direct export sourcing for Mali Peanut Crush Chikki from Mahabaleshwar. High-protein traditional snack with custom export packaging.",
  },
];

// Alias for backward compatibility
export const mineralProducts = chikkiProducts;

/* =======================================================
   PRODUCT CATEGORIES FOR MAIN PRODUCTS PAGE & SITE NAV
   ======================================================= */
export const productCategories: ProductCategory[] = [
  {
    id: "agriculture",
    number: "01",
    title: "Agricultural Products",
    slug: "agriculture",
    description:
      "Fresh vegetables, fruits, whole spices, shallots, and coconuts with daily indicative market rates.",
    image: "/images/products/g4-chilli.jpg",
    productCount: 14,
    products: agriculturalProducts,
  },
  {
    id: "food-commodities",
    number: "02",
    title: "Food & Commodities",
    slug: "food-commodities",
    description:
      "Bulk staple grains, Basmati and non-Basmati rice, refined cane sugar, pulses, and agro-commodities.",
    image: "/images/products/lemon.jpg",
    productCount: 3,
    products: foodCommodities,
  },
  {
    id: "chikki",
    number: "03",
    title: "Mali Chikki",
    slug: "chikki",
    description:
      "Authentic Mahabaleshwar special Mali Chikki including Peanut Butter Chikki, Groundnut Chikki (250g Box), and Peanut Crush Chikki.",
    image: "/images/products/mali-groundnut-chikki.jpg",
    productCount: 3,
    products: chikkiProducts,
  },
  {
    id: "custom-sourcing",
    number: "04",
    title: "Custom Sourcing",
    slug: "custom-sourcing",
    description:
      "Tailored agricultural procurement, contract farming coordination, private labeling, and port delivery.",
    image: "/images/products/onion.jpg",
    products: [],
  },
];

/* =======================================================
   HOMEPAGE FEATURED COMMODITIES LIST
   ======================================================= */
export const featuredProducts: string[] = [
  "G4 Chilli",
  "Bhagwa Pomegranate",
  "Cavendish Banana",
  "Red Onion 55+ mm",
  "Turmeric Finger",
  "Semi-Husk Coconut",
  "Fresh Ginger",
  "Drumstick",
];

/* =======================================================
   HELPER UTILITIES
   ======================================================= */
export function getProductBySlug(slug: string): Product | undefined {
  return agriculturalProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return agriculturalProducts.map((p) => p.slug);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return agriculturalProducts.slice(0, limit);

  // Same category, excluding current
  const sameCategory = agriculturalProducts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Other agricultural items
  const others = agriculturalProducts.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getFeaturedAgriProducts(limit: number = 6): Product[] {
  const featuredSlugs = [
    "g4-chilli",
    "pomegranate",
    "banana-dubai-export-pack",
    "onion-dubai-uae",
    "turmeric",
    "semi-husk-coconut",
  ];
  return agriculturalProducts.filter((p) => featuredSlugs.includes(p.slug)).slice(0, limit);
}

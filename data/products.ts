export type CategorySlug =
  | "fruits"
  | "vegetables"
  | "nutrition-food"
  | "pulses-lentils"
  | "chikki"
  | "agriculture"
  | "food-commodities"
  | "minerals"
  | "custom-sourcing";

export interface Product {
  id: string;
  slug: string;
  name: string;
  variant?: string;
  altName?: string;
  category: string;
  categorySlug: CategorySlug;
  origin?: string;
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
   1. FRUITS CATEGORY
   ======================================================= */
export const fruitsProducts: Product[] = [
  {
    id: "pomegranate",
    slug: "pomegranate",
    name: "Bhagwa Pomegranate",
    category: "Fruits",
    categorySlug: "fruits",
    origin: "India (Maharashtra - Solapur / Nashik)",
    location: "Solapur / Nashik",
    netWeight: "1.6 kg - 3.5 kg",
    grossWeight: "2.1 kg - 4.0 kg",
    packaging: "Export Ventilated Carton (3.5 kg / 1.6 kg)",
    availablePackSizes: ["1.6 kg Box", "3.5 kg Box (9/12 count)"],
    availability: "Available for Export",
    image: "/images/products/pomegranate.jpg",
    shortDescription:
      "World-renowned Indian Bhagwa pomegranates with deep ruby red arils, high juice percentage, and sweet brix level.",
    description:
      "Premium export-grade Bhagwa pomegranates sourced from prime orchards in Maharashtra. Known for glowing red rind, soft seeds, high antioxidant content, and excellent transit tolerance.",
    seoTitle: "Indian Bhagwa Pomegranate Export Supplier | Mali International",
    seoDescription:
      "Source export-grade Bhagwa pomegranates from Solapur, India through Mali International. Direct farm procurement and cold-chain compliance.",
  },
  {
    id: "banana-dubai-export-pack",
    slug: "banana-dubai-export-pack",
    name: "Cavendish Banana",
    variant: "Dubai & Gulf Export Pack (13kg / 14kg)",
    category: "Fruits",
    categorySlug: "fruits",
    origin: "India (Maharashtra - Solapur)",
    location: "Solapur",
    destination: "Dubai, UAE & Middle East Ports",
    netWeight: "13 kg",
    grossWeight: "14 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (13 kg Net / 14 kg Gross)",
    availability: "Available for Export",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Premium Cavendish bananas sourced from the prime Solapur belt, packed in 13kg cartons with 4/5/6 hands for international transit.",
    description:
      "Export-grade Cavendish bananas sourced from Solapur with vacuum poly-bag packing and ethylene-controlled reefer container stuffing for Middle East and worldwide delivery.",
    seoTitle: "Indian Cavendish Banana Supplier for Dubai & Gulf | Mali International",
    seoDescription:
      "Source Indian Cavendish bananas from Solapur for Dubai, UAE and international markets through Mali International.",
  },
  {
    id: "banana-7kg-pack",
    slug: "banana-7kg-pack",
    name: "Cavendish Banana",
    variant: "7 kg Retail Pack",
    category: "Fruits",
    categorySlug: "fruits",
    origin: "India (Maharashtra - Solapur)",
    location: "Solapur",
    netWeight: "7 kg",
    grossWeight: "8 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (7 kg Net / 8 kg Gross)",
    availability: "Available for Export",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Solapur Cavendish bananas in compact 7kg export cartons with calibrated hands for specialized retail distribution.",
    description:
      "Compact 7kg export carton pack designed for air freight and direct supermarket distribution with consistent finger length and caliber.",
    seoTitle: "Cavendish Banana 7kg Export Pack | Mali International",
    seoDescription:
      "Explore Indian banana sourcing from Solapur with 7kg retail-ready export packaging options through Mali International.",
  },
  {
    id: "lemon",
    slug: "lemon",
    name: "Indian Lemon",
    category: "Fruits",
    categorySlug: "fruits",
    origin: "India (Maharashtra / Andhra Pradesh)",
    netWeight: "6.5 kg",
    grossWeight: "7.2 kg",
    packaging: "Export Corrugated Box (6.5 kg)",
    availablePackSizes: ["6.5 kg", "10 kg"],
    availability: "Available for Export",
    image: "/images/products/lemon.jpg",
    shortDescription:
      "Fresh Indian lemons with high natural juice content, firm yellow rind, and export-grade caliber sorting.",
    description:
      "Selected Indian lemons suitable for international fresh produce sourcing, graded by uniform diameter and packed for extended cold-chain ocean transit.",
    seoTitle: "Indian Lemon Supplier & Fresh Export | Mali International",
    seoDescription:
      "Source Indian lemons through Mali International with export packing details and custom commercial quotation support.",
  },
  {
    id: "semi-husk-coconut",
    slug: "semi-husk-coconut",
    name: "Semi-Husk Coconut",
    category: "Fruits",
    categorySlug: "fruits",
    origin: "India (Tamil Nadu - Pollachi)",
    location: "Pollachi Belt",
    netWeight: "13 kg",
    grossWeight: "13 kg",
    packaging: "High-Ventilation PP Mesh Bag (25 nuts / ~13 kg)",
    availability: "Available for Export",
    image: "/images/products/semi-husk-coconut.jpg",
    shortDescription:
      "Mature semi-husked coconuts from the Pollachi region, carefully graded for rich water and meat content.",
    description:
      "Selected mature coconuts with uniform weight (550g - 650g per nut), partially husked for maximum shell preservation during long-distance ocean voyages.",
    seoTitle: "Semi Husk Coconut Supplier India | Mali International",
    seoDescription:
      "Source export-grade semi-husk coconut from Pollachi, India through Mali International with dedicated container logistics.",
  },
];

/* =======================================================
   2. VEGETABLES CATEGORY
   ======================================================= */
export const vegetableProducts: Product[] = [
  {
    id: "g4-chilli",
    slug: "g4-chilli",
    name: "G4 Green Chilli",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Maharashtra / Gujarat)",
    netWeight: "3.8 kg",
    grossWeight: "4.4 kg",
    packaging: "Export Carton Box (Air & Ocean grade)",
    availablePackSizes: ["3.8 kg", "4.0 kg", "5.0 kg"],
    availability: "Available for Export",
    image: "/images/products/g4-chilli.jpg",
    shortDescription:
      "Fresh G4 green chillies sorted for uniform length (8-12 cm), bright emerald color, and high pungency.",
    description:
      "Fresh G4 chilli sourced directly from verified farm clusters, sorted by pod straightness and diameter, and packed for rapid air freight or temperature-controlled sea export.",
    seoTitle: "G4 Green Chilli Supplier & Export India | Mali International",
    seoDescription:
      "Source export-grade G4 green chilli from India through Mali International. Direct farm procurement and strict cold-chain packing.",
  },
  {
    id: "drumstick",
    slug: "drumstick",
    name: "Fresh Drumstick",
    altName: "Moringa Pods",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Tamil Nadu / Maharashtra)",
    netWeight: "4 kg",
    grossWeight: "4.5 kg",
    packaging: "Aerated Export Box / Mesh Bag",
    availablePackSizes: ["4 kg", "5 kg", "10 kg"],
    availability: "Available for Export",
    image: "/images/products/drumstick.jpg",
    shortDescription:
      "Fresh tender Indian drumsticks (Moringa oleifera pods) harvested at optimal maturity for export markets.",
    description:
      "Tender, straight moringa drumstick pods selected for uniform thickness, green coloration, and minimal fiber stringiness. Ideal for global wholesale and ethnic grocery distribution.",
    seoTitle: "Fresh Drumstick / Moringa Supplier India | Mali International",
    seoDescription:
      "Source fresh Indian drumsticks for international buyers through Mali International with calibrated sorting and prompt dispatch.",
  },
  {
    id: "onion-dubai-uae",
    slug: "onion-dubai-uae",
    name: "Red Onion",
    variant: "55+ mm Export Grade",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Nashik / Pune)",
    location: "Nashik / Pune Belt",
    destination: "Dubai, Gulf & Southeast Asia",
    size: "55+ mm Calibrated",
    packaging: "Red Aerated Mesh Bag (25 kg / 50 kg)",
    availablePackSizes: ["10 kg", "25 kg", "50 kg"],
    availability: "Available for Export",
    image: "/images/products/onion.jpg",
    shortDescription:
      "Export-grade Indian red onions cured and calibrated 55mm and above for long shelf life in Gulf and global markets.",
    description:
      "High-pungency, thick-skinned Nashik red onions cured for optimal skin retention. Stuffed in reefer or dry ventilated containers with strict pre-shipment phytosanitary compliance.",
    seoTitle: "Indian Red Onion 55+ mm Supplier for Export | Mali International",
    seoDescription:
      "Source export-grade 55+ mm Indian red onions through Mali International with container stuffing and port logistics coordination.",
  },
  {
    id: "small-onion",
    slug: "small-onion",
    name: "Small Onion",
    altName: "Shallots / Sambar Onion",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Tamil Nadu / Karnataka)",
    netWeight: "4 kg - 10 kg",
    packaging: "Woven Mesh Bag",
    availablePackSizes: ["4 kg", "9 kg", "10 kg"],
    availability: "Available for Export",
    image: "/images/products/small-onion.jpg",
    shortDescription:
      "Piquant Indian shallots (small red onions) cured and packed in aerated mesh bags for optimal shelf life.",
    description:
      "Small pink/red shallots harvested from South Indian agricultural zones, cured to prevent sprouting, and graded by bulb diameter for culinary and international trade requirements.",
    seoTitle: "Indian Shallots / Small Onion Export Supplier | Mali International",
    seoDescription:
      "Explore small onion (shallot) sourcing from India through Mali International with dedicated export packaging.",
  },
  {
    id: "red-pumpkin",
    slug: "red-pumpkin",
    name: "Red Pumpkin",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Maharashtra / Gujarat)",
    netWeight: "7 kg - 10 kg",
    packaging: "Heavy-Duty Breathable Gunny / Mesh Bag",
    availability: "Available for Export",
    image: "/images/products/red-pumpkin.jpg",
    shortDescription:
      "Mature whole red pumpkins with thick dense pulp, ideal for long-distance transport and international wholesale.",
    description:
      "Field-cured, firm-rind red pumpkins carefully packed to prevent bruising during long ocean voyages. Rich in carotene and suited for commercial culinary operations.",
    seoTitle: "Red Pumpkin Exporter & Supplier India | Mali International",
    seoDescription:
      "Export quality Indian red pumpkin sourced directly from certified farms across Maharashtra.",
  },
  {
    id: "suran",
    slug: "suran",
    name: "Suran",
    altName: "Elephant Foot Yam",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Maharashtra / Gujarat / UP)",
    availablePackSizes: ["8 kg", "9 kg", "10 kg"],
    packaging: "PP / Gunny Bag (8kg / 9kg / 10kg)",
    availability: "Available for Export",
    image: "/images/products/suran.jpg",
    shortDescription:
      "Clean, solid-core Elephant Foot Yam sorted by tuber weight with export-grade outer skin drying.",
    description:
      "Export-grade Suran tubers harvested and cured for minimal moisture loss. Sorted into uniform size brackets with sturdy sack packing for sea containers.",
    seoTitle: "Elephant Foot Yam (Suran) Exporter India | Mali International",
    seoDescription:
      "Source Suran / Elephant Foot Yam from India with customizable packing sizes and export clearance support.",
  },
  {
    id: "vellary",
    slug: "vellary",
    name: "Vellary",
    altName: "Golden Cucumber / Yellow Melon",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Kerala / Tamil Nadu)",
    netWeight: "5 kg",
    grossWeight: "5.5 kg",
    packaging: "Corrugated Export Box with Cushioning",
    availability: "Available for Export",
    image: "/images/products/vellary.jpg",
    shortDescription:
      "Golden-yellow Indian cucumber (Vellary) selected for crisp texture and traditional culinary demand in international markets.",
    description:
      "Freshly harvested golden Vellary cucumbers packed in cushioned ventilated boxes to safeguard the delicate rind during air or express sea transit.",
    seoTitle: "Indian Vellary (Golden Cucumber) Supplier | Mali International",
    seoDescription:
      "Source fresh Indian Vellary for specialty produce distributors and supermarket chains globally.",
  },
  {
    id: "ginger",
    slug: "ginger",
    name: "Fresh Ginger",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Maharashtra / Karnataka / Kerala)",
    netWeight: "4 kg - 10 kg",
    packaging: "Washed & Air-Dried PP / Mesh Bags",
    availability: "Available for Export",
    image: "/images/products/ginger.jpg",
    shortDescription:
      "Washed and sanitized Indian ginger rhizomes with bold fingers, high pungency, and rich oleoresin content.",
    description:
      "Commercial fresh ginger washed, cured, and packed for global buyers. Exhibits plump fingers, low fiber, and sharp aroma for culinary and spice blending applications.",
    seoTitle: "Fresh Indian Ginger Exporter & Supplier | Mali International",
    seoDescription:
      "Export washed fresh ginger from India through Mali International with custom volume container allocations.",
  },
  {
    id: "turmeric",
    slug: "turmeric",
    name: "Turmeric Finger",
    category: "Vegetables",
    categorySlug: "vegetables",
    origin: "India (Maharashtra - Sangli / Telangana)",
    location: "Sangli / Nizamabad Belt",
    netWeight: "4 kg - 25 kg",
    packaging: "Jute / PP Bags",
    availability: "Available for Export",
    image: "/images/products/turmeric.jpg",
    shortDescription:
      "Whole Indian turmeric fingers with naturally high curcumin percentages (3.5% - 5.0%), polished and sorted.",
    description:
      "High-curcumin whole turmeric fingers double-polished for vibrant golden color and low moisture content. Ideal for industrial spice milling and medicinal extracts.",
    seoTitle: "Indian Turmeric Finger Supplier | Mali International",
    seoDescription:
      "Source authentic Indian turmeric fingers through Mali International for international food service and spice blenders.",
  },
];

/* =======================================================
   3. NUTRITION FOOD & MALI CHIKKI CATEGORY
   ======================================================= */
export const nutritionFoodProducts: Product[] = [
  {
    id: "groundnut-chikki",
    slug: "groundnut-chikki",
    name: "Groundnut Chikki",
    variant: "250g Box / Export Pack",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250g Box",
    packaging: "Export Retail Monocarton Box (250g) / Master Shipping Carton",
    availablePackSizes: ["250g Box", "750g Box", "Bulk Master Packs"],
    availability: "Available for Export",
    image: "/images/products/groundnut-chikki.jpg",
    shortDescription:
      "Authentic Mahabaleshwar special Mali Groundnut Chikki crafted with handpicked crunchy roasted peanuts and golden jaggery.",
    description:
      "Mali Groundnut Chikki represents the heritage recipe of Mahabaleshwar. Prepared using handpicked whole peanuts caramelized with premium jaggery, offering exceptional crunch, high natural energy, and long shelf life for international markets.",
    seoTitle: "Mali Groundnut Chikki Export Supplier Mahabaleshwar | Mali International",
    seoDescription:
      "Buy & export authentic Mali Groundnut Chikki sourced directly from Mahabaleshwar, Satara. High quality traditional Indian snack.",
  },
  {
    id: "peanut-crush-chikki",
    slug: "peanut-crush-chikki",
    name: "Peanut Crush Chikki",
    variant: "Individual Flow Pack / Box",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "Flow-Wrap Pack / Retail Box",
    packaging: "Individual Flow Wrap / Retail Display Box / Master Carton",
    availablePackSizes: ["Single Flow Wrap", "Retail Box", "Master Carton (Bulk)"],
    availability: "Available for Export",
    image: "/images/products/peanut-crush-chikki.jpg",
    shortDescription:
      "Finely crushed roasted groundnuts bound with pure jaggery for a crispy, soft-crunch healthy bite from Mahabaleshwar.",
    description:
      "Mali Peanut Crush Chikki is crafted from finely crushed roasted groundnuts blended smoothly with traditional jaggery. Delivers a soft-crunch bite, rich nutty aroma, and clean nutrition without artificial preservatives.",
    seoTitle: "Mali Peanut Crush Chikki Manufacturer & Exporter | Mali International",
    seoDescription:
      "Direct export sourcing for Mali Peanut Crush Chikki from Mahabaleshwar. High-protein traditional snack with custom export packaging.",
  },
  {
    id: "peanut-butter-chikki",
    slug: "peanut-butter-chikki",
    name: "Peanut Butter Chikki",
    variant: "Individual Flow Pack / Box",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "Flow-Wrap Pack / Retail Box",
    packaging: "Aroma-Lock Flow Wrap / Display Box / Master Carton Box",
    availablePackSizes: ["Single Flow Wrap", "Retail Box", "Master Carton"],
    availability: "Available for Export",
    image: "/images/products/peanut-butter-chikki.jpg",
    shortDescription:
      "Delicious & healthy Mali Peanut Butter Chikki crafted from rich roasted peanuts and smooth butter jaggery blend from Mahabaleshwar.",
    description:
      "Mali Peanut Butter Chikki offers a velvety, modern twist on the classic Indian energy snack. Prepared with export-grade roasted peanuts and nutrient-dense golden jaggery from Mahabaleshwar, it delivers melt-in-the-mouth texture and high natural protein.",
    seoTitle: "Mali Peanut Butter Chikki Exporter Mahabaleshwar | Mali International",
    seoDescription:
      "Source authentic Mali Peanut Butter Chikki from Mahabaleshwar, Maharashtra. Premium confectionery for retail and wholesale export.",
  },
  {
    id: "coconut-chikki",
    slug: "coconut-chikki",
    name: "Coconut Chikki",
    variant: "250g Box / Export Pack",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250g Box / Bulk Cartons",
    packaging: "Export Retail Box (250g) / Master Shipping Carton",
    availablePackSizes: ["250g Box", "Bulk Master Packs"],
    availability: "Available for Export",
    image: "/images/products/coconut-chikki.jpg",
    shortDescription:
      "Authentic Mali Coconut Chikki made with freshly grated roasted coconut flakes and natural jaggery for a delicate, sweet crunch.",
    description:
      "Traditional Indian Coconut Chikki prepared under stringent quality controls with premium roasted coconut flakes and natural cane jaggery. Delivers a tropical aroma, crisp bite, and rich natural energy in every piece.",
    seoTitle: "Mali Coconut Chikki Export Supplier | Mali International",
    seoDescription:
      "Source authentic Mali Coconut Chikki. Wholesome Indian confectionery crafted with roasted coconut and pure jaggery.",
  },
  {
    id: "assorted-chikki",
    slug: "assorted-chikki",
    name: "Assorted Chikki",
    variant: "250g Box / Export Pack",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250g Box / Bulk Cartons",
    packaging: "Export Retail Box (250g) / Master Shipping Carton",
    availablePackSizes: ["250g Box", "Bulk Master Packs"],
    availability: "Available for Export",
    image: "/images/products/assorted-chikki.jpg",
    shortDescription:
      "A premium multi-flavor assortment of Mali's finest chikkis, combining roasted peanuts, sesame, nuts, and natural jaggery.",
    description:
      "A diverse medley of traditional Indian chikki varieties packed in one vibrant box. Includes peanut, sesame, and gourmet nut brittle pieces crafted with pure jaggery and zero artificial preservatives.",
    seoTitle: "Mali Assorted Chikki Box Export Supplier | Mali International",
    seoDescription:
      "Source authentic Mali Assorted Chikki boxes for international export and retail distribution.",
  },
  {
    id: "dry-fruit-chikki",
    slug: "dry-fruit-chikki",
    name: "Dry Fruit Chikki",
    variant: "250g Box / Royal Nut Selection",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250g Box",
    packaging: "Export Retail Monocarton Box (250g) / Master Shipping Carton",
    availablePackSizes: ["250g Box", "Bulk Master Packs"],
    availability: "Available for Export",
    image: "/images/products/dry-fruit-chikki.jpg",
    shortDescription:
      "Gourmet chikki crafted with roasted almonds, cashews, pistachios, and natural sweeteners for an elite healthy snack.",
    description:
      "An exquisite blend of premium California almonds, cashew nuts, pistachios, and sesame bound with refined natural jaggery. A nutrient-dense confection suited for gifting and high-end grocery segments.",
    seoTitle: "Mali Dry Fruit Chikki Gourmet Supplier | Mali International",
    seoDescription:
      "Source luxury Mali Dry Fruit Chikki containing almonds, cashews, and pistachios for retail and gourmet export.",
  },
  {
    id: "til-chikki",
    slug: "til-chikki",
    name: "Til Chikki",
    altName: "Sesame Chikki",
    variant: "250g Box / Export Pack",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "250g Box",
    packaging: "Export Retail Monocarton Box (250g) / Master Shipping Carton",
    availablePackSizes: ["250g Box", "Bulk Master Packs"],
    availability: "Available for Export",
    image: "/images/products/til-chikki.jpg",
    shortDescription:
      "Traditional sesame brittle crafted from cleaned white til seeds and golden jaggery, rich in natural calcium and minerals.",
    description:
      "Authentic Mali Til (Sesame) Chikki made from premium Sortex-cleaned sesame seeds gently roasted and caramelized with natural unrefined jaggery. High in calcium, iron, and dietary fiber.",
    seoTitle: "Mali Til Chikki (Sesame Brittle) Export Supplier | Mali International",
    seoDescription:
      "Source Mali Til Chikki (Sesame Chikki). Export-quality 250g packs prepared with cleaned sesame seeds and pure jaggery.",
  },
  {
    id: "hazelnuts-chikki",
    slug: "hazelnuts-chikki",
    name: "Hazelnuts Chikki",
    variant: "Individual Flow Pack / Box",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "Flow-Wrap Pack / Retail Box",
    packaging: "Export Retail Flow-Wrap / Display Box / Master Carton",
    availablePackSizes: ["Single Flow Wrap", "Retail Box", "Master Carton"],
    availability: "Available for Export",
    image: "/images/products/hazelnuts-chikki.jpg",
    shortDescription:
      "Gourmet brittle confection blending roasted hazelnuts with delicate golden jaggery.",
    description:
      "Mali Hazelnuts Chikki blends high-grade roasted hazelnuts with natural jaggery for an international flavor profile with traditional Indian crunch.",
    seoTitle: "Mali Hazelnuts Chikki Supplier | Mali International",
    seoDescription: "Source premium Mali Hazelnuts Chikki for global distribution.",
  },
  {
    id: "rajgira-peanut-chikki",
    slug: "rajgira-peanut-chikki",
    name: "Rajgira Peanut Chikki",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    netWeight: "Flow-Wrap Bar / Multi-Pack Cartons",
    packaging: "Hygienic Flow-Wrap Bar / Display Box / Master Carton",
    availablePackSizes: ["Single Bar", "Retail Display Pack", "Master Carton (Bulk)"],
    availability: "Available for Export",
    image: "/images/products/rajgira-peanut-chikki.jpg",
    shortDescription:
      "Nutritious superfood bar made with puffed amaranth (rajgira), crunchy roasted peanuts, and pure jaggery.",
    description:
      "Mali Rajgira Peanut Chikki combines the wholesome benefits of roasted popped amaranth with bold peanuts caramelized in natural jaggery. High in protein, iron, and fiber, and sealed in export flow-wrap packaging.",
    seoTitle: "Mali Rajgira Peanut Chikki Supplier & Export | Mali International",
    seoDescription:
      "Source authentic Mali Rajgira Peanut Chikki. Healthy puffed amaranth and peanut brittle snack with export packaging.",
  },
  {
    id: "peanut-boiled",
    slug: "peanut-boiled",
    name: "Peanut Boiled Pouch",
    category: "Nutrition Food",
    categorySlug: "nutrition-food",
    origin: "India (Mahabaleshwar, Satara, Maharashtra)",
    location: "Mahabaleshwar",
    packaging: "Vacuum Retort Pouch / Carton",
    availability: "Available for Export",
    image: "/images/products/peanut-boiled.jpg",
    shortDescription:
      "Ready-to-eat seasoned boiled peanuts in high-barrier shelf-stable retort pouches.",
    description:
      "Nutritious, high-protein boiled groundnut snack sealed in shelf-stable packaging for instant retail consumption without refrigeration.",
    seoTitle: "Ready-to-Eat Boiled Peanuts Pouch | Mali International",
    seoDescription: "Source retort pouch boiled peanuts from India.",
  },
];

// Alias for chikki products specifically
export const chikkiProducts = nutritionFoodProducts;

/* =======================================================
   4. PULSES & LENTILS CATEGORY
   ======================================================= */
export const pulsesLentilsProducts: Product[] = [
  {
    id: "chickpeas",
    slug: "chickpeas",
    name: "Chickpeas (Kabuli & Desi)",
    altName: "Garbanzo Beans / Chana",
    category: "Pulses & Lentils",
    categorySlug: "pulses-lentils",
    origin: "India (Madhya Pradesh / Maharashtra / Rajasthan)",
    netWeight: "25 kg / 50 kg",
    packaging: "Export PP / Jute Bags with inner liner",
    availablePackSizes: ["25 kg", "50 kg", "1 MT Jumbo Bag"],
    availability: "Available for Export",
    image: "/images/products/onion-sourcing-editorial.jpg",
    shortDescription:
      "Sortex-cleaned Kabuli chickpeas (7mm, 8mm, 9mm counts) and Desi chana sorted for uniform caliber and zero defect.",
    description:
      "Machine-cleaned and laser-sorted Indian chickpeas with high protein content and excellent soaking expansion. Sourced directly from prime pulse-growing belts for global cannery and wholesale supply.",
    seoTitle: "Indian Chickpeas (Kabuli & Desi) Export Supplier | Mali International",
    seoDescription:
      "Source Sortex-cleaned Kabuli chickpeas and Desi chana from India through Mali International with container stuffing.",
  },
  {
    id: "red-lentils",
    slug: "red-lentils",
    name: "Red Lentils (Masoor Dal)",
    category: "Pulses & Lentils",
    categorySlug: "pulses-lentils",
    origin: "India (Madhya Pradesh / Uttar Pradesh)",
    netWeight: "25 kg / 50 kg",
    packaging: "Export PP Bag with Moisture Liner",
    availability: "Available for Export",
    image: "/images/products/turmeric.jpg",
    shortDescription:
      "Whole and split football-grade red lentils (Masoor Dal) polished and free from foreign matter.",
    description:
      "Cleaned, polished red lentils processed in certified Indian dal mills. Delivers fast cooking time, high plant protein, and long storage stability for global food service.",
    seoTitle: "Indian Red Lentils (Masoor Dal) Supplier | Mali International",
    seoDescription:
      "Export grade red lentils from India. Certified quality, custom bag labeling, and full phytosanitary clearance.",
  },
  {
    id: "pigeon-peas",
    slug: "pigeon-peas",
    name: "Pigeon Peas (Toor Dal)",
    category: "Pulses & Lentils",
    categorySlug: "pulses-lentils",
    origin: "India (Maharashtra - Latur / Karnataka)",
    netWeight: "25 kg / 50 kg",
    packaging: "Export PP / BoPP Bags",
    availability: "Available for Export",
    image: "/images/products/small-onion.jpg",
    shortDescription:
      "Oily and unpolished whole / split yellow pigeon peas (Toor Dal) sourced from India's premier pulse markets.",
    description:
      "Grade-A Toor Dal sourced directly from Latur and Gulbarga milling clusters. Free from artificial colors, stones, and foreign matter, suitable for international distribution.",
    seoTitle: "Indian Toor Dal (Pigeon Peas) Export Supplier | Mali International",
    seoDescription:
      "Source authentic Indian Toor Dal through Mali International with complete export certification and packing.",
  },
  {
    id: "green-mung-beans",
    slug: "green-mung-beans",
    name: "Green Mung Beans (Moong Dal)",
    category: "Pulses & Lentils",
    categorySlug: "pulses-lentils",
    origin: "India (Rajasthan / Maharashtra)",
    netWeight: "25 kg / 50 kg",
    packaging: "PP Woven Bags",
    availability: "Available for Export",
    image: "/images/products/g4-chilli.jpg",
    shortDescription:
      "Whole green mung beans and split yellow moong with high germination rate and bright natural luster.",
    description:
      "Sortex-graded green mung beans suitable for direct consumption, sprouting, or flour milling. Uniform grain size, high protein, and residue-tested.",
    seoTitle: "Green Mung Beans (Moong) Supplier India | Mali International",
    seoDescription:
      "Export quality green mung beans and yellow moong dal sourced from India with certified laboratory testing.",
  },
  {
    id: "black-matpe",
    slug: "black-matpe",
    name: "Black Matpe (Urad Dal)",
    category: "Pulses & Lentils",
    categorySlug: "pulses-lentils",
    origin: "India (Maharashtra / Andhra Pradesh)",
    netWeight: "25 kg / 50 kg",
    packaging: "PP Bags with Moisture Barrier",
    availability: "Available for Export",
    image: "/images/products/semi-husk-coconut.jpg",
    shortDescription:
      "Whole black gram and split white urad dal with high starch and protein density for food processing.",
    description:
      "High-grade Indian Black Matpe and Urad Dal cleaned and graded for uniform texture. Extensively utilized for traditional batters, papad manufacture, and culinary preparations worldwide.",
    seoTitle: "Black Matpe (Urad Dal) Supplier India | Mali International",
    seoDescription:
      "Source export-quality black matpe and urad dal from India through Mali International.",
  },
];

/* =======================================================
   MASTER UNIFIED PRODUCTS LIST (ALL CATEGORIES)
   ======================================================= */
export const allProducts: Product[] = [
  ...fruitsProducts,
  ...vegetableProducts,
  ...nutritionFoodProducts,
  ...pulsesLentilsProducts,
];

// Backward compatibility aliases
export const products: Product[] = allProducts;
export const agriculturalProducts: Product[] = allProducts;
export const allCatalogProducts: Product[] = allProducts;

/* =======================================================
   FOOD COMMODITIES & MINERALS
   ======================================================= */
export const foodCommodities: Product[] = [
  {
    id: "rice",
    slug: "rice",
    name: "Rice Varieties (Basmati & Non-Basmati)",
    category: "Food & Commodities",
    categorySlug: "food-commodities",
    origin: "India (Punjab / Haryana)",
    packaging: "PP bags, BoPP, Non-Woven bags (10kg, 25kg, 50kg)",
    availability: "Year-round export",
    description: "Traditional and hybrid Basmati along with PR11, Sona Masoori, and IR64 parboiled rice.",
  },
  {
    id: "sugar",
    slug: "sugar",
    name: "Cane Sugar (ICUMSA 45 & S30)",
    category: "Food & Commodities",
    categorySlug: "food-commodities",
    origin: "India (Maharashtra / Uttar Pradesh)",
    packaging: "50kg PP bags with inner liner",
    availability: "Subject to government quotas",
    description: "Refined white cane sugar and raw sugar sourced from certified Indian mills.",
  },
  {
    id: "pulses-commodities",
    slug: "pulses-commodities",
    name: "Bulk Pulses & Legumes (Chickpeas, Lentils)",
    category: "Food & Commodities",
    categorySlug: "food-commodities",
    origin: "India (Madhya Pradesh / Maharashtra)",
    packaging: "25kg / 50kg export bags",
    availability: "Seasonal availability",
    description: "Sortex-cleaned chickpeas, red lentils, and pigeon peas for global food service.",
  },
];

export const mineralProducts: Product[] = [
  {
    id: "silica-sand",
    slug: "silica-sand",
    name: "Industrial Silica Sand",
    category: "Minerals & Raw Materials",
    categorySlug: "minerals",
    origin: "India (Rajasthan / Gujarat)",
    packaging: "1 MT Jumbo Bags / Bulk container liner",
    availability: "Consistent commercial supply",
    description: "High-purity silica sand for glass manufacturing, foundries, and construction chemicals.",
  },
  {
    id: "feldspar",
    slug: "feldspar",
    name: "Potassium & Sodium Feldspar",
    category: "Minerals & Raw Materials",
    categorySlug: "minerals",
    origin: "India (Rajasthan / Andhra Pradesh)",
    packaging: "Jumbo bags (1000kg) / 50kg bags",
    availability: "Available on request",
    description: "Processed feldspar lumps and powder for ceramics, sanitaryware, and tile manufacturing.",
  },
  {
    id: "granite",
    slug: "granite",
    name: "Architectural Granite Slabs & Tiles",
    category: "Minerals & Raw Materials",
    categorySlug: "minerals",
    origin: "India (South India / Rajasthan)",
    packaging: "Fumigated wooden bundles / crates",
    availability: "Subject to quarry schedules",
    description: "Processed granite slabs in polished, flamed, and honed finishes for architectural projects.",
  },
];

/* =======================================================
   PRODUCT CATEGORIES DEFINITION FOR NAVIGATION & CARDS
   ======================================================= */
export const productCategories: ProductCategory[] = [
  {
    id: "fruits",
    number: "01",
    title: "Fruits",
    slug: "fruits",
    description:
      "Export-grade Indian fresh fruits including Bhagwa pomegranates, Solapur Cavendish bananas, lemons, and coconuts.",
    image: "/images/products/pomegranate.jpg",
    productCount: fruitsProducts.length,
    products: fruitsProducts,
  },
  {
    id: "vegetables",
    number: "02",
    title: "Vegetables",
    slug: "vegetables",
    description:
      "Farm-fresh Indian export vegetables including G4 chillies, onions (55+ mm), drumsticks, pumpkins, ginger, and turmeric.",
    image: "/images/products/g4-chilli.jpg",
    productCount: vegetableProducts.length,
    products: vegetableProducts,
  },
  {
    id: "nutrition-food",
    number: "03",
    title: "Nutrition Food",
    slug: "chikki",
    description:
      "Authentic Mahabaleshwar special Mali Chikki including Groundnut Chikki (250g), Peanut Crush Chikki, Peanut Butter Chikki, Coconut Chikki, and assorted nutrition snacks.",
    image: "/images/products/groundnut-chikki.jpg",
    productCount: nutritionFoodProducts.length,
    products: nutritionFoodProducts,
  },
  {
    id: "pulses-lentils",
    number: "04",
    title: "Pulses & Lentils",
    slug: "pulses-lentils",
    description:
      "Export-grade Sortex-cleaned Indian pulses and legumes including Kabuli chickpeas, red lentils, toor dal, and moong beans.",
    image: "/images/products/onion-sourcing-editorial.jpg",
    productCount: pulsesLentilsProducts.length,
    products: pulsesLentilsProducts,
  },
  {
    id: "food-commodities",
    number: "05",
    title: "Food & Commodities",
    slug: "food-commodities",
    description:
      "Bulk staple grains, Basmati and non-Basmati rice, refined cane sugar, pulses, and agro-commodities.",
    image: "/images/products/lemon.jpg",
    productCount: foodCommodities.length,
    products: foodCommodities,
  },
  {
    id: "minerals",
    number: "06",
    title: "Minerals & Raw Materials",
    slug: "minerals",
    description:
      "Industrial silica sand, processed feldspar, bentonite, natural stone, and ceramic mineral supplies.",
    image: "/images/products/suran.jpg",
    productCount: mineralProducts.length,
    products: mineralProducts,
  },
  {
    id: "custom-sourcing",
    number: "07",
    title: "Custom Sourcing",
    slug: "custom-sourcing",
    description:
      "Tailored agricultural procurement, contract farming coordination, private labeling, and port delivery.",
    image: "/images/products/onion.jpg",
    products: [],
  },
];

export const primaryProductCategories: ProductCategory[] = productCategories.slice(0, 4);

/* =======================================================
   HOMEPAGE FEATURED COMMODITIES LIST
   ======================================================= */
export const featuredProducts: string[] = [
  "Groundnut Chikki",
  "Peanut Crush Chikki",
  "Bhagwa Pomegranate",
  "Cavendish Banana",
  "G4 Green Chilli",
  "Red Onion",
  "Chickpeas (Kabuli & Desi)",
  "Turmeric Finger",
];

/* =======================================================
   HELPER UTILITIES
   ======================================================= */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return allProducts.slice(0, limit);

  const sameCategory = allProducts.filter(
    (p) => p.slug !== currentSlug && p.categorySlug === current.categorySlug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = allProducts.filter(
    (p) => p.slug !== currentSlug && p.categorySlug !== current.categorySlug
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getFeaturedAgriProducts(limit: number = 6): Product[] {
  const featuredSlugs = [
    "groundnut-chikki",
    "peanut-crush-chikki",
    "peanut-butter-chikki",
    "pomegranate",
    "g4-chilli",
    "banana-dubai-export-pack",
    "chickpeas",
    "onion-dubai-uae",
    "turmeric",
    "semi-husk-coconut",
  ];
  return allProducts.filter((p) => featuredSlugs.includes(p.slug)).slice(0, limit);
}

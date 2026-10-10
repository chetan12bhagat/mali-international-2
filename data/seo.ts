import { Metadata } from "next";

export interface PageSEO {
  title: string;
  description: string;
  path: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Mali International | India Export & Global Sourcing Company",
    description:
      "Mali International connects global businesses with quality Indian products. Expert sourcing, procurement and export solutions for agriculture, commodities and authentic Mali Chikki from Mahabaleshwar.",
    path: "/",
  },
  about: {
    title: "About Mali International | India Export & Sourcing Partner",
    description:
      "Learn about Mali International, an India-based sourcing company based in Mahabaleshwar, Satara, helping international businesses access quality products.",
    path: "/about",
  },
  products: {
    title: "Indian Products for Global Buyers | Mali International",
    description:
      "Explore sourcing opportunities across agriculture, food commodities, authentic Mali Chikki from Mahabaleshwar and custom requirements with Mali International.",
    path: "/products",
  },
  agriculture: {
    title: "Indian Agricultural Products Exporter | Mali International",
    description:
      "Source fresh Indian agricultural produce — G4 chillies, lemons, pomegranates, drumsticks, bananas and more with daily indicative market rates.",
    path: "/products/agriculture",
  },
  foodCommodities: {
    title: "Food & Agricultural Commodities Sourcing India | Mali International",
    description:
      "Sourcing food-grade commodities and processed food products from Indian suppliers for international buyers.",
    path: "/products/food-commodities",
  },
  chikki: {
    title: "Mali Chikki Exporter & Sourcing Mahabaleshwar | Mali International",
    description:
      "Source authentic Mali Groundnut Chikki (250g), Peanut Crush Chikki, and Peanut Butter Chikki directly from the Mahabaleshwar sourcing belt, Satara, Maharashtra, India.",
    path: "/products/chikki",
  },
  minerals: {
    title: "Mali Chikki Exporter & Sourcing Mahabaleshwar | Mali International",
    description:
      "Source authentic Mali Groundnut Chikki (250g), Peanut Crush Chikki, and Peanut Butter Chikki directly from the Mahabaleshwar sourcing belt, Satara, Maharashtra, India.",
    path: "/products/chikki",
  },
  customSourcing: {
    title: "Custom Product Sourcing India | Mali International",
    description:
      "Tailored product sourcing solutions from India. Tell us your requirements and we identify, verify and coordinate with suitable suppliers.",
    path: "/products/custom-sourcing",
  },
  services: {
    title: "Sourcing & Procurement Services India | Mali International",
    description:
      "Comprehensive sourcing services from India — product identification, supplier coordination, procurement, quality oversight and logistics support.",
    path: "/services",
  },
  industries: {
    title: "Industries We Serve | Mali International",
    description:
      "Serving food & beverage, agriculture, wholesale, retail, construction, manufacturing and hospitality businesses worldwide.",
    path: "/industries",
  },
  globalReach: {
    title: "Global Reach — India Sourcing Worldwide | Mali International",
    description:
      "Connecting Indian suppliers with businesses across the Middle East, Southeast Asia, Europe, North America, Africa and South America.",
    path: "/global-reach",
  },
  quality: {
    title: "Quality & Process | Mali International",
    description:
      "Our approach to quality coordination — product specifications, supplier verification, packaging standards and pre-shipment checks.",
    path: "/quality",
  },
  sustainability: {
    title: "Sustainability & Responsible Sourcing | Mali International",
    description:
      "Promoting responsible sourcing practices across our supplier network in India — environmental care, fair trade and ethical partnerships.",
    path: "/sustainability",
  },
  insights: {
    title: "India Sourcing Insights & Market Updates | Mali International",
    description:
      "Practical insights, guides and updates on sourcing products from India, international trade trends and procurement best practices.",
    path: "/insights",
  },
  contact: {
    title: "Contact Mali International | India Sourcing Partner",
    description:
      "Get in touch with Mali International to discuss your product sourcing requirements from India. Based in Mahabaleshwar, Satara, Maharashtra.",
    path: "/contact",
  },
  requestQuote: {
    title: "Request a Sourcing Quote | Mali International",
    description:
      "Submit your product specifications and requirements to receive a sourcing quotation from Mali International.",
    path: "/request-quote",
  },
  marketRates: {
    title: "Live Sourcing Indicative Rates & Specifications | Mali International",
    description:
      "View current indicative export rates, packaging details, and specifications for Indian agricultural commodities.",
    path: "/market-rates",
  },
  privacyPolicy: {
    title: "Privacy Policy | Mali International",
    description: "Privacy policy and data protection information for Mali International.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | Mali International",
    description: "Terms and conditions for Mali International services and website use.",
    path: "/terms",
  },
};

export function generatePageMetadata(key: string): Metadata {
  const seo = pageSEO[key];
  if (!seo) {
    return {
      title: "Mali International | India Export & Sourcing Company",
      description:
        "Connecting international businesses with trusted Indian suppliers across agriculture, food commodities and authentic Mali Chikki from Mahabaleshwar.",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      siteName: "Mali International",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

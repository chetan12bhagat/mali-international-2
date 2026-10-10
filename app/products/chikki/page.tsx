import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Package, Sparkles } from "lucide-react";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { chikkiProducts } from "@/data/products";
import { company, createWhatsAppEnquiryUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = generatePageMetadata("chikki");

export default function ChikkiProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(50px,8vw,90px)] bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Mali Chikki" },
            ]}
          />
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Mahabaleshwar Special Sourcing Belt
              </div>
              <SectionLabel className="mb-4">AUTHENTIC INDIAN CONFECTIONERY &amp; NUTRITION</SectionLabel>
              <h1 className="text-dark-text mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Mali Chikki
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-[680px]">
                Authentic, nutrient-rich traditional peanut chikkis crafted with pure jaggery and roasted groundnuts from the renowned Mahabaleshwar sourcing belt in Maharashtra, India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/request-quote" size="lg">
                  Request Export Quotation
                </Button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    "Hello Mali International, I am interested in sourcing Mali Chikki from Mahabaleshwar. Please share pricing and export details."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-[3px] shadow-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Instant WhatsApp Inquiry
                </a>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Sourcing Origin Banner */}
      <section className="py-4 bg-[#0A192F] text-white border-y border-white/10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>
                <strong className="text-gold">Sourcing Belt:</strong> Mahabaleshwar, Satara, Maharashtra, India
              </span>
            </div>
            <div className="flex items-center gap-6 text-white/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Export Compliant Packaging
              </span>
              <span className="flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-gold" /> Bulk &amp; Retail Monocarton Formats
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-[clamp(60px,10vw,120px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 max-w-2xl">
              <SectionLabel className="mb-3">EXPORT PORTFOLIO</SectionLabel>
              <h2 className="text-3xl font-bold text-dark-text tracking-tight mb-3">
                Authentic Mali Chikki Range
              </h2>
              <p className="text-muted text-base">
                Available for global distributors, retail brands, ethnic stores, and private label procurement.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chikkiProducts.map((product, i) => {
              const whatsappUrl = createWhatsAppEnquiryUrl(product.name, product.variant || "Export Pack");

              return (
                <AnimatedSection key={product.id} delay={i * 0.1}>
                  <div className="group bg-white rounded-[4px] border border-slate-200/90 hover:border-gold/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={product.image || "/images/products/mali-groundnut-chikki.jpg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-navy/90 text-gold text-[10px] font-bold uppercase tracking-wider rounded-[3px] backdrop-blur-xs">
                        {product.netWeight || "Export Pack"}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-white/95 text-slate-800 text-[11px] font-semibold rounded-[2px] shadow-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        Mahabaleshwar
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                      <div className="mb-2">
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark-text group-hover:text-navy transition-colors mb-2">
                        {product.name}
                      </h3>
                      {product.variant && (
                        <p className="text-xs font-semibold text-slate-500 mb-3">
                          {product.variant}
                        </p>
                      )}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                        <div className="flex justify-between py-1">
                          <span className="text-slate-400 font-medium">Sourcing Belt</span>
                          <span className="text-slate-800 font-semibold text-right">
                            Mahabaleshwar, Satara
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-t border-slate-100/60">
                          <span className="text-slate-400 font-medium">Origin</span>
                          <span className="text-slate-800 font-semibold text-right">
                            {product.origin}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-t border-slate-100/60">
                          <span className="text-slate-400 font-medium">Packaging</span>
                          <span className="text-slate-800 font-semibold text-right">
                            {product.packaging}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-t border-slate-100/60">
                          <span className="text-slate-400 font-medium">Availability</span>
                          <span className="text-emerald-700 font-bold">
                            {product.availability}
                          </span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                        <Link
                          href="/request-quote"
                          className="inline-flex items-center justify-center gap-1 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-navy rounded-[3px] border border-slate-200 transition-colors text-center"
                        >
                          Quote
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-[3px] border border-emerald-200/80 hover:border-emerald-600 transition-all duration-200 text-center"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Sourcing Belt & Quality USP */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 p-8 md:p-12 bg-slate-50 border border-slate-200/80 rounded-[6px] grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0 text-navy">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-text text-base mb-1">Mahabaleshwar Belt Sourcing</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Direct from Mahabaleshwar, Satara, Maharashtra — globally celebrated for pristine climate, authentic jaggery, and heritage chikki craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-text text-base mb-1">Export-Grade Quality</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Hygienically packaged with extended shelf life, clean natural nutrition, zero chemical additives, and complete export documentation support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-700">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-text text-base mb-1">Custom &amp; Private Labeling</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Flexible container packing, monocarton box customization, barcode integration, and private label branding for international supermarket chains.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Commercial Inquiry CTA */}
      <section className="py-[clamp(60px,10vw,120px)] bg-[#082B57] text-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <Sparkles className="w-3 h-3" />
                Direct Export Procurement
              </span>
              <h2 className="text-white mb-6 text-3xl font-bold">
                Import Authentic Mali Chikki from India
              </h2>
              <p className="text-white/70 mb-8 text-base sm:text-lg leading-relaxed">
                Connect with Mali International for FOB / CIF quotations, container stuffing details, sample requests, and customized export packing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/request-quote" variant="secondary" size="lg">
                  Request Commercial Quotation
                </Button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    "Hello Mali International, I would like to inquire about importing Mali Chikkis from Mahabaleshwar."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-[3px] shadow-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}

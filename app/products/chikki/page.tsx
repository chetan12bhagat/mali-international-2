import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { chikkiProducts } from "@/data/products";
import { company, createWhatsAppEnquiryUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ArrowRight, MapPin, Package, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = generatePageMetadata("chikki");

export default function ChikkiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white border-b border-light-gray/60">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Mali Chikki" },
            ]}
          />
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              Sourcing Belt: Mahabaleshwar, Satara
            </div>
            <h1 className="text-dark-text mb-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Authentic Mali Chikki
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-[680px] leading-relaxed">
              Exporting the heritage taste of Mahabaleshwar with premium Mali Chikkis. Made with
              pure golden jaggery, selected roasted peanuts, and traditional craftsmanship for global markets.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-[clamp(60px,10vw,140px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <SectionLabel className="mb-2">EXPORT CATALOGUE</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-text">
                  Signature Mali Chikki Varieties
                </h2>
              </div>
              <p className="text-sm text-muted max-w-md">
                Available in retail packs, 250g monocarton boxes, and bulk master export cartons with private labeling options.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chikkiProducts.map((product, i) => {
              const whatsappUrl = createWhatsAppEnquiryUrl(product.name, product.packaging);

              return (
                <AnimatedSection key={product.id} delay={i * 0.12}>
                  <div className="group bg-white border border-slate-200/90 hover:border-gold/60 rounded-[6px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={product.image || "/images/products/mali-groundnut-chikki.jpg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-navy/90 text-gold text-[10px] font-bold uppercase tracking-wider rounded-[3px] backdrop-blur-xs">
                        {product.netWeight || "Flow Pack"}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-white/95 text-slate-800 text-[11px] font-semibold rounded-[2px] shadow-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        Mahabaleshwar
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-dark-text group-hover:text-navy transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                        <div className="flex justify-between py-1">
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
                    Direct from Mahabaleshwar, renowned globally for authentic jaggery and peanut confectionery craft.
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
                    Hygienically packaged with extended shelf life, zero chemical additives, and export certification support.
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
                    Flexible container packing, barcode integration, and private label branding for international retail chains.
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

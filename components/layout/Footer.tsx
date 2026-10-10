import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { company } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      <Container>
        {/* Top Section */}
        <div className="pt-[clamp(60px,8vw,100px)] pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" aria-label="Mali International Home" className="flex items-center gap-3">
                <Image
                  src="/logos/main-logo.jpeg"
                  alt="Mali International"
                  width={64}
                  height={64}
                  className="h-[52px] w-auto object-contain rounded-full bg-white p-0.5 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-[0.08em] text-white uppercase font-sans leading-none">
                    Mali International
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-gold uppercase font-semibold mt-1 leading-none">
                    Global Trade &amp; Sourcing
                  </span>
                </div>
              </Link>
              <p className="mt-5 text-[0.9375rem] text-white/50 leading-relaxed max-w-[320px]">
                {company.tagline}
              </p>

              {/* Location & Contact indicator */}
              <div className="mt-4 text-xs text-white/40 space-y-2">
                <p className="font-medium text-white/70">{company.address}</p>
                {company.email && (
                  <div className="flex items-center gap-2 pt-0.5">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-white/70 hover:text-gold transition-colors duration-200 break-all"
                    >
                      {company.email}
                    </a>
                  </div>
                )}
                {company.phone && (
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-white/70 hover:text-gold transition-colors duration-200"
                    >
                      {company.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              <div className="mt-6 flex items-center gap-2.5">
                {company.social.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mali International on Instagram"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 text-white/70 hover:text-gold flex items-center justify-center transition-all duration-200"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {company.social.facebook && (
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mali International on Facebook"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 text-white/70 hover:text-gold flex items-center justify-center transition-all duration-200"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.company.map((item) => (
                    <li key={`comp-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Products
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.products.map((item) => (
                    <li key={`prod-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Services
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.services.map((item) => (
                    <li key={`serv-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.resources.map((item) => (
                    <li key={`res-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} {company.name}. All Rights Reserved. Mahabaleshwar, Satara, Maharashtra, India.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

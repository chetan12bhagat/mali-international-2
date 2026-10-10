"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { company } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In production, integrate with your form handler
      console.log("Contact form data:", data);
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-light-gray text-dark-text text-[0.9375rem] rounded-[3px] outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors";
  const labelClasses = "block text-sm font-medium text-dark-text mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  return (
    <>
      <section className="pt-32 pb-[clamp(40px,6vw,60px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Contact</SectionLabel>
            <h1 className="text-dark-text mb-4 max-w-3xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-xl text-muted max-w-[560px] leading-relaxed">
              Reach out to discuss your sourcing requirements from India.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-dark-text mb-6">{company.name}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {company.description}
                </p>

                <div className="space-y-4">
                  {company.email && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs uppercase tracking-wider text-muted block mb-0.5">Email</span>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-navy font-medium hover:text-gold transition-colors break-all sm:break-normal"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {company.phone && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted block mb-0.5">Phone</span>
                        <a href={`tel:${company.phone}`} className="text-navy font-medium hover:text-gold transition-colors">
                          {company.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  {company.whatsapp && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.676.15-.2.301-.776.98-.952 1.18-.175.2-.35.226-.651.075-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.495-1.78-1.67-2.081-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.588-.493-.508-.676-.517-.175-.009-.376-.01-.576-.01-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.507 0 1.479 1.077 2.908 1.228 3.108.15.2 2.12 3.238 5.137 4.542.718.31 1.278.496 1.715.635.72.23 1.376.197 1.895.12.578-.087 1.782-.728 2.032-1.43.251-.702.251-1.304.176-1.43-.076-.126-.276-.201-.577-.351z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted block mb-0.5">WhatsApp</span>
                        <a
                          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy font-medium hover:text-gold transition-colors"
                        >
                          {company.whatsapp}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted block mb-0.5">Location &amp; Address</span>
                      <span className="text-dark-text font-medium">{company.address}</span>
                    </div>
                  </div>

                  {(company.social.instagram || company.social.facebook) && (
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-muted block mb-2.5">
                        Follow &amp; Connect
                      </span>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {company.social.instagram && (
                          <a
                            href={company.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 text-slate-700 hover:text-pink-600 rounded-[3px] text-xs font-semibold transition-all duration-200"
                          >
                            <InstagramIcon className="w-4 h-4 text-pink-600" />
                            Instagram
                          </a>
                        )}
                        {company.social.facebook && (
                          <a
                            href={company.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 rounded-[3px] text-xs font-semibold transition-all duration-200"
                          >
                            <FacebookIcon className="w-4 h-4 text-blue-600" />
                            Facebook
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.1}>
                {submitted ? (
                  <div className="bg-white p-8 md:p-12 border border-light-gray text-center">
                    <span className="block w-12 h-[2px] bg-gold mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-dark-text mb-3">Thank you.</h3>
                    <p className="text-muted">
                      Your enquiry has been received. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-10 border border-light-gray">
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-sm text-red-600 rounded-[3px]">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClasses}>Name *</label>
                        <input id="name" {...register("name")} className={inputClasses} />
                        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="company" className={labelClasses}>Company</label>
                        <input id="company" {...register("company")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Email *</label>
                        <input id="email" type="email" {...register("email")} className={inputClasses} />
                        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>Phone</label>
                        <input id="phone" {...register("phone")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="country" className={labelClasses}>Country *</label>
                        <input id="country" {...register("country")} className={inputClasses} />
                        {errors.country && <p className={errorClasses}>{errors.country.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="product" className={labelClasses}>Product of Interest</label>
                        <input id="product" {...register("product")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="quantity" className={labelClasses}>Quantity</label>
                        <input id="quantity" {...register("quantity")} className={inputClasses} />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className={labelClasses}>Message *</label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`${inputClasses} resize-vertical`}
                      />
                      {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-medium rounded-[3px] hover:bg-navy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

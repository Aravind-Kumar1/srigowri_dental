import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Image from "next/image";
import { CheckCircle, ArrowLeft, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";

const PHONE_DISPLAY = "+91 7981 765 567";
const PHONE_HREF = "tel:+917981765567";

/** Pre-render every service page at build time so navigation is static HTML, not on-demand SSR. */
export function generateStaticParams() {
  return servicesData.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const benefitsTitle = service.benefitsHeading ?? "Benefits";

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Hero page="single_service" serviceContext={service} />

      {/* Back Button */}
      <div className="container-custom px-6 pt-8 pb-0">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/8 hover:bg-primary/15 border border-primary/20 px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-x-0.5"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>
      </div>

      <section 
        className="py-16 lg:py-20"
        style={{ 
          background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 50%, #F0F7FF 100%)"
        }}
      >
        <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16 px-6">
          <div className="lg:col-span-8">
            <h2 className="heading-section">Treatment Overview</h2>
            <p className="text-body mb-10">{service.longDescription}</p>
 
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-8 h-1 outline-primary bg-primary rounded-full" />
              {benefitsTitle}
            </h3>
 
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-primary p-5 rounded-2xl shadow-premium border-none group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="text-white/70" size={14} />
                  </div>
                  <span className="font-semibold text-white text-[0.9375rem] leading-snug tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
 
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 bg-white rounded-[2rem] p-8 lg:p-10 shadow-card border border-border/40 overflow-hidden group">
              <div className="relative z-10 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Ready to start your treatment?
                </h3>
                <p className="text-body-small mb-8">
                  Get treated by clinical experts using the most advanced and painless dental technology.
                </p>
                <div className="space-y-4">
                  <Link
                    href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                    prefetch={false}
                    className="inline-flex items-center justify-center w-full rounded-xl transition-all active:scale-[0.98] bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 px-8 py-5 text-base font-bold"
                  >
                    <Calendar size={18} className="mr-2" />
                    Book Free Consultation
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 w-full rounded-xl transition-all active:scale-[0.98]",
                      "bg-slate-50 border border-border text-secondary hover:bg-slate-100",
                      "px-8 py-4 text-base font-bold"
                    )}
                  >
                    <Phone size={18} />
                    Call Clinic: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-0 transition-transform group-hover:scale-150 duration-700" />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

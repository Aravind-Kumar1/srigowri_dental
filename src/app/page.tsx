import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import dynamic from "next/dynamic";

const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"));
const About = dynamic(() => import("@/components/sections/About"));

export const metadata: Metadata = {
  title: "Best Dental Clinic in Hayathnagar Hyderabad | Sri Gowri Dental Care",
  description:
    "Sri Gowri Dental Care – the #1 dental clinic in Hayathnagar, Hyderabad. Advanced dental implants, root canal, smile designing, invisible aligners, pediatric dentistry & cosmetic dentistry. Open Mon–Sat 9AM–9PM, Sun 10AM–1PM. Book free consultation!",
  alternates: {
    canonical: "https://www.srigowridentalcare.com",
  },
  openGraph: {
    title: "Best Dental Clinic in Hayathnagar Hyderabad | Sri Gowri Dental Care",
    description:
      "Top-rated dental clinic in Hayathnagar, Hyderabad. Expert prosthodontist, pediatric dentist, orthodontist & more. Advanced technology, affordable prices.",
    url: "https://www.srigowridentalcare.com",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

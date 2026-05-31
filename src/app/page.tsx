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

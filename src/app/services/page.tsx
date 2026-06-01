import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Dental Services in Hayathnagar Hyderabad | Sri Gowri Dental Care",
  description:
    "Explore all dental services at Sri Gowri Dental Care, Hayathnagar – dental implants, invisible aligners, root canal, smile designing, crowns, bridges, pediatric dentistry, cosmetic dentistry & more. Advanced technology, expert care.",
  alternates: {
    canonical: "https://www.srigowridentalcare.com/services",
  },
  openGraph: {
    title: "Dental Services in Hayathnagar | Sri Gowri Dental Care",
    description:
      "All dental treatments under one roof at Hayathnagar, Hyderabad. Implants, root canal, aligners, smile design, kids dentistry & more.",
    url: "https://www.srigowridentalcare.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero page="services" />
      <Services bgGradient={true} />
      <CTA />
      <Footer />
    </main>
  );
}

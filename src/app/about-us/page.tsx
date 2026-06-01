import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutFull from "@/components/sections/about/AboutFull";
import TeamSection from "@/components/sections/about/TeamSection";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "About Us – Best Dentists in Hayathnagar | Sri Gowri Dental Care",
  description:
    "Meet the expert dental team at Sri Gowri Dental Care, Hayathnagar, Hyderabad. Dr. N Sri Gowri (Prosthodontist & Implantologist), Dr. K Pratej Kiran (Pediatric Dentist) & specialist team. Advanced care, ethical practice.",
  alternates: {
    canonical: "https://www.srigowridentalcare.com/about-us",
  },
  openGraph: {
    title: "About Our Expert Dentists in Hayathnagar | Sri Gowri Dental Care",
    description:
      "Learn about Sri Gowri Dental Care's expert team of prosthodontists, pediatric dentists, orthodontists & more in Hayathnagar, Hyderabad.",
    url: "https://www.srigowridentalcare.com/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero page="about" />
      <AboutFull />
      <TeamSection />
      <CTA />
      <Footer />
    </main>
  );
}

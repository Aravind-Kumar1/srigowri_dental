import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Dental Health Blog | Tips & Guides | Sri Gowri Dental Care Hayathnagar",
  description:
    "Read expert dental tips, oral health guides, and treatment insights from the specialists at Sri Gowri Dental Care, Hayathnagar, Hyderabad. Stay informed about dental implants, aligners, cosmetic dentistry & more.",
  alternates: {
    canonical: "https://www.srigowridentalcare.com/blogs",
  },
  openGraph: {
    title: "Dental Health Blog | Sri Gowri Dental Care Hayathnagar",
    description:
      "Expert dental tips, treatment guides, and oral health insights from Hayathnagar's top dental clinic.",
    url: "https://www.srigowridentalcare.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero page="blog" />
      <Blogs showIntro={false} />
      <Footer />
    </main>
  );
}

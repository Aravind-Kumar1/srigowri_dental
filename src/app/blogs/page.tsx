import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: "Blogs | Professional Dental Care",
  description:
    "Read dental tips, preventive care insights, and treatment guidance from our clinical experts.",
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

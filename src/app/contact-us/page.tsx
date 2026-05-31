"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import { Phone } from "lucide-react";
import Hero from "@/components/sections/Hero";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Dynamic Hero Banner */}
      <Hero page="contact" />
      <Contact />

      {/* Quick Action Section */}
      <section className="py-16 bg-background">
        <div className="container-custom px-6 flex justify-center">
          {/* Call Us Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 max-w-2xl w-full text-center">
            <div className="flex items-center gap-2.5 text-primary">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-secondary">
              Call Us Anytime
            </h2>
            
            <a 
              href="tel:+917981765567" 
              className="group flex items-center gap-4 py-1 justify-center"
            >
              <span className="text-3xl lg:text-4xl font-black text-primary group-hover:text-secondary transition-colors tabular-nums">
                +91 7981 765 567
              </span>
            </a>
            
            <p className="text-slate-500 font-medium leading-relaxed">
              Prefer to speak with a professional? Our friendly team is ready to assist you with any questions.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

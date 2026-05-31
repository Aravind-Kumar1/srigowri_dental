"use client";

import React from "react";
import { CheckCircle2, Star, Shield, Clock, Sparkles } from "lucide-react";

const highlights = [
  { text: "Highly Rated Dental Clinic", icon: Star },
  { text: "Painless Treatment Approach", icon: Sparkles },
  { text: "Advanced Dental Technology", icon: Shield },
  { text: "Affordable Pricing", icon: CheckCircle2 },
  { text: "Personalized Plans", icon: Clock },
];

export default function Highlights() {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="relative flex overflow-hidden w-full select-none gap-12">
        <div className="flex gap-12 shrink-0 animate-marquee py-2">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 text-white/90"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 border border-white/30">
                <item.icon size={20} className="stroke-[2.5]" />
              </div>
              <span className="font-black text-sm lg:text-lg uppercase tracking-wider">
                {item.text}
              </span>
              <span className="ml-12 text-white/20 font-black text-2xl">•</span>
            </div>
          ))}
        </div>
        <div className="flex gap-12 shrink-0 animate-marquee py-2" aria-hidden="true">
          {highlights.map((item, i) => (
            <div 
              key={`${i}-dup`} 
              className="flex items-center gap-4 text-white/90"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 border border-white/30">
                <item.icon size={20} className="stroke-[2.5]" />
              </div>
              <span className="font-black text-sm lg:text-lg uppercase tracking-wider">
                {item.text}
              </span>
              <span className="ml-12 text-white/20 font-black text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

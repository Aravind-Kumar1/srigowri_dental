"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, HeartPulse, Clock, Sparkles, Award } from "lucide-react";

const bentoItems = [
  {
    title: "Top-Rated Dental Clinic",
    desc: "Recognized for excellence in clinical care and patient satisfaction.",
    icon: Award,
    className: "lg:col-span-2 lg:row-span-2",
    bg: "from-secondary to-primary",
  },
  {
    title: "Painless Approach",
    desc: "Advanced techniques for maximum comfort.",
    icon: HeartPulse,
    className: "lg:col-span-1 lg:row-span-1",
    bg: "from-primary to-primary-dark",
  },
  {
    title: "Safe & Hygienic",
    desc: "Strict sterilization protocols.",
    icon: ShieldCheck,
    className: "lg:col-span-1 lg:row-span-1",
    bg: "from-[#0A1A35] to-secondary",
  },
  {
    title: "Modern Tech",
    desc: "Using the latest diagnostic tools.",
    icon: Sparkles,
    className: "lg:col-span-1 lg:row-span-2",
    bg: "from-secondary to-[#0A1A35]",
  },
  {
    title: "Quick Slots",
    desc: "Minimal wait times for you.",
    icon: Clock,
    className: "lg:col-span-1 lg:row-span-1",
    bg: "from-primary-dark to-primary",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-slate-50/50">
      <div className="container-custom px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-4">
               The Standard of Excellence
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
               What Makes Our <span className="gradient-text italic">Clinic Different?</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm mb-2">
            Experience a fusion of clinical precision and patient-first hospitality designed for your lasting oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-3 gap-5">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden group p-8 rounded-[2.5rem] bg-gradient-to-br ${item.bg} text-white shadow-premium ${item.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/70 font-medium leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest">Learn More</span>
                  <div className="w-8 h-[1px] bg-white/40" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full blur-2xl -ml-12 -mb-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

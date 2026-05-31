"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  GraduationCap,
  Award,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const visionPoints = [
  "To become a trusted and leading dental care center known for clinical excellence.",
  "To utilize advanced technology and ethical practice for every treatment.",
  "To deliver compassionate patient care and prioritize long-term oral health.",
  "To foster awareness and education around preventive oral care.",
  "To create healthier, happier smiles in our local community.",
];

const missionPoints = [
  "To provide safe, modern, and high-quality dental treatments for all age groups.",
  "To deliver patient-centered care with honesty, comfort, and transparency.",
  "To promote awareness about oral health and preventive dentistry.",
  "To maintain the highest standards of hygiene and sterilization.",
  "To continuously upgrade our knowledge and technology for better patient outcomes.",
];

const whyChoose = [
  { label: "Experienced & patient-friendly dental team" },
  { label: "Advanced dental equipment and digital technology" },
  { label: "Comfortable and hygienic treatment environment" },
  { label: "Personalized treatment planning" },
  { label: "Affordable and transparent pricing" },
  { label: "Special care for children and anxious patients" },
];

const drSpecializations = [
  "Dental Implants",
  "Veneers & Smile Designing",
  "TMJ Disorder Management",
  "BPS Dentures",
  "Full Mouth Rehabilitation",
  "Crowns and Bridges",
  "Digital Smile Designing",
  "Cosmetic & Restorative Dentistry",
  "Complete and Partial Dentures",
];

export default function AboutFull() {
  return (
    <>
      {/* ── Section 1: Welcome / Clinic Overview ── */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-6"
          >
            <span className="w-10 h-[2px] bg-primary" />
            About Sri Gowri Dental Care
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-800 mb-8"
          >
            Where Healthy Smiles & Patient Comfort Come First
          </motion.h2>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to <strong className="text-secondary">Sri Gowri Dental Care</strong> — where healthy smiles
              and patient comfort come first. We are committed to providing high-quality, ethical, and
              affordable dental treatments for patients of all age groups.
            </p>
            <p>
              Our clinic combines modern dental technology with personalized care to create a comfortable
              and stress-free experience for every patient. We specialize in preventive, cosmetic, restorative,
              and advanced dental treatments including dental implants, root canal treatments, smile designing,
              aligners, pediatric dentistry, crowns, bridges, teeth whitening, and full mouth rehabilitation.
            </p>
            <p>
              Our team believes in educating patients and helping them make informed decisions about their
              oral health. We focus on maintaining strict sterilization protocols, painless treatment approaches,
              and long-term dental solutions tailored to individual needs.
            </p>
            <p>
              Whether it is a routine dental check-up or a complete smile transformation, Sri Gowri Dental
              Care aims to deliver confident smiles with <strong className="text-secondary">compassion, precision, and care.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Vision & Mission ── */}
      <section className="section-padding bg-background/80 border-y border-border/60">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-9 shadow-premium border border-slate-100 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 mb-4">Our Vision</h3>
              <ul className="space-y-3">
                {visionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-[1.05rem] leading-relaxed">
                    <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-white rounded-3xl p-8 lg:p-9 shadow-premium border border-slate-100 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="text-primary" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-[1.05rem] leading-relaxed">
                    <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Choose Us ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-lg">
              Your smile is our priority — here&apos;s what sets Sri Gowri Dental Care apart.
            </p>
          </motion.div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 items-start bg-primary rounded-2xl p-6 shadow-premium group hover:scale-[1.02] transition-all duration-300"
              >
                <CheckCircle className="text-white/80 shrink-0 mt-0.5" size={22} />
                <span className="font-semibold text-white tracking-wide">{item.label}</span>
              </motion.li>
            ))}
          </ul>

          <p className="mt-10 text-center text-lg font-bold text-primary italic">
            Your smile is our priority.
          </p>
        </div>
      </section>

      {/* ── Section 4: About Dr. Sri Gowri ── */}
      <section className="section-padding bg-[#F8FCFF] border-t border-border/60">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch max-w-6xl mx-auto">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[50%] relative shrink-0 flex"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 border-8 border-white w-full flex flex-col min-h-[480px]">
                <div className="relative w-full h-full flex-grow aspect-[3/4] lg:aspect-auto bg-gradient-to-br from-[#EBF8FF] to-[#DBEAFE]">
                  <Image
                    src="/gowri.jpeg"
                    alt="Dr. N Sri Gowri – Prosthodontist & Implantologist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating credential badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 z-20 bg-white p-4 rounded-2xl shadow-premium border border-slate-100 flex flex-col items-center"
              >
                <div className="text-3xl font-black text-primary leading-none">10+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Years Exp.</div>
              </motion.div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[50%] flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                <Stethoscope size={16} />
                Meet Our Expert Dentist
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-800 mb-1">
                Dr. N Sri Gowri
              </h2>
              <p className="text-muted-foreground font-medium mb-4">BDS, MDS — Prosthodontist & Implantologist</p>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Prosthodontist", "Implantologist", "BPS Provider", "TMJ Specialist"].map(tag => (
                  <span key={tag} className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/15">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                <p>
                  Dr. Sri Gowri is a dedicated Prosthodontist and Implantologist committed to delivering advanced, ethical,
                  and patient-centered dental care. She combines state-of-the-art dental technology with a gentle, 
                  patient-friendly approach to provide long-lasting dental solutions and create healthy, confident smiles.
                </p>

                {/* Education highlight */}
                <div className="bg-white rounded-2xl p-4 border border-primary/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                    <GraduationCap size={16} className="text-primary" /> Education
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong className="text-secondary">BDS</strong> — SVS Institute of Dental Sciences</p>
                    <p><strong className="text-secondary">MDS (Prosthodontics & Implantology)</strong> — Sri Sai College of Dental Surgery</p>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Award size={13} className="text-primary" /> Specializes In
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {drSpecializations.map(item => (
                  <li key={item} className="flex items-center gap-2 text-secondary text-sm font-semibold">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary" size={12} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  href="/services"
                  className="btn-premium bg-primary text-white hover:brightness-110 shadow-premium px-8 py-3.5 text-base gap-2 inline-flex"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Patient Experience ── */}
      <section className="section-padding bg-background border-t border-border/60">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-6">
              <HeartHandshake size={18} />
              Patient Experience
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-800 mb-4">
              Comfortable Visits, Clear Guidance
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We understand that visiting a dentist can be stressful. That is why we create a friendly,
              welcoming environment where patients feel relaxed, heard, and confident in their care.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: "Clear Explanation", desc: "We explain every treatment step so you always know what to expect." },
                { title: "Comfortable Procedures", desc: "Painless techniques and a calming atmosphere for every visit." },
                { title: "Long-Term Results", desc: "Treatments designed for lasting health, not just quick fixes." },
              ].map((card) => (
                <div key={card.title} className="bg-[#EBF8FF] rounded-2xl p-6 border border-primary/10 text-left">
                  <CheckCircle className="text-primary mb-3" size={22} />
                  <h4 className="font-bold text-secondary text-base mb-1">{card.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

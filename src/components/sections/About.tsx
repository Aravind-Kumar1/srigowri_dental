"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="clinical-expertise" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch max-w-7xl mx-auto px-6 lg:px-12">

          {/* Left — Photo */}
          <div className="w-full lg:w-[44%] relative shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 border-8 border-white"
            >
              <div className="aspect-[3/4] relative bg-gradient-to-br from-[#EBF8FF] to-[#DBEAFE]">
                <Image
                  src="/gowri.jpeg"
                  alt="Dr. N Sri Gowri – Prosthodontist & Implantologist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 lg:-left-10 z-20 bg-white p-5 rounded-3xl shadow-premium border border-slate-100 flex flex-col items-center"
            >
              <div className="text-4xl font-black text-primary leading-none">10+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Years Exp.</div>
            </motion.div>

            {/* BPS badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute -top-4 -right-4 lg:-right-8 z-20 bg-primary text-white px-4 py-2.5 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Certified</div>
              <div className="text-sm font-black leading-tight">BPS Provider</div>
              <div className="text-[10px] font-bold opacity-80">TMJ Specialist</div>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0" />
          </div>

          {/* Right — Content */}
          <div className="w-full lg:w-[56%] min-w-0 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-5">Clinical Expertise</p>

              <h2 className="heading-section mb-3">
                Dr. N. <span className="gradient-text italic">Sri Gowri</span>
              </h2>

              <p className="text-secondary font-semibold text-lg mb-6">
                Prosthodontist · Implantologist · BPS Provider · TMJ Specialist
              </p>

              <p className="text-body text-lg leading-relaxed mb-10">
                With over <strong>10 years of clinical expertise</strong>, Dr. Sri Gowri brings compassionate, evidence-based dental care — from advanced implants and full-mouth rehabilitation to TMJ management and aesthetic smile designing. She is dedicated to delivering patient-centric solutions, combining state-of-the-art dental technology with a gentle, personalized touch to ensure comfortable, precise, and long-lasting results. She focuses on understanding each patient&apos;s unique needs to create tailored treatment plans that restore both oral function and natural aesthetics.
              </p>

              <Link
                href="/about-us"
                className="btn-premium bg-primary text-white px-8 py-3.5 text-[15px] gap-2"
              >
                Read Our Full Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

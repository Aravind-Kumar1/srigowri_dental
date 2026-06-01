"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. N Sri Gowri",
    role: "Prosthodontist and Implantologist, BPS Provider and TMJ Specialist",
    degree: "BDS, MDS",
    image: "/gowri.jpeg",
    tags: ["Prosthodontics", "Implantology", "TMJ Specialist"],
  },
  {
    name: "Dr. K Pratej Kiran",
    role: "Pediatric Dentist, Root canal specialist, Aligners provider",
    degree: "BDS, MDS (Paediatric Dentistry)",
    image: "/pratej_doc.png",
    tags: ["Paediatric Dentistry", "Root Canal", "Aligners"],
  },
  {
    name: "Dr. Srikanth Kurra",
    role: "Periodontist",
    degree: "BDS, MDS (Periodontics)",
    image: "/pratej_doc2.jpeg",
    tags: ["Gum Treatments", "Bone Grafting", "Dental Implants"],
  },
  {
    name: "Dr. Sandeep",
    role: "Orthodontist",
    degree: "BDS, MDS",
    image: "/sandeep.jpeg",
    tags: ["Orthodontics", "Dentofacial Orthopedics", "Aligners"],
  },
  {
    name: "Dr. Sreeraj Sandeep",
    role: "Maxillofacial Surgeon",
    degree: "BDS, MDS",
    image: "/sreeraj.jpeg",
    tags: ["Maxillofacial Surgery", "Reconstruction", "Extractions"],
  },
  {
    name: "Dr. A. Aravind Kumar",
    role: "Periodontist",
    degree: "BDS, MDS",
    image: "/aravind.jpeg",
    tags: ["Periodontics", "Gum Care", "Healthy Foundations"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const TeamSection = () => {
  return (
    <section className="section-padding overflow-hidden bg-[#F8FCFF]">
      <div className="container-custom px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mb-6 inline-flex items-center gap-4 justify-center">
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
              Meet Our Team
            </span>
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
          </div>
          <h2 className="heading-section">
            Expert Specialists <span className="gradient-text italic">Behind Your Smile</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            Our team of highly qualified dental specialists brings decades of combined experience, ensuring world-class care tailored to your needs.
          </p>
        </motion.div>

        {/* Cards Grid — 2 columns horizontal layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              variants={cardVariants}
              className="flex flex-col rounded-[24px] border border-slate-100 bg-[#FCFCFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(26,73,150,0.1)] justify-center"
            >
              {/* Image + Main Info — side by side */}
              <div className="flex gap-6 max-[500px]:flex-col items-stretch">
                {/* Photo box — height matches right side text */}
                <div className="relative w-[180px] min-h-[210px] shrink-0 overflow-hidden rounded-[18px] bg-white border border-black/5 shadow-md max-[500px]:mx-auto">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="180px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>

                {/* Main Info */}
                <div className="flex flex-col justify-center py-1 flex-grow">
                  <div className="mb-2 inline-flex self-start items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary uppercase tracking-wide">
                    <Award size={12} />
                    Specialist
                  </div>
                  <h3 className="text-[22px] font-black text-slate-800 mb-1 leading-tight">{doc.name}</h3>
                  <p className="text-[14px] font-semibold text-primary mb-1.5 leading-snug">{doc.role}</p>
                  <span className="text-[13px] font-medium text-slate-400 mb-3">{doc.degree}</span>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-full border border-primary/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

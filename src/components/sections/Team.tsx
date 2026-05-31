"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";

const doctors = [
  {
    name: "Dr. K Pratej Kiran",
    role: "Pediatric Dentist, Root canal specialist, Aligners provider",
    degree: "BDS, MDS (Paediatric Dentistry)",
    education: "BDS from Sri Sai College of Dental Surgery & MDS from Sri Venkata Sai Institute of Dental Sciences.",
    image: "/pratej_doc.png",
    bio: "Dedicated specialist with over 10 years of experience since 2015. He specializes in paediatric dental treatments under General Anaesthesia (GA), full-mouth rehabilitation, Cleft Feeding Plates, and Nasoalveolar Moulding (NAM) — combining advanced clinical skills with compassionate, patient-friendly care.",
  },
  {
    name: "Dr. N Sri Gowri",
    role: "Prosthodontist and Implantologist, BPS Provider and TMJ Specialist",
    degree: "BDS, MDS",
    education: "Expert in prosthodontics, advanced dental implantology, and TMJ disorder management.",
    image: "/gowri.jpeg",
    bio: "Dedicated to restoring beautiful and functional smiles with a patient-centered approach. Specializing in TMJ disorders and providing comprehensive dental care to ensure long-term oral health.",
  },
  {
    name: "Dr. Srikanth Kurra",
    role: "Periodontist",
    degree: "BDS, MDS (Periodontics)",
    education: "Specialist in advanced gum treatments, bone grafting, and dental implants.",
    image: "/pratej_doc2.jpeg",
    bio: "An expert Periodontist committed to delivering precise, comfortable, and advanced gum care and surgical rehabilitation. He specializes in treating complex periodontal conditions, restoring gum tissue health, and dental implantology with a high patient-satisfaction rate.",
  },
  {
    name: "Dr. Sandeep",
    role: "Orthodontist",
    degree: "BDS, MDS",
    education: "Specialist in orthodontics and dentofacial orthopedics.",
    image: "/sandeep.jpeg",
    bio: "Committed to crafting perfect smiles using the latest orthodontic techniques and aligners, ensuring a comfortable and effective treatment experience for every patient.",
  },
  {
    name: "Dr. Sreeraj Sandeep",
    role: "Maxillofacial Surgeon",
    degree: "BDS, MDS",
    education: "Expert in complex oral and maxillofacial surgeries and facial reconstruction.",
    image: "/sreeraj.jpeg",
    bio: "Highly skilled surgeon specializing in advanced facial reconstructive procedures, dental extractions, and providing safe and comfortable care for complex cases.",
  },
  {
    name: "Dr. A. Aravind Kumar",
    role: "Periodontist",
    degree: "BDS, MDS",
    education: "Specialist in periodontics and advanced gum care.",
    image: "/aravind.jpeg",
    bio: "Focused on treating periodontal diseases and providing comprehensive gum care to ensure strong, healthy foundations for every patient's smile.",
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

const Team = () => {
  return (
    <section id="team" className="section-padding overflow-hidden bg-[#F8FCFF]">
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
              Our Expert Team
            </span>
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
          </div>
          <h2 className="heading-section">
            Meet our <span className="gradient-text italic">expert dentists</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            Our highly qualified dental specialists combine advanced clinical mastery with caring, gentle approaches to deliver exceptional results.
          </p>
        </motion.div>

        {/* Cards Grid — 2 columns like pratej */}
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
              className="flex flex-col rounded-[24px] border border-slate-100 bg-[#FCFCFC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(26,73,150,0.1)]"
            >
              {/* Image + Main Info — side by side */}
              <div className="flex gap-6 max-[500px]:flex-col items-stretch mb-6">
                {/* Photo box */}
                <div className="relative w-[180px] min-h-[210px] shrink-0 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#EBF8FF] to-[#DBEAFE] border border-black/5 shadow-md max-[500px]:mx-auto">
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
                  <span className="text-[13px] font-medium text-slate-400">{doc.degree}</span>
                </div>
              </div>

              {/* Education box */}
              <div className="mb-5 flex items-start gap-3 rounded-[12px] bg-white p-4 border border-slate-100">
                <GraduationCap size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-[13px] leading-relaxed text-slate-600 font-medium">{doc.education}</p>
              </div>

              {/* Bio */}
              <p className="text-[14px] leading-relaxed text-slate-600 flex-grow">
                {doc.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

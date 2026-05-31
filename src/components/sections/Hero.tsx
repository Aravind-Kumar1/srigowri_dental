"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

/* ── Stat counter ── */
const StatCounter = ({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
};

import { Slide, Service } from "@/types";

/* ── Slide data ── */
const slides: Slide[] = [
  {
    id: 1,
    badge: "10+ Years of Excellence",
    heading: (
      <>
        <span className="text-primary">Advanced Dental Care</span><br />
        <span className="text-slate-800">For Your Family</span>
      </>
    ),
    sub: "Experience world-class dental treatments with cutting-edge technology and a compassionate touch. We prioritize your comfort and long-term oral health.",
    img: "/images/family_banner.png",
    imgAlt: "Advanced Dental Care Clinic",
    imgFit: "cover" as const,
    imgPos: "center",
    imgClassName: "rounded-[2rem] shadow-premium scale-[0.8] sm:scale-[0.85] lg:scale-[0.9] -translate-x-6 sm:-translate-x-12 lg:-translate-x-16 translate-y-4 sm:translate-y-8 lg:translate-y-12 border border-slate-200/40",
    cta1Text: undefined,
    cta2Text: undefined,
    hideCta1: undefined,
    hideCta2: undefined,
  },
  {
    id: 2,
    isCustom: true,
    badge: "Modern Solutions",
    heading: (
      <>
        <span className="text-white">Our Clinical</span><br />
        <span className="text-white">Philosophy</span>
      </>
    ),
    sub: "We believe in conservative, evidence-based dentistry that puts the patient's long-term health and comfort first.",
    img: "/images/hero_philosophy.png",
    imgAlt: "Clinic Philosophy",
    imgFit: "cover" as const,
    imgPos: "center",
  },
  {
    id: 3,
    badge: "Orthodontics",
    heading: (
      <>
        <span className="text-primary">Invisible Aligners & <br className="hidden sm:block" />Braces</span> <span className="text-slate-800">Expertise</span>
      </>
    ),
    sub: "Clear, removable aligners and modern braces to straighten teeth comfortably—with aesthetics in mind.",
    img: "/images/ser_one.png",
    imgAlt: "Dental implant and aligner treatment",
    imgFit: "contain" as const,
    imgPos: "right bottom",
  },
  {
    id: 4,
    badge: "Implantology",
    heading: (
      <>
        <span className="text-primary">Dental Implants</span><br />
        <span className="text-slate-800">Restoration</span>
      </>
    ),
    sub: "Permanent replacement for missing teeth that look, feel, and function like natural teeth.",
    img: "/images/hero_sec.png",
    imgAlt: "Dental Implants Restoration",
    imgFit: "contain" as const,
    imgPos: "right bottom",
    imgClassName: "scale-[0.85] sm:scale-[0.9] lg:scale-[0.95] -translate-x-4 sm:-translate-x-8 lg:-translate-x-12 translate-y-6 sm:translate-y-10 lg:translate-y-14",
  },
];

const homeSlides: Slide[] = [
  slides[0], // Advanced Dental Care — standard aligned banner with doctor photo
  slides[3], // Dental Implants Restoration
];

const aboutSlides: Slide[] = [
  {
    id: 1,
    badge: "Our Story",
    heading: (
      <>
        <span className="text-slate-800">Premium Dental Clinic</span><br />
        <span className="text-primary">for Comprehensive &</span><br />
        <span className="text-primary">Trusted Dental Care</span>
      </>
    ),
    sub: "We provide complete oral healthcare solutions with advanced technology and personalized care for every patient.",
    img: "/images/doctor.png",
    imgAlt: "Dr. Sri Gowri – Lead Dental Specialist",
    imgFit: "contain" as const,
    imgPos: "right bottom",
    imgClassName: "scale-[0.9] sm:scale-[0.95] lg:scale-[1] translate-y-4 sm:translate-y-8 lg:translate-y-10",
  }
];

const servicesPlaceholderSlides: Slide[] = [
  {
    id: 1,
    badge: "Comprehensive Care",
    heading: (
      <>
        <span className="text-primary">Complete Dental Services</span><br />
        <span className="text-slate-800">for the Whole Family</span>
      </>
    ),
    sub: "We offer a comprehensive range of preventive, restorative, cosmetic, and emergency treatments designed to restore your smile and improve your long-term oral health under one roof.",
    img: "/images/clinic.png",
    imgAlt: "Best Dental Clinic",
    imgFit: "cover" as const,
    imgPos: "center",
    imgClassName: "rounded-[2rem] shadow-premium scale-[0.75] sm:scale-[0.8] lg:scale-[0.85] -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 translate-y-4 sm:translate-y-8 lg:translate-y-12 border border-slate-200/40",
    cta1Text: "Book Appointment",
    cta1Href: "/book-appointment",
    cta2Text: "Explore Services",
    cta2Href: "#services",
  }
];

const blogPlaceholderSlides: Slide[] = [
  {
    id: 1,
    badge: "Health Tips & Insights",
    heading: (
      <>
        <span className="text-primary">Helpful Dental Articles</span><br />
        <span className="text-primary">for</span> <span className="text-slate-800">Patients & Families</span>
      </>
    ),
    sub: "Welcome to our health portal. Explore expert dental articles, clinical insights, and family care guides to maintain a beautiful, healthy smile.",
    img: "/images/family_banner.png",
    imgAlt: "Helpful Dental Articles",
    imgFit: "cover" as const,
    imgPos: "center",
    cta1Text: "Book Appointment",
    cta1Href: "/book-appointment",
    cta2Text: "Our Treatments",
    cta2Href: "/services",
    imgClassName: "rounded-[2rem] shadow-premium scale-[0.8] sm:scale-[0.85] lg:scale-[0.9] -translate-x-6 sm:-translate-x-12 lg:-translate-x-16 translate-y-4 sm:translate-y-8 lg:translate-y-12 border border-slate-200/40",
  }
];

const contactPlaceholderSlides: Slide[] = [
  {
    id: 1,
    badge: "24/7 Support",
    heading: (
      <>
        <span className="text-slate-800">Get in Touch</span><br />
        <span className="text-primary">With Our Experts</span>
      </>
    ),
    sub: "Have questions or ready to book? Contact our support team directly or use the scheduling tool below to secure your appointment slot.",
    img: "/images/family_banner.png",
    imgAlt: "Get in Touch With Our Experts",
    imgFit: "cover" as const,
    imgPos: "center",
    cta1Text: "Book Appointment",
    cta1Href: "/book-appointment",
    cta2Text: "View Services",
    cta2Href: "/services",
    imgClassName: "rounded-[2rem] shadow-premium scale-[0.8] sm:scale-[0.85] lg:scale-[0.9] -translate-x-6 sm:-translate-x-12 lg:-translate-x-16 translate-y-4 sm:translate-y-8 lg:translate-y-12 border border-slate-200/40",
  }
];

/* ── Hero Component ── */
const Hero = ({ page = "home", serviceContext }: { page?: "home" | "about" | "services" | "single_service" | "blog" | "contact"; serviceContext?: Service }) => {
  const isFirstService = serviceContext?.slug === "invisible-aligners-braces";
  const isPediatric = serviceContext?.slug === "pediatric-dentistry";
  const isShiftedDown = serviceContext && [
    "pediatric-dentistry",
    "emergency-dental-care",
    "cosmetic-dentistry",
    "general-dentistry"
  ].includes(serviceContext.slug);

  let currentSlides: Slide[] = homeSlides;
  if (page === "about") currentSlides = aboutSlides;
  if (page === "services") currentSlides = servicesPlaceholderSlides;
  if (page === "blog") currentSlides = blogPlaceholderSlides;
  if (page === "contact") currentSlides = contactPlaceholderSlides;
  if (page === "single_service") {
    if (serviceContext?.slug === "invisible-aligners-braces") {
      currentSlides = [{ ...slides[2], cta2Text: "Consult Now" }];
    } else if (serviceContext?.slug === "dental-implants") {
      currentSlides = [{ ...slides[3], cta2Text: "Consult Now", imgClassName: "scale-[0.85] -translate-x-4 sm:-translate-x-8 lg:-translate-x-12" }];
    } else {
      currentSlides = serviceContext ? [
        {
          id: 1,
          badge: "",
          heading: (() => {
            switch(serviceContext.slug) {
              case "crowns-bridges": 
                return <><span className="text-primary">Crown & Bridge</span></>;
              case "pediatric-dentistry": 
                return <><span className="text-primary">Pediatric Care</span></>;
              case "cosmetic-dentistry": 
                return <><span className="text-primary">Cosmetic Dentistry</span></>;
              case "general-dentistry": 
                return <><span className="text-primary">General Dentistry</span></>;
              case "advanced-technology": 
                return <><span className="text-primary">Advanced Technology</span></>;
              case "emergency-dental-care": 
                return <><span className="text-primary">Emergency Care</span></>;
              default: 
                return <span className="text-primary">{serviceContext.detailHeading}</span>;
            }
          })(),
          sub: serviceContext.description,
          img: serviceContext.heroImageUrl || "/ser_page.png",
          imgAlt: serviceContext.title,
          imgFit: "contain" as const,
          imgPos: "right bottom",
          cta2Text: "Consult Now",
        }
      ] : servicesPlaceholderSlides;
    }
  }

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % currentSlides.length);
  }, [currentSlides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? currentSlides.length - 1 : prev - 1));
  }, [currentSlides.length]);

  /* Faster dynamic auto-scroll: Slide 1 (5s), others (3s) */
  useEffect(() => {
    if (currentSlides.length <= 1) return;
    
    // Snappier intervals
    const duration = current === 0 ? 5000 : 3000;
    
    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [next, current, currentSlides.length]);

  const slide = currentSlides[current];

  const textVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const imgVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  const fullSlideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="flex flex-col">
      {/* ════════════════════════════════════════
          HERO CAROUSEL — full viewport height
      ════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full overflow-hidden h-auto sm:h-[80vh] sm:min-h-[540px] max-sm:pb-6"
        style={{ 
          background: ["single_service", "services"].includes(page) 
            ? "#FFFFFF" 
            : "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 50%, #F0F7FF 100%)"
        }}
      >
        {/* ── RIGHT HALF — image ── */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {slide.isCustom ? (
            <motion.div
              key={`custom-${slide.id}`}
              custom={direction}
              variants={fullSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={cn(
                "relative sm:absolute inset-0 w-full z-20 bg-[#1A4996] flex items-center justify-center",
                "h-auto sm:h-full max-sm:pb-6"
              )}
            >
              <div className="container-custom mx-auto px-6 lg:px-12 w-full h-full">
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12 items-center h-full pt-14 lg:pt-0">
                  {/* Center Image - Order 1 on mobile */}
                  <div className="order-1 lg:order-2 relative h-[42vh] lg:h-[70vh] xl:h-[76vh] w-full flex items-end justify-center z-20 mt-6 lg:mt-0 lg:translate-y-4 xl:translate-y-2">
                    <Image
                      src="/doctor_nobg.png"
                      alt="Dr. N Sri Gowri – Lead Clinical Specialist"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain object-bottom drop-shadow-2xl scale-110 lg:scale-[1.02] xl:scale-[1.08] origin-bottom"
                      priority
                    />
                  </div>

                  {/* Left Content - Order 2 on mobile */}
                  <div className="order-2 lg:order-1 z-10 flex flex-col justify-center text-center lg:text-left pb-6 lg:pb-0">
                    <h2 className="text-[24px] md:text-[54px] lg:whitespace-nowrap leading-tight font-extrabold text-white mb-4">
                      <span className="mr-2 md:mr-4">Our</span>
                      EXPERT
                    </h2>
                    <div className="text-[14px] leading-relaxed relative z-20 w-full">
                      <p className="text-slate-100 font-semibold text-[14px] md:text-base leading-[1.6] max-w-lg mx-auto lg:mx-0">
                        <span className="block uppercase font-bold text-white text-base sm:text-lg lg:text-xl tracking-wide mb-1">LEAD CLINICAL SPECIALIST</span>
                        Specialized in Prosthodontics, Implantology & Comprehensive Dental Care With <span className="font-extrabold underline text-white">10+</span> years of clinical expertise.
                      </p>
                    </div>
                  </div>

                  {/* Right Content - Hidden on mobile */}
                  <div className="hidden lg:flex order-3 lg:order-3 z-10 space-y-6 flex-col justify-center">
                    {[
                      { num: "10,000+", title: "Smiles Transformed", desc: "With Proven Results" },
                      { num: "10+", title: "Years of Clinical Experience", desc: "You Can Trust" },
                      { num: "98%", title: "Patient Satisfaction", desc: "Through Gentle, Personalised Care" },
                      { num: "ADVANCED & PAIN-FREE DENTISTRY", title: "", desc: "Using Modern Technology" }
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#1A4996] font-bold text-xs">✓</div>
                        </div>
                        <div>
                          <h3 className="text-lg leading-snug">
                            {point.num && <span className="font-extrabold text-white">{point.num} </span>}
                            {point.title && <span className="font-semibold text-slate-100">{point.title}</span>}
                          </h3>
                          <p className="text-slate-200 font-medium text-[15px] mt-0.5">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="w-full h-full relative">
              {/* Standard Image Animation */}
              <motion.div
                key={`img-${slide.id}`}
                custom={direction}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "absolute right-0 bottom-0 sm:top-0 w-full sm:w-1/2 h-full hidden sm:flex justify-center sm:justify-center z-0",
                  page === "single_service" ? "items-end" : "items-center"
                )}
              >
                <div 
                  className={cn(
                    "relative w-full", 
                    isPediatric ? "rounded-3xl sm:rounded-[2rem] overflow-hidden" : "",
                    page === "about" ? "rounded-tl-[2rem] rounded-bl-[2rem] overflow-hidden" : "",
                    page === "about"
                      ? "h-[90%] sm:h-[95%] max-h-[430px] sm:max-h-[480px] lg:max-h-[520px]"
                      : page === "services"
                      ? "h-[90%] sm:h-[95%] max-h-[430px] sm:max-h-[470px] lg:max-h-[510px]"
                      : page !== "single_service"
                      ? "h-[82%] sm:h-[88%] max-h-[400px] sm:max-h-[440px] lg:max-h-[470px]"
                      : "h-full"
                  )}
                >
                  <Image
                    src={slide.img}
                    alt={slide.imgAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, 50vw"
                    className={cn(
                      slide.imgFit === "contain" ? "object-contain scale-100 origin-bottom-right" : "object-cover",
                      page === "single_service"
                        ? cn(
                            "origin-bottom-right -translate-x-6 sm:-translate-x-12",
                            isFirstService ? "scale-[0.95]" : "scale-[0.8]",
                            isShiftedDown ? "translate-y-1 sm:translate-y-2" : "-translate-y-6 sm:-translate-y-10",
                            isPediatric ? "rounded-3xl sm:rounded-[2rem] overflow-hidden" : ""
                          )
                        : "",
                      slide.imgClassName
                    )}
                    style={{ objectPosition: slide.imgPos || "right bottom" }}
                    priority
                  />
                </div>
              </motion.div>

              {/* Standard Text Animation */}
              <div className="relative h-full flex items-center z-10 pointer-events-none">
                <div className="container-custom w-full pointer-events-auto px-6 sm:px-0">
                  <div className={cn("w-full sm:w-[55%] flex flex-col items-center sm:items-start text-center sm:text-left pr-2 lg:pr-0 z-10 pt-28 sm:pt-0 translate-y-0 sm:translate-y-6 lg:translate-y-12", page === "single_service" ? "lg:w-[72%]" : page === "about" ? "lg:w-[50%]" : page === "services" ? "lg:w-[58%]" : "lg:w-[54%]")}>
                    <motion.div
                      key={`content-${slide.id}`}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex flex-col items-center sm:items-start w-full"
                    >
                      {slide.badge && (
                        <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide shadow-sm">
                          ✦ {slide.badge}
                        </span>
                      )}
                      <h1 className={cn("font-extrabold text-secondary leading-[1.4] mb-2 sm:mb-5 lg:whitespace-nowrap text-center sm:text-left", page === "single_service" ? "text-3xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-4xl lg:text-5xl")}>
                        {slide.heading}
                      </h1>
                      
                      {/* Mobile Image */}
                      <div className="sm:hidden -mx-6 w-[calc(100%+3rem)] mt-8 mb-6 flex justify-center overflow-hidden">
                        <div className={cn(
                          "relative w-full overflow-hidden",
                          page === "single_service"
                            ? "aspect-[16/9] max-h-[200px]"
                            : ["blog", "contact"].includes(page as string)
                            ? "aspect-[16/9] max-h-[280px]"
                            : "aspect-[2/1] max-h-[200px]",
                          isPediatric ? "rounded-3xl shadow-sm" : ""
                        )}>
                          <Image
                            src={slide.img}
                            alt={slide.imgAlt}
                            fill
                            className="object-contain object-center scale-[1.05]"
                            priority
                          />
                        </div>
                      </div>

                      <p className="hidden sm:block text-lg text-gray-600 mb-6 max-w-xl">
                        {slide.sub}
                      </p>

                      {/* Premium Trust Features to fill empty space */}
                      {page === "single_service" && serviceContext && (
                        <div className="hidden lg:grid grid-cols-2 gap-x-6 gap-y-3 mt-2 mb-8 text-slate-600 font-semibold text-sm max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 font-bold">✓</span>
                            <span>Clinical Excellence</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 font-bold">✓</span>
                            <span>Advanced Diagnostic Suite</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 font-bold">✓</span>
                            <span>Painless Dental Procedures</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 font-bold">✓</span>
                            <span>Certified Dental Specialists</span>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 mb-6">
                        {!slide.hideCta1 && (
                          <Link
                            href={slide.cta1Href || "/book-appointment"}
                            className="btn-premium bg-primary text-white px-8 py-3.5 text-[15px]"
                          >
                            {slide.cta1Text || "Book Now"}
                          </Link>
                        )}
                        {!slide.hideCta2 && (
                          slide.cta2Href?.startsWith('#') ? (
                            <button
                              onClick={() => document.querySelector(slide.cta2Href!)?.scrollIntoView({ behavior: 'smooth' })}
                              className="btn-premium bg-white border-2 border-primary text-primary px-8 py-3.5 text-[15px]"
                            >
                              {slide.cta2Text || "Explore Services"}
                            </button>
                          ) : (
                            <Link
                              href={slide.cta2Href || "/services"}
                              className="btn-premium bg-primary text-white px-8 py-3.5 text-[15px]"
                            >
                              {slide.cta2Text || "Explore Services"}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR — below hero
      ════════════════════════════════════════ */}
      {page === "home" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full border-t border-secondary/10 bg-white shadow-sm"
        >
          <div className="container-custom py-4 sm:py-8">
            <div className="grid grid-cols-4 sm:grid-cols-4 divide-x divide-gray-100">

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                  <StatCounter value={10} suffix="+" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Years Exp</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                  <StatCounter value={10} suffix="k+" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Happy Pts</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <div className="flex items-baseline justify-center">
                  <span className="text-xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                    <StatCounter value={4.9} decimals={1} />
                  </span>
                  <span className="text-xs sm:text-2xl font-bold text-gray-300 ml-0.5">/5</span>
                </div>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Rating</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                  <StatCounter value={98} suffix="%" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Success</span>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;

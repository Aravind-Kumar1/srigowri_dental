"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

const cases = [
  {
    id: 1,
    label: "Smile Alignment",
    desc: "Correction of crowding, misalignment & shade improvement",
    before: "/images/first_before.png",
    after: "/images/first_after.png",
  },
  {
    id: 2,
    label: "Dental Implant",
    desc: "Single tooth replacement with implant-supported crown",
    before: "/images/second_before.png",
    after: "/images/second_after.png",
  },
  {
    id: 3,
    label: "Cavity Restoration",
    desc: "Treatment of deep decay & tooth structural restoration",
    before: "/images/third_before.png",
    after: "/images/third_after.png",
  },
  {
    id: 4,
    label: "Gap Closure",
    desc: "Veneers to close gaps and restore natural tooth proportions",
    before: "/images/fourth_before.png",
    after: "/images/fourth_after.png",
  },
  {
    id: 5,
    label: "Esthetic Bridge Restoration",
    desc: "Complete rehabilitation of upper arch using bridges",
    before: "/images/image_before.png",
    after: "/images/image_after.png",
  },
];


const SliderCard = ({ item }: { item: typeof cases[0] }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  }, [updateSlider]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 w-[350px] sm:w-[400px] flex-shrink-0"
    >
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative h-64 cursor-col-resize select-none overflow-hidden"
        onMouseMove={onMouseMove}
        onMouseDown={() => { isDragging.current = true; }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchStart={() => { isDragging.current = true; }}
        onTouchEnd={() => { isDragging.current = false; }}
        onTouchMove={onTouchMove}
      >
        {/* After (base layer) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        {/* Before (clipped top layer) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          draggable={false}
        />

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg">Before</span>
        <span className="absolute top-3 right-3 bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg">After</span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <ArrowLeftRight size={16} className="text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BeforeAfter = () => {
  return (
    <section className="section-padding bg-[#F8FCFF] overflow-hidden">
      <div className="container-custom px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-3">Transformations</p>
          <h2 className="heading-section mb-4">
            Before & <span className="gradient-text italic">After</span>
          </h2>
          <p className="text-body max-w-2xl">
            Drag the slider to reveal real patient transformations achieved through our expert clinical care.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient overlays for premium fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FCFF] to-transparent z-30 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FCFF] to-transparent z-30 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-8 w-max animate-marquee-half">
            {/* First loop */}
            {cases.map((item) => (
              <SliderCard key={`loop1-${item.id}`} item={item} />
            ))}
            {/* Second loop for seamless infinite scrolling */}
            {cases.map((item) => (
              <SliderCard key={`loop2-${item.id}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;

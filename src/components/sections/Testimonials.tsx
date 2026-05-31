"use client";

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Uppuluri Saikumar",
    date: "3 months ago",
    text: "I'm sharing this review on behalf of my mother, recently visited Sri Gowri Dental Care. Having seen several dentists over the years, I can confidently say this clinic is easily the best. From the moment we walked in, the staff was incredibly warm and welcoming.",
    initial: "U",
    color: "#4285F4",
    reviews: "10 reviews · 1 photo",
  },
  {
    name: "Shravani Kattekola",
    date: "2 months ago",
    text: "Such a cool dentist. She will only suggest treatment if it is mandatory. No unnecessary treatments or medications will be given. Too rare to see such doctors in this generation. ❤️",
    initial: "S",
    color: "#EA4335",
    reviews: "4 reviews",
  },
  {
    name: "Murali Krishna",
    date: "2 months ago",
    text: "Excellent treatment ..taken from Sri gowri madam.. Complete dental pbm resolved ..here",
    initial: "M",
    color: "#34A853",
    reviews: "9 reviews · 18 photos",
  },
  {
    name: "Somu Jalagam",
    date: "3 months ago",
    text: "Superb timing and good treatment\nOverall very happy with treatment of root canal",
    initial: "S",
    color: "#673AB7",
    reviews: "1 review · 1 photo",
  },
  {
    name: "Lakshmi Daravath",
    date: "7 months ago",
    text: "Im glad to get treatment from doctor gowri.. I would like to encourage to you especially for treatment for root canal and removing the teeth... nice experience and best in hayathnagar and reliable rate are there only...",
    initial: "L",
    color: "#FBBC05",
    reviews: "3 reviews",
  },
  {
    name: "Prem Sagar Yekula",
    date: "3 months ago",
    text: "Go to place for all the dental treatment needs. Doctor is very passionate and guides well in the treatment process. Treatment prices are economical and clinic has a relaxing ambience 👍",
    initial: "P",
    color: "#4285F4",
    reviews: "Local Guide · 11 reviews · 1 photo",
  },
  {
    name: "Ganesh Bhargav",
    date: "a year ago",
    text: "I recently had the pleasure of receiving treatment from Dr.Gowri mam and I couldn't be more satisfied. From the moment I walked into the clinic, I was impressed by the warm and welcoming atmosphere. Dr Gowri mam was extremely professional. ❤️🙏",
    initial: "G",
    color: "#EA4335",
    reviews: "8 reviews · 5 photos",
  },
  {
    name: "Ubba Suresh",
    date: "3 months ago",
    text: "Extraction completed at sri gowri dental clinic. There was no pain from starting to ending. Thank you Dr SRI GOWRI MADAM",
    initial: "U",
    color: "#34A853",
    reviews: "2 reviews",
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const RatingStars = ({ rating, size }: { rating: number; size: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} size={size} fill="#fbbc05" stroke="none" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      const fillPercentage = Math.round((rating - fullStars) * 100);
      stars.push(
        <div key={i} className="relative inline-block shrink-0" style={{ width: size, height: size }}>
          <Star size={size} fill="#e2e8f0" stroke="none" className="absolute top-0 left-0" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star size={size} fill="#fbbc05" stroke="none" style={{ maxWidth: "none" }} />
          </div>
        </div>
      );
    } else {
      stars.push(<Star key={i} size={size} fill="#e2e8f0" stroke="none" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Real Patient Reviews
            </span>
            <h2 className="heading-section mb-2">
              What Our <span className="gradient-text italic">Patients</span> Say
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <RatingStars rating={4.9} size={18} />
              <span className="font-black text-secondary text-lg">4.9</span>
              <span className="text-slate-400 text-sm font-medium">· 200+ Google Reviews</span>
              <GoogleIcon />
            </div>
          </div>
          <a
            href="https://share.google/YaqYVGijSNHh884lK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium bg-primary text-white px-8 py-3.5 text-sm gap-2 shrink-0 shadow-premium"
          >
            <GoogleIcon />
            Review Us on Google
          </a>
        </div>

        {/* Marquee Track */}
        <div className="w-full relative group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="relative flex overflow-hidden w-full select-none gap-6 py-4 pb-8 group/marquee">
            <div className="flex gap-6 shrink-0 animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-[310px] md:w-[380px] bg-white p-6 rounded-3xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col shrink-0"
                >
                  {/* Top row: avatar + name + google icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-sm leading-tight">{t.name}</h4>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">{t.reviews}</p>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Stars + date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <Star key={`${index}-${s}`} size={13} fill="#fbbc05" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-600 leading-relaxed text-sm flex-1 whitespace-pre-line">&ldquo;{t.text}&rdquo;</p>
                </div>
              ))}
            </div>

            <div className="flex gap-6 shrink-0 animate-marquee group-hover/marquee:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((t, index) => (
                <div
                  key={`${index}-dup`}
                  className="w-[310px] md:w-[380px] bg-white p-6 rounded-3xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col shrink-0"
                >
                  {/* Top row: avatar + name + google icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-sm leading-tight">{t.name}</h4>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">{t.reviews}</p>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Stars + date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <Star key={`${index}-${s}-dup`} size={13} fill="#fbbc05" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-600 leading-relaxed text-sm flex-1 whitespace-pre-line">&ldquo;{t.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rating bar */}
        <div className="mt-8 bg-gradient-to-br from-[#EBF8FF] to-[#F0F9FF] p-6 sm:p-8 rounded-3xl border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
          <div className="z-10 text-center sm:text-left">
            <p className="text-slate-500 text-sm font-medium">Overall Google Rating</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-4xl font-black text-secondary">4.9</span>
              <div className="flex flex-col gap-1">
                <RatingStars rating={4.9} size={16} />
                <span className="text-xs text-slate-400 font-medium">Based on 200+ reviews</span>
              </div>
            </div>
          </div>
          <a
            href="https://share.google/YaqYVGijSNHh884lK"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 btn-premium bg-primary text-white px-8 py-3.5 text-sm gap-2 shadow-premium"
          >
            <GoogleIcon />
            Write a Review
          </a>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        </div>

      </div>
    </section>
  );
}

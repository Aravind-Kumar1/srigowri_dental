import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";

const SOCIAL_LINKS = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/gowri.nadipalli/",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-[#1A4996] text-white overflow-hidden border-t border-white/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 px-4">
          {/* Brand Info */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Link href="/" className="flex flex-col gap-3">
              <div className="relative h-[70px] w-[260px] bg-white/95 rounded-xl px-3 py-1 flex items-center justify-center shadow-sm hover:bg-white transition-all duration-300">
                <div className="relative w-full h-[54px]">
                  <Image
                    src="/gowri_logo.png"
                    alt="Gowri Dental Care Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-slate-200 text-lg font-semibold leading-relaxed italic">
              Redefining dental excellence with a fusion of advanced technology and personalized aesthetic vision.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#1A4996] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <div className="font-black text-xl mb-2 text-white">Our Services</div>
            <div className="flex flex-col gap-3 text-slate-200 font-bold text-base">
              {servicesData.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="hover:underline hover:text-white transition-all flex items-center gap-2 group"
                >
                  {service.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="font-black text-xl mb-2 text-white">Direct Help</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <MapPin size={18} />
                 </div>
                <div className="min-w-0">
                  <div className="text-slate-200 font-bold text-sm leading-6">
                   H.No. 4-8-300/110 & 111, Shubodaya Colony,<br />Opp. Substation, Kuntloor Road,<br />Hayathnagar, Hyderabad - 501 505
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone size={18} />
                 </div>
                <div className="min-w-0">
                  <a href="tel:+917981765567" className="text-slate-200 font-bold hover:underline hover:text-white transition-colors block text-sm leading-none pt-0.5">
                    +91 7981 765 567
                  </a>
                 </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="flex flex-col gap-4 lg:pl-4">
             <div className="font-black text-xl mb-2 text-white">Location Map</div>
             <div className="rounded-2xl overflow-hidden border-2 border-white/20 h-[180px] bg-white/5 relative group">
                <iframe
                  src="https://maps.google.com/maps?q=Gowri%20Dental%20Clinic,%20Shubodaya%20Colony,%20Hayathnagar,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
             </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="pt-12 border-t-2 border-white/20 flex justify-center items-center text-slate-300 text-base font-bold text-center">
          <div>© {new Date().getFullYear()} Gowri Dental Care. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

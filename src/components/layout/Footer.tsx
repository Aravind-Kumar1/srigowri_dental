import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
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
          <div className="flex flex-col gap-5 max-w-xs">
            <Link href="/" className="flex flex-col gap-3">
              <div className="relative h-[70px] w-[260px] bg-white/95 rounded-xl px-3 py-1 flex items-center justify-center shadow-sm hover:bg-white transition-all duration-300">
                <div className="relative w-full h-[54px]">
                  <Image
                    src="/gowri_logo.png"
                    alt="Sri Gowri Dental Care Logo – Best Dental Clinic in Hayathnagar Hyderabad"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            {/* SEO tagline */}
            <p className="text-white font-bold text-base leading-snug">
              #1 Dental Clinic in <span className="text-yellow-300">Hayathnagar</span>, Hyderabad
            </p>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Advanced dental care for Hayathnagar, LB Nagar, Nagole, Uppal &amp; surrounding areas. Ethical, affordable, and patient-first.
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
          <div className="flex flex-col gap-5">
            <div className="font-black text-xl mb-2 text-white">Find Us</div>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm mb-0.5">Sri Gowri Dental Care</p>
                  <address className="text-slate-200 font-medium text-sm leading-6 not-italic">
                    H.No. 4-8-300/110 &amp; 111, Shubodaya Colony,<br />Opp. Substation, Kuntloor Road,<br />
                    <strong className="text-yellow-300">Hayathnagar, Hyderabad – 501 505</strong>
                  </address>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <a href="tel:+917981765567" className="text-slate-200 font-bold hover:underline hover:text-white transition-colors block text-sm">
                    +91 7981 765 567
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <a href="mailto:srigowridentalcare@gmail.com" className="text-slate-200 font-bold hover:underline hover:text-white transition-colors block text-sm break-all">
                    srigowridentalcare@gmail.com
                  </a>
                </div>
              </div>
              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                  <Clock size={18} />
                </div>
                <div className="text-sm text-slate-200 font-medium space-y-0.5">
                  <p><span className="text-white font-bold">Mon – Sat:</span> 9:00 AM – 9:00 PM</p>
                  <p><span className="text-white font-bold">Sunday:</span> 10:00 AM – 1:00 PM</p>
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
                title="Sri Gowri Dental Care Location – Hayathnagar, Hyderabad"
                className="absolute inset-0 w-full h-full opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-xs text-slate-300 font-medium text-center">
              Serving Hayathnagar · LB Nagar · Nagole · Uppal · Kuntloor
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t-2 border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-300 text-sm font-medium text-center px-4">
          <div>© {new Date().getFullYear()} Sri Gowri Dental Care, Hayathnagar, Hyderabad. All rights reserved.</div>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link href="/about-us" className="hover:text-white transition-colors">About</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

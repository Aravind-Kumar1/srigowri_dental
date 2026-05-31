"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: servicesData.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
  },
  { name: "Health Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();



  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/40 shadow-sm"
    >
      <div className="container-custom flex items-center justify-between h-20 sm:h-24 px-6">
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3"
        >
          <div className="relative h-16 w-64 sm:h-20 sm:w-80">
            <Image
              src="/gowri_logo.png"
              alt="Gowri Dental Care Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div 
                key={link.name} 
                className="relative h-full flex items-center group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === '/' && link.href === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-[0.9375rem] font-bold transition-all duration-500 flex items-center gap-1.5 h-full relative px-1",
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown size={14} className={cn("transition-transform duration-300 relative z-10", activeDropdown === link.name && "rotate-180")} />
                  )}
                  
                  {/* Premium Sliding Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(26, 73, 150, 0.3)]"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  
                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-1 bg-primary/10 transition-all duration-300 -z-0 rounded-t-lg" />
                </Link>

                {link.dropdown && (
                  <div
                    className={cn(
                      "absolute top-[85%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-border p-3 overflow-hidden z-50 transition-all duration-300 origin-top",
                      activeDropdown === link.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          scroll={true}
                          className="text-[0.9375rem] font-semibold text-secondary hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+917981765567" className="flex items-center gap-1.5 text-secondary text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">
            <Phone size={14} className="fill-primary text-primary shrink-0" />
            +91 7981 765 567
          </a>
          <Link
            href="/book-appointment"
            className="btn-premium bg-primary text-white shadow-premium hover:shadow-xl hover:brightness-110 px-5 py-2.5 text-sm gap-1.5 whitespace-nowrap"
          >
            <Calendar size={15} />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 sm:top-24 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 lg:hidden shadow-xl max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div key={link.name} className="flex flex-col gap-4">
                <div 
                  className="flex items-center justify-between"
                  onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === '/' && link.href === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      if (!link.dropdown) setIsOpen(false);
                    }}
                    className={cn(
                      "text-lg font-bold transition-colors",
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    </span>
                  </Link>
                  {link.dropdown && (
                    <ChevronDown size={20} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                  )}
                </div>

              {link.dropdown && activeDropdown === link.name && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      scroll={true}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                    </div>
                )}
              </div>
            )
          })}
          <hr className="border-muted" />
          <div className="flex flex-col gap-4">
            <a href="tel:+917981765567" className="flex items-center gap-3 text-secondary font-semibold">
              <Phone size={20} className="text-primary" />
              +91 7981 765 567
            </a>
            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="btn-premium bg-primary text-white shadow-premium hover:shadow-xl hover:brightness-110 px-6 py-4 text-base w-full whitespace-nowrap justify-center"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

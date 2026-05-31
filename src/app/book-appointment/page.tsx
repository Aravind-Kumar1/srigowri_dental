"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Calendar, Mail, MapPin, Phone, Send, CheckCircle, Smartphone, User, Stethoscope, Clock, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const CONTACT = {
  clinic: "Sri Gowri Dental Care",
  address:
    "H.No. 4-8-300/110 & 111, Shubodaya Colony, Opp. Substation, Kuntloor Road, Hayathnagar, Hyderabad - 501 505",
  phones: ["+91 7981 765 567"],
  email: "srigowridentalcare@gmail.com",
};

export default function BookAppointmentPage() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: selectedService,
    slot: "",
    message: ""
  });
  const [phoneError, setPhoneError] = useState("");

  const getTimeSlots = (dateString: string) => {
    if (!dateString) return ["Select a date first"];
    const date = new Date(dateString + "T00:00:00");
    const day = date.getDay(); // 0 is Sunday

    if (day === 0) {
      // Sunday: 10 AM - 1 PM
      return ["10:00 AM", "11:00 AM", "12:00 PM"];
    } else {
      // Weekdays: 9 AM - 9 PM
      return [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
        "07:00 PM", "08:00 PM"
      ];
    }
  };

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal",
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');

    if (!phoneRegex.test(cleanPhone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const messageText = `*New Appointment Request*
-----------------------------
*Name:* ${formData.name}
*Phone:* ${cleanPhone}
*Date:* ${formData.date}
*Time Slot:* ${formData.slot}
*Treatment:* ${formData.service}
${formData.message ? `*Message:* ${formData.message}` : ''}`;

      const whatsappUrl = `https://wa.me/917981765567?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
    } catch (error) {
      console.error("WhatsApp redirect failed:", error);
      alert("Failed to redirect to WhatsApp. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 lg:px-12">
        <div className="container-custom">
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm font-semibold text-primary hover:underline flex items-center gap-2"
            >
              ← Back to Home
            </Link>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
              Book an Appointment
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Fill in the form below and our team will contact you to confirm your slot.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 premium-card p-6 sm:p-8 lg:p-10 bg-white">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar size={22} className="text-primary" />
                Appointment Form
              </h2>

              {isSuccess ? (
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-12 text-center bg-green-50/50 rounded-2xl border border-green-100 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Submitted!</h3>
                  <p className="text-muted-foreground text-sm mb-8 px-6 max-w-md">Our team has received your appointment request. We will verify our schedule and contact you shortly to confirm the slot.</p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", phone: "", date: "", service: "", slot: "", message: "" });
                    }}
                    className="mt-6 text-slate-400 text-xs font-medium hover:text-primary underline"
                  >
                    Submit another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Smartphone size={14} className="text-primary" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${phoneError ? 'border-red-500' : 'border-slate-200'} bg-slate-50 px-4 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20`}
                      placeholder="10-digit mobile number"
                    />
                    {phoneError && <p className="text-red-500 text-[10px] font-bold mt-1">{phoneError}</p>}
                  </div>

                  <div className="sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        ref={dateInputRef}
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        onClick={(e) => {
                          try {
                            (e.target as HTMLInputElement).showPicker();
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-10 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          try {
                            dateInputRef.current?.showPicker();
                          } catch (err) {
                            console.error(err);
                            dateInputRef.current?.focus();
                          }
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer flex items-center justify-center p-1 rounded-md hover:bg-slate-100/80 z-10"
                      >
                        <Calendar size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Preferred Slot
                    </label>
                    <div className="relative">
                      <select
                        name="slot"
                        required
                        value={formData.slot}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none"
                      >
                        <option value="">Choose a Slot</option>
                        {getTimeSlots(formData.date).map(slot => (
                          <option key={slot} value={slot} disabled={slot === "Select a date first"}>{slot}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Stethoscope size={14} className="text-primary" /> Select Service
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none"
                      >
                        <option value="">Choose a Service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-secondary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us your concern"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-premium w-full py-4 bg-primary text-white hover:brightness-110 shadow-xl shadow-primary/10 h-16 text-lg"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <><Send size={20} /> Book Appointment Now</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5 premium-card p-6 sm:p-8 lg:p-10 bg-white">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Details</h2>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{CONTACT.clinic}</h3>

              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed">{CONTACT.address}</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">Phone</p>
                    <div className="space-y-1">
                      {CONTACT.phones.map(phone => (
                        <a key={phone} href={`tel:${phone.replace(/-/g, '')}`} className="block hover:text-primary transition-colors text-sm sm:text-base">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="block hover:text-primary transition-colors break-all text-sm sm:text-base"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-slate-800 mb-2 uppercase tracking-widest text-xs">Working Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm border-b border-primary/5 pb-2">
                    <span className="font-bold text-primary">Mon - Sat</span>
                    <span className="text-slate-600">09:00 AM – 09:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-primary">Sunday</span>
                    <span className="text-slate-600">10:00 AM – 01:00 PM</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

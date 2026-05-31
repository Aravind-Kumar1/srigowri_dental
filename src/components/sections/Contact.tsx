"use client";

import React, { useState, useRef } from "react";
import { MapPin, Clock, Phone, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
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
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch max-w-7xl mx-auto">
          <div className="flex flex-col h-full justify-between space-y-10 lg:pr-4">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Contact Us</span>
                <h2 className="heading-section">Visit Our <span className="gradient-text italic">Dental Clinic</span></h2>
                <p className="text-body mt-1">Professional dental care you can trust.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-4 sm:gap-6 items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EBF8FF] to-[#F0F9FF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5">Location</h3>
                    <p className="text-body text-sm sm:text-base">H.No. 4-8-300/110 & 111, Shubodaya Colony,<br />Opp. Substation, Kuntloor Road,<br />Hayathnagar, Hyderabad - 501 505</p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EBF8FF] to-[#F0F9FF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-lg text-secondary">
                        <a href="tel:+917981765567" className="hover:text-primary transition-colors">+91 7981 765 567</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EBF8FF] to-[#F0F9FF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5">Timings</h3>
                    <div className="text-body text-sm sm:text-base flex flex-col gap-1 font-medium">
                      <div className="flex flex-col">
                        <span className="font-bold text-secondary">Mon - Sat:</span>
                        <span>09:00 AM – 09:00 PM</span>
                      </div>
                      <div className="flex flex-col mt-1">
                        <span className="font-bold text-secondary">Sunday:</span>
                        <span>10:00 AM – 01:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Trust Bar */}
            <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-secondary">Trusted by 10k+ Patients</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">In Our Local Community</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#EBF8FF] to-[#DBEAFE] p-6 sm:p-8 lg:p-10 lg:pb-8 rounded-[2.5rem] shadow-premium w-full relative overflow-hidden flex flex-col justify-start border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            
            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white/60 rounded-2xl border border-primary/10 backdrop-blur-sm relative z-10">
                   <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary mb-2">Request Sent!</h4>
                   <p className="text-slate-500 text-sm mb-8 px-6">Our team will verify the schedule and contact you shortly.</p>
                  
                  <button 
                    onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", phone: "", date: "", service: "", slot: "", message: "" });
                    }}
                    className="mt-6 text-white text-sm font-bold bg-primary px-8 py-3 rounded-xl hover:brightness-110 transition-all"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-1 lg:mb-2 relative z-10">Book Your Appointment</h3>
                 <p className="text-slate-500 mb-4 lg:mb-5 font-medium text-xs sm:text-sm relative z-10">Schedule your visit with our expert dental team today.</p>
                
                 <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                   <div className="space-y-2 relative z-10">
                    <label className="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-wider"><User size={14} className="text-primary" /> Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-wider"><Smartphone size={14} className="text-primary" /> Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 7981 765 567" 
                        required 
                        className={`w-full bg-white border ${phoneError ? 'border-red-500 focus:ring-red-400/50' : 'border-transparent focus:ring-white/30'} rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-slate-900 focus:ring-2 outline-none transition-all font-medium text-sm sm:text-base`}
                      />
                      {phoneError && <p className="text-red-400 text-xs font-medium mt-1">{phoneError}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-wider"><Calendar size={14} className="text-primary" /> Preferred Date</label>
                      <div className="relative">
                        <input 
                          ref={dateInputRef}
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required 
                          min={new Date().toISOString().split('T')[0]}
                          onClick={(e) => {
                            try {
                              (e.target as HTMLInputElement).showPicker();
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          className="w-full bg-white border border-transparent rounded-xl pl-4 pr-10 py-2.5 sm:pl-5 sm:pr-12 sm:py-3 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-wider"><Stethoscope size={14} className="text-primary" /> Select Service</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required 
                          className="w-full bg-white border border-transparent rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium appearance-none text-sm sm:text-base"
                        >
                          <option value="">Choose a Service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-wider"><Clock size={14} className="text-primary" /> Preferred Slot</label>
                      <div className="relative">
                        <select 
                          name="slot"
                          value={formData.slot}
                          onChange={handleChange}
                          required 
                          className="w-full bg-white border border-transparent rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium appearance-none text-sm sm:text-base"
                        >
                          <option value="">Choose a Slot</option>
                          {getTimeSlots(formData.date).map(slot => (
                            <option key={slot} value={slot} disabled={slot === "Select a date first"}>{slot}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us your concern" 
                      rows={3}
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base"
                    />
                  </div>

                  <div className="pt-3 relative z-10">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-premium w-full py-4 sm:py-4.5 text-base flex items-center justify-center gap-3 border border-white/20 bg-primary text-white hover:brightness-110 shadow-xl shadow-black/20"
                    >
                      {isSubmitting ? "Sending..." : (
                        <div className="flex items-center gap-2">
                          <Send size={20} />
                          <span>Book Appointment Now</span>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { studioConfig } from "@/data/config";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageCircle, Instagram, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: string;
  location: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  propertyType?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "Full Home Interior Design",
    propertyType: "3 BHK / 4 BHK Apartment",
    location: "",
    budget: "₹40 Lakhs – ₹75 Lakhs",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Please provide your contact phone number.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please share a brief description of your interior aspirations.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate refined static client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "Full Home Interior Design",
      propertyType: "3 BHK / 4 BHK Apartment",
      location: "",
      budget: "₹40 Lakhs – ₹75 Lakhs",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Mailto fallback
  const mailtoSubject = encodeURIComponent(
    `Interior Design Enquiry [Bangalore]: ${formData.propertyType} — ${formData.name}`
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nProperty Type: ${formData.propertyType}\nLocation: ${formData.location}\nApprox Budget: ${formData.budget}\n\nProject Scope & Message:\n${formData.message}`
  );
  const mailtoLink = `mailto:${studioConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const whatsappDirectUrl = `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Vayu Spaces, I would like to discuss an interior project in Bangalore (${formData.propertyType || "Residential"}). My name is ${formData.name || "Client"}.`
  )}`;

  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>COMMENCE A DIALOGUE</span>
            <span className="opacity-40">—</span>
            <span>BANGALORE ATELIER</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            Let&apos;s Create Your Space.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            We welcome inquiries for bespoke villas, luxury penthouses, contemporary apartments, and boutique commercial commissions across Bangalore and Karnataka.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 border border-studio-charcoal/10">
              {isSubmitted ? (
                <div className="py-12 sm:py-16 text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-studio-bronze/20 text-studio-bronzeDark flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-normal">
                    Thank You, {formData.name}.
                  </h2>
                  <p className="mt-4 font-sans text-base text-studio-stone font-light leading-relaxed max-w-md mx-auto">
                    Your design inquiry has been submitted to our Bangalore design team. An architect will reach out within 24 business hours to schedule an initial consultation.
                  </p>

                  <div className="mt-8 p-4 bg-studio-sand/40 border border-studio-charcoal/10 max-w-md mx-auto text-left text-xs font-sans text-studio-stone space-y-1.5">
                    <div>
                      <strong className="text-studio-charcoal">Project Type:</strong> {formData.projectType}
                    </div>
                    <div>
                      <strong className="text-studio-charcoal">Property Type:</strong> {formData.propertyType}
                    </div>
                    <div>
                      <strong className="text-studio-charcoal">Budget Range:</strong> {formData.budget}
                    </div>
                    <div>
                      <strong className="text-studio-charcoal">Contact Phone:</strong> {formData.phone}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button onClick={handleReset} variant="outline" size="md">
                      Submit Another Inquiry
                    </Button>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-studio-bronzeDark hover:text-studio-obsidian border-b border-studio-bronzeDark pb-0.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-2">
                      PROJECT CONSULTATION INQUIRY
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-studio-obsidian font-normal">
                      Tell Us About Your Property.
                    </h2>
                  </div>

                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Aditi Rao"
                        className={`w-full px-4 py-3 bg-white/70 border ${
                          errors.name
                            ? "border-red-500"
                            : "border-studio-charcoal/15 focus:border-studio-obsidian"
                        } text-sm font-sans text-studio-obsidian focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98450 00000"
                        className={`w-full px-4 py-3 bg-white/70 border ${
                          errors.phone
                            ? "border-red-500"
                            : "border-studio-charcoal/15 focus:border-studio-obsidian"
                        } text-sm font-sans text-studio-obsidian focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. aditi@example.com"
                        className={`w-full px-4 py-3 bg-white/70 border ${
                          errors.email
                            ? "border-red-500"
                            : "border-studio-charcoal/15 focus:border-studio-obsidian"
                        } text-sm font-sans text-studio-obsidian focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Location / Community in Bangalore
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. Indiranagar, Sadashivnagar, Whitefield"
                        className="w-full px-4 py-3 bg-white/70 border border-studio-charcoal/15 focus:border-studio-obsidian text-sm font-sans text-studio-obsidian focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Property Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/70 border border-studio-charcoal/15 focus:border-studio-obsidian text-sm font-sans text-studio-obsidian focus:outline-none transition-colors"
                      >
                        <option value="Full Home Interior Design">Full Home Interior Design</option>
                        <option value="Villa Interior Architecture">Villa Interior Architecture</option>
                        <option value="Apartment / Penthouse Design">Apartment / Penthouse Design</option>
                        <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                        <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        <option value="Commercial / Office Workspace">Commercial / Office Workspace</option>
                        <option value="Space Planning & Consultation">Space Planning & Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                      >
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/70 border border-studio-charcoal/15 focus:border-studio-obsidian text-sm font-sans text-studio-obsidian focus:outline-none transition-colors"
                      >
                        <option value="2 BHK / 3 BHK Apartment">2 BHK / 3 BHK Apartment</option>
                        <option value="4 BHK+ Luxury Apartment">4 BHK+ Luxury Apartment</option>
                        <option value="Penthouse / Duplex">Penthouse / Duplex</option>
                        <option value="Independent Villa / Row House">Independent Villa / Row House</option>
                        <option value="Heritage Bungalow">Heritage Bungalow</option>
                        <option value="Commercial / Executive Suite">Commercial / Executive Suite</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                    >
                      Approximate Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/70 border border-studio-charcoal/15 focus:border-studio-obsidian text-sm font-sans text-studio-obsidian focus:outline-none transition-colors"
                    >
                      <option value="₹25 Lakhs – ₹40 Lakhs">₹25 Lakhs – ₹40 Lakhs</option>
                      <option value="₹40 Lakhs – ₹75 Lakhs">₹40 Lakhs – ₹75 Lakhs</option>
                      <option value="₹75 Lakhs – ₹1.5 Crores">₹75 Lakhs – ₹1.5 Crores</option>
                      <option value="₹1.5 Crores – ₹3 Crores">₹1.5 Crores – ₹3 Crores</option>
                      <option value="₹3 Crores +">₹3 Crores +</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-studio-charcoal mb-2"
                    >
                      Message & Scope of Work *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please share details about your property (carpet area, possession date, design preferences, or key functional needs)..."
                      className={`w-full px-4 py-3 bg-white/70 border ${
                        errors.message
                          ? "border-red-500"
                          : "border-studio-charcoal/15 focus:border-studio-obsidian"
                      } text-sm font-sans text-studio-obsidian focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Submit Enquiry"}
                    </Button>
                    <span className="text-xs text-studio-stone font-light">
                      No commitment required. We respect your confidentiality.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Studio Contact Details & Map Column */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact Details Panel with explicit icons */}
            <div className="glass-card p-6 sm:p-8 border border-studio-charcoal/10">
              <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-4">
                BANGALORE ATELIER
              </span>
              <h3 className="font-serif text-2xl text-studio-obsidian font-normal mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-6 font-sans text-sm text-studio-stone font-light">
                {/* 📍 Bangalore Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-studio-bronze/15 text-studio-bronzeDark shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">📍 Bangalore Atelier</strong>
                    <span>{studioConfig.address.full}</span>
                  </div>
                </div>

                {/* 📞 Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-studio-bronze/15 text-studio-bronzeDark shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">📞 Direct Phone</strong>
                    <a
                      href={`tel:${studioConfig.phone.replace(/\s+/g, "")}`}
                      className="hover:text-studio-obsidian transition-colors underline decoration-studio-charcoal/20"
                    >
                      {studioConfig.phone}
                    </a>
                  </div>
                </div>

                {/* 💬 WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-[#25D366]/15 text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">💬 WhatsApp Chat</strong>
                    <a
                      href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(
                        studioConfig.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-studio-obsidian transition-colors text-studio-bronzeDark font-medium"
                    >
                      Chat directly with our design team →
                    </a>
                  </div>
                </div>

                {/* 📧 Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-studio-bronze/15 text-studio-bronzeDark shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">📧 Studio Email</strong>
                    <a
                      href={`mailto:${studioConfig.email}`}
                      className="hover:text-studio-obsidian transition-colors underline decoration-studio-charcoal/20"
                    >
                      {studioConfig.email}
                    </a>
                  </div>
                </div>

                {/* 📸 Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-studio-bronze/15 text-studio-bronzeDark shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">📸 Instagram</strong>
                    <a
                      href={studioConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-studio-obsidian transition-colors underline decoration-studio-charcoal/20"
                    >
                      @vayuspaces
                    </a>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-studio-charcoal/10">
                  <div className="p-2 bg-studio-sand/50 text-studio-stone shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-studio-charcoal block font-medium">Consultation Hours</strong>
                    <span>{studioConfig.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div>
              <span className="text-xs uppercase tracking-widest text-studio-stone font-sans block mb-3">
                STUDIO LOCATION · INDIRANAGAR, BANGALORE
              </span>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { createLead } from "../api/leads";
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../assets/kumbh/1.png';
import img2 from '../assets/kumbh/2.png';
import img3 from '../assets/kumbh/3.png';
import img4 from '../assets/kumbh/4.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interests: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead(formData);

      toast.success("Your enquiry has been successfully logged. We’ll revert ASAP.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        interests: ""
      });
      setLoading(false);
    } catch (err) {
      toast.error("Submission failed. Please retry or escalate.");
    }
  };

  const slides = [
    {
      title: "Maha Magh Snan 2026 Prayagraj",
      subtitle: "Experience the sacred holy bath at the revered Triveni Sangam.",
      image: `${img1}`,
      accent: "Triveni Sangam Holy Confluence"
    },
    {
      title: "Holy Bath • Spiritual Purification",
      subtitle: "Undertake the auspicious Maha Magh Snan with devotion and guidance.",
      image: `${img2}`,
      accent: "Auspicious Snan Dates 2026"
    },
    {
      title: "Sankalpa Puja & Ritual Support",
      subtitle: "Offer sacred intentions with priest-guided Sankalpa Puja services.",
      image: `${img3}`,
      accent: "Authentic Vedic Rituals"
    },
    {
      title: "Senior-Friendly Pilgrimage Assistance",
      subtitle: "Experience comfort, care, and seamless on-ground spiritual support.",
      image: `${img4}`,
      accent: "Trusted Spiritual Concierge"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id='home' className="relative w-full px-2.5 py-30 overflow-hidden">
      <ToastContainer position="top-center" />

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title + ' — Maha Magh Snan 2026 Prayagraj'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/10"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="w-full grid grid-cols-1 backdrop-blur-xs shadow-2xl rounded-2xl lg:grid-cols-2 gap-10 items-center max-w-7xl px-2">

          {/* LEFT — Brand & Messaging */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-down">
              <h1 className="text-4xl md:text-8xl font-bold text-white">
                Anantha Tourism
              </h1>
            </div>

            <div className="max-w-3xl my-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight animate-slide-up mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-2xl text-gray-300 font-light animate-slide-up-delay">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="mb-8 animate-fade-in-delay">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm md:text-base tracking-wide">
                {slides[currentSlide].accent}
              </span>
            </div>

            <div className="flex gap-3 mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'bg-amber-500 w-16'
                        : 'bg-white/40 w-8 group-hover:w-12 group-hover:bg-white/60'
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Lead Form */}
          <div className="text-center animate-fade-in lg:ml-auto w-full">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Plan Your Maha Magh Snan 2026 Pilgrimage
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your name"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your phone"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your email"
              />

              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                required
                className="w-full resize-none px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Share your pilgrimage preferences"
              />

              <button
                type="submit"
                className="w-full py-3 cursor-pointer rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all hover:scale-[1.02]"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>

            <p className="text-gray-300 text-xs mt-4">
              Our Spiritual Travel Concierge will connect with you to tailor your Maha Magh Snan 2026 experience in Prayagraj.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

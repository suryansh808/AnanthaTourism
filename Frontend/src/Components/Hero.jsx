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
  { title: "Sacred River Confluence", subtitle: "Experience the divine union of Ganga, Yamuna & Saraswati.", image: `${img1}`, accent: "Triveni Sangam" },
  { title: "Maha Magh Snan 2026", subtitle: "Take the holy dip on highly auspicious bathing dates.", image: `${img2}`, accent: "Spiritual Renewal" },
  { title: "Kalpavas Devotion", subtitle: "Live with discipline, simplicity and spiritual intent.", image: `${img3}`, accent: "Devotion & Sadhana" },
  { title: "Spiritual Harmony", subtitle: "Immerse in prayers, rituals and sacred cultural heritage.", image: `${img4}`, accent: "Heritage & Faith" }
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
      {/* Animated Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/10"></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
  <div className="w-full grid grid-cols-1 backdrop-blur-xs shadow-2xl rounded-2xl lg:grid-cols-2 gap-10 items-center max-w-7xl px-2 ">

    {/* LEFT — Brand + Hero Copy */}
    <div className="flex flex-col items-center   text-center ">
      {/* Brand Logo */}
      <div className="overflow-hidden">
        <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-down">
          {/* <Sparkles className="w-8 h-8 text-[#CF9F3B] animate-pulse" /> */}
          <h1 className="text-4xl md:text-8xl font-bold  text-white ">
            Anantha  Tourism
          </h1>
          {/* <Sparkles className="w-8 h-8 text-[#CF9F3B] animate-pulse" /> */}
        </div>
      </div>

      {/* Heading + Subtitle */}
      <div className="max-w-3xl my-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight animate-slide-up mb-4">
          {slides[currentSlide].title}
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 font-light animate-slide-up-delay">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Accent */}
      <div className="mb-8 animate-fade-in-delay">
        <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm md:text-base tracking-wide">
          {slides[currentSlide].accent}
        </span>
      </div>


      {/* Indicators */}
      <div className="flex gap-3 mt-10">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className="group relative">
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

    {/* RIGHT — Lead Capture Form */}
    <div className="  text-center  animate-fade-in lg:ml-auto w-full">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Plan Your Spiritual Journey
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name} onChange={handleChange}
             required
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
             value={formData.phone} onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your phone"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email} onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your email"
          />
        </div>
         <div>
          <textarea
            type="text"
               value={formData.interests}
             onChange={handleChange}
            name="interests"
            required
            className="w-full resize-none px-4 py-3 rounded-xl bg-white/70 border border-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your travel interests"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 cursor-pointer rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all hover:scale-[1.02]"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
 
      <p className="text-gray-300 text-xs mt-4">
        We’ll circle back with a curated itinerary tailored to your needs.
      </p>
    </div>

  </div>
</div>


      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.9s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
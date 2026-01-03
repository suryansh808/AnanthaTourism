import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Star, TrendingUp } from "lucide-react";
import img1 from "../assets/pkg/1.png";
import img1a from "../assets/pkg/1a.png";
import img2 from "../assets/pkg/2.png";
import img2a from "../assets/pkg/2a.png";
import img3 from "../assets/pkg/3.png";
import img3a from "../assets/pkg/3a.png";
import img3b from "../assets/pkg/3b.png";
import img4 from "../assets/pkg/4.png";
import img4a from "../assets/pkg/4a.png";
import img4b from "../assets/pkg/4b.png";
import { createOrder, verifyPayment, saveBooking } from "../api/sankalpa";
import { loadRazorpay } from "../utils/loadRazorpay";
import { ToastContainer, toast } from "react-toastify";

export const packages = [
  {
    id: 0,
    title: "Sankalpa Puja – Sacred Intention Ritual",
    destination: "Prayagraj • Online Sankalpa Support",
    duration: "1 Day Ritual Experience",
    description:
      "A spiritually guided Sankalpa Puja curated to help devotees offer their sacred prayers and intentions with authenticity and devotion. This experience includes priest-led rituals and prayer offerings conducted with care.",
    priceFrom: 1001,
    currency: "INR",
    rating: 5.0,
    reviews: 128,
    flightIncluded: false,
    image: [`${img4}`, `${img4a}`, `${img4b}`],
    gst: 18,
    usps: [
      "Pandit-Led Ritual Experience",
      "Personalized Sankalpa Offering",
      "Blessings & Prasadam Support",
    ],

    pricing: [
      { category: "Sankalpa Puja", price: 1001 },
      { category: "Pandit-Led Ritual", price: 12999 },
      { category: "Personalized Sankalpa", price: 21999 },
    ],

    addOns: [
      "Dedicated Prayer Time Slot",
      "Name & Gotra Sankalpa Mention",
      "Prasadam & Ganga Jal Courier",
    ],

    badge: "Most Blessed",
  },

  {
    id: 1,
    title: "Maha Magh Snan Yatra – No Flights Included",
    destination: "Prayagraj",
    duration: "3 Nights / 4 Days",
    description: "A spiritually immersive journey featuring the sacred Triveni Sangam Snan, Shri Ram Janmabhoomi Darshan, and the transformational Ganga Aarti at Varanasi. Engineered for families, seniors, and seekers with structured assistance throughout.",
    priceFrom: 28749,
    currency: "INR",
    rating: 4.9,
    reviews: 812,
    flightIncluded: false,
    image: [`${img1}`, `${img1a}`],
    gst: 5,
    usps: [
      "Holy Triveni Sangam Snan",
      "Ram Janmabhoomi Darshan",
      "Ganga Aarti Experience",
      "Kashi Vishwanath Jyotirlinga",
      "Senior Friendly Assistance",
    ],

    pricing: [
      { category: "Standard", price: 28749 },
      { category: "Deluxe", price: 34499 },
      { category: "Premium", price: 45999 },
    ],

    hotelCategories: {
      standard: "Budget / Dharamshala",
      deluxe: "3★ Hotels",
      premium: "4★ Spiritual Hotels",
    },

    addOns: [
      "VIP Maha Magh Snan Pass",
      "Pandit-led Private Rituals",
      "Personalized Sankalpa Puja",
      "Sacred Prasadam Delivery",
    ],

    badge: "Spiritual Bestseller",
  },

  {
    id: 2,
    title: "Maha Magh Snan Divine Circuit – Flights Inclusive",
    destination:
      "Prayagraj • Chitrakoot • Ayodhya • Vindhyachal • Varanasi • Sarnath",
    duration: "6 Days",
    description:
      "An end-to-end, concierge-managed spiritual circuit with return flights ex-Bengaluru. Experience Maha Magh Snan, Ramayana landmarks, Shakti Peeth Darshan, and transformative Ganga rituals delivered with zero-stress logistics.",
    priceFrom: 86249,
    currency: "INR",
    rating: 4.9,
    reviews: 564,
    flightIncluded: true,
    image: [`${img2}`, `${img2a}`],
    gst: 18,
    usps: [
      "Return Flights Included",
      "Maha Magh Snan Assistance",
      "Ram, Shakti & Moksha Kshetra Coverage",
      "Senior-Friendly Pacing",
      "Dedicated Spiritual Concierge",
    ],

    pricing: [
      { category: "Standard", price: 86249 },
      { category: "Deluxe", price: 97749 },
      { category: "Premium", price: 114999 },
    ],

    hotelCategories: {
      standard: "Budget / Dharamshala",
      deluxe: "3★ Hotels",
      premium: "4★ Spiritual Hotels",
    },

    addOns: [
      "VIP Maha Magh Snan Pass",
      "Sankalpa Puja",
      "Wheelchair & Senior Support",
      "Ganga Jal & Prasadam Courier",
    ],

    badge: "All-Inclusive",
  },

  {
    id: 3,
    title: "Maha Magh Snan Divine Yatra — Flight Inclusive",
    destination: "Prayagraj • Ayodhya • Varanasi",
    duration: "3 Nights / 4 Days",
    description:
      "A high-impact short-format pilgrimage with return flights ex-Bengaluru. Includes Maha Magh Snan, Ayodhya Darshan, Ganga Aarti, and Kashi Vishwanath fully supported end-to-end.",
    priceFrom: 68999, // 59999 × 1.15
    currency: "INR",
    rating: 4.8,
    reviews: 437,
    flightIncluded: true,
    image: [`${img3}`, `${img3a}`, `${img3b}`],
    gst: 18,
    usps: [
      "Return Flights Included",
      "Holy Maha Magh Snan",
      "Kashi Vishwanath Darshan",
      "Airport & Temple Transfers",
      "Assisted Spiritual Journey",
    ],

    pricing: [
      { category: "Standard", price: 68999 },
      { category: "Deluxe", price: 80499 },
      { category: "Premium", price: 97749 },
    ],

    hotelCategories: {
      standard: "Budget / Dharamshala",
      deluxe: "3★ Hotels",
      premium: "4★ Spiritual Hotels",
    },

    addOns: [
      "VIP Snan Pass",
      "Pandit-Guided Puja",
      "Senior Assistance",
      "Prasadam Delivery",
    ],

    badge: "Flight Inclusive",
  },
];

export default function Packages() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    gotra: "",
    guardianName: "",
    purpose: "",
    packageType: "Sankalpa Puja", // default
    price: 1001, // default
  });
  const pricingOptions = {
    "Sankalpa Puja": 1001,
    "Pandit-Led Ritual": 12999,
    "Personalized Sankalpa": 21999,
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "packageType") {
      setFormData({
        ...formData,
        packageType: value,
        price: pricingOptions[value],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openForm = () => setShowForm(true);
  const closeForm = () => {
    setShowForm(false);
    setFormData({
      fullName: "",
      phone: "",
      gotra: "",
      guardianName: "",
      purpose: "",
      packageType: "Sankalpa Puja",
      price: 1001,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sdkLoaded = await loadRazorpay();
    // console.log("Razorpay SDK loaded:", sdkLoaded);

    if (!sdkLoaded) {
      toast.error("Payment failed to initialize");
      return;
    }

    const amount = formData.price;
    const amountBase = Number(amount);
    const gst = Math.round(amountBase * 0.18);
    const amountToPay = amountBase + gst;

    try {
      // 1️⃣ Create Razorpay Order
      const { data: order } = await createOrder(amountToPay);
      // console.log("Razorpay order created:", order);

      // 2️⃣ Open Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Anantha Tourism",
        description: formData.packageType,
        order_id: order.id,

        prefill: {
          name: formData.fullName,
          contact: formData.phone,
        },

        handler: async function (response) {
          // 3️⃣ Verify
          const { data: verify } = await verifyPayment(response);

          if (!verify.success) {
            toast.error("Payment verification failed");
            return;
          }

          // 4️⃣ Save Booking
          await saveBooking({
            ...formData,
            payment: {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              status: "PAID",
            },
          });

          toast.success("Sankalpa Booking Confirmed 🙏");
          closeForm();
        },

        // 🔴 PAYMENT FAILED (bank/auth/decline)
        error: function (err) {
          console.error("Razorpay Failure:", err);
          toast.error("Payment failed. Please try again.");
          closeForm;
        },

        // 🚪 USER CLOSED CHECKOUT WITHOUT PAYING
        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled");
            closeForm();
          },
        },

        theme: { color: "#3F2455" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      toast.error("Payment could not be processed");
    }
  };
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white py-24"
    >
      <ToastContainer position="top-center" />
      {/* Decorative Blobs */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center animate-slide-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <TrendingUp size={16} className="text-[#3F2455]" />
            <span className="text-sm font-semibold text-[#3F2455]">
              Premium Maha Magh Snan Experiences
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Spiritual Stay <span className="text-[#3F2455]">Experiences</span>
          </h2>

          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-gray-600">
            Embark on a curated Maha Magh Snan 2026 pilgrimage at Triveni Sangam
            that blends devotion, priest-guided holy bathing rituals, Kalpavas
            discipline, cultural immersion, and premium hospitality delivering a
            truly transformative spiritual experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                {/* <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.destination}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#00000089] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {pkg.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#CF9F3B] px-3 py-1 text-xs font-bold text-gray-900 shadow-lg">
                      ⭐ {pkg.badge}
                    </span>
                  )}

                  {pkg.flightIncluded && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#3F2455] shadow">
                      ✈️ Flights Included
                    </span>
                  )}
                </div> */}
              <div className="relative overflow-hidden">
  {(() => {
    const images = Array.isArray(pkg.image) ? pkg.image : [pkg.image];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (!images.length) return;
      const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <>
        {/* FADE TRANSITION SLIDER */}
        <div className="relative h-80 w-full">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={pkg.destination}
              loading="lazy"
              className={`absolute inset-0 h-80 w-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-[#00000089] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {/* BADGE */}
        {pkg.badge && (
          <span className="absolute right-4 top-4 rounded-full bg-[#CF9F3B] px-3 py-1 text-xs font-bold text-gray-900 shadow-lg">
            ⭐ {pkg.badge}
          </span>
        )}

        {/* FLIGHT TAG */}
        {pkg.flightIncluded && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#3F2455] shadow">
            ✈️ Flights Included
          </span>
        )}

        {/* DOT INDICATORS */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-4 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </>
    );
  })()}
</div>


                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#CF9F3B]">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[#3F2455] font-semibold">
                      <MapPin size={16} />
                      <span className="text-sm">{pkg.destination}</span>
                    </div>
                  </div>

                  <p className="mb-5 line-clamp-2 text-sm text-gray-600">
                    {pkg.description}
                  </p>

                  {/* Rating */}
                  <div className="mb-5 flex items-center gap-2 border-b border-gray-200 pb-5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(pkg.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-500">
                      {pkg.rating} ({pkg.reviews})
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-800">
                    <Calendar size={16} className="text-[#3F245]" />
                    {pkg.duration}
                  </div>

                  {/* USPs */}
                  {pkg.usps && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {pkg.usps.slice(0, 3).map((usp) => (
                        <span
                          key={usp}
                          className="rounded-md bg-blue-600/10 px-2.5 py-1.5 text-xs font-medium text-[#3F2455] transition hover:bg-blue-600/20"
                        >
                          {usp}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Pricing — Tier View */}
                  {pkg.pricing && (
                    <div className="mb-5 rounded-lg border border-gray-200 bg-gray-50 p-3">
                      <p className="mb-2 text-xs font-semibold text-gray-500">
                        Pricing Tiers (Per Person)
                      </p>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                        {pkg.pricing.map((tier) => (
                          <div
                            key={tier.category}
                            className="rounded-md bg-white p-2 shadow-sm"
                          >
                            <p className="text-gray-600">{tier.category}</p>
                            <p className="text-[#3F2455]">
                              ₹{tier.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hotel Categories */}
                  {pkg.hotelCategories && (
                    <div className="mb-5 text-xs text-gray-600">
                      <p className="font-semibold text-gray-700 mb-1">
                        Hotel Categories
                      </p>
                      <ul className="list-disc pl-4">
                        <li>Standard: {pkg.hotelCategories.standard}</li>
                        <li>Deluxe: {pkg.hotelCategories.deluxe}</li>
                        <li>Premium: {pkg.hotelCategories.premium}</li>
                      </ul>
                    </div>
                  )}

                  {/* Add-ons */}
                  {pkg.addOns && (
                    <div className="mb-5 text-xs text-gray-600">
                      <p className="font-semibold text-gray-700 mb-1">
                        Optional Add-Ons
                      </p>
                      <ul className="list-disc pl-4">
                        {pkg.addOns.slice(0, 4).map((add) => (
                          <li key={add}>{add}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-auto border-t border-gray-200 pt-4">
                    <div className="mb-3">
                      <p className="text-xs font-medium uppercase text-gray-500">
                        Starting From
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold text-[#3F2455]">
                          ₹{pkg.priceFrom.toLocaleString("en-IN")}
                        </p>
                        <span className="font-xs text-[#3F2455]">
                          + {pkg.gst}% GST
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {pkg.id !== 0 ? (
                        <button
                          onClick={() => navigate(`/page/${pkg.id}`)}
                          className="flex-1 rounded-lg border cursor-pointer border-[#3F2455] px-4 py-2 text-center font-semibold text-[#3F2455] transition hover:bg-blue-600/10"
                        >
                          View Details
                        </button>
                      ) : null}

                      {/* Future CTA */}
                      {pkg.id === 0 ? (
                        <button
                          onClick={openForm}
                          className="flex-1 rounded-lg cursor-pointer bg-[#3F2455] px-4 py-2 font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-[#724696] hover:shadow-lg"
                        >
                          Book Now
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-100 p-4">
            <div className="bg-white  h-150 overflow-scroll  no-scrollbar rounded-2xl w-full max-w-2xl  shadow-2xl relative">
              <button
                onClick={closeForm}
                className="absolute right-4 top-4 text-white cursor-pointer"
              >
                ✕
              </button>

              <div className="bg-linear-to-r from-[#3F2455] to-[#724696] text-white px-6 py-2 text-center rounded-t-2xl">
                <h2 className="text-xl font-bold">
                  Sankalpa Puja Booking Form
                </h2>
                <p className="text-sm opacity-80 mt-1">
                  Please share your Sankalpa details our priest will perform the
                  puja with devotion.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-2 space-y-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInput}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleInput}
                  className="w-full border rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  name="gotra"
                  placeholder="Gotra (Optional)"
                  value={formData.gotra}
                  onChange={handleInput}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="text"
                  name="guardianName"
                  placeholder="Father’s / Husband’s Name"
                  value={formData.guardianName}
                  onChange={handleInput}
                  required
                  className="w-full border rounded-lg px-4 py-3"
                />
                <select
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleInput}
                  className="w-full border rounded-lg px-4 py-3 font-semibold"
                  required
                >
                  <option value="Sankalpa Puja">Sankalpa Puja — ₹1,001</option>
                  <option value="Pandit-Led Ritual">
                    Pandit-Led Ritual — ₹12,999
                  </option>
                  <option value="Personalized Sankalpa">
                    Personalized Sankalpa — ₹21,999
                  </option>
                </select>
                <textarea
                  type="text"
                  name="purpose"
                  placeholder="Purpose of Sankalpa Puja"
                  required
                  value={formData.purpose}
                  onChange={handleInput}
                  className="w-full border resize-none rounded-lg px-4 py-3"
                  rows={3}
                />
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-sm font-semibold">
                  Selected Package: {formData.packageType}
                  <br />
                  Price: ₹{formData.price.toLocaleString("en-IN")} + 18% GST
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#3F2455] text-white font-bold py-3 rounded-lg hover:bg-[#724696] transition"
                >
                  Submit Sankalpa Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Our team will reach out to confirm the puja schedule and
                  priest allocation.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

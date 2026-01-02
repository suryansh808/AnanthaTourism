import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  Star,
  Users,
  Check,
  ArrowLeft,
  X,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { packages } from "../Components/Packages";
import api from "../api/apiConfig";
import { loadRazorpay } from "../utils/loadRazorpay";

export default function PackageDetails() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "",
  });

  const { id } = useParams();
  const pkg = packages.find((p) => p.id === Number(id));

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#3F2455] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const inclusions = pkg.inclusions || pkg.usps || [];
  const exclusions = pkg.exclusions || [];
  const itinerary = pkg.itinerary || [];
  const priceBase = pkg.priceFrom;

  const [selectedTier, setSelectedTier] = useState(null);
  const [basePrice, setBasePrice] = useState(priceBase);

  const handleForm = () => setShowForm(true);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!(await loadRazorpay())) {
  //     alert("Payment gateway unavailable");
  //     return;
  //   }

  //   const totalTravelers = Number(formData.travelers);
  // const subTotal = priceBase * totalTravelers;
  // const gstAmount = subTotal * 0.18;
  // const amountWithGst = Math.round(subTotal + gstAmount);

  //   try {
  //     const { data: order } = await api.post("/payments/create-order", {
  //       amount: amountWithGst
  //     });

  //     if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
  //       throw new Error("Razorpay Key missing. Check Vite env configuration.");
  //     }

  //     const options = {
  //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //       amount: order.amount,
  //       currency: "INR",
  //       name: "Anantha Tourism",
  //       description: pkg.title,
  //       order_id: order.id,
  //       prefill: {
  //         name: formData.fullName,
  //         email: formData.email,
  //         contact: formData.phone
  //       },
  //       handler: async (response) => {
  //         const bookingPayload = {
  //           packageDetails: {
  //             id: pkg.id,
  //             title: pkg.title,
  //             destination: pkg.destination,
  //             duration: pkg.duration,
  //             price: priceBase
  //           },
  //           customerDetails: {
  //             fullName: formData.fullName,
  //             email: formData.email,
  //             phone: formData.phone,
  //             numberOfTravelers: totalTravelers
  //           },
  //           totalAmount: amount
  //         };

  //         const { data } = await api.post("/payments/verify-and-book", {
  //           ...response,
  //           bookingData: bookingPayload
  //         });

  //         setFormData({
  //           fullName: "",
  //           email: "",
  //           phone: "",
  //           travelers: ""
  //         });

  //         if (!data.success) {
  //           alert("Payment verification failed");
  //           return;
  //         }

  //         alert(`Booking Confirmed\nID: ${data.bookingId}`);
  //         setShowForm(false);
  //       },
  //       theme: { color: "#3F2455" }
  //     };

  //     new window.Razorpay(options).open();
  //   } catch (err) {
  //     console.error(err);
  //     alert("Unable to initiate payment");
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTier) {
      toast.error("Please select a package");
      return;
    }

    if (!(await loadRazorpay())) {
      toast.error("Payment gateway unavailable");
      return;
    }

    const totalTravelers = Number(formData.travelers);

    const subTotal = basePrice * totalTravelers;
    const gstAmount = subTotal * 0.18;
    const amountWithGst = Math.round(subTotal + gstAmount);

    try {
      const { data: order } = await api.post("/payments/create-order", {
        amount: amountWithGst,
      });

      const options = {
  key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: "INR",
  name: "Anantha Tourism",
  description: `${pkg.title} — ${selectedTier.category}`,
  order_id: order.id,

  prefill: {
    name: formData.fullName,
    email: formData.email,
    contact: formData.phone,
  },

  // 🟢 PAYMENT SUCCESS — VERIFIED LATER VIA API
  handler: async function (response) {
    try {
      const bookingPayload = {
        packageDetails: {
          id: pkg.id,
          title: pkg.title,
          tier: selectedTier.category,
          pricePerPerson: basePrice,
          destination: pkg.destination,
          duration: pkg.duration,
        },
        customerDetails: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          numberOfTravelers: totalTravelers,
        },
        pricing: {
          subTotal,
          gstAmount,
          totalAmount: amountWithGst,
        },
        payment: response,
      };

      const { data } = await api.post(
        "/payments/verify-and-book",
        bookingPayload
      );

      if (!data.success) {
        toast.error("Payment verification failed");
        return;
      }

      toast.success(`Booking Confirmed 🎉 Reference: ${data.bookingId}`);
      closeFrom();

    } catch (err) {
      console.error(err);
      toast.error("Payment verification failed");
    }
  },

  // 🔴 PAYMENT FAILED (bank/auth/decline)
  error: function (err) {
    console.error("Razorpay Failure:", err);
    toast.error("Payment failed. Please try again.");
    closeFrom();
  },

  // 🚪 USER CLOSED CHECKOUT WITHOUT PAYING
  modal: {
    ondismiss: function () {
      toast.info("Payment cancelled");
      closeFrom();
    },
  },

  theme: { color: "#3F2455" },
};


      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      toast.error("Unable to initiate payment");
    }
    
  };

  const closeFrom = () => {
    setShowForm(false);
    setFormData({ fullName: "", email: "", phone: "", travelers: "" });
    setSelectedTier(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50">
      {/* Header */}
       <ToastContainer position="top-center" />
      <header className="container m-auto w-full sm:rounded-xl lg:rounded-full mt-2 bg-[#ffffff91] backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 lg:flex flex-wrap  items-center gap-5">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#3F2455] font-semibold"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <h1 className="flex-1 text-center lg:text-xl mt-2 lg:mt-0 text-xs whitespace-nowrap font-bold">
            {pkg.title}
          </h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Hero */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <img
            src={pkg.image}
            alt={pkg.destination}
            className="w-full h-120 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-slate-600 text-lg mb-8">{pkg.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y py-8">
                <Info
                  icon={<Calendar />}
                  label="Duration"
                  value={pkg.duration}
                />
                <Info
                  icon={<MapPin />}
                  label="Destination"
                  value={pkg.destination}
                />
                <Info icon={<Users />} label="Group Size" value="2–20 People" />
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(pkg.rating)
                          ? "text-[#CF9F3B] fill-[#CF9F3B]"
                          : "text-slate-300"
                      }
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold">{pkg.rating} / 5</p>
                  <p className="text-sm text-slate-500">
                    {pkg.reviews} verified reviews
                  </p>
                </div>
              </div>
            </section>

            {/* Inclusions */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-[#3F2455] mt-1" size={18} />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Exclusions */}
            {exclusions.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Exclusions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {exclusions.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="text-red-500 mt-1" size={18} />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {itinerary.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8">Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-[#3F2455] text-[#3F2455] flex items-center justify-center font-bold">
                          {item.day}
                        </div>
                        {i !== itinerary.length - 1 && (
                          <div className="w-1 h-12 bg-[#CF9F3B] mt-2 rounded" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="sticky top-28 h-fit bg-[#ffffff2b] backdrop-blur-md shadow-lg rounded-xl p-8">
            <p className="text-sm uppercase text-slate-500 mb-2">
              Starting From
            </p>
            <p className="text-4xl font-bold text-[#3F2455] mb-1">
              ₹{priceBase.toLocaleString("en-IN")}
            </p>

            {pkg.flightIncluded && (
              <p className="text-sm font-semibold text-green-600 mb-3">
                ✈️ Flights Included
              </p>
            )}

            {pkg.pricing && (
              <div className="mb-6 grid grid-cols-3 gap-2 text-center text-xs">
                {pkg.pricing.map((t) => (
                  <div
                    key={t.category}
                    className="rounded-lg border  bg-white p-2 shadow-sm"
                  >
                    <p className="font-semibold">{t.category}</p>
                    <p className="text-[#3F2455] font-bold">
                      ₹{t.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleForm}
              className="w-full cursor-pointer bg-[#3F2455] text-white font-bold py-4 rounded-lg mb-3 hover:scale-105 transition"
            >
              Book Now
            </button>
          </aside>
        </div>
      </main>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-60 bg-[#ffffff7b] backdrop-blur-sm shadow-2xl  flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative animate-fade-in">
            <button
              onClick={() => closeFrom()}
              className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <div className="bg-linear-to-r from-[#3F2455] to-[#5a3570] text-white p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold mb-2">Complete Your Booking</h2>
              <p className="text-sm text-white/80">{pkg.title}</p>
              <p className="text-xs text-white/60 mt-1">
                {pkg.destination} • {pkg.duration}
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="p-3">
                <div className="space-y-1">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3F2455] transition"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3F2455] transition"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3F2455] transition"
                  />
                  <div className="space-y-3 mt-1">
                    <p className="font-semibold text-gray-700">
                      Select Package Type
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {pkg.pricing.map((tier) => (
                        <button
                          key={tier.category}
                          type="button"
                          onClick={() => {
                            setSelectedTier(tier);
                            setBasePrice(tier.price);
                          }}
                          className={`border rounded-lg p-3 text-center font-semibold cursor-pointer transition 
          ${
            selectedTier?.category === tier.category
              ? "bg-[#3F2455] text-white border-[#3F2455]"
              : "bg-white text-gray-700 border-gray-300"
          }`}
                        >
                          <p>{tier.category}</p>
                          <p>₹{tier.price.toLocaleString("en-IN")}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    placeholder="Enter number of people"
                    min="1"
                    max="20"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3F2455] transition"
                  />

                  {/* {formData.travelers && (
                    <div className="bg-[#CF9F3B]/10 border border-[#CF9F3B] rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">
                          Estimated Total:
                        </span>
                        <span className="text-xl font-bold text-[#3F2455]">
                          ₹{priceBase * Number(formData.travelers)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        ₹{priceBase} × {formData.travelers} traveler
                        {formData.travelers > 1 ? "s" : ""}
                      </p>
                    </div>
                  )} */}
                  {formData.travelers && selectedTier && (
                    <div className="bg-[#CF9F3B]/10 border border-[#CF9F3B] rounded-lg p-2 space-y-1">
                      <p className="text-sm font-semibold">
                        Subtotal: ₹
                        {(
                          basePrice * Number(formData.travelers)
                        ).toLocaleString("en-IN")}
                      </p>

                      <p className="text-sm font-semibold">
                        GST (18%): ₹
                        {(
                          basePrice *
                          Number(formData.travelers) *
                          0.18
                        ).toLocaleString("en-IN")}
                      </p>

                      <p className="text-md font-bold text-[#3F2455]">
                        Total Payable: ₹
                        {Math.round(
                          basePrice * Number(formData.travelers) * 1.18
                        ).toLocaleString("en-IN")}
                      </p>

                      <p className="text-xs text-gray-500">
                        ₹{basePrice} × {formData.travelers} traveller
                        {formData.travelers > 1 ? "s" : ""} + 18% GST
                      </p>
                    </div>
                  )}
                </div>

                <button
                  disabled={!selectedTier || !formData.travelers}
                  type="submit"
                  className={`w-full font-bold py-3 rounded-lg mt-2 transition
    ${
      !selectedTier || !formData.travelers
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-linear-to-r from-[#3F2455] cursor-pointer to-[#5a3570] text-white hover:scale-105 hover:shadow-lg"
    }
  `}
                >
                  Confirm Booking
                </button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  By booking, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <div className="text-[#3F2455] mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase text-slate-500 font-semibold">
          {label}
        </p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
}

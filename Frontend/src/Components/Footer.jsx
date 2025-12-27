import { MapPin, Mail, Phone, Facebook, Instagram, Twitter,X } from "lucide-react"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
export default function Footer({
   onHome,
  onPackages,
}) {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
   useEffect(() => {
    if (showPrivacy || showTerms) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [showPrivacy, showTerms])
  return (
    <footer className="bg-primary py-5">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-5">
        {/* Top Section */}
        <div className="flex flex-wrap  justify-between w-full  md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="h-28" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li>
                <button onClick={onHome} className="hover:text-accent transition font-medium cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onPackages} className="hover:text-accent transition font-medium cursor-pointer">
                  Packages
                </button>
              </li>
              <li>
                <button  onClick={() => setShowPrivacy(true)} className="hover:text-accent transition font-medium cursor-pointer">
                   Privacy Policy
                </button>
              </li>
              <li>
                <button    onClick={() => setShowTerms(true)}  className="hover:text-accent transition font-medium cursor-pointer">
                 T&C
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 ">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>Yelahanka , Bangalore Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 8861571188</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent shrink-0" />
                <span>support@ananthatourism.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className=" text-sm">© 2025 Anantha Tourism. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className=" hover:text-accent transition">
                <Facebook size={20} />
              </a>
              <a href="#" className=" hover:text-accent transition">
                <Instagram size={20} />
              </a>
              <a href="#" className=" hover:text-accent transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {(showPrivacy || showTerms) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => {
            setShowPrivacy(false)
            setShowTerms(false)
          }}
        >
          <div
            className="bg-white rounded-2xl w-[90%] max-w-3xl max-h-[80vh] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-semibold">
                {showPrivacy ? "Privacy Policy" : "Terms & Conditions"}
              </h2>
              <button
                onClick={() => {
                  setShowPrivacy(false)
                  setShowTerms(false)
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-4 overflow-y-scroll no-scrollbar max-h-[65vh] leading-relaxed text-sm">
              {showPrivacy && (
                <>
                  <p className="mb-3">
                    We are committed to safeguarding your personal information and
                    ensuring responsible usage at every interaction touchpoint.
                  </p>
                  <p className="mb-3">
                    Data collected may include your name, contact details, booking
                    preferences, and communication records. This data is utilised solely
                    to deliver seamless service delivery and traveller support.
                  </p>
                  <p className="mb-3">
                    We do not trade, sell, or misuse customer data. Access is restricted
                    to authorised teams on a need-to-know basis.
                  </p>
                  <p>
                    By engaging with our platform and services, you consent to this
                    responsible data-handling framework.
                  </p>
                </>
              )}

              {showTerms && (
                <>
                  <p className="mb-3">
                    All bookings are governed by our commercial operating framework.
                    Pricing, inclusions, exclusions, and cancellation policies will be
                    shared transparently at the time of booking.
                  </p>
                  <p className="mb-3">
                    Customers are expected to review itinerary details, documentation
                    requirements, and payment milestones before confirming travel.
                  </p>
                  <p className="mb-3">
                    Operational changes arising from weather, religious schedules, or
                    regulatory directives may require on-ground adjustments. Our team
                    will endeavour to minimise disruption and provide alternatives where
                    feasible.
                  </p>
                  <p>
                    Proceeding with a booking confirms your acceptance of these terms.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
    
  )
}

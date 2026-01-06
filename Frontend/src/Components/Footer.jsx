import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
export default function Footer({ onHome, onPackages }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [cancellationPolicy, setCancellationPolicy] = useState(false);

  useEffect(() => {
    if (showPrivacy || showTerms || cancellationPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacy, showTerms, cancellationPolicy]);
  return (
    <footer
      // style={{
      //   background: "radial-gradient(circle, #3F2455, #000 75%)",
      // }}
      className=" py-5 bg-linear-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl relative  mx-auto px-4 sm:px-6 lg:px-5">
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
                <button
                  onClick={onHome}
                  className="hover:text-accent transition font-medium cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onPackages}
                  className="hover:text-accent transition font-medium cursor-pointer"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCancellationPolicy(true)}
                  className="hover:text-accent transition font-medium cursor-pointer"
                >
                  Cancellation Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-accent transition font-medium cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-accent transition font-medium cursor-pointer"
                >
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
                <span>Yelahanka , Bangalore Karnataka </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 8861571188</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent shrink-0" />
                <span>ananthatourism@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className=" text-sm ">
              © 2025 Anantha Tourism All Rights Reserved.
            </p>
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

        {/* whatsapp button */}
        <div className="bg-green-800 px-3 py-2 lg:text-4xl text-3xl fixed bottom-8 right-8 rounded-full z-50 shadow-lg hover:shadow-xl transition-shadow">
          <a
            href="https://wa.me/918861571188?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Maha%20Magh%20Snan%202026%20pilgrimage%20packages%20and%20snan%20assistance%20at%20Triveni%20Sangam."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fa fa-whatsapp" />
          </a>
        </div>
      </div>

      {(showPrivacy || showTerms || cancellationPolicy) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100"
          onClick={() => {
            setShowPrivacy(false);
            setShowTerms(false);
            setCancellationPolicy(false);
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
                  setShowPrivacy(false);
                  setShowTerms(false);
                  setCancellationPolicy(false);
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-4 overflow-y-scroll no-scrollbar max-h-[65vh] leading-relaxed text-sm">
              {showPrivacy && (
                <>
                  <p className="mb-3">
                    We are committed to safeguarding your privacy and
                    maintaining the highest standards of data protection. The
                    personal information collected through our website may
                    include your name, contact details, booking preferences, and
                    communication records shared during enquiries or
                    transactions.
                  </p>

                  <p className="mb-3">
                    Your information is used solely for booking management,
                    customer communication, traveller assistance, payment
                    processing, and service fulfilment. We do not sell, rent,
                    trade, or misuse customer data for unauthorised activities.
                  </p>

                  <p className="mb-3">
                    Payments are securely processed through our authorised
                    payment partner Razorpay. During payment, limited
                    information such as your name, email, phone number, and
                    transaction details may be securely shared for verification
                    and settlement purposes as part of their fraud-prevention
                    and compliance framework.
                  </p>

                  <p className="mb-3">
                    Sensitive payment data is encrypted and handled in a
                    PCI-DSS-compliant environment. We do not store your debit or
                    credit card details on our servers at any time.
                  </p>

                  <p className="mb-3">
                    Access to customer data is strictly role-based and limited
                    to authorised personnel only. Internal confidentiality
                    protocols and governance standards are followed at all
                    times.
                  </p>

                  <p className="mb-3">
                    By accessing our website, submitting a query, or proceeding
                    with a booking, you consent to the lawful use of your
                    information in accordance with this Privacy Policy.
                  </p>

                  <p>
                    For any privacy-related queries or data-access requests,
                    please write to us at:
                    <br />
                    <strong>ananthatourism@gmail.com</strong>
                  </p>
                </>
              )}

              {showTerms && (
                <>
                  <p className="mb-3">
                    All bookings, ritual service requests, and payment
                    transactions made through this platform are governed by the
                    policies outlined herein. Package inclusions, exclusions,
                    taxes, pricing, and cancellation rules will be clearly
                    communicated prior to confirmation.
                  </p>

                  <p className="mb-3">
                    Travellers are responsible for reviewing itinerary details,
                    advisories, eligibility requirements, and documentation
                    prior to participation in any pilgrimage or associated
                    services.
                  </p>

                  <p className="mb-3">
                    Payments processed through our platform are handled securely
                    via Razorpay. By proceeding with a payment, you agree that
                    Razorpay may securely process your transaction for
                    authentication, settlement, and compliance purposes. We do
                    not store card details on our servers.
                  </p>

                  <p className="mb-3">
                    Operational adjustments may occasionally be required due to
                    regulatory advisories, crowd-control measures, weather
                    conditions, religious calendar updates, or logistical
                    constraints. Where required, our team will endeavour to
                    offer suitable alternatives.
                  </p>

                  <p className="mb-3">
                    Cancellations and refunds shall be governed strictly as per
                    the applicable policy at the time of booking. Approved
                    refunds will be processed through the original mode of
                    payment subject to banking timelines.
                  </p>

                  <p className="mb-3">
                    Any fraudulent activity, misuse, or violation of policy may
                    result in service denial or cancellation without liability.
                  </p>

                  <p>
                    By submitting a booking request or completing a transaction,
                    you confirm acceptance of these Terms & Conditions.
                  </p>
                </>
              )}

              {cancellationPolicy && (
                <>
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>

                  <p className="mb-3">
                    All cancellation requests must be formally submitted via
                    email.
                  </p>

                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      30–07 days prior to departure: 10% of the package cost
                    </li>
                    <li>
                      07–02 days prior to departure: 25% of the package cost
                    </li>
                    <li>
                      Within 48 hours of departure or No-Show: 100% of the
                      package cost
                    </li>
                    <li>
                      Peak Season (15 Apr–15 Jun, Dasara 10 days, Diwali 10
                      days, Christmas & New Year 15 days): cancellations within
                      7 days are non-refundable due to advance hotel settlement
                      requirements.
                    </li>
                    <li>
                      While the above policies apply, we will always make
                      reasonable efforts to minimise financial impact wherever
                      possible.
                    </li>
                  </ul>

                  <p className="mb-3 font-semibold">
                    All disputes are subject to Bengaluru jurisdiction.
                  </p>

                  <p className="mb-2 font-semibold">Important Notes:</p>

                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      Any costs arising from natural events, strikes, road
                      closures, or other external disruptions must be borne
                      directly by the traveller.
                    </li>
                    <li>
                      Any additional services requested beyond the agreed scope
                      will be chargeable. Changes requested within 7 days of
                      travel may incur additional costs.
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

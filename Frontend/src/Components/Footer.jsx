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
    <footer
      // style={{
      //   background: "radial-gradient(circle, #3F2455, #000 75%)",
      // }} 
     className="lg:rounded-t-[100px] rounded-t-[50px] border border-gray-100 py-5">
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
                <span>Yelahanka , Bangalore Karnataka </span>
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100"
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
      We are committed to protecting your privacy and maintaining the highest
      standards of data security across all interactions on our platform.
      Personal information collected may include your name, contact details,
      communication records, booking preferences, and transactional information
      shared during the payment process.
    </p>

    <p className="mb-3">
      This information is collected solely for the purpose of booking
      management, traveller assistance, service delivery, compliance, payment
      processing, and customer support. We do not sell, rent, or misuse your
      information for any unauthorised activity.
    </p>

    <p className="mb-3">
      Payments on our platform are processed securely through our payment
      partner Razorpay. During the transaction, certain required information may
      be shared with Razorpay such as your name, contact number, email address,
      and transaction details for the purpose of completing and validating the
      payment. Razorpay may also collect device, network, and payment-related
      metadata as part of their fraud-prevention & security framework.
    </p>

    <p className="mb-3">
      All sensitive data is encrypted and handled through secure, PCI-DSS-compliant
      infrastructure. We do not store your card details on our servers at any
      point in time.
    </p>

    <p className="mb-3">
      Access to customer information is restricted to authorised personnel only,
      strictly on a need-to-know basis, and governed by internal controls and
      confidentiality protocols.
    </p>

    <p className="mb-3">
      By engaging with our website, submitting a booking request, or completing
      a transaction, you provide consent for the lawful collection and secure
      processing of your information in line with this privacy framework.
    </p>

    <p>
      For any clarification, data-access request, or privacy-related concern,
      you may reach out to our support team at:
      <br />
      <strong>support@ananthatourism.com</strong>
    </p>
  </>
)}


           {showTerms && (
  <>
    <p className="mb-3">
      All bookings, digital service requests, and payment transactions made
      through our platform are governed by our commercial service framework.
      Pricing, package inclusions, exclusions, government taxes, and applicable
      cancellation rules will be communicated transparently prior to confirming
      a booking or initiating payment.
    </p>

    <p className="mb-3">
      Customers are responsible for reviewing itinerary details, eligibility
      requirements, personal documentation, health & travel advisories, and
      payment milestones prior to confirming participation in any pilgrimage,
      ritual service, or travel experience.
    </p>

    <p className="mb-3">
      Payments processed via our website are securely handled through our
      authorised payment partner Razorpay. By proceeding with a payment, you
      acknowledge and agree that Razorpay may securely process transaction
      information for authentication, settlement, fraud-prevention, and
      compliance purposes. We do not store card data on our servers.
    </p>

    <p className="mb-3">
      Operational adjustments may occasionally be required due to weather
      conditions, regulatory advisories, religious calendars, crowd-control
      mandates, security guidelines, or logistical constraints. Where this
      occurs, our team will endeavour to minimise service disruption and
      structure commercially reasonable alternatives.
    </p>

    <p className="mb-3">
      In the event of cancellations, amendments, or refunds, applicable charges
      and eligibility will be governed strictly as per the published policy at
      the time of booking. Refunds, if approved, will be processed through the
      original mode of payment in accordance with banking timelines.
    </p>

    <p className="mb-3">
      Misuse of the platform, fraudulent activity, chargeback abuse, or breach
      of terms may result in cancellation of services without liability.
    </p>

    <p>
      By accessing our platform, submitting a booking request, or completing a
      payment, you confirm your acceptance of these Terms & Conditions and
      agree to abide by the policies that govern our service delivery model.
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

import { useState } from "react"
import { Mail, Phone, User, MessageSquare, Send, MapPin, Clock } from "lucide-react"

export default function NewsLetter() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <section
      id="contact"
      style={{
        background: "radial-gradient(circle, #3F2455, #000 75%)",
      }}
      className="py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#CF9F3B] to-[#CF9F3B] bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Have questions about our packages or need help planning your dream vacation? 
                We're here to assist you every step of the way. Fill out the form and our 
                travel experts will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                <div className="p-3 rounded-full bg-amber-500/20">
                  <Phone className="w-6 h-6 text-[#CF9F3B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-white/70">+91 8861571188</p>
                  <p className="text-sm text-white/50">Mon-Sat: 10AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                <div className="p-3 rounded-full bg-amber-500/20">
                  <Mail className="w-6 h-6 text-[#CF9F3B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-white/70">support@ananthatourism.com</p>
                  <p className="text-sm text-white/50">We'll respond within 24hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                <div className="p-3 rounded-full bg-amber-500/20">
                  <MapPin className="w-6 h-6 text-[#CF9F3B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-sm text-white/50">Yelahanka , Bangalore Karnataka</p>
                </div>
              </div>
            </div>

            {/* Stats or Additional Info */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">10K+</div>
                <div className="text-sm text-white/60">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">500+</div>
                <div className="text-sm text-white/60">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="absolute inset-0  rounded-2xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-white/70">Fill in the details below</p>
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>                  
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>               
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your travel plans..."
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-[#3F2455] to-[#3F2455] text-white font-semibold py-4 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-sm text-white/60">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
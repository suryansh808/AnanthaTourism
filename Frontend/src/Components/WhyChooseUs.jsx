import { ShieldCheck, Users, Headphones, Plane, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Authentic Magh Kumbh Journeys",
    desc: "Curated Magh Kumbh Mela 2026 itineraries that harmonize devotion, culture, and comfort  always meaningful, never transactional.",
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "Pandit-Led Magh Kumbh Rituals",
    desc: "Priest-guided Sankalpa and Snan ceremonies at Triveni Sangam, conducted with purity, precision, and spiritual integrity.",
  },
  {
    icon: <Plane className="w-8 h-8 text-amber-500" />,
    title: "Seamless End-to-End Pilgrimage",
    desc: "We orchestrate hotels, transport, guided movement, and darshan access  enabling you to focus entirely on the sacred Magh Kumbh experience.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "Trust-First Service Framework",
    desc: "Proven track record with verified travellers. Transparent processes and zero-compromise safety across the Magh Kumbh Mela ecosystem.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "Senior & Family-Ready Pilgrimage",
    desc: "Wheelchair assistance, guided navigation, and structured support  optimized for families and senior devotees at Magh Kumbh 2026.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-amber-500" />,
    title: "Always-On Pilgrim Support",
    desc: "Dedicated assistance before, during, and after your Magh Kumbh journey  proactive, reliable, and deeply service-oriented.",
  },
];


export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm tracking-wide uppercase text-amber-600 font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold mt-2">
         Trusted for Magh Kumbh 2026 Pilgrimages
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            We deliver curated Magh Kumbh 2026 journeys with integrity, operational discipline, 
    and cultural authenticity  ensuring a spiritually enriching, premium pilgrimage experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xs shadow-amber-500 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

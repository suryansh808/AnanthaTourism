import { ShieldCheck, Users, Headphones, Plane, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Curated & Authentic Pilgrimage Experiences",
    desc: "Spiritually aligned itineraries that balance devotion, culture, and comfort — never transactional, always meaningful.",
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "Pandit-Led Ritual & Kumbh Assistance",
    desc: "Structured, priest-guided rituals ensuring your Sankalpa and Snan are performed with purity and precision.",
  },
  {
    icon: <Plane className="w-8 h-8 text-amber-500" />,
    title: "End-to-End Travel Orchestration",
    desc: "Hotels, transport, darshan, guidance, and support — we handle the logistics so you focus on the spiritual journey.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "Trust-First, Service-Led Approach",
    desc: "Thousands of verified travellers. Transparent processes. Zero compromise on safety and comfort.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "Senior & Family Friendly",
    desc: "Wheelchair support, guided assistance, and structured movement — optimized for all age groups.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-amber-500" />,
    title: "Always-On Support",
    desc: "Proactive, responsive, and responsible — we stay with you before, during, and after the journey.",
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
            A Spiritual Travel Partner You Can Trust
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            We operationalize devotion with discipline — delivering premium Kumbh and
            spiritual journeys with integrity, reliability, and cultural authenticity.
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

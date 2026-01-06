import { ShieldCheck, Users, Headphones, Plane, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Authentic Maha Magh Snan Pilgrimage Experiences",
    desc: "Carefully curated Maha Magh Snan 2026 itineraries that balance devotion, cultural depth, and comfort always meaningful, never transactional.",
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "Priest-Guided Snan & Sankalpa Rituals",
    desc: "Vedic priest-led Sankalpa and holy bath assistance at Triveni Sangam delivered with purity, sacred precision, and unwavering spiritual integrity in Prayagraj.",
  },
  {
    icon: <Plane className="w-8 h-8 text-amber-500" />,
    title: "Seamless, End-to-End Pilgrimage Management",
    desc: "We manage hotels, transport, guided movement, and darshan coordination enabling you to focus fully on the sacred Maha Magh Snan experience.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: "Trust-Led Operations & Risk Governance",
    desc: "A proven delivery track record with verified travellers including transparent processes, disciplined execution, and zero-compromise safety across Prayagraj.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "Senior-Friendly & Family-Ready Pilgrimage Design",
    desc: "Wheelchair support, guided navigation, and structured care purpose-built for families and senior devotees attending Maha Magh Snan 2026.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-amber-500" />,
    title: "Always-On Pilgrim Care & Concierge Support",
    desc: "Dedicated assistance before, during, and after your journey proactive, responsive, and deeply service-oriented throughout your Maha Magh Snan pilgrimage.",
  },
];


export default function WhyChooseUs() {
  return (
    <section
     className="py-16 px-2.5 bg-zinc-50">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-10">
           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <Sparkles size={16} className="text-[#3F2455]" />
            <span className="text-xs lg:text-sm font-semibold text-[#3F2455]">
              Why Choose Anantha Tourism?
            </span>
           </div>
          
          <h2 className="text-xl lg:text-2xl  font-bold mt-2">
           Trusted Partner for Maha Magh Snan 2026 Pilgrimages
          </h2>
          <p className="mt-3 text-gray-600 max-w-4xl mx-auto">
          We curate spiritually authentic <strong>Maha Magh Snan 2026</strong> journeys
    at <strong>Triveni Sangam, Prayagraj</strong> with devotion-aligned planning,
    priest-guided ritual support, senior-friendly assistance, and disciplined
    on-ground coordination ensuring your pilgrimage is seamless, sacred, and
    deeply meaningful
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

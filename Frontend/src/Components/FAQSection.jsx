import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    {
      q: "What is Maha Magh Snan 2026 in Prayagraj?",
      a: "Maha Magh Snan 2026 is a sacred pilgrimage period in Prayagraj when devotees take a holy dip at Triveni Sangam the confluence of the Ganga, Yamuna and the mystical Saraswati. The snan is believed to purify karma, cleanse the soul, and help seekers receive divine blessings."
    },
    {
      q: "Where does the holy bath take place?",
      a: "The Maha Magh Snan holy bath takes place at Triveni Sangam in Prayagraj the most revered point where three sacred rivers meet. This confluence is considered a highly powerful spiritual energy centre in the Sanatana tradition."
    },
    {
      q: "What are the important Maha Magh Snan bathing dates in 2026?",
      a: "Key bathing dates include Paush Purnima (3 Jan 2026), Makar Sankranti (14 Jan 2026), Mauni Amavasya (18 Jan 2026), Basant Panchami (23 Jan 2026), Maghi Purnima (1 Feb 2026) and Maha Shivratri (15 Feb 2026). Mauni Amavasya is considered the most auspicious snan day."
    },
    {
      q: "Is priest-guided Sankalpa Puja available during Maha Magh Snan?",
      a: "Yes. Devotees can offer Sankalpa a sacred expression of intention with the support of Vedic priests. Personalized name and Gotra Sankalpa chanting is commonly performed alongside the holy bath."
    },
    {
      q: "Is Maha Magh Snan suitable for senior citizens and families?",
      a: "Yes. With guided support, wheelchair assistance, paced movement, and coordinated logistics, Maha Magh Snan can be experienced safely and comfortably by senior devotees and families."
    },
    {
      q: "Do I need to register to perform Maha Magh Snan?",
      a: "While the snan itself is open to devotees, structured travel planning, priest-guided rituals, transportation, and accommodation arrangements are recommended to ensure a smooth and spiritually focused experience."
    },
    {
      q: "What is the spiritual benefit of bathing at Triveni Sangam?",
      a: "Scriptures state that bathing at Triveni Sangam during Maha Magh removes karmic impurities, supports inner transformation, and aligns the devotee with divine grace. It is an act of surrender, faith, and purification."
    },
    {
      q: "How early should I plan my Maha Magh Snan 2026 pilgrimage?",
      a: "It is advisable to plan several months in advance especially for key bathing dates as accommodation, priest services, and logistics get booked quickly due to high pilgrim turnout."
    }
  ];

  return (
    <section id="faqs" className="py-16 px-2.5 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <HelpCircle className="w-5 h-5 text-[#3F2455]" />
            <span className="text-sm font-semibold text-[#3F2455]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold">
            Maha Magh Snan 2026 Prayagraj
          </h2>

          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Everything you need to know about the sacred <strong>Maha Magh Snan 2026 </strong>
            pilgrimage at <strong>Triveni Sangam, Prayagraj</strong> devotion, logistics,
            rituals, safety, and spiritual guidance.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 bg-white rounded-xl shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="w-full cursor-pointer flex items-center justify-between gap-2 px-5 py-4 text-left"
              >
                <span className="font-semibold text-gray-900">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

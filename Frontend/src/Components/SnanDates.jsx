import { Sparkles } from "lucide-react";


// const dates = [
//   ["3 Jan 2026", "Paush Purnima", "Beginning of Maha Magh Snan & Kalpavas"],
//   ["14 Jan 2026", "Makar Sankranti", "Highly sacred Magh Snan day"],
//   ["18 Jan 2026", "Mauni Amavasya", "Most auspicious Maha Magh Snan"],
//   ["23 Jan 2026", "Basant Panchami", "Spiritual renewal & devotion"],
//   ["1 Feb 2026", "Maghi Purnima", "Major Kalpavas bathing day"],
//   ["15 Feb 2026", "Maha Shivratri", "Final sacred holy bath"],
// ];

const dates = [
  ["3 Jan 2026", "Paush Purnima", "Start of Maha Magh Snan • Devotees begin Kalpavas discipline and sacred river bathing at Triveni Sangam."],
  ["14 Jan 2026", "Makar Sankranti", "Extremely holy bathing day • Considered highly meritorious for spiritual cleansing and blessings."],
  ["18 Jan 2026", "Mauni Amavasya", "The most auspicious Maha Magh Snan day • A powerful time for vows, silence, prayer and liberation-seeking devotion."],
  ["23 Jan 2026", "Basant Panchami", "Symbolic of new beginnings • Devotees seek wisdom, purity and inner renewal through the sacred holy bath."],
  ["1 Feb 2026", "Maghi Purnima", "A principal Kalpavas bathing day • Marks deep spiritual merit and fulfilment of devotional observances."],
  ["15 Feb 2026", "Maha Shivratri", "Final sacred bathing opportunity • Pilgrims honour Lord Shiva and conclude the Maha Magh Snan period."],
];


export default function SnanDates() {
  return (
    <div className="py-16 px-2.5 bg-zinc-50">
         <section className="max-w-6xl mx-auto ">
        <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <Sparkles size={16} className="text-[#3F2455]" />
            <span className="text-xs lg:text-sm font-semibold text-[#3F2455]">
               Maha Magh Snan 2026 — Sacred Bathing Dates
            </span>
           </div>
      <h2 className="lg:text-2xl text-[18px] font-bold mb-4 text-center">
       Auspicious Maha Magh Snan Bathing Dates — Prayagraj 2026
      </h2>

      <p className="mb-4 text-gray-700  text-center ">
       Devotees from across the world travel to Prayagraj to perform the holy bath at 
  <strong>Triveni Sangam</strong> during the sacred 
  <strong> Maha Magh Snan 2026 period</strong>. These bathing dates are considered 
  spiritually powerful, helping pilgrims seek divine grace, inner purification, 
  and blessings for themselves and their families.
      </p>
        </div>

      <div className="overflow-x-auto text-center">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 ">
            <tr className="">
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Occasion</th>
              <th className="p-3 text-center">Spiritual Significance</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((r, i) => (
              <tr key={i} className="border-t border-gray-300">
                {r.map((c, j) => (
                  <td key={j} className="p-3">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
}

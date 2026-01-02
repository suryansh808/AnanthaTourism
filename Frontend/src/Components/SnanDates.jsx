import { Sparkles } from "lucide-react";


const dates = [
  ["3 Jan 2026", "Paush Purnima", "Beginning of Maha Magh Snan & Kalpavas"],
  ["14 Jan 2026", "Makar Sankranti", "Highly sacred Magh Snan day"],
  ["18 Jan 2026", "Mauni Amavasya", "Most auspicious Maha Magh Snan"],
  ["23 Jan 2026", "Basant Panchami", "Spiritual renewal & devotion"],
  ["1 Feb 2026", "Maghi Purnima", "Major Kalpavas bathing day"],
  ["15 Feb 2026", "Maha Shivratri", "Final sacred holy bath"],
];

export default function SnanDates() {
  return (
    <div className="py-16 px-2.5">
         <section className="max-w-6xl mx-auto ">
        <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <Sparkles size={16} className="text-[#3F2455]" />
            <span className="text-xs lg:text-sm font-semibold text-[#3F2455]">
              Key Maha Magh Snan Dates
            </span>
           </div>
      <h2 className="lg:text-2xl text-[18px] font-bold mb-4 text-center">
        Key Bathing Dates for Maha Magh Snan 2026 in Prayagraj
      </h2>

      <p className="mb-4 text-gray-700  text-center ">
        Pilgrims plan their visit to Prayagraj around these highly auspicious 
        <strong> Maha Magh Snan dates</strong>, when bathing at Triveni Sangam 
        is believed to bless devotees with spiritual purification and divine grace.
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

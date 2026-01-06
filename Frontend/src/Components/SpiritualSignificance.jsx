import { Sparkles } from "lucide-react";
import  { useState } from "react";

export default function SpiritualSignificance() {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <div className="py-16 px-2.5 bg-linear-to-b from-white via-gray-50 to-white">
      <section className="max-w-6xl mx-auto border p-6 border-gray-300 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span></span>
             <div className=" inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
            <Sparkles size={16} className="text-[#3F2455]" />
            <span className="text-xs lg:text-sm font-semibold text-[#3F2455]">
              Spiritual Significance
            </span>
             </div>
              <button
            onClick={() => setIsHindi(!isHindi)}
            className="border px-3 py-1 cursor-pointer rounded text-amber-600 text-sm hover:bg-gray-100 transition"
            aria-label="Translate to Hindi"
            title="Translate to Hindi"
          >
            i
          </button>
          </div>
        <div className="flex items-center gap-6 justify-between mb-3">
          <h2 className="text-[18px] lg:text-2xl font-bold">
            Spiritual Significance of Maha Magh Snan at Triveni Sangam
          </h2>

         
        </div>

        {!isHindi ? (
         <p className="text-gray-700 max-w-4xl">
  During the <strong>Maha Magh Snan 2026 in Prayagraj</strong>, millions of
  devotees believe that taking a holy dip at the sacred <strong>Triveni
  Sangam</strong> the confluence of the Ganga, Yamuna, and the mystical
  Saraswati helps dissolve past karmic impressions, purify the inner being,
  and awaken higher spiritual consciousness. This sacred act of surrender is
  seen as a pathway to divine grace, inner renewal, and deep devotional
  alignment.
</p>

        ) : (
          <p className="text-gray-700 max-w-4xl">
          <strong>प्रयागराज में महा माघ स्नान 2026</strong> के दौरान श्रद्धालु मानते हैं
  कि पवित्र <strong>त्रिवेणी संगम</strong> जहाँ गंगा, यमुना और अदृश्य
  सरस्वती का संगम होता है में स्नान करने से प्राचीन कर्मों के बंधन शुद्ध
  होते हैं, आत्मा पवित्र होती है और आध्यात्मिक चेतना जागृत होती है। यह स्नान
  केवल एक परंपरा नहीं बल्कि ईश्वर के प्रति पूर्ण समर्पण और दिव्य अनुग्रह की
  प्राप्ति का एक गहरा आध्यात्मिक अनुभव माना जाता है।
          </p>
        )}
      </section>
    </div>
  );
}

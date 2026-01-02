import { Sparkles } from "lucide-react";
import  { useState } from "react";

export default function SpiritualSignificance() {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <div className="py-16 px-2.5">
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
            " During the <strong>Maha Magh Snan 2026 in Prayagraj</strong>,
            devotees believe that bathing at the sacred Triveni Sangam washes
            away karma, purifies the soul, and strengthens spiritual
            consciousness. The confluence of the Ganga, Yamuna and Saraswati is
            revered as a powerful spiritual energy centre making the holy bath a
            deeply transformative act of faith. "
          </p>
        ) : (
          <p className="text-gray-700 max-w-4xl">
            " <strong>प्रयागराज में महा माघ स्नान 2026</strong> के दौरान भक्तों
            का विश्वास है कि पवित्र त्रिवेणी संगम में स्नान करने से पाप और कर्म
            धुल जाते हैं, आत्मा शुद्ध होती है और आध्यात्मिक चेतना मजबूत होती है।
            गंगा, यमुना और सरस्वती का संगम एक शक्तिशाली आध्यात्मिक ऊर्जा केंद्र
            माना जाता है जो इस पवित्र स्नान को आस्था का एक गहरा परिवर्तनकारी
            अनुभव बनाता है। "
          </p>
        )}
      </section>
    </div>
  );
}

import { FileDown, Calendar, Info } from 'lucide-react';
const MaghMelaSchedule = () => {

  const bathingDates = [
  { date: "3 Jan 2026", hindiDate: "३ जनवरी २०२६", occasion: "Paush Purnima", hindiOccasion: "पौष पूर्णिमा", significance: "Beginning of Maha Magh Snan and Kalpavas observances at the sacred Triveni Sangam." },
  { date: "14 Jan 2026", hindiDate: "१४ जनवरी २०२६", occasion: "Makar Sankranti", hindiOccasion: "मकर संक्रांति", significance: "A highly auspicious Maha Magh Snan day believed to grant immense spiritual merit." },
  { date: "18 Jan 2026", hindiDate: "१८ जनवरी २०२६", occasion: "Mauni Amavasya", hindiOccasion: "मौनी अमावस्या", significance: "The most sacred Maha Magh Snan day ideal for vows, silence, prayer, and inner purification." },
  { date: "23 Jan 2026", hindiDate: "२३ जनवरी २०२६", occasion: "Basant Panchami", hindiOccasion: "बसंत पंचमी", significance: "Signifies new beginnings and spiritual awakening through the holy bath ritual." },
  { date: "1 Feb 2026", hindiDate: "१ फरवरी २०२६", occasion: "Maghi Purnima", hindiOccasion: "माघी पूर्णिमा", significance: "One of the principal Kalpavas bathing days marking fulfilment of devotional discipline." },
  { date: "15 Feb 2026", hindiDate: "१५ फरवरी २०२६", occasion: "Maha Shivratri", hindiOccasion: "महाशिवरात्रि", significance: "Final sacred bathing opportunity of the Maha Magh Snan period devotees honour Lord Shiva and seek divine grace." },
];


const handleDownload = async () => {
  const { default: jsPDF } = await import("jspdf");
  const autoTable = (await import("jspdf-autotable")).default;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.setFontSize(14);
  doc.setTextColor(0, 51, 102);
  doc.text(
    "MAHA MAGH SNAN ADMINISTRATION, PRAYAGRAJ",
    pageWidth / 2,
    35,
    { align: "center" }
  );

  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(
    "Government of Uttar Pradesh | Official Bathing Schedule 2026",
    pageWidth / 2,
    42,
    { align: "center" }
  );

  doc.setDrawColor(255, 153, 51);
  doc.setLineWidth(1);
  doc.line(15, 48, pageWidth - 15, 48);

  const tableColumn = ["Date", "Occasion", "Spiritual Significance"];
  const tableRows = bathingDates.map(item => [
    item.date,
    item.occasion,
    item.significance,
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 55,
    theme: "grid",
    headStyles: {
      fillColor: [0, 51, 102],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    styles: { fontSize: 9, cellPadding: 5 },
  });

  const finalY = doc.lastAutoTable.finalY || 55;

  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(
    `Reference No: UP-MAGH-MELA-2026/SNAN-SCH/01`,
    15,
    finalY + 10
  );
  doc.text(
    `Generated on: ${new Date().toLocaleDateString()}`,
    15,
    finalY + 15
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text("Anantha Tourism", pageWidth / 2, pageHeight - 15, {
    align: "center",
  });

  doc.save("Maha_Magh_Snan_2026_Schedule.pdf");
};


  return (
     <div className='py-16 px-2.5 bg-linear-to-b from-white via-gray-50 to-white'>
             <div className="max-w-7xl mx-auto bg-white border border-gray-300 shadow-sm font-sans text-slate-800">
      
      {/* Top Govt Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b-4 border-orange-500 bg-slate-50">
        <div className="flex items-center space-x-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem of India" 
            className="h-16 w-auto"
          />
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight text-blue-900 leading-tight">
                      Maha Magh Snan Administration, Prayagraj
            </h2>
            <p className="text-sm font-semibold text-gray-600 uppercase">
                    Government of Uttar Pradesh | उत्तर प्रदेश सरकार
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right hidden md:block">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-sm border border-blue-200">
                Official Notification 2026
            </span>
        </div>
      </div>

      {/* Blue Banner Title */}
      <div className="bg-[#003366] text-white p-3 text-center">
        <h2 className="text-lg font-bold tracking-wide uppercase">
           Official Bathing Dates — Maha Magh Snan 2026 Prayagraj
        </h2>
        <p className="text-xs text-blue-100 italic"> महा माघ स्नान २०२६ — प्रमुख स्नान तिथियां</p>
      </div>

      {/* Information Sub-text */}
      <div className="p-4 bg-yellow-50 border-b border-gray-200 flex items-start space-x-2">
        <Info className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
        <p className="text-sm text-gray-700 leading-relaxed">
         Pilgrims across India and the world plan their visit to Prayagraj around
  these highly sacred <strong>Maha Magh Snan bathing dates</strong>.
  Taking a holy dip at the <strong>Triveni Sangam</strong> during these
  periods is believed to purify the soul, remove past karmic impressions,
  and invoke divine blessings for one’s family and ancestors.
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300 text-gray-700 uppercase text-xs tracking-wider">
              <th className="p-4 border-r border-gray-300 w-1/4">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2"/> Date / तिथि</div>
              </th>
              <th className="p-4 border-r border-gray-300 w-1/4">Occasion / पर्व</th>
              <th className="p-4">Spiritual Significance / धार्मिक महत्व</th>
            </tr>
          </thead>
          <tbody>
            {bathingDates.map((item, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="p-4 border-r border-gray-300">
                  <div className="font-bold text-blue-900">{item.date}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.hindiDate}</div>
                </td>
                <td className="p-4 border-r border-gray-300">
                  <div className="font-bold text-gray-800 uppercase text-sm">{item.occasion}</div>
                  <div className="text-xs text-orange-700 font-semibold">{item.hindiOccasion}</div>
                </td>
                <td className="p-4 text-sm text-gray-700 leading-snug">
                  {item.significance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Actions */}
      <div className="bg-slate-100 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 sm:mb-0">
      Last Updated: 01 Jan 2026  |  Reference Code: UP-MAGH-2026/SNAN-SCHEDULE/01
        </p>
        <button onClick={handleDownload} className="flex items-center cursor-pointer space-x-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 text-xs font-bold uppercase transition-all shadow-sm">
          <FileDown className="w-4 h-4" />
          <span>Download Maha Magh Snan 2026 Schedule (PDF 240KB)</span>
        </button>
      </div>
    </div>
     </div>
  );
};

export default MaghMelaSchedule;
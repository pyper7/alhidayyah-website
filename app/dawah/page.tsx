import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { lecturePrograms } from "@/data/lectures";

const islamicQuotes = [
  {
    type: "quran",
    arabic: "وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ",
    english: "And who is better in speech than one who invites to Allah and does righteousness and says, 'Indeed, I am of the Muslims.'",
    source: "Quran 41:33"
  },
  {
    type: "hadith",
    arabic: "بَلِّغُوا عَنِّي وَلَوْ آيَةً",
    english: "Convey from me, even if it is a single verse.",
    source: "Sahih al-Bukhari"
  }
];

export default function DawahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Spreading Knowledge"
        title="Dawah"
        description="Calling to Islam Through Knowledge and Guidance"
        imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                Our Schedule
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Dawah Program <span className="gradient-text">Timetable</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us in spreading the message of Islam through our regular programs and special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {lecturePrograms.map((program) => (
              <div
                key={program.id}
                className="bg-gradient-to-br from-white to-primary/5 rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-primary font-semibold mb-3 text-sm">
                    {program.schedule}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <Link
                    href="/dawah/lectures"
                    className="w-full py-2 px-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Previous Lectures
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dawah/lectures"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Browse All Lectures & Videos →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary/10 via-primary-light/8 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                Words of Wisdom
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Guidance from <span className="gradient-text">Quran & Hadith</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {islamicQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-primary/10 shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    quote.type === "quran" 
                      ? "bg-gradient-to-br from-primary to-primary-light" 
                      : "bg-gradient-to-br from-primary-light to-primary"
                  }`}>
                    {quote.type === "quran" ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {quote.type === "quran" ? "Quran" : "Hadith"}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-right font-arabic text-2xl leading-relaxed text-gray-900 mb-3" dir="rtl">
                    {quote.arabic}
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{quote.english}"
                  </p>
                </div>
                <p className="text-sm text-primary font-semibold">
                  {quote.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

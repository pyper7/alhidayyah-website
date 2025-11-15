"use client";

import Button from "./Button";
import { useState } from "react";

interface Campaign {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  quranVerse: {
    arabic: string;
    text: string;
    source: string;
  };
  hadith: {
    arabic: string;
    text: string;
    source: string;
  };
  isActive: boolean;
}

interface DonationCampaignProps {
  campaign?: Campaign;
}

export default function DonationCampaign({ campaign }: DonationCampaignProps) {
  const defaultCampaign: Campaign = {
    id: "widow-support-2024",
    title: "Support Widows in Our Community",
    description: "Help us provide essential support, education, and care for widows and their families. Your contribution makes a lasting difference in their lives.",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    quranVerse: {
      arabic: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا * إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا",
      text: "And they give food in spite of love for it to the needy, the orphan, and the captive, [saying], 'We feed you only for the countenance of Allah. We wish not from you reward or gratitude.'",
      source: "Quran 76:8-9"
    },
    hadith: {
      arabic: "السَّاعِي عَلَى الأَرْمَلَةِ وَالمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ، أَوْ كَالَّذِي يَصُومُ النَّهَارَ وَيَقُومُ اللَّيْلَ",
      text: "The one who looks after a widow or a poor person is like a Mujahid (warrior) who fights for Allah's cause, or like him who performs prayers all the night and fasts all the day.",
      source: "Sahih al-Bukhari"
    },
    isActive: true
  };

  const activeCampaign = campaign || defaultCampaign;

  if (!activeCampaign.isActive) {
    return null;
  }

  const progressPercentage = Math.min((activeCampaign.raisedAmount / activeCampaign.targetAmount) * 100, 100);
  const remainingAmount = activeCampaign.targetAmount - activeCampaign.raisedAmount;
  const formattedTarget = (activeCampaign.targetAmount / 1000000).toFixed(1);
  const formattedRaised = (activeCampaign.raisedAmount / 1000000).toFixed(1);
  const formattedRemaining = (remainingAmount / 1000000).toFixed(1);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-white to-primary-light/8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border border-primary/20 shadow-sm backdrop-blur-sm">
              Ongoing Campaign
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mb-4 fade-in-delay-1">
            <span className="gradient-text">{activeCampaign.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-delay-2">
            {activeCampaign.description}
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/10 overflow-hidden fade-in-delay-2">
          <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/5 via-primary-light/3 to-primary/5">
            <div className="mb-6">
              <div className="relative w-full h-4 sm:h-5 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-medium">Target</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    ₦{formattedTarget}M
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-medium">Raised</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary">
                    ₦{formattedRaised}M
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-medium">Remaining</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-light">
                    ₦{formattedRemaining}M
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  {progressPercentage.toFixed(1)}%
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">of goal achieved</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-xl p-5 sm:p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-loose mb-3 sm:mb-4 text-right font-arabic" dir="rtl">
                    {activeCampaign.quranVerse.arabic}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 italic leading-relaxed mb-2 font-serif">
                    "{activeCampaign.quranVerse.text}"
                  </p>
                  <p className="text-xs sm:text-sm text-primary font-semibold">
                    — {activeCampaign.quranVerse.source}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-light/5 to-transparent rounded-xl p-5 sm:p-6 border-l-4 border-primary-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-loose mb-3 sm:mb-4 text-right font-arabic" dir="rtl">
                    {activeCampaign.hadith.arabic}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 italic leading-relaxed mb-2 font-serif">
                    "{activeCampaign.hadith.text}"
                  </p>
                  <p className="text-xs sm:text-sm text-primary-light font-semibold">
                    — {activeCampaign.hadith.source}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button 
                href="/donate" 
                variant="primary" 
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                Donate Now →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


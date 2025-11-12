"use client";

import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [content, setContent] = useState({
    hero: {
      title: "Serving Communities Through Islamic Values, Education, and Compassion",
      subtitle: "AL-Hidayyah Islamic Foundation",
      description: "Guided by Islamic principles, we dedicate ourselves to spreading authentic knowledge, nurturing orphaned children, and providing quality education. Together, we build a brighter future rooted in faith and compassion.",
      quote: "And whoever saves one [life] - it is as if he had saved mankind entirely",
      quoteSource: "Quran 5:32"
    }
  });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {});
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-primary-light/5 rounded-full blur-3xl"></div>
      </div>

      {/* Left Side - Content Section */}
      <div className="relative w-full lg:w-1/2 flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-0 min-h-[70vh] lg:h-screen z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 w-full space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Badge */}
          <div className="inline-block fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-primary/20 shadow-sm backdrop-blur-sm">
              {content.hero.subtitle}
            </span>
          </div>
          
          {/* Main Headline */}
          <div className="fade-in-delay-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-[1.1] tracking-tight">
              <span className="block text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Serving Communities Through
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary mt-2">
                Islamic Values, Education, and Compassion
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl fade-in-delay-2">
            {content.hero.description}
          </p>

          {/* Quranic Quote - Compact */}
          <div className="flex items-start gap-3 sm:gap-4 py-4 sm:py-5 pl-4 sm:pl-5 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg fade-in-delay-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0 mt-0.5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <div className="flex-1 min-w-0">
              {/* Arabic Text */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-loose mb-3 sm:mb-4 text-right font-arabic font-bold" dir="rtl" style={{ fontFamily: 'var(--font-arabic), Amiri, serif' }}>
                وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
              </p>
              {/* English Translation */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 italic leading-relaxed mb-2 font-serif">
                "{content.hero.quote}"
              </p>
              <p className="text-xs sm:text-sm lg:text-sm text-primary font-semibold">
                — {content.hero.quoteSource}
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 fade-in-delay-3">
            <Button href="/donate" variant="primary" className="text-sm sm:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Donate Now
            </Button>
            <Button href="/get-involved" variant="outline" className="text-sm sm:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 font-semibold border-2 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] sm:min-h-[60vh] lg:h-screen bg-gradient-to-br from-primary/10 to-primary-light/5 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #026f38 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        {/* Image Container - Responsive Size */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl h-full flex items-center justify-center py-8 sm:py-12 lg:py-0">
          {/* Outer Glow Ring */}
          <div className="absolute -inset-4 sm:-inset-6 lg:-inset-12 bg-primary/10 rounded-3xl blur-3xl"></div>
          
          {/* Main Image Frame */}
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary-light/15 to-primary/20 shadow-2xl border-2 sm:border-4 border-white">
            {!imageError ? (
              <Image
                src="/images/hero-image.png"
                alt="AL-Hidayyah Islamic Foundation - Community flourishing with knowledge and compassion"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary-light/20 to-primary/30">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 lg:w-40 lg:h-40 mx-auto text-primary/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-primary/60 text-sm font-medium">Add hero-image.png to /public/images/</p>
                </div>
              </div>
            )}
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-primary/10 rounded-2xl rotate-12 blur-sm"></div>
          <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-16 h-16 lg:w-24 lg:h-24 bg-primary-light/10 rounded-2xl -rotate-12 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}

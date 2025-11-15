import PageBanner from "@/components/PageBanner";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Who We Are"
        title="About Us"
        description="Dedicated to serving humanity through education, compassion, and Islamic values"
        imageUrl="/images/mosque-interior.png"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="fade-in">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Why We Were Founded
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  AL-Hidayyah Islamic Foundation was established with a clear purpose: to answer the call to Islam through 
                  authentic Dawah and to fulfill our duty of charity by supporting orphans and widows. Our mission is rooted 
                  in the teachings of the Quran and Sunnah, calling people to the truth of Islam while providing compassionate 
                  care to those most in need.
                </p>
                <p>
                  Our foundation recognizes the critical importance of both call and charity in Islam. Through our Dawah programs, 
                  we invite people to the path of Allah, sharing the authentic teachings of the Quran and Sunnah. Simultaneously, 
                  we fulfill our charitable obligations by providing essential support, education, and care to orphaned children 
                  and widows who have lost their means of support.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to authenticity and compassion. Every call we make is based 
                  solely on the Quran and Sunnah, free from innovation. Every act of charity we perform follows the example of 
                  the Prophet (peace be upon him), ensuring that orphans and widows receive not just material support, but also 
                  the love, dignity, and Islamic guidance they deserve.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl fade-in-delay-1">
              <Image
                src="/images/hero-image.png"
                alt="Our Foundation Story"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-primary-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Team
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by faith, driven by compassion, and committed to excellence
            </p>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8 fade-in">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-2">
                Founder
              </h3>
            </div>
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10 card-hover fade-in">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 text-center mb-2">
                  Founder
                </h3>
                <p className="text-primary font-semibold text-center mb-4">Islamic Scholar & Educator</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  With over 20 years of experience in Islamic education and community service, our founder brings 
                  deep knowledge of authentic Islamic teachings and a passion for transforming lives through education.
                </p>
              </div>
            </div>

            <div className="text-center mb-8 fade-in-delay-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-2">
                Team Members
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-light/10 card-hover fade-in-delay-1">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-light/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 text-center mb-2">
                  Team Member
                </h3>
                <p className="text-primary-light font-semibold text-center mb-4">Community Development Specialist</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  A dedicated advocate for orphan care and community empowerment, bringing expertise in social work 
                  and program development to ensure our initiatives create lasting impact.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10 card-hover fade-in-delay-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 text-center mb-2">
                  Team Member
                </h3>
                <p className="text-primary font-semibold text-center mb-4">Academic Excellence Leader</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  Leading our educational initiatives with a vision to combine academic excellence with Islamic values, 
                  ensuring students receive world-class education rooted in faith.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-light/10 card-hover fade-in-delay-3">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-light/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 text-center mb-2">
                  Team Member
                </h3>
                <p className="text-primary-light font-semibold text-center mb-4">Program Coordinator</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  Coordinating our Dawah and charity programs with dedication and efficiency, ensuring our initiatives 
                  reach those in need and spread authentic Islamic knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Evolution of Our Foundation
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a beacon of hope and education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row gap-8 items-center fade-in">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                      2010 - Foundation
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">The Beginning</h3>
                    <p className="text-gray-700 leading-relaxed">
                      AL-Hidayyah Islamic Foundation was established with a simple yet powerful vision: to serve Allah 
                      by serving His creation. Starting with a small orphanage and a vision for authentic Islamic education.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/mosque-interior.png"
                      alt="Foundation - The Beginning"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse gap-8 items-center fade-in-delay-1">
                <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10">
                    <div className="inline-block px-3 py-1 bg-primary-light/10 text-primary-light rounded-full text-xs font-semibold mb-4">
                      2015 - Expansion
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Growing Our Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Expanded our programs to include comprehensive Dawah initiatives, reaching communities far and wide 
                      with authentic Islamic knowledge. Established partnerships with local communities and scholars.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-light rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                <div className="w-full md:w-1/2 md:pr-12">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/hero-image.png"
                      alt="Expansion - Growing Our Impact"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-light/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-8 items-center fade-in-delay-2">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                      2020 - Education Excellence
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Riyad Saliheen School</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Launched Riyad Saliheen International School, combining academic excellence with authentic Islamic 
                      education. This marked a significant milestone in our mission to provide holistic education.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/hero-image.png"
                      alt="Education Excellence - Riyad Saliheen School"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse gap-8 items-center fade-in-delay-3">
                <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 p-8 rounded-2xl shadow-xl border-2 border-primary/20">
                    <div className="inline-block px-3 py-1 bg-white text-primary rounded-full text-xs font-semibold mb-4">
                      Today - Future Vision
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Where We Are Today</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Today, AL-Hidayyah serves hundreds of children, provides education to thousands of students, 
                      and reaches countless communities through our Dawah programs. We continue to grow, innovate, 
                      and expand our impact while staying true to our core values of authenticity, compassion, and excellence.
          </p>
        </div>
      </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-light rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                <div className="w-full md:w-1/2 md:pr-12">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/mosque-interior.png"
                      alt="Today - Future Vision"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-light/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary/10 via-white to-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                Our Purpose
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles and the future we're building together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-primary/10 card-hover relative overflow-hidden fade-in">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be a leading Islamic organization that transforms lives through authentic Islamic education, 
                  compassionate orphan care, and community empowerment.
                </p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-primary-light/10 card-hover relative overflow-hidden fade-in-delay-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-light/10 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  To serve Allah and humanity by:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Spreading authentic Islamic knowledge through comprehensive Dawah programs</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Providing loving care, education, and support to orphaned children</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Delivering quality Islamic education that combines academic excellence with faith</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Building strong, compassionate communities based on Islamic values</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Empowering individuals to become positive contributors to society</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">Following the Sunnah of the Prophet (peace be upon him) in all our endeavors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [content, setContent] = useState({
    about: {
      title: "About AL-Hidayyah",
      subtitle: "Serving Humanity, Guided by Faith",
      description: "AL-Hidayyah Islamic Foundation was established with a clear vision: to serve Allah by serving His creation.",
      vision: {
        title: "Our Vision",
        content: "To be a leading Islamic organization that transforms lives through authentic Islamic education, compassionate orphan care, and community empowerment."
      },
      mission: {
        title: "Our Mission",
        content: "To serve Allah and humanity by:",
        points: [
          "Spreading authentic Islamic knowledge through comprehensive Dawah programs",
          "Providing loving care, education, and support to orphaned children",
          "Delivering quality Islamic education that combines academic excellence with faith",
          "Building strong, compassionate communities based on Islamic values",
          "Empowering individuals to become positive contributors to society",
          "Following the Sunnah of the Prophet (peace be upon him) in all our endeavors"
        ]
      },
      values: {
        title: "Our Core Values",
        items: [
          {
            title: "Authenticity",
            description: "We base all our teachings and practices on authentic Islamic sources"
          },
          {
            title: "Compassion",
            description: "We serve with mercy and kindness, following the example of the Prophet (PBUH)"
          },
          {
            title: "Excellence",
            description: "We strive for the highest standards in all our programs and services"
          },
          {
            title: "Integrity",
            description: "We maintain transparency and honesty in all our dealings"
          },
          {
            title: "Community",
            description: "We believe in the power of unity and collective action"
          }
        ]
      }
    }
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {});
  }, []);
  
  return (
    <section className="section-padding bg-gradient-to-br from-primary/8 via-primary-light/5 to-white relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        {/* Layered Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/12 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, #026f38 1.5px, transparent 0)`,
          backgroundSize: '45px 45px'
        }}></div>
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #026f38 10px, #026f38 11px)`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20 shadow-sm backdrop-blur-sm">
              Who We Are
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-4 fade-in-delay-1">
            {content.about.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading gradient-text mb-6 fade-in-delay-1">
            {content.about.subtitle}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed fade-in-delay-2">
            {content.about.description}
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full shadow-sm fade-in-delay-2"></div>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
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
                <h4 className="text-3xl font-heading font-bold text-text">
                  {content.about.vision.title}
                </h4>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.about.vision.content}
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
                <h4 className="text-3xl font-heading font-bold text-text">
                  {content.about.mission.title}
                </h4>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                {content.about.mission.content}
              </p>
              <ul className="space-y-3">
                {content.about.mission.points.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600 group-hover:text-text transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-br from-white/90 via-primary/5 to-primary-light/5 backdrop-blur-sm rounded-2xl p-12 border border-primary/20 shadow-xl relative overflow-hidden fade-in-delay-2">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/5 rounded-tr-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
              {content.about.values.title}
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {content.about.values.items.map((value, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:scale-105 text-center group card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="font-heading font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

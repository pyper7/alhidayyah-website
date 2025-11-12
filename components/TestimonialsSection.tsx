"use client";

import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [content, setContent] = useState({
    testimonials: [
      {
        name: "Amina Hassan",
        role: "Parent",
        content: "Riyad Saliheen School has transformed my children. They not only excel academically but have also developed strong Islamic character.",
        rating: 5
      },
      {
        name: "Dr. Muhammad Ali",
        role: "Community Leader",
        content: "The Dawah programs at AL-Hidayyah have been instrumental in strengthening our community's understanding of Islam.",
        rating: 5
      },
      {
        name: "Fatima Ibrahim",
        role: "Orphanage Beneficiary",
        content: "I lost my parents at a young age, but AL-Hidayyah became my family. They provided me with education, love, and support.",
        rating: 5
      }
    ]
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {});
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-primary-light/6 to-white relative overflow-hidden">
      {/* Creative Background Layers */}
      <div className="absolute inset-0">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-light/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-primary/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #026f38 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide">
              Voices of Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Stories of <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those whose lives have been touched by our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-xl card-hover relative overflow-hidden fade-in-delay-{index}"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/5 text-7xl font-serif group-hover:text-primary/10 transition-colors duration-500">"</div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex mb-5 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic relative">
                  <span className="absolute -left-2 text-primary/20 text-3xl font-serif">"</span>
                  <span className="relative pl-4">{testimonial.content}</span>
                </p>

                <div className="border-t border-gray-100/50 pt-6">
                  <p className="font-heading font-bold text-text mb-1 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


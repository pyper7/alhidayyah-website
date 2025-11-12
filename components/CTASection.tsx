"use client";

import Button from "./Button";
import { useEffect, useState } from "react";

export default function CTASection() {
  const [content, setContent] = useState({
    cta: {
      donate: {
        title: "Make a Difference Today",
        description: "Your support helps us continue our mission of serving humanity through education, orphan care, and Dawah.",
        buttonText: "Donate Now"
      },
      volunteer: {
        title: "Join Our Mission",
        description: "Become part of a community dedicated to making a positive difference.",
        buttonText: "Get Involved"
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
    <section id="donate" className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Large Animated Orbs */}
        <div className="absolute -top-40 -left-40 w-[1000px] h-[1000px] bg-primary-light/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/25 rounded-full blur-3xl"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(30deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent),
                           linear-gradient(60deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Donate Card - Left Side */}
          <div className="group relative">
            {/* Card Background with Glassmorphism */}
            <div className="relative bg-gradient-to-br from-white/25 via-white/20 to-white/15 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-white/30 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-primary/20 to-primary-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-light/40 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/30 to-transparent rounded-tr-full"></div>
              
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark"></div>
              
              <div className="relative z-10">
                {/* Icon with Enhanced Container */}
                <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-white/40 to-white/20 rounded-2xl border-2 border-white/40 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                  {content.cta.donate.title}
                </h3>
                
                <p className="text-white/95 mb-10 text-lg md:text-xl leading-relaxed">
                  {content.cta.donate.description} Every contribution, no matter how small, makes a lasting impact on the lives we serve.
                </p>
                
                <Button 
                  href="/donate" 
                  variant="accent" 
                  className="bg-white text-primary hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-10 py-5 font-bold"
                >
                  {content.cta.donate.buttonText} →
                </Button>
              </div>
            </div>
          </div>

          {/* Volunteer Card - Right Side */}
          <div className="group relative">
            {/* Card Background with Glassmorphism */}
            <div className="relative bg-gradient-to-br from-white/25 via-white/20 to-white/15 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-white/30 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-primary/20 to-primary-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-light/40 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-full"></div>
              
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark"></div>
              
              <div className="relative z-10">
                {/* Icon with Enhanced Container */}
                <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-white/40 to-white/20 rounded-2xl border-2 border-white/40 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                  {content.cta.volunteer.title}
                </h3>
                
                <p className="text-white/95 mb-10 text-lg md:text-xl leading-relaxed">
                  {content.cta.volunteer.description} Your time and skills can transform lives and strengthen our programs in meaningful ways.
                </p>
                
                <Button 
                  href="/get-involved" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-2xl bg-white/15 backdrop-blur-sm text-lg px-10 py-5 font-bold"
                >
                  {content.cta.volunteer.buttonText} →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/25">
            <p className="text-white/95 text-xl md:text-2xl italic leading-relaxed mb-3">
              "And whoever saves one [life] - it is as if he had saved mankind entirely"
            </p>
            <p className="text-white/80 text-lg font-semibold">
              — Quran 5:32
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [content, setContent] = useState({
    stats: {
      childrenSupported: "500+",
      childrenLabel: "Orphaned Children Supported",
      studentsEducated: "1,200+",
      studentsLabel: "Students Enrolled",
      communitiesReached: "50+",
      communitiesLabel: "Communities Served",
      yearsOfService: "15+",
      yearsLabel: "Years of Service"
    }
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {});
  }, []);

  const stats = [
    {
      number: content.stats.childrenSupported,
      label: content.stats.childrenLabel,
      icon: "👶",
      color: "from-primary to-primary-light"
    },
    {
      number: content.stats.studentsEducated,
      label: content.stats.studentsLabel,
      icon: "🎓",
      color: "from-primary-light to-primary"
    },
    {
      number: content.stats.communitiesReached,
      label: content.stats.communitiesLabel,
      icon: "🌍",
      color: "from-primary to-primary-dark"
    },
    {
      number: content.stats.yearsOfService,
      label: content.stats.yearsLabel,
      icon: "⭐",
      color: "from-primary-dark to-primary"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark via-primary to-primary-light/20 text-white relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-light/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2.5 bg-white/25 backdrop-blur-md text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/30 shadow-lg">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-white to-primary-light/80 bg-clip-text text-transparent">
            Transforming Lives, One Step at a Time
          </h2>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Through faith, dedication, and your support, we've made a lasting impact on thousands of lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/25 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white/20 hover:via-white/15 hover:to-white/10 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-primary/10 to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                {/* Icon with Enhanced Styling */}
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Number with Better Gradient */}
                <div className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent drop-shadow-lg`}>
                  {stat.number}
                </div>
                
                <p className="text-white/95 text-base md:text-lg font-semibold leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


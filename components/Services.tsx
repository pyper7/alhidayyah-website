"use client";

import Button from "./Button";
import { useEffect, useState } from "react";

export default function Services() {
  const [content, setContent] = useState({
    services: {
      dawah: { title: "Dawah", description: "Our Da'wah spreads Islam's true message through education, enlightenment, and moral guidance" },
      orphanage: { title: "Orphanage", description: "Providing orphans with love, shelter, education, healthcare, and Islamic values in a safe, nurturing environment" },
      school: { title: "School", description: "Riyad Saliheen School provides quality education, Islamic teachings, and moral values in nurturing environment" }
    }
  });

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {});
  }, []);
  
  const services = [
    {
      title: content.services.dawah.title,
      subtitle: (content.services.dawah as any).subtitle || "Spreading Knowledge",
      description: content.services.dawah.description,
      cta: "Discover",
      href: "/dawah",
      icon: "📖",
      color: "from-blue-500 to-blue-600",
      impact: (content.services.dawah as any).impact
    },
    {
      title: content.services.orphanage.title,
      subtitle: (content.services.orphanage as any).subtitle || "Caring for Children",
      description: content.services.orphanage.description,
      cta: "Donate",
      href: "/orphanage",
      icon: "🏠",
      color: "from-primary to-primary-light",
      impact: (content.services.orphanage as any).impact
    },
    {
      title: content.services.school.title,
      subtitle: (content.services.school as any).subtitle || "Quality Education",
      description: content.services.school.description,
      cta: "Learn More",
      href: "/rihad-saliheen-school",
      icon: "🎓",
      color: "from-purple-500 to-purple-600",
      impact: (content.services.school as any).impact
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-white to-primary-light/8 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-light/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #026f38 1px, transparent 1px),
                           linear-gradient(to bottom, #026f38 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-primary/10">
              What We Do
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through education, care, and spiritual guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-10 rounded-2xl border border-primary/10 shadow-lg card-hover overflow-hidden fade-in-delay-{index}"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} rounded-t-2xl`}></div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                  {service.icon}
                </div>
                
                <div className="mb-3">
                  <span className="text-sm text-primary font-semibold uppercase tracking-wide">
                    {service.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                {service.impact && (
                  <p className="text-sm text-primary font-semibold mb-6 italic">
                    {service.impact}
                  </p>
                )}
                
                <Button href={service.href} variant="outline" className="w-full">
                  {service.cta} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


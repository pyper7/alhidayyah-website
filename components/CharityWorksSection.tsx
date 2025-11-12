"use client";

import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

interface CharityWork {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function CharityWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<CharityWork | null>(null);

  // Charity works - one from each category for home page preview
  const charityWorks: CharityWork[] = [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
      title: "Orphanage Support Program",
      description: "Providing essential care and education to orphaned children",
      date: "2024",
      category: "Orphanage"
    },
    {
      id: 2,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      title: "Dawah Programs",
      description: "Spreading knowledge and Islamic values through educational programs",
      date: "2024",
      category: "Dawah"
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      title: "School Education Initiative",
      description: "Providing quality Islamic education to students",
      date: "2024",
      category: "School"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary/5 to-primary-light/8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-primary-light/8 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #026f38 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20 shadow-sm backdrop-blur-sm">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-4 fade-in-delay-1">
            Charity <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-delay-2">
            See how we're making a difference in communities through our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-10">
          {charityWorks.map((work, index) => (
            <div
              key={work.id}
              className="group relative bg-white rounded-2xl border border-primary/10 shadow-xl card-hover overflow-hidden cursor-pointer fade-in-delay-{index}"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedWork(work)}
            >
              {/* Media Container */}
              <div className="relative w-full h-[350px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-primary/10 to-primary-light/5">
                {work.type === "video" ? (
                  <>
                    {/* Video Thumbnail/Poster */}
                    <div className="absolute inset-0">
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={work.src}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-semibold uppercase">
                    {work.category}
                  </span>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="text-white">
                    <span className="text-sm font-semibold opacity-90 mb-2 block">{work.date}</span>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button href="/charity-works" variant="primary" className="text-base px-8 py-4">
            View More Works →
          </Button>
        </div>
      </div>

      {/* Modal for viewing full image/video */}
      {selectedWork && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary-light transition-colors z-10"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              {selectedWork.type === "video" ? (
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    autoPlay
                    src={selectedWork.src}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative w-full">
                  <Image
                    src={selectedWork.src}
                    alt={selectedWork.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              )}
              
              <div className="p-6 lg:p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase">
                    {selectedWork.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text mb-3">
                  {selectedWork.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {selectedWork.description}
                </p>
                <p className="text-sm text-gray-500">
                  {selectedWork.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


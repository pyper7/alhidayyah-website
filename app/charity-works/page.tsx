"use client";

import Image from "next/image";
import Button from "@/components/Button";
import PageBanner from "@/components/PageBanner";
import { useState } from "react";

interface CharityWork {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  category: "Orphanage" | "Dawah" | "School";
}

export default function CharityWorksPage() {
  const [selectedWork, setSelectedWork] = useState<CharityWork | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Charity works with multiple items per category
  const charityWorks: CharityWork[] = [
    // Orphanage
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
      title: "Orphanage Support Program",
      description: "Providing essential care and education to orphaned children in our community",
      date: "January 2024",
      category: "Orphanage"
    },
    {
      id: 2,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80",
      title: "Children's Day Celebration",
      description: "Celebrating and bringing joy to our orphanage children",
      date: "February 2024",
      category: "Orphanage"
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80",
      title: "Educational Support Initiative",
      description: "Ensuring every child receives quality education and learning materials",
      date: "March 2024",
      category: "Orphanage"
    },
    // Dawah
    {
      id: 4,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      title: "Dawah Workshop Series",
      description: "Engaging community members through interactive Islamic workshops and seminars",
      date: "January 2024",
      category: "Dawah"
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80",
      title: "Community Lecture Program",
      description: "Spreading authentic Islamic knowledge to the wider community",
      date: "February 2024",
      category: "Dawah"
    },
    {
      id: 6,
      type: "image",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      title: "Ramadan Dawah Campaign",
      description: "Special programs during the holy month to spread Islamic teachings",
      date: "March 2024",
      category: "Dawah"
    },
    // School
    {
      id: 7,
      type: "image",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      title: "School Renovation Project",
      description: "Improving learning environments for our students with modern facilities",
      date: "January 2024",
      category: "School"
    },
    {
      id: 8,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
      title: "Student Achievement Ceremony",
      description: "Celebrating the academic and character achievements of our students",
      date: "February 2024",
      category: "School"
    },
    {
      id: 9,
      type: "image",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
      title: "Islamic Studies Program",
      description: "Comprehensive Islamic education integrated with modern curriculum",
      date: "March 2024",
      category: "School"
    }
  ];

  const categories = ["All", "Orphanage", "Dawah", "School"];

  const filteredWorks = activeCategory === "All" 
    ? charityWorks 
    : charityWorks.filter(work => work.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      {/* Header */}
      <PageBanner
        badge="Our Impact"
        title="Charity Works"
        description="Discover how we're making a positive impact in communities through our various programs and initiatives"
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="group relative bg-white rounded-card border border-primary/10 shadow-lg card-hover overflow-hidden cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                {/* Media Container */}
                <div className="relative w-full h-[300px] overflow-hidden bg-gradient-to-br from-primary/10 to-primary-light/5">
                  {work.type === "video" ? (
                    <>
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
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
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-semibold uppercase">
                      {work.category}
                    </span>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm text-white/80 font-medium mb-2 block">{work.date}</span>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Button href="/" variant="outline" className="text-base px-8 py-4">
              ← Back to Home
            </Button>
          </div>
        </div>
      </section>

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
    </div>
  );
}


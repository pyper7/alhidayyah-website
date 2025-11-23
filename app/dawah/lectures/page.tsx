"use client";

import { useState, useMemo } from "react";
import PageBanner from "@/components/PageBanner";
import { lecturePrograms, allVideos, type LectureVideo, type LectureProgram } from "@/data/lectures";
import Link from "next/link";

export default function LecturesPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const videosPerPage = 12;

  const filteredVideos = useMemo(() => {
    let filtered = allVideos;

    if (selectedProgram !== "all") {
      filtered = filtered.filter(video => video.programId === selectedProgram);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(query) ||
        lecturePrograms.find(p => p.id === video.programId)?.title.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  }, [selectedProgram, searchQuery]);

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const getProgramTitle = (programId: string): string => {
    return lecturePrograms.find(p => p.id === programId)?.title || "Unknown Program";
  };

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Islamic Lectures"
        title="Dawah Lectures & Videos"
        description="Watch previous lectures and learn from our comprehensive collection of Islamic teachings"
        imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full sm:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search lectures..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 pl-12 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedProgram("all");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProgram === "all"
                    ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                    : "bg-white text-gray-700 border border-primary/20 hover:border-primary/40"
                }`}
              >
                All Programs
              </button>
              {lecturePrograms.map((program) => (
                <button
                  key={program.id}
                  onClick={() => {
                    setSelectedProgram(program.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedProgram === program.id
                      ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                      : "bg-white text-gray-700 border border-primary/20 hover:border-primary/40"
                  }`}
                >
                  {program.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary">{filteredVideos.length}</span> lecture{filteredVideos.length !== 1 ? "s" : ""}
              {selectedProgram !== "all" && (
                <span> in <span className="font-semibold">{getProgramTitle(selectedProgram)}</span></span>
              )}
            </p>
          </div>

          {paginatedVideos.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">No lectures found</h3>
              <p className="mt-2 text-gray-600">
                {searchQuery ? "Try adjusting your search terms" : "Check back later for new lectures"}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {paginatedVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-xl border border-primary/10 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                          {getProgramTitle(video.programId)}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      {video.date && (
                        <p className="text-xs text-gray-500">
                          {formatDate(video.date)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/10 transition-colors"
                  >
                    Previous
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                              currentPage === page
                                ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                                : "bg-white text-gray-700 border border-primary/20 hover:border-primary/40"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return <span key={page} className="px-2 text-gray-400">...</span>;
                      }
                      return null;
                    })}
                  </div>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/10 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary/10 via-primary-light/8 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Want to learn more about our programs?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Visit our Dawah page to see the complete schedule and learn about all our programs
          </p>
          <Link
            href="/dawah"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            View Dawah Programs →
          </Link>
        </div>
      </section>
    </div>
  );
}


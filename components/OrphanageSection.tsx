import Button from "./Button";

export default function OrphanageSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-light/10 via-primary/8 to-primary/12 relative overflow-hidden">
      {/* Creative Background Layers */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary-light/15 rounded-full blur-3xl"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #026f38 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/95 via-white/90 to-primary/8 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent rounded-full text-sm font-semibold uppercase tracking-wide border border-accent/20 shadow-sm backdrop-blur-sm">
                Making a Difference
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-6 fade-in-delay-1">
              Join With Humanity to Give Education to <span className="gradient-text">Orphanage Children</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-delay-2">
              Every child deserves love, care, and education. Our orphanage program provides 
              a safe, nurturing environment where children receive not just shelter, but also 
              quality education, healthcare, and Islamic values that will guide them throughout life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">
                What We Provide
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Safe and loving home environment</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Quality education and academic support</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Healthcare and medical support</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Islamic values and moral guidance</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Emotional and psychological support</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">
                How You Can Help
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Sponsor a child's education</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Donate to support daily needs</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Volunteer your time and skills</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-text transition-colors">Spread awareness about our cause</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button href="/donate" variant="primary">
              Donate Now
            </Button>
            <Button href="/orphanage" variant="outline">
              Discover More
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Button from "./Button";

export default function SchoolSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-light/8 via-white to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, #026f38 15px, #026f38 16px),
                           repeating-linear-gradient(-45deg, transparent, transparent 15px, #009241 15px, #009241 16px)`,
        }}></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #026f38 1px, transparent 0)`,
          backgroundSize: '35px 35px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20 shadow-sm backdrop-blur-sm">
              Education Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-6 fade-in-delay-1">
            <span className="gradient-text">Riyad Saliheen</span> International School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-delay-2">
            Providing quality education that combines academic excellence with Islamic teachings 
            and moral values. Our school creates a nurturing environment where students grow 
            intellectually, spiritually, and morally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover group fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors">
              Academic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive curriculum designed to prepare students for success in both 
              academic and real-world settings.
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover group fade-in-delay-1">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors">
              Islamic Education
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrated Islamic studies that help students understand and practice their 
              faith with knowledge and wisdom.
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover group fade-in-delay-2">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors">
              Character Building
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Focus on developing moral values, good character, and responsible citizenship 
              in a supportive environment.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button href="/rihad-saliheen-school" variant="primary">
            Learn More About Our School
          </Button>
        </div>
      </div>
    </section>
  );
}


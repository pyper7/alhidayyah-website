import Button from "./Button";

const dawahFeatures = [
  {
    title: "Dawah Workshops and Seminars",
    description: "Educational programs designed to spread authentic Islamic knowledge",
  },
  {
    title: "Islamic Lectures",
    description: "Regular lectures by qualified scholars on various Islamic topics",
  },
  {
    title: "Impactful Resources",
    description: "Access to books, articles, and multimedia content for learning",
  },
  {
    title: "Live Streaming",
    description: "Online sessions and live broadcasts for global reach",
  },
];

export default function DawahSection() {
  return (
    <section id="dawah" className="section-padding bg-gradient-to-br from-primary/12 via-primary-light/8 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/12 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23026f38' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20 shadow-sm backdrop-blur-sm">
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-4 fade-in-delay-1">
            <span className="gradient-text">Dawah</span> - Spreading Islam To The World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-delay-2">
            Our Da'wah initiative is dedicated to spreading the true message of Islam through 
            education, enlightenment, and moral guidance. We reach out to communities worldwide 
            with authentic Islamic teachings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dawahFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg card-hover relative overflow-hidden fade-in-delay-{index}"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-heading font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/dawah" variant="primary">
            Learn More About Dawah →
          </Button>
        </div>
      </div>
    </section>
  );
}


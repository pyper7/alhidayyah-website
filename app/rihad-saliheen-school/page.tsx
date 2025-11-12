import PageBanner from "@/components/PageBanner";

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Education"
        title="Riyad Saliheen International School"
        description="Providing quality education that combines academic excellence with Islamic teachings and moral values"
        imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
      />
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-text/80 mb-6">
              Riyad Saliheen School creates a nurturing environment where students grow 
              intellectually, spiritually, and morally. Our comprehensive curriculum prepares 
              students for success while instilling strong Islamic values.
            </p>
            <h2 className="text-3xl font-heading font-bold text-text mt-12 mb-6">
              Our Approach
            </h2>
            <ul className="space-y-4 text-lg text-text/80">
              <li>
                <strong>Academic Excellence:</strong> Comprehensive curriculum designed to prepare 
                students for success in both academic and real-world settings.
              </li>
              <li>
                <strong>Islamic Education:</strong> Integrated Islamic studies that help students 
                understand and practice their faith with knowledge and wisdom.
              </li>
              <li>
                <strong>Character Building:</strong> Focus on developing moral values, good character, 
                and responsible citizenship in a supportive environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


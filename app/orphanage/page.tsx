import PageBanner from "@/components/PageBanner";

export default function OrphanagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Our Mission"
        title="Orphanage"
        description="Join With Humanity to Give Education to Orphanage Children"
        imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80"
      />
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-text/80 mb-6">
              Every child deserves love, care, and education. Our orphanage program provides 
              a safe, nurturing environment where children receive not just shelter, but also 
              quality education, healthcare, and Islamic values that will guide them throughout life.
            </p>
            <h2 className="text-3xl font-heading font-bold text-text mt-12 mb-6">
              What We Provide
            </h2>
            <ul className="space-y-3 text-lg text-text/80">
              <li>Safe and loving home environment</li>
              <li>Quality education and academic support</li>
              <li>Healthcare and medical support</li>
              <li>Islamic values and moral guidance</li>
              <li>Emotional and psychological support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Who We Are"
        title="About Us"
        description="Dedicated to serving humanity through education, compassion, and Islamic values"
        imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80"
      />
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text/80 mb-6">
              Al-Hidaayah Islamic Foundation is dedicated to serving humanity through education, 
              compassion, and Islamic values. We believe in creating positive change in the world 
              by empowering individuals and communities.
            </p>
            <h2 className="text-3xl font-heading font-bold text-text mt-12 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text/80 mb-4">
              To spread authentic Islamic knowledge, provide care and support to those in need, 
              and deliver quality education that combines academic excellence with moral values.
            </p>
            <h2 className="text-3xl font-heading font-bold text-text mt-12 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-text/80 mb-4">
              A world where Islamic values guide every aspect of life, where education empowers 
              communities, and where compassion and care reach those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


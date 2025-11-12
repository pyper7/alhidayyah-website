import PageBanner from "@/components/PageBanner";

export default function DawahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Spreading Knowledge"
        title="Dawah"
        description="Spreading Islam To The World"
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
      />
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-text/80 mb-6">
              Our Da'wah program is dedicated to spreading the true message of Islam through 
              education, enlightenment, and moral guidance. We reach out to communities worldwide 
              with authentic Islamic teachings.
            </p>
            <h2 className="text-3xl font-heading font-bold text-text mt-12 mb-6">
              Our Programs
            </h2>
            <ul className="space-y-4 text-lg text-text/80">
              <li>
                <strong>Dawah Workshops and Seminars:</strong> Educational programs designed 
                to spread authentic Islamic knowledge
              </li>
              <li>
                <strong>Islamic Lectures:</strong> Regular lectures by qualified scholars on 
                various Islamic topics
              </li>
              <li>
                <strong>Impactful Resources:</strong> Access to books, articles, and multimedia 
                content for learning
              </li>
              <li>
                <strong>Live Streaming:</strong> Online sessions and live broadcasts for global reach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


import Button from "@/components/Button";
import PageBanner from "@/components/PageBanner";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary-light/8">
      <PageBanner
        badge="Join Us"
        title="Get Involved"
        description="There are many ways to support our mission and make a difference in the lives of others"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-8 rounded-lg">
                <h2 className="text-3xl font-heading font-bold text-text mb-4">
                  Donate
                </h2>
                <p className="text-lg text-text/80 mb-6">
                  Your financial support helps us continue our programs in Dawah, Orphanage care, 
                  and Education. Every contribution makes a difference.
                </p>
                <Button href="/donate" variant="primary">
                  Donate Now
                </Button>
              </div>

              <div className="bg-background p-8 rounded-lg">
                <h2 className="text-3xl font-heading font-bold text-text mb-4">
                  Volunteer
                </h2>
                <p className="text-lg text-text/80 mb-6">
                  Share your time and skills with us. Volunteers are essential to our mission and 
                  help us reach more people.
                </p>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-heading font-bold text-text mb-6">
                Ways to Get Involved
              </h2>
              <ul className="space-y-4 text-lg text-text/80">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Sponsor a child's education at our orphanage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Support our Dawah programs and initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Contribute to our school's development projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Volunteer your expertise in education, healthcare, or administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Spread awareness about our cause in your community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


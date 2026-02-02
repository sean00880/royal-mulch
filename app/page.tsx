import {
  HeroSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection,
  PortfolioSection,
  BlogSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section - Why Choose Us */}
      <FeaturesSection />

      {/* Mulch Services Section */}
      <ServicesSection />

      {/* Portfolio Gallery */}
      <PortfolioSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection variant="secondary" />
    </>
  );
}

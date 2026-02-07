import {
  HeroSection,
  StatsSection,
  MulchProductsSection,
  DeliveryPickupSection,
  FeaturesSection,
  MulchCalculatorSection,
  TestimonialsSection,
  ServiceAreaSection,
  BlogSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero - Mulch delivery focused */}
      <HeroSection
        title="Premium Mulch Delivered to Your Door"
        description="Triple ground black, brown, and natural mulch — delivered same-day or available for pickup at our Lancaster, OH yard. Serving Fairfield County since 1995."
      />

      {/* Trust Indicators */}
      <StatsSection />

      {/* Three Mulch Products with Pricing */}
      <MulchProductsSection />

      {/* Delivery vs Pickup Comparison */}
      <DeliveryPickupSection />

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* Mulch Calculator */}
      <MulchCalculatorSection />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Service Area */}
      <ServiceAreaSection />

      {/* Blog - SEO Content */}
      <BlogSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection variant="secondary" />
    </>
  );
}

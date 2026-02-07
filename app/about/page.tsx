import { Metadata } from 'next';
import { Check, Award, Users, Truck, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection, TestimonialsSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About Us | Royal Mulch - Lancaster, OH',
  description:
    'Learn about Royal Mulch - your trusted mulch delivery and pickup partner since 1995. Family-owned and operated in Lancaster, OH.',
};

const stats = [
  { icon: Award, value: '25+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Truck, value: '50,000+', label: 'Yards Delivered' },
  { icon: Leaf, value: '100%', label: 'Satisfaction Guaranteed' },
];

const values = [
  {
    title: 'Quality First',
    description: 'All our mulch is triple ground for a fine, consistent texture. We never cut corners on quality.',
  },
  {
    title: 'Customer Focus',
    description: 'Same-day delivery, fair pricing, and we always show up on time. Your satisfaction is guaranteed.',
  },
  {
    title: 'Local Commitment',
    description: 'Family-owned and operated in Lancaster since 1995. We know our community and its needs.',
  },
  {
    title: 'Environmental Care',
    description: 'Locally sourced materials and sustainable processing. Our natural mulch is 100% chemical-free.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Royal Mulch
            </h1>
            <p className="text-lg text-white/90">
              Your trusted partner for premium mulch delivery and pickup since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Family-Owned & Operated Since 1995
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Royal Mulch started with a simple idea: provide the best quality mulch in
                Fairfield County with honest pricing and reliable delivery. What began as a
                small family operation has grown into one of the most trusted mulch suppliers
                in Central Ohio.
              </p>
              <p>
                For over 25 years, we&apos;ve been supplying premium triple ground mulch to
                homeowners, landscapers, and businesses across Lancaster, Carroll, Baltimore,
                Pickerington, Circleville, and surrounding communities. We&apos;ve delivered
                over 50,000 yards of mulch — and we&apos;re just getting started.
              </p>
              <p>
                Our commitment remains the same today as it was in 1995: quality products,
                fair prices, and the kind of service where we know our customers by name.
                Whether you need 3 yards delivered to your front door or you&apos;re picking
                up a single yard at our Lancaster yard, you&apos;ll always get our best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}

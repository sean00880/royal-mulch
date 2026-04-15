import { Metadata } from 'next';
import Image from 'next/image';
import { Check, Award, Users, Truck, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/data/registries/team';
import { CTASection, TestimonialsSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About Us | Royal Mulch - Lancaster, OH',
  description:
    'Learn about Royal Mulch - your trusted mulch supplier in Lancaster, OH. Locally owned, A+ BBB rated, 5-star Google reviews.',
};

const stats = [
  { icon: Award, value: 'A+', label: 'BBB Rating' },
  { icon: Users, value: '5.0', label: 'Google Star Rating' },
  { icon: Truck, value: '25 mi', label: 'Delivery Radius' },
  { icon: Leaf, value: '100%', label: 'Satisfaction Guaranteed' },
];

const values = [
  {
    title: 'Quality First',
    description: 'We source only the finest materials and maintain strict quality standards.',
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority. We go above and beyond to exceed expectations.',
  },
  {
    title: 'Local Commitment',
    description: 'Proudly serving Central Ohio from our yard on Ruble Park Ave in Lancaster.',
  },
  {
    title: 'Environmental Care',
    description: 'We use sustainable practices and eco-friendly materials whenever possible.',
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
              Locally owned. A+ BBB rated. 5-star Google reviews. Lancaster, OH.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Locally Owned & Operated in Lancaster, OH
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Royal Mulch started with a simple idea: deliver quality triple ground mulch
                  to homes and businesses across Central Ohio — fast, fairly priced, and done right.
                </p>
                <p>
                  Operating from our yard at 3503 Ruble Park Ave in Lancaster, we specialize in
                  premium black, brown, and natural mulch with same-day delivery across Fairfield
                  County. Every load is triple ground for a fine, consistent texture that looks
                  great and lasts.
                </p>
                <p>
                  We're proud to be A+ rated by the Better Business Bureau and carry a perfect
                  5-star rating on Google. We serve homeowners, property managers, and landscapers
                  in Lancaster, Carroll, Baltimore, Pickerington, Circleville, and surrounding communities.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/assets/img/about/about-1.jpg"
                alt="Royal Mulch team at work"
                fill
                className="object-cover"
              />
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

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Experts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <Card key={member.id} className="overflow-hidden group card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
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

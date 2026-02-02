'use client';

import { Leaf, Truck, Shield, Star, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';

const features = [
  {
    icon: Leaf,
    title: 'Premium Quality',
    description: '100% organic mulch and landscaping materials sourced from trusted suppliers.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in Lancaster and surrounding areas.',
  },
  {
    icon: Shield,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll make it right. Your satisfaction is our priority.",
  },
  {
    icon: Star,
    title: 'Expert Service',
    description: 'Over 25 years of experience in landscaping and lawn care.',
  },
  {
    icon: Clock,
    title: 'Reliable Scheduling',
    description: 'We show up on time, every time. Count on us for your projects.',
  },
  {
    icon: MapPin,
    title: 'Locally Owned',
    description: 'Proudly serving Central Ohio since 1995. We know our community.',
  },
];

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function FeaturesSection({
  title = 'Why Choose Royal Mulch?',
  subtitle = 'Our Promise',
  description = "We're committed to providing the best quality products and services in Lancaster, OH.",
}: FeaturesSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            {subtitle}
          </motion.span>
          <TextEffect
            preset="slide"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            as="h2"
          >
            {title}
          </TextEffect>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <AnimatedGroup
          preset="slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <Card key={feature.title} className="card-hover text-center">
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';
import { FEATURES_REGISTRY } from '@/lib/registries';

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function FeaturesSection({
  title = FEATURES_REGISTRY.sectionDefaults.title,
  subtitle = FEATURES_REGISTRY.sectionDefaults.subtitle,
  description = FEATURES_REGISTRY.sectionDefaults.description,
}: FeaturesSectionProps) {
  const features = FEATURES_REGISTRY.whyChooseUs;

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

        {/* Features Grid with enhanced blur-slide animation */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <Card key={feature.title} className="card-hover text-center group">
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { mulchServices, type Service } from '@/data/registries/services';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  services?: Service[];
  showCTA?: boolean;
}

export function ServicesSection({
  title = 'Our Mulch Selection',
  subtitle = 'Premium Triple Ground Mulch',
  description = 'Experience the excellence of Royal Mulch\'s triple ground mulch: Unmatched quality for your landscape transformation!',
  services = mulchServices,
  showCTA = true,
}: ServicesSectionProps) {
  return (
    <section className="section-padding bg-muted/30" id="mulch-selection">
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

        {/* Services Grid */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group card-hover">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </AnimatedGroup>

        {/* CTA Banner */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Transform Your Landscape?
                </h3>
                <p className="text-white/80">
                  Get a free quote for professional mulch delivery and installation.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <Link href="/quote">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/img/shape/pattern-1270.png')] bg-repeat" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

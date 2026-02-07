'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TextEffect } from '@/components/ui/text-effect';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { testimonials, type Testimonial } from '@/data/registries/testimonials';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="w-[350px] md:w-[400px] flex-shrink-0 relative overflow-hidden">
      <CardContent className="p-6 pt-8">
        {/* Quote Icon */}
        <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" />

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-muted-foreground mb-6 italic line-clamp-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Author Info - Initials instead of photo */}
        <div className="flex items-center gap-4">
          <div
            className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: testimonial.initialsColor }}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.location && ` | ${testimonial.location}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
  variant?: 'grid' | 'carousel';
}

export function TestimonialsSection({
  title = 'What Our Customers Say',
  subtitle = 'Testimonials',
  items = testimonials,
  variant = 'carousel',
}: TestimonialsSectionProps) {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
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
            className="text-3xl md:text-4xl font-bold tracking-tight"
            as="h2"
          >
            {title}
          </TextEffect>
        </div>
      </div>

      {/* Testimonials Carousel */}
      {variant === 'carousel' ? (
        <InfiniteSlider
          speed={25}
          speedOnHover={10}
          gap={24}
          className="py-4"
        >
          {items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </InfiniteSlider>
      ) : (
        /* Grid variant for static display */
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

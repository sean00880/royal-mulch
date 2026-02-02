'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { portfolioItems, type PortfolioItem } from '@/data/registries/portfolio';
import { motion } from 'motion/react';

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  items?: PortfolioItem[];
  showMore?: boolean;
}

export function PortfolioSection({
  title = 'Our Recent Projects',
  subtitle = 'Portfolio',
  items = portfolioItems.slice(0, 6),
  showMore = true,
}: PortfolioSectionProps) {
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
            className="text-3xl md:text-4xl font-bold tracking-tight"
            as="h2"
          >
            {title}
          </TextEffect>
        </div>

        {/* Portfolio Grid */}
        <AnimatedGroup
          preset="zoom"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {item.title}
                </h3>
                <span className="text-white/70 text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        {/* View All Button */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showCTA?: boolean;
}

export function HeroSection({
  title = "Lancaster, OH's Premier Landscaping Supply",
  subtitle = 'Royal Mulch',
  description = 'Quality mulch, stone, and soil products delivered to your door. Professional landscaping services that transform your outdoor space.',
  backgroundImage = '/assets/img/bg/black.jpg',
  showCTA = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 border border-primary/30">
              {subtitle}
            </span>
          </motion.div>

          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.5}
            speedSegment={0.8}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            as="h1"
          >
            {title}
          </TextEffect>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button asChild size="lg" className="text-base">
                <Link href="/quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="tel:+17406545555">
                  <Phone className="mr-2 h-5 w-5" /> (740) 654-5555
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary blur-3xl"
      />
    </section>
  );
}

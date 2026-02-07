'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';
import { SITE_CONFIG, FEATURES_REGISTRY } from '@/lib/registries';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showCTA?: boolean;
  showTrustIndicators?: boolean;
}

export function HeroSection({
  title = 'Premium Mulch Delivered to Your Door',
  subtitle = SITE_CONFIG.brand.name,
  description = 'Triple ground black, brown, and natural mulch — delivered same-day or available for pickup at our Lancaster, OH yard. Serving Fairfield County since 1995.',
  backgroundImage = '/assets/img/bg/black.jpg',
  showCTA = true,
  showTrustIndicators = true,
}: HeroSectionProps) {
  const { phone, phoneLink } = SITE_CONFIG.contact;
  const trustIndicators = FEATURES_REGISTRY.trustIndicators;

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

      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsla(var(--primary)/0.3)_0%,transparent_70%)] blur-3xl animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -right-40 top-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsla(var(--primary)/0.2)_0%,transparent_70%)] blur-3xl animate-pulse"
        style={{ animationDuration: '10s' }}
      />

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
                <Link href={phoneLink}>
                  <Phone className="mr-2 h-5 w-5" /> {phone}
                </Link>
              </Button>
            </motion.div>
          )}

          {/* Trust Indicators */}
          {showTrustIndicators && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex flex-wrap gap-8 md:gap-12">
                {trustIndicators.slice(0, 3).map((indicator, index) => (
                  <motion.div
                    key={indicator.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {indicator.value}{indicator.suffix}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {indicator.label}
                    </div>
                  </motion.div>
                ))}
              </div>
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

export function CTASection({
  title = 'Ready to Order Your Mulch?',
  description = 'Get a free delivery quote or stop by our Lancaster yard for pickup. Same-day delivery available.',
  variant = 'primary',
}: CTASectionProps) {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/bg/page-title-bg.jpg"
          alt="Premium mulch"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <TextEffect
            preset="fade-in-blur"
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
            as="h2"
          >
            {title}
          </TextEffect>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-10"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary"
            >
              <Link href="/quote">
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+17406545555">
                <Phone className="mr-2 h-5 w-5" /> Call Us Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

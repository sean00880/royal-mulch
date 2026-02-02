'use client';

import Link from 'next/link';
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
  title = 'Ready to Transform Your Landscape?',
  description = 'Get a free quote for your project. We offer competitive pricing and expert service.',
  variant = 'primary',
}: CTASectionProps) {
  const bgClass =
    variant === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary';

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
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

'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { TextEffect } from '@/components/ui/text-effect';

// Partner/Supplier logos - can be extended via registry if needed
const partnerLogos = [
  { name: 'Partner 1', src: '/assets/img/partners/partner-1.png' },
  { name: 'Partner 2', src: '/assets/img/partners/partner-2.png' },
  { name: 'Partner 3', src: '/assets/img/partners/partner-3.png' },
  { name: 'Partner 4', src: '/assets/img/partners/partner-4.png' },
  { name: 'Partner 5', src: '/assets/img/partners/partner-5.png' },
  { name: 'Partner 6', src: '/assets/img/partners/partner-6.png' },
];

// Fallback placeholder logos using brand colors
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-muted/50 px-4">
    <span className="text-xs font-medium text-muted-foreground truncate">{name}</span>
  </div>
);

interface LogoCloudSectionProps {
  title?: string;
  subtitle?: string;
  logos?: Array<{ name: string; src?: string }>;
  showPlaceholders?: boolean;
  className?: string;
}

export function LogoCloudSection({
  title = 'Trusted Partners & Suppliers',
  subtitle,
  logos = partnerLogos,
  showPlaceholders = true,
  className,
}: LogoCloudSectionProps) {
  // If no real logos exist yet, show placeholders
  const displayLogos = logos.length > 0 || showPlaceholders
    ? logos.length > 0
      ? logos
      : [
          { name: 'Premium Mulch Co.' },
          { name: 'Ohio Stone Supply' },
          { name: 'Lancaster Equipment' },
          { name: 'Central Ohio Nursery' },
          { name: 'Fairfield Irrigation' },
          { name: 'Pro Landscapers Assoc.' },
        ]
    : [];

  if (displayLogos.length === 0) return null;

  return (
    <section className={`py-12 md:py-16 bg-muted/30 ${className || ''}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              {subtitle}
            </motion.span>
          )}
          <TextEffect
            preset="fade"
            as="p"
            className="text-sm md:text-base text-muted-foreground"
          >
            {title}
          </TextEffect>
        </div>

        {/* Logo Slider */}
        <InfiniteSlider
          speed={30}
          speedOnHover={15}
          gap={48}
          className="py-4"
        >
          {displayLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <PlaceholderLogo name={logo.name} />
              )}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

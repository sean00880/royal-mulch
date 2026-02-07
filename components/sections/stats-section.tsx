'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FEATURES_REGISTRY } from '@/lib/registries';
import { AnimatedGroup } from '@/components/ui/animated-group';

interface StatsSectionProps {
  className?: string;
}

export function StatsSection({ className }: StatsSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = FEATURES_REGISTRY.trustIndicators;

  return (
    <section ref={ref} className={`py-12 md:py-16 bg-primary/5 ${className || ''}`}>
      <div className="container-custom">
        <AnimatedGroup
          preset="blur-slide"
          className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center min-w-[140px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={parseInt(stat.value.replace(/,/g, ''))}
                      duration={2.5}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    '0'
                  )}
                </span>
                {stat.suffix && (
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-sm md:text-base text-muted-foreground mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

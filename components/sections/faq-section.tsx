'use client';

import { TextEffect } from '@/components/ui/text-effect';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Registry } from '@/data/registry';
import { motion } from 'motion/react';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: typeof Registry.faqs;
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Got Questions?',
  faqs = Registry.faqs,
}: FAQSectionProps) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
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

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`faq-${faq.id}`}
                  className="bg-background rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

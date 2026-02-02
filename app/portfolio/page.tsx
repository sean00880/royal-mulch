'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioItems, portfolioCategories } from '@/data/registries/portfolio';
import { CTASection } from '@/components/sections';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-white/90">
              Browse our gallery of completed projects. From mulch installations to complete
              landscape transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <CTASection />
    </>
  );
}

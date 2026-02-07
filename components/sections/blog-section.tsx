'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { blogArticles, type BlogArticle } from '@/data/registries/blogs';
import { motion } from 'motion/react';

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  articles?: BlogArticle[];
  showMore?: boolean;
}

export function BlogSection({
  title = 'Latest Tips & Articles',
  subtitle = 'Our Blog',
  articles = blogArticles.slice(0, 3),
  showMore = true,
}: BlogSectionProps) {
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

        {/* Blog Grid */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden group card-hover">
              {/* Color block header instead of stock image */}
              <div
                className="relative h-52 flex items-end p-6"
                style={{ backgroundColor: article.color }}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white relative z-10 line-clamp-2">
                  {article.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href={`/blog/${article.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

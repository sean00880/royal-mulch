import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, User, Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogsRegistry, blogArticles } from '@/data/registries/blogs';
import { CTASection } from '@/components/sections';

// Generate static params for all blog articles
export function generateStaticParams() {
  return blogsRegistry.getStaticParams();
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogsRegistry.getBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Royal Mulch',
    };
  }

  return {
    title: `${article.title} | Royal Mulch Blog`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogsRegistry.getBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = blogArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {article.views} views
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Color block header instead of featured image */}
              <div
                className="relative aspect-video rounded-xl overflow-hidden mb-8 flex items-end p-8"
                style={{ backgroundColor: article.color }}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10">
                  {article.title}
                </h2>
              </div>

              {/* Article Body */}
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <p className="lead text-xl text-muted-foreground mb-8">
                  {article.content.intro}
                </p>

                {/* Sections */}
                {article.content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                    <p className="text-muted-foreground">{section.body}</p>
                  </div>
                ))}

                {/* Conclusion */}
                {article.content.conclusion && (
                  <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                    <h3 className="text-xl font-bold mb-2">Conclusion</h3>
                    <p className="text-muted-foreground">{article.content.conclusion}</p>
                  </div>
                )}
              </article>

              {/* Share & Tags */}
              <div className="mt-8 pt-8 border-t flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Share:</span>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                <Button asChild variant="outline">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <Card className="mb-6">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl"
                    style={{ backgroundColor: '#2d5a27' }}
                  >
                    RM
                  </div>
                  <h3 className="text-lg font-semibold">{article.author}</h3>
                  <p className="text-muted-foreground text-sm">
                    Sharing mulch tips and insights for Central Ohio homeowners since 1995.
                  </p>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="flex gap-4 group"
                      >
                        <div
                          className="w-20 h-20 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: related.color }}
                        />
                        <div>
                          <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{related.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

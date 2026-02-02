import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Eye, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogArticles } from '@/data/registries/blogs';
import { Registry } from '@/data/registry';

export const metadata: Metadata = {
  title: 'Blog | Royal Mulch - Lancaster, OH',
  description:
    'Tips, guides, and articles about mulching, landscaping, and gardening in Central Ohio.',
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-white/90">
              Tips, guides, and articles to help you create and maintain a beautiful landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {blogArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden group card-hover">
                    <div className="md:flex">
                      <div className="relative md:w-80 h-52 md:h-auto overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-center">
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
                        <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {article.views} views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {article.comments} comments
                            </span>
                          </div>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link href={`/blog/${article.slug}`}>
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {Registry.blogCategories.map((category) => (
                      <li key={category.slug}>
                        <Link
                          href={`/blog?category=${category.slug}`}
                          className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-muted-foreground text-sm">
                            ({category.count})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <p className="text-white/90 mb-6">
                    Have questions about mulching or landscaping? We're here to help!
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

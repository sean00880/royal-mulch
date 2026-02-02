import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { servicesRegistry, mulchServices, type Service } from '@/data/registries/services';
import { CTASection } from '@/components/sections';

// Generate static params for all services
export function generateStaticParams() {
  return servicesRegistry.getStaticParams();
}

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesRegistry.getBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Royal Mulch',
    };
  }

  return {
    title: `${service.title} | Royal Mulch - Lancaster, OH`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesRegistry.getBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (same category, excluding current)
  const relatedServices = servicesRegistry
    .getByCategory(service.category)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  // Check if this is a mulch service (has full description)
  const isMulchService = mulchServices.some((s) => s.id === service.id);

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.backgroundImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium mb-4 border border-primary/30">
              {service.category.charAt(0).toUpperCase() + service.category.slice(1)} Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-200 mb-8">{service.shortDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
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
                <Link href="tel:+17406545555">
                  <Phone className="mr-2 h-5 w-5" /> (740) 654-5555
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Full Description (for mulch services) */}
              {isMulchService && service.fullDescription.length > 0 ? (
                <div className="prose prose-lg max-w-none">
                  {service.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <p className="text-muted-foreground mb-4">
                    At Royal Mulch, we pride ourselves on delivering quality {service.title.toLowerCase()} services
                    that exceed expectations. Our experienced team uses the best materials and techniques
                    to ensure your landscape looks its best.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Contact us today for a free consultation and quote. We serve Lancaster, OH and
                    surrounding areas including Carroll, Baltimore, Pickerington, and Circleville.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Features Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="text-white/90 mb-6">
                    Contact us today for a free quote on {service.title.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <Button asChild variant="secondary" className="w-full">
                      <Link href="/quote">Request a Quote</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white/10"
                    >
                      <Link href="tel:+17406545555">
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Card key={related.id} className="overflow-hidden group card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{related.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/services/${related.slug}`}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { servicesRegistry, mulchServices } from '@/data/registries/services';
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
      title: 'Product Not Found | Royal Mulch',
    };
  }

  return {
    title: `${service.title} - Delivery & Pickup | Royal Mulch - Lancaster, OH`,
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

  // Get other mulch types (excluding current)
  const otherMulch = mulchServices.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Hero Section with Color Block */}
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
              Premium Triple Ground Mulch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-200 mb-4">{service.shortDescription}</p>

            {/* Pricing inline */}
            <div className="flex gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-400">Pickup</p>
                <p className="text-3xl font-bold text-white">${service.pricing.pickupPerYard}<span className="text-base font-normal text-gray-300">/yard</span></p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Delivered</p>
                <p className="text-3xl font-bold text-white">${service.pricing.deliveryPerYard}<span className="text-base font-normal text-gray-300">/yard</span></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/quote">
                  Get a Delivery Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="prose prose-lg max-w-none">
                {service.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
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

              {/* Pricing Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span>Pickup (per yard)</span>
                      <span className="font-bold text-primary">${service.pricing.pickupPerYard}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span>Delivered (per yard)</span>
                      <span className="font-bold text-primary">${service.pricing.deliveryPerYard}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Minimum {service.pricing.minimumDelivery} yards for delivery. No minimum for pickup.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ready to Order?</h3>
                  <p className="text-white/90 mb-6">
                    Order {service.title.toLowerCase()} for delivery or pickup today.
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

      {/* Other Mulch Types */}
      {otherMulch.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Other Mulch Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherMulch.map((related) => (
                <Card key={related.id} className="overflow-hidden group card-hover">
                  <div className="relative h-32 flex items-end p-6">
                    <Image
                      src={related.backgroundImage}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="text-xl font-bold text-white relative z-10">{related.title}</h3>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <div className="flex gap-4 text-sm mb-3">
                      <span>Pickup: <strong>${related.pricing.pickupPerYard}/yd</strong></span>
                      <span>Delivered: <strong>${related.pricing.deliveryPerYard}/yd</strong></span>
                    </div>
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

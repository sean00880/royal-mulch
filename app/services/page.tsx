import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mulchServices } from '@/data/registries/services';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Mulch Products | Royal Mulch - Lancaster, OH',
  description:
    'Premium triple ground mulch available for delivery or pickup. Black, brown, and natural mulch in Lancaster, OH and Fairfield County.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Mulch Products
            </h1>
            <p className="text-lg text-white/90">
              Premium triple ground mulch available for delivery or pickup.
              Three color options — all locally sourced and processed in Central Ohio.
            </p>
          </div>
        </div>
      </section>

      {/* Mulch Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mulchServices.map((service) => (
              <Card key={service.id} className="overflow-hidden group card-hover">
                <div className="relative h-48 flex items-end p-6">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="text-2xl font-bold text-white relative z-10">{service.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Pricing */}
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Pickup</p>
                      <p className="text-lg font-bold text-primary">${service.pricing.pickupPerYard}/yd</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Delivered</p>
                      <p className="text-lg font-bold text-primary">${service.pricing.deliveryPerYard}/yd</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Delivery & Pickup</h2>
            <p className="text-muted-foreground mb-8">
              All three mulch types are available for delivery (3 yard minimum) within our 25-mile
              service area, or for pickup at our Lancaster yard with no minimum order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quote">
                  Get a Delivery Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#calculator">
                  Mulch Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

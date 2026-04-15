import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  mulchServices,
  landscapingServices,
  maintenanceServices,
} from '@/data/registries/services';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services | Royal Mulch - Lancaster, OH',
  description:
    'Premium mulch products and professional landscaping services. Black, brown, and natural mulch plus landscape design, tree services, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/90">
              From premium triple ground mulch to professional landscaping services,
              we have everything you need to transform your outdoor space.
            </p>
          </div>
        </div>
      </section>

      {/* Mulch Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Premium Mulch
            </span>
            <h2 className="text-3xl font-bold">Triple Ground Mulch Selection</h2>
            <p className="text-muted-foreground mt-2">
              Our premium triple ground mulch is sourced from the finest organic materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mulchServices.map((service) => (
              <Card key={service.id} className="overflow-hidden group card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
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

      {/* Landscaping Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Landscaping
            </span>
            <h2 className="text-3xl font-bold">Professional Landscaping Services</h2>
            <p className="text-muted-foreground mt-2">
              Transform your outdoor space with our expert landscaping team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landscapingServices.map((service) => (
              <Card key={service.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Maintenance
            </span>
            <h2 className="text-3xl font-bold">Year-Round Maintenance</h2>
            <p className="text-muted-foreground mt-2">
              Keep your property looking great all year with our maintenance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceServices.map((service) => (
              <Card key={service.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

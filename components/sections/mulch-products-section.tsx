'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mulchServices } from '@/data/registries/services';

export function MulchProductsSection() {
  return (
    <section id="mulch-products" className="section-padding" aria-label="Our Mulch Products">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Products</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Premium Triple Ground Mulch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three premium options — all triple ground for a fine, consistent texture.
            Available for delivery or pickup at our Lancaster yard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {mulchServices.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-2 hover:border-primary/50 transition-colors">
              {/* Color block header */}
              <div
                className="h-32 relative flex items-end p-6"
                style={{ backgroundColor: service.mulchColor }}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]" />
                <h3 className="text-2xl font-bold text-white relative z-10">{service.title}</h3>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Pricing */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <p className="text-xs text-muted-foreground">Pickup</p>
                    <p className="text-xl font-bold text-primary">${service.pricing.pickupPerYard}</p>
                    <p className="text-xs text-muted-foreground">per yard</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-center">
                    <p className="text-xs text-muted-foreground">Delivered</p>
                    <p className="text-xl font-bold text-primary">${service.pricing.deliveryPerYard}</p>
                    <p className="text-xs text-muted-foreground">per yard</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full mt-4">
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

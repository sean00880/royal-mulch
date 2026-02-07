'use client';

import * as React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export function DeliveryPickupSection() {
  return (
    <section id="delivery" className="section-padding bg-muted/30" aria-label="Delivery and Pickup">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">How It Works</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Delivery or Pickup — Your Choice
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get your mulch the way that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Delivery Card */}
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Delivery</CardTitle>
              </div>
              <p className="text-muted-foreground">We bring it right to your property</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Same-Day Available</p>
                    <p className="text-sm text-muted-foreground">Order before noon for same-day delivery</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">25-Mile Radius</p>
                    <p className="text-sm text-muted-foreground">Lancaster, Carroll, Baltimore, Pickerington & more</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">3 Yard Minimum</p>
                    <p className="text-sm text-muted-foreground">Delivery fee included in per-yard pricing</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-lg bg-primary/5 p-4 mt-4">
                <p className="text-sm font-medium">Delivery Pricing</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">Black Mulch</span>
                  <span className="font-medium">$42/yard</span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-muted-foreground">Brown Mulch</span>
                  <span className="font-medium">$40/yard</span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-muted-foreground">Natural Mulch</span>
                  <span className="font-medium">$38/yard</span>
                </div>
              </div>

              <Button asChild className="w-full">
                <Link href="/quote">Schedule Delivery</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pickup Card */}
          <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Pickup</CardTitle>
              </div>
              <p className="text-muted-foreground">Come get it at our Lancaster yard</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">123 Mulch Lane, Lancaster</p>
                    <p className="text-sm text-muted-foreground">Easy access, plenty of room for trucks & trailers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mon-Fri 7AM-6PM, Sat 8AM-4PM</p>
                    <p className="text-sm text-muted-foreground">No appointment needed, just drive in</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">No Minimum Order</p>
                    <p className="text-sm text-muted-foreground">We load it for you — bring your truck or trailer</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-lg bg-secondary/5 p-4 mt-4">
                <p className="text-sm font-medium">Pickup Pricing (Save $10-12/yard)</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">Black Mulch</span>
                  <span className="font-medium">$32/yard</span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-muted-foreground">Brown Mulch</span>
                  <span className="font-medium">$30/yard</span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-muted-foreground">Natural Mulch</span>
                  <span className="font-medium">$28/yard</span>
                </div>
              </div>

              <Button asChild variant="secondary" className="w-full">
                <Link href="tel:+17406545555">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (740) 654-5555
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

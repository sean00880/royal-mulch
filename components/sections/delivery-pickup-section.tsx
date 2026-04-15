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
                    <p className="text-sm text-muted-foreground">Delivery fee included — call or request a quote</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-lg bg-primary/5 p-4 mt-4">
                <p className="text-sm font-medium">Available Mulch Types</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gray-900" />Black Mulch</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-800" />Brown Mulch</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-600" />Natural Mulch</li>
                </ul>
                <p className="mt-2 text-xs text-muted-foreground">Contact us for current pricing and availability.</p>
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
                    <p className="font-medium">3503 Ruble Park Ave, Lancaster</p>
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
                <p className="text-sm font-medium">Pickup Saves You More</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gray-900" />Black Mulch</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-800" />Brown Mulch</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-600" />Natural Mulch</li>
                </ul>
                <p className="mt-2 text-xs text-muted-foreground">Call for pickup pricing — always lower than delivery.</p>
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/quote">Request Pickup Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="tel:+16145820234">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (614) 582-0234
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

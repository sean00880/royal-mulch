'use client';

import * as React from 'react';
import { MapPin, Truck, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Registry } from '@/data/registry';

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="section-padding bg-muted/30" aria-label="Service Area">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            Service Area
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Delivering Across Fairfield County
          </h2>
          <p className="mt-4 text-muted-foreground">
            We deliver premium mulch within a 25-mile radius of Lancaster, OH.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Delivery Towns */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Delivery Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {Registry.serviceArea.map((area) => (
                    <div
                      key={area.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <p className="font-medium text-sm">{area.city}, {area.state}</p>
                        <p className="text-xs text-muted-foreground">{area.zip}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{area.distance}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Don&apos;t see your town? Call us — we may still deliver to your area.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pickup Location */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Pickup Location
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Royal Mulch Yard</p>
                    <p className="text-sm text-muted-foreground">123 Mulch Lane</p>
                    <p className="text-sm text-muted-foreground">Lancaster, OH 43130</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p>Mon-Fri: 7AM - 6PM</p>
                      <p>Saturday: 8AM - 4PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+17406545555" className="text-sm font-medium hover:text-primary transition-colors">
                      (740) 654-5555
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm font-medium">Pickup Benefits</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Save $10-12 per yard vs. delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    No minimum order
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    We load your truck or trailer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    In and out in 15 minutes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

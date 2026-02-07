'use client';

import * as React from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function MulchCalculatorSection() {
  const [length, setLength] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [depth, setDepth] = React.useState('3');

  const cubicYards = React.useMemo(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    if (isNaN(l) || isNaN(w) || isNaN(d) || l <= 0 || w <= 0 || d <= 0) return 0;
    return Math.ceil((l * w * d) / 324 * 10) / 10;
  }, [length, width, depth]);

  const roundedYards = Math.ceil(cubicYards);

  return (
    <section id="calculator" className="section-padding" aria-label="Mulch Calculator">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Calculator className="h-3 w-3 mr-1" />
            Calculator
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Much Mulch Do You Need?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enter your bed dimensions to get an instant estimate.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label htmlFor="calc-length" className="block text-sm font-medium mb-2">
                    Length (feet)
                  </label>
                  <Input
                    id="calc-length"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="e.g. 20"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="calc-width" className="block text-sm font-medium mb-2">
                    Width (feet)
                  </label>
                  <Input
                    id="calc-width"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="e.g. 5"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="calc-depth" className="block text-sm font-medium mb-2">
                    Depth (inches)
                  </label>
                  <div className="flex gap-2">
                    {['2', '3', '4'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDepth(d)}
                        className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                          depth === d
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-input bg-background hover:bg-muted'
                        }`}
                      >
                        {d}&quot;
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {cubicYards > 0 && (
                <div className="mt-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">You need approximately</p>
                    <p className="text-4xl font-bold text-primary">{cubicYards}</p>
                    <p className="text-sm text-muted-foreground">cubic yards (order {roundedYards})</p>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-md bg-background p-3">
                      <p className="text-xs text-muted-foreground">Black (Pickup)</p>
                      <p className="font-bold">${roundedYards * 32}</p>
                    </div>
                    <div className="rounded-md bg-background p-3">
                      <p className="text-xs text-muted-foreground">Brown (Pickup)</p>
                      <p className="font-bold">${roundedYards * 30}</p>
                    </div>
                    <div className="rounded-md bg-background p-3">
                      <p className="text-xs text-muted-foreground">Natural (Pickup)</p>
                      <p className="font-bold">${roundedYards * 28}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href={`/quote?yards=${roundedYards}`}>Get a Delivery Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="tel:+17406545555">Call to Order</Link>
                    </Button>
                  </div>
                </div>
              )}

              <p className="mt-4 text-xs text-muted-foreground text-center">
                Formula: Length × Width × Depth ÷ 324 = Cubic Yards.
                Minimum 3 yards for delivery. No minimum for pickup.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom mx-auto flex h-20 items-center justify-between px-4" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">RM</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-primary">Royal Mulch</span>
              <p className="text-xs text-muted-foreground">Premium Landscaping</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA & Contact Info */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>(740) 654-5555</span>
          </div>
          <Button asChild size="sm" className="button-hover">
            <Link href="/quote">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                  <Phone className="h-4 w-4" />
                  <span>(740) 654-5555</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@royalmulch.com</span>
                </div>
                <Button asChild className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

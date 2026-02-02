'use client';

import * as React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const footerLinks = {
  mulch: [
    { name: 'Black Mulch', href: '/services/black-mulch' },
    { name: 'Brown Mulch', href: '/services/brown-mulch' },
    { name: 'Natural Mulch', href: '/services/natural-mulch' },
    { name: 'All Services', href: '/services' },
  ],
  services: [
    { name: 'Mulch Installation', href: '/services/mulch-installation' },
    { name: 'Landscape Design', href: '/services/landscape-design' },
    { name: 'Tree Services', href: '/services/tree-services' },
    { name: 'Hardscaping', href: '/services/hardscaping' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Get a Quote', href: '/quote' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">RM</span>
                </div>
                <span className="text-xl font-bold text-primary">Royal Mulch</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Lancaster, OH's premier landscaping supply and service provider.
                Quality products, expert service, since 1995.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://facebook.com/royalmulch" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://instagram.com/royalmulch" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com/royalmulch" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mulch Products */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Mulch Products</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.mulch.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 rounded-lg border bg-card p-8">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get seasonal tips, special offers, and landscaping insights delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">(740) 654-5555</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@royalmulch.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  123 Mulch Lane, Lancaster, OH 43130
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Royal Mulch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

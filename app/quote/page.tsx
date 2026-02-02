'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mulchServices, landscapingServices } from '@/data/registries/services';
import { Registry } from '@/data/registry';

const allServices = [...mulchServices, ...landscapingServices];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Info
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    // Project Details
    services: [] as string[],
    projectDescription: '',
    preferredDate: '',
    howHeard: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <>
        <section className="relative py-20 bg-gradient-primary">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Quote Request Submitted!
              </h1>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-8">
                We've received your quote request and will get back to you within 24 hours.
                If you need immediate assistance, please call us at {Registry.contactInfo.phone}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`tel:${Registry.contactInfo.phone.replace(/[^0-9]/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Quote
            </h1>
            <p className="text-lg text-white/90">
              Tell us about your project and we'll provide a detailed quote.
              No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      s <= step
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {s < step ? <Check className="h-5 w-5" /> : s}
                  </div>
                  <span
                    className={`ml-3 font-medium hidden sm:block ${
                      s <= step ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {s === 1 ? 'Contact Info' : s === 2 ? 'Select Services' : 'Project Details'}
                  </span>
                  {s < 3 && (
                    <div
                      className={`w-12 sm:w-24 h-1 mx-2 sm:mx-4 rounded ${
                        s < step ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Info */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone Number *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="(740) 555-0123"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Street Address *
                          </label>
                          <Input
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            placeholder="123 Main St"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            City *
                          </label>
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="Lancaster"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ZIP Code *
                          </label>
                          <Input
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                            placeholder="43130"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Select Services */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Select Services</h2>
                      <p className="text-muted-foreground mb-6">
                        Choose one or more services you're interested in.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {allServices.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              formData.services.includes(service.id)
                                ? 'border-primary bg-primary/5'
                                : 'border-muted hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  formData.services.includes(service.id)
                                    ? 'border-primary bg-primary'
                                    : 'border-muted-foreground'
                                }`}
                              >
                                {formData.services.includes(service.id) && (
                                  <Check className="h-4 w-4 text-white" />
                                )}
                              </div>
                              <span className="font-medium">{service.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Details */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Tell us about your project *
                        </label>
                        <textarea
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Describe your project, including any specific requirements, measurements, or questions..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Preferred Start Date
                          </label>
                          <Input
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            How did you hear about us?
                          </label>
                          <select
                            name="howHeard"
                            value={formData.howHeard}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select...</option>
                            <option value="google">Google Search</option>
                            <option value="referral">Friend/Family Referral</option>
                            <option value="social">Social Media</option>
                            <option value="sign">Saw Our Truck/Sign</option>
                            <option value="repeat">Repeat Customer</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto"
                        disabled={
                          (step === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                          (step === 2 && formData.services.length === 0)
                        }
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="ml-auto"
                        disabled={isSubmitting || !formData.projectDescription}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="mt-8 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Need immediate assistance?</h3>
                    <p className="text-muted-foreground text-sm">
                      Call us directly for faster service.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="outline">
                      <Link href={`tel:${Registry.contactInfo.phone.replace(/[^0-9]/g, '')}`}>
                        <Phone className="mr-2 h-4 w-4" /> {Registry.contactInfo.phone}
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`mailto:${Registry.contactInfo.email}`}>
                        <Mail className="mr-2 h-4 w-4" /> Email Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

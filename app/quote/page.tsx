'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mulchServices } from '@/data/registries/services';
import { Registry } from '@/data/registry';

const deliveryOptions = [
  { id: 'delivery', label: 'Delivery', description: 'We bring it to you (3 yard minimum)' },
  { id: 'pickup', label: 'Pickup', description: 'Come get it at our Lancaster yard' },
];

export default function QuotePage() {
  return (
    <Suspense fallback={
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center py-12">
            <p className="text-muted-foreground">Loading quote form...</p>
          </div>
        </div>
      </section>
    }>
      <QuoteFormContent />
    </Suspense>
  );
}

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const prefilledYards = searchParams.get('yards') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Info
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    // Mulch Selection
    mulchType: '' as string,
    yards: prefilledYards,
    fulfillment: '' as string,
    // Additional Details
    preferredDate: '',
    notes: '',
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

  // Calculate estimated cost
  const selectedMulch = mulchServices.find((s) => s.id === formData.mulchType);
  const yardsNum = parseFloat(formData.yards) || 0;
  const isDelivery = formData.fulfillment === 'delivery';
  const pricePerYard = selectedMulch
    ? isDelivery
      ? selectedMulch.pricing.deliveryPerYard
      : selectedMulch.pricing.pickupPerYard
    : 0;
  const estimatedTotal = yardsNum * pricePerYard;

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
                We&apos;ve received your mulch order request and will get back to you within 24 hours.
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
              Get a Mulch Quote
            </h1>
            <p className="text-lg text-white/90">
              Choose your mulch type, tell us how much you need, and we&apos;ll get you a quote for
              delivery or pickup. Quick, easy, no obligation.
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
                    {s === 1 ? 'Choose Mulch' : s === 2 ? 'Contact Info' : 'Confirm'}
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
                  {/* Step 1: Choose Mulch */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Choose Your Mulch</h2>

                      {/* Mulch Type Selection */}
                      <div>
                        <label className="block text-sm font-medium mb-3">Mulch Type *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {mulchServices.map((service) => (
                            <div
                              key={service.id}
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, mulchType: service.id }))
                              }
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                formData.mulchType === service.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-muted hover:border-primary/50'
                              }`}
                            >
                              <div className="relative w-full h-16 rounded overflow-hidden mb-3">
                                <Image
                                  src={service.backgroundImage}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="font-medium text-sm">{service.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                From ${service.pricing.pickupPerYard}/yard
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          How many cubic yards? *
                        </label>
                        <Input
                          name="yards"
                          type="number"
                          min="1"
                          step="0.5"
                          value={formData.yards}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. 5"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Not sure?{' '}
                          <Link href="/#calculator" className="text-primary underline">
                            Use our mulch calculator
                          </Link>
                        </p>
                      </div>

                      {/* Delivery or Pickup */}
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Delivery or Pickup? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {deliveryOptions.map((option) => (
                            <div
                              key={option.id}
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, fulfillment: option.id }))
                              }
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                formData.fulfillment === option.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-muted hover:border-primary/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                    formData.fulfillment === option.id
                                      ? 'border-primary bg-primary'
                                      : 'border-muted-foreground'
                                  }`}
                                >
                                  {formData.fulfillment === option.id && (
                                    <Check className="h-3 w-3 text-white" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{option.label}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {option.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Estimated Cost */}
                      {selectedMulch && yardsNum > 0 && formData.fulfillment && (
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-sm text-muted-foreground">Estimated Cost</p>
                          <p className="text-2xl font-bold text-primary">
                            ${estimatedTotal.toFixed(2)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {yardsNum} yards of {selectedMulch.title} &times; ${pricePerYard}/yard (
                            {isDelivery ? 'delivered' : 'pickup'})
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Contact Info */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="(740) 555-0123"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                          />
                        </div>
                        {formData.fulfillment === 'delivery' && (
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Delivery Address *
                            </label>
                            <Input
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              placeholder="123 Main St"
                            />
                          </div>
                        )}
                      </div>
                      {formData.fulfillment === 'delivery' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">City *</label>
                            <Input
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              placeholder="Lancaster"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                            <Input
                              name="zip"
                              value={formData.zip}
                              onChange={handleInputChange}
                              required
                              placeholder="43130"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Confirm & Additional Details */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Confirm Your Order</h2>

                      {/* Order Summary */}
                      {selectedMulch && (
                        <div className="p-6 rounded-lg bg-muted/50 space-y-3">
                          <h3 className="font-semibold text-lg">Order Summary</h3>
                          <div className="flex justify-between">
                            <span>Mulch Type</span>
                            <span className="font-medium">{selectedMulch.title}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Quantity</span>
                            <span className="font-medium">{formData.yards} cubic yards</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fulfillment</span>
                            <span className="font-medium capitalize">{formData.fulfillment}</span>
                          </div>
                          <div className="flex justify-between border-t pt-3">
                            <span className="font-semibold">Estimated Total</span>
                            <span className="font-bold text-primary">
                              ${estimatedTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Preferred Date
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
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Any special instructions for delivery, access notes, etc."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
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
                          (step === 1 &&
                            (!formData.mulchType || !formData.yards || !formData.fulfillment)) ||
                          (step === 2 && (!formData.name || !formData.phone))
                        }
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="ml-auto" disabled={isSubmitting}>
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
                    <h3 className="font-semibold">Want to order right now?</h3>
                    <p className="text-muted-foreground text-sm">
                      Call us directly to place your order over the phone.
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

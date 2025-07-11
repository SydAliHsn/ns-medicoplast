'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { useQueryState } from 'nuqs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building, CheckCircle } from 'lucide-react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [type] = useQueryState('type');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: type ? type : '',
  });
  const [state, handleSubmit] = useForm('xdkzqwpe');

  useEffect(() => {
    if (type === 'quote-request') {
      setFormData(prev => ({ ...prev, inquiryType: 'quote-request' }));
    } else if (type === 'product-enquiry') {
      setFormData(prev => ({ ...prev, inquiryType: 'product-inquiry' }));
    }
  }, [type]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="outline"
              className="text-blue-600 text-sm border-blue-200 bg-white/80"
            >
              Contact Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get in Touch with Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Ready to discuss your healthcare equipment needs? Our expert team is here to help you find the perfect
              solutions for your medical facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call
                  us directly.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Contact Form
                  </CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible to help us assist you better.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 326 1234567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your organization name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={value => handleSelectChange('inquiryType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                          <SelectItem value="quote-request">Quote Request</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry, including specific products or services you're interested in..."
                        rows={6}
                        required
                      />
                    </div>

                    {true ? (
                      <div className="text-center space-y-2">
                        <div className="flex gap-2 items-center justify-center">
                          <CheckCircle className="size-6 text-green-600" />
                          <h3 className="text-xl font-semibold text-gray-900">Message Sent Successfully!</h3>
                        </div>
                        <p className="text-gray-600">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                        disabled={state.submitting}
                      >
                        {state.submitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                <p className="text-gray-600">
                  Multiple ways to reach us. Choose the method that works best for you. Please keep our business ours in
                  mind when reaching out.
                </p>
              </div>

              <div className="space-y-6">
                {/* Main Office */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      Main Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">NS Medicoplast Headquarters</p>
                        <p className="text-gray-600">123 Medical District</p>
                        <p className="text-gray-600">Gulshan Ravi, Lahore 12345</p>
                        <p className="text-gray-600">Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium">+92 326 1234567</p>
                        <p className="text-sm text-gray-600">Main Line</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium">info@nsmedicoplast.com</p>
                        <p className="text-sm text-gray-600">General Inquiries</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm text-gray-600">
                          <strong>Emergency Support:</strong> 24/7 technical support available for critical equipment
                          issues.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Location</h2>
            <p className="text-xl text-gray-600">
              Visit our headquarters or schedule an appointment to see our facilities and product demonstrations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Visit Our Facility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Our state-of-the-art manufacturing facility and showroom are open for visits by appointment. See our
                    equipment in action and meet with our technical experts.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">What to Expect:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Product demonstrations</li>
                      <li>• Facility tour</li>
                      <li>• Technical consultations</li>
                      <li>• Custom solution discussions</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule a Visit</Button>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Interactive+Map"
                  alt="NS Medicoplast Location Map"
                  width={300}
                  height={200}
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">NS Medicoplast HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our products and services.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What is your typical response time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours during business days. For urgent technical support, we
                  offer 24/7 emergency assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide international shipping?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we ship worldwide. Shipping costs and delivery times vary by location. Contact us for specific
                  shipping quotes and timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What certifications do your products have?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our products meet international standards including ISO 13485, CE marking, FDA approval, and WHO
                  GMP certifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We specialize in developing custom healthcare equipment solutions tailored to specific requirements
                  and budgets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

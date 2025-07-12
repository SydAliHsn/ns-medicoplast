import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Award, Users, Phone, Mail } from 'lucide-react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/85" />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-blue-600 text-sm border-blue-200 bg-white/80"
              >
                Healthcare Equipment Specialists
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced Healthcare Solutions for Modern Medicine
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                NS Medicoplast is your trusted partner in healthcare equipment manufacturing and supply. We deliver
                cutting-edge medical devices and solutions that enhance patient care worldwide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 hover:bg-white"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose NS Medicoplast?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of expertise with innovative technology to deliver healthcare solutions that meet the
              highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  ISO certified manufacturing processes ensuring the highest quality standards for all medical equipment
                  and devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Over 15 years of experience in healthcare equipment manufacturing with a deep understanding of medical
                  industry requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Customer Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Dedicated support team providing comprehensive after-sales service, maintenance, and technical
                  assistance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare equipment solutions for hospitals, clinics, and medical facilities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Diagnostic Equipment"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Diagnostic Equipment</CardTitle>
                <CardDescription>
                  Advanced diagnostic tools and imaging equipment for accurate medical assessments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Surgical Instruments"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Surgical Instruments</CardTitle>
                <CardDescription>
                  Precision surgical tools and instruments designed for optimal performance and safety.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Patient Monitoring"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Patient Monitoring</CardTitle>
                <CardDescription>
                  State-of-the-art monitoring systems for continuous patient care and safety.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Partner with Us?</h2>
            <p className="text-xl text-blue-100">
              Contact our team today to discuss your healthcare equipment needs and discover how we can support your
              medical facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href={'tel:+923344466127'}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

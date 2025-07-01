import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Award, Globe } from 'lucide-react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

export default function AboutPage() {
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
              About NS Medicoplast
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Pioneering Healthcare Innovation Since 2008
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              NS Medicoplast has been at the forefront of healthcare equipment manufacturing, delivering innovative
              solutions that improve patient outcomes and support medical professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2008, NS Medicoplast began as a small manufacturing unit with a vision to revolutionize
                  healthcare equipment accessibility. Today, we stand as a leading manufacturer and supplier of medical
                  devices, serving healthcare facilities across multiple countries.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                  commitment to quality. We've grown from a local supplier to an internationally recognized brand,
                  trusted by healthcare professionals worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="NS Medicoplast Facility"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide innovative, high-quality healthcare equipment that enhances patient care and supports
                  medical professionals in delivering exceptional healthcare services worldwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the global leader in healthcare equipment manufacturing, recognized for our innovation, quality,
                  and commitment to improving healthcare outcomes for all.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Quality, Innovation, Integrity, and Customer Focus drive everything we do. We believe in building
                  lasting relationships based on trust and excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead NS Medicoplast with vision, expertise, and dedication to
              healthcare excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CEO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Mr. Abdul Manan</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With over 20 years in healthcare industry, Dr. Sharma leads our strategic vision and drives innovation
                  across all product lines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CTO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Priya Patel</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Leading our R&D initiatives, Priya ensures our products incorporate the latest technological
                  advancements in medical equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by international certifications and adherence to the highest
              industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">ISO 13485</h3>
              <p className="text-gray-600 text-sm">Medical Device Quality Management</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">CE Marking</h3>
              <p className="text-gray-600 text-sm">European Conformity Standards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">FDA Approved</h3>
              <p className="text-gray-600 text-sm">US Food & Drug Administration</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WHO GMP</h3>
              <p className="text-gray-600 text-sm">Good Manufacturing Practices</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

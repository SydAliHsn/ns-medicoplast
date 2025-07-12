import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, Download, Phone, Mail } from 'lucide-react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Digital X-Ray System',
      category: 'Diagnostic Equipment',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Advanced digital radiography system with high-resolution imaging capabilities.',
      features: ['High Resolution Imaging', 'Low Radiation Dose', 'Fast Processing', 'DICOM Compatible'],
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Patient Monitor Pro',
      category: 'Monitoring Systems',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Multi-parameter patient monitoring system for critical care environments.',
      features: ['ECG Monitoring', 'Blood Pressure', 'Oxygen Saturation', 'Temperature'],
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Surgical Instrument Set',
      category: 'Surgical Tools',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Comprehensive surgical instrument set made from premium stainless steel.',
      features: ['Stainless Steel', 'Autoclave Safe', 'Ergonomic Design', 'Complete Set'],
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Ultrasound Scanner',
      category: 'Diagnostic Equipment',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Portable ultrasound system with advanced imaging technology.',
      features: ['Portable Design', 'High Frequency Probes', 'Real-time Imaging', 'Data Storage'],
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Ventilator System',
      category: 'Life Support',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Advanced mechanical ventilator for respiratory support in critical care.',
      features: ['Multiple Modes', 'Touch Screen', 'Alarm System', 'Data Logging'],
      rating: 4.9,
    },
    {
      id: 6,
      name: 'Defibrillator Unit',
      category: 'Emergency Equipment',
      price: 'Contact for Quote',
      image: '/placeholder.svg?height=300&width=400',
      description: 'Automated external defibrillator with advanced life support capabilities.',
      features: ['Automated Analysis', 'Voice Prompts', 'Portable', 'Long Battery Life'],
      rating: 4.8,
    },
  ];

  const categories = [
    'All Categories',
    'Diagnostic Equipment',
    'Monitoring Systems',
    'Surgical Tools',
    'Life Support',
    'Emergency Equipment',
  ];

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
              Product Catalogue
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Healthcare Equipment & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Discover our comprehensive range of medical equipment designed to meet the diverse needs of healthcare
              facilities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(' ', '-')}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{product.category}</Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-bold text-blue-600">{product.price}</div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        <Download className="h-4 w-4" />
                      </Button>

                      <Button
                        asChild
                        size="sm"
                      >
                        <Link href={'/contact?type=product-inquiry'}> Inquire Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond manufacturing, we provide comprehensive services to support your healthcare facility's equipment
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  24/7 technical support and troubleshooting assistance for all our equipment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional installation and setup services by certified technicians.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preventive maintenance programs to ensure optimal equipment performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive training programs for medical staff on equipment operation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Need Custom Solutions?</h2>
            <p className="text-xl text-blue-100">
              Our team can develop customized healthcare equipment solutions tailored to your specific requirements and
              budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href="/contact?type=quote-request#message-form">
                  <Phone className="mr-2 h-4 w-4" />
                  Request Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

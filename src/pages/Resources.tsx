
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Download, Play, FileText, Calendar, BookText, TrendingUp, Settings, Users } from 'lucide-react';

const Resources = () => {
  const resourceTypes = [
    { name: "PDFs & Guides", icon: <FileText className="h-6 w-6" />, count: 15 },
    { name: "Templates", icon: <BookText className="h-6 w-6" />, count: 8 },
    { name: "Webinars", icon: <Play className="h-6 w-6" />, count: 12 },
    { name: "Worksheets", icon: <Download className="h-6 w-6" />, count: 6 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "The Complete Strategic Planning Workbook",
      description: "Step-by-step guide to create a winning strategy with templates, worksheets, and real examples.",
      type: "PDF Guide",
      category: "Strategy",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      downloadCount: "2,500+",
      pages: "45 pages",
      featured: true
    },
    {
      id: 2,
      title: "Operations Excellence Assessment Tool",
      description: "Comprehensive audit checklist to identify operational inefficiencies and improvement opportunities.",
      type: "Interactive Tool",
      category: "Operations",
      icon: <Settings className="h-8 w-8 text-primary" />,
      downloadCount: "1,800+",
      pages: "Assessment + Report",
      featured: true
    },
    {
      id: 3,
      title: "Leadership Team Meeting Templates",
      description: "Proven meeting structures and agendas for more productive leadership discussions.",
      type: "Template Pack",
      category: "Leadership",
      icon: <Users className="h-8 w-8 text-primary" />,
      downloadCount: "3,200+",
      pages: "12 templates",
      featured: true
    }
  ];

  const allResources = [
    {
      title: "Digital Transformation ROI Calculator",
      type: "Excel Template",
      category: "Digital",
      description: "Calculate potential returns from digital initiatives before you invest.",
      downloadCount: "1,200+"
    },
    {
      title: "OKR Planning Framework",
      type: "PDF Guide",
      category: "Strategy",
      description: "Set and track objectives that actually drive business results.",
      downloadCount: "2,100+"
    },
    {
      title: "Cost Reduction Opportunity Matrix",
      type: "Worksheet",
      category: "Operations",
      description: "Systematic approach to identifying and prioritizing cost savings.",
      downloadCount: "950+"
    },
    {
      title: "Team Performance Dashboard Template",
      type: "Excel Template",
      category: "Leadership",
      description: "Track team metrics and performance indicators in one place.",
      downloadCount: "1,600+"
    },
    {
      title: "Market Analysis Template",
      type: "PowerPoint",
      category: "Strategy",
      description: "Professional template for competitive and market analysis.",
      downloadCount: "800+"
    },
    {
      title: "Process Mapping Workshop Guide",
      type: "PDF Guide",
      category: "Operations",
      description: "Facilitate process improvement workshops with your team.",
      downloadCount: "1,400+"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Strategic Planning That Actually Works",
      date: "Jan 15, 2025",
      time: "2:00 PM EST",
      presenter: "Alex Thompson, Managing Partner",
      description: "Learn the strategic planning framework used by 100+ successful companies."
    },
    {
      title: "Operations Excellence in Manufacturing",
      date: "Jan 22, 2025",
      time: "1:00 PM EST",
      presenter: "Sarah Mitchell, Operations Director",
      description: "Specific tactics for manufacturing efficiency and quality improvement."
    }
  ];

  return (
    <div>
      <HeroSection
        title="Free Tools to Help You Grow"
        subtitle="Access our proven frameworks, templates, and tools used by successful companies worldwide. Everything you need to implement strategic growth."
        ctaText="Browse All Resources"
        ctaLink="#resources"
      />

      {/* Resource Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Available</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {resourceTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {type.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{type.count} resources</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600">
              Our most popular and comprehensive business tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-xl transition-shadow relative overflow-hidden">
                {resource.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                    FEATURED
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {resource.icon}
                    <Badge variant="secondary">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{resource.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{resource.type}</span>
                    <span>{resource.pages}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.downloadCount} downloads
                    </span>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Access Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section id="resources" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Resources List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>
              <div className="space-y-6">
                {allResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{resource.category}</Badge>
                            <span className="text-sm text-gray-500">{resource.type}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                          <span className="text-xs text-gray-500">{resource.downloadCount} downloads</span>
                        </div>
                        <Button size="sm" className="ml-4">
                          <Download className="h-4 w-4 mr-1" />
                          Get It
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Newsletter Signup */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Get New Resources First</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Be the first to access new templates, guides, and tools as we release them.
                  </p>
                  <div className="space-y-3">
                    <Input type="email" placeholder="Your email address" />
                    <Button className="w-full">Subscribe for Updates</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Webinars */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Webinars
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {upcomingWebinars.map((webinar, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-semibold mb-2">{webinar.title}</h4>
                      <div className="text-sm text-gray-600 mb-2">
                        <p>{webinar.date} at {webinar.time}</p>
                        <p>Presenter: {webinar.presenter}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{webinar.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Register Free
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Implementing?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Tools are great, but execution is everything. Let's discuss how to put these resources to work in your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Implementation Help</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;

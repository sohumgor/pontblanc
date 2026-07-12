
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Factory, Heart, Star, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "TechStart Inc. - 300% Revenue Growth in 8 Months",
    industry: "Startups",
    service: "Strategy",
    icon: <TrendingUp className="h-6 w-6" />,
    problem: "Struggling to scale beyond $2M ARR with unclear growth strategy",
    approach: "Developed comprehensive go-to-market strategy and operational framework",
    outcome: "Achieved $8M ARR within 8 months, secured Series A funding",
    testimonial: "Pontblanc didn't just consult - they became part of our team and transformed our entire business model.",
    author: "Sarah Johnson, CEO",
    tags: ["Strategy", "Growth", "Funding"]
  },
  {
    id: 2,
    title: "MedCare Solutions - 40% Cost Reduction Through Process Optimization",
    industry: "Healthcare",
    service: "Operations",
    icon: <Heart className="h-6 w-6" />,
    problem: "Inefficient patient intake and administrative processes driving up costs",
    approach: "Streamlined workflows, implemented digital systems, trained staff",
    outcome: "Reduced operational costs by 40%, improved patient satisfaction scores",
    testimonial: "The operational improvements allowed us to focus more on patient care while reducing our overhead significantly.",
    author: "Dr. Michael Chen, COO",
    tags: ["Operations", "Healthcare", "Cost Reduction"]
  },
  {
    id: 3,
    title: "GrowthCorp Manufacturing - Digital Transformation Success",
    industry: "Manufacturing",
    service: "Digital",
    icon: <Factory className="h-6 w-6" />,
    problem: "Legacy systems causing production delays and quality issues",
    approach: "Implemented ERP system, automated quality control, digitized workflows",
    outcome: "50% reduction in production time, 25% improvement in quality metrics",
    testimonial: "The digital transformation roadmap they created was game-changing for our manufacturing operations.",
    author: "Emily Rodriguez, Operations Director",
    tags: ["Digital", "Manufacturing", "Automation"]
  },
  {
    id: 4,
    title: "Hope Foundation - Strategic Planning for Maximum Impact",
    industry: "Nonprofits",
    service: "Strategy",
    icon: <Users className="h-6 w-6" />,
    problem: "Limited resources spread across too many initiatives",
    approach: "Developed focused mission strategy, optimized resource allocation",
    outcome: "Doubled program impact while reducing operational overhead by 30%",
    testimonial: "Pontblanc helped us focus our efforts where they matter most, dramatically increasing our community impact.",
    author: "James Wilson, Executive Director",
    tags: ["Strategy", "Nonprofit", "Impact"]
  }
];

const CaseStudies = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Real Clients. <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Real Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped clients achieve breakthrough results across industries. These aren't just case studies—they're proof that strategic execution drives measurable outcomes.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="casestudies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {study.icon}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.service}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Problem</h4>
                    <p className="text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Approach</h4>
                    <p className="text-sm leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Outcome</h4>
                    <p className="text-sm leading-relaxed">{study.outcome}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="italic text-sm text-gray-800 mb-1">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-xs text-gray-500">— {study.author}</cite>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Write Your Own Case Study</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            If you're seeking a hands-on consulting partner to drive growth, efficiency, or transformation—we're ready to help. Let's explore how we can move your business forward.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
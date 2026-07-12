
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Star, Quote, TrendingUp, Factory, Heart, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Pontblanc didn't just consult - they became part of our team and transformed our entire business model. The results speak for themselves: 300% growth in 8 months.",
      author: "Sarah Johnson",
      title: "CEO & Founder",
      company: "TechStart Inc.",
      industry: "Startups",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "300% Revenue Growth",
      timeframe: "8 months"
    },
    {
      id: 2,
      quote: "Their strategic guidance and operational expertise saved us from making costly mistakes. They turned our vision into a profitable reality.",
      author: "Michael Chen",
      title: "Founder",
      company: "GrowthCorp",
      industry: "Manufacturing",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "40% Cost Reduction",
      timeframe: "6 months"
    },
    {
      id: 3,
      quote: "The digital transformation roadmap they created for us was game-changing. We went from struggling with legacy systems to leading our industry in innovation.",
      author: "Emily Rodriguez",
      title: "COO",
      company: "InnovateLab",
      industry: "Healthcare",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "50% Efficiency Gain",
      timeframe: "12 months"
    },
    {
      id: 4,
      quote: "Pontblanc helped us focus our efforts where they matter most, dramatically increasing our community impact while reducing operational overhead.",
      author: "James Wilson",
      title: "Executive Director",
      company: "Hope Foundation",
      industry: "Nonprofits",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "2x Program Impact",
      timeframe: "10 months"
    },
    {
      id: 5,
      quote: "The team's deep understanding of our industry challenges and their practical solutions made all the difference. True partnership, not just consulting.",
      author: "David Park",
      title: "VP Operations",
      company: "Precision Manufacturing",
      industry: "Manufacturing",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "25% Quality Improvement",
      timeframe: "4 months"
    },
    {
      id: 6,
      quote: "From strategy to execution, Pontblanc guided us through every step. Their hands-on approach ensured we actually implemented the changes that mattered.",
      author: "Lisa Chen",
      title: "CEO",
      company: "HealthTech Solutions",
      industry: "Healthcare",
      logo: "/api/placeholder/120/60",
      rating: 5,
      result: "$2M Cost Savings",
      timeframe: "14 months"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Success Stories" },
    { number: "300%", label: "Average Growth" },
    { number: "24mo", label: "Partnership Length" }
  ];

  const industryIcons = {
    "Startups": <TrendingUp className="h-5 w-5" />,
    "Manufacturing": <Factory className="h-5 w-5" />,
    "Healthcare": <Heart className="h-5 w-5" />,
    "Nonprofits": <Users className="h-5 w-5" />
  };

  return (
    <div>
      <HeroSection
        title="What Our Clients Say About Pontblanc"
        subtitle="Real partnerships. Real results. Real testimonials from business leaders who've transformed their companies with our help."
        ctaText="Read Success Stories"
        ctaLink="#testimonials"
      />

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear directly from the leaders we've partnered with
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow relative">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {industryIcons[testimonial.industry as keyof typeof industryIcons]}
                      <Badge variant="secondary">{testimonial.industry}</Badge>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{testimonial.result}</div>
                      <div className="text-sm text-gray-500">in {testimonial.timeframe}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-primary font-medium">{testimonial.title}</div>
                        <div className="text-gray-500 text-sm">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <img 
                          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=60" 
                          alt={`${testimonial.company} logo`}
                          className="h-8 opacity-60"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Across Industries</h2>
            <p className="text-xl text-gray-600">
              Proven results in every sector we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Average Results:</div>
                  <div className="text-gray-600">250% revenue growth</div>
                  <div className="text-gray-600">12 month timeframe</div>
                  <div className="text-gray-600">25+ companies</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Average Results:</div>
                  <div className="text-gray-600">35% cost reduction</div>
                  <div className="text-gray-600">8 month timeframe</div>
                  <div className="text-gray-600">50+ facilities</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Average Results:</div>
                  <div className="text-gray-600">40% efficiency gain</div>
                  <div className="text-gray-600">10 month timeframe</div>
                  <div className="text-gray-600">40+ providers</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Nonprofits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Average Results:</div>
                  <div className="text-gray-600">2x program impact</div>
                  <div className="text-gray-600">9 month timeframe</div>
                  <div className="text-gray-600">35+ organizations</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            See how we can help you achieve similar breakthrough results in your business.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/case-studies">See Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

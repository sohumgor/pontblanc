
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: "All", count: 24 },
    { name: "Growth Strategy", count: 8 },
    { name: "Operations", count: 6 },
    { name: "Leadership", count: 7 },
    { name: "Digital Transformation", count: 3 }
  ];

  const allArticles = [
    {
      id: 1,
      title: "5 Strategic Planning Mistakes That Kill Growth",
      excerpt: "Most companies create strategic plans that look impressive but fail to drive results. Discover the common pitfalls and actionable solutions.",
      category: "Growth Strategy",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 15, 2024",
      author: "Sohum G.",
      featured: true
    },
    {
      id: 2,
      title: "The Operational Excellence Framework",
      excerpt: "Transform your operations with this proven framework used by 100+ successful companies to achieve breakthrough efficiency.",
      category: "Operations",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 12, 2024",
      author: "Ruchi G.",
      featured: true
    },
    {
      id: 3,
      title: "Leading Through Digital Transformation",
      excerpt: "Change management insights from real executive transformations across industries. Learn what actually works.",
      category: "Digital Transformation",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 10, 2024",
      author: "Chetan G.",
      featured: true
    },
    {
      id: 4,
      title: "Building High-Performance Teams",
      excerpt: "A comprehensive guide to creating teams that consistently deliver exceptional results and drive organizational success.",
      category: "Leadership",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 8, 2024",
      author: "Sohum G.",
      featured: false
    },
    {
      id: 5,
      title: "Data-Driven Decision Making",
      excerpt: "How to build a culture of analytics and use data to make better strategic decisions that drive business growth.",
      category: "Growth Strategy",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 5, 2024",
      author: "Ruchi G.",
      featured: false
    },
    {
      id: 6,
      title: "Scaling Operations Efficiently",
      excerpt: "Proven strategies for scaling your operations without sacrificing quality or breaking your budget.",
      category: "Operations",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 3, 2024",
      author: "Chetan G.",
      featured: false
    },
    {
      id: 7,
      title: "The Future of Remote Leadership",
      excerpt: "Adapting leadership styles for distributed teams and building strong remote cultures that deliver results.",
      category: "Leadership",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 1, 2024",
      author: "Sohum G.",
      featured: false
    },
    {
      id: 8,
      title: "Customer-Centric Growth Strategies",
      excerpt: "How to build growth strategies that put customers at the center and create sustainable competitive advantages.",
      category: "Growth Strategy",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Nov 28, 2024",
      author: "Ruchi G.",
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < filteredArticles.length;

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleArticles(6);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Insights That Drive <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Better Decisions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strategic insights, operational wisdom, and leadership guidance from our team of ex-operators. Real advice from real experience.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.name)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl"
                    : "border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
              <Link 
                key={article.id}
                to={`/blog/${article.id}`}
                className="block"
              >
                <Card 
                  className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white rounded-3xl cursor-pointer ${
                    article.featured ? 'ring-2 ring-blue-200' : ''
                  }`}
                >
                  <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {article.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                      <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Read More <ArrowRight className="h-4 w-4 ml-1 inline" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreArticles && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreArticles}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Load More Articles
              </Button>
            </div>
          )}

          {/* No more articles message */}
          {!hasMoreArticles && filteredArticles.length > 6 && (
            <div className="text-center mt-8">
              <p className="text-gray-600">You've reached the end of our articles!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get weekly strategic insights delivered to your inbox. Join 2,500+ business leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 flex-1 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Implement CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Implement These Strategies</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Move beyond reading to execution. Let's discuss how these insights apply to your business.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/contact">Schedule a Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
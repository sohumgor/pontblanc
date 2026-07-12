import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, Twitter, Linkedin, Facebook, Copy, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const shareArticle = (platform: string) => {
    const article = allArticles.find(a => a.id === parseInt(id || '0'));
    if (!article) return;

    const url = window.location.href;
    const title = article.title;
    const text = article.excerpt;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: "Link Copied!",
            description: "Article link has been copied to your clipboard.",
          });
        }).catch(() => {
          toast({
            title: "Copy Failed",
            description: "Please copy the link manually from the address bar.",
            variant: "destructive",
          });
        });
        break;
    }
  };

  // Sample article data - in a real app, this would come from an API
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
      featured: true,
      content: `
        <h2>The Strategic Planning Paradox</h2>
        <p>Every year, countless organizations invest significant time and resources into creating strategic plans that look impressive on paper but fail to deliver meaningful results. The disconnect between planning and execution is one of the most persistent challenges in business today.</p>
        
        <h3>Mistake #1: Starting with Solutions Instead of Problems</h3>
        <p>Most strategic plans begin with predetermined solutions rather than a deep understanding of the actual problems facing the organization. This backwards approach leads to strategies that address symptoms rather than root causes.</p>
        
        <h3>Mistake #2: Ignoring Resource Constraints</h3>
        <p>Ambitious strategies often fail because they don't account for realistic resource limitations. Organizations set goals that require capabilities they don't possess and can't realistically acquire within the timeframe.</p>
        
        <h3>Mistake #3: Lack of Clear Accountability</h3>
        <p>Without clear ownership and accountability structures, even the best strategies become exercises in wishful thinking. Every initiative needs a champion and clear success metrics.</p>
        
        <h3>Mistake #4: Underestimating Implementation Complexity</h3>
        <p>The gap between strategy and execution is where most plans fail. Organizations underestimate the complexity of change management and the resistance they'll encounter.</p>
        
        <h3>Mistake #5: Creating Plans That Can't Adapt</h3>
        <p>In today's rapidly changing business environment, rigid strategic plans become obsolete quickly. The most successful strategies build in flexibility and regular review cycles.</p>
        
        <h2>Building Strategies That Actually Work</h2>
        <p>The key to effective strategic planning is to focus on understanding your current reality, identifying the highest-impact opportunities, and creating executable plans with clear ownership and metrics.</p>
      `
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
      featured: true,
      content: `
        <h2>What is Operational Excellence?</h2>
        <p>Operational excellence is the systematic approach to achieving sustainable competitive advantage through superior operational performance. It's not just about efficiency—it's about creating a culture of continuous improvement that drives long-term success.</p>
        
        <h3>The Four Pillars of Operational Excellence</h3>
        
        <h4>1. Process Optimization</h4>
        <p>Start by mapping your core processes and identifying bottlenecks, redundancies, and inefficiencies. The goal is to create smooth, predictable workflows that consistently deliver value.</p>
        
        <h4>2. Quality Management</h4>
        <p>Implement robust quality control systems that catch issues early and prevent them from reaching customers. This includes both product quality and service delivery quality.</p>
        
        <h4>3. Performance Measurement</h4>
        <p>Establish clear metrics and KPIs that align with your strategic objectives. What gets measured gets managed, and what gets managed gets improved.</p>
        
        <h4>4. Continuous Improvement Culture</h4>
        <p>Foster an environment where employees at all levels are empowered to identify and solve problems. This creates a self-reinforcing cycle of improvement.</p>
        
        <h2>Implementation Roadmap</h2>
        <p>Successfully implementing operational excellence requires a systematic approach. Start with process mapping, establish baseline metrics, and then work systematically through each area of improvement.</p>
      `
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
      featured: true,
      content: `
        <h2>The Digital Transformation Imperative</h2>
        <p>Digital transformation isn't just about technology—it's about fundamentally reimagining how your organization creates and delivers value in the digital age.</p>
        
        <h3>Key Leadership Principles</h3>
        
        <h4>Start with Strategy, Not Technology</h4>
        <p>The most successful digital transformations begin with a clear understanding of business objectives and customer needs, then work backwards to identify the right technology solutions.</p>
        
        <h4>Build Digital Capabilities</h4>
        <p>Invest in developing internal capabilities rather than relying solely on external vendors. This ensures sustainable transformation and reduces long-term dependency.</p>
        
        <h4>Foster a Digital Culture</h4>
        <p>Cultural change is often the hardest part of digital transformation. Leaders must model digital behaviors and create incentives for adoption.</p>
        
        <h2>Common Pitfalls to Avoid</h2>
        <p>Many digital transformations fail because leaders underestimate the complexity of change management or try to do too much at once. Success requires patience, persistence, and a willingness to iterate.</p>
      `
    }
  ];

  const article = allArticles.find(a => a.id === parseInt(id || '0'));
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/blog')} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Get related articles (exclude current article)
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 animate-fade-in">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="text-gray-600">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                  <ChevronDown className="ml-2 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => shareArticle('twitter')} className="cursor-pointer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Share on Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareArticle('linkedin')} className="cursor-pointer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareArticle('facebook')} className="cursor-pointer">
                  <Facebook className="mr-2 h-4 w-4" />
                  Share on Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareArticle('copy')} className="cursor-pointer">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1">
              {article.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none mb-20 text-gray-800 leading-relaxed prose-blue"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            lineHeight: '1.8',
          }}
        />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="pt-12 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 flex items-center justify-center gap-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                Related Articles
              </h2>
              <p className="text-gray-600">Continue exploring {article.category.toLowerCase()} insights</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Card 
                  key={relatedArticle.id}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white rounded-3xl cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedArticle.id}`)}
                >
                  <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500" />
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedArticle.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedArticle.readTime}
                      </div>
                      <span className="text-blue-600 font-semibold">
                        Read More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogArticle;
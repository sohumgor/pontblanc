import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@pontblanc.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const handleNewsletterSignup = async () => {
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const subject = encodeURIComponent('Newsletter signup');
      const body = encodeURIComponent(`Please subscribe this email to the newsletter:\n${email.trim()}`);
      window.location.href = `mailto:info@pontblanc.com?subject=${subject}&body=${body}`;

      toast({
        title: "Signup Ready",
        description: "Your email client opened with a subscription request.",
      });
      setEmail('');
    } catch (error: unknown) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PONTBLANC</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional consulting that partners with growth-minded businesses to optimize strategy, operations, and innovation execution. We deliver results—not reports.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleLinkedInClick}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={handleInstagramClick}
                className="text-gray-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={handleEmailClick}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services/strategy" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/casestudies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">Get weekly business insights from our experts.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSignup()}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" 
              />
              <Button 
                size="sm" 
                className="w-full" 
                onClick={handleNewsletterSignup}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 PontBlanc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



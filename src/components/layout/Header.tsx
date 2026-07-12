
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      navigate(path, { replace: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      navigate(path);
    }
  };

  const handleMobileNavClick = (path: string) => {
    setIsMenuOpen(false);
    handleNavClick(path);
  };

  const navLinkClasses = `px-2 py-2 text-sm font-medium transition-all duration-200
    rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-md hover:scale-[1.03]
    focus:outline-none focus:text-blue-600 focus:bg-gray-50 focus:shadow-md focus:scale-[1.03]`;

  const activeLinkClasses = 'text-blue-600 bg-gray-100 shadow-md scale-[1.03]';

  const mobileNavLinkClasses = `block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 mx-2`;
  const activeMobileLinkClasses = 'text-blue-600 bg-blue-50 font-semibold';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl sm:text-2xl font-bold text-primary">PontBlanc</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex w-full justify-center">
            <NavigationMenuList className="flex gap-6 items-center h-full">
              <div className="flex items-center gap-6">
                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/')}
                    className={`${navLinkClasses} ${isActive('/') ? activeLinkClasses : ''}`}
                  >
                    Home
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/about')}
                    className={`${navLinkClasses} ${isActive('/about') ? activeLinkClasses : ''}`}
                  >
                    About
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/services')}
                    className={`${navLinkClasses} ${isActive('/services') ? activeLinkClasses : ''}`}
                  >
                    Services
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/industries')}
                    className={`${navLinkClasses} ${isActive('/industries') ? activeLinkClasses : ''}`}
                  >
                    Industries
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/casestudies')}
                    className={`${navLinkClasses} ${isActive('/casestudies') ? activeLinkClasses : ''}`}
                  >
                    Case Studies
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/blog')}
                    className={`${navLinkClasses} ${isActive('/blog') ? activeLinkClasses : ''}`}
                  >
                    Blog
                  </button>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg">
            <div className="space-y-2">
              <button
                onClick={() => handleMobileNavClick('/')}
                className={`${mobileNavLinkClasses} ${isActive('/') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Home
              </button>
              <button
                onClick={() => handleMobileNavClick('/about')}
                className={`${mobileNavLinkClasses} ${isActive('/about') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick('/services')}
                className={`${mobileNavLinkClasses} ${isActive('/services') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Services
              </button>
              <button
                onClick={() => handleMobileNavClick('/industries')}
                className={`${mobileNavLinkClasses} ${isActive('/industries') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Industries
              </button>
              <button
                onClick={() => handleMobileNavClick('/casestudies')}
                className={`${mobileNavLinkClasses} ${isActive('/casestudies') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Case Studies
              </button>
              <button
                onClick={() => handleMobileNavClick('/blog')}
                className={`${mobileNavLinkClasses} ${isActive('/blog') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Blog
              </button>
              <button
                onClick={() => handleMobileNavClick('/contact')}
                className={`${mobileNavLinkClasses} ${isActive('/contact') ? activeMobileLinkClasses : ''} w-full text-left`}
              >
                Contact
              </button>
              
              <div className="pt-4 px-2">
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl py-3 text-base font-semibold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



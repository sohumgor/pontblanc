
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink, backgroundImage, children }: HeroSectionProps) => {
  return (
    <section 
      className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20 lg:py-32"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            {subtitle}
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Factory,
  Heart,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const gradientClassNames = (norm: string, hover: string) =>
  `bg-gradient-to-br ${norm} hover:${hover} transition-transform duration-500`;

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const industries = [
    {
      id: 'startups',
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: 'Startups',
      tagline: 'Accelerate growth with strategic clarity.',
      description: 'Scale from idea to execution with proven frameworks and experienced guidance.',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      painPoints: [
        'Limited resources and runway pressure',
        'Rapid scaling challenges',
        'Market validation and product-market fit',
        'Team building and leadership development'
      ],
      solutions: [
        'Strategic roadmap development',
        'Operational efficiency optimization',
        'Growth strategy and market positioning',
        'Leadership coaching and team structure'
      ],
      detailedDescription: 'Startups face unique challenges that require agile, resourceful solutions...'
    },
    {
      id: 'manufacturing',
      icon: <Factory className="h-10 w-10 text-white" />,
      title: 'Manufacturing',
      tagline: 'Optimize systems for performance and precision.',
      description: 'Streamline operations, reduce waste, and increase efficiency across your production line.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      painPoints: [
        'Supply chain disruptions and complexity',
        'Operational inefficiencies and waste',
        'Quality control and compliance challenges',
        'Technology integration and modernization'
      ],
      solutions: [
        'Supply chain optimization',
        'Lean manufacturing implementation',
        'Digital transformation and automation',
        'Quality management systems'
      ],
      detailedDescription: 'Manufacturing companies need operational excellence to remain competitive...'
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-10 w-10 text-white" />,
      title: 'Healthcare',
      tagline: 'Increase patient impact through operational strategy.',
      description: 'Improve patient outcomes while optimizing costs and operational efficiency.',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      painPoints: [
        'Rising costs and financial pressures',
        'Regulatory compliance complexity',
        'Patient experience and satisfaction',
        'Staff retention and operational efficiency'
      ],
      solutions: [
        'Cost optimization and revenue cycle management',
        'Process improvement and workflow optimization',
        'Technology integration and digital health',
        'Change management and staff development'
      ],
      detailedDescription: 'Healthcare organizations must balance quality care with operational efficiency...'
    },
    {
      id: 'nonprofits',
      icon: <Users className="h-10 w-10 text-white" />,
      title: 'Nonprofits',
      tagline: 'Strategic planning to maximize mission delivery.',
      description: 'Amplify your impact with strategic planning and operational excellence.',
      gradient: 'from-purple-500 via-violet-500 to-indigo-600',
      painPoints: [
        'Limited funding and resource constraints',
        'Measuring and demonstrating impact',
        'Board governance and stakeholder management',
        'Program effectiveness and scalability'
      ],
      solutions: [
        'Strategic planning and impact measurement',
        'Fundraising strategy and donor development',
        'Operational efficiency and program optimization',
        'Board development and governance'
      ],
      detailedDescription: 'Nonprofits need to maximize their impact with limited resources...'
    }
  ];

  const scrollToIndustry = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Industry‑Tested Solutions{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Tailored to Your Sector.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every industry has unique challenges. Our sector-specific expertise ensures strategies that work in your world, not just in theory.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToIndustry('startups')}
          >
            Find Your Industry
          </Button>
        </div>
      </section>

      {/* Refined Overview Grid with hover animation */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Sectors{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep expertise across diverse industries
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
          {industries.map(ind => (
            <div
              key={ind.id}
              onClick={() => scrollToIndustry(ind.id)}
              className={`group cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-3xl shadow-lg p-8 bg-gradient-to-br ${ind.gradient} text-white`}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{ind.title}</h3>
              <p className="font-semibold text-base mb-4">{ind.tagline}</p>
              <p className="text-base opacity-90 leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Detailed Sections */}
      {industries.map((ind, idx) => (
        <section key={ind.id} id={ind.id} className="py-20 relative overflow-hidden bg-white">
          <div
            className={`absolute inset-0 ${
              idx % 2 === 0
                ? 'bg-white'
                : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100'
            }`}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 ? 'lg:order-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${ind.gradient} rounded-full text-white shadow-lg`}>
                    {ind.icon}
                  </div>
                  <h2 className={`ml-4 text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${ind.gradient}`}>
  {ind.title}
</h2>

                </div>
                <p className="text-lg text-gray-700 mb-6">{ind.detailedDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Common Challenges:</h4>
                    <ul className="space-y-3">
                      {ind.painPoints.map((pt, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600 text-sm">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Our Solutions:</h4>
                    <ul className="space-y-3">
                      {ind.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600 text-sm">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button
                  size="lg"
                  asChild
                  className={`bg-gradient-to-r ${ind.gradient} text-white rounded-full shadow-xl transform hover:scale-105 transition-all duration-300`}
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Speak to a Sector Specialist
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className={idx % 2 ? 'lg:order-1' : ''}>
                <div
                  className={`relative p-8 bg-gradient-to-br ${ind.gradient} rounded-2xl shadow-2xl text-white transform hover:scale-[1.05] transition-transform duration-500`}
                >
                  <div className="absolute top-4 right-4 opacity-20 text-6xl">{ind.icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Success Story</h4>
                  <p className="text-white/90 mb-6">
                    "Pontblanc's industry expertise in {ind.title.toLowerCase()} helped us navigate complex challenges and achieve breakthrough results."
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center text-sm">
                      <span>Client Satisfaction</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-white h-2 rounded-full w-[98%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Updated Why Expertise section (matches Services) */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Why Industry Expertise <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Matters</span></h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Generic solutions deliver generic results. We speak your industry's language.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Users className="h-8 w-8 text-white" />,
              title: "Industry‑Specific Challenges",
              description: "We understand the unique pain points, regulations, and competitive pressures in your sector.",
              gradient: "from-white/20 via-white/10 to-white/0"
            },
            {
              icon: <Rocket className="h-8 w-8 text-white" />,
              title: "Proven Solutions",
              description: "Our strategies are tested and refined through years of success in your industry.",
              gradient: "from-white/20 via-white/10 to-white/0"
            },
            {
              icon: <Factory className="h-8 w-8 text-white" />,
              title: "Faster Implementation",
              description: "Skip the learning curve. We know what works and can implement solutions quickly.",
              gradient: "from-white/20 via-white/10 to-white/0"
            }
          ].map((b, i) => (
            <div key={i} className="text-center">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-150`}></div>
                <div className="relative bg-white/10 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{b.title}</h3>
              <p className="text-white/90">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA matching Services’ style */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Work with Industry Experts?
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Speak to a sector specialist and explore how our tailored solutions can help your business overcome its biggest challenges.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Speak to a Sector Specialist
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.7; transform:scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Industries;



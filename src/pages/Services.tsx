import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Settings, Zap, ArrowRight, CheckCircle, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const getGradientColors = (gradientClass: string) => {
  switch(gradientClass) {
    case "from-blue-500 via-blue-600 to-indigo-700":
      return "#3b82f6, #2563eb, #4338ca";
    case "from-blue-600 via-indigo-600 to-purple-700":
      return "#2563eb, #4f46e5, #6d28d9";
    case "from-emerald-500 via-green-600 to-teal-700":
      return "#10b981, #15803d, #115e59";
    case "from-emerald-600 via-teal-600 to-cyan-700":
      return "#059669, #0d9488, #0e7490";
    case "from-purple-500 via-violet-600 to-indigo-700":
      return "#8b5cf6, #7c3aed, #4338ca";
    case "from-purple-600 via-indigo-600 to-blue-700":
      return "#7c3aed, #4f46e5, #1e40af";
    default:
      return "transparent, transparent, transparent";
  }
};

const gradientToClassNames = (normal: string, hover: string) => {
  const normalClasses = normal.split(" ").join(" ");
  const hoverClasses = hover
    .split(" ")
    .map(c => `hover:${c}`)
    .join(" ");

  return `bg-gradient-to-br ${normalClasses} ${hoverClasses}`;
};

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'strategy',
      icon: <Target className="h-12 w-12 text-white animate-pulse" />,
      title: "Strategy Consulting",
      headline: "Clarity and Direction for Sustainable Growth",
      description: "We help leadership teams clarify objectives, prioritize initiatives, and create scalable strategies.",
      bullets: [
        "Strategic planning",
        "Market positioning",
        "Business model design"
      ],
      ctaText: "Get a Strategy Session",
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      hoverGradient: "from-blue-600 via-indigo-600 to-purple-700",
      detailedDescription: "Our strategy consulting approach combines proven frameworks with deep industry knowledge to help you navigate complex business challenges. We work alongside your leadership team to develop actionable strategies that drive sustainable growth and competitive advantage.",
      process: [
        "Current state assessment and gap analysis",
        "Market opportunity identification",
        "Strategic roadmap development",
        "Implementation planning and support"
      ],
      textColor: "text-blue-700",
      subTextColor: "text-gray-800",
      buttonGradient: "from-blue-600 to-cyan-500",
      buttonHoverGradient: "from-blue-700 to-cyan-600",
    },
    {
      id: 'operations',
      icon: <Settings className="h-12 w-12 text-white animate-pulse" />,
      title: "Operations Consulting",
      headline: "Operational Efficiency That Drives Profit",
      description: "From supply chain to staffing, we optimize workflows that increase productivity and reduce cost.",
      bullets: [
        "Process improvement",
        "Team structure & delegation",
        "Cost reduction strategies"
      ],
      ctaText: "Optimize My Operations",
      gradient: "from-emerald-500 via-green-600 to-teal-700",
      hoverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
      detailedDescription: "Transform your operations from cost centers into profit drivers. Our operations consulting focuses on streamlining processes, optimizing resource allocation, and building systems that scale with your growth.",
      process: [
        "Operational audit and bottleneck identification",
        "Process redesign and optimization",
        "Team restructuring and role clarification",
        "Performance metrics and monitoring systems"
      ],
      textColor: "text-emerald-700",
      subTextColor: "text-gray-800",
      buttonGradient: "from-emerald-600 to-teal-500",
      buttonHoverGradient: "from-emerald-700 to-teal-600",
    },
    {
      id: 'digital',
      icon: <Zap className="h-12 w-12 text-white animate-pulse" />,
      title: "Digital Transformation",
      headline: "Modernize to Compete and Win",
      description: "We guide your tech strategy and digital roadmap—from automation to system integration.",
      bullets: [
        "Digital audit",
        "Automation tools",
        "CRM/ERP implementation"
      ],
      ctaText: "Start Your Digital Audit",
      gradient: "from-purple-500 via-violet-600 to-indigo-700",
      hoverGradient: "from-purple-600 via-indigo-600 to-blue-700",
      detailedDescription: "Navigate the digital landscape with confidence. Our digital transformation services help you leverage technology to improve efficiency, enhance customer experience, and create new revenue streams.",
      process: [
        "Digital maturity assessment",
        "Technology stack evaluation",
        "Implementation roadmap creation",
        "Change management and training"
      ],
      textColor: "text-purple-700",
      subTextColor: "text-gray-800",
      buttonGradient: "from-purple-600 to-indigo-500",
      buttonHoverGradient: "from-purple-700 to-indigo-600",
    }
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveService(serviceId);
    }
  };

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Focused",
      description: "We measure success by your outcomes, not our deliverables.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Hands-On Implementation",
      description: "We don't just advise—we roll up our sleeves and help you execute.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Rapid Results",
      description: "See meaningful improvements in weeks, not months.",
      gradient: "from-purple-400 to-violet-600"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Core Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Three specialized areas. Unlimited potential for growth.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden shadow-md transition-transform duration-500 hover:scale-[1.03] group border-0 cursor-pointer flex flex-col ${gradientToClassNames(service.gradient, service.hoverGradient)}`}
                onClick={() => scrollToService(service.id)}
              >
                {/* Removed the absolute div with inline background gradient */}
                <div className="relative flex flex-col flex-grow bg-transparent">
                  <CardHeader className="text-center text-white">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-white/90">
                      {service.headline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-white flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-white/80">{service.description}</p>

                      <ul className="space-y-3 mt-4">
                        {service.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-white/90"
                          >
                            <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center mt-6">
                      <div className="group flex items-center justify-center text-white/90 font-semibold px-6 py-2 rounded-lg cursor-pointer select-none transition duration-300 hover:bg-white/20">
                        <span className="group-hover:text-white underline decoration-white/60 decoration-2 underline-offset-4 transition-colors duration-300">
                          Learn More
                        </span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections with colors and animations */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 relative overflow-hidden bg-white"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              index % 2 === 0
                ? "from-white via-blue-50 to-cyan-50"
                : "from-blue-50 via-cyan-50 to-indigo-100"
            }`}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 rounded-full text-white mr-4 shadow-lg bg-gradient-to-r ${service.gradient}`}
                  >
                    {service.icon}
                  </div>
                  <h2
                    className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                  >
                    {service.title}
                  </h2>
                

                </div>
                <h3 className={`text-3xl md:text-4xl font-black mb-4 ${service.textColor}`}>
                  {service.headline}
                </h3>
                <p className={`text-lg mb-6 ${service.subTextColor}`}>
                  {service.detailedDescription}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className={`text-xl font-semibold mb-4 ${service.textColor}`}>
                    Our Process:
                  </h4>
                  <ul className="space-y-3">
                    {service.process.map((step, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start ${service.subTextColor}`}
                      >
                        <CheckCircle
                          className={`h-5 w-5 mr-3 flex-shrink-0 ${service.textColor.replace(
                            "text-",
                            "text-opacity-90 "
                          )}`}
                        />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  asChild
                  className={`bg-gradient-to-r ${service.buttonGradient} hover:${service.buttonHoverGradient} text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0`}
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    {service.ctaText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className={`relative p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${service.gradient} transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] cursor-pointer key-benefits-hover`}
                >
                  <div className="text-white">
                    <h4 className="text-xl font-semibold mb-4">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-white/90"
                        >
                          <Sparkles className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                      <p className="text-sm text-white/80">
                        "Working with Pontblanc transformed our {service.title.toLowerCase()} approach and delivered measurable results within months."
                      </p>
                      <p className="text-xs text-white/60 mt-2">- Client Testimonial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Pontblanc */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
            Why Choose <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Pontblanc</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Target className="h-8 w-8 text-white" />,
                title: "Results-Focused",
                description: "We measure success by your outcomes, not our deliverables.",
                gradient: "from-white/20 via-white/10 to-white/0"
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: "Hands-On Implementation",
                description: "We don't just advise—we roll up our sleeves and help you execute.",
                gradient: "from-white/20 via-white/10 to-white/0"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                title: "Rapid Results",
                description: "See meaningful improvements in weeks, not months.",
                gradient: "from-white/20 via-white/10 to-white/0"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-150`}></div>
                  <div className={`relative bg-white/10 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Work With Us CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Get Started
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Whether you want to clarify your strategy, streamline operations, or digitize your business, we’re here to help.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      <style>
        {`
          /* Pulse animation for icons */
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }
          .animate-pulse {
            animation-name: pulse;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }

          /* Hover animation for Key Benefits box */
          .key-benefits-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Services;







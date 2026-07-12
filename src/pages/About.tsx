import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const team = [
  {
    name: "Sohum G.",
    title: "Founder and Strategy Partner",
    bio: "Former McKinsey consultant with 15 years of strategy and operations experience across Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Ruchi G.",
    title: "Operations Director",
    bio: "Ex-Amazon operations leader specializing in process optimization and digital transformation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chetan G.",
    title: "Strategy Partner",
    bio: "Former startup founder and Bain consultant with expertise in growth strategy and business model innovation.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const values = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Clarity",
    description: "We cut through complexity to provide clear, actionable insights that drive real business results."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Accountability",
    description: "We take ownership of outcomes and work alongside you to ensure successful implementation."
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Impact",
    description: "We measure success by the tangible improvements we create in your business performance."
  }
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
    
      
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
  </div>
  <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
      We're Not Just Advisors.<span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"> We're Execution Partners.</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
      At PontBlanc, we believe strategy should lead to action, bridging the gap between big ideas and <span className="text-blue-600 font-semibold">measurable results</span>.
    </p>
    <div className="flex justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <Link to="/contact" className="flex items-center gap-2">
          Explore Services
        </Link>
      </Button>
    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To empower businesses with strategic clarity and operational excellence, transforming ambitious visions into sustainable, measurable results. We don't just provide recommendations—we partner with you to ensure successful execution.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Pontblanc was founded in 2018 by a team of former McKinsey consultants and Fortune 500 executives who saw a gap in the consulting industry. We’re ex-operators who understand the real-world execution challenges—and partner with businesses to solve them. Today, we’ve helped over 150 companies achieve breakthrough results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-6 transform rotate-3 hover:rotate-6 transition-transform duration-500 shadow-2xl">
                <div className="bg-white rounded-2xl h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="chicago.jpeg"
                    alt="Team collaboration"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Meet the <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <div className="p-6 flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Work With Us CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Work With Us</span>?
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

export default About;



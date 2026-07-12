
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our expertise spans multiple industries including manufacturing, healthcare, nonprofits, and technology companies."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing is customized based on the scope and complexity of your project. We offer both project-based pricing and retainer arrangements. Contact us for a personalized quote."
    },
    {
      question: "What's your typical engagement length?",
      answer: "Engagements typically range from 3-12 months, depending on the project scope. We focus on delivering measurable results quickly while ensuring sustainable implementation."
    },
    {
      question: "Do you help with implementation?",
      answer: "Absolutely. Unlike traditional consulting firms, we don't just provide recommendations—we roll up our sleeves and help you execute. Implementation support is a core part of our service offering."
    },
    {
      question: "What makes Pontblanc different from other consulting firms?",
      answer: "We're execution partners, not just advisors. Our team consists of ex-operators who have actually run businesses and departments. We measure success by your outcomes, not our deliverables."
    },
    {
      question: "Do you offer remote consulting services?",
      answer: "Yes, we work with clients both on-site and remotely. Our collaborative approach ensures effective partnership regardless of location, using modern tools and communication methods."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <HeroSection
        title="Your Questions, Answered"
        subtitle="Get clarity on how Pontblanc can help transform your business challenges into growth opportunities."
        ctaText="Still Have Questions? Contact Us"
        ctaLink="/contact"
      />

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <CardDescription className="text-base">{faq.answer}</CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss your specific business challenges and how we can help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

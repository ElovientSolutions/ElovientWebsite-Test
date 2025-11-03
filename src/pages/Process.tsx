import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, LineChart, Code, CheckCircle, Rocket } from "lucide-react";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business needs, challenges, and goals through in-depth consultations with your key stakeholders.",
      details: [
        "Requirements gathering and analysis",
        "Stakeholder interviews",
        "Current systems evaluation",
        "Business process mapping",
      ],
    },
    {
      step: 2,
      icon: LineChart,
      title: "Strategy & Planning",
      description:
        "Based on our findings, we design the right solution for your goals, creating a comprehensive roadmap for implementation.",
      details: [
        "Solution architecture design",
        "Technology stack selection",
        "Project scope definition",
        "Timeline and milestone planning",
      ],
    },
    {
      step: 3,
      icon: Code,
      title: "Development & Implementation",
      description:
        "Our agile development process ensures transparent, iterative delivery with regular feedback cycles to keep you informed.",
      details: [
        "Agile sprint planning",
        "Iterative development cycles",
        "Regular progress updates",
        "Continuous integration",
      ],
    },
    {
      step: 4,
      icon: CheckCircle,
      title: "Testing & Optimization",
      description:
        "Comprehensive testing guarantees a high-quality, secure, and performant solution before deployment.",
      details: [
        "Functional and non-functional testing",
        "Security testing and audits",
        "Performance optimization",
        "User acceptance testing",
      ],
    },
    {
      step: 5,
      icon: Rocket,
      title: "Deployment & Support",
      description:
        "After successful deployment, we provide ongoing support, maintenance, and enhancements to ensure long-term success.",
      details: [
        "Smooth deployment strategy",
        "Knowledge transfer and training",
        "Ongoing maintenance and support",
        "Continuous monitoring and updates",
      ],
    },
  ];

  const trustReasons = [
    {
      title: "Agile Development Approach",
      description: "Faster turnaround with flexible engagement models",
    },
    {
      title: "Scalable & Cost-Effective Solutions",
      description: "Pay only for what you need",
    },
    {
      title: "Diverse Expertise",
      description: "A vast talent pool of developers, designers, & consultants",
    },
    {
      title: "Secure & Reliable Software",
      description: "Compliant with industry standards",
    },
    {
      title: "User-Centered Design Focus",
      description: "Ensuring seamless, intuitive, and engaging experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Our Process | Elovient Solutions"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="software development process, agile development, IT consulting, custom software, enterprise solutions, software testing, deployment support, digital transformation"
        url="https://www.elovient.com/process"
        image="/lovable-uploads/3c9a4f8e-2b1d-4a9c-8e7f-5d2b6e4a1f9b.png"
      />
      <Navbar />

              <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            How We Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven development process ensures successful outcomes,
            transparent communication, and value-driven solutions
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Continuous vertical line - now behind everything with z-index-0 */}
          <div className="absolute left-[2.25rem] top-16 bottom-20 w-1 bg-gradient-to-b from-primary to-purple-200 z-0"></div>

          {processSteps.map((step, index) => (
            <div key={step.step} className="mb-20 relative">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Step number and icon - slightly higher z-index than the line */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Step content - highest z-index to appear above everything */}
                <div
                  className={`bg-gray-50 rounded-xl p-8 shadow-sm flex-grow relative z-20
                  ${
                    index % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary rounded text-sm font-medium mb-3">
                        Step {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                    </div>
                    <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-inner">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Key Activities:
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-700"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Businesses Trust Us */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-10 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Elovient Solutions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="inline-flex items-center px-6">
              <Link to="/contact">Get Started With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

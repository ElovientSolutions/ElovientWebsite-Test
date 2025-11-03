import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  Rocket,
  Code,
  Database,
  Shield,
  Layers,
  LineChart,
  Layout,
    ChartBar,
  Award,
} from "lucide-react";

const About = () => {
  const whyChooseUs = [
    {
      icon: Code,
      title: "Expert-Led Digital Transformation",
      description:
        "We modernize legacy systems and implement cloud, AI, IoT, and automation solutions–driven by clear business goals and built for long-term impact.",
    },
    {
      icon: Rocket,
      title: "Enterprise System Integration",
      description:
        "We connect legacy systems, SaaS platforms, APIs, and custom applications into a unified ecosystem–enabling seamless data flow, process automation, and real-time visibility across the business.",
    },
    {
      icon: Shield,
      title: "Custom Software Development",
      description: "We design, build, and deploy tailored software solutions – spanning web, mobile, and enterprise platforms – built to fit your specific workflows, user needs, and long-term goals.",
    },
    {
      icon: Users,
      title: "Scalable, Agile Delivery",
      description:
        "Our agile delivery model and on-demand tech teams enable faster execution, cost efficiency, and the ability to scale solutions as your business evolves.",
    },
    {
      icon: ChartBar,
      title: "Intelligent Data & AI Solutions",
      description:
        "We turn raw data into actionable insights using analytics, automation, and AI–enabling AI-powered decisions, predictive capabilities, and process optimization.",
    },
    {
      icon: Award,
      title: "Trusted, Independent Technology Partnership",
      description:
        "We stay invested beyond delivery – offering long-term support, unbiased technology advisory, and scalable solutions aligned with your evolving business goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="About Us | Elovient Solutions"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="software development, AI solutions, enterprise software, UX design, custom software, IT consulting, digital transformation, scalable solutions, agile development"
        url="https://www.elovient.com/about"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Who We Are Section */}
        <div className="mb-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              About Us
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Elovient is a software engineering and technology consulting company that helps businesses simplify complexity, modernize infrastructure, and unlock growth through tailored digital systems. We specialize in enterprise platforms, system integrations, and advisory-led software delivery.
            </p>
            <p className="text-lg text-gray-700">
            Our flexible delivery model combines in-house expertise with a curated network of engineers, solution architects, and trusted vendors – giving clients the agility of outsourcing, without compromising on control or quality.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-stretch gap-10">
            <div className="md:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-50 p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700">
                  To provide agile, scalable, and efficient software and UX
                  solutions that empower businesses across industries through
                  technology-driven innovation and human-centered design.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-lg text-gray-700">
                  We believe in collaborative partnerships with our clients,
                  understanding their unique challenges and delivering tailored
                  solutions that drive real business value through innovation
                  and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart & Our Focus Areas Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="md:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-sm h-full flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We don't believe in one-size-fits-all. Every engagement begins by understanding your business model, constraints, and goals. Then we build or integrate technology that fits – whether it's a custom-built platform, an API-driven system sync, or a rollout designed for scale and adoption.
                </p>
                <p className="text-lg text-gray-700">
                  Our role goes beyond code. We act as long-term technology partners – translating business strategy into functional systems that work today and adapt for tomorrow.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-sm h-full flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Business-Aligned Software Architecture</li>
                  <li>Seamless Enterprise Integrations</li>
                  <li>Product Engineering & Platform Delivery</li>
                  <li>Advisory-First, Execution-Ready Model</li>
                  <li>On-Time Delivery, No Surprises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Elovient?
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Strategic Technology | Reliable Delivery | Scalable Results
              </p>
            </div>
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item) => (
                <Card
                  key={item.title}
                  className="p-6 hover:shadow-lg transition-shadow border-t-4 border-primary"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

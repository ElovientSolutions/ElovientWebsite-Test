import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Rocket,
  Code,
  Users,
  ChartBar,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Seo from "@/components/Seo";
import agenticai_img from "../assets/images/AI_image.png"

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Expert-Led Digital Transformation",
      description:
        "We modernize legacy systems and implement cloud, AI, IoT and automation solutions, driven by clear business goals and built for long-term impact.",
    },
    {
      icon: Rocket,
      title: "Enterprise System Integration",
      description:
        "We connect legacy systems, SaaS platforms, APIs and custom applications into a unified ecosystem, enabling seamless data flow, process automation and real-time visibility across the business.",
    },
    {
      icon: Shield,
      title: "Custom Software Development",
      description:
        "We design, build and deploy tailored software solutions: spanning web, mobile and enterprise platforms, built to fit your specific workflows, user needs and long-term goals.",
    },
    {
      icon: Users,
      title: "Scalable, Agile Delivery",
      description:
        "Our agile delivery model and on-demand tech teams enable faster execution, cost efficiency and the ability to scale solutions as your business evolves.",
    },
    {
      icon: ChartBar,
      title: "Intelligent Data & AI Solutions",
      description:
        "We turn raw data into actionable insights using analytics, automation and AI, enabling AI-powered decisions, predictive capabilities and process optimization.",
    },
    {
      icon: Award,
      title: "Trusted, Independent Technology Partnership",
      description:
        "We stay invested beyond delivery. Offering long-term support, unbiased technology advisory and scalable solutions aligned with your evolving business goals.",
    },
  ];

  const serviceHighlights = [
    {
      title: "Custom Software Development",
      description:
        "We build robust, high-performance software applications across web, mobile and enterprise environments completely tailored to your operational workflows and business goals.",
      items: [
        "Web & Mobile Apps (iOS android, Hybrid)",
        "AI & IoT Solutions",
        "Cloud-Based Applications",
        "API Development",
      ],
    },
    {
      title: "SaaS & PaaS Development",
      description:
        "We build secure, scalable SaaS and PaaS platforms that streamline operations, enable multi-user access and support flexible monetization models.",
      items: [
        "SaaS Applications",
        "PaaS Solutions",
        "Multi-Tenant Architecture",
        "Billing & Subscription Management",
      ],
    },
    {
      title: "Enterprise Application Modernization",
      description:
        "We help businesses modernize and optimize their legacy systems migrating to modern architectures, upgrading tech stacks and streamlining operations.",
      items: [
        "Legacy System Reengineering",
        "Architecture Modernization",
        "Performance Optimization",
        "Workflow Streamlining",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Elovient helped us modernize our retail tech stack with a highly scalable POS and billing solution. Their agile approach made a big difference in our go-to-market speed.",
      author: "Head of Product",
      position: "Confidential (Retail domain), Dubai",
    },
    {
      quote:
        "The user-centric design and seamless SaaS development delivered by Elovient exceeded expectations. Their UX audits played a key role in increasing our platform engagement.",
      author: "CTO",
      position: "Confidential (FinTech domain), UK",
    },
    {
      quote:
        "We partnered with Elovient for our e-learning and proctoring platform. Their team was professional, fast and highly detail-oriented. The AI integration was a game-changer.",
      author: "Founder",
      position: "EdTech Startup, Bengaluru, India",
    },
    {
      quote:
        "Elovient transformed our internal ERP workflows. Their understanding of complex enterprise needs and integration with existing systems was remarkable.",
      author: "VP of Operations",
      position: "Confidential (Manufacturing sector), Germany",
    },
    {
      quote:
        "The UX design expertise of Elovient Solutions helped us completely revamp our customer-facing app, resulting in a 65% increase in user engagement.",
      author: "Head of Product",
      position: "Confidential (Social networking domain), India",
    },
    {
      quote:
        "Their agile approach and technical expertise made them the perfect partner for our digital transformation journey. Highly recommended!",
      author: "Digital Transformation Lead",
      position: "Confidential (Logistics domain), India",
    },
  ];

  const industries = [
    "Enterprise Solutions",
    "Manufacturing",
    "Retail & E-commerce",
    "Healthcare",
    "Education",
    "Smart Cities",
    "Media & Entertainment",
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Elovient Software Solutions"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="digital transformation, custom software development, AI solutions, UX/UI design, business intelligence, cloud solutions, IoT, ERP integration, CRM systems, mobile apps, web apps, SaaS platforms, enterprise software, agile development, workflow automation, smart cities"
        url="https://www.elovient.com"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />

      <Navbar />
      <Hero />
      <main>
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
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow border-t-4 border-primary"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-4xl mx-auto">
              We deliver custom-built platforms, enterprise system integrations,
              and AI-driven solutions designed to accelerate growth, streamline
              operations and future-proof your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  {service.title === "SaaS & PaaS Development" ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        navigate("/services", { state: { tab: "saas-paas" } })
                      }
                    >
                      <span className="flex items-center justify-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  ) : service.title ===
                    "Enterprise Application Modernization" ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        navigate("/services", { state: { tab: "enterprise" } })
                      }
                    >
                      <span className="flex items-center justify-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  ) : (
                    <Button variant="outline" asChild className="w-full">
                      <Link
                        to="/services"
                        className="flex items-center justify-center"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 mb-20 sm:mb-0">
            <Button asChild className="px-6">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI First Solutions Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#f6f3ff] rounded-3xl p-8 sm:p-12 mb-8 overflow-visible">
            
            <div
              className="absolute left-6 -top-[170px] sm:hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-white hover:shadow-purple-400/50 transition-all duration-500">
                <img
                  src={agenticai_img}
                  alt="AI Agentic Intelligence Visualization"
                  className="aspect-[3.2/4] w-full max-w-[180px] object-fill"
                />
              </div>
            </div>

            <div className="pt-16 sm:pt-0">
              <h2 className="text-[26px] font-bold text-gray-900 sm:text-4xl mb-6">
                AI First Solutions - Enriched with Agentic AI
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed max-w-5xl">
                We architect secure, compliant, enterprise grade systems that automate decisions, orchestrate workflows and scale reliably. From opportunity discovery to delivery, our teams align data foundations, model governance and change adoption to accelerate ROI in weeks, not months. See how AI delivers outcomes across your value chain.
              </p>

              <div className="mt-4 sm:hidden border-t border-gray-200 pt-2">
                <p className="mb-8 text-lg text-gray-800 italic leading-relaxed text-left">
                  "Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029."
                  <span className="font-semibold text-gray-900 not-italic"> - Gartner</span>
                </p>
              </div>
            </div>

             <Button
              asChild
              size="lg"
              className="
                mt-4 sm:mt-0 mb-4 sm:mb-0
                w-full sm:w-auto
                hover:from-purple-700 hover:to-purple-600
                text-white 
                px-6 sm:px-8 lg:px-10
                py-4 sm:py-5 lg:py-6
                text-base sm:text-lg lg:text-xl
                rounded-full 
                shadow-md hover:shadow-lg
                transition-all duration-300 ease-in-out
                whitespace-normal break-words text-center
              "
            >
              <Link to="/contact">
              <span className="hidden xs:inline sm:inline">Contact Us for AI Solutions</span>
              <span className="inline xs:hidden sm:hidden">Contact Us</span>
              </Link>
            </Button>

            <div
              className="absolute right-10 -bottom-24 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hidden sm:block"
              style={{ bottom: '-150px' }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-purple-400/50 transition-all duration-500">
                <img
                  src={agenticai_img}
                  alt="AI Agentic Intelligence Visualization"
                  className="aspect-[3.2/4] w-full 
                  max-w-[150px] 
                  sm:max-w-[180px] 
                  md:max-w-[190px] 
                  lg:max-w-[200px] 
                  xl:max-w-[210px] object-fill"
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mt-12">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="text-xl text-gray-800 italic leading-relaxed text-center sm:text-left">
                "Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029."
                <span className="font-semibold text-gray-900 not-italic"> - Gartner</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-4xl mx-auto">
              We partner with businesses across industries to design custom
              software, integrate complex systems and drive digital
              transformation. From internal efficiency to customer-facing
              innovation, our solutions are tailored to solve core operational
              and technology challenges unique to each sector.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => {
            const tabValue = industry.split(' ')[0].toLowerCase();
            return (
              <Link
                key={index}
                to={`/industries?tab=${tabValue}`}
                className="px-6 py-3 bg-white shadow-sm rounded-full text-gray-700 hover:text-primary hover:shadow transition-all"
              >
                {industry}
              </Link>
            );
          })}
          </div>

          <div className="text-center mt-12 ">
            <Button asChild variant="outline" className="px-6 outline-purple-500 outline outline-2">
              <Link to="/industries">Explore Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/*
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Success stories from businesses we've helped transform
            </p>
          </div>

          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 flex"
                >
                  <div className="p-2 w-full flex h-full">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-visible flex flex-col h-full w-full">
                      <CardContent className="p-8 flex flex-col h-full justify-between">
                        <div>
                          <div className="mb-4 flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="inline-block h-5 w-5 text-yellow-400 fill-current mx-0.5"
                              />
                            ))}
                          </div>
                          <div className="relative">
                            <svg
                              className="absolute -top-4 -left-4 h-8 w-8 text-gray-200"
                              fill="currentColor"
                              viewBox="0 0 32 32"
                            >
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-xl text-gray-700 italic mb-6 pl-8">
                              "{testimonial.quote}"
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-6">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center text-white font-bold">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {testimonial.author}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 left-0 bg-white hover:bg-gray-100 border-gray-200 shadow-md" />
              <CarouselNext className="static translate-y-0 right-0 bg-white hover:bg-gray-100 border-gray-200 shadow-md" />
            </div>
          </Carousel>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Smarter Tech Partner?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's turn your vision into a scalable, high-impact solution.
            Connect with our team to explore how Elovient can accelerate your
            digital journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="font-medium"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              <Link to="/process">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Index;

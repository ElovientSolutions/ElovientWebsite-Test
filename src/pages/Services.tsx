import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import {
  Code,
  Database,
  LineChart,
  Wrench,
  Layout,
  Server,
  Cloud,
  Smartphone,
  Layers,
  Search,
  Pen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import React from "react";

const Services = () => {
  const location = useLocation();
  const initialTab = location.state?.tab || "custom-dev";
  const [activeTab, setActiveTab] = React.useState(initialTab);

  React.useEffect(() => {
    if (location.state?.tab && location.state.tab !== activeTab) {
      setActiveTab(location.state.tab);
    }
    // eslint-disable-next-linee
  }, [location.state]);

  const serviceCategories = [
    {
      id: "custom-dev",
      title: "Custom Software Development",
      icon: Code,
      description:
        "We build robust, high-performance software applications across web, mobile, and enterprise environments–tailored to your operational workflows and business goals. Our solutions are designed to scale securely, integrate seamlessly, and deliver long-term value.",
      services: [
        "Web & Mobile Apps (iOS, Android, Hybrid) – Responsive, cross-platform applications optimized for usability and performance",
        "AI & IoT Solutions – Intelligent systems that combine data, automation, and connected devices for smarter operations",
        "Cloud-Based Applications – Scalable applications deployed on AWS, Azure, or Google Cloud, designed for resilience and elasticity",
        "API Development – Secure, well-documented APIs for smooth integration with internal systems and third-party platforms",
      ],
      details:
        "We build robust, high-performance software applications across web, mobile, and enterprise environments–tailored to your operational workflows and business goals. Our solutions are designed to scale securely, integrate seamlessly, and deliver long-term value.",
      benefits: [
        "Custom-built solutions aligned with your business logic and user needs",
        "Scalable architecture using modern, enterprise-grade technology stacks",
        "Seamless interoperability with existing tools, platforms, and data sources",
        "Ongoing enhancements to support evolving requirements and user adoption",
      ],
    },
    {
      id: "saas-paas",
      title: "SaaS & PaaS Development",
      icon: Cloud,
      description:
        "We build secure, scalable SaaS and PaaS platforms that streamline operations, enable multi-user access, and support flexible monetization models. Whether launching a new product or transforming an existing service, we deliver cloud-native platforms designed for performance, reliability, and growth.",
      services: [
        "SaaS Applications – End-to-end development of subscription-based platforms with modular architecture and user role management",
        "PaaS Solutions – Configurable platforms that enable businesses to build, deploy, and scale their own services",
        "Multi-Tenant Architecture – Secure, scalable infrastructure supporting multiple clients or user groups within a single deployment",
        "Billing & Subscription Management – Integrated systems for user onboarding, tiered plans, payments, renewals, and access control",
      ],
      details:
        "We build secure, scalable SaaS and PaaS platforms that streamline operations, enable multi-user access, and support flexible monetization models. Whether launching a new product or transforming an existing service, we deliver cloud-native platforms designed for performance, reliability, and growth.",
      benefits: [
        "Accelerated time-to-market through cloud-first architecture",
        "Flexible subscription and user management models",
        "Automated updates and CI/CD workflows for faster iterations",
        "Seamless integration with third-party APIs, tools, and data sources",
      ],
    },
    {
      id: "enterprise",
      title: "Enterprise Application Modernization",
      icon: Database,
      description:
        "We help businesses modernize and optimize their legacy systems–migrating to modern architectures, upgrading tech stacks, and streamlining operations. Whether you're addressing technical debt or preparing your infrastructure for scale, we ensure your core applications are resilient, high-performing, and ready for the future.",
      services: [
        "Legacy System Reengineering – Audit, refactor, or rebuild outdated applications using modern technologies and frameworks",
        "Architecture Modernization – Transition from monolithic systems to modular, cloud-native, or service-oriented architectures",
        "Performance Optimization – Improve application stability, speed, and scalability across mission-critical operations",
        "Workflow Streamlining – Simplify complex business logic and operational processes to enhance system usability and productivity",
      ],
      details:
        "We help businesses modernize and optimize their legacy systems–migrating to modern architectures, upgrading tech stacks, and streamlining operations. Whether you're addressing technical debt or preparing your infrastructure for scale, we ensure your core applications are resilient, high-performing, and ready for the future.",
      benefits: [
        "Eliminate technical debt and upgrade your technology foundation",
        "Enhance performance, security, and maintainability",
        "Enable seamless integration with modern platforms, APIs, and cloud infrastructure",
        "Maintain business continuity during phased transformation",
      ],
    },
    {
      id: "maintenance",
      title: "Managed Software Lifecycle & Support",
      icon: Wrench,
      description:
        "We provide end-to-end support for the complete software lifecycle–from post-launch maintenance to ongoing enhancements and performance monitoring. Our support services ensure your systems remain reliable, secure, and aligned with evolving business needs.",
      services: [
        "Corrective & Preventive Maintenance – Fix issues proactively and ensure smooth operation through regular audits and health checks",
        "Enhancement & Feature Upgrades – Implement new features, workflows, and integrations based on business priorities",
        "Performance Monitoring & Optimization – Track system health, usage patterns, and load behavior to ensure high availability",
        "Version Control & Release Management – Structured updates, rollbacks, and CI/CD management for stable deployments",
      ],
      details:
        "We provide end-to-end support for the complete software lifecycle–from post-launch maintenance to ongoing enhancements and performance monitoring. Our support services ensure your systems remain reliable, secure, and aligned with evolving business needs.",
      benefits: [
        "Increased system reliability through proactive issue resolution",
        "Faster turnaround for enhancements and change requests",
        "Ongoing performance tuning for scalability and efficiency",
        "SLA-backed support for critical systems and workflows",
      ],
    },
    {
      id: "consulting",
      title: "Digital Transformation & Technology Consulting",
      icon: LineChart,
      description:
        "We work closely with business and technology leaders to define transformation roadmaps, optimize digital processes, and modernize system architecture. Our consulting approach blends technical depth with strategic insight–helping you make confident, future-ready decisions.",
      services: [
        "Digital Strategy & Roadmapping – Define transformation goals, assess current systems, and build executable technology roadmaps",
        "Enterprise Architecture Advisory – Design scalable, interoperable systems aligned to business workflows and future integrations",
        "Process Digitization – Identify automation opportunities and replace manual workflows with streamlined digital solutions",
        "Technology Selection & Vendor Evaluation – Advise on tools, platforms, and vendors based on business goals–not partner commissions",
      ],
      details:
        "We work closely with business and technology leaders to define transformation roadmaps, optimize digital processes, and modernize system architecture. Our consulting approach blends technical depth with strategic insight–helping you make confident, future-ready decisions.",
      benefits: [
        "Clarity and confidence in transformation investments",
        "Technology decisions aligned to business strategy–not vendor hype",
        "Reduced operational costs through process optimization",
        "Architecture plans that support integration, scale, and agility",
      ],
    },
    {
      id: "ux-design",
      title: "Product Enablement & GTM Support",
      icon: Layout,
      description:
        "We help you take products to market with the right foundation–streamlined onboarding, operational readiness, and early user engagement. From internal tools to commercial platforms, we ensure your product is launch-ready, support-ready, and market-ready.",
      services: [
        "Onboarding & Workflow Design – Create intuitive user flows and guided experiences that support adoption and minimize hand-holding",
        "Operational Documentation & Training – Deliver SOPs, admin guides, and team training to enable smooth internal and external rollout",
        "Release Planning & Launch Coordination – Set up staging environments, validate features, and manage phased deployment timelines",
        "Early-Stage Digital Marketing Support – Support GTM campaigns through landing pages, email workflows, and conversion-focused execution aligned to product strategy",
      ],
      details:
        "We help you take products to market with the right foundation–streamlined onboarding, operational readiness, and early user engagement. From internal tools to commercial platforms, we ensure your product is launch-ready, support-ready, and market-ready.",
      benefits: [
        "Faster rollout and user onboarding through pre-aligned workflows",
        "Consistent delivery with documentation and training built-in",
        "Streamlined release and feedback loop for iteration and scaling",
        "GTM-ready infrastructure and digital support to drive early user engagement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Custom Software & UX/UI Design Services | Elovient"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="software development, SaaS development, PaaS, UX design, digital transformation, enterprise solutions, mobile apps, web development, IT consulting, business intelligence"
        url="https://www.elovient.com/services"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />
      <Navbar />

              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            We deliver custom-built platforms, enterprise system integrations, and AI-driven solutions designed to accelerate growth, streamline operations, and future-proof your business.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10 w-full">
            {serviceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-all hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <category.icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-left line-clamp-1">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Card className="border-0 shadow-lg h-full bg-gradient-to-br from-primary/10 to-purple-50">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary p-3">
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {category.title}
                          </h2>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{category.details}</p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Services:
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {category.services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="w-full">
                        <Link to="/contact">Request Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Why Choose Our {category.title}?
                        </h3>
                        <p className="text-gray-700">
                          Our {category.title.toLowerCase()} services are
                          designed to address your specific business needs and
                          challenges. We combine technical expertise with
                          industry knowledge to deliver solutions that drive
                          real business value.
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Benefits
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {category.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-start bg-gray-50 p-4 rounded-lg"
                            >
                              <div className="rounded-full bg-primary/10 p-2 mr-3">
                                <div className="h-4 w-4 text-primary">✓</div>
                              </div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Our Approach
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                              <Search className="h-8 w-8 text-primary mb-2" />
                              <h4 className="font-medium">Discovery</h4>
                              <p className="text-sm text-gray-500">
                                Understanding your needs
                              </p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                              <Pen className="h-8 w-8 text-primary mb-2" />
                              <h4 className="font-medium">Planning</h4>
                              <p className="text-sm text-gray-500">
                                Designing the solution
                              </p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                              <Code className="h-8 w-8 text-primary mb-2" />
                              <h4 className="font-medium">Development</h4>
                              <p className="text-sm text-gray-500">
                                Building with expertise
                              </p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                              <Layers className="h-8 w-8 text-primary mb-2" />
                              <h4 className="font-medium">Deployment</h4>
                              <p className="text-sm text-gray-500">
                                Delivering excellence
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Service-Specific Content */}
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.id === "custom-dev" && (
                  <>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Smartphone className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        Web & Mobile Apps
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Responsive web applications and native mobile apps for
                        iOS and Android.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Server className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        AI & IoT Solutions
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Intelligent applications and connected device
                        ecosystems.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Cloud className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        Cloud-Based Applications
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Scalable solutions hosted on AWS, Azure, or Google
                        Cloud.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Code className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        API Development
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Robust APIs for system integration and third-party
                        services.
                      </p>
                    </Card>
                  </>
                )}

                {category.id === "ux-design" && (
                  <>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Search className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        User Research
                      </h3>
                      <p className="text-gray-600 text-sm">
                        In-depth analysis of user needs, behaviors, and pain
                        points.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Pen className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        Wireframing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Low and high-fidelity prototypes to visualize the user
                        experience.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Layout className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">UI Design</h3>
                      <p className="text-gray-600 text-sm">
                        Visually appealing interfaces that align with your brand
                        identity.
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Layers className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        Usability Testing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Evaluation of design effectiveness with real users.
                      </p>
                    </Card>
                  </>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and discover
            how our services can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;

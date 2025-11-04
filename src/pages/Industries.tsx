import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Factory,
  ShoppingCart,
  Heart,
  GraduationCap,
  Map,
  Layout,
  Banknote,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Industries = () => {
  const industriesData = [
    {
      id: "enterprise",
      icon: Building,
      title: "Enterprise & Corporate Solutions",
      description:
        "Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services.",
      services: [
        "ERP & Workflow Automation – Seamless integration and optimization of business operations",
        "Workforce & Field Force Management – Real-time tracking, scheduling, and productivity analytics",
        "Facility & Asset Management – Smart asset tracking and predictive maintenance",
        "Billing & POS Systems – Scalable invoicing and retail payment solutions",
      ],
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing Digital Transformation",
      description:
        "Modernizing manufacturing operations with cutting-edge technology for improved efficiency and productivity.",
      services: [
        "Integrate AI, IoT, and automation into existing software for peak efficiency",
        "Workflow Optimization – Enhancing existing systems to improve operational efficiency",
        "IoT-Enabled Smart Systems – Automation for monitoring, predictive maintenance, and real-time analytics",
      ],
    },
    {
      id: "retail",
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Innovative digital solutions for modern retail and financial ecosystems to enhance customer experience and streamline operations.",
      services: [
        "E-commerce Platforms – End-to-end development of scalable online stores with personalized shopping experiences and smooth checkout flows",
        "Point-of-Sale (POS) Systems – Cloud-based POS solutions for inventory tracking, sales reporting, and multi-location management",
        "Omnichannel Retail Management – Centralized systems to unify in-store, online, and mobile operations",
        "Payment Gateway Integration – Seamless support for UPI, cards, net banking, and international payments",
        "Customer Support Tools – Live chat, chatbot options, and CRM integrations for improved service and retention",
      ],
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description:
        "Technology solutions for healthcare providers to improve patient care and operational efficiency.",
      services: [
        "Proctored Exam & E-Learning Platforms – AI-driven online assessment and medical training solutions",
        "Patient Management & Telemedicine – Integrated digital platforms for remote care, scheduling, and records. intuitive mobile solutions for patients and practitioners",
        "AI-Powered Diagnostics – Smart tools for faster, more accurate clinical decision-making. Identify trends, improve patient outcomes, and plan resources better",
        "Healthcare ERP Systems – Streamlined administrative, billing, and operational workflows",
        "IoT-Based Monitoring – Real-time patient monitoring, smart device integrations, and alerts",
      ],
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education & EdTech",
      description:
        "Digital solutions for educational institutions to enhance learning experiences and administrative efficiency.",
      services: [
        "AI-Based Learning Platforms – Personalized education experiences",
        "Proctored Exam & Online Assessment Solutions – Secure, automated testing",
        "School & University Management Software – ERP, workflow automation, and digital learning",
        "UX-Optimized Digital Learning Experiences – Interactive and engaging e-learning platforms",
      ],
    },
    {
      id: "smartcities",
      icon: Map,
      title: "Smart Cities & Public Sector",
      description:
        "Technology solutions for public sector entities to improve service delivery and citizen engagement.",
      services: [
        "Facility & Asset Management – Predictive maintenance and automation",
        "IoT-Based Solutions for Smart Buildings – Energy efficiency, security systems",
        "Public Sector Digital Transformation – E-Governance and workflow automation",
      ],
    },
    {
      id: "media",
      icon: Layout,
      title: "Media, Entertainment & Social Platforms",
      description:
        "Innovative digital solutions for media and entertainment businesses to enhance content delivery and user engagement.",
      services: [
        "AI-Powered Social Networking – Next-gen community engagement",
        "Content & Streaming Platforms – Secure, scalable digital experiences",
        "AI & Chatbot Engagement Solutions – Enhanced user interaction",
        "User-Centric UI Design for Media Platforms – Enhancing engagement and retention",
      ],
    },
    {
      id: "fintech",
      icon: Banknote,
      title: "FinTech & Banking Solutions",
      description:
        "Modern financial technology services to empower banks, NBFCs, and digital-first finance platforms with speed, security, and scalability.",
      services: [
        "Digital Banking Platforms – Custom portals for account management, fund transfers, and user authentication",
        "Loan & Credit Management Systems – End-to-end solutions for lending workflows, EMI tracking, and collections",
        "Automated Billing & Reconciliation – Real-time transaction monitoring, invoicing, and account reconciliation",
      ],
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams(); 
  const validTabIds = industriesData.map(ind => ind.id);
  const tabFromUrl = searchParams.get("tab");
  const defaultTab = validTabIds.includes(tabFromUrl) 
    ? tabFromUrl 
    : "enterprise";
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleTabChange = (value) => {
    setActiveTab(value);
    setSearchParams({ tab: value }); 
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Industries We Serve | Elovient Solutions"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="digital transformation, enterprise software, manufacturing automation, retail e-commerce solutions, healthcare software, education technology, smart cities, media technology, AI, IoT, custom software development"
        url="https://www.elovient.com/industries"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />

      <Navbar />

              <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with businesses across industries to design custom software, integrate complex systems, and drive digital transformation. From internal efficiency to customer-facing innovation, our solutions are tailored to solve core operational and technology challenges unique to each sector.
          </p>
        </div>

        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 w-full">
            {industriesData.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-all hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <industry.icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-left line-clamp-1">{industry.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industriesData.map((industry) => (
            <TabsContent key={industry.id} value={industry.id} className="mt-6">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-50 p-8">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary p-3">
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {industry.title}
                      </h2>
                      <p className="text-lg text-gray-700 mt-2">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Our Solutions Include:
                  </h3>
                  <ul className="space-y-4">
                    {industry.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Industries;

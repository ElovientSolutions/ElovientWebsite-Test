import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, ShoppingCart, Globe, Smartphone, Gauge, BarChart2, Calendar, FileText, Mail, AppWindow, BookOpen, CreditCard, Database } from "lucide-react";

const services = [
  {
    title: "AI Chatbot Integration",
    description: "Automate conversations and support with a smart website chatbot.",
    icon: Bot,
  },
  {
    title: "E-commerce Store Setup",
    description: "Launch a beautiful, conversion-ready online store.",
    icon: ShoppingCart,
  },
  {
    title: "Website Hosting & Domain Setup",
    description: "Get your website live with secure hosting and domain setup.",
    icon: Globe,
  },
  {
    title: "Mobile Responsiveness Optimisation",
    description: "Make your website look perfect on every device.",
    icon: Smartphone,
  },
  {
    title: "Website Performance Optimisation",
    description: "Speed up your site for better user experience and SEO.",
    icon: Gauge,
  },
  {
    title: "Analytics Setup & Reporting",
    description: "Track visitors and get actionable insights with analytics.",
    icon: BarChart2,
  },
  {
    title: "Online Booking System",
    description: "Let customers book appointments or services online.",
    icon: Calendar,
  },
  {
    title: "Landing Page for Campaigns or Events",
    description: "Create high-converting landing pages for your campaigns.",
    icon: FileText,
  },
  {
    title: "Email Newsletter System Setup",
    description: "Grow your audience with branded email signup and campaigns.",
    icon: Mail,
  },
  {
    title: "Mobile App from Existing Website",
    description: "Turn your website into a downloadable mobile app.",
    icon: AppWindow,
  },
  {
    title: "Digital Menu or Service Catalog Builder",
    description: "Showcase your menu or services in a digital, interactive format.",
    icon: BookOpen,
  },
  {
    title: "Online Course or Workshop Setup",
    description: "Launch and sell your own online courses or workshops.",
    icon: BookOpen,
  },
  {
    title: "Online Payment Gateway Integration",
    description: "Accept secure online payments on your website.",
    icon: CreditCard,
  },
  {
    title: "Chat-Based AI Over User Data",
    description: "Let users chat with your data using AI-powered tools.",
    icon: Database,
  },
];

const SmallServices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Small Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quick, focused digital solutions to boost your business. Explore our most popular small-ticket services below.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="group relative rounded-2xl border border-primary bg-white transition-all duration-300 shadow-sm hover:bg-primary hover:shadow-xl cursor-pointer p-8 min-h-[220px] flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-white/20 transition-colors duration-300 p-3">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-primary group-hover:text-white transition-colors duration-300 mb-6">
                  {service.description}
                </p>
              </div>
              <a
                href="#"
                className="text-primary group-hover:text-white font-semibold flex items-center gap-1 transition-colors duration-300"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SmallServices; 
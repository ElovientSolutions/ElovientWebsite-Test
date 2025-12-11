import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import "@/assets/css/Agenticai.css";

import heroBg from "@/assets/images/Group 48095980.png";
import aiImage from "@/assets/images/image 135.png";
import statsBg from "@/assets/images/image 154.png";
import agenticBg from "@/assets/images/Rectangle 8021.png";
import syncBg from "@/assets/images/image 155.png";
import journeyImg from "@/assets/images/image 138.png";

import tickIcon from "@/assets/images/icons/tick.svg?url";
import aiAutomationIcon from "@/assets/images/icons/ai-automation.svg?url";
import genAiIcon from "@/assets/images/icons/gen-ai.svg?url";
import mlMLOpsIcon from "@/assets/images/icons/ml-mlops.svg?url";
import etlIcon from "@/assets/images/icons/etl.svg?url";
import alignCommIcon from "@/assets/images/icons/align-comm.svg?url";
import singleViewIcon from "@/assets/images/icons/single-view.svg?url";
import streamlineIcon from "@/assets/images/icons/streamline.svg?url";

const AgenticAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="AI Services | Elovient Solutions"
        description="Elovient delivers end-to-end AI solutions to help organisations build autonomous, goal-driven operations."
        keywords="AI automation, AI services, autonomous systems, generative AI, enterprise AI"
        url="https://www.elovient.com/agentic-ai"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />

      <Navbar />

      <div className="agentic-hero px-4 md:px-8 lg:px-12 py-6">
        <section
          className="w-full min-h-[80vh] flex items-center bg-cover bg-center rounded-2xl overflow-hidden agentic-container"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="w-full px-6 md:px-10 lg:px-16 py-10">
            <div className="max-w-7xl text-left text-white drop-shadow-xl">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                From Insight to Autonomy: Elovient's end-to-end AI Services
              </h1>

              <p className="text-lg sm:text-xl mb-6">
                Elovient helps organisations turn artificial intelligence into tangible business outcomes,
                moving beyond simple automation to build autonomous, goal-driven operations.
              </p>

              <button className="agentic-btn">Start your AI-enabled journey</button>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated AI Solutions</h2>

            <p className="text-lg text-gray-700 mb-6">
              We build AI that fits how your teams already work. It automates routines, simplifies complex steps &
              turns data into actions.
            </p>

            <ul className="ai-list space-y-3 text-gray-700 text-lg">
              <li>
                <img src={tickIcon} className="ai-icon" />
                Automate repetitive tasks so loops close faster & hours return to teams
              </li>
              <li>
                <img src={tickIcon} className="ai-icon" />
                Serve the right insight at the right moment so decisions improve & rework drops
              </li>
              <li>
                <img src={tickIcon} className="ai-icon" />
                We execute AI solutions across all industries & technologies
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img src={aiImage} alt="AI Illustration" className="w-full max-w-md rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section
        className="w-full py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBg})` }}
      >
        <div className="w-full flex justify-start">
          <div className="w-1/2 flex justify-end px-6">
            <div className="w-full md:w-2/3 bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <div className="flex mb-8">
                <div className="w-1/3">
                  <p className="text-4xl font-bold">34%</p>
                </div>
                <div className="w-2/3 text-lg">
                  Business tasks are already done by machines. Projected rise to <b>42%</b> by 2027.
                </div>
              </div>

              <div className="flex mb-10">
                <div className="w-1/3">
                  <p className="text-4xl font-bold">64%</p>
                </div>
                <div className="w-2/3 text-lg">
                  Member bandwidth can be saved with Elovient’s AI-implemented business solutions.
                </div>
              </div>

              <button className="agentic-btn agentic-btn-full">Start your AI-enabled journey</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="cap-box">
              <img src={aiAutomationIcon} className="cap-icon" />
              <h3 className="cap-title">AI Automation (RPA & IPA)</h3>
              <p className="cap-text">
                Automating high-volume, repetitive, & rule-based tasks to boost operational efficiency, ensure
                compliance, & reduce manual errors
              </p>
            </div>

            <div className="cap-box">
              <img src={genAiIcon} className="cap-icon" />
              <h3 className="cap-title">Generative AI Solutions</h3>
              <p className="cap-text">
                Leveraging the power of Large Language Models (LLMs) to create high-quality content, power
                conversational chatbots, & summarise complex data to accelerate insights
              </p>
            </div>

            <div className="cap-box">
              <img src={mlMLOpsIcon} className="cap-icon" />
              <h3 className="cap-title">Machine Learning & MLOps</h3>
              <p className="cap-text">
                Building, training, & deploying custom machine learning models for predictive analytics &
                data-driven decisions. Our MLOps framework ensures scalability & production reliability
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            <div className="cap-box">
              <img src={etlIcon} className="cap-icon" />
              <h3 className="cap-title">ETL & Data Pipelining</h3>
              <p className="cap-text">
                Architecting high-performance, tech-agnostic data pipelines. We build the "fuel" for advanced AI by ensuring that your systems are fed with clean, accurate, & real-time data from any source
              </p>
            </div>

            <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg">
              <img src={agenticBg} className="absolute inset-0 w-full h-full object-cover" />

              <div className="cap-image-overlay cap-image-bottom">
                <h3 className="text-3xl font-bold mb-4">Agentic AI: The Autonomous Enterprise</h3>

                <button className="agentic-btn agentic-btn-full gradient-btn">
                  Contact us for Agentic AI Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-f1">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900">
            AI that keeps sales, finance, manufacturing & operations in sync
          </h2>

          <div className="space-y-8">
            <div className="sync-box flex items-start gap-6">
              <img src={alignCommIcon} className="sync-icon" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Align your commercial teams</h3>
                <p className="text-gray-700 text-lg">
                  Create a seamless experience from initial interest to final payment. When your customer facing teams & back office functions are perfectly connected, you accelerate deals, improve satisfaction & build a strong foundation for growth.
                </p>
              </div>
            </div>

            <div className="sync-box flex items-start gap-6">
              <img src={singleViewIcon} className="sync-icon" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Get a single, unified view</h3>
                <p className="text-gray-700 text-lg">
                  Stop piecing together data from different sources. See a complete & accurate picture of your entire business in one place. This total clarity empowers your leaders to make confident, forward looking decisions.
                </p>
              </div>
            </div>

            <div className="sync-box flex items-start gap-6">
              <img src={streamlineIcon} className="sync-icon" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Streamline your core processes</h3>
                <p className="text-gray-700 text-lg">
                  Connect your critical business functions to eliminate bottlenecks & reduce manual work. When information flows freely between departments, you lower costs, increase efficiency & improve accuracy across tall the processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${syncBg})` }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:h-full">
            <div className="w-full md:w-[35%] bg-white rounded-l-xl p-8 shadow-lg flex flex-col justify-center">
              <p className="text-4xl font-bold text-gray-900 mb-3 text-purple">43%</p>
              <p className="text-lg text-gray-700">
                Companies have prioritised AI-tech training for their members
              </p>
            </div>

            <div className="w-full md:w-[65%] bg-white/20 backdrop-blur-md rounded-r-xl p-10 shadow-xl flex flex-col justify-between right-blur-box">
              <h3 className="text-2xl font-bold text-white mb-6">
                We support AI-tech training initiatives for our partners & their workforce
              </h3>

              <button className="agentic-btn agentic-btn-full mt-6">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Start your AI journey with us</h2>

            <p className="text-lg text-gray-700 mb-6">
              Elovient is your trusted partner in delivering AI-powered business solutions. We look forward to
              supporting your growth & success.
            </p>

            <button className="agentic-btn agentic-btn-full">Contact Us</button>
          </div>

          <div className="flex justify-center">
            <img src={journeyImg} alt="Start AI Journey" className="w-full max-w-md rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticAI;

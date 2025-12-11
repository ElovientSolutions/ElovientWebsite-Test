import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import "@/assets/css/Agenticai.css";

// PNG IMAGES
import heroBg from "@/assets/images/Group 48095980.png";
import aiImage from "@/assets/images/image 135.png";
import statsBg from "@/assets/images/image 154.png";
import agenticBg from "@/assets/images/Rectangle 8021.png";
import syncBg from "@/assets/images/image 155.png";
import journeyImg from "@/assets/images/image 138.png";

// SVG ICONS (Imported as URLs)
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

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section
        className="w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-4xl mx-auto text-center text-white drop-shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            From Insight to Autonomy: Elovient's end-to-end AI Services
          </h1>

          <p className="text-lg sm:text-xl mb-6">
            Elovient helps organisations turn artificial intelligence into
            tangible business outcomes, moving beyond simple automation to build
            autonomous, goal-driven operations.
          </p>

          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
            Start your AI-enabled journey
          </button>
        </div>
      </section>

      {/* ---------------------- INTEGRATED AI SECTION ---------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrated AI Solutions
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              We build AI that fits how your teams already work. It automates
              routines, simplifies complex steps & turns data into actions.
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

      {/* ---------------------- STATS SECTION ---------------------- */}
      <section
        className="w-full py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBg})` }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="grid sm:grid-cols-2 gap-10">

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl">
              <p className="text-4xl font-bold mb-3">34%</p>
              <p className="text-lg">
                Business tasks are already done by machines. Projected rise to <b>42%</b> by 2027.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl">
              <p className="text-4xl font-bold mb-3">64%</p>
              <p className="text-lg">
                Member bandwidth can be saved with Elovient’s AI-implemented business solutions.
              </p>
            </div>

          </div>

          <button className="mt-10 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
            Start your AI-enabled journey
          </button>

        </div>
      </section>

      {/* ---------------------- AI CAPABILITIES ---------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src={aiAutomationIcon} className="cap-icon" />
              <h3 className="text-2xl font-bold mb-3">AI Automation (RPA & IPA)</h3>
              <p className="text-gray-700">
                Automating high-volume, repetitive, & rule-based tasks to boost efficiency.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src={genAiIcon} className="cap-icon" />
              <h3 className="text-2xl font-bold mb-3">Generative AI Solutions</h3>
              <p className="text-gray-700">
                Using LLMs to power chatbots, content creation & intelligent summarisation.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src={mlMLOpsIcon} className="cap-icon" />
              <h3 className="text-2xl font-bold mb-3">Machine Learning & MLOps</h3>
              <p className="text-gray-700">
                Building & deploying predictive ML models with scalable MLOps pipelines.
              </p>
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-3 gap-10 items-stretch">

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src={etlIcon} className="cap-icon" />
              <h3 className="text-2xl font-bold mb-3">ETL & Data Pipelining</h3>
              <p className="text-gray-700">
                High-performance pipelines delivering clean real-time data for AI systems.
              </p>
            </div>

            <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg">
              <img src={agenticBg} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-start p-10 text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Agentic AI: The Autonomous Enterprise
                </h3>

                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
                  Contact us for Agentic AI Solutions
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------- NEW SECTION 1 ---------------------- */}
      <section className="py-20 px-6 bg-f1">
        <div className="max-w-5xl mx-auto space-y-12">

          <h2 className="text-3xl font-bold text-gray-900">
            AI that keeps sales, finance, manufacturing & operations in sync
          </h2>

          <div className="space-y-10">

            <div>
              <img src={alignCommIcon} className="cap-icon" />
              <h3 className="text-2xl font-semibold mb-2">Align your commercial teams</h3>
              <p className="text-gray-700 text-lg">
                Create a seamless experience from interest to payment. Connected teams = faster deals & better satisfaction.
              </p>
            </div>

            <div>
              <img src={singleViewIcon} className="cap-icon" />
              <h3 className="text-2xl font-semibold mb-2">Get a single, unified view</h3>
              <p className="text-gray-700 text-lg">
                Stop stitching data. See your whole business in one clean, unified view.
              </p>
            </div>

            <div>
              <img src={streamlineIcon} className="cap-icon" />
              <h3 className="text-2xl font-semibold mb-2">Streamline your core processes</h3>
              <p className="text-gray-700 text-lg">
                Remove bottlenecks & reduce manual work. Connected systems reduce cost & increase accuracy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------- NEW SECTION 2 ---------------------- */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${syncBg})` }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-10 shadow-xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <p className="text-4xl font-bold text-gray-900">43%</p>
                <p className="text-lg text-gray-700">
                  Companies have prioritised AI-tech training for their members
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  We support AI-tech training initiatives for our partners & their workforce
                </h3>
              </div>

            </div>

            <div className="mt-8 text-center">
              <button className="px-10 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------- NEW SECTION 3 ---------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Start your AI journey with us
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Elovient is your trusted partner in executing AI-powered business solutions.
              We look forward to supporting your growth & success.
            </p>

            <button className="px-10 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
              Contact Us
            </button>
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

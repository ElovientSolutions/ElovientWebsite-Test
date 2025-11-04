import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import GoogleAnalyticsTags from "../helper/googleAnalytics"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { trackSocialBtnClick } = GoogleAnalyticsTags()



  return (
    <footer className="bg-neutral-800 text-neutral-100 pt-12 pb-6 mt-auto">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-8 md:gap-20 pb-10 border-b border-neutral-700 items-start">
          {/* Brand & Description */}
          <div>
            <div className="flex justify-left items-center mb-4" style={{ height: '56px' }}>
              <img
                src="https://res.cloudinary.com/dge1zqsao/image/upload/v1753363031/Elovient_white_logo_neqqng.png"
                alt="Elovient Logo - Digital Transformation Services"
                style={{ maxHeight: '56px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs mt-2">
              Elovient Software Solutions acts as your technology partner, aligning digital tools with your business goals. Our modular, future-ready approach helps you digitalize your operations and scale efficiently, with minimal disruption and maximum impact.
            </p>
            <div className="flex gap-4 mt-4 items-center">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/elovient/" onClick={() => trackSocialBtnClick("Linkedin")} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition cursor-pointer flex items-center justify-center" style={{ width: 35, height: 35 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/elovientofficial" onClick={() => trackSocialBtnClick("Instagram")} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition cursor-pointer flex items-center justify-center" style={{ width: 35, height: 35 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/ElovientSoftware" onClick={() => trackSocialBtnClick("Facebook")} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition cursor-pointer flex items-center justify-center" style={{ width: 35, height: 35 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919892925936" target="_blank" onClick={() => trackSocialBtnClick("WhatsApp")} rel="noopener noreferrer" className="hover:text-primary-400 transition cursor-pointer flex items-center justify-center" style={{ width: 35, height: 35 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path></svg>
              </a>
            </div>
          </div>

          {/* Navigation and Contact Grid */}
          <div className="md:pl-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 lg:gap-x-28 w-full min-w-0 md:[&>div]:min-w-[200px] md:[&>div]:max-w-xs items-start">
              {/* Quick Links */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-primary-400 transition">Home</Link></li>
                  <li><Link to="/about" className="hover:text-primary-400 transition">About</Link></li>
                  <li><Link to="/services" className="hover:text-primary-400 transition">Services</Link></li>
                  <li><Link to="/industries" className="hover:text-primary-400 transition">Industries</Link></li>
                  <li><Link to="/process" className="hover:text-primary-400 transition">How We Work</Link></li>
                  <li><Link to="/contact" className="hover:text-primary-400 transition">Contact Us</Link></li>
                </ul>
              </div>

              {/* Our Services */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "custom-dev" }}
                    >
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "saas-paas" }}
                    >
                      SaaS & PaaS Development
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "enterprise" }}
                    >
                      Enterprise Software Solutions
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "maintenance" }}
                    >
                      Software Maintenance & Support
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "consulting" }}
                    >
                      Consulting & Digital Transformation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      state={{ tab: "ux-design" }}
                    >
                      UX/UI Design Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5"><MapPin className="h-5 w-5 text-primary-400" /></span>
                    <span><strong>Elovient Software Solutions</strong><br />21st Floor, Commerz II, Oberoi Garden City, International Business Park, Goregaon, Mumbai, Maharashtra 400063, India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span><Mail className="h-5 w-5 text-primary-400" /></span>
                    <a href="mailto:connect@elovient.com" onClick={() => trackSocialBtnClick("Email")} className="hover:text-primary-400 transition">connect@elovient.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span><Phone className="h-5 w-5 text-primary-400" /></span>
                    <a href="tel:+919892925936" onClick={() => trackSocialBtnClick("Phone")} className="hover:text-primary-400 transition">+91 98929 25936</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center pt-6 text-xs text-neutral-400 text-center">
          © 2008 - 2025 EFS India Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

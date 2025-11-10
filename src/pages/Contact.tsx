import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { formatPhoneNumberIntl } from 'react-phone-number-input'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  MessageSquare,
  Loader,
  Upload
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Seo from "@/components/Seo";
import axios from "axios";
import GoogleAnalyticsTags from "../helper/googleAnalytics"

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      enquiryType: "",
      message: "",
      fileUpload: null as File | null,
    });

    const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      enquiryType: "",
      message: "",
      fileUpload: "",
    });

    const { trackFormSubmit } = GoogleAnalyticsTags()

    const [loading, setLoading] = useState(false);

    const handleChange = (
      e: any
    ) => {
      const { name, value, files } = e.target;

      if (name === "fileUpload" && files) {
        const file = files[0];
        // Validate file size (10MB = 10 * 1024 * 1024 bytes)
        if (file && file.size > 10 * 1024 * 1024) {
          setFormErrors((prev) => ({ ...prev, fileUpload: "File size must be less than 10MB" }));
          return;
        }
        // Validate file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (file && !allowedTypes.includes(file.type)) {
          setFormErrors((prev) => ({ ...prev, fileUpload: "Only PDF and DOCX files are allowed" }));
          return;
        }
        setFormData((prev) => ({ ...prev, [name]: file }));
        setFormErrors((prev) => ({ ...prev, fileUpload: "" }));
      } else if (name === "phone") {
        // Allow only digits and a single optional leading '+'
        const sanitizedValue = value
          .replace(/[^\d+]/g, "") // Remove all except digits and '+'
          .replace(/(?!^)\+/g, ""); // Remove '+' if not at the start

        setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    };

    const handleExcelSheetEntry = (templateParams: any) => {
      const formBody = Object.entries(templateParams)
        .map(([key, value]: any) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&');

      fetch("https://script.google.com/macros/s/AKfycbw0D_LXpYxUUUSKl9pl9h_rxmT36RWdQLiJyZsUzWcjYQHH5tuVh8-180av_b2PmEGEQw/exec", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const errors = { 
        name: "", 
        email: "", 
        phone: "", 
        company: "", 
        role: "",
        enquiryType: "",
        message: "",
        fileUpload: "",
      };

      // Validate fields
      if (!formData.name) errors.name = "Full name is required.";
      if (!formData.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
      ) {
        errors.email = "Please enter a valid email address.";
      }
      if (!formData.phone || !/^\+?\d{7,15}$/.test(formData.phone)) {
        errors.phone = "Please enter a valid phone number.";
      }
      if (!formData.enquiryType) errors.enquiryType = "Please select an enquiry type.";
      if (!formData.message) errors.message = "Message is required.";

      // If there are errors, update formErrors state and don't submit the form
      if (Object.values(errors).some((error) => error)) {
        setFormErrors(errors);
        return;
      }

      // Clear any previous errors if validation passes
      setFormErrors({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        enquiryType: "",
        message: "",
        fileUpload: "",
      });

      setLoading(true);

      let phone = formatPhoneNumberIntl(formData.phone);
      phone = phone.replace("+", "");
      phone = phone.replace(" ", "-")
      phone = phone.replace(/ /g, "");

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: phone,
        company: formData.company,
        role: formData.role,
        enquiryType: formData.enquiryType,
        message: formData.message,
      };

      try {
        const response = await axios.post(
          "https://api.elovient.com/s1/contact-us",
          templateParams
        );
        console.log(response);

        if (response.status === 200) {
          toast({
            description: (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-green-700 text-base font-bold">Thank you for reaching out to Elovient Software Solutions.</span>
                </div>
                <span className="text-green-800">
                  <span className="font-semibold">We've received your inquiry and will get back to you within 24 working hours.</span><br />
                  Our team looks forward to connecting with you soon.
                </span>
              </div>
            ),
            className: "border-green-400 bg-green-50 text-green-900 shadow-lg",
            variant: "default",
          });
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            enquiryType: "",
            message: "",
            fileUpload: null,
          });
        } else {
          toast({
            title: "Error",
            description:
              "There was an issue with sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description:
            "There was an issue with sending your message. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
      trackFormSubmit()
      handleExcelSheetEntry(templateParams)
    };

    const contactInfo = [
      {
        icon: Mail,
        title: "Email",
        details: "connect@elovient.com",
        link: "mailto:connect@elovient.com"
      },
      {
        icon: Phone,
        title: "Mobile",
        details: "+91 98929 25936",
        link: "tel:+919892925936"
      },
      {
        icon: MapPin,
        title: "Location",
        details: "21st Floor, Commerz II, Oberoi Garden City, International Business Park, Goregaon, Mumbai, Maharashtra 400063, India",
        link: "https://maps.app.goo.gl/Ky9t3YN76XpLuaAS9"
      }
    ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Contact Elovient | Get a Free Project Consultation"
        description="Elovient Software Solutions specialises in crafting cutting-edge software products, custom solutions and digital transformation services."
        keywords="software development, AI solutions, enterprise software, UX design, custom software, IT consulting, digital transformation, scalable solutions, agile development"
        url="https://www.elovient.com/contact"
        image="/lovable-uploads/2f755273-f396-4f5d-b421-5ea9efb49b34.png"
      />
      <Navbar />

              <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with technology that actually fits your needs?
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
            Let's talk about what your business needs – and how we can build it right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={formData.phone}
                    onChange={(v) => handleChange({ target: { name: 'phone', value: v || '' } })}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="enquiryType" className="font-semibold">
                    Enquiry Type <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={formData.enquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="saas-paas">SaaS & PaaS Development</option>
                    <option value="enterprise-modernization">Enterprise Application Modernization</option>
                    <option value="ai-solutions">AI & Data Solutions</option>
                    <option value="system-integration">System Integration</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.enquiryType && (
                    <p className="text-red-500 text-sm">{formErrors.enquiryType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {formErrors.company && (
                    <p className="text-red-500 text-sm">{formErrors.company}</p>
                  )}
                </div>

                {/* 🆕 Role/Designation moved here */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="font-semibold">
                    Role/Designation (Optional)
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Enter your role or designation"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  {formErrors.role && (
                    <p className="text-red-500 text-sm">{formErrors.role}</p>
                  )}
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                // required
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>

              <p className="text-xs text-gray-500 text-left font-regular">
                Your details will be used solely to respond to your query and will not be shared with third parties.
              </p>

              <div className="space-y-2">
                <Label className="font-semibold">
                  Please share any relevant documents to help us understand your query better
                </Label>
                <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center bg-purple-50/30 hover:bg-purple-50/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center">
                    <div className="bg-purple-100 rounded-lg p-3 mb-3">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium mb-1">
                      {formData.fileUpload ? formData.fileUpload.name : "Click to upload or drag & drop your file"}
                    </p>
                    <p className="text-sm text-gray-500">Max 10 MB permitted, supported file extensions are (PDF and Docx)</p>
                  </label>
                </div>
                {formErrors.fileUpload && (
                  <p className="text-red-500 text-sm">{formErrors.fileUpload}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Inforrmation */}
          <div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-6">
                We value every inquiry. Reach out and a member of our team will get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="rounded-full bg-primary p-2 mr-4">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-700 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="rounded-full bg-primary p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                    <div className="text-gray-700">
                      <div>Monday to Friday: <span className="font-medium">9:00 AM – 7:00 PM IST</span></div>
                      <div>Saturday: <span className="font-medium">9:00 AM – 5:00 PM IST</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Build Something Exceptional Together
              </h2>
              <p className="text-gray-700 mb-6">
                Whether you have a project in mind or are exploring your options, we're here to understand your challenges and deliver solutions that drive real outcomes.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-gray-700">
                    Digital Transformation Consulting
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-gray-700">
                    Enterprise System Integration
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-gray-700">Custom Software Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span className="text-gray-700">
                    Product Enablement & GTM Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

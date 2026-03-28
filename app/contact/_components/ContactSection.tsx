"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (token: string | null): void => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col lg:flex-row">
          {/* Left Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="bg-[#990422] dark:bg-[rgb(122,3,27)] text-white p-8 lg:p-10 shadow-2xl lg:absolute lg:-left-10 lg:top-[4.5rem] lg:w-[22rem] lg:h-auto z-20 rounded-xl"
          >
            <div className="flex flex-col items-center text-center mb-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mb-6 flex justify-center"
              >
                <Send className="w-12 h-12 text-white" strokeWidth={1.5} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-2xl max-w-48 font-bold mb-2"
              >
                Send Us an Email
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white max-w-40 text-sm mb-4"
              >
                You can also reach us on Social Media
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex gap-3 mb-5 justify-center"
              >
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                  (Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-7 h-7 rounded flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.a>
                  )
                )}
              </motion.div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="w-7 h-7 text-[#990422]" />,
                  title: "Contact Us",
                  info: ["+92 326 9508034", "+92 300 9508035"],
                },
                {
                  icon: <Mail className="w-7 h-7 text-[#990422]" />,
                  title: "Email Us",
                  info: ["Info@windsorconsultancyservices.com"],
                },
                {
                  icon: <MapPin className="w-7 h-7 text-[#990422]" />,
                  title: "Location",
                  info: ["35-Nargis Block Allama Iqbal Town Lahore"],
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + idx * 0.2, duration: 1 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.info.map((line, i) => (
                      <p key={i} className="text-white text-xs">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-gray-800 p-8 lg:p-12 lg:pl-20 w-full lg:ml-40 mt-6 lg:mt-0 z-10 min-h-[43.75rem]"
            style={{
              boxShadow:
                "4px 4px 4px 0px #00000040, 4px 4px 4px 0px #00000040 inset",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 lg:ml-32">
              {/* Input Fields */}
              {[
                { id: "name", label: "Name", placeholder: "e.g. Harry" },
                {
                  id: "email",
                  label: "Email",
                  placeholder: "Harry@example.com",
                },
                {
                  id: "subject",
                  label: "Subject",
                  placeholder: "Inquiry about Study Visa",
                },
              ].map((field, idx) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + idx * 0.2, duration: 1 }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your {field.label}
                  </label>
                  <input
                    type={field.id === "email" ? "email" : "text"}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors text-sm"
                    required
                  />
                </motion.div>
              ))}

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors text-sm"
                />
              </motion.div>

              {/* Captcha */}
              <div className="flex justify-start">
                <div className="max-w-full overflow-hidden">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdRDV8sAAAAAIUtXymT3Imk8MNf0kAVSOXY3atj"
                    onChange={handleCaptchaChange}
                    theme="light"
                  />
                </div>
              </div>

              {/* Submit Button */}
              {captchaToken && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="flex justify-end"
                >
                  <button
                    type="submit"
                    className="bg-[#990422] dark:bg-[#7a031b] hover:bg-[#5a0114] dark:hover:bg-[#5a0114] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    Send Message
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

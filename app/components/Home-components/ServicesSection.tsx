"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Career Counseling",
    description:
      "Personalized guidance to help students choose the right course, university, and study destination.",
    image: "/home/services/image-1.png",
  },
  {
    title: "Visa Assistance",
    description:
      "Professional visa support ensuring accurate documentation and a smooth application process.",
    image: "/home/services/image-2.png",
  },
  {
    title: "Admission Guidance",
    description:
      "End-to-end assistance with university selection and admission applications.",
    image: "/home/services/image-3.png",
  },
  {
    title: "Institutional Information",
    description:
      "Clear insights into international institutions, programs, and entry requirements.",
    image: "/home/services/image-4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] dark:text-[#dda23d] uppercase">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#990422] dark:text-white mb-2 leading-tight">
            Our Services
          </h2>

          <p className="mt-3 max-w-4xl text-lg sm:text-xl mx-auto text-[#6A6868] dark:text-white">
            Comprehensive support at every step of your study abroad journey.
            From counseling to post-arrival assistance, we've got you covered.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}

              /* Entrance Animation */
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              /* Hover Animation */
              whileHover={{
                y: -12,
                scale: 1.03,
                borderColor: "#990422",
                boxShadow: "0px 20px 30px rgba(153, 4, 34, 0.25)",
              }}
              className="relative bg-white dark:bg-neutral-900 rounded-xl
              border border-red-200 dark:border-neutral-800
              shadow-[2px_5px_8.3px_0px_#99042166,-2px_-4px_8px_0px_#99042166]
              transition-colors duration-300 p-6 cursor-default"
            >
              {/* Floating Image */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20
                flex items-center justify-center rounded-full
                bg-white dark:bg-white
                shadow-[2px_4px_10.2px_0px_#99042166]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="pt-12 text-center">
                <h3 className="text-[23px] font-bold text-[#990422] dark:text-[#c00228]">
                  {service.title}
                </h3>
                <p className="mt-2 text-lg text-[#6A6868] dark:text-white">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

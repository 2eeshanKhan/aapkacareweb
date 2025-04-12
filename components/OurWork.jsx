"use client";

import React from "react";
import { motion } from "framer-motion"; // Animation Library

const steps = [
  {
    step: "Step 1",
    title: "Connect with a Care Expert",
    description: "Share your details & surgery preferences.",
    image: "images/work-1.png",
  },
  {
    step: "Step 2",
    title: "Doctor's Recommendation",
    description:
      "Get personalized options for doctors & hospitals that match your requirements.",
    image: "images/work-2.png",
  },
  {
    step: "Step 3",
    title: "Surgery Closure",
    description:
      "Assisted transport & hospital admission, cashless & stress-free settlement.",
    image: "images/work-3.png",
  },
  {
    step: "Step 4",
    title: "Post-Surgery Support",
    description:
      "Free follow-ups post-surgery, plus a one-year Aapka Care subscription.",
    image: "images/work-4.png",
  },
];

const OurWork = () => {
  return (
    <section
      className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-blue-500 font-medium uppercase tracking-widest">
          It's really easy
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Here’s how it works
        </h2>
      </motion.div>

      {/* Steps Timeline */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.img
                src={step.image}
                alt={step.title}
                className="w-[320px] h-[220px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start px-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full text-lg shadow-md">
                  {index + 1}
                </div>
                <p className="text-blue-600 font-semibold text-lg">{step.step}</p>
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center md:text-left">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;

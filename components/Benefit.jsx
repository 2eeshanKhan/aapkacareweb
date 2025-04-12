import React from "react";
import { FaUserMd, FaUsers, FaPhoneAlt, FaMicrochip } from "react-icons/fa";

const Benefit = () => {
  const services = [
    {
      icon: <FaUserMd className="text-white text-4xl" />,
      title: "Qualified Doctors",
      description:
        "Get the best healthcare professionals to take care of your health.",
    },
    {
      icon: <FaUsers className="text-white text-4xl" />,
      title: "Emergency Care",
      description:
        "We provide 24x7 emergency services to handle critical situations.",
    },
    {
      icon: <FaPhoneAlt className="text-white text-4xl" />,
      title: "24/7 Support",
      description:
        "Our team is available round the clock to assist you anytime.",
    },
    {
      icon: <FaMicrochip className="text-white text-4xl" />,
      title: "AI-Powered Care",
      description:
        "We use AI to find the best hospital and doctor based on your needs.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          🌟 Why Choose Us?
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Experience world-class healthcare with our top-notch services.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 transition-transform transform hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;

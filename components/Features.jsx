import React from "react";
import { Search, Calendar, Pencil } from "lucide-react";

const features = [
  {
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "Search Best Online",
    description:
      "Find the best hospitals and doctors near you based on your preferences and needs.",
  },
  {
    icon: <Calendar className="h-12 w-12 text-blue-600" />,
    title: "Get Instant Appointment",
    description:
      "Easily book an appointment through the Aapkacare app at your convenience.",
  },
  {
    icon: <Pencil className="h-12 w-12 text-blue-600" />,
    title: "Leave Your Feedback",
    description:
      "Share your healthcare experience with us. Your feedback helps us improve.",
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Take the Right Step for Your Health
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 p-4 rounded-full shadow-md">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mt-5">{feature.title}</h3>
            <p className="text-gray-600 mt-3 text-sm max-w-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

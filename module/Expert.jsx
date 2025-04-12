"use client"
import { useState } from "react";
import TabContent from "./TabContent"; // Import the TabContent component

const Expert = () => {
  const [selectedTab, setSelectedTab] = useState("how");

  const content = {
    how: {
      question: "How do cataracts form?",
      answer:
        "We have a natural lens inside our eyes. The lens bends the light that comes into the eyes and helps us see. Cataracts develop when ageing or injury changes the tissue that makes up the eye's lens. Proteins and fibres in the lens break down and clump together, causing vision to become blurry or cloudy. Other eye conditions, past eye surgery, or medical conditions such as diabetes can cause cataracts.",
    },
    what: {
      question: "What are cataracts?",
      answer:
        "Cataracts are a condition where the lens of the eye becomes cloudy, leading to a decrease in vision. They can develop gradually and affect one or both eyes. Common symptoms include blurry vision, difficulty with night vision, sensitivity to light, and seeing halos around lights.",
    },
    when: {
      question: "When do cataracts typically develop?",
      answer:
        "Cataracts typically develop with age, often becoming noticeable after the age of 40 and more prevalent in individuals over 60. However, they can also develop due to genetic factors, eye injuries, or medical conditions such as diabetes.",
    },
  };

  return (
    <div className="bg-blue-100">
      <div className="max-w-full mx-auto p-6 bg-blue-100 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:pl-30 pl-0 md:w-1/2">
          <img
            alt="A female doctor in a white coat holding a clipboard and smiling"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/vKxrjoV05YQbK2x7eC8iuVF-iU-cPKH8TYa38LVdtFg.jpg"
            width="400"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:mr-50 mr-0">
          <h1 className="text-2xl font-bold text-gray-800">OUR EXPERTS EXPLAIN</h1>

          {/* Tabs */}
          <div className="flex space-x-4 mt-4">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                className={`px-6 py-2 rounded-full text-white font-semibold transition-all ${
                  selectedTab === key ? "bg-green-500" : "bg-gray-500"
                }`}
                onClick={() => setSelectedTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content Component */}
          <TabContent selectedTab={selectedTab} content={content} />
        </div>
      </div>
    </div>
  );
};

export default Expert;

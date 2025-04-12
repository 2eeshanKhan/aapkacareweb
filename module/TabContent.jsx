import React from "react";

const TabContent = ({ selectedTab, content }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800">{content[selectedTab].question}</h2>

      <div className="mb-4 mt-4">
      <p className="text-xl inline font-bold text-gray-800 ">{content[selectedTab].lide}</p>
      <p className="text-gray-700 inline text-xl">{content[selectedTab].answer}</p>
      </div>

      <div className="mb-4">
      <p className="text-xl inline font-bold text-gray-800 ">{content[selectedTab].lide1}</p>
      <p className="text-gray-700 text-xl inline">{content[selectedTab].answer1}</p>
      </div>

      <div className="mb-4">
      <p className="text-xl font-bold text-gray-800 inline">{content[selectedTab].lide2}</p>
      <p className="text-gray-700 text-xl inline">{content[selectedTab].answer2}</p>
      </div>

      <div className="mb-4">
      <p className="text-xl font-bold text-gray-800 inline">{content[selectedTab].lide3}</p>
      <p className="text-gray-700 text-xl inline">{content[selectedTab].answer3}</p>
      </div>

      <div className="mb-4">
      <p className="text-xl font-bold text-gray-800 inline">{content[selectedTab].lide4}</p>
      <p className="text-gray-700 text-xl inline">{content[selectedTab].answer4}</p>
      </div>
    </div>
  );
};

export default TabContent;

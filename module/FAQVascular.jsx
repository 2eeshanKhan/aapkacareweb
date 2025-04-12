'use client'
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQvascular = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Varicocelectomy ",
      content: `This is the most common surgical procedure for varicocele treatment. It involves making a small incision in the groin or abdomen and using a microscope or other magnifying tools to locate and ligate the enlarged veins. This procedure redirects blood flow from the varicocele, reducing its size and symptoms. `
    },
    {
      title: "Laparoscopic Varicocelectomy ",
      content: `In this minimally invasive procedure, tiny incisions are made to access and ligate the affected veins, minimizing scarring and reducing recovery time. `,
    },
    {
      title: "Percutaneous Embolization ",
      content: `This non-surgical approach involves using a catheter to block off the varicocele by inserting a coil or other embolization materials.`,
    }
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
    <>
    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-300 rounded-lg mb-2">
          <button
            className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
            onClick={() => toggleAccordion(index)}
          >
            {faq.title}
            <ChevronRight
              className={`transform transition-transform ${
                openIndex === index ? "rotate-90" : ""
              }`}
            />
          </button>
          {openIndex === index && faq.content && (
            <div className="p-4 text-gray-600 bg-gray-100 rounded-b-lg">
              {faq.content.split("\n").map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
    );
}

export default FAQvascular;

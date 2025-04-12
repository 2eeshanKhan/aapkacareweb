'use client'
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQFistula = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Types of Fistula Surgery ",
      content: `There are several surgical options to treat fistulas 
      Seton Placement: It involves placing a suture (seton) through the fistula to help it drain and heal gradually. 
      Fistulotomy: A procedure involves cutting the fistula open to allow it to heal from the inside out. 
      Advancement Flap Repair: A surgical technique where healthy tissue 
      covers the fistula, promoting healing. 
      Laser Surgery: A modern, minimally invasive approach that offers numerous benefits is discussed in the next. `
    },
    {
      title: "Importance of Timely Treatment ",
      content: `Prompt treatment of a fistula is crucial to prevent complications and alleviate discomfort. Delaying treatment may lead to chronic infections, increased pain, and the risk of abscess formation. `,
    },
    {
      title: "Risks of Delayed Treatment ",
      content: `If left untreated, fistulas can worsen over time and result in severe consequences such as incontinence and the need for more complex surgeries.`,
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
export default FAQFistula;

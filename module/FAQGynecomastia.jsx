'use client'
import React,{useState} from 'react';
import { ChevronRight } from "lucide-react";


const FAQGynecomastia = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Hormone imbalance",
        content: `Hormonal changes are one of the most common causes of Gynecomastia. During puberty, the hormonal balance shifts, and it can result in temporary breast tissue enlargement. Hormonal imbalances in adult men can also occur due to aging, leading to similar changes. `
      },
      {
        title: "Obesity",
        content: `Excess body fat can lead to increased levels of estrogen in the body because fat tissue can convert testosterone to estrogen. This hormonal imbalance can contribute to Gynecomastia in obese individuals. `,
      },
      {
        title: "Medication",
        content: `Several medications can cause Gynecomastia as a side effect. These may include certain antipsychotic drugs, anti-androgens (used in prostate cancer treatment), some antibiotics, anti-ulcer medications (such as cimetidine), and certain cardiovascular medications. `,
      },
      {
        title: "Pubertal Gynecomastia",
        content: `Gynecomastia is relatively common during puberty due to hormonal fluctuations. It typically resolves on its own as hormonal balance stabilizes`,
      },
      {
        title: "Aging",
        content: `As men age, there is a natural decline in testosterone levels, which can contribute to an increased risk of developing Gynecomastia`,
      }
    ];
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
      <h2 className="flex justify-center text-3xl mb-6">Identify the signs of Gynecomastia</h2>
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
            <div className="p-4  rounded-b-lg">
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

export default FAQGynecomastia;

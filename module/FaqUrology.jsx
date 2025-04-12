"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQUrology = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Calcium Oxalate Stones ",
      content: `These are the most common type of kidney stones, primarily composed of calcium oxalate. High levels of dietary oxalate or an overproduction of oxalate by the body can contribute to the formation of these stones. They can occur in individuals with hypercalciuria (excessive calcium excretion) or primary hyperoxaluria (a genetic disorder). `
    },
    {
      title: "Calcium Phosphate Stones ",
      content: `These stones primarily comprise calcium phosphate. They can form in conditions with elevated urine pH (alkaline urine) and are less common than calcium oxalate stones. Some medical conditions and medications can increase the risk of calcium phosphate stones. `,
    },
    {
      title: "Struvite Stones ",
      content: `Struvite stones, also known as infection stones, typically comprise magnesium ammonium phosphate. They are associated with urinary tract infections (UTIs) caused by bacteria that produce ammonia. These stones can increase and may cause blockages in the urinary tract. `,
    },
    {
      title: "Uric Acid Stones ",
      content: `Uric acid stones more frequently occur in men than in women who don 't drink enough water or who consume a lot of animal proteins.Additionally, they are more likely to develop in patients with gout, who have a family history of these kidney stones, or who have undergone chemotherapy. `,
    },
    {
      title: "Cystine Stones ",
      content: `Uric acid stones are composed of uric acid crystals and can form in individuals with high uric acid levels in their urine. Conditions like gout, certain metabolic disorders, and a high-purine diet can increase the risk of uric acid stone formation. `,
    },
    {
      title: "Other Stones ",
      content: `If you are suffering from persistent refractive error-related discomfort in your eyes and having issues related to your vision. Then Aapkacare Health is here to help you. We will appoint you with the best surgeons near you and will make your LASIK surgery a hassle-free one. Your care will be arranged before, during, and after the procedure by our eye surgeons at an affordable price. 
      • Xanthine Stones: These stones are made of xanthine, a substance produced by specific metabolic processes. They are rare. 
      • Drug-Induced Stones: Some medications can lead to the formation of kidney stones, particularly when they alter the composition of urine.`,
    },
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

export default FAQUrology;

"use client";

import React from 'react';
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';

import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';
import FAQFistula from '@/module/FAQFistula';


const Fistula = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Anal ",
        content: `There could be three different types of fistula development around the anus. 
        • An anorectal fistula is the medical term for a fistula that develops between the anal canal and the skin around the anal entrance. 
        • A rectovaginal or anovaginal fistula refers to a hole that forms between the rectum or anus and the vagina. 
        • A fistula between the vagina and colon can develop occasionally.The term for this is colovaginal fistula. `
      },
      {
        title: "Intestines ",
        content: `An enteroenteric fistula occurs when a connection develops between two segments of the intestine. Sometimes a fistula can develop between the skin and the small intestine or the skin and the colon. The following are some signs of intestinal fistulas: 
        • Either abdominal pain or discomfort between the genitals and the anus. 
        • Urinary tract infections that recur. 
        • Severe diarrhoea or gas. 
        • Stomach, bladder, or intestinal gas. 
        • Loss of weight`,
      },
      {
        title: "Urinary tract ",
        content: `A fistula between the uterus and the bladder is also possible. The urethra and the vagina may occasionally form a hole, as well as urinary bladder and the vagina. The following are signs of urinary tract fistula: 
        • Discomfort while urinating. 
        • Frequent urination. 
        • Hazy and odorous urine.`,
      }
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const causes = [
        {
            description: 'Previously drained anal abscess ',
            icon: "/images/proctology/p-5.png"
        },
        {
            description: 'Trauma or constant pressure to the anal area ',
            icon: "/images/proctology/p-6.png"
        },
        {
            description: 'Crohn`s disease or other inflammatory bowel diseases ',
            icon: "/images/proctology/p-7.png"
        },
        {
            description: 'Infections of the anal area from STDS ',
            icon: "/images/proctology/p-6.png"
        },
        {
            description: 'Surgery or radiation for treatment of anal cancer',
            icon: "/images/proctology/p-8.png"
        }
    ];
    const reasons = [
        {
          icon: "/images/proctology/p-1.png",
          title: "Pain and Discomfort ",
          description: "Piles can cause pain, itching, and discomfort around the anal area. Some individuals may experience sharp, stabbing pain during bowel movements. "
        },
        {
          icon: "/images/proctology/p-2.png",
          title: "Bleeding ",
          description: "One of the most common symptoms is rectal bleeding, often noticed as bright red blood on toilet paper or in the toilet bowl. "
        },
        {
          icon: "/images/proctology/p-3.png",
          title: "Swelling ",
          description: "Piles can lead to lumps or swelling in the anal area."
        }
    ];
    return (
        <div>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" py-6 rounded-lg flex flex-col md:flex-row md:mx-20 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Laser Surgery for Fistula</h1>
                        <p className="text-gray-600 mt-2">Want to go through Laser Fistula surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className="py-6 rounded-lg flex flex-col md:flex-row items-center md:px-25 px-5">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is an Anal Fistula? </h2>
                        <p className="text-gray-700">A fistula is an abnormal connection or passageway between two organs or vessels within the body. In. fistula surgery, we primarily focus on anorectal fistulas, which connect the anal canal to the skin near the anus. </p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/proctology/p-f-main.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-2">Identify the Signs of Fistula </h2>
                <p className='text-center text-xl mb-6'>Common signs of anorectal fistulas include </p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 3).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the Causes of Fistula </h1>
                <p className="text-center text-xl mb-6 ">A majority of anal fistulas occur due to an infection that starts in an anal gland. This infection forms an abscess that either drains on its own or is drained surgically through the skin next to the anus 
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center md:px-30 px-auto">
                    {causes.slice(0, 5).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                    <h1 className="font-bold text-3xl mb-4">Different kinds of Fistula</h1>
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
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/proctology/p-p-1.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div> 

            <div className='bg-[#E2F2FD] mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <FAQFistula/>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/proctology/p-2f-1.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <div className='container max-w-full'>
                <div className="bg-white w-full flex flex-col md:flex-row md:px-30 px-5 gap-10">
                    <div className='flex flex-col justify-center'>
                        <h1 className="text-3xl font-bold mb-4">Preventing Fistulas </h1>
                        <ul className='mb-2'>
                            <li><span className='font-bold'>Maintaining Good Hygiene: </span>Regular cleaning of the anal area is essential to prevent infections that can lead to fistulas. </li>
                            <li><span className='font-bold'>Dietary and Lifestyle Factors:</span>A healthy diet and lifestyle can reduce the risk of conditions that may cause fistulas, such as Crohn's disease or diverticulitis.  </li>
                            <li><span className='font-bold'>Prompt Treatment of Infections: </span>Infections in the anal area should be treated promptly to prevent them from progressing to fistulas.  </li>
                        </ul>
                        <p>Knowledge is your greatest ally whether you are considering treatment options or seeking to prevent fistulas. For personalized advice and treatment, consult a healthcare professional or visit Aapkacare for expert guidance and support.</p>
                    </div>
                    <img alt="Surgeons" className="md:py-5 py-2 rounded-lg w-[700px] h-[450px] md:pt-12 pt-5" src="/images/proctology/p-2f-2.png"/>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </div>
    );
}

export default Fistula;

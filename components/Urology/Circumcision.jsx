'use client'
import React from 'react';
import { useState } from "react";
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';

import TabContent from '@/module/TabContent';
import ReasonCard from '@/module/ReasonCard';



import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const Circumcision = () => {
    const [selectedTab, setSelectedTab] = useState("How");
    const content = {
        How: {
          question: "How should a circumcised penis be taken care of ? ",
          lide: "• Keep It Clean ",
          answer:"Cleanliness is crucial during the healing process. ",
          lide1:"• Gentle Patting",
          answer1:"Gently pat the penis dry with a clean, soft cloth after washing. ",
          lide2:"• Avoid Aggressive Cleaning Do ",
          answer2:"Do not try to forcibly retract the remaining foreskin if it hasn't fully separated from the head of the penis. This may lead to unwanted injury.",
          lide3:"• Avoid Bathing in Soapy Water ",
          answer3:"While the circumcision site is healing, it's advisable to avoid bathing in soapy water, especially in a bathtub. Instead, gentle showers prevent the incision from soaking in potentially irritating substances. ",
          lide4:"• Follow Post-Operative Instructions ",
          answer4:"If the circumcision was performed on an adult or older child, it's crucial to follow the specific post-operative instructions provided by the healthcare provider",

        },
        What: {
          question: "What are some medical issues that may require circumcision? ",
          lide: "• Phimosis ",
          answer:" Phimosis is when the foreskin is too tight and cannot be retracted over the head of the penis.",
          lide1:"• Paraphimosis ",
          answer1:"Paraphimosis occurs when the foreskin is retracted behind the head of the penis and becomes trapped, causing swelling and constriction of blood flow. ",
          lide2:"• Penile Cancer ",
          answer2:"While penile cancer is rare, but more common in uncircumcised men ",
          lide3:"• Balanitis Xerotica Obliterans (BXO)  ",
          answer3:"BXO is a condition that causes the foreskin to become thickened and scarred, often leading to phimosis.",
          lide4:"• Recurrent Foreskin Infections  ",
          answer4:"In some cases, individuals may experience recurrent infections of the foreskin or glans, which do not respond to conservative treatments.",

        },
    };
    const causes = [
        {
            title: 'Hygiene ',
            description: 'Circumcision may make it easier to clean the penis, as there is no foreskin to retract and clean underneath. This can reduce the risk of Infections and the buildup of smegma, a substance that can accumulate under the foreskin.',
            icon: "/images/circumcision/circu-1.png"
        },
        {
            title: 'Reduced Risk of Urinary Tract Infections (UTIs)',
            description: 'Some studies have suggested that circumcised males may have a lower risk of UTIs, particularly in infancy. However, the overall risk of UTIs in males is relatively low, and the protective effect. of circumcision is not considered a compelling reason for the procedure.',
            icon: "/images/circumcision/circu-2.png"
        },
        {
            title: 'Lower Risk of Sexually Transmitted Infections (STIs) ',
            description: 'Research has indicated that circumcision may reduce the risk of certain STIs, including HIV, herpes, and HPV, in males. It is important to note that circumcision is not a substitute for sate sexual practices and condom use. ',
            icon: "/images/circumcision/circu-3.png"
        },
        {
            title: 'Decreased Risk of Penile Cancer ',
            description: 'Circumcision has been associated with a reduced risk of penile cancer. However, penile cancer is rare, and the risk reduction is relatively small. Other factors, such as smoking and HPV Infection, play a more significant role in penile cancer risk...',
            icon: "/images/circumcision/circu-4.png"
        },
        {
            title: 'Prevention of Phimosis ',
            description: 'Circumcision can prevent or treat phimosis, a condition in which the foreskin becomes too tight to retract over the head of the penis. Phimosis can be painful and may lead to other health issues.',
            icon: "/images/circumcision/circu-5.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/circumcision/sign-1.png",
          description: "Inability to pull foreskin back"
        },
        {
          icon: "/images/circumcision/sign-2.png",
          description: "The foreskin is trapped behind the glans"
        },
        {
          icon: "/images/circumcision/sign-3.png",
          description: "Painful and swollen penis"
        },
        {
          icon: "/images/circumcision/sign-4.png",
          description: "Not being able to clear under the foreskin"
        }
      ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Circumcision Surgery</h1>
                        <p className="text-gray-600 mt-2">New studies and cultural shifts have encouraged us to take a deeper look at the practice of circumcision in recent decades. Dedicated to providing hassle-free laser circumcision surgery at the best facilities with individualised care, Aapkacare Health is a patient-centered, technology-driven healthcare service provider. Meet with Aapkacare Health's skilled surgeons and opt for a highly advanced circumcision surgery at affordable rates. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
      
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Circumcision (Sunnath)? </h2>
                        <p className="text-gray-700">Circumcision is a surgical procedure that involves the removal of the foreskin, which is the fold of skin that covers the head of the penis. It is typically performed on males, and the practice has been carried out for centuries for various cultural, religious, and medical reasons. It's important to note that opinions about circumcision vary widely, and deciding to have a circumcision is personal. It should be made after carefully considering all relevant factors, including medical advice, cultural and religious beliefs, and personal.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/circumcision/circumcision-1.png"alt="Cataract illustration"className="w-[625px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-25 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                    <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>

            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the causes of Hernia </h1>
                <p className="text-center text-xl mb-6 ">Hernias develop when a combination of muscle weakness and increased pressure on the abdominal wall. The specific causes of hernias can vary depending on the type of hernias. Some common causes of Hernia include 
                </p>
                <h2 className="text-center text-3xl font-bold mb-6">These are the most typical causes of muscle weaknesses that lead to hernia: </h2>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 6).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#E4F4FD]">
                <div className="max-w-full mx-auto p-6 bg-[#E4F4FD] flex flex-col md:flex-row items-center">
                    {/* Left Image Section */}
                    <div className="w-full md:pl-30 pl-0 md:w-1/2">
                        <img alt="A female doctor in a white coat holding a clipboard and smiling"height="400"src="https://storage.googleapis.com/a1aa/image/vKxrjoV05YQbK2x7eC8iuVF-iU-cPKH8TYa38LVdtFg.jpg"width="400"/>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:mr-50 mr-0">

                        {/* Tabs */}
                        <div className="flex space-x-4 mt-4">
                            {Object.keys(content).map((key) => (
                            <button key={key} className={`px-6 py-2 rounded-full text-white font-semibold transition-all ${selectedTab === key ? "bg-green-500" : "bg-gray-500"}`}
                            onClick={() => setSelectedTab(key)}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </button>
                            ))}
                        </div>

                        {/* Tab Content Component */}
                        <TabContent selectedTab={selectedTab} content={content} />
                    </div>
                </div>
            </div>
            <div className='bg-white max-w-fit h-5'></div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default Circumcision;

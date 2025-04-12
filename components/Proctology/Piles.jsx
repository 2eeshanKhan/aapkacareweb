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
import FAQproctology from '@/module/FAQProctology';

const Piles = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Prevention ",
        content: `Preventing piles involves adopting a healthy lifestyle and dietary habits: 
        - Consume a high-fiber diet to promote regular and soft bowel movements. 
        - Stay well-hydrated to avoid constipation. 
        - Engage in regular physical activity to improve circulation. 
        - Avoid straining during bowel movements. 
        - Limit the use of laxatives and alcohol. 
        - Take breaks if you have a sedentary job to reduce pressure on the rectal area. `
      },
      {
        title: "After Treatment ",
        content: `Surgical and Non-Surgical Options: 

        Treatment for piles can be either surgical or non-surgical, depending on the severity of the condition. Surgical treatments, like hemorrhoidectomy and rubber band ligation, are typically recommended for severe cases. 

        Non-surgical treatments often involve dietary and lifestyle modifications, medications, or minimally invasive procedures. `,
      },
      {
        title: "Expert Doctors ",
        content: `Choosing an experienced proctologist or colorectal surgeon is crucial for the success of your treatment. These specialists can evaluate your condition, discuss appropriate therapies, and provide guidance throughout your recovery.`,
      }
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const causes = [
        {
            description: 'Chronic constipation that involves a struggle to pass stool putting extra strain on the blood vessel walls which can lead to piles. ',
            icon: "/images/circumcision/u-1.png"
        },
        {
            description: 'Too much time spent sitting down, especially while using the restroom, might result in hemorrhoids. ',
            icon: "/images/circumcision/u-2.png"
        },
        {
            description: 'It could be genetic as piles is a condition that certain people are prone to based on their family genes. ',
            icon: "/images/circumcision/u-3.png"
        },
        {
            description: 'GlConsuming foods deficient in fibre may make piles more likely. ',
            icon: "/images/circumcision/u-4.png"
        },
        {
            description: 'Lifting heavy objects repeatedly can result in the development of piles ',
            icon: "/images/circumcision/u-5.png"
        },
        {
            description: 'Anal sex can result in new hemorrhoids or make existing ones worse.',
            icon: "/images/circumcision/u-6.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/laparoscopy/hernia-1.png",
          title: "Pain and Discomfort ",
          description: "Piles can cause pain, itching, and discomfort around the anal area. Some individuals may experience sharp, stabbing pain during bowel movements. "
        },
        {
          icon: "/images/laparoscopy/hernia-2.png",
          title: "Bleeding ",
          description: "One of the most common symptoms is rectal bleeding. often noticed as bright red blood on toilet paper or in the toilet bowl. "
        },
        {
          icon: "/images/laparoscopy/hernia-3.png",
          title: "Swelling ",
          description: "Piles can lead to lumps or swelling in the anal area. "
        },
        {
          icon: "/images/laparoscopy/hernia-4.png",
          title: "Mucous Discharge ",
          description: "In some cases, piles may cause the release of mucous from the anus. "
        },
        {
          icon: "/images/laparoscopy/hernia-3.png",
          title: "Difficulty in Passing Stools: ",
          description: "Individuals with piles may find it challenging to pass stools, which can lead to further discomfort."
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" py-6 rounded-lg flex flex-col md:flex-row md:mx-20 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Piles Treatment</h1>
                        <p className="text-gray-600 mt-2">Want to go through Piles surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>

            <div className="mx-auto">
                <section className="py-6 rounded-lg flex flex-col md:flex-row items-center md:px-25 px-5 bg-[#E2F2FD]">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What are Piles? </h2>
                        <p className="text-gray-700">Piles, medically known as hemorrhoids, are a common condition that affects millions of people worldwide. These swollen blood vessels in the rectum or anus can be a source of discomfort, but they are manageable and treatable. In this comprehensive guide, we'll explore piles, including signs and symptoms, surgical and non-surgical treatment options, the importance of seeking expert doctors, and the role of Aapkacare. We'll also discuss prevention strategies and when to seek treatment.</p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/proctology/p-p-main.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identify the Signs and Symptomsof Piles </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                    <div className="md:col-start-2 md:row-start-2">
                        <ReasonCard {...reasons[4]} />
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                    <h1 className="font-bold text-3xl mb-4">When to Get Treatment</h1>
                    <p className="text-xl mb-4">it`s essential to seek treatment when you experience persistent or servere symptoms. Timely intervention can prevent the condition from worsening. Don`t hesitable to consult a healthcare proffestional or proctologist when you notice rectal bleeding, persistent pain, or significant discomfort.</p>
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

            <div className="max-w-full mx-auto py-6 md:px-30 px-5 bg-[#E2F2FD] rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the Causes of Piles </h1>
                <p className="text-center text-xl mb-6 ">There is a wide range of factors that cause piles, both internal and external. Here are some of them. The most common causes of piles include 
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 6).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>         

            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <FAQproctology/>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/proctology/p-p-2.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default Piles;

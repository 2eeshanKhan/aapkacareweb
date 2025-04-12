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

const Fissure = () => {
    const causes = [
        {
            title: 'Hard or Large Stools ',
            description: 'One of the most common causes of anal fissures is passing hard or large stools. This can stretch the anal canal and lead to tears in the delicate anal tissue. ',
            icon: "/images/proctology/p-5.png"
        },
        {
            title: 'Straining During Bowel Movements ',
            description: 'Excessive straining during bowel movements, often due to constipation, can increase pressure in the rectum and lead to fissures. ',
            icon: "/images/proctology/p-6.png"
        },
        {
            title: 'Chronic Diarrhea ',
            description: 'Frequent, watery bowel movements can irritate the anal area and make it more susceptible to fissures. ',
            icon: "/images/proctology/p-7.png"
        },
        {
            title: 'Anal Trauma ',
            description: 'Physical trauma to the anal area, such as from a foreign object, rough wiping, or anal intercourse, can cause fissures. ',
            icon: "/images/proctology/p-6.png"
        },
        {
            title: 'Inflammatory Bowel Disease (IBD) ',
            description: 'Conditions like Crohn`s disease and ulcerative colitis, which are forms of IBD, can lead to chronic inflammation and damage to the anal lining, increasing the risk of fissures. ',
            icon: "/images/proctology/p-8.png"
        },
        {
            title: 'Anal Conditions ',
            description: 'Certain conditions like hemorrhoids, anal polyps, or tumors can pressure the anal lining and increase the risk of fissures. ',
            icon: "/images/proctology/p-8.png"
        },
        {
            title: 'Spasms of the Anal Sphincter ',
            description: 'Abnormal or excessive spasms of the anal sphincter muscle can cause fissures or worsen existing cracks. ',
            icon: "/images/proctology/p-6.png"
        },
        {
            title: 'Childbirth ',
            description: 'In some cases, women may develop anal fissures during childbirth due to the pressure and stretching of the anal canal. ',
            icon: "/images/proctology/p-8.png"
        },
        {
            title: 'Age ',
            description: 'As people age, the anal tissue can become less elastic and more prone to injury, increasing the likelihood of fissures.',
            icon: "/images/proctology/p-8.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/proctology/p-1.png",
          title: "Pain during bowel movements ",
          description: "A sharp, stabbing pain while passing stool is a common symptom of an anal fissure, "
        },
        {
          icon: "/images/proctology/p-2.png",
          title: "Bright red blood in stool or on toilet paper ",
          description: "Fissures can cause bleeding during and after bowel movements. "
        },
        {
          icon: "/images/proctology/p-3.png",
          title: "Itching and burning ",
          description: "The affected area may feel itchy and uncomfortable. "
        },
        {
          icon: "/images/proctology/p-4.png",
          title: "Feeling a lump or skin tag ",
          description: "Sometimes, a small lump or skin tag may develop near the anal fissure."
        }
    ];
    return (
        <div>
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

                <section className="py-6 rounded-lg flex flex-col md:flex-row items-center md:px-25 px-5">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What are Piles? </h2>
                        <p className="text-gray-700">Piles, medically known as hemorrhoids, are a common condition that affects millions of people worldwide. These swollen blood vessels in the rectum or anus can be a source of discomfort, but they are manageable and treatable. In this comprehensive guide, we'll explore piles, including signs and symptoms, surgical and non-surgical treatment options, the importance of seeking expert doctors, and the role of Aapkacare. We'll also discuss prevention strategies and when to seek treatment.</p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/proctology/p-f-main.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identify the Signs of Anal Fissure </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the causes of Anal Fissure</h1>
                <p className="text-center text-xl mb-6 ">Here are some of the common causes of anal fissure
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center md:px-30 px-auto">
                    {causes.slice(0, 6).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className='container max-w-full'>
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row md:px-30 px-5 gap-10">
                    <div className='flex flex-col justify-center'>
                        <h1 className="text-3xl font-bold mb-4">When to Seek Treatment</h1>
                        <p className='mb-4'>If you're experiencing any of the signs mentioned above, seeking treatment promptly is crucial. Delaying treatment can lead to the fissure becoming chronic, which is harder to manage. At Aapkacare, we offer comprehensive care for cracks, ensuring comfort and well-being throughout treatment.</p>
                    </div>
                    <img alt="Surgeons" className="md:py-5 py-2 rounded-lg w-[400px] h-[350px] md:pt-12 pt-5" src="/images/docter.png"/>
                </div>
            </div>
            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <FAQproctology/>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/proctology/p-f-1.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </div>
    );
}

export default Fissure;

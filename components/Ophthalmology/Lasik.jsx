"use client"
import { useState } from "react";

import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import TabContent from '@/module/TabContent';
import ReasonsForLasik from '@/module/Container';
import UnderstandCauses from '@/module/Causes';
import ReasonCard from '@/module/ReasonCard'

import Expert from '@/module/Expert';
import FAQ from '@/module/FAQ';

import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';
const LasikSurgery = () => {
    const [selectedTab, setSelectedTab] = useState("what");
    const content = {
        why: {
          question: "Why LASIK surgary is Popular?",
          lide: "Quick Results:",
          answer:"We provide high-quality, affordable healthcare solutions tailored to your needs.",
          lide1:"Minimal Discomfort",
          answer1:"LASIK is a relatively painless procedure. Most patients experince minimal discomfort or pain during and after surgery.",
          lide2:"Long-Lasting Results",
          answer2:"The vision correction achived with LASIK is typically long-lasting."

        },
        what: {
          question: "What sort of results can you expect?",
          lide: "Quick Results:",
          answer:" Improved vision, Quick recovery, Improved lifestyle, Minimal discomfort, if you are appointing your surgary with Aapkacare Health you can expert low cast and handle-free treatment.",
        },
    };
    const reasons = [
        {
          icon: "/images/lasik-1.png",
          title: "Improved  Vision",
          description: "LASIK can correct vision problems like myopia, hyperopia, and astigmatism very quickly."
        },
        {
          icon: "/images/lasik-2.png",
          title: "Cost Savings",
          description: "With Aapkacare Health you can save a lot of money and you will get the best LASIK surgeon at cost cost-effective Lasik surgery rate."
        },
        {
          icon: "/images/lasik-3.png",
          title: "Quick Procedure",
          description: "LASIK surgery can be done in 30 minutes and they are very effective. So within less period, you can get quick and visible results."
        },
        {
          icon: "/images/lasik-4.png",
          title: "High Success Rate",
          description: "LASIK has a high success rate and is considered a very safe and effective procedure when performed by a skilled and experienced surgeon."
        },
      ];
      const understand = [
        {
            image: "/images/lasik-1.png",
            top: "Eyeball Length",
            other: "The length of the eyeball is a significant factor in refractive errors. If the eyeball is too long (axialmyopia) or too short (axial hyperopia), it can lead to nearsightedness or farsightedness, respectively."
        },
        {
            image: "/images/lasik-2.png",
            top: "Genetics",
            other: "Refractive errors often run in families, suggesting a genetic predisposition. If your parents or siblings have refractive errors, you may be more likely to develop them as well."
        },
        {
            image: "/images/lasik-3.png",
            top: "Medication",
            other: "Some medications, particularly steroids, can cause changes in the shape and flexibility of the lens, leading to refractive errors."
        },
        {
            image: "/images/lasik-4.png",
            top: "Age",
            other: "Aging can be one of the factors of refractive error and can cause problems in the eyes and vision."
        },
      ];
    
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Lasik Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through LASIK (Laser-Assisted in Situ Keratomileusis) surgery and have a clear vision at an affordable price with the best Lasik doctor in Mumbai? Get all kinds of LASIK consultations for your eye surgery. Here at Aapkacare Health we will provide the best Lasik surgeons and can restore your clear vision in 30 minutes via bladeless LASIK surgery at a reasonable price.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/big-eyes.png" alt="Cataract illustration" className="w-[625px] h-[325px]"/>
                    </div>
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is LASIK Surgery?</h2>
                        <p className="text-gray-700">A laser-assisted surgery is a popular and widely performed refractive eye surgery that can correct your vision problems such as nearsightedness (myopia), farsightedness (hyperopia), and astigmatism. Laser-assisted in situ keratomileusis or LASIK in which "Keratomileusis" refers to the process of correcting the shape of the cornea and the word "Situ" means in position. Throwing away your glasses was never so easy, We at Aapkacare Health assist you in discovering the true yourself with LASIK surgery.</p>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                    <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-bold">Understanding the Causes of Refractive Error</h2>
                <p className="mt-2 text-gray-600">Refractive error is an eye condition that is caused by an irregular cornea. LASIK surgery is performed to correct the abnormal cornea. Here are the various causes of refractive error.</p>
                <h3 className="mt-8 text-xl font-bold">Reasons to Get LASIK Surgery</h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {understand.map((service, index) => (
                    <div
                        key={index}
                        className="p-4 flex flex-col items-center text-center"
                    >
                        <div className="flex justify-center mb-2">
                            <img src={service.image} alt="Medication Icon" className="w-10 h-10 mb-2" />
                        </div>
                        <h4 className="font-bold">{service.top}</h4>
                        <p className="text-gray-600 text-sm">{service.other}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#E4F4FD]">
      <div className="max-w-full mx-auto p-6 bg-[#E4F4FD] flex flex-col md:flex-row items-center">
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
    <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
        <div className='flex rounded-lg p-4'>
            <FAQ/>
        </div>
        <div className='w-full md:w-1/2 mt-0 md:mt-15 md:ml-4 p-4'>
            <img src="/images/lasik-main.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
        </div>
    </div>
    <ReactUs/>
    <DetailedImages/>
    </>
    );
}

export default LasikSurgery;
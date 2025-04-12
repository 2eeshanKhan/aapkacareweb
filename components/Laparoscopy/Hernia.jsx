"use client"
import React from 'react';
import { useState } from "react";
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import ReasonsForLasik from '@/module/Container';
import UnderstandCauses from '@/module/Causes';
import TabContent from '@/module/TabContent';

import Expert from '@/module/Expert';
import FAQ from '@/module/FAQ';

import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const Hernia = () => {
    const [selectedTab, setSelectedTab] = useState("How");
    const content = {
        How: {
          question: "How can Hernia be prevented?",
          lide: "Maintain a Healthy Weight:",
          answer:"Excess body weight can strain your abdominal muscles and increase the risk of hernia development.",
          lide1:"Avoid Straining:",
          answer1:"Chronic straining during bowel movements due to constipation can increase abdominal pressure and the risk of hernias.",
          lide2:"Quit Smoking",
          answer2:"Smoking has been linked to an increased risk of hernia development.",
          lide3:"Quit Smoking",
          answer3:"Smoking has been linked to an increased risk of hernia development.",
          lide4:"Quit Smoking",
          answer4:"Smoking has been linked to an increased risk of hernia development."

        },
        what: {
          question: "What happens if Hernia is left untreated?",
          answer:"Left untreated, Hernia can lead to various complications and potentially become a medical emergency. The severity of these complications potentially depends on the type of Hernia and individual factors, but here are some potential consequences of untreated hernias:",
          lide1:"• Increased Pain and Discomfort:",
          answer1:"Initially, a hernia may cause discomfort or mild pain. The pain and discomfort can worsen without treatment, making it increasingly difficult to perform daily activities.",
          lide2:"• Enlargement of the Hernia:",
          answer2:"Hernias tend to get more prominent and more noticeable over time. As the hernia sac continues to protrude through the weak area in the muscle or tissue, it can become more apparent and cause more significant bulging or swelling.",
          lide3:"• Strangulation:",
          answer3:"One of the most severe complications of a hernia is strangulation, which occurs when the blood supply to the trapped organ is. This can lead to tissue damage and necrosis (tissue death), a medical emergency.",
          lide4:"• Obstruction:",
          answer4:"In some cases, a hernia can become obstructed, which traps a portion of the intestine or other abdominal contents"
        },
    };
    const causes = [
        {
            title: 'Chronic Straining',
            description: 'Chronic straining, such as chronic constipation or chronic obstructive pulmonary disease (COPD), can increase the risk of hernias.',
            icon: "/images/laparoscopy/understand-1.png"
        },
        {
            title: 'Weakness in the Muscles',
            description: 'Muscles and connective tissues in the body can weaken over time due to aging, injury, or genetic predisposition.',
            icon: "/images/laparoscopy/understand-2.png"
        },
        {
            title: 'Congenital Factors',
            description: 'Some people may have natural weakness in their abdominal or groin muscles from birth, which makes them more vulnerable to hernias.',
            icon: "/images/laparoscopy/understand-3.png"
        },
        {
            title: 'Obesity',
            description: 'Excess body weight can strain the abdominal muscles and increase the risk of hernia development.',
            icon: "/images/laparoscopy/understand-4.png"
        },
        {
            title: 'Previous Surgical Incisions',
            description: 'Surgical incisions can create weakness in the abdominal wall, making hernia more likely to occur at or near these incisions.',
            icon: "/images/laparoscopy/understand-5.png"
        },
        {
            title: 'Previous Surgical Incisions',
            description: 'Surgical incisions can create weakness in the abdominal wall, making hernia more likely to occur at or near these incisions.',
            icon: "/images/laparoscopy/understand-6.png"
        }
    ];
    const reasons = [
        {
          icon: "/images/laparoscopy/hernia-1.png",
          title: "Visible Bulge ",
          description: "A visible bulge or lump in the affected area."
        },
        {
          icon: "/images/laparoscopy/hernia-2.png",
          title: "Pain or Discomfort ",
          description: "Eyes become more sensitive towards bright lights including sunlight, car headlights, or Indoor lighting."
        },
        {
          icon: "/images/laparoscopy/hernia-3.png",
          title: "Gastrointestinal Symptoms ",
          description: "Hiatal hernias can lead to heartburn, acid reflux, chest pain, and difficulty swallowing."
        },
        {
          icon: "/images/laparoscopy/hernia-4.png",
          title: "Bowel Habits ",
          description: "Hernias involving the intestines can affect bowel movements, leading to constipation, diarrhea, or changes in stool consistency."
        },
      ];
    return (
        <>
           <MainTop/>
           <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Hernia Treatment</h1>
                        <p className="text-gray-600 mt-2">Hernia is one of India's most common medical conditions, affecting almost 12% of our adult population. But thanks to Aapkacare Health, you now have access to advanced treatments from expert surgeons, insurance support, personalised care and much more at the most affordable prices. Read further to learn more about hernia, how to get the best treatment, and why Aapkacare Health is your go-to healthcare partner.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Hernia?</h2>
                        <p className="text-gray-700">A hernia is when an internal organ or tissue pushes through a weak spot or tear in the muscles or connective tissues that typically hold it in place. Hernias can develop in any part of the body, but most commonly, they occur in the abdominal area. Hernias can appear as painful bulges that gradually grow in size.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/hernia.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identify the Signs of Hernia </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the causes of Hernia</h1>
                <p className="text-center text-xl mb-6">
                Hernias develop when a combination of muscle weakness and increased pressure on the abdominal wall. The specific causes of hernias can vary depending on the type of hernias. Some common causes of Hernia include:
                </p>
                <h2 className="text-center text-3xl font-bold mb-6">These are the most typical causes of muscle weaknesses that lead to hernia:</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center">
                    {causes.slice(0, 4).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                    <div className="md:col-start-2 col-start-1 md:row-start-2 row-start-1 p-4">
                        <img src={causes[4].icon} alt={causes[4].title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{causes[4].title}</h3>
                        <p className="text-gray-600 mt-2">{causes[4].description}</p>
                    </div>
                    <div className="md:col-start-3 col-start-1 md:row-start-2 row-start-2 p-4">
                        <img src={causes[5].icon} alt={causes[5].title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{causes[5].title}</h3>
                        <p className="text-gray-600 mt-2">{causes[5].description}</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#E4F4FD]">
                <div className="max-w-full mx-auto p-6 bg-[#E4F4FD] flex flex-col md:flex-row items-center">
                    {/* Left Image Section */}
                    <div className="w-full md:pl-30 pl-0 md:w-1/2">
                        <img alt="A female doctor in a white coat holding a clipboard and smiling" height="400" src="https://storage.googleapis.com/a1aa/image/vKxrjoV05YQbK2x7eC8iuVF-iU-cPKH8TYa38LVdtFg.jpg"width="400"/>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:mr-50 mr-0">
                        <h1 className="text-2xl font-bold text-gray-800">OUR EXPERTS EXPLAIN</h1>

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
            <div className='bg-white h-4'></div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default Hernia;

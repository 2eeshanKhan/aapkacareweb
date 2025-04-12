
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

const Hydrocele = () => {
    const [selectedTab, setSelectedTab] = useState("How");
    const content = {
        How: {
          question: "How to prevent ",
          answer: "Here are some steps to reduce the risk of acquired Hydrocele:  ",
          lide1:"1. Practice Safe Sex: ",
          answer1:"Some sexually transmitted infections (STIs) can lead to infections that might cause Hydrocele. Practicing safe sex by using condoms can reduce the risk of these infections.",
          lide2:"2. Hygiene: ",
          answer2:"Maintaining good personal hygiene in the genital area can help prevent infections that might lead to Hydrocele. Regularly clean the area and avoid using harsh soaps or chemicals that could irritate the skin. ",
          lide3:"3. Prevent Injury: ",
          answer3:"Take precautions to avoid injuries to the scrotum. Wear protective gear during sports or activities where damage to the groin area is possible. ",
          lide4:"4. Manage Infections: ",
          answer4:"Promptly treat any infections or inflammations in the genital area, such as epididymitis or orchitis. ",

        },
        When: {
          question: "When to Seek Treatment ",
          answer:" It's crucial to consult a healthcare professional if you notice any signs of Hydrocele. While some cases may resolve independently, ruling out any severe underlying conditions is essential. Early diagnosis and treatment can prevent complications.",
        },
    };
    const benefits = [
        "Most effective hydrocele treatment",
        "Confidential consultations",
        "Most experienced urologists in Pune",
        "No cuts or incisions",
        "Painless surgery",
        "No upfront payment",
        "45-minute procedure",
        "All insurances covered",
        "COVID safe clinics and hospitals",
        "Day-care procedure",
        "Fast and pain-free recovery",
        "No risks of recurrence of the hydrocele",
        "No side-effects or complications",
        "No running after insurance authorities"
    ];
    const benefits1 = [
        "If the size of the hydrocele continues growing, it can lead to obstruction in the blood flow. And when the blood flow is not proper in the testicles, it will further give rise to testicular atrophy causing degeneration of the testicular cells.",
        "Another complication that can arise if hydrocele is rupture. Due to the large volume of fluid accumulation in the scrotum, the hydrocele may rupture due to minimal spontaneous trauma. ",
        "The hydrocele may transform into a haematocele if there is bleeding in the sac. And if the haematocele is not drained, a clotted haematocele will form as a result. ",
        "Calcification of the sac is also a potential complication of leaving hydrocele untreated. ",
        "The hydrocele may become infected during aspiration which will increase the swelling and inflammation. ",
        "Infected hydroceles can also cause pyocele, accumulation of pus in the scrotum. ",
    ];
    const causes = [
        {
            title: 'Scrotal Swelling  ',
            description: 'The most noticeable sign of a hydrocele is swelling in the scrotum. It can range from mild to severe, and the size may change throughout the day.',
            icon: "/images/circumcision/h-1.png"
        },
        {
            title: 'Discomfort or Pain ',
            description: 'While hydroceles are generally not painful, some individuals may experience discomfort or a sense of heaviness due to the swelling.',
            icon: "/images/circumcision/h-2.png"
        },
        {
            title: 'Transillumination ',
            description: 'A healthcare professional can shine a light through the scrotum to confirm the presence of fluid.',
            icon: "/images/circumcision/h-3.png"
        },
        
    ];
    const causes1 = [
        {
            title: 'Congenital Hydrocele',
            description: 'Present at birth, this type of Hydrocele occurs when a connection between the abdominal cavity and the scrotum fails to close. ',
            icon: "/images/circumcision/h-u-1.png"
        },
        {
            title: 'Acquired Hydrocele ',
            description: 'This type is usually caused by inflammation, Infection, or trauma to the scrotum, which disrupts the average fluid balance.',
            icon: "/images/circumcision/h-u-2.png"
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-20 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Hydrocole Treatment</h1>
                        <p className="text-gray-600 mt-2">Want to go through Hydrocele surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of bariatric-related consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons. Welcome to Aapkacare's comprehensive guide on Hydrocele a condition affecting the male reproductive system. We'll explore the causes, signs, treatment options, and surgery for Hydrocele. Understanding this condition is crucial to making informed decisions about when and how to treat it and the benefits of surgery. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
      
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-20 mx-0">
                    <div className="flex-1/3 ">
                        <h2 className="text-2xl font-bold mb-2">What are Hydrocele?  </h2>
                        <p className="text-gray-700">Hydrocele is a common medical condition in men, characterized by fluid accumulation in the scrotum, leading to swelling and discomfort. It can affect men of all ages, from newborns to older people. You're not alone if you or a loved one is facing this issue. Aapkacare is here to provide you with the information you need.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/circumcision/h-main.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-25 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identifying the signs of Hydrocele </h2>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                {causes.slice(0, 3).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                ))}
            </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white md:px-25 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identifying the signs of Hydrocele </h2>
                <div className="grid md:grid-cols-2  grid-cols-1 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                {causes1.slice(0, 2).map((reason, index) => (
                    <div key={index} className="p-4 ">
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

            <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-40 px-5 gap-3">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Treatment </h1>
                    <p className="text-md mb-4">The treatment of Hydrocele varies depending on the severity and discomfort it causes. In some cases, conservative management and observation are sufficient. However, surgical intervention may be necessary in more severe or persistent cases. 
                    </p>
                    <h1 className='text-2xl font-bold mb-4'>Diagnosis </h1>
                    <p className='text-md mb-4'>At Aapka Care, the doctors are well trained in diagnosing the hydrocele with modern equipment and perform a physical examination to detect the root cause. The doctor may check for tenderness in the scrotum while putting slight pressure around the scrotum and lower abdominal region. If the fluid is present, the scrotum will allow light transmission. The doctor may also ask you to cough to check whether you experience pain in the scrotum region. There are a few diagnostic tests the doctor may recommend to find the underlying cause: Blood test - Urine culture</p>
                </div>
                <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[700px] md:p-6 p-2 h-[500px]" src="/images/circumcision/u-h.png"/>
            </div>

            <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-40 px-5 gap-3">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Procedure </h1>
                    <p className="text-md mb-4">Open hydrocelectomy: This is a surgical procedure that is usually performed under the influence of general anesthesia. During this procedure, the surgeon makes a cut in the scrotum or groin area and drains out the fluid via suction. The surgeon then closes the communication to the canal between the abdominal cavity and the scrotum, before removing the hydrocele sac and closing the incisions with sutures or surgical strips 
                    </p>
                </div>
                <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/circumcision/u-h-1.png"/>
            </div>

            <div className="max-w-full mx-auto py-6 md:px-40 px-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of undergoing Hydrocelectomy at Aapka Care in Pune</h2>
                <p className="text-gray-600 mb-4">Aapka Care strives to provide an efficient, care-filled, and hassle-free surgical experience for every patient. Following are the benefits of choosing our clinics and hospitals for the treatment of your hydrocele:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </div>

            <div className="max-w-full mx-auto py-6 md:px-40 px-6 bg-[#E4F4FD] shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Lifestyle changes that can help in getting relief from hydroceles </h2>
                <p className="text-gray-600 mb-4">Aapka Care strives to provide an efficient, care-filled, and hassle-free surgical experience for every patient. Following are the benefits of choosing our clinics and hospitals for the treatment of your hydrocele:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Stay hydrated by drinking lots of fluids </li>
                    <li>Avoid wearing tight-fitted clothes </li>
                    <li>Practice yoga asanas like Vajrasana, Gomukhasana, Garudasana </li>
                    <li>Avoid alcohol and smoking</li>
                    <li>Avoid large meals in the evening or at night </li>
                    <li>Refrain from putting pressure on the groin area</li>
                </ul>
            </div>
            <div className="max-w-full mx-auto py-6 md:px-40 px-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">What complications can arise if hydrocele is left untreated? </h2>
                <p className="text-gray-600 mb-4">Severe cases of hydrocele can cause serious complications. Some of the potential complications are listed below: </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {benefits1.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
                <p className="text-gray-600 mb-4">Normally, these complications can be identified during diagnosis before the treatment method is selected. All these complications are observed for at least 24-48 hours before proceeding with the treatment</p>
            </div>
            <ReactUs/>
            < DetailedImages/>
        </>
    );
}

export default Hydrocele;

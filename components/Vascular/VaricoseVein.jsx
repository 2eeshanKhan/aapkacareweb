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

import FAQvascular from '@/module/FAQVascular';



const VaricoseVein = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: 'Primary Varicose Veins ',
        content: `These are the most common type and typically develop without an underlying medical condition. They occur when the valves in the veins, primarily in the legs, become weak or damaged, leading to blood pooling and vein enlargement. `
      },
      {
        title: 'Secondary Varicose Veins ',
        content: `Secondary varicose veins are the result of an underlying medical condition that affects blood flow. Such conditions may include deep vein thrombosis (DVT), pelvic congestion syndrome, or a history of blood clots in the deep veins. `,
      },
      {
        title: 'Trunk Varicose Veins ',
        content: `These are large, dilated veins that often appear as bulging, twisted cords on the surface of the legs. `,
      },
      {
        title: 'Reticular Varicose Veins ',
        content: `Reticular veins are more minor than trunk varicose veins but larger than spider veins. `,
      },
      {
        title: 'Telangiectasias (Spider Veins) ',
        content: `These are tiny, thin veins that appear close to the skin's surface and often resemble spider webs or tree branches. `,
      },
      {
        title: 'Perforator Varicose Veins ',
        content: `Perforator veins connect the superficial veins with the deep veins in the legs. `,
      },
      {
        title: 'Blue Veins ',
        content: `Sometimes referred to as "feeder veins," blue veins are intermediate in size between reticular veins and more prominent varicose veins. They can cause symptoms similar to trunk varicose veins. `,
      },
      {
        title: 'Pelvic Varicose Veins ',
        content: `Pelvic varicose veins occur in the pelvis, primarily affecting the veins in the lower abdomen, buttocks, and genital area. This condition can be associated with chronic pelvic pain and is more common in women.`,
      },
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const reasons1 = [
        {
          icon: "/images/laparoscopy/understand-1.png",
          description: "Visible, swollen veins. "
        },
        {
          icon: "/images/laparoscopy/understand-2.png",
          description: "Aching or throbbing in the legs "
        },
        {
          icon: "/images/laparoscopy/understand-3.png",
          description: "Itching or burning sensations "
        },
        {
          icon: "/images/laparoscopy/understand-4.png",
          description: "Muscle cramps "
        },
        {
          icon: "/images/laparoscopy/understand-5.png",
          description: "Heaviness in the legs "
        },
        {
            icon: "/images/laparoscopy/understand-6.png",
            description: "Skin discoloration near affected veins "
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" py-6 rounded-lg flex flex-col md:flex-row md:mx-20 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Treatment For Varicose Vein</h1>
                        <p className="text-gray-600 mt-2">Want to go through Varicose Vein surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>

            <div className="mx-auto">
                <section className="py-6 rounded-lg flex flex-col md:flex-row items-center md:px-25 px-5 bg-white">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What are Varicose Veins? </h2>
                        <p className="text-gray-700">Varicose veins are enlarged, twisted veins that often appear as blue or purple cords on the legs. They develop when the valves within the veins weaken or become damaged, leading to poor blood circulation. As a result, blood pools in the veins, causing them to swell and become visible through the skin.</p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/vascular/vv-main.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="container max-w-full">
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-10">
                        <img alt="Surgeons performing laparoscopic surgery" className="rounded-lg w-[575px] h-[500px] py-5" src="/images/vascular/vv-v-1.png"/>
                        <div className=''>
                            <h2 className="text-2xl font-bold mb-4">Avoiding Varicose Veins </h2>
                            <p className="text-lg mb-2">Preventing varicose veins involves lifestyle modifications and healthy habits. Here are some tips to help you reduce your risk of developing varicose veins:  
                            </p>
                            <p className="mb-2">- Maintain a healthy weight and stay physically active. </p>
                            <p className="mb-2">- Elevate your legs when resting. </p>
                            <p className="mb-2">- Avoid prolonged periods of sitting or standing. </p>
                            <p className="mb-2">- Wear compression stockings as recommended by your doctor. </p>
                            <p className="mb-2">- Follow a balanced diet rich in fiber and low in salt to improve circulation.</p>
                        </div>
                </div>
            </div>
      
            <div className="max-w-full mx-auto p-6 bg-white md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Understand the Causes of Varicose Vein </h2>
                <p className="text-xl mb-4">If you're unsure whether you have varicose veins, here are some common signs and symptoms to watch out for: </p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 grid-rows-1 gap-6 text-center">
                    {reasons1.slice(0, 6).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
                <p className="text-xl mb-4">If you're unsure whether you have varicose veins, here are some common signs and symptoms to watch out for: </p>
            </div>  

            <div className="container max-w-full">
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-10">
                        <div className=''>
                            <h2 className="text-2xl font-bold mb-4">After Treatment </h2>
                            <p className="text-lg mb-2">Following varicose vein treatment at Aapkacare, patients can look forward to a significant improvement in their quality of life. Recovery times vary depending on the chosen procedure, but our dedicated medical team will provide you with post-treatment care instructions and monitor your progress. 
                            </p>
                            <p className="mb-2">Remember, seeking timely treatment for varicose veins can help alleviate discomfort and reduce the risk of complications. Let Aapkacare's expert doctors guide you towards healthier, pain-free legs. </p>
                            <p className="mb-2">If you have concerns about varicose veins, don't hesitate to reach out to our medical professionals at Aapkacare. We are here to assist you on your journey to healthier, more comfortable legs. </p>
                            <p className="mb-2">For more information or to schedule a consultation, contact Aapkacare today.</p>
                        </div>
                        <img alt="Surgeons performing laparoscopic surgery" className="rounded-lg w-[575px] h-[500px] py-5" src="/images/vascular/vv-v-1.png"/>
                </div>
            </div>   

            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='w-full md:w-1/3 mt-0 md:mt-8 md:ml-4'>
                    <img src="/images/vascular/vv-v-2.png" alt="photo" className='h-[425px] w-[575px] rounded'/>
                </div>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                    <h1 className="font-bold text-3xl mb-4">Different Types of Varicose Veins </h1>
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
            </div>

            <div className="container max-w-full">
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div className=''>
                            <h2 className="text-2xl font-bold mb-4">Treatment Options </h2>
                            <p className="text-lg">At Aapkacare, we offer a range of advanced surgical and non-surgical treatment options to address varicose veins. Surgical procedures, including vein stripping or laser ablation, can effectively remove or close off damaged veins. Our experienced doctors will evaluate your condition and recommend the most suitable treatment for your specific case.
                            </p>
                        </div>
                        <img alt="Surgeons performing laparoscopic surgery" className="rounded-lg w-[450px] h-[400px] py-5" src="/images/docter.png"/>
                    </div>
            </div>

            <div className='bg-white mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4 flex-col'>
                    <FAQvascular/>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:ml-4'>
                    <img src="/images/vascular/vv-v-3.png" alt="photo" className='h-[325px] w-[400px] rounded'/>
                </div>
            </div>
            <div className="h-5 bg-white"></div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}
export default VaricoseVein;

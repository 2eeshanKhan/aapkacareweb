'use client'
import {useState} from 'react';
import FAQGynecomastia from '@/module/FAQGynecomastia'
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import Treatment from '@/module/Treatment';
import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';
import { ChevronRight } from "lucide-react";

const MoleRemoval = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Congenital Moles ",
        content: `Moles present at birth or shortly after are known as congenital moles. `
      },
      {
        title: "Acquired Moles ",
        content: `These are moles that develop over time and are the most common type `,
      },
      {
        title: "Atypical Moles (Dysplastic Nevi) ",
        content: `These moles have irregular features and are more likely to become cancerous. `,
      },
      {
        title: "Junctional, Intradermal, or Compound Moles ",
        content: `These terms describe where the mole cells are located in the skin layers.`,
      }
    ];
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const causes1 = [
        {
            title: 'Physical discomfort ',
            description: 'Enlarged breast tissue can be physically uncomfortable or painful, particularly if it becomes tender or sensitive. This discomfort may persist or worsen if Gynecomastia is not addressed. ',
        },
        {
            title: 'Worsening of the condition  ',
            description: 'In some cases, Gynecomastia may progress and become more pronounced over time. The state may become more severe if the underlying cause is not addressed. ',
        },
        {
            title: 'Complications from the underlying cause ',
            description: 'Gynecomastia can sometimes be a sign of an underlying medical condition, such as hormonal imbalances or certain medications. If these underlying causes are not addressed, they may lead to further health issues',
        }
    ];
    const reasons = [
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Change in Appearance ",
          description: "If you notice a mole changing in size, shape, color, or texture, it could be a sign of a potentially dangerous mole. "
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Pain or Itching ",
          description: "Moles that cause discomfort or itchiness may need medical attention. "
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Multiple Colors  ",
          description: "Moles with multiple colors within them might be a concern. "
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Pain or Itching ",
          description: "Moles that cause discomfort or itchiness may need medical attention. "
        },
        {
            icon: "/images/cosmetic/c-m-1.png",
            title: "Bleeding or Crusting ",
            description: "Moles that bleed or crust over without an apparent reason should be examined by a dermatologist. "
        },
        {
            icon: "/images/cosmetic/c-m-1.png",
            title: "Irregular Borders ",
            description: "Moles with uneven or irregular borders may indicate a problem. "
        },
        {
            icon: "/images/cosmetic/c-m-2.png",
            title: "Multiple Colors ",
            description: "Moles with multiple colors within them might be a concern."
        },
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Mole Removal Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through Mole removal surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons 
                        </p>
                        <p className="text-gray-600 mt-2">Moles are common skin growths that vary in size, shape, and color. While most moles are harmless, some may require removal for cosmetic reasons or due to potential health concerns. Mole removal surgery is a standard and effective procedure to address these issues. In this article, we will discuss the signs that indicate the need for mole removal surgery, the types of moles, the treatment process, and what to expect after the procedure. 
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is a Mole? </h2>
                        <p className="text-gray-700">The clusters of pigment-forming cells known as moles or nevi are harmless, non-contagious, and non-cancerous growths that can arise anywhere on your face, body, or skin. Moles occur in a variety of colours, including brown, black. Moles can be round, oval, or even smaller. Moles are caused by the body's overactive melanocytes, which create excessive melanin. Contact Aapkacare Health and talk to an expert for the best course of action for affordable mole removal surgery in Pune.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/cosmetic/c-m-main.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Signs That May Require Mole Removal Surgery </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 grid-rows-2 gap-6 text-center">
                    {reasons.slice(0, 7).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
    
            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                        <h2 className="flex justify-center text-3xl mb-6">Reasons You May Need Mole Removal </h2>
                        {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg mb-2">
                            <button className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"onClick={() => toggleAccordion(index)}>
                            {faq.title}
                                <ChevronRight className={`transform transition-transform ${
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
            </div>
                <div className='w-full flex-1/3 md:w-1/2 mt-0 md:mt-15 md:ml-4'>
                    <img src="/images/cosmetic/c-l-main2.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <Treatment/>
            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto py-4 md:px-20 px-5">
                    <div className="flex">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">How is Gynecomastia treted?</h1>
                            <p className='mb-4'>Here are some common approaches to treating Gynecomastia:</p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Medication:</strong>
                                    In some cases, especially if hormonal imbalances cause Gynecomastia, medication may be prescribed. The most commonly used medication for Gynecomastia is tamoxifen, which can help reduce breast tissue growth. 
                                </li>
                                <li className="mb-2">
                                    <strong>Surgery:</strong>
                                    Surgery is often the most effective treatment for moderate to severe Gynecomastia. There are two main surgical procedures.
                                </li>
                                <li className="mb-2">
                                    <strong>Liposuction:</strong>Liposuction is used to remove excess fat from the breast area. It is particularly effective for cases where Gynecomastia is primarily due to excess fat. 
                                </li>
                                <li className="mb-2">
                                    <strong>Surgical excision:</strong>Surgical excision is necessary for cases involving excess breast tissue and epithelial growth. This procedure involves making an incision and removing the excess tissue. Depending on the extent of the surgery, scarring may be minimal to more noticeable. 
                                </li>
                                <li className="mb-2">
                                    <strong>Combination therapy:</strong>In some cases, a combination of liposuction and surgical excision may be performed to achieve the best results.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full mx-auto py-6 md:px-30 px-5 bg-[#E4F4FD] rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">What happens when Gynecomastia is left untreated? </h1>
                <p className="text-center text-xl mb-6 ">Gynecomastia, when left untreated, can result in various physical and psychological consequences. The impact of untreated Gynecomastia can vary depending on the underlying cause, the severity of the condition, and individual factors. Here are some potential implications of leaving Gynecomastia untreated 
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes1.slice(0, 3).map((reason, index) => (
                    <div key={index} className="p-4">
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto py-4 md:px-20 px-5">
                    <div className="flex">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">After Mole Removal Treatment </h1>
                            <p className='mb-4'>After undergoing mole removal surgery, you can expect the following </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2"><span className='font-bold'>Recovery Period:</span> Depending on the size and type of mole, recovery can take a few days to a few weeks. 
                                </li>
                                <li className="mb-2"><span className='font-bold'>Pain and Discomfort:</span> Mild pain and discomfort may be experienced but can be managed with over-the-counter pain relievers.  
                                </li>
                                <li className="mb-2"><span className='font-bold'> Scarring: </span>There may be minimal scarring, but it typically fades over time.  
                                </li>
                                <li className="mb-2"><span className='font-bold'>Follow-Up Care:</span> You must follow your dermatologist's post-operative care instructions to ensure proper healing. 
                                </li>
                                <li className='mb-2'><span className='font-bold'>Skin Protection:</span> Protect the treated area from the sun to prevent darkening or complications. </li>
                            </ul>
                            <p className='mb-4'>Mole removal surgery is a safe and effective way to address concerning or unwanted moles. If you notice any signs of mole irregularity or are considering mole removal for cosmetic reasons, consult with a dermatologist at Aapkacare for a professional evaluation and personalized treatment plan. Your skin's health and appearance are our top priorities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default MoleRemoval;

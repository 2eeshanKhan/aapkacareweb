"use client"
import {useState} from 'react';
import FAQGynecomastia from '@/module/FAQGynecomastia'
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import Treatment from '@/module/Treatment';
import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import { ChevronRight } from "lucide-react";

import DetailedImages from '@/module/DetailedImages';

const Lipoma = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Conventional ",
        content: `White fat cells make up the most typical form of lipoma. `
      },
      {
        title: "Angiolipoma ",
        content: `This kind has blood vessels and fat. Angiolipomas frequently cause pain. `,
      },
      {
        title: "Fibrolipoma ",
        content: `This type of lipoma is made up of fibrous tissue and fat. `,
      },
      {
        title: "Hibernoma ",
        content: `A type of lipoma that contains brown fat.Brown fat cells produce heat and assist in controlling body temperature. `,
      },
      {
        title: "Myelolipoma ",
        content: `This type of lipoma contains fat as well as tissues that create blood cells. `,
      },
      {
        title: "Spindle-cell ",
        content: `These lipomas have spindle - shaped fat cells, which are longer than they are wide. `,
      },
      {
        title: "Pleomorphic ",
        content: `The fat cells in these lipomas come in a variety of sizes and forms.`,
      }
    ];
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const causes = [
        {
            title: 'Dercum`s disease  ',
            description: 'Most frequently affecting the arms, legs, and chest, this uncommon condition causes painful lipomas to develop.Adiposis dolorosa and Anders syndrome are other names for it. ',
            icon: "/images/cosmetic/c-l-5.png"
        },
        {
            title: 'Madelung`s disease ',
            description: 'Men who consume large amounts of alcohol are most likely to develop this illness.Madelung`s disease, also known as multiple symmetric lipomatosis, causes lipomas to develop around the shoulders and neck.',
            icon: "/images/cosmetic/c-l-6.png"
        }
    ];
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
          icon: "/images/cosmetic/c-l-1.png",
          title: "Swollen or Enlarged Breasts ",
          description: "Gynecomastia typically involves the development of glandular breast tissue beneath the nipple area. "
        },
        {
          icon: "/images/cosmetic/c-l-2.png",
          title: "Tenderness or Pain",
          description: "Some Individuals with Gynecomastia may experience tenderness or discomfort in the affected breast tissue. "
        },
        {
          icon: "/images/cosmetic/c-l-3.png",
          title: "Uneven Breast Growth ",
          description: "Gynecomastia can affect one or both breasts and sometimes, there may be uneven growth, with one breast more affected than the other. "
        },
        {
          icon: "/images/cosmetic/c-l-4.png",
          title: "Nipple Changes ",
          description: "Gynecomastia can cause changes in the nipples. "
        },
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Lipoma Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through Lipoma surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons. 
                        </p>
                        <p className="text-gray-600 mt-2">Are you seeking effective treatment for lipomas? This comprehensive guide will provide essential information on lipoma treatment, signs, surgical options, and post-treatment care. Whether dealing with your first lipoma or exploring treatment options, we've got you covered.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Lipoma? </h2>
                        <p className="text-gray-700">A lipoma is a fatty mass (bulge) between your skin and the deeper layer of muscle that is slow-growing. Although they can develop in any area of the body, lipomas usually affect the shoulders, forearms, arms, and thighs. Lipoma typically manifests as little, floppy lumps. Pressing it could make it feel doughy. Lipomas usually don't hurt, but they can especially when they rub against surrounding nerves or have blood arteries running through them.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/cosmetic/c-l-main.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identifying the signs of Lipoma </h2>
                <p>Lipomas are typically small, soft, and non-cancerous growths beneath the skin. These benign tumors may not cause pain but can be uncomfortable or unsightly. Common signs and symptoms include: </p>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>

            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understanding the causes of Lipoma </h1>
                <p className="text-center text-xl mb-6 ">Lipomas are likely inherited, so if someone in your family has a lipoma, you are more likely to get one yourself. Multiple lipomas can occur on the body as a result of certain conditions. These conditions include: 
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 2).map((reason, index) => (
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
                        <h2 className="flex justify-center text-3xl mb-6">Variety of Kidney Stones </h2>
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
                            <h1 className="text-3xl font-bold mb-4">When to Treat a Lipoma </h1>
                            <p className='mb-4'>Deciding when to treat a lipoma depends on several factors, including: </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">Size and location of the lipoma
                                </li>
                                <li className="mb-2">Discomfort or pain it may cause. 
                                </li>
                                <li className="mb-2">Cosmetic concerns. 
                                </li>
                                <li className="mb-2">Changes in the lipoma's appearance. 
                                </li>
                            </ul>
                            <p className='mb-4'>Consult a healthcare professional, such as at Aapkacare, to determine the most suitable treatment approach for your case. </p>
                            <p className='mb-4'>Lipoma treatment can help alleviate discomfort and address cosmetic concerns. Whether you opt for surgical removal or alternative therapies, seeking expert guidance and post-treatment care is essential for a successful outcome. Aapkacare is here to provide you with tailored lipoma treatment options to ensure your well-being.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default Lipoma;

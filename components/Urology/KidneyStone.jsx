import React from 'react';

import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import FAQUrology from '@/module/FaqUrology'

import TabContent from '@/module/TabContent';
import ReasonCard from '@/module/ReasonCard';



import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';
const KidneyStone = () => {
    const reasons = [
        {
          icon: "/images/circumcision/k-1.png",
          title: "Severe Pain ",
          description: "Kidney stones are often associated with intense pain, commonly called renal colic. "
        },
        {
          icon: "/images/circumcision/k-2.png",
          title: "Blood in Urine ",
          description: "Kidney stones can cause blood to appear in the urine"
        },
        {
          icon: "/images/circumcision/k-3.png",
          title: "Painful Urination ",
          description: "ome people with kidney stones may experience discomfort or pain while urinating. "
        },
        {
          icon: "/images/circumcision/k-4.png",
          title: "Nausea and Vomiting ",
          description: "Nausea and vomiting can be experienced if a person has kidney stone "
        },
        {
          icon: "/images/circumcision/k-5.png",
          title: "Painful Flank ",
          description: "Pain from kidney stones can be felt on one side of the body, often in the lower back or side."
        },
        {
          icon: "/images/circumcision/k-6.png",
          title: "Fever and Chills ",
          description: "Kidney stones can lead to infection, which may result in fever and chills."
        }
    ];
      const causes = [
        {
            title: 'Dietary Factors  ',
            description: 'Consuming too much calcium through diet or supplements can lead to the formation of calcium-based kidney stones, particularly calcium oxalate stones.',
            icon: "/images/circumcision/u-1.png"
        },
        {
            title: 'Inadequate Hydration ',
            description: 'Low fluid intake can result in concentrated urine, making it more likely that substances in the urine will crystallize and form stones. ',
            icon: "/images/circumcision/u-2.png"
        },
        {
            title: 'Medical Conditions  ',
            description: 'A condition characterized by elevated calcium levels in the urine can increase the risk of calcium-based stones',
            icon: "/images/circumcision/u-3.png"
        },
        {
            title: 'Family History  ',
            description: 'A family history of kidney stones can increase an individuals susceptibility to stone formation',
            icon: "/images/circumcision/u-4.png"
        },
        {
            title: 'Obesity',
            description: 'Obesity is associated with several factors that can Increase the risk of kidney stones, including dietary habits and metabolic changes',
            icon: "/images/circumcision/u-5.png"
        },
        {
            title: 'Urinary Tract Abnormalities ',
            description: 'Structural abnormalities in the urinary tract, such as narrow ureters, can slow the urine. flow, allowing crystals to accumulate and form stones.',
            icon: "/images/circumcision/u-6.png"
        },
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Kidney stone Surgery</h1>
                        <p className="text-gray-600 mt-2">Kidney stones are one of the most painful health conditions that people experience. In India, 5 out of 10 people suffer from kidney stones. So, treating this medical condition has to be affordable and hassle-free. Here at Aapkacare Health, we will take off your kidney stone treatments. We will provide you with the best doctors and surgeons near you at an affordable price. For more information on your condition, book an appointment today and get the best treatment with Aapkacare Health. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
      
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What are Kidney Stones? </h2>
                        <p className="text-gray-700">Kidney stones, also known as renal calculi or nephrolithiasis, are hard, crystalline kidney deposits. These stones can vary in size and composition and may develop in one or both kidneys. Kidney stones can be quite painful and can cause various symptoms and complications. Kidney stones are made up of different substances. The most common types include calcium oxalate, calcium phosphate, uric acid, and struvite stones. The composition of the stones can influence its treatment and prevention.</p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/circumcision/kidney-1.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                    <div className="md:col-start-2 md:row-start-2">
                        <ReasonCard {...reasons[4]} />
                    </div>
                    <div className="md:col-start-3 md:row-start-2">
                        <ReasonCard {...reasons[5]} />
                    </div>
                </div>
            </div>
            
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understanding the causes of Kidney Stone  </h1>
                <p className="text-center text-xl mb-6 ">When the volume of hazardous waste in the urine exceeds the volume of fluid in the bladder, pelvic ureteric junction and ureter, kidney stones develop. 
                </p>
                <h2 className="text-center text-3xl font-bold mb-6">Here are some factors that increase the risk of kidney stones:  </h2>
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
        
            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                <FAQUrology/>
                </div>
                <div className='w-full flex-1/3 md:w-1/2 mt-0 md:mt-15 md:ml-4'>
                    <img src="/images/lasik-main.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages />
        </>
    );
}

export default KidneyStone;

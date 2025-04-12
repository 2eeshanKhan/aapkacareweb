'use client'
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import {useState} from 'react';
import { ChevronRight } from "lucide-react";
import ReasonCard from '@/module/ReasonCard';

import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const RotatorCuffRepair = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "Arthroscopic Repair ",
        content: `A minimally invasive procedure that uses small incisions and a tiny camera to guide the surgeon in reattaching the torn tendon. `
      },
      {
        title: "Open Surgery ",
        content: `A larger incision may sometimes be required to repair the rotator cuff. `,
      },
      {
        title: "Mini-Open Repair ",
        content: `This combines arthroscopic and open surgery elements, offering the advantages of both approaches.`,
      }
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const causes = [
        {
            title: 'Aging ',
            description: 'As we age, the tendons of the rotator cuff can degenerate and become more prone to injury. This is a common cause of rotator cuff injuries in older adults. ',
            icon: "/images/laparoscopy/understand-1.png"
        },
        {
            title: 'DOveruse and Repetitive Motion iabetes ',
            description: 'Engaging in activities that require repetitive overhead arm movements, such as pitching in. baseball, swimming, or painting, can lead to overuse injuries in the rotator cuff tendons. ',
            icon: "/images/laparoscopy/understand-2.png"
        },
        {
            title: 'Trauma or Acute Injury ',
            description: 'A sudden and forceful impact to the shoulder, such as a fall, car accident, or sports-related injury, can cause immediate damage to the rotator cuff tendons or muscles',
            icon: "/images/laparoscopy/understand-3.png"
        },
        {
            title: 'Heavy Lifting  ',
            description: 'Lifting heavy objects, especially with poor lifting techniques or without proper conditioning, can strain the rotator cuff and lead to injury. ',
            icon: "/images/laparoscopy/understand-4.png"
        },
        {
            title: 'Poor Posture ',
            description: 'Prolonged periods of poor posture, such as slouching or hunching over a computer, can put additional stress on the shoulder and contribute to rotator cuff problems. ',
            icon: "/images/laparoscopy/understand-5.png"
        },
        {
            title: 'Muscle Imbalances ',
            description: 'Imbalances in the muscles surrounding the shoulder joint can place uneven stress on the rotator cuff, increasing the risk of injury',
            icon: "/images/laparoscopy/understand-6.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/laparoscopy/hernia-1.png",
          title: "Presistent Fatigue",
          description: "Filling excessively tired despite adequate rest."
        },
        {
          icon: "/images/laparoscopy/hernia-2.png",
          title: "Swelling",
          description: "Noticeable swelling in the ankles, feet, or around the eyes. "
        },
        {
          icon: "/images/laparoscopy/hernia-3.png",
          title: "High Blood Pressure ",
          description: "Uncontrolled high blood pressure that is difficult to manage."
        },
        {
          icon: "/images/laparoscopy/hernia-4.png",
          title: "Decreased Urine Output ",
          description: "A significant decrease in the amount of urine produced. "
        },
        {
          icon: "/images/laparoscopy/hernia-3.png",
          title: "Changes in Urine ",
          description: "Changes in the color, odor, or frequency of urination. "
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-30 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">What is Kidney Transplant?</h1>
                        <p className="text-gray-600 mt-2">Want to go through Rotator Cuff surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of bariatric-related consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons. </p>
                        <p className="text-gray-600 mt-2">Welcome to Aapkacare's comprehensive guide on Rotator Cuff Repair. Whether you're experiencing shoulder pain discomfort or seeking to understand your treatment options, we're here to provide valuable information. In this guide, we'll explore the signs, various treatment options, types of surgery, and the benefits of Rotator Cuff Repair. Let's delve into this topic step by step. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>
            <div className='mx-auto p-6'>
            <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-30 mx-0">
                    <div className="flex-1/2 ">
                        <h2 className="text-2xl font-bold mb-2">What is Rotator Cuff Repair? </h2>
                        <p className="text-gray-700">Arthroscopic rotator cuff repair is a procedure for fixing a rotator cuff tear, from shaving bone spurs or repairing torn tendons and muscles in the shoulder. If the patient's injury extends beyond the rotator cuff, then the surgeon can perform modified rotator cuff surgery with bicep repair to correct the injury. </p>
                        <p className="text-gray-700">The rotator cuff comprises a group of muscles and tendons surrounding the shoulder joint. It is responsible for supporting the shoulder joint and keeping the head of the arm within the joint socket. Rotator cuff surgeries are performed for rotator cuff injuries. Rotator cuff damage is very common in people who have jobs that require repeated overhead motions or in athletes due to sudden jerking motions. </p>
                    </div>
                    <div className="flex-1/2 flex justify-center mt-4 md:mt-0">
                        <img src="/images/orthopaedic/o-r-main.png"alt="Cataract illustration"className="w-[450px] h-[300px]"/>
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
                </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the causes of Rotator Cuff injury </h1>
                <p className="text-center text-xl mb-6 ">Rotator cuff injuries can result from various causes, including acute trauma and chronic wear and tear. Here are some common causes of rotator cuff injuries: 
                </p>
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
            <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row md:px-30 px-5 gap-3">
                <div className='md:pr-10 pr-0 md:my-10 my-0'>
                    <h1 className="text-2xl font-bold mb-4">When to Seek Treatment </h1>
                    <h3 className='text-xl mb-4'>If you're experiencing any of these signs, it's essential to consult a healthcare professional, such as those at Aapkacare, to evaluate your condition. Early diagnosis and treatment can prevent further damage and improve overall quality of life. </h3>
                    <h1 className="text-2xl font-bold mb-4">Treatment Options </h1>
                    <h3 className='text-xl mb-4'>The treatment of rotator cuff issues depends on the severity of the injury. Non-surgical approaches may include rest, physical therapy, and anti-inflammatory medications. However, for more severe cases, surgery may be necessary</h3>   
                </div>
                <img alt="Surgeons" className="rounded-lg w-[500px] h-[500px] md:py-12 py-5" src="/images/orthopaedic/o-r-1.png"/>
            </div>

            <div className='max-w-full bg-white h-5'></div>
            
            <div className='container max-w-full'>
                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/orthopaedic/o-r-2.png"/>
                        <div>
                        <h1 className="text-2xl font-bold mb-4">How Rotator Cuff Repair Works </h1>
                        <p className="text-md mb-4">During surgery, the torn tendon is reattached to the bone. Depending on the type of surgery, various techniques may be employed to ensure a stable and robust repair. Your healthcare provider will determine the surgery choice based on your injury's severity. </p>
                        </div>
                    </div>

                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div className='md:py-10 py-3'>
                            <h2 className="text-2xl font-bold mb-4">After Treatment </h2>
                            <p className="text-lg">Following rotator cuff repair surgery, rehabilitation is crucial to regain strength and range of motion in your shoulder. Your healthcare team will provide a tailored plan to guide you through recovery. 
                            </p>
                        </div>
                        <img alt="Surgeons performing laparoscopic surgery" className="mb-4 md:mb-0 md:mr-6 rounded-lg w-[500px] md:p-6 p-2" height="300" src="/images/orthopaedic/o-r-3.png"/>
                    </div>

                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 py-5">
                        <div className='flex flex-col flex-1/2'>
                        <h1 className="text-2xl font-bold mb-4">What happens during knee arthroscopy? </h1>
                        <p className="text-md mb-4">Before the surgery, the orthopaedic surgeon will perform a thorough diagnosis. Diagnosis before knee arthroscopy entails physical examination, along with imaging tests like X-rays, shoulder CT scans, MRI, etc. 
                        </p>
                        <p className="text-md mb-4">On the day of the surgery, the surgeon may also perform a blood panel, chest x-ray, electrocardiogram, etc., to assess your vital signs and make sure you can safely undergo the surgery. Following this, the anesthesia will be administered and you will be moved to the operation theater for the surgery. Knee arthroscopy can be performed under general, regional, or local anesthesia. 
                        </p>
                        <p className="text-md mb-4">The surgeon will make a few tiny incisions, called portals, over the knee joint to fill the joint with a sterile solution to improve visibility. Then an arthroscope is inserted to visualize the internal structures. Finally, with the help of the arthroscope, the surgeon will insert the surgical instruments and perform the surgery. After the surgery, the incisions will be closed and bandaged.  
                        </p>
                        <p className="text-md mb-4">The surgery usually lasts less than an hour and then the patient is moved to a recovery room for post-surgery observation to ensure there are no postoperative complications. 
                        </p>
                        </div>
                    </div>
                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <img alt="Surgeons performing laparoscopic surgery" className="mb-4 md:mb-0 md:mr-6 rounded-lg w-[500px] md:p-6 p-2" height="300" src="/images/laparoscopy/Gallbladder1-2.png"/>
                        <div className='md:py-10 py-3'>
                            <h2 className="text-2xl font-bold mb-4">Risks of delayed Kidney Transplant </h2>
                            <p className="text-lg">If a patient suffering from an end-stage renal disease delays a kidney transplant, it can cause life-threatening complications. The common risks of delayed kidney transplant are: 
                            </p>
                            <ul className='list-disc pl-5 mb-4'>
                                <li>Anaemia </li>
                                <li>Bone weakness </li>
                                <li>Fluid retention </li>
                                <li>Heart disease </li>
                                <li>Hyperkalemia </li>
                                <li>Urinary tract obstruction </li>
                                <li>Blood toxicity </li>
                                <li>Uncontrolled systemic disease (heart or liver disease) </li>
                                <li>Multiple organ failure </li>
                                <li>Death</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Types of Surgery </h1>
                <p className="text-lg mb-4">There are several surgical procedures available for rotator cuff repair, including: </p>
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg mb-2">
                        <button className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
                        onClick={() => toggleAccordion(index)}
                        >
                            {faq.title}
                            <ChevronRight className={`transform transition-transform ${
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
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default RotatorCuffRepair;

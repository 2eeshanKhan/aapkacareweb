"use client";
import FAQGynecomastia from '@/module/FAQGynecomastia'
import React from 'react';
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import Treatment from '@/module/Treatment';
import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';


const ACLTear = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        title: "ACL Reconstruction Recovery ",
        content: `• Surgery healing takes 4 to 8 weeks. 
        • Full recovery usually takes 4 to 9 months `
      },
      {
        title: "Swelling after ACL Reconstruction ",
        content: `• Swelling typically persists for 4 to 6 weeks. 
        • Elevate your leg and apply ice packs to the knee, for 20-30 minutes every 2 hours. `,
      },
      {
        title: "Most common choices of graft for ACL reconstruction  ",
        content: `• Patellar tendon autograft 
        • Patellar tendon allograft 
        • Hamstring autograft 
        • Quadriceps tendon autograft `,
      },
      {
        title: "Return to sports after ACL Reconstruction ",
        content: `• Athletes can return to pivoting sports after 4 to 8 weeks 
        • Athletes can return to regular sports after about 8 months. Make sure to take your orthopedic surgeon's approval before returning to sports.`,
      }
    ];
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const causes = [
        {
            title: 'Sports Injuries ',
            description: 'Many ACL tears occur during high-impact sports and activities, such as soccer, basketball, football, skiing, and gymnastics. These sports involve rapid changes in direction, sudden stops, or pivoting motions, which can put immense stress on the ACL. ',
            icon: "/images/circumcision/u-1.png"
        },
        {
            title: 'Trauma or Impact ',
            description: 'A direct blow or trauma to the knee, such as a car accident or a fall, can lead to an ACL tear. The ligament can be stretched or torn due to the force exerted on the knee joint',
            icon: "/images/circumcision/u-2.png"
        },
        {
            title: 'Sudden Stops and Pivots ',
            description: 'Abrupt stops and changes in direction during physical activities can strain the ACL. This is common in basketball and tennis, where players. frequently change direction.',
            icon: "/images/circumcision/u-3.png"
        },
        {
            title: 'Landing Incorrectly ',
            description: 'Athletes who land awkwardly from a jump or fall are at an increased risk of tearing their ACL. Poor landing technique can place excessive strain on the ligament',
            icon: "/images/circumcision/u-4.png"
        },
        {
            title: 'Overextension ',
            description: 'Hyperextension of the knee joint, where the lower leg is forced backward beyond its normal range of motion, can lead to ACL tears. ',
            icon: "/images/circumcision/u-5.png"
        },
        {
            title: 'Gender ',
            description: 'Women are more prone to ACL tears than men. This increased risk may be due to differences in musculature, biomechanics, and hormonal. factors. ',
            icon: "/images/circumcision/u-6.png"
        },
        {
            title: 'Muscle Imbalances  ',
            description: 'Weakness or imbalances in the muscles that support the knee can increase the risk of ACL injuries. When these muscles are not adequately developed, they may not stabilize the joint sufficiently.',
            icon: "/images/circumcision/u-6.png"
        },
        {
            title: 'Previous ACL Tears ',
            description: 'Individuals who have previously torn their ACL are at a higher risk of re-injury, as the ligament may not be as strong or stable as before',
            icon: "/images/circumcision/u-1.png"
        },
        {
            title: 'Genetics ',
            description: 'Evidence suggests that genetics may play a role in ACL tears. Some individuals may have genetic factors that make their ligaments more prone to injury. ',
            icon: "/images/circumcision/u-6.png"
        },
        {
            title: 'Environmental Conditions ',
            description: 'Slippery or uneven playing surfaces can increase the likelihood of ACL injuries, as they can lead to uncontrolled movements and awkward landing.',
            icon: "/images/circumcision/u-2.png"
        },
        {
            title: 'Fating and Overuse ',
            description: 'Tired muscles and overuse can reduce an individual`s ability to control their movements, making them more susceptible to ACL injuries.',
            icon: "/images/circumcision/u-4.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Pain and Swelling ",
          description: "One of the most common signs of an ACL tear is sudden and severe pain in the knee, accompanied by noticeable swelling. This can make walking and bearing weight on the affected leg extremely painful."
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Instability ",
          description: "Many individuals with an ACL tear report a feeling of instability in the knee as if it might give way. This Instability can affect daily activities and physical performance.  "
        },
        {
          icon: "/images/cosmetic/c-m-1.png",
          title: "Popping Sound ",
          description: "Some people hear or feel a distinct popping sound at the time of injury, often an indicator of an ACL tear."
        }
    ];
    return (
        <div>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-30 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable ACL Tear Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through ACL tear surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of ACL tear surgery consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons. </p>
                        <p className="text-gray-600 mt-2">An ACL tear, or anterior cruciate ligament tear, is a common sports injury that can significantly impact an individual's life. Understanding the signs, treatment options, and benefits of surgery is crucial for those who have experienced this injury. Aapkacare is here to provide comprehensive information on ACL tears and guide you through the treatment process. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Signs of an ACL Tear </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 text-center">
                    {reasons.slice(0, 3).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Causes of ACL tear</h1>
                <p className="text-center text-xl mb-6 ">Some of the primary reasons include:
                </p>
                <h1 className="text-center text-2xl font-bold mb-6">There are the most typing causes of muscle weakness that lead to hernia:</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-4 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 11).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className='container max-w-full'>
                <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                    <div className='flex flex-col flex-1/2'>
                        <h1 className="text-2xl font-bold mb-4">What Is A ACL Tear? </h1>
                        <p className="text-md mb-4">A tear in the anterior cruciate ligament is known as ACL tear. It is one of the major ligaments in the knee. Athletes and women who wear high heels for long hours are likely to suffer from an ACL tear often. ACL tear is commonly witnessed in players related to soccer, football, cricket, basketball etc where sudden jumping, landing and other such body movements are required. The surgery to reconstruct a torn or injured ACL is known as ACL Reconstruction. 
                        </p>
                    </div>
                    <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/orthopaedic/o-a-1.png"/>
                </div>
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row md:px-30 px-5 gap-10">
                    <img alt="Surgeons" className="md:py-5 py-2 rounded-lg w-[500px] h-[450px] md:pt-12 pt-5" src="/images/docter.png"/>
                    <div className='md:pr-10 pr-0 md:my-10 my-0'>
                        <h1 className="text-3xl font-bold mb-4">Types of ACL Surgery </h1>
                        <h2 className='text-xl font-bold mb-4'>Arthroscopic ACL Reconstruction </h2>
                        <p className='mb-4'>This minimally invasive surgery involves using a tiny camera and small incisions to replace the torn ACL with a graft from another part of your body or a donor.</p>
                        <h2 className='text-xl font-bold mb-4'>Open Surgery </h2>
                        <p className='mb-4'>Open surgery may be required in rare cases where a larger incision is made to repair the damaged ACL.</p>
                    </div>
                </div>
                <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">When to Treat an ACL Tear  </h1>
                        <p className="text-md mb-4">It's essential to address an ACL tear promptly to prevent further damage. The treatment options may vary depending on the severity and your activity level. Aapkacare recommends seeking medical attention if you suspect an ACL tear, as the healthcare professional will assess your injury and recommend an appropriate course of action. </p>
                        <h1 className="text-2xl font-bold mb-4">Treatment Options </h1>
                        <ul className='list-disc pl-5 mb-4'>
                            <li><span className='font-bold'>Non-Surgical Treatment: </span>Sometimes, a minor ACL tear can be managed without surgery. Physical therapy and rehabilitation exercises can help regain strength and stability in the knee over time. </li>
                            <li><span className='font-bold'>Surgical Treatment: </span>Surgical intervention may be necessary for more severe ACL tears or individuals with high physical demands. Different types of surgery, such as arthroscopic ACL reconstruction, aim to repair the torn ligament. 
                            </li>
                        </ul>
                    </div>
                    <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/laparoscopy/Gallbladder1-1.png"/>
                </div>
            </div>
            <div className='max-w-full md:px-30 px-5 bg-[#E2F2FD] container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='w-full md:w-1/3 mt-0 md:my-10 md:ml-4'>
                    <img src="/images/orthopaedic/o-a-2.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <div className="w-full max-w-3xl md:mx-14 mx-auto p-4">
                        <h1 className="text-3xl font-bold mb-2">Overview</h1>
                        {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg mb-2">
                            <button className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
                            onClick={() => toggleAccordion(index)}>
                                {faq.title}
                                    <ChevronRight className={`transform transition-transform ${
                                    openIndex === index ? "rotate-90" : ""
                                }`}
                            />
                            </button>
                            {openIndex === index && faq.content && (
                            <div className="p-4 text-gray-600 bg-[#E2F2FD] rounded-b-lg">
                                {faq.content.split("\n").map((line, i) => (
                                    <p key={i} className="mb-2">
                                        {line}
                                    </p>
                                ))}   
                            </div>)}
                        </div>))}
                    </div>
                </div>
            </div>
            <div className='container max-w-full'>
                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div>
                        <h1 className="text-2xl font-bold mb-4">ACL Tear Treatment </h1>
                        <p className="text-md mb-4">During the physical examination, the doctor will check the swelling in the knee. The doctor may also ask you to change positions of the knee to check if the knee is functioning properly. The diagnosis, in most cases, can be done on the basis of the physical test alone, but if the injury looks severe, the doctor may ask you to take a few more tests such as X-rays and MRI. </p>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/orthopaedic/o-a-4.png"/>
                    </div>

                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <img alt="Surgeons performing laparoscopic surgery" className="mb-4 md:mb-0 md:mr-6 rounded-lg w-[500px] md:p-6 p-2" height="300" src="/images/orthopaedic/o-a-5.png"/>
                        <div className='md:py-10 py-3'>
                            <h2 className="text-2xl font-bold mb-4">ACL Tear Surgery </h2>
                            <p className="text-lg">Surgical intervention may be necessary for more severe ACL tears or individuals with high physical demands. Different types of surgery, such as arthroscopic ACL reconstruction, aim to repair the torn ligament. 
                            </p>
                        </div>
                    </div>

                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 md:py-10 py-5">
                        <div className='flex flex-col flex-1/2'>
                        <h1 className="text-2xl font-bold mb-4">Undergo less invasive and successful ACL Reconstruction Surgery In Pune When is consultation with the doctor needed? </h1>
                        <p className="text-md mb-4">Tears in the ACL or anterior cruciate ligament because of an injury of the knee joint is one of the most common types of injuries of the knee. ACL or the anterior cruciate ligament is one of the major ligaments of the knee joint and is responsible for the stability of the joint. If an injury is sustained, the ligament does not heal by itself. This implies that in case of ACL tear or injury, an orthopedic must be consulted to immediately know about treatment options. 
                        </p>
                        <p className="text-md mb-4">If the injury sustained by the ACL is of Grade 1, it can be treated with non-surgical methods effectively. But if Grade 2 or Grade 3 injuries are sustained, your doctor may suggest ACL Reconstruction Surgery in Pune. With its certified, trained and experienced team of surgeons and a compassionate and caring environment, Aapka Care is one of the best choices for undergoing ACL Reconstruction Surgery. The surgeons at Aapka Care use the latest technologies and high-end equipment for your reconstruction surgery, and the follow-up appointments and rehabilitation program will ensure that you are on the right track to recovery.
                        </p>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/docter.png"/>
                    </div>
                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div className='md:py-10 py-3'>
                            <h2 className="text-2xl font-bold mb-4">How is an HCL tear treated?</h2>
                            <p className="text-lg">A severe injury to the knee can result in an ACL tear. You would need a proper diagnosis after scans and physical examination to ensure that your Injury is an ACL tear. Once a proper diagnosis is made, a comprehensive treatment plan can be drawn based on the following factors. 
                            </p>
                            <ul className='list-disc pl-5 mb-4'>
                                <li>The severity and extent of the injury</li>
                                <li>Age and skeletal development of the patient. </li>
                                <li>Type of lifestyle and activity routine of the patient. </li>
                            </ul>
                            <p className="text-lg">The grading of ACL injuries is based on the extent of damage to the anterior cruciate ligament. The injuries are divided into three categories as follows.  
                            </p>
                            <ul className='list-disc pl-5 mb-4'>
                                <li>Grade 1: A light stretch in the ligament with mild damage is a Grade 1 injury. No instability of the knee is caused. </li>
                                <li>Grade 2: injuries involve a strong stretch in the ACL which can make it lose. This is known as a partial tear of the anterior cruciate ligament and causes pain, inflammation, and instability. </li>
                                <li>Grade 3: A complete ligament tear occurs due to overstretching of the joint. The ligament splits into two and makes the knee joint highly unstable, inflamed, and immobile</li>
                            </ul>
                            <p className="text-lg">If the ACL tear is mild and is caused by just a light stretch of the knee, surgical treatments will probably not be required. Nonsurgical treatment alternatives like the following can prove to be effective. 
                            </p>
                            <ul className='list-disc pl-5 mb-4'>
                                <li>Limiting and modifying activities</li>
                                <li>Using a brace, cast, or splint</li>
                                <li>Rehabilitation and physiotherapy programs. </li>
                            </ul>
                            <p className="text-lg">However, in case of Grade 2 or Grade 3 injuries, an ACL Reconstruction surgery can be suggested by your orthopedic. The surgery aims to restructure the torn ligament by using a piece of tendon from another part of the knee, or a donor 
                            </p>
                        </div>
                    </div>
                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 md:py-10 py-5">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/docter.png"/>
                        <div className='flex flex-col flex-1/2'>
                        <h1 className="text-2xl font-bold mb-4">Benefits of undergoing arthroscopic ACL tear surgery </h1>
                            <ul className='list-disc pl-5 mb-4'>
                                <li><span className="font-bold">Stability:</span> ACL surgery helps restore stability to the knee, allowing individuals to return to their desired level of physical activity and sports. </li>
                                <li><span className="font-bold">Reduced Risk of Complications: </span>Surgical intervention can minimize the risk of long-term complications such as meniscus tears and cartilage damage. </li>
                                <li><span className="font-bold">Improved Quality of Life: </span>After successful surgery and rehabilitation, individuals can regain confidence and live a more active and pain-free life. </li>
                            </ul>
                 Name           <p className="text-lg"><span className="font-bold">Aapkacare </span>is dedicated to helping you understand ACL tears and make informed decisions about your treatment options. If you suspect an ACL tear or have questions about treatment, don't hesitate to contact our experts for guidance and support. Your health is our priority, and we're here to assist you every step of the way.
                            </p>
                        </div>
                    </div>
            </div>
            <ReactUs/>
            <DetailedImages/>     
        </div>
    );
}

export default ACLTear;

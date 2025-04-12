
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';

import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';
const KneeReplacement = () => {
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Knee replacement surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through Knee replacement surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of Varicocele consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons  
                        </p>
                        <p className="text-gray-600 mt-2">Are you experiencing persistent signs and symptoms of knee pain that have disrupted your quality of life? At Aapkacare, we understand the importance of finding the right solution for your knee Issues. Our experienced team of doctors specializes in knee replacement surgeries and is dedicated to helping you regain your mobility and alleviate discomfort.. Let's explore the signs, symptoms, and the journey you can expect before and after knee replacement treatment. 
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Knee replacement? </h2>
                        <p className="text-gray-700">Knee replacement, or knee arthroplasty, is a surgical procedure that is commonly recommended to restore the mobility and normal function of the knee joint. There are various reasons for which the orthopedic surgeon can advise you to get knee replacement surgery, such as osteoarthritis, knee arthritis, trauma, or knee injury. It is usually only advised to people who have become bedridden due to severe knee joint pain and/or instability. </p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/orthopaedic/o-k-1.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className='flex flex-col md:flex-row bg-[#E2F2FD] lg:p-8 md:p-6 p-4'>
                {/* Image Section */}
                <div className="flex-1 p-4">
                    <img src="/images/orthopaedic/o-k-2.png" alt="Illustration of Knee Replacement Surgery" className='w-full max-h-[500px] h-auto object-cover rounded-lg'/>
                </div>

                {/* Content Section */}
                <div className='md:w-1/2 w-full p-4'>
                    <h2 className='text-2xl font-bold mb-2'>Understanding Knee Replacement Surgery</h2>
                    <p className='sm:text-lg text-base mb-4'>Knee replacement surgery is a highly effective medical procedure for individuals suffering from chronic knee pain, limited mobility, and decreased quality of life. Our skilled doctors at Aapkacare have extensive experience in performing knee replacement surgeries to enhance your overall well-being.
                    </p>
                    <h2 className='text-2xl font-bold mb-4'>Common Signs and Symptoms:</h2>
        
                    {/* List of Symptoms */}
                    <ul className='list-disc ml-5'>
                        {[
                            { title: "Persistent Knee Pain", desc: "Chronic pain aggravated during physical activity or even at rest." },
                            { title: "Stiffness", desc: "Difficulty bending or straightening your knee, indicating a knee issue." },
                            { title: "Swelling", desc: "Frequent swelling in the knee area may signal an underlying problem." },
                            { title: "Limited Mobility", desc: "Struggling to move, walk, or engage in daily activities due to knee discomfort." },
                            { title: "Crunching or Popping Sounds", desc: "Hearing unusual noises when moving the knee, indicating cartilage wear." }
                        ].map((item, index) => (
                            <li key={index} className='sm:text-lg text-base mb-2'>
                                <span className='font-bold'>{item.title}: </span>{item.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='md:py-10 py-3 md:px-30 px-5 bg-white'>
                    <h1 className="text-3xl font-bold mb-4">Best Surgery </h1>
                    <h2 className='text-md mb-4'>Our doctors at Aapkacare will conduct  through examination of your knee, including X-rays and other diagnostic tests, to evaluate the extent of damage. Depending on the severity, they will recommend either partial or total knee replacement.</h2>
                    <h1 className="text-3xl font-bold mb-4">During Surgery</h1>
                    <h2 className='text-md mb-4'>Knee replacement surgery involves removing damaged cartilage and bone and replacing them with artificial joint components. Our skilled surgeons use the latest techniques and technology to ensure a successful surgery. </h2>
                    <h1 className="text-3xl font-bold mb-4">After Surgery</h1>
                    <ul className='list-disc mb-4 ml-3'>
                        <li className="mb-2"><span className="font-bold">Rehabilitation:</span>After surgery, repair is crucial. Our team will guide you through exercises and therapies to regain strength and flexibility. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Pain Management:</span>Managing post-operative pain is essential for a smooth recovery. Our doctors will prescribe appropriate pain relief medications. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Follow-Up Care: </span>Regular follow-up appointments with our team will monitor your progress and address any concerns. </li>
                        <li className="mb-2"><span className="font-bold">Restored Mobility:</span>With dedication to your rehabilitation, you • can look forward to improved mobility and reduced pain. 
                        </li>
                    </ul>
                    <h2 className='text-md mb-4'><span className="font-bold">At Aapkacare,</span> we prioritize your well-being and offer the best care for knee replacement surgeries. Trust our skilled doctors to help you regain your active lifestyle. Don't let knee pain hold you back contact us today to learn more about how we can improve your quality of life through knee replacement surgery.</h2>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default KneeReplacement;

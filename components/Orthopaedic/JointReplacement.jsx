
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const JoinReplacement = () => {
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Joint Replacement Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through Joint Replacement surgery and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons.  
                        </p>
                        <p className="text-gray-600 mt-2">Welcome to Aapkacare's comprehensive guide on joint replacement. You've come to the right place if you or a loved one are experiencing joint pain, limited mobility, and decreased quality of life due to typical issues. We'll provide you with essential information on the signs, treatment options, types of surgery, the surgical process, and the benefits of joint replacement. 
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>
            <div className='container max-w-full'>
                <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 md:py-10 py-5">
                    <div className='flex flex-col flex-1/2'>
                        <h1 className="text-4xl font-bold mb-4">When to Seek Treatment  </h1>
                        <p className="text-xl mb-4">If you experience any of the signs mentioned above, it is crucial to seek prompt medical attention. Early diagnosis and treatment can prevent the condition from worsening and reduce the need for surgery. 
                        </p>
                        <h1 className='text-3xl mb-4'>Treatment Options </h1>
                        <ul className='list-disc pl-5 mb-4 text-xl'>
                            <li><span className='font-bold'>Conservative Treatment: </span>Non-surgical options include rest, physical therapy, pain management, and anti-inflammatory medications. </li>
                            <li><span className='font-bold'>Conservative Treatment: Surgical Treatment: </span>In cases where conservative methods are ineffective or if there is significant nerve compression, surgery may be necessary.</li>
                        </ul>
                    </div>
                    <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/orthopaedic/o-d-1.png"/>
                </div>
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 md:py-10 py-5">
                    <div className='flex flex-col flex-1/2'>
                        <h1 className="text-4xl font-bold mb-4">Types of Disc Surgery  </h1>
                        <p className="text-xl mb-4">When surgery becomes the preferred option, several procedures can be considered:  
                        </p>
                        <ul className='list-disc pl-5 mb-4 text-xl'>
                            <li><span className='font-bold'>Conservative Treatment: Discectomy: </span>This surgery involves removing the damaged portion of the disc. </li>
                            <li><span className='font-bold'>Conservative Treatment: Surgical Treatment: Laminectomy: </span>Involves removing the lamina (the back part of the vertebra) to relieve pressure on the nerve </li>
                            <li><span className='font-bold'>Spinal Fusion: </span>This procedure fuses two or more vertebrae to stabilize the spine. </li>
                            <li><span className='font-bold'>Laminectomy: Artificial Disc Replacement: </span>Replace the damaged disc with an artificial one, maintaining flexibility.</li>
                        </ul>
                    </div>
                    <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[600px]" src="/images/docter.png"/>
                </div>
                <div className='bg-white w-full md:px-30 px-5 md:py-10 py-5'>
                        <h1 className="text-4xl font-bold mb-4">How Disc Surgery Works</h1>
                        <p className="text-xl mb-4">Disc surgeries are typically performed under general anesthesia. Minimally invasive techniques are becoming more common, reducing recovery time and scarring. Your surgeon will discuss the best approach for your specific case.</p>
                </div>
                <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3 md:py-10 py-5">
                    <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[300px]" src="/images/laparoscopy/Gallbladder1-2.png"/>
                    <div className='flex flex-col flex-1/2'>
                        <h1 className="text-4xl font-bold mb-4">Benefits of Disc Surgery  </h1>
                        <ul className='list-disc pl-5 mb-4 text-xl'>
                            <li><span className='font-bold'>Pain Relief:</span>This Surgery can provide rapid relief from severe pain and discomfort.  </li>
                            <li><span className='font-bold'>Improved Mobility: </span>Many patients experience increased mobility and a return to regular activities. </li>
                            <li><span className='font-bold'>Prevention of Nerve Damage: </span>Surgery can prevent further nerve damage, ensuring a better long-term outcome. </li>
                            <li><span className='font-bold'>Enhanced Quality of Life: </span>Surgery can significantly improve your overall quality of life by addressing the underlying issue.</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-white w-full md:px-30 px-5 md:py-10 py-5'>
                        <h1 className="text-4xl font-bold mb-4">Aapkacare: Your Partner in Recovery </h1>
                        <p className="text-xl mb-4"><span className='font-bold'>Aapkacareis </span>committed to providing you with the best possible care and support throughout your recovery from a disc injury. Our experienced medical professionals will guide you through the treatment options, including surgery, and provide personalized care that meets your needs. </p>
                        <p className="text-xl mb-4">Disc injuries are a common source of pain and discomfort, but you can regain your quality of life with timely and appropriate treatment. Aapkacare is here to assist you on your path to recovery. If you have any questions or concerns about disc injuries, cure, or surgery, please don't hesitate to contact us. Your health and well-being are our top priorities.</p>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default JoinReplacement;

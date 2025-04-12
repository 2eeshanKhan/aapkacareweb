import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import ReasonsForLasik from '@/module/Container';
import UnderstandCauses from '@/module/Causes';

import Expert from '@/module/Expert';
import FAQ from '@/module/FAQ';

import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';


const Gallbladder = () => {
    return (
        <>
            <MainTop/>
            <div className="mx-auto md:px-16 px-0">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Gallbladder Stone Surgery </h1>
                        <p className="text-gray-600 mt-2">Gallbladder stones (cholelithiasis) can be silent or cause unbearable pain if they get stuck. Our gallstone specialists in Pune use gallstone surgery (cholecystectomy) to resolve the condition effectively. Consult the best gallstone surgeons in Pune using advanced techniques for gallstone treatment.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What Is A Gallbladder Stone?</h2>
                        <p className="text-gray-700">Gallbladder stones, also known as gallstones or cholelithiasis, are solid particles that form in the gallbladder, a small organ located just beneath the liver. The gallbladder's primary function is to store bile, a digestive fluid produced by the liver, and release it into the small intestine to help digest the fats needed. A gallstone can vary in size from tiny grains of sand to larger, golf ball-sized stones. They primarily comprise cholesterol or bilirubin, a pigment produced when red blood cells break down.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/Gallbladder -1.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/3">
                            <h1 className="text-3xl font-bold mb-4">Treatment</h1>
                            <h2 className='text-xl font-bold mb-4'>Diagnosis</h2>
                            <p className='mb-4'>Diagnosis and treatment of gallbladder stones typically involve a combination of medical evaluation, imaging tests, and, in some cases, medical surgery intervention. Here's an overview of the process</p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Medical History and Physical Examination:</strong>
                                    The doctor will begin by taking a detailed medical history and conducting a physical examination. They will ask about your symptoms, including abdominal pain, digestive issues, or jaundice. 
                                </li>
                                <li className="mb-2">
                                    <strong>Blood Test:</strong>
                                    A blood test may be ordered to check for elevated liver enzyme and bilirubin levels. 
                                </li>
                                <li className="mb-2">
                                    <strong>Imaging Tests:</strong>
                                    Various imaging studies can help confirm the presence of gallstones and assess the severity of the condition. Standard imaging tests are: Ultra Sound, CT Scan, MRI, HIDA Scan
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                            <img alt="Medical"className="" height="300" src="/images/laparoscopy/Gallbladder-2.png" width="400"/>
                        </div>
                    </div>
                </div>
            </div>

                <div className='container max-w-full'>
                    <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-20 px-5 gap-3">
                        <div>
                        <h1 className="text-2xl font-bold mb-4">Surgery (Cholecystectomy)</h1>
                        <p className="text-md mb-4">If Gallstone is causing symptoms or complications, the most common treatment is the surgical removal of the gallbladder, known as cholecystectomy. This procedure can be performed using minimally invasive laparoscopic techniques or open surgery, depending on the patient’s condition. Treatment choice depends on the specific circumstances, including the size and location of the stone, the severity of symptoms, and the patient’s overall health. It’s essential to consult with a healthcare provider for a proper evaluation and individualized treatment plan if you suspect you have gallbladder stones or are experiencing symptoms. Left untreated, gallstones can lead to potentially serious complications.
                        </p>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[400px] md:p-6 p-2" height="200" src="/images/laparoscopy/Gallbladder1-1.png"/>
                    </div>

                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-20 px-5 gap-3">
                        <img alt="Surgeons performing laparoscopic surgery" className="mb-4 md:mb-0 md:mr-6 rounded-lg w-[500px] md:p-6 p-2" height="300" src="/images/laparoscopy/Gallbladder1-2.png"/>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Best Treatment for Gallstone in Pune at Aapka Care</h2>
                            <p className="text-lg">Laparoscopy is the best treatment for Gallstones in Pune, even if the treatment involves the removal of the gallbladder. Here at Aapka Care, we will provide you with the best surgeon and facilities at a reasonable price for laparoscopy. We have a success rate of 90%. You get the appointments and treatment in a hassle-free way. If you seek gallstone treatment in Pune, Aapka Care is your best option. We are one of the leading and best healthcare services in Pune. Book an appointment and consult with the specialist today to get more information about the treatment and surgeons.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-20 px-5 gap-3">
                        <div>
                        <h1 className="text-2xl font-bold mb-4">Surgery Cholecystectomy</h1>
                        <p className="text-md mb-4">If Gallstone is causing symptoms or complications, the most common treatment is the surgical removal of the gallbladder, known as cholecystectomy. This procedure can be performed using minimally invasive laparoscopic techniques or open surgery, depending on the patient’s condition. Treatment choice depends on the specific circumstances, including the size and location of the stone, the severity of symptoms, and the patient’s overall health. It’s essential to consult with a healthcare provider for a proper evaluation and individualized treatment plan if you suspect you have gallbladder stones or are experiencing symptoms. Left untreated, gallstones can lead to potentially serious complications.
                        </p>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[400px] md:p-6 p-2" height="200" src="/images/laparoscopy/Gallbladder1-3.png"/>
                    </div>
                    <div  className="bg-white w-full flex flex-col md:flex-row items-center md:px-20 px-5 gap-3">
                        <div>
                        <h1  className="text-2xl font-bold mb-4">Surgery Cholecystectomy</h1>
                        <p  className="text-md mb-4">If Gallstone is causing symptoms or complications, the most common treatment is the surgical removal of the gallbladder, known as cholecystectomy. This procedure can be performed using minimally invasive laparoscopic techniques or open surgery, depending on the patient’s condition. Treatment choice depends on the specific circumstances, including the size and location of the stone, the severity of symptoms, and the patient’s overall health. It’s essential to consult with a healthcare provider for a proper evaluation and individualized treatment plan if you suspect you have gallbladder stones or are experiencing symptoms. Left untreated, gallstones can lead to potentially serious complications.
                        </p>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/laparoscopy/Gallbladder1-4.png"/>
                    </div>

                    <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-20 px-5 gap-3">
                        <img alt="Surgeons"  className="rounded-lg w-[500px]" height="300" src="/images/laparoscopy/Gallbladder1-2.png"/>
                        <div className='md:pr-10 pr-0 md:my-10 my-0'>
                            <h1 className="text-2xl font-bold mb-4">Prevention of Gallbladder Stones </h1>
                            <h3 className='font-bold mb-4'>It is mostly our lifestyle that increases the risk of gallbladder stone formation. Therefore, you can prevent gallstones by making the following changes in your daily life: </h3>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Do not skip meals- </strong>
                                    Try your best to stick with the usual meal times each day. Skipping meals can cause excess bile secretion and deposition. 
                                </li>
                                <li className="mb-2">
                                    <strong>Lose weight slowly- </strong>
                                    Being overweight is a risk factor for gallstone development. So, if you are trying to lose weight, take things slow. Don't push your body to its limits in order to lose weight as rapid weight loss can cause the liver to secrete extra cholesterol, which can further increase the risk of gallstones.  
                                </li>
                                <li className="mb-2">
                                    <strong>Eat high-fiber foods- </strong>
                                    Foods that are rich in fiber ensure that the levels of bad cholesterol in the body are minimal. Furthermore, fiber keeps the digestive system moving and helps to flush out the bile from the body. Therefore, it is crucial that you add more fiber to your diet
                                </li>
                                <li className="mb-2">
                                    <strong>Exercise regularly- </strong>
                                    It doesn't necessarily mean that you have to do an extensive workout, being physically active is enough. The less you move, the slower the digestion process will be. As a result, the bile won't flush out correctly. Invest some time in exercising and leave the sedentary lifestyle behind.
                                </li>
                                <li className="mb-2">
                                    <strong>Take prescribed medications- </strong>
                                    People who are at high risk of developing gallstones due to heredity or other factors can take medicines to lower the risk of gallstone formation. 
                                </li>

                                You can talk to a gallstone specialist to find out what else you can do to prevent gallstones.
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='max-w-full h-5 bg-white'></div>
                <ReactUs/>
                <DetailedImages/>  
        </>
    );
}

export default Gallbladder;
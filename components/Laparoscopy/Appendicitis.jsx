
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
const Appendicitis = () => {
    const causes = [
        {
            title: 'Chronic Straining',
            description: 'Chronic straining, such as chronic constipation or chronic obstructive pulmonary disease (COPD), can increase the risk of hernias.',
            icon: "/images/laparoscopy/understand-1.png"
        },
        {
            title: 'Weakness in the Muscles',
            description: 'Muscles and connective tissues in the body can weaken over time due to aging, injury, or genetic predisposition.',
            icon: "/images/laparoscopy/understand-2.png"
        },
        {
            title: 'Congenital Factors',
            description: 'Some people may have natural weakness in their abdominal or groin muscles from birth, which makes them more vulnerable to hernias.',
            icon: "/images/laparoscopy/understand-3.png"
        },
        {
            title: 'Obesity',
            description: 'Excess body weight can strain the abdominal muscles and increase the risk of hernia development.',
            icon: "/images/laparoscopy/understand-4.png"
        },
        {
            title: 'Previous Surgical Incisions',
            description: 'Surgical incisions can create weakness in the abdominal wall, making hernia more likely to occur at or near these incisions.',
            icon: "/images/laparoscopy/understand-5.png"
        },
        {
            title: 'Previous Surgical Incisions',
            description: 'Surgical incisions can create weakness in the abdominal wall, making hernia more likely to occur at or near these incisions.',
            icon: "/images/laparoscopy/understand-6.png"
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Appendicitis Treatment </h1>
                        <p className="text-gray-600 mt-2">Chronic or acute appendicitis can affect people of all age groups. Undergo minimally invasive laparoscopic appendectomy at the hands of experienced surgeons. Get rid of the constant pain in the right side of the abdomen through a painless procedure.
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Appendicitis? </h2>
                        <p className="text-gray-700">Appendicitis is a medical condition that involves the inflammation of the appendix, a small, tube-like structure located in the lower right side of the abdomen. If left untreated, appendicitis can lead to severe complications.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/appendix-1.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <ReactUs/>
            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Understand the causes of Appendicitis </h1>
                <p className="text-center text-xl mb-6 border">
                </p>
                <h2 className="text-center text-3xl font-bold mb-6">The exact cause of appendicitis is not always clear, but it is believed to occur due to various factors, including:</h2>
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

            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/3">
                            <h1 className ="text-3xl font-bold mb-4">Symptoms of appendicitis</h1>
                            <ul className ="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Abdominal pain:</strong>
                                    Typically starts around the belly button and then moves to the lower right side of the abdomen. The pain often becomes sharp and severe.
                                </li>
                                <li className ="mb-2">
                                    <strong>Loss of appetite.</strong>
                                </li>
                                <li className ="mb-2">
                                    <strong>Nausea and vomiting.</strong>
                                </li>
                                <li className ="mb-2">
                                    <strong>Fever and an elevated white blood cell count are signs of infection.</strong>
                                </li>
                                <li className="mb-2">
                                    <strong>Difficulty passing gas or having a bowel movement.</strong>
                                </li>
                                <li className="mb-2">
                                    <strong>Imaging Tests:</strong>
                                    Various imaging studies can help confirm the presence of gallstones and assess the severity of the condition. Standard imaging tests are: Ultra Sound, CT Scan, MRI, HIDA Scan
                                </li>
                            </ul>
                            <p className="mb-4">Appendicitis is considered a medical emergency, and if you suspect you or someone you know has appendicitis, it’s essential to seek immediate medical attention. Treatment typically involves surgical removal of the inflamed appendix, an appendectomy procedure. This surgery is usually done laparoscopically or through a small incision in the abdomen.
                            </p>
                            <p>Prompt treatment is crucial because if the appendix ruptures, it can lead to a potentially life-threatening condition called peritonitis, where the infection spreads throughout the abdominal cavity. Therefore, if you suspect appendicitis, contact a healthcare professional immediately.
                            </p>
                        </div>
                        <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                            <img alt="Medical professionals performing surgery in an operating room" className="rounded-lg shadow-lg" height="300" src="https://storage.googleapis.com/a1aa/image/KOgzkyHXQ8IJgxCvSA2qDgk5CT0S1k45VxGiA2Z7uOU.jpg" width="400"/>
                        </div>
                    </div>
                </div>
            </div>
            <DetailedImages/>
        </>
    );
}

export default Appendicitis;

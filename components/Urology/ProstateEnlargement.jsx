import React from 'react';

import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import FAQUrology from '@/module/FaqUrology'


import ReasonCard from '@/module/ReasonCard';



import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const ProstateEnlargement = () => {
    const reasons = [
        {
          icon: "/images/circumcision/k-1.png",
          title: "Increased Frequency of Urination ",
          description: "Men with BPH often need to urinate more frequently than usual. This can include more frequent trips to the bathroom during the day and night. "
        },
        {
          icon: "/images/circumcision/k-2.png",
          title: "Difficulty Initiating Urination ",
          description: "It may become more challenging to start urination, and there may be a delay between trying to urinate and the actual urine flow. "
        },
        {
          icon: "/images/circumcision/k-3.png",
          title: "Weak Urine Stream ",
          description: "The force of the urine stream may decrease, resulting in a weaker stream than usual. "
        },
        {
          icon: "/images/circumcision/k-4.png",
          title: "Dribbling at the End of Urination ",
          description: "After urination, some men with BPH may experience dribbling. where urine leaks out. "
        },
        {
          icon: "/images/circumcision/k-5.png",
          title: "Sensation of Incomplete Emptying ",
          description: "Even after urination, some individuals may feel that the bladder is not empty, leading to a persistent sense of urinating. "
        },
        {
          icon: "/images/circumcision/k-6.png",
          title: "Urgency ",
          description: "BPH can lead to a sudden and strong urge to urinate, often making it difficult to hold in the urine when needed."
        }
    ];
    const causes = [
        {
            title: 'Aging ',
            description: 'BPH is primarily an age-related condition, becoming more common as men age. Changes in hormone levels. and cell growth over time may lead to prostate enlargement. ',
            icon: "/images/circumcision/u-1.png"
        },
        {
            title: 'Hormonal Changes. ',
            description: 'Hormones, particularly dihydrotestosterone (DHT), play a significant role in the growth and maintenance of the prostate gland. Changes. In hormone levels as men age can lead to an increase in DHT, stimulating prostate cell growth.',
            icon: "/images/circumcision/u-2.png"
        },
        {
            title: 'Family History ',
            description: 'PH appears to have a genetic component. Men with a family history of BPH or prostate cancer are at a higher risk of developing the condition. ',
            icon: "/images/circumcision/u-3.png"
        },
        {
            title: 'Testosterone ',
            description: 'Although often associated with DHT, testosterone may also contribute to prostate growth. Some studies suggest that the body`s balance between testosterone and estrogen may influence prostate enlargement.',
            icon: "/images/circumcision/u-4.png"
        },
        {
            title: 'Lifestyle Factors ',
            description: 'Certain factors may contribute to BPH or exacerbate its symptoms. These factors include obesity, lack of physical activity, and a diet high in red meat and low in fruits and vegetables. ',
            icon: "/images/circumcision/u-5.png"
        },
        {
            title: 'Ethnicity ',
            description: 'BPH is more common in certain ethnic groups, such as African American men than others.',
            icon: "/images/circumcision/u-6.png"
        },
        {
            title: 'Inflammation ',
            description: 'Chronic prostate inflammation, a condition known as prostatitis, may sometimes be linked to developing BPH. ',
            icon: "/images/circumcision/u-4.png"
        },
        {
            title: 'Medical Conditions ',
            description: 'Certain medical conditions, such as diabetes and heart disease, may increase the risk of developing BPH or worsen Its symptoms. ',
            icon: "/images/circumcision/u-1.png"
        },
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Prostate Enlargement</h1>
                        <p className="text-gray-600 mt-2">Want to go through Prostate Enlargement surgery and have a healthy life at an affordable price with the best doctors in Mumbai? Get all kinds of BPH consultations for your eye surgery. Here at Aapkacare Health, we will provide the best urologists. </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
      
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is BPH? </h2>
                        <p className="text-gray-700">Benign Prostate Hyperplasia (BPH), also known as benign prostatic hyperplasia, is a common medical condition affecting men's prostate gland. The prostate is a walnut-sized gland that surrounds the urethra, the tube that carries urine from the bladder to the penis. BPH is a non-cancerous (benign) prostate gland enlargement that occurs as men age. It is not related to prostate cancer.</p>
                    </div>
                    <div className=" flex justify-center mt-4 md:mt-0">
                        <img src="/images/circumcision/u-p.png"alt="Cataract illustration"className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Understanding the Signs of Benign Prostate Hyperplasia. </h2>
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
                <h2 className="text-center text-3xl font-bold mb-6">These are the most typical causes of muscle weaknesses that lead to hernia: </h2>
                <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 8).map((reason, index) => (
                    <div key={index} className="p-4">
                        <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className="bg-white w-full flex flex-col md:flex-row md:px-30 px-5 gap-3">
                <img alt="Surgeons" className="rounded-lg w-[500px] h-[500px] md:pt-12 pt-5" src="/images/laparoscopy/Gallbladder1-3.png"/>
                <div className='md:pr-10 pr-0 md:my-10 my-0'>
                    <h1 className="text-2xl font-bold mb-4">Enlarged Prostate Treatment in Pune </h1>
                    <h3 className='text-xl font-bold mb-4'>Diagnosis of Benign prostatic hyperplasia (BPH): </h3>
                    <h2 className='text-md mb-4'>The diagnosis of Benign Prostatic Hyperplasia (BPH), also known as an enlarged prostate, typically involves a combination of medical history, physical examination, and various tests. Here are the steps involved in diagnosing BPH: </h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2"><span className="font-bold">Medical History:</span>Your doctor will begin by asking about your medical history, including any urinary symptoms you may be experiencing. Be prepared to discuss your symptoms' nature, severity, duration, and frequency.  
                        </li>
                        <li className="mb-2"><span className="font-bold">Physical Examination:</span>A physical examination may be conducted, which can include a digital rectal examination (DRE). During a DRE, the doctor inserts a gloved, lubricated finger into the rectum to assess the size and condition of the prostate gland. 
                        </li>
                        <li className="mb-2"><span className="font-bold">International Prostate Symptom Score (IPSS): </span>You may be asked to complete an IPSS questionnaire. It helps quantify the severity of your urinary symptoms related to BPH. </li>
                        <li className="mb-2"><span className="font-bold">Urinalysis: </span>A simple urine test can help rule out urinary tract infections or other issues contributing to your symptoms. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Blood Test: </span>A blood test may be performed to check your Prostate-Specific Antigen (PSA) levels. Elevated PSA levels can indicate a problem with the prostate, although it's not specific to BPH.
                        </li>
                        <li className="mb-2"><span className="font-bold">Ultrasound: </span>Transrectal ultrasound (TRUS) or abdominal ultrasound may be used to create an image of the prostate and assess its size and shape.
                        </li>
                        <li className="mb-2"><span className="font-bold">Uroflowmetry: </span>This test measures the rate and amount of urine flow. It can help assess the severity of obstruction due to an enlarged prostate. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Cystoscopy: </span>In some cases, a cystoscopy may be performed. This involves the insertion of a thin, flexible tube with a camera on the end (cystoscope) into the urethra to view the inside of the bladder and urethra. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Pressure Flow Studies: </span>In more complex cases or when surgical intervention is being considered, pressure flow studies can be conducted to measure pressure in the bladder and urethra during urination. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Biopsy: </span>In rare cases, a prostate biopsy may be performed to rule out the possibility of prostate cancer, especially if the PSA levels are significantly elevated.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:py-10 py-3 md:px-30 px-5 bg-[#E2F2FD]'>
                    <h1 className="text-3xl font-bold mb-4">Best Tretment for Enlarged Prostate</h1>
                    <h2 className='text-md mb-4'>The treatment for an enlarged prostate, also known as Benign Prostatic Hyperplasia (BPH), depends on the severity of your symptoms, the impact on your quality of life, and overall health. Treatment options range from watchful waiting to various medical and surgical interventions. Your best treatment should be determined in consultation with your healthcare provider. Here are some standard treatment options for BPH </h2>
                    <ul className=' mb-4'>
                        <li className="mb-2"><span className="font-bold">Watchful Waiting (Active Surveillance):</span> If your symptoms are mild and not significantly affecting your quality of life, your doctor may recommend a watchful waiting approach. This involves regular monitoring to see if the condition worsens. Lifestyle changes may also be recommended.
                        </li>
                        <li className="mb-2"><span className="font-bold">Lifestyle Modifications:</span> Certain lifestyle changes can help alleviate mild BPH symptoms. These may include limiting fluid intake before bedtime, avoiding caffeine and alcohol, and practicing "double voiding" (urinating twice during one bathroom visit).
                        </li>
                        <li className="mb-2"><span className="font-bold">Medications:</span>Several medications can be used to manage BPH symptoms. These include </li>
                    </ul>
                    <ul className='list-disc mb-4 px-5'>
                        <li className="mb-2"><span className="font-bold">Alpha-Blockers:</span> These relax the muscles around the prostate and bladder neck, improving urine flow and relieving symptoms.
                        </li>
                        <li className="mb-2"><span className="font-bold">5-Alpha Reductase Inhibitors:</span> These medications can shrink the prostate gland over time, reducing urinary symptoms. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Combination Therapy: </span>Sometimes, your doctor may prescribe a combination of alpha-blockers and 5-alpha reductase inhibitors for more significant symptorn relief.
                        </li>
                        <li className="mb-2"><span className="font-bold">Phosphodiesterase-5 Inhibitors: </span>Medications like tadalafil may help relieve BPH symptoms and erectile dysfunction. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Minimally Invasive Procedures: </span>If medications do not provide sufficient relief, minimally invasive procedures can be considered, including 
                        </li>
                        <li className="mb-2"><span className="font-bold">Transurethral Microwave Therapy (TUMT) </span></li>
                        <li className="mb-2"><span className="font-bold">Transurethral Radiofrequency Needle Ablation (TUNA)</span></li> 
                        <li className="mb-2"><span className="font-bold">Water Vapor Thermal Therapy (Rezüm) </span></li>
                        <li className="mb-2"><span className="font-bold">Prostatic Urethral Lift (UroLift) </span></li>
                        <li className="mb-2"><span className="font-bold">Surgery: </span>Surgical intervention may be recommended for severe cases or when other treatments are ineffective. Standard surgical procedures for BPH include
                        </li>
                        <li className="mb-2"><span className="font-bold">Transurethral Resection of the Prostate (TURP): </span>This standard procedure involves removing prostate tissue causing the blockage.
                        </li>
                        <li className="mb-2"><span className="font-bold">Transurethral Incision of the Prostate (TUIP):</span> Instead of removing tissue, this procedure involves making minor cuts in the prostate to relieve pressure on the urethra.</li>
                    </ul>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2"><span className="font-bold">Medical History:</span>Your doctor will begin by asking about your medical history, including any urinary symptoms you may be experiencing. Be prepared to discuss your symptoms' nature, severity, duration, and frequency.  
                        </li>
                        <li className="mb-2"><span className="font-bold">Physical Examination:</span>A physical examination may be conducted, which can include a digital rectal examination (DRE). During a DRE, the doctor inserts a gloved, lubricated finger into the rectum to assess the size and condition of the prostate gland. 
                        </li>
                        <li className="mb-2"><span className="font-bold">International Prostate Symptom Score (IPSS): </span>You may be asked to complete an IPSS questionnaire. It helps quantify the severity of your urinary symptoms related to BPH. </li>
                        <li className="mb-2"><span className="font-bold">Urinalysis: </span>A simple urine test can help rule out urinary tract infections or other issues contributing to your symptoms. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Blood Test: </span>A blood test may be performed to check your Prostate-Specific Antigen (PSA) levels. Elevated PSA levels can indicate a problem with the prostate, although it's not specific to BPH.
                        </li>
                        <li className="mb-2"><span className="font-bold">Ultrasound: </span>Transrectal ultrasound (TRUS) or abdominal ultrasound may be used to create an image of the prostate and assess its size and shape.
                        </li>
                        <li className="mb-2"><span className="font-bold">Uroflowmetry: </span>This test measures the rate and amount of urine flow. It can help assess the severity of obstruction due to an enlarged prostate. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Cystoscopy: </span>In some cases, a cystoscopy may be performed. This involves the insertion of a thin, flexible tube with a camera on the end (cystoscope) into the urethra to view the inside of the bladder and urethra. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Pressure Flow Studies: </span>In more complex cases or when surgical intervention is being considered, pressure flow studies can be conducted to measure pressure in the bladder and urethra during urination. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Biopsy: </span>In rare cases, a prostate biopsy may be performed to rule out the possibility of prostate cancer, especially if the PSA levels are significantly elevated.
                        </li>
                        <li className="mb-2"><span className="font-bold">Laser Surgery: </span>Various types of laser surgery can vaporize or remove prostate tissue, such as Holmium laser enucleation (HOLEP) or GreenLight laser therapy. 
                        </li>
                        <li className="mb-2"><span className="font-bold">Open Prostatectomy: </span>Open surgery to remove excess tissue may be necessary in very large prostates.
                        </li>
                        <li className="mb-2"><span className="font-bold">Aapkacare Health: </span>is here to deal with all tretment-related problems and follow-us.
                        </li>
                    </ul>
            </div>
            <div className="bg-white w-full flex flex-col md:flex-row md:px-30 px-5 gap-23">
                <img alt="Surgeons" className="rounded-lg w-[500px] h-[500px] md:pt-12 pt-5" src="/images/laparoscopy/Gallbladder1-3.png"/>
                <div className='md:my-10 my-0'>
                    <h1 className="text-3xl font-bold mb-4">What to prepare for BPH surgary? </h1>
                    <h3 className='font-bold mb-4'>Preparing for a diagnosis of Benign Prostatic Hyperplasia (BPH) or managing the condition effectively involves a combination of lifestyle modifications and proactive healthcare steps. Here are some ways to prepare for BPH or manage it if you've already been diagnosed: </h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2"><span>Consult a Healthcare Provider:</span>If you are experiencing urinary symptoms, such as increased frequency, weak urine flow, or difficulty starting and stopping urination, it's essential to consult a healthcare provider. A healthcare professional can help diagnose BPH and create a tailored treatment plan. 
                        </li>
                        <li className="mb-2"><span>Maintain a Health Journal: </span>Before your appointment, record your urinary symptoms, including their frequency, severity, and any factors that seem to exacerbate or alleviate them. This information can help your healthcare provider in the diagnosis and treatment process. 
                        </li>
                        <li className="mb-2"><span>Understand Your Medications: </span>If you are already taking medications for other health conditions, inform your healthcare provider about these medications, as they can influence the choice of BPH treatment. 
                        </li>
                        <li className="mb-2"><span>Ask Questions</span>Don't hesitate to ask your healthcare provider about your condition, available treatment options, potential side effects, and long-term outcomes. Aapkacare Health is here to answer all your questions regarding the treatment. Book an appointment for more information.
                        </li>
                    </ul>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default ProstateEnlargement;

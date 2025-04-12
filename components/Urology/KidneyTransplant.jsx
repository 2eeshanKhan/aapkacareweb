import React from 'react';

import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import FAQUrology from '@/module/FaqUrology'


import ReasonCard from '@/module/ReasonCard';



import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const KidneyTransplant = () => {
    const causes = [
        {
            title: 'Chronic Kidney Disease (CKD) ',
            description: 'The most common cause of ESRD is the progression of chronic kidney disease. CKD can result from various underlying conditions, including diabetes, high blood pressure (hypertension). glomerulonephritis, polycystic kidney disease, and other kidney-related disorders. ',
            icon: "/images/circumcision/u-1.png"
        },
        {
            title: 'Diabetes ',
            description: 'Diabetes is a leading cause of kidney disease, particularly in cases of type 1 and type 2 diabetes ',
            icon: "/images/circumcision/u-2.png"
        },
        {
            title: 'Hypertension (High Blood Pressure ',
            description: 'Uncontrolled high blood pressure over an extended period can cause damage to the blood vessels in the kidneys. ',
            icon: "/images/circumcision/u-3.png"
        },
        {
            title: 'Glomerulonephritis ',
            description: 'Glomerulonephritis is a group of diseases that cause inflammation and damage to the tiny kidney filtering units. of the glomeruli. ',
            icon: "/images/circumcision/u-4.png"
        },
        {
            title: 'Polycystic Kidney Disease (PKD) ',
            description: 'PKD is a genetic disorder in which cysts form within the kidneys ',
            icon: "/images/circumcision/u-5.png"
        },
        {
            title: 'Infections and Inflammation ',
            description: 'Severe and recurrent kidney infections or autoimmune conditions affecting the kidneys can lead to kidney damage and ESRD.',
            icon: "/images/circumcision/u-6.png"
        },
    ];
    const reasons = [
        {
          icon: "/images/circumcision/k-1.png",
          title: "Presistent Fatigue",
          description: "Filling excessively tired despite adequate rest."
        },
        {
          icon: "/images/circumcision/k-2.png",
          title: "Swelling",
          description: "Noticeable swelling in the ankles, feet, or around the eyes. "
        },
        {
          icon: "/images/circumcision/k-3.png",
          title: "High Blood Pressure ",
          description: "Uncontrolled high blood pressure that is difficult to manage."
        },
        {
          icon: "/images/circumcision/k-4.png",
          title: "Decreased Urine Output ",
          description: "A significant decrease in the amount of urine produced. "
        },
        {
          icon: "/images/circumcision/k-5.png",
          title: "Changes in Urine ",
          description: "Changes in the color, odor, or frequency of urination. "
        },
        {
          icon: "/images/circumcision/k-6.png",
          title: "Shortness of Breath ",
          description: "Difficulty breathing, especially during physical activity."
        }
    ];
    const tableData = [
        { label: "SURGERY NAME", value: "KIDNEY TRANSPLANT" },
        { label: "ALTERNATIVE NAME", value: "RENAL TRANSPLANTATION" },
        { label: "DISEASE TREATED", value: "END-RENAL DISEASE, URINARY TRACT OBSTRUCTION, LUPUS, REPEATED URINARY INFECTION, POLYCYSTIC KIDNEY DISEASE" },
        { label: "BENEFITS OF THE SURGERY", value: "INCREASES LIFE EXPECTANCY OR SURVIVAL RATE, IMPROVES THE QUALITY OF LIFE, COST-EFFECTIVE, ALLOW TO RESUME DAILY ACTIVITIES" },
        { label: "TREATED BY", value: "NEPHROLOGIST" }
      ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-30 mx-0">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">What is Kidney Transplant?</h1>
                        <p className="text-gray-600 mt-2">Welcome to Aapkacare's comprehensive guide on kidney replacement. In this article, we'll cover all aspects of kidney replacement, including treatment options, signs indicating the need for surgery, the surgical procedures involved, and the benefits of undergoing this life-changing treatment.</p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>

            <div className="flex justify-center  p-4">
                <div className="w-full max-w-3xl">
                    <table className="w-full border border-gray-300 bg-white shadow-md rounded-lg">
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="p-4 text-red-600 font-semibold border-r border-gray-300 w-1/3">
                                        {row.label}
                                    </td>
                                    <td className="p-4 text-gray-700">
                                        {row.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>  
            <div className='mx-auto p-6'>
            <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center md:mx-30 mx-0">
                    <div className="flex-1/3 ">
                        <h2 className="text-2xl font-bold mb-2">Overview</h2>
                        <p className="text-gray-700">A Kidney Transplant is a surgical method in which a healthy kidney is transplanted in patients suffering from an end-stage renal disease with irreversible kidney damage. This procedure is also known as Renal Transplantation. The kidney transplant is a major and complex procedure that takes about 3 to 5 hours to complete and is performed under general anaesthesia. The procedure has a high success rate.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/circumcision/u-k.png"alt="Cataract illustration"className="w-[400px] h-[300px]"/>
                    </div>
                </section>
            </div>

            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-6 text-center">
                    {reasons.slice(0, 5).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                    <div className="md:col-start-3 md:row-start-2">
                        <ReasonCard {...reasons[5]} />
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">Causes of Kidney problems that can lead to replacement </h1>
                <p className="text-center text-xl mb-6 ">Kidney replacement, often referred to as kidney transplantation, is a medical procedure performed to replace a non-functioning or failed kidney with a healthy kidney from a living or deceased donor. The primary cause of kidney replacement is end-stage renal disease (ESRD), in which the kidneys have lost most or all of their normal function. Several common causes of ESRD can lead to the need for kidney replacement:
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
                <img alt="Surgeons" className="rounded-lg w-[500px] h-[500px] md:pt-12 pt-5" src="/images/laparoscopy/Gallbladder1-3.png"/>
                <div className='md:pr-10 pr-0 md:my-10 my-0'>
                    <h1 className="text-2xl font-bold mb-4">What to expect before and on the day of Kidney Transplant surgery? </h1>
                    <h3 className='font-bold mb-4'>The donor needs to register himself/herself for donating his/her organs. The donor may choose to donate organs, such as eyes, kidneys, or liver, before or after his/her death. </h3>
                    <h2 className='text-xl font-bold mb-4'>Before the Kidney Transplant </h2>
                    <p className='mb-4'>Before the surgery, the patient is evaluated by a transplant centre team. Tests are done to ensure that the patient is healthy enough to undergo transplant surgery. The following tests are done before surgery: </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">A blood test is done to rule out the presence of any infection. 
                        </li>
                        <li className="mb-2">Blood typing and tissue typing ensure that the body will not reject the transplanted kidney.   
                        </li>
                        <li className="mb-2">Heart tests like echocardiogram, cardiac catheterisation, and EKG are also done
                        </li>
                        <li className="mb-2">Tests are also performed to determine the presence of any cancer. 
                        </li>
                        <li className="mb-2">Doctors may advise the patient to stop smoking and drinking until he/she waits for transplantation to prevent delayed healing and improve outcomes after transplant surgery.
                        </li>
                    </ul>
                    <p className='mb-4'>On the day of the Kidney Transplant </p>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">The patient should leave all valuable items at home.</li>
                        <li className="mb-2">The patient needs to reach the transplant centre before the scheduled time.</li>
                        <li className="mb-2">The patient will be asked to sign the consent form in the presence of his/her family</li>
                        <li className="mb-2">After reaching the transplant centre, the staff will ask the patient to change and wear a gown provided by the centre.</li>
                        <li className='mb-2'>Before the procedure, the staff will ask the name and treatment type the patient undergoes. It is done to avoid mismatch and confusion in the transplantation. </li>
                        <li className='mb-2'>The patient's blood pressure, breathing rate, and heart rate are also monitored before starting the procedure. </li>
                        <li>The patient will then be shifted to the operation theatre.</li>
                    </ul>
                </div>
            </div>
            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <FAQUrology/>
                </div>
                <div className='w-full md:w-1/3 mt-0 md:mt-15 md:ml-4'>
                    <img src="/images/circumcision/u-k-1.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>

            <div className='container max-w-full'>
                    <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div>
                        <h1 className="text-2xl font-bold mb-4">Benefits of Kidney Transplant </h1>
                        <p className="text-md mb-4">A kidney transplant is generally the best treatment for kidney failure in a patient who fits the transplantation procedure. A successful kidney transplant procedure provides several benefits such as: </p>
                        <ul className='list-disc pl-5 mb-4'>
                            <li>Increases life expectancy or survival rate </li>
                            <li>Improves the quality of life </li>
                            <li>Cost-effective when compared to multiple dialyses </li>
                            <li>Higher energy levels </li>
                            <li>Fewer restrictions on what an individual can eat and drink </li>
                            <li>Helps improve sex life and fertility </li>
                            <li>Allows to resume daily activities</li>
                        </ul>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/laparoscopy/Gallbladder1-1.png"/>
                    </div>

                    <div className="bg-white w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <img alt="Surgeons performing laparoscopic surgery" className="mb-4 md:mb-0 md:mr-6 rounded-lg w-[500px] md:p-6 p-2" height="300" src="/images/laparoscopy/Gallbladder1-2.png"/>
                        <div className='md:py-10 py-3'>
                            <h2 className="text-2xl font-bold mb-4">Risks and complication of Kidney Transplant </h2>
                            <p className="text-lg">A kidney transplant is a major and complex procedure that can cause problems for some patients. The main risks and complications of kidney transplant include: 
                            </p>
                            <ul className='list-disc pl-5 mb-4'>
                                <li>an allergic reaction to general anaesthesia </li>
                                <li>Improves the quality of life </li>
                                <li>bleeding </li>
                                <li>blood clots </li>
                                <li>leakage from the ureter </li>
                                <li>a blockage of the ureter </li>
                                <li>an infection </li>
                                <li>rejection of the donated kidney </li>
                                <li>failure of the donated kidney </li>
                                <li>a heart attack </li>
                                <li>a stroke</li>
                        </ul>
                        </div>
                    </div>

                    <div className="bg-[#E4F4FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <div className='flex flex-col flex-1/2'>
                        <h1 className="text-2xl font-bold mb-4">When is consultation with the doctor needed? </h1>
                        <p className="text-md mb-4">The patient can visit the doctor if he/she is facing any kind of discomfort, such as: 
                        </p>
                        <ul className='list-disc pl-5 mb-4'>
                            <li>Pain in the abdominal area </li>
                            <li>Inflammation or swelling </li>
                            <li>Infection in the incision area</li> 
                            <li>Bleeding </li>
                        </ul>
                        </div>
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2" height="200" src="/images/laparoscopy/Gallbladder1-4.png"/>
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
            <ReactUs/>
            < DetailedImages />       
        </>
    );
}

export default KidneyTransplant;

import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import DetailedImages from '@/module/DetailedImages';


const Bariatric = () => {
    return (
        <div>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">What is Bariatric Surgery?</h1>
                        <p className="text-gray-600 mt-2">Bariatric surgery is a surgical option to lose weight for people who are extremely overweight and whose weight poses a health hazard. 
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>
            </div>
            <section className="bg-[#E2F2FD] py-12 px-6">
                <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
                    <img
                        src="/images/Bariatric/b-1.png"
                        alt="Doctor with stethoscope"
                        className="w-full md:w-1/2 rounded-lg shadow-lg"
                    />
                    <div className="md:w-1/2 text-gray-700">
                        <h1 className='font-bold text-3xl mb-4'>Who Can Opt For Bariatric Surgery? </h1>
                        <p className='mb-4'>Bariatric surgery is considered a treatment option in the following cases when the patient has been unable to achieve a healthy body weight over a long period of time, even under medical supervision: 
                        </p>
                        <ul className='list-disc'>
                            <li className=' ml-4'>Patients between the ages of 18-65 years </li>
                            <li className='mb-2 ml-4'>If the patient has a body mass index (BMI) of over 37.5 kg.m 2 </li>
                            <li className='mb-2 ml-4'>If the patient has a BMI of more than 32.5 kg/m 2 & has serious weight-related problems such as diabetes, high blood pressure, arthritis or heart disease </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-6">
                <div className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-gray-900">
                        <h2 className="text-3xl font-bold mb-6">What Are The Different Types Of Bariatric Surgery? </h2>
                        <ul className='list-disc'>
                            <li className=' ml-4'>Laparoscopic Gastric Band surgery </li>
                            <li className='mb-2 ml-4'>Gastric Bypass </li>
                            <li className='mb-2 ml-4'>Laparoscopic Vertical Sleeve Gastrectomy </li>
                            <li className='mb-2 ml-4'>Biliopancreatic Diversion with Duodenal Switch</li>
                        </ul>
                    </div>
                    <img
                        src="/images/Bariatric/b-2.png"
                        alt="Hospital scene"
                        className="w-full md:w-1/2 rounded-lg shadow-lg"
                    />
                </div>
            </section>

            <div className="max-w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Why Bariatric Surgery?</h2>
                <div className="mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">The preferred weight loss option…</h3>
                    <p className="text-gray-700 mt-2">It is a known fact that with bariatric surgeries one can lose 80-100% of excess weight within 1 year and maintain it too for a long time, while with diet and exercises only 5-10% weight loss is possible and that too is regained within 1-3 years. Thus, in suitable person(s), bariatric surgery is the only and preferred option and not the last option.
                    </p>
                </div>
      
                <div className="bg-[#E2F2FD] mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Keyhole surgery</h3>
                    <p className="text-gray-700 mt-2">Though bariatric surgery is perceived to be interventional, due to keyhole approach most patients are discharged from the hospital within 48 hours and can resume work within a week of surgery. Bariatric surgery thus has limited downtime for the patient, leading to significant and sustained weight loss. Unlike cosmetic procedures, the weight loss after surgery is gradual, from all over the body and proportionate.
                    </p>
                </div>
      
                <div className="mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Unlike fad diet(s)</h3>
                    <p className="text-gray-700 mt-2">In fad diets a person either needs to starve for long hours or eat a particular food group, while after bariatric surgeries patients are asked to eat 3-4 balanced meals everyday leading to healthy weight loss. Most patients are closely supervised by a team of counsellor, dietitian and physician and thus all health parameters improve in patients after surgery.
                    </p>
                </div>
      
                <div className="bg-[#E2F2FD] py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Co-morbidity resolution</h3>
                    <p className="text-gray-700 mt-2">Besides weight loss, bariatric surgery has a direct impact on many associated diseases like diabetes, PCOD, sleep apnoea, cancers etc. These conditions improve directly after the surgery due to associated hormone changes even before significant weight loss is achieved.
                    </p>
                </div>
                <div className="mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Diabetes </h3>
                    <p className="text-gray-700 mt-2">Obesity contributes to diabetes, while bariatric surgery has a direct benefit on blood sugar control through hormonal changes and making the body's insulin effective. Insulin injection can be stopped in almost all patients and even tablets can be stopped in most as blood sugar comes under control within 1 month. This is a major benefit as uncontrolled diabetes results in multiple complications like heart attack, stroke, kidney failures, nerve damage, eye problems etc. Bariatric surgery thus not only helps achieve better blood sugar control but also reduces the possibility of diabetes complications. 
                    </p>
                </div>
      
                <div className="bg-[#E2F2FD] mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">PCOD, Infertility & Pregnancy </h3>
                    <p className="text-gray-700 mt-2">In many women with obesity, due to associated hormonal changes and insulin resistance, the menstrual periods are deranged with resultant infertility in few. The impact of bariatric surgery on PCOD is similar to diabetes as improvement of insulin resistance results in normalization of hormones, regular periods and improved fertility. Most women can plan a pregnancy one year after bariatric surgery due to enhanced possibility to conceive, have safer pregnancy as blood sugar and blood pressure are likely to remain normal and are likely to deliver a healthier child through normal delivery unlike recommended caesarean section in morbidly obese before surgery. One year after surgery nutrition intake is considered adequate for both the mother and the baby. 
                    </p>
                </div>
      
                <div className="mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Fatty Liver </h3>
                    <p className="text-gray-700 mt-2">Almost all bariatric patients have different grades of fatty liver on ultrasound examination, which is considered a progressive disease. Bariatric surgery results in the resolution of this disease and the possibility of progression to cirrhosis and liver failure can be halted through early intervention. There are many indirect benefits of surgery due to the mechanical advantage of gradual weight loss which include reduction in blood pressure control, joint pains, backache, mobility and breathlessness. 
                    </p>
                </div>
      
                <div className="bg-[#E2F2FD] py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Quality of life changes </h3>
                    <p className="text-gray-700 mt-2">Weight loss associated with bariatric surgery is likely to result in better education access, employability, marital prospects, and job promotions. Most bariatric persons are more confident and positive in the long term.
                    </p>
                </div>

                <div className="mb-6 py-4 md:px-30 px-5">
                    <h3 className="text-xl font-semibold">Increased Lifespan </h3>
                    <p className="text-gray-700 mt-2">Morbid obesity results in shorter lifespan and possibility of sudden death too. A study has shown that post bariatric surgery life span increases by 5-6 years which is even more that 3-4 years after heart bypass surgery. Bariatric surgery is an effective tool producing substantial and sustained weight loss with resolution of co-morbidities and reduction of associated complications. Bariatric surgery works through change in persons' biology and is not dependent on their will power. Thus, It is more physiological and natural than many unscientific fad diets and obesity treatments.
                    </p>
                </div>
            </div>
            <DetailedImages/>
        </div>
    );
}

export default Bariatric;
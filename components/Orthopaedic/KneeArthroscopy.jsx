
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const KneeArthroscopy = () => {
    const reasons = [
        {
          icon: "/images/circumcision/k-1.png",
          title: "Injury ",
          description: "Traumatic injuries, such as sports-related injuries, car accidents, or falls, can damage the knee joint, including torn ligaments (such as the anterior cruciate ligament or ACL), meniscus tears, or fractures. "
        },
        {
          icon: "/images/circumcision/k-2.png",
          title: "Osteoarthritis ",
          description: "This degenerative joint condition causes the cartilage in the knee joint to wear down over time. When conservative treatments like physical therapy and medication are no longer effective, knee surgery may be recommended to alleviate pain and improve joint function. "
        },
        {
          icon: "/images/circumcision/k-3.png",
          title: "Rheumatoid Arthritis ",
          description: "Inflammatory conditions like rheumatoid arthritis can lead to chronic inflammation in the knee joint, causing pain, swelling, and eventual joint damage. Surgery may be considered in severe cases."
        },
        {
          icon: "/images/circumcision/k-4.png",
          title: "Tendon or Ligament Tears ",
          description: "Tears in tendons (like the patellar tendon) or ligaments (such as the ACL or PCL) may require surgical intervention, especially when the damage is significant or affects joint stability. "
        },
        {
          icon: "/images/circumcision/k-4.png",
          title: "Meniscus Tears ",
          description: "The meniscus is a wedge-shaped cartilage in the knee that can tear due to injury or degeneration. Depending on the location and severity of the tear, surgery may be needed to repair or remove the damaged tissue."
        },
        {
          icon: "/images/circumcision/k-6.png",
          title: "Cartilage Defects ",
          description: "Conditions like osteochondritis dissecans or chondromalacia patellae can cause damage to the knee's cartilage. Surgery, such as microfracture or cartilage restoration procedures, may be recommended to repair or regenerate the damaged tissue. "
        },
        {
            icon: "/images/circumcision/k-3.png",
            title: "Synovitis or Plica Syndrome ",
            description: "Inflammation of the synovial lining or irritation of the synovial plica can lead to pain and limited range of motion in the knee. Surgical intervention may be necessary to address these issues. "
        },
        {
            icon: "/images/circumcision/k-6.png",
            title: "Bursitis ",
            description: "Bursitis in the knee can cause pain and swelling due to inflammation of the bursa sac, In some cases, surgical removal of the inflamed bursa may be required."
        },
        {
            icon: "/images/circumcision/k-2.png",
            title: "Deformities ",
            description: "Congenital or acquired deformities due to injuries may necessitate corrective surgery to realign the knee joint and improve function. "
        },
        {
            icon: "/images/circumcision/k-1.png",
            title: "Cysts and Tumors ",
            description: "In rare cases, the presence of cysts or tumors in or around the knee joint may require surgical removal. "
        }

    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto py-6 md:px-30 px-5">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Knee Arthroscopy Surgery</h1>
                        <p className="text-gray-600 mt-2">Want to go through Knee Arthroscopy and have a healthy life at an affordable price with the best doctors in Pune? Get all kinds of bariatric-related consultations for your surgery. Here at Aapkacare Health, we will provide the best surgeons. 
                        </p>
                        <p className="text-gray-600 mt-2">Welcome to Aapkacare's comprehensive guide on knee arthroscopy, the minimally invasive surgical procedure that can help you overcome knee pain and discomfort. In this informative resource, we'll deive into the treatment, signs that may indicate you need surgery, what to expect after the procedure, when to consider treatment, the types of knee arthroscopy surgery available, how the surgery is performed, and the numerous benefits it can offer. Let's begin your journey to a healthier, pain-free knee. 
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is knee arthroscopy? </h2>
                        <p className="text-gray-700 mb-2">Knee arthroscopy is a minimally invasive procedure performed to diagnose and treat knee joint injury and other similar issues. During arthroscopy surgery, the surgeon makes 2-3 tiny incisions over the knee joint to insert an arthroscope and surgical instruments. </p>
                        <p className="text-gray-700">The arthroscope has a camera and light attached to it and helps the surgeon visualize internal structures to avoid soft tissue damage. Since the surgery involves minimal incisions, it usually promises a shorter and easier recovery period compared to open surgery. </p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/orthopaedic/o-k-3.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="bg-[#E2F2FD] mx-auto py-6 md:px-30 px-5">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/laparoscopy/Gallbladder1-4.png" alt="Cataract illustration" className="w-[525px] h-[325px]"/>
                    </div>
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">Signs You May Need Knee Arthroscopy </h2>
                        <p className="text-gray-700 mb-2">Common signs that may indicate you require knee arthroscopy include persistent knee pain, swelling, limited range of motion, or instability in the joint. If you are experiencing any of these symptoms, it's essential to consult with a healthcare professional for a proper evaluation.</p>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-white md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Understanding the causes of Lipoma</h2>
                <p className="text-center text-xl mb-6">Lipomas are likely inherited, so if someone in your family has a lipoma, you are more likely to get one yourself. Multiple lipomas can occur on the body as a result of certain conditions. These conditions include: </p>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 text-center">
                    {reasons.slice(0, 8).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                    <div className="md:col-start-2 md:row-start-3">
                        <ReasonCard {...reasons[8]} />
                    </div>
                    <div className="md:col-start-3 md:row-start-3">
                        <ReasonCard {...reasons[9]} />
                    </div>
                </div>
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">When to Consider Knee Arthroscopy: </h2>
                        <p className="text-gray-700 mb-2">Determining when to undergo knee arthroscopy is a crucial decision. Your healthcare provider will assess your condition and discuss whether this minimally invasive procedure is proper for you. The severity of your knee problems and overall health often influences the timing of the surgery.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/images/laparoscopy/Gallbladder1-2.png" alt="Cataract illustration" className="w-[525px] h-[325px]"/>
                    </div>
                </section>
            </div>

            <div className="bg-[#E2F2FD] mx-auto py-6 md:px-30 px-5">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">Aapka Care - Best orthopaedic center for orthopaedic surgery </h2>
                        <p className="text-gray-700 mb-2">Aapka Care is one of the best surgery care providers in India for orthopaedic surgeries, including knee arthroscopy. We specialize in advanced arthroscopic surgery with help from our panel of expert and experienced orthopaedic surgeons. If you have joint pain or stiffness and have trouble performing your day-to-day activities, you should get in touch with us for US FDA-approved advanced arthroscopic surgery. </p>
                        <p className="text-gray-700">In addition to advanced treatment, we also provide other auxiliary services to the patient- such as documentation support, insurance assistance, free cab services for pickup and dropoff, complimentary meals, etc.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/orthopaedic/o-k-4.png" alt="Cataract illustration" className="w-[525px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className='container max-w-full'>
                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
                        <img alt="Surgeons performing a cholecystectomy" className="rounded-lg w-[500px] md:p-6 p-2 h-[400px]" src="/images/laparoscopy/Gallbladder1-1.png"/>
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

                    <div className="bg-[#E2F2FD] w-full flex flex-col md:flex-row items-center md:px-30 px-5 gap-3">
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
            <DetailedImages/>
        </>
    );
}

export default KneeArthroscopy;
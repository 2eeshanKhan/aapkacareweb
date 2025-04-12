import FAQGynecomastia from '@/module/FAQGynecomastia'
import React from 'react';
import MainTop from '@/module/MainTop';
import BestSurgery from '@/module/BestSurgery';
import Check from '@/module/Check';
import Treatment from '@/module/Treatment';
import ReasonCard from '@/module/ReasonCard';
import ReactUs from '@/module/ReactUs';
import DetailedImages from '@/module/DetailedImages';

const Gynecomastia = () => {
    const causes = [
        {
            title: 'Physical discomfort ',
            description: 'Enlarged breast tissue can be physically uncomfortable or painful, particularly if it becomes tender or sensitive. This discomfort may persist or worsen if Gynecomastia is not addressed. ',
        },
        {
            title: 'Worsening of the condition  ',
            description: 'In some cases, Gynecomastia may progress and become more pronounced over time. The state may become more severe if the underlying cause is not addressed. ',
        },
        {
            title: 'Complications from the underlying cause ',
            description: 'Gynecomastia can sometimes be a sign of an underlying medical condition, such as hormonal imbalances or certain medications. If these underlying causes are not addressed, they may lead to further health issues',
        }
    ];
    const reasons = [
        {
          icon: "/images/cosmetic/c-g-1.png",
          title: "Swollen or Enlarged Breasts ",
          description: "Gynecomastia typically involves the development of glandular breast tissue beneath the nipple area. "
        },
        {
          icon: "/images/cosmetic/c-g-2.png",
          title: "Tenderness or Pain",
          description: "Some Individuals with Gynecomastia may experience tenderness or discomfort in the affected breast tissue. "
        },
        {
          icon: "/images/cosmetic/c-g-3.png",
          title: "Uneven Breast Growth ",
          description: "Gynecomastia can affect one or both breasts and sometimes, there may be uneven growth, with one breast more affected than the other. "
        },
        {
          icon: "/images/cosmetic/c-g-4.png",
          title: "Nipple Changes ",
          description: "Gynecomastia can cause changes in the nipples. "
        },
        {
          icon: "/images/cosmetic/c-g-5.png",
          title: "Psychological Impact ",
          description: "Gynecomastia can have a psychological impact, causing distress, self-esteem issues, and body image concerns, especially in adolescents and young adults."
        }
    ];
    return (
        <>
            <MainTop/>
            <div className="mx-auto p-6">
                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className=" flex-1 w-full md:w-1/2 ">
                        <h1 className="text-3xl font-bold">Affordable Gynecomastia Surgary</h1>
                        <p className="text-gray-600 mt-2">Sometimes certain diseases and medications can cause the breast tissue to swell and grow larger resulting in gynecomastia. Consider a breast reduction surgery if this condition causes you to feel self-conscious. The entire goal of cosmetic surgery is to improve a patient's aesthetic appearance. Aapkacare Health's top cosmetic surgeons can help you go through the procedure conveniently. 
                        </p>
                        <Check/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600 mt-4 md:mt-0">
                        <BestSurgery/>
                    </div>
                </section>

                <section className=" p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-2">What is Gynecomastia? </h2>
                        <p className="text-gray-700">Gynecomastia is a medical condition characterized by the enlargement of breast tissue in males. It can occur in one or both breasts and often results in a more feminine appearance of the chest. Gynecomastia is relatively common and can affect males of all ages, from infants to adults.</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img src="/images/cosmetic/c-g-main.png" alt="Cataract illustration" className="w-[425px] h-[325px]"/>
                    </div>
                </section>
            </div>
            <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] md:px-30 px-0 rounded-lg">
                <h2 className="text-center text-3xl font-bold mb-6">Identify the Signs of Gynecomastia </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 text-center">
                    {reasons.slice(0, 4).map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                    <div className="md:col-start-2 md:row-start-2">
                        <ReasonCard {...reasons[4]} />
                    </div>
                </div>
            </div>
    
            <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start'>
                <div className='flex flex-1/2 rounded-lg p-4'>
                    <FAQGynecomastia/>
                </div>
                <div className='w-full flex-1/3 md:w-1/2 mt-0 md:mt-15 md:ml-4'>
                    <img src="/images/cosmetic/c-g-main2.png" alt="photo" className='h-[325px] w-[500px] rounded'/>
                </div>
            </div>
            <Treatment/>
            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto py-4 md:px-20 px-5">
                    <div className="flex">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">How is Gynecomastia treted?</h1>
                            <p className='mb-4'>Here are some common approaches to treating Gynecomastia:</p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Medication:</strong>
                                    In some cases, especially if hormonal imbalances cause Gynecomastia, medication may be prescribed. The most commonly used medication for Gynecomastia is tamoxifen, which can help reduce breast tissue growth. 
                                </li>
                                <li className="mb-2">
                                    <strong>Surgery:</strong>
                                    Surgery is often the most effective treatment for moderate to severe Gynecomastia. There are two main surgical procedures.
                                </li>
                                <li className="mb-2">
                                    <strong>Liposuction:</strong>Liposuction is used to remove excess fat from the breast area. It is particularly effective for cases where Gynecomastia is primarily due to excess fat. 
                                </li>
                                <li className="mb-2">
                                    <strong>Surgical excision:</strong>Surgical excision is necessary for cases involving excess breast tissue and epithelial growth. This procedure involves making an incision and removing the excess tissue. Depending on the extent of the surgery, scarring may be minimal to more noticeable. 
                                </li>
                                <li className="mb-2">
                                    <strong>Combination therapy:</strong>In some cases, a combination of liposuction and surgical excision may be performed to achieve the best results.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full mx-auto py-6 md:px-30 px-5 bg-[#E4F4FD] rounded-lg">
                <h1 className="text-center text-3xl font-bold mb-6">What happens when Gynecomastia is left untreated? </h1>
                <p className="text-center text-xl mb-6 ">Gynecomastia, when left untreated, can result in various physical and psychological consequences. The impact of untreated Gynecomastia can vary depending on the underlying cause, the severity of the condition, and individual factors. Here are some potential implications of leaving Gynecomastia untreated 
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-6 text-center md:px-20 px-auto">
                    {causes.slice(0, 3).map((reason, index) => (
                    <div key={index} className="p-4">
                        <h3 className="text-xl font-bold">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className="bg-white text-gray-800 font-sans">
                <div className="container mx-auto py-4 md:px-20 px-5">
                    <div className="flex">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">Diagnosis </h1>
                            <p className='mb-4'>The diagnosis of Gynecomastia typically involves a combination of medical history, physical examination, and sometimes additional tests. Here's how Gynecomastia is diagnosed: </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Medical History:</strong>Aapkacare Healthcare will start by taking a detailed medical history. They will ask about your symptoms, how long you've had them, any medications you're taking, any underlying medical conditions, and your family history. It's essential to be honest and provide as much information as possible. 
                                </li>
                                <li className="mb-2">
                                    <strong>Physical Examination:</strong>The next step is a physical examination. During this examination, the healthcare provider will assess your breast tissue, looking for signs of Gynecomastia. They will examine the size, shape, and consistency of the breast tissue to differentiate it from other conditions. Gynecomastia is typically characterized by firm, rubbery, or nodular tissue beneath the nipple. 
                                </li>
                                <li className="mb-2">
                                    <strong>Differential Diagnosis:</strong>Gynecomastia must be distinguished from other conditions that can cause breast enlargement. This may include pseudogynecomastia (enlarged breasts due to excess fat, not glandular tissue) and other breast disorders, including breast cancer. 
                                </li>
                                <li className="mb-2">
                                    <strong>Blood Tests:</strong>In some cases, blood tests may be ordered to assess hormone levels. Gynecomastia is often associated with hormonal imbalances, and blood tests can help determine if there are elevated levels of estrogen (female hormone) or reduced levels of testosterone (male hormone). 
                                </li>
                                <li className="mb-2">
                                    <strong>Imaging Studies:</strong>In certain situations, imaging studies like mammography, ultrasound, or magnetic resonance imaging (MRI) may be recommended. 
                                </li>
                                <li className="mb-2">
                                    <strong>Biopsy:</strong>If there are concerns about breast cancer or the diagnosis remains unclear, a biopsy may be performed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ReactUs/>
            <DetailedImages/>
        </>
    );
}

export default Gynecomastia;

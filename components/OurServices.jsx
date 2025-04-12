import React from 'react';

const services = [
    {
        title: "Proctology",
        description: "Aapkacare is a Multispecialty healthcare provider that aims to provide a hassle-free surgical experience to all patients using cutting-edge technology, and a set of advanced operations and powerful processes.",
        image: "images/Services-1.png"
    },
    {
        title: "Pediatrician",
        description: "Pediatricians are doctors who specialize in the health of children from birth to 18 years old. They provide preventive care, diagnose and treat illnesses, and offer guidance on health and wellness. Pediatricians are trained to understand the unique physical, emotional, and developmental needs of children.",
        image: "images/Services-2.png"
    },
    {
        title: "ENT",
        description: "ENT stands for ear, nose, and throat, and it refers to the medical specialty that deals with the diagnosis and treatment of disorders of these three areas. Aapkacare provides you with the most advanced treatment of various diseases and disorders related to the Ear, Nose and Throat.",
        image: "images/Services-3.png" 
    },
    {
        title: "Urology",
        description: "Aapkacare has the most advanced doctors and the best hospitals that have proven record of treatments for laser circumcision, stapler circumcision, kidney stones, prostate treatment, urinary tract infection and other sexual health problems by highly experienced urologist. ",
        image: "images/Services-4.png"
    },
    {
        title: "Eye Care ",
        description: "Eye is the most sensitive organ of the body. Aapkacare ensures that you get the best eye surgeon near you for the treatment of eye disorders or lasik eye surgery. Be it cataract, retinal disorders, pterygium, squint eye, diabetic retinopathy we got you covered for everyting with our best ophthalmologist doctors.",
        image: "images/Services-5.png"
    },
    {
        title: "Cosmetic ",
        description: "We know the disappointment you face when you hear that cosmetic surgery is not covered under insurance. With our best hospital and expert doctors, you can undergo any surgery, such as Gynecomastia, Lipoma, Hair transplant, and Scar removal, with a hassle-free procedure.",
        image: "images/Services-6.png"
    },
];

const ServiceCard = ({ title, description, image }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 md:w-[380px] w-auto md:h-[500px] h-auto flex flex-col items-center text-center ">
        <img src={image} alt={title} className="rounded-lg mb-4 h-[200px] w-[325px] object-cover"/>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const OurServices = () => {
    return (
        <div className="bg-blue-50 py-12 md:px-10 px-4 ">
            <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurServices;
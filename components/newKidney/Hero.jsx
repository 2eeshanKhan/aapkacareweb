// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import { PhoneCall } from 'lucide-react';
// import { useState } from 'react';
// import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { db } from "@/module/firebaseConfig";

// import { FaWhatsapp, FaCheckCircle,FaChevronDown, FaChevronUp,FaTimes } from 'react-icons/fa';

// const Hero = () => {
//     const [openIndex, setOpenIndex] = useState(null);
//     const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
//     const [formData, setFormData] = useState({ name: '', mobile: '', insurance: '' });
//     const [formErrors, setFormErrors] = useState({ name: '', mobile: '', insurance: '' });


//   const faqs = [
//     {
//       question: "How soon can I resume normal activities after laser kidney stone surgery?",
//       answer: "Most patients return to daily activities within 2–5 days after surgery."
//     },
//     {
//       question: "Can multiple kidney stones be treated together?",
//       answer: "Advanced laser procedures can remove multiple stones in a single session."
//     },
//     {
//       question: "Will my insurance cover the kidney stone surgery?",
//       answer: "Yes, most insurance plans cover the full or partial cost. We help with complete insurance approval."
//     },
//     {
//       question: "How much does kidney stone surgery cost in Mumbai?",
//       answer: "With insurance and offers, your out-of-pocket cost can be minimal! Get a free quote now."
//     },
//     {
//       question: "How do you pass a kidney stone quickly at home?",
//       answer: "Small stones may pass naturally with hydration. For larger stones, medical treatment is required."
//     },
//   ];
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!formData.name.trim()) {
//       errors.name = 'Patient name is required';
//     }

//     if (!formData.mobile.trim()) {
//       errors.mobile = 'Mobile number is required';
//     } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
//       errors.mobile = 'Enter a valid 10-digit number';
//     }

//     if (!formData.insurance) {
//       errors.insurance = 'Please select insurance status';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
//   const handleSubmit = async(data) => {
//     if (validateForm()) {
//         const currentYear = new Date().getFullYear();
//                 const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
//                 const yearMonth = `${currentYear}${currentMonth}`;
              
//                 // Create document ID as the current year
//                 const docRef = doc(db, 'AllKidney', currentYear.toString());
              
//                 // Set the subcollection (e.g., 202504 for April 2025)
//                 const subcollectionRef = collection(docRef, yearMonth);
              
//                 // Create a server timestamp and convert it to a string
//                 const timestamp = new Date().toISOString(); // Converts timestamp to string in ISO format
              
//                 // Save the data
//                 try {
//                   await setDoc(doc(subcollectionRef, timestamp), {
//                     name: data.name,
//                     phone: data.mobile,
//                     insurance: data.insurance,
//                     createdAt: serverTimestamp(), // Store Firebase server timestamp
//                   });
//                   console.log('Document successfully written!');
//                 } catch (e) {
//                   console.error('Error adding document: ', e);
//                 }
              
//                 console.log('Form 1:', data);
//                 alert(`Thank you, ${data.name}! We will contact you shortly.`);
        
    
//       setFormData({ name: '', mobile: '', insurance: '' });
//     setFormErrors({ name: '', mobile: '', insurance: '' });
//       // Submit logic here
//     }
//   };

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // Toggle the answer visibility
//   };
//   const openDialog = () => {
//     setIsDialogOpen(true); // Open the dialog
//   };

//   const closeDialog = () => {
//     setIsDialogOpen(false); // Close the dialog
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
     

// <div className="w-full bg-gray-50 px-4 sm:px-8 md:px-20 py-4 flex flex-wrap justify-between items-center z-50">
//   <Image
//     src="/images/bluelogo.png"
//     alt="Aapka Care Icon"
//     width={190}
//     height={60}
//     className="mb-2 sm:mb-0"
//   />

//   {/* Desktop Buttons */}
//   <div className="hidden sm:flex gap-4 items-center">
//     <a
//       href="tel:9821527088"
//       className="bg-red-600 text-white hover:bg-orange-600 font-medium py-3 px-5 rounded-4xl flex items-center text-base"
//     >
//       <PhoneCall className="w-4 h-4 mr-2" />
//       Call 9821527088
//     </a>
//     <a
//       href="https://wa.me/919821527088"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-green-600 text-white hover:bg-green-500 font-medium py-3 px-5 rounded-4xl flex items-center text-base"
//     >
//       <FaWhatsapp className="w-4 h-4 mr-2" />
//       Chat with Kidney Expert
//     </a>
//   </div>

//   {/* Mobile Icon Buttons */}
//   <div className="flex sm:hidden gap-3">
//     <a href="tel:9821527088" className="bg-red-600 p-2 rounded-full text-white">
//       <PhoneCall className="w-5 h-5" />
//     </a>
//     <a
//       href="https://wa.me/919821527088"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-green-600 p-2 rounded-full text-white"
//     >
//       <FaWhatsapp className="w-5 h-5" />
//     </a>
//   </div>
// </div>


      
//       <section
//   className="relative mt-0 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between bg-sky-100 md:bg-[url('/images/kidneybanner.png')] bg-cover bg-center bg-no-repeat"
//   style={{
//     minHeight: '50vh',
//   }}
// >

//         {/* Left Banner Text */}
        
//         <div className="text-black max-w-2xl p-4 md:p-10">
//   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
//     Best Affordable Kidney Stone Treatment in Mumbai
//   </h1>
//   {[
//     'Advanced Laser Surgery',
//     'Quick Recovery | 100% Insurance Support',
//     'Painless Laser Treatment',
//     'Zero Upfront Payment - Pay Later',
//     'Free Pick Up & Drop Facility',
//     '100+ Top JCI & NABH Accredited Hospitals',
//     '500+ Highly Experienced Doctors',
//     '8000+ Satisfied Patients Trust Us',
//   ].map((text, idx) => (
//     <p key={idx} className="text-black text-sm sm:text-base mb-2 flex items-start">
//       <FaCheckCircle className="text-green-300 mt-1 mr-2 text-base sm:text-lg md:text-xl" />
//       {text}
//     </p>
//   ))}
// </div>


//         {/* Fixed Right Consultation Form */}
        

// {/* <div className="hidden md:block fixed top-[100px] right-10 z-50 w-[350px]">
//   <div className="bg-white shadow-xl rounded-xl p-6">
//     <h3 className="text-2xl font-bold text-black mb-4 text-center">
//       Book Free Consultation
//     </h3>

//     <input
//       type="text"
//       placeholder="Patient Name"
//       className="border w-full mb-3 px-4 py-2 rounded focus:outline-none"
//     />
//     <input
//       type="text"
//       placeholder="+91 Mobile Number"
//       className="border w-full mb-3 px-4 py-2 rounded focus:outline-none"
//     />

//     <div className="mb-4">
//       <p className="font-medium text-gray-800 mb-2">Do you have insurance?</p>
//       <div className="flex gap-4">
//         <label className="flex items-center gap-1 text-gray-700">
//           <input type="radio" name="insurance" value="yes" className="accent-red-500" />
//           Yes
//         </label>
//         <label className="flex items-center gap-1 text-gray-700">
//           <input type="radio" name="insurance" value="no" className="accent-red-500" />
//           No
//         </label>
//       </div>
//     </div>

//     <button className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold">
//       BOOK NOW
//     </button>
//   </div>
// </div> */}

// <div className="hidden md:block fixed top-[100px] right-10 z-50 w-[350px]">
//           <div className="bg-white shadow-xl rounded-xl p-6">
//             <h3 className="text-2xl font-bold text-black mb-4 text-center">Book Free Consultation</h3>
//             <input
//               name="name"
//               type="text"
//               placeholder="Patient Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
//             />
//             {formErrors.name && <p className="text-red-500 text-sm mb-2">{formErrors.name}</p>}
//             <input
//               name="mobile"
//               type="text"
//               placeholder="+91 Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
//             />
//             {formErrors.mobile && <p className="text-red-500 text-sm mb-2">{formErrors.mobile}</p>}

//             <div className="mb-4">
//               <p className="font-medium text-gray-800 mb-2">Do you have insurance?</p>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-1 text-gray-700">
//                   <input type="radio" name="insurance" value="yes" checked={formData.insurance === 'yes'} onChange={handleChange} className="accent-red-500" />
//                   Yes
//                 </label>
//                 <label className="flex items-center gap-1 text-gray-700">
//                   <input type="radio" name="insurance" value="no" checked={formData.insurance === 'no'} onChange={handleChange} className="accent-red-500" />
//                   No
//                 </label>
//               </div>
//               {formErrors.insurance && <p className="text-red-500 text-sm mt-1">{formErrors.insurance}</p>}
//             </div>

//             <button  onClick={() => handleSubmit(formData)} className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold">BOOK NOW</button>
//           </div>
//         </div>

//       </section>

//       {/* Remaining content */}
//       <div className="flex px-4 md:px-10 mt-10 gap-4">
//   {/* Left Content - 60% width */}
//   <div className="w-full md:w-[60%] space-y-8">
//     {/* Stats Section */}
//     <div className="grid grid-cols-1 sm:grid-cols-3 bg-white shadow-md rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-green-600">
//   <div className="text-center py-4">
//     <h2 className="text-3xl font-bold text-green-600">100+</h2>
//     <p className="text-sm">JCI & NABH Hospitals</p>
//   </div>
//   <div className="text-center py-4">
//     <h2 className="text-3xl font-bold text-green-600">1,500+</h2>
//     <p className="text-sm">Expert Doctors</p>
//   </div>
//   <div className="text-center py-4">
//     <h2 className="text-3xl font-bold text-green-600">8,000+</h2>
//     <p className="text-sm">Happy Patients</p>
//   </div>
// </div>


//     {/* Surgery Cost Card */}
//     <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-orange-50 rounded-2xl p-4 md:p-8 shadow-md space-y-4 md:space-y-0">
//   <div className="text-center md:text-left flex-1">
//     <h3 className="text-xl md:text-2xl font-bold text-gray-800">
//       Check <span className="text-orange-600">Surgery Cost</span>
//     </h3>
//     <p className="mt-2 text-gray-700 text-sm md:text-base max-w-md mx-auto md:mx-0">
//       Find the total cost of surgery at top-rated hospitals in your city with transparent and affordable pricing.
//     </p>
//     <button 
//     onClick={openDialog}
//     className="mt-4 bg-orange-600 hover:bg-orange-700 transition-colors text-white px-5 py-2.5 rounded-full font-medium text-sm md:text-base shadow">
//       Calculate Surgery Cost
//     </button>
//   </div>

//   <div className="w-40 sm:w-48 md:w-60">
//     <img
//       src="/images/kidneysurgery.png"
//       alt="Surgery Illustration"
//       className="w-full h-auto"
//     />
//   </div>
// </div>







// {isDialogOpen && (
//   <div className="fixed inset-0 flex justify-center items-center z-50">
//     <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30" onClick={closeDialog}></div>
//     <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md z-50">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-xl font-semibold text-gray-800">Check Surgery Cost</h3>
//         <button onClick={closeDialog} className="text-red-500 hover:text-red-700">
//           <FaTimes className="w-5 h-5" />
//         </button>
//       </div>
//       <input
//         name="name"
//         type="text"
//         placeholder="Patient Name"
//         value={formData.name}
//         onChange={handleChange}
//         className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
//       />
//       {formErrors.name && <p className="text-red-500 text-sm mb-2">{formErrors.name}</p>}

//       <input
//         name="mobile"
//         type="text"
//         placeholder="+91 Mobile Number"
//         value={formData.mobile}
//         onChange={handleChange}
//         className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
//       />
//       {formErrors.mobile && <p className="text-red-500 text-sm mb-2">{formErrors.mobile}</p>}

//       <div className="mb-4">
//               <p className="font-medium text-gray-800 mb-2">Do you have insurance?</p>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-1 text-gray-700">
//                   <input type="radio" name="insurance" value="yes" checked={formData.insurance === 'yes'} onChange={handleChange} className="accent-red-500" />
//                   Yes
//                 </label>
//                 <label className="flex items-center gap-1 text-gray-700">
//                   <input type="radio" name="insurance" value="no" checked={formData.insurance === 'no'} onChange={handleChange} className="accent-red-500" />
//                   No
//                 </label>
//               </div>
//               {formErrors.insurance && <p className="text-red-500 text-sm mt-1">{formErrors.insurance}</p>}
//             </div>

//       <button  onClick={() => handleSubmit(formData)} className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full font-semibold">SUBMIT</button>
//     </div>
//   </div>
// )}






//     {/* Risk Info */}
  
//     <section className="max-w-5xl mx-auto px-4 py-8">
//   <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//     Meet Our Top Urology Experts
//   </h2>
//   <div className="space-y-6">
//     {[
//       {
//         name: "Dr. Ankit Vyas",
//         title: "MBBS, MS - General Surgery, MCh - Urology",
//         experience: "10+ Years Experience",
//         rating: "100%",
//         img: "/images/ankit.png"
//       },
//       {
//         name: "Dr. Shashank Sharma",
//         title: "MBBS, MS General Surgery, MCh Urology",
//         experience: "9+ Years Experience",
//         rating: "99%",
//         img: "/images/shashank.png"
//       }
//     ].map((doc, idx) => (
//       <div
//         key={idx}
//         className="bg-white shadow-md border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center"
//       >
//         <div className="flex gap-4 items-center sm:items-start">
//           <img
//             src={doc.img}
//             alt={doc.name}
//             className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-gray-200"
//           />
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
//             <p className="text-sm text-gray-600">{doc.title}</p>
//             <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-2">
//               <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
//                 📅 {doc.experience}
//               </span>
//               <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full">
//                 👍 {doc.rating} Positive Reviews
//               </span>
//             </div>
//           </div>
//         </div>
       
//         <div className="sm:ml-auto sm:self-center">
//               <button
//                 onClick={openDialog} // Trigger the open dialog function
//                 className="block text-center border border-red-500 text-red-600 hover:bg-red-50 font-medium px-8 py-4 rounded-full text-sm transition"
//               >
//                 Book Free Consultation
//               </button>
//             </div>
//       </div>
//     ))}
//   </div>
// </section>

// <section className="bg-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//   <h2 className="text-xl font-semibold mb-4 text-red-700">Risks of Delay in Kidney Stones Treatment</h2>
//   <ul className="list-disc ml-6 text-red-600 space-y-2">
//     <li>Severe Urinary Retention</li>
//     <li>Irreversible Kidney Damage</li>
//     <li>Frequent Urinary Infections</li>
//     <li>Obstruction in the Urinary Tract</li>
//     <li>Complete Loss of Kidney Function</li>
//   </ul>
// </section>

// <section className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-6">
//   <h2 className="text-xl font-semibold mb-4 text-green-800">Why Choose Aapka Care?</h2>
//   <ul className="list-disc ml-6 text-green-700 space-y-2">
//     <li>Highly Skilled Surgeons</li>
//     <li>Partnered with Top NABH & JCI Hospitals</li>
//     <li>100% Insurance Assistance</li>
//     <li>Free Personal Care Manager</li>
//     <li>Easy No-Cost EMI Options</li>
//   </ul>
// </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">Kidney Stones Treatment Options</h2>
//         <div className="w-full max-w-5xl mx-auto">
//   <img
//     src="/images/kidneyguide.png"
//     alt="Kidney Stones Treatment Options"
//     className="w-full h-auto rounded-lg shadow"
//   />
// </div>
        
//       </section>
//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           Benefits of <span className="text-indigo-600">Aapka Care’s</span> Treatment for{' '}
//           <span className="text-blue-600">Kidney Stones</span>
//         </h2>
//         <div className="w-full flex justify-center">
//     <img
//       src="/images/kidneycomparison.png"
//       alt="Kidney Stone Treatment Comparison"
//       className="w-full max-w-3xl rounded shadow"
//     />
//   </div>
        
//       </section>
      
//       <section>
//       <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
//       <ul className="space-y-2">
//         {faqs.map((faq, idx) => (
//           <li
//             key={idx}
//             className="bg-white p-3 rounded-lg shadow border border-gray-100"
//           >
//             <button 
//               className="w-full text-left font-medium text-gray-800 flex items-center justify-between"
//               onClick={() => handleToggle(idx)} // Toggle the question's answer on click
//             >
//               <span>{faq.question}</span>
//               <span className="text-gray-500">
//                 {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />} 
//               </span>
//             </button>
//             {openIndex === idx && (
//               <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </section>
//       <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md md:hidden p-4">
//       <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md md:hidden p-4">
//       <div className="flex gap-4">
//         <a
//           href="tel:9821527088"
//           className="flex-1 bg-red-600 text-white hover:bg-orange-600 font-medium py-3 px-3 sm:px-5 rounded-2xl flex items-center justify-center text-sm sm:text-base"
//         >
//           <PhoneCall className="w-4 h-4 mr-2" />
//           Call Expert
//         </a>
//         <a
//           href="https://wa.me/919821527088"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 bg-green-600 text-white hover:bg-green-500 font-medium py-3 px-3 sm:px-5 rounded-2xl flex items-center justify-center text-sm sm:text-base"
//         >
//           <FaWhatsapp className="w-4 h-4 mr-2" />
//           Whatsapp
//         </a>
//       </div>
//     </div>
// </div>
//   </div>

//   {/* Right side placeholder - 40% width */}
//   <div className="hidden md:block md:w-[40%]">{/* You can put your sticky form here */}</div>
// </div>

//     </div>
//   );
// };

// export default Hero;



'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { db } from "@/module/firebaseConfig";
import { FaWhatsapp, FaCheckCircle, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', insurance: '' });
  const [formErrors, setFormErrors] = useState({ name: '', mobile: '', insurance: '' });

  const faqs = [
    {
      question: "How soon can I resume normal activities after laser kidney stone surgery?",
      answer: "Most patients return to daily activities within 2–5 days after surgery."
    },
    {
      question: "Can multiple kidney stones be treated together?",
      answer: "Advanced laser procedures can remove multiple stones in a single session."
    },
    {
      question: "Will my insurance cover the kidney stone surgery?",
      answer: "Yes, most insurance plans cover the full or partial cost. We help with complete insurance approval."
    },
    {
      question: "How much does kidney stone surgery cost in Mumbai?",
      answer: "With insurance and offers, your out-of-pocket cost can be minimal! Get a free quote now."
    },
    {
      question: "How do you pass a kidney stone quickly at home?",
      answer: "Small stones may pass naturally with hydration. For larger stones, medical treatment is required."
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle both 'insurance' and 'dialog-insurance' as the same field
    const fieldName = name === 'dialog-insurance' ? 'insurance' : name;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: '' }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Patient name is required';
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      errors.mobile = 'Enter a valid 10-digit number';
    }
    if (!formData.insurance) {
      errors.insurance = 'Please select insurance status';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const currentYear = new Date().getFullYear();
      const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
      const yearMonth = `${currentYear}${currentMonth}`;
      const docRef = doc(db, 'AllKidney', currentYear.toString());
      const subcollectionRef = collection(docRef, yearMonth);
      const timestamp = new Date().toISOString();

      try {
        await setDoc(doc(subcollectionRef, timestamp), {
          name: formData.name,
          phone: formData.mobile,
          insurance: formData.insurance,
          createdAt: serverTimestamp(),
        });
        console.log('Document successfully written!');
        alert(`Thank you, ${formData.name}! We will contact you shortly.`);
        setFormData({ name: '', mobile: '', insurance: '' });
        setFormErrors({ name: '', mobile: '', insurance: '' });
        setIsDialogOpen(false);
      } catch (e) {
        console.error('Error adding document: ', e);
        alert('Failed to submit the form. Please try again.');
      }
    }
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    setFormData({ name: '', mobile: '', insurance: '' });
    setFormErrors({ name: '', mobile: '', insurance: '' });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setFormData({ name: '', mobile: '', insurance: '' });
    setFormErrors({ name: '', mobile: '', insurance: '' });
  };

  // Close dialog with Esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isDialogOpen) {
        closeDialog();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isDialogOpen]);

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="w-full bg-gray-50 px-4 sm:px-8 md:px-20 py-4 flex flex-wrap justify-between items-center z-50">
        <Image
          src="/images/bluelogo.png"
          alt="Aapka Care Icon"
          width={190}
          height={60}
          className="mb-2 sm:mb-0"
        />
        <div className="hidden sm:flex gap-4 items-center">
          <a
            href="tel:9821527088"
            className="bg-red-600 text-white hover:bg-orange-600 font-medium py-3 px-5 rounded-4xl flex items-center text-base"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            Call 9821527088
          </a>
          <a
            href="https://wa.me/919821527088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-500 font-medium py-3 px-5 rounded-4xl flex items-center text-base"
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            Chat with Kidney Expert
          </a>
        </div>
        <div className="flex sm:hidden gap-3">
          <a href="tel:9821527088" className="bg-red-600 p-2 rounded-full text-white">
            <PhoneCall className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/919821527088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 p-2 rounded-full text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>

      <section
        className="relative mt-0 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between bg-sky-100 md:bg-[url('/images/kidneybanner.png')] bg-cover bg-center bg-no-repeat"
        style={{ minHeight: '50vh' }}
      >
        <div className="text-black max-w-2xl p-4 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
            Best Affordable Kidney Stone Treatment in Mumbai
          </h1>
          {[
            'Advanced Laser Surgery',
            'Quick Recovery | 100% Insurance Support',
            'Painless Laser Treatment',
            'Zero Upfront Payment - Pay Later',
            'Free Pick Up & Drop Facility',
            '100+ Top JCI & NABH Accredited Hospitals',
            '500+ Highly Experienced Doctors',
            '8000+ Satisfied Patients Trust Us',
          ].map((text, idx) => (
            <p key={idx} className="text-black text-sm sm:text-base mb-2 flex items-start">
              <FaCheckCircle className="text-green-300 mt-1 mr-2 text-base sm:text-lg md:text-xl" />
              {text}
            </p>
          ))}
        </div>

        <div className="hidden md:block fixed top-[100px] right-10 z-50 w-[350px]">
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Book Free Consultation</h3>
            <input
              name="name"
              type="text"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
              aria-label="Patient Name"
            />
            {formErrors.name && <p className="text-red-500 text-sm mb-2">{formErrors.name}</p>}
            <input
              name="mobile"
              type="text"
              placeholder="+91 Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
              aria-label="Mobile Number"
            />
            {formErrors.mobile && <p className="text-red-500 text-sm mb-2">{formErrors.mobile}</p>}
            <div className="mb-4">
              <p className="font-medium text-gray-800 mb-2">Do you have insurance?</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 text-gray-700">
                  <input
                    type="radio"
                    name="insurance"
                    value="yes"
                    checked={formData.insurance === 'yes'}
                    onChange={handleChange}
                    className="accent-red-500"
                    aria-label="Insurance Yes"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 text-gray-700">
                  <input
                    type="radio"
                    name="insurance"
                    value="no"
                    checked={formData.insurance === 'no'}
                    onChange={handleChange}
                    className="accent-red-500"
                    aria-label="Insurance No"
                  />
                  No
                </label>
              </div>
              {formErrors.insurance && <p className="text-red-500 text-sm mt-1">{formErrors.insurance}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold"
              aria-label="Book Consultation"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      <div className="flex px-4 md:px-10 mt-10 gap-4">
        <div className="w-full md:w-[60%] space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white shadow-md rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-green-600">
            <div className="text-center py-4">
              <h2 className="text-3xl font-bold text-green-600">100+</h2>
              <p className="text-sm">JCI & NABH Hospitals</p>
            </div>
            <div className="text-center py-4">
              <h2 className="text-3xl font-bold text-green-600">1,500+</h2>
              <p className="text-sm">Expert Doctors</p>
            </div>
            <div className="text-center py-4">
              <h2 className="text-3xl font-bold text-green-600">8,000+</h2>
              <p className="text-sm">Happy Patients</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-orange-50 rounded-2xl p-4 md:p-8 shadow-md space-y-4 md:space-y-0">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Check <span className="text-orange-600">Surgery Cost</span>
              </h3>
              <p className="mt-2 text-gray-700 text-sm md:text-base max-w-md mx-auto md:mx-0">
                Find the total cost of surgery at top-rated hospitals in your city with transparent and affordable pricing.
              </p>
              <button
                onClick={openDialog}
                className="mt-4 bg-orange-600 hover:bg-orange-700 transition-colors text-white px-5 py-2.5 rounded-full font-medium text-sm md:text-base shadow"
                aria-label="Calculate Surgery Cost"
              >
                Calculate Surgery Cost
              </button>
            </div>
            <div className="w-40 sm:w-48 md:w-60">
              <img
                src="/images/kidneysurgery.png"
                alt="Surgery Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {isDialogOpen && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <div
                className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30"
                onClick={closeDialog}
                aria-hidden="true"
              ></div>
              <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md z-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Check Surgery Cost</h3>
                  <button
                    onClick={closeDialog}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Close Dialog"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="Patient Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
                  aria-label="Patient Name"
                />
                {formErrors.name && <p className="text-red-500 text-sm mb-2">{formErrors.name}</p>}
                <input
                  name="mobile"
                  type="text"
                  placeholder="+91 Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border w-full mb-1 px-4 py-2 rounded focus:outline-none"
                  aria-label="Mobile Number"
                />
                {formErrors.mobile && <p className="text-red-500 text-sm mb-2">{formErrors.mobile}</p>}
                <div className="mb-4">
                  <p className="font-medium text-gray-800 mb-2">Do you have insurance?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 text-gray-700">
                      <input
                        type="radio"
                        name="dialog-insurance"
                        value="yes"
                        checked={formData.insurance === 'yes'}
                        onChange={handleChange}
                        className="accent-red-500"
                        aria-label="Insurance Yes"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-1 text-gray-700">
                      <input
                        type="radio"
                        name="dialog-insurance"
                        value="no"
                        checked={formData.insurance === 'no'}
                        onChange={handleChange}
                        className="accent-red-500"
                        aria-label="Insurance No"
                      />
                      No
                    </label>
                  </div>
                  {formErrors.insurance && <p className="text-red-500 text-sm mt-1">{formErrors.insurance}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full font-semibold"
                  aria-label="Submit Form"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          )}

          <section className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Meet Our Top Urology Experts
            </h2>
            <div className="space-y-6">
              {[
                {
                  name: "Dr. Ankit Vyas",
                  title: "MBBS, MS - General Surgery, MCh - Urology",
                  experience: "10+ Years Experience",
                  rating: "100%",
                  img: "/images/ankit.png",
                },
                {
                  name: "Dr. Shashank Sharma",
                  title: "MBBS, MS General Surgery, MCh Urology",
                  experience: "9+ Years Experience",
                  rating: "99%",
                  img: "/images/shashank.png",
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <div className="flex gap-4 items-center sm:items-start">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                      <p className="text-sm text-gray-600">{doc.title}</p>
                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-2">
                        <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
                          📅 {doc.experience}
                        </span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full">
                          👍 {doc.rating} Positive Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:ml-auto sm:self-center">
                    <button
                      onClick={openDialog}
                      className="block text-center border border-red-500 text-red-600 hover:bg-red-50 font-medium px-8 py-4 rounded-full text-sm transition"
                      aria-label={`Book consultation with ${doc.name}`}
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Risks of Delay in Kidney Stones Treatment</h2>
            <ul className="list-disc ml-6 text-red-600 space-y-2">
              <li>Severe Urinary Retention</li>
              <li>Irreversible Kidney Damage</li>
              <li>Frequent Urinary Infections</li>
              <li>Obstruction in the Urinary Tract</li>
              <li>Complete Loss of Kidney Function</li>
            </ul>
          </section>

          <section className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-6">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Why Choose Aapka Care?</h2>
            <ul className="list-disc ml-6 text-green-700 space-y-2">
              <li>Highly Skilled Surgeons</li>
              <li>Partnered with Top NABH & JCI Hospitals</li>
              <li>100% Insurance Assistance</li>
              <li>Free Personal Care Manager</li>
              <li>Easy No-Cost EMI Options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Kidney Stones Treatment Options</h2>
            <div className="w-full max-w-5xl mx-auto">
              <img
                src="/images/kidneyguide.png"
                alt="Kidney Stones Treatment Options"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Benefits of <span className="text-indigo-600">Aapka Care’s</span> Treatment for{' '}
              <span className="text-blue-600">Kidney Stones</span>
            </h2>
            <div className="w-full flex justify-center">
              <img
                src="/images/kidneycomparison.png"
                alt="Kidney Stone Treatment Comparison"
                className="w-full max-w-3xl rounded shadow"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
            <ul className="space-y-2">
              {faqs.map((faq, idx) => (
                <li
                  key={idx}
                  className="bg-white p-3 rounded-lg shadow border border-gray-100"
                >
                  <button
                    className="w-full text-left font-medium text-gray-800 flex items-center justify-between"
                    onClick={() => handleToggle(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{faq.question}</span>
                    <span className="text-gray-500">
                      {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {openIndex === idx && (
                    <p id={`faq-answer-${idx}`} className="text-sm text-gray-600 mt-2">
                      {faq.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md md:hidden p-4">
            <div className="flex gap-4">
              <a
                href="tel:9821527088"
                className="flex-1 bg-red-600 text-white hover:bg-orange-600 font-medium py-3 px-3 sm:px-5 rounded-2xl flex items-center justify-center text-sm sm:text-base"
                aria-label="Call Expert"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Expert
              </a>
              <a
                href="https://wa.me/919821527088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white hover:bg-green-500 font-medium py-3 px-3 sm:px-5 rounded-2xl flex items-center justify-center text-sm sm:text-base"
                aria-label="WhatsApp Chat"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-[40%]"></div>
      </div>
    </div>
  );
};

export default Hero;

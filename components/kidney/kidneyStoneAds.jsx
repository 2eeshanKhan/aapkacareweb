'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faChevronDown,faShieldAlt, faCut, faFileMedical, faHospital  } from '@fortawesome/free-solid-svg-icons'; 
import React, { useState } from 'react';
import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { db } from "@/module/firebaseConfig";




export default function KidneyBooking() {
    const {
        register: registerForm1,
        handleSubmit: handleSubmitForm1,
        formState: { errors: errorsForm1 },
      } = useForm();
    
      const {
        register: registerForm2,
        handleSubmit: handleSubmitForm2,
        formState: { errors: errorsForm2 },
      } = useForm();
    
      const onSubmitForm1 = async (data) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const yearMonth = `${currentYear}${currentMonth}`;
      
        // Create document ID as the current year
        const docRef = doc(db, 'AllKidney', currentYear.toString());
      
        // Set the subcollection (e.g., 202504 for April 2025)
        const subcollectionRef = collection(docRef, yearMonth);
      
        // Create a server timestamp and convert it to a string
        const timestamp = new Date().toISOString(); // Converts timestamp to string in ISO format
      
        // Save the data
        try {
          await setDoc(doc(subcollectionRef, timestamp), {
            name: data.name,
            phone: data.mobile,
            insurance: data.insurance,
            createdAt: serverTimestamp(), // Store Firebase server timestamp
          });
          console.log('Document successfully written!');
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      
        console.log('Form 1:', data);
        alert(`Thank you, ${data.name}! We will contact you shortly.`);
      };
      
    
      const onSubmitForm2 = async(data) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const yearMonth = `${currentYear}${currentMonth}`;
      
        // Create document ID as the current year
        const docRef = doc(db, 'AllKidney', currentYear.toString());
      
        // Set the subcollection (e.g., 202504 for April 2025)
        const subcollectionRef = collection(docRef, yearMonth);
      
        // Create a server timestamp and convert it to a string
        const timestamp = new Date().toISOString(); // Converts timestamp to string in ISO format
      
        // Save the data
        try {
          await setDoc(doc(subcollectionRef, timestamp), {
            name: data.name,
            phone: data.mobile,
            insurance: data.insurance,
            createdAt: serverTimestamp(), // Store Firebase server timestamp
          });
          console.log('Document successfully written!');
        } catch (e) {
          console.error('Error adding document: ', e);
        }
        console.log('Form 2:', data);
        alert(`Thank you, ${data.name}! We will contact you shortly.`);
      };
  const faqData = [
    {
      question: 'Is the Treatment 100% covered under insurance?',
      answer: 'Yes, our team will be able to help you in 100% insurance approvals and clearances.'
    },
    {
      question: 'Where is your hospital located?',
      answer: 'We provide options of Treatment in multiple super-specialty hospitals. Our team will assist in choosing best nearest hospital for you.'
    },
    {
        question: 'Which doctor will do my Treatment?',
        answer: 'We have a team of expert urologists with 13+ yrs of experience. Your personal medical coordinator will assist you at each step.'
      },
      
      {
        question: 'How soon can I return to normal day-to-day activities after the treatment?',
        answer: 'You can walk from the next day and can return to normal lifestyle in 7 days.'
      },
    {
      question: 'I do not have too much pain now, why should I get Treatment now?',
      answer: 'In many cases, stones can cause swelling, infection of Kidney Stone, leading to severe Kidney Stone damage. Our urologists will be able to help you with multiple surgical & non-surgical Treatment options.'
    },
    {
        question: 'Will my sexual health get affected because of this Treatment?',
        answer: 'The Treatment has no effect on your sexual health. You can continue your normal activities post Treatment.'
      }
  ];
  const advantages = [
    { label: 'Stitches', micro: 'NO STITCHES', femto: 'NO STITCHES' },
    { label: 'Precision', micro: 'PRECISE', femto: 'MORE PRECISE' },
    { label: 'Incision', micro: '1.5-1.8 MM', femto: '1.5-1.8 MM' },
    { label: 'Technique', micro: 'MANUAL', femto: 'BLADE FREE' },
    { label: 'Healing', micro: 'QUICK HEALING', femto: 'QUICK HEALING' },
    { label: 'Safety', micro: 'SAFER', femto: 'MORE SAFER' },
    { label: 'Accuracy', micro: 'ACCURATE', femto: 'MORE ACCURATE' },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-500 p-4 flex justify-between items-center text-white shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Aapka Care</h1>
        <a
          href="tel:9821527088"
          className="bg-white text-sky-700 px-4 py-1 rounded-full font-medium hover:bg-sky-100 transition"
        >
          📞 9821527088
        </a>
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          End the Pain <span className="text-sky-600">Remove Kidney Stones Safely</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get expert care with <strong className="text-gray-800">zero hassle</strong>
          </p>

          <ul className="mt-6 space-y-3 text-md text-gray-700 font-medium">
            <li>✅ Only 45 Mins Laser Procedure</li>
           
            <li>💳 No Cost EMI Available</li>
            <li>🏥 All Insurance Accepted</li>
          </ul>

          <a href="tel:+919821527088">
          <button className="mt-8 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50 animate-pulse">
  📞 Call Now for Cost Estimate
</button>


</a>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Cost Calculator
          </h3>


<form onSubmit={handleSubmitForm1(onSubmitForm1)} className="space-y-6">
            <div>
              <label htmlFor="name1" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                id="name1"
                type="text"
                placeholder="Enter your full name"
                {...registerForm1('name', {
                  required: true,
                  pattern: /^[a-zA-Z\s]+$/,
                })}
                className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              />
              {errorsForm1.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errorsForm1.name.type === 'required'
                    ? 'Name is required.'
                    : 'Only alphabets are allowed.'}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobile1" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                id="mobile1"
                type="tel"
                placeholder="Enter your 10-digit mobile number"
                {...registerForm1('mobile', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              />
              {errorsForm1.mobile && (
                <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit number.</p>
              )}
            </div>
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-4">
    Do you have insurance?
  </label>
  <div className="flex gap-6">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value="Yes"
        {...registerForm1('insurance', { required: true })}
      />
      Yes
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value="No"
        {...registerForm1('insurance', { required: true })}
      />
      No
    </label>
  </div>
  {errorsForm1.insurance && (
    <p className="text-red-500 text-sm mt-1">Please select an option.</p>
  )}
</div>

<button
  type="submit"
  className="bg-sky-600 hover:bg-sky-700 w-full py-3 rounded-md text-white font-semibold text-lg transition-all shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500"
>
  Get Your Estimate
</button>


           
          </form>

        </motion.div>
      </section>

      {/* Footer Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-inner">
        <div>
          <h4 className="text-3xl font-bold">20 Lacs+</h4>
          <p className="text-sm font-medium">Happy Patients</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">50+</h4>
          <p className="text-sm font-medium">Treatments</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">700+</h4>
          <p className="text-sm font-medium">Hospitals</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">40+</h4>
          <p className="text-sm font-medium">Cities Served</p>
        </div>
      </div>
   

<section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
  {/* First Section */}
  <div className="flex-1 bg-white rounded-2xl shadow-md p-8 hover:scale-[1.02] transition-transform duration-300">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-900 leading-tight">
      Why You Should Not Delay Operation?
    </h2>
    <ul className="space-y-6 text-lg text-gray-700">
      {[
        { text: "Avoid Permanent Damage to Kidneys", color: "text-blue-600" },
        { text: "Get Immediate Relief and Restore Kidney Function", color: "text-green-600" },
        { text: "Avoid Chances of UTI Infections", color: "text-orange-600" },
        { text: "Stone Size >5mm can only be removed by Surgery", color: "text-orange-600" },
      ].map((item, idx) => (
        <li key={idx} className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
          <FontAwesomeIcon icon={faCheck} className={`w-8 h-8 ${item.color}`} />
          <span className="font-medium text-gray-800">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Second Section */}
  <div className="flex-1 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-md p-8 hover:scale-[1.02] transition-transform duration-300">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-900 leading-tight">
      What is the Cost of Operation?
    </h2>
    <ul className="space-y-6 text-lg text-gray-700">
      {[
        { text: "Size, Location & Number of Stones", color: "text-blue-600" },
        { text: "Technique & Equipment used", color: "text-green-600" },
        { text: "Any other pre-existing medical condition", color: "text-orange-600" },
      ].map((item, idx) => (
        <li key={idx} className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
          <FontAwesomeIcon icon={faCheck} className={`w-8 h-8 ${item.color}`} />
          <span className="font-medium text-gray-800">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
</section>



     
<section className="py-24 px-6 bg-gradient-to-r from-gray-300 via-sky-200 to-sky-300">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Left Section: Text */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Cost Calculator

      </h2>
      <p className="text-lg text-gray-600 mb-6">
      Find out the cost of your Kidney Stone Removal
      </p>
    </div>
    
   

    {/* Second Form: Another Booking or Contact Form */}
<section className="px-6 md:px-20 py-16 bg-gray-100">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
  >
    <h3 className="text-2xl font-bold mb-6 text-gray-800">
    Book a Free Kidney Stone Consultation
    </h3>
    <form onSubmit={handleSubmitForm2(onSubmitForm2)} className="space-y-4 max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            {...registerForm2('name', {
              required: true,
              pattern: /^[a-zA-Z\s]+$/,
            })}
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          {errorsForm2.name && (
            <p className="text-red-500 text-sm">Name is required and should contain only letters.</p>
          )}

          <input
            type="tel"
            placeholder="Mobile Number"
            {...registerForm2('mobile', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          {errorsForm2.mobile && (
            <p className="text-red-500 text-sm">Valid 10-digit number required.</p>
          )}
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-4">
    Do you have insurance?
  </label>
  <div className="flex gap-6">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value="Yes"
        {...registerForm2('insurance', { required: true })}
      />
      Yes
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value="No"
        {...registerForm2('insurance', { required: true })}
      />
      No
    </label>
  </div>
  {errorsForm2.insurance && (
    <p className="text-red-500 text-sm mt-1">Please select an option.</p>
  )}
</div>

<button
  type="submit"
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-lg"
>
  Submit
</button>
</form>
</motion.div>
</section>
</div>
</section>


<section className="bg-gradient-to-br from-slate-100 via-white to-slate-100 py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
      Why Choose <span className="text-blue-600">Aapka Care?</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {[
        "30% off On Diagnostics",
        "Free Pickup & Drop",
        "No-Cost EMI Option",
        "Complete Paperwork Support by Our Team"
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <span className="text-4xl text-yellow-400 mb-4">✔</span>
          <p className="text-lg font-semibold text-gray-800">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-16 mt-16 px-4">
  {[
    { icon: faShieldAlt, text: "USFDA Approved\nProcedures" },
    { icon: faCut, text: "No Stitches\nMinimal Pain" },
    { icon: faFileMedical, text: "Insurance\nPaperwork Support" },
    { icon: faHospital, text: "Day Care\nProcedure" },
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 w-full sm:w-48 max-w-[300px]"
    >
      <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
        <FontAwesomeIcon icon={item.icon} className="text-4xl sm:text-5xl" />
      </div>
      <p className="font-semibold text-gray-800 leading-snug whitespace-pre-line text-base sm:text-lg">
        {item.text}
      </p>
    </div>
  ))}
</div>







      <hr className="border-gray-200 my-8" />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Benefits of Laser Treatment</h2>

      {/* Comparison Table */}
      <div className="w-full overflow-x-auto px-4 py-8">
  <div className="inline-block min-w-full">
    <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-lg">
      <thead className="bg-gradient-to-r from-blue-100 to-white">
        <tr>
          <th className="text-gray-700 px-6 py-4 text-left text-sm md:text-lg font-bold uppercase tracking-wide"> </th>
          <th className="text-gray-700 px-6 py-4 text-center text-sm md:text-lg font-bold uppercase tracking-wide">Open Surgery</th>
          <th className="text-blue-600 px-6 py-4 text-center text-sm md:text-lg font-bold uppercase tracking-wide">Laser Surgery</th>
        </tr>
      </thead>
      <tbody>
        {[
          { label: "Cuts", open: "Multiple", laser: "No" },
          { label: "Scars & Stitches", open: "Multiple", laser: "No" },
          { label: "Procedure", open: "Painful", laser: "Minimal Pain" },
          { label: "Blood Loss", open: "High", laser: "Minimal" },
          { label: "Infection Chances", open: "High", laser: "Minimal" },
          { label: "Recovery", open: "Bed Rest", laser: "Quick" },
          { label: "Hospital Duration", open: "Long", laser: "Short" },
          { label: "Technology", open: "Outdated", laser: "Advanced" },
        ].map((item, idx) => (
          <tr
            key={idx}
            className="hover:bg-blue-50 transition-all duration-300 border-b last:border-none"
          >
            <td className="px-6 py-4 font-semibold text-gray-800 text-sm md:text-base">{item.label}</td>
            <td className="px-6 py-4 text-center text-gray-600 font-semibold text-sm md:text-base">{item.open}</td>
            <td className="px-6 py-4 text-center">
              <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-bold">
                {item.laser}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



<section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 leading-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>


<footer className="py-8 bg-blue-900 text-white text-center text-sm">
  &copy; 2025 Aapka Care. All rights reserved.
</footer>



    </main>
  );
}

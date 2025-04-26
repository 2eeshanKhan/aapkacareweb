'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faChevronDown  } from '@fortawesome/free-solid-svg-icons'; 
import React, { useState } from 'react';
import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { db } from "@/module/firebaseConfig";




export default function LasikBooking() {
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
        const docRef = doc(db, 'AllLasik', currentYear.toString());
      
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
        const docRef = doc(db, 'AllLasik', currentYear.toString());
      
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
      question: 'Am I eligible for LASIK/Contoura vision treatment?',
      answer: 'Generally, a suitable candidate will be at least 18 years of age, have had a stable vision for the last 12 months, is not pregnant, is free of certain diseases of the cornea and retina and is generally in good health.'
    },
    {
      question: 'Is LASIK surgery painful?',
      answer: 'Not at all. It is a bladeless, stitchless, and painless procedure that takes just about 20 minutes.'
    },
    {
        question: 'Is the procedure safe?',
        answer: 'LASIK is considered to be very safe. Over 10 million cases have been performed worldwide in the last decade.'
      },
      {
        question: 'Will my vision be corrected forever?',
        answer: 'Once the cornea has been modified it tends to stay modified permanently. The vast majority of corrected eyes remain stable, permanently correcting near-sightedness, far-sightedness and astigmatism.'
      },
      {
        question: 'How will I know which treatment is best for me ?',
        answer: 'Your surgeon will advise this after a thorough examination at a consultation.'
      },
    {
      question: 'How soon can I get back to normal, drive, play sport or go to work?',
      answer: 'Most people return to work and drive the day after lasik surgery.'
    },
    {
        question: 'Are Aapka Care Ophthalmologists Reliable?',
        answer: 'Yes, ophthalmologists at Aapka Care are highly reliable. They come with years of experience of treating different eye problems for men and women of all age groups.'
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
      <div className="bg-gradient-to-r from-sky-700 to-rose-900 p-4 flex justify-between items-center text-white shadow-md">
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
            Say Goodbye to Glasses with <span className="text-sky-600">Advanced Lasik</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get expert care with <strong className="text-gray-800">zero hassle</strong>
          </p>

          <ul className="mt-6 space-y-3 text-md text-gray-700 font-medium">
            <li>✅ Only 15 Mins Procedure</li>
            <li>🚗 Same Day Discharge</li>
            <li>💳 No Cost EMI Available</li>
            <li>🏥 NABH-Accredited Partner Hospitals</li>
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
            Lasik Surgery Cost Calculator
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
          <h4 className="text-3xl font-bold">2L+</h4>
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
      <section className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 leading-tight">
    What is the Cost of LASIK Surgery?
  </h2>
  <ul className="space-y-8 text-lg text-gray-700">
    <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
      <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-blue-600" />
      <span className="font-medium text-gray-800">Equipment and Technology (Laser/Contoura) Used</span>
    </li>
    <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
      <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-green-600" />
      <span className="font-medium text-gray-800">Eye Vision and Cornea Thickness</span>
    </li>
    <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
      <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-orange-600" />
      <span className="font-medium text-gray-800">Aftercare is an add-on expense — at Aapka Care, we offer free follow-ups</span>
    </li>
  </ul>
</section>

<section className="bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 text-gray-900 leading-tight">
      Why opt for LASIK Surgery?
    </h2>
    <ul className="space-y-8 text-lg text-gray-700">
      <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
        <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-blue-600" />
        <span className="font-medium text-gray-800">Bladeless, Stitchless, and Painless Treatment</span>
      </li>
      <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
        <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-green-600" />
        <span className="font-medium text-gray-800">20-minute procedure, same day discharge</span>
      </li>
      <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
        <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-orange-600" />
        <span className="font-medium text-gray-800">Return to work the next day</span>
      </li>
      <li className="flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
        <FontAwesomeIcon icon={faCheck} className="w-8 h-8 text-purple-600" />
        <span className="font-medium text-gray-800">Restores clear vision</span>
      </li>
    </ul>
  </div>
</section>


     
<section className="py-24 px-6 bg-gradient-to-r from-gray-300 via-sky-200 to-sky-300">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Left Section: Text */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        LASIK Cost Calculator
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Get an estimate for your LASIK surgery cost by filling out the form on the right. It's simple, quick, and secure!
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
      Book a Free LASIK Consultation
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
<section className="bg-gradient-to-r from-sky-500 to-sky-700 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8 tracking-tight">Why Choose Aapka Care?</h2>
    <ul className="space-y-6 text-lg">
      <li className="flex items-center justify-center space-x-3">
        <span className="text-xl text-yellow-400">✔</span>
        <span className="font-medium">5+ Years Experienced Doctors</span>
      </li>
      <li className="flex items-center justify-center space-x-3">
        <span className="text-xl text-yellow-400">✔</span>
        <span className="font-medium">Latest Technology & Equipment</span>
      </li>
      <li className="flex items-center justify-center space-x-3">
        <span className="text-xl text-yellow-400">✔</span>
        <span className="font-medium">No-Cost EMI Option</span>
      </li>
      <li className="flex items-center justify-center space-x-3">
        <span className="text-xl text-yellow-400">✔</span>
        <span className="font-medium">Complete Paperwork Support by Our Team</span>
      </li>
    </ul>
  </div>
</section>


<section className="py-16 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Choose The Right Treatment</h2>

    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white border text-center">
        <thead>
          <tr className="bg-blue-100 text-gray-800">
            <th className="p-5 border font-semibold text-lg">Technology</th>
            <th className="p-5 border font-semibold text-lg">LASIK</th>
            <th className="p-5 border font-semibold text-lg">SMILE</th>
            <th className="p-5 border font-semibold text-lg">SILK</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="p-5 border">Advanced LASIK</td>
            <td className="p-5 border">Established</td>
            <td className="p-5 border">Latest, Robotic, AI-driven</td>
            <td className="p-5 border">Femtosecond LASER</td>
          </tr>
        </tbody>
      </table>
    </div>

 

<section className="py-10 px-6 max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <a href="tel:9821527088">
            <button className="bg-orange-500 text-white py-4 px-8 rounded-lg hover:bg-orange-600 transition">
              Talk to Our Expert
            </button>
          </a>
          <a href="tel:9821527088">
            <button className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition">
              Book Appointment Now
            </button>
          </a>
        </div>
      </section>
  </div>
</section>

<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-8 text-gray-900">Advantages of Bladeless LASIK Surgery</h2>
    {/* Add table or icons-based list */}

    <div className="grid gap-6 md:grid-cols-2">
          {advantages.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{item.label}</h3>
              
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex-1 text-center bg-gray-100 p-3 rounded-lg font-medium">
                  <p className="text-xs uppercase text-gray-500 mb-1">Micro Incision Surgery</p>
                  <p className="text-gray-800">{item.micro}</p>
                </div>

                <div className="flex-1 text-center bg-blue-600 p-3 rounded-lg text-white font-medium">
                  <p className="text-xs uppercase text-white/70 mb-1">Femto Laser Assisted Surgery</p>
                  <p className="">{item.femto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


    </div>
</section>

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

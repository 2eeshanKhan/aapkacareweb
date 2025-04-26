'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Thank you, ${data.name}! We will contact you shortly.`);
  };
  const advantages = [
    { label: 'Stitches', micro: 'NO STITCHES', femto: 'NO STITCHES' },
    { label: 'Precision', micro: 'PRECISE', femto: 'MORE PRECISE' },
    { label: 'Incision', micro: '1.5-1.8 MM', femto: '1.5-1.8 MM' },
    { label: 'Technique', micro: 'MANUAL', femto: 'BLADE FREE' },
    { label: 'Healing', micro: 'QUICK HEALING', femto: 'QUICK HEALING' },
    { label: 'Safety', micro: 'SAFER', femto: 'MORE SAFER' },
    { label: 'Accuracy', micro: 'ACCURATE', femto: 'MORE ACCURATE' },
  ];

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


<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
   
    <input
  id="name"
  type="text"
  placeholder="Enter your full name"
  {...register('name', {
    required: true,
    pattern: /^[a-zA-Z\s]+$/, // Only allows alphabets and spaces
  })}
  className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
/>
{errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name.type === 'required' ? 'Name is required.' : 'Only alphabets are allowed (no emojis, dots, or special characters).'}
  </p>
)}
  </div>
  
  <div>
    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
    <input
      id="mobile"
      type="tel"
      placeholder="Enter your 10-digit mobile number"
      {...register('mobile', {
        required: true,
        pattern: /^[0-9]{10}$/,
      })}
      className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
    />
    {errors.mobile && (
      <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit number.</p>
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
    
    {/* Right Section: Form */}
    <div className="bg-slate-700 p-10 rounded-xl shadow-lg transition-transform transform hover:scale-102 hover:shadow-xl">
      <form className="space-y-6">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="border border-gray-300 w-full p-4 rounded-lg text-base text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-300"
        />
        <input 
          type="text" 
          placeholder="Mobile Number" 
          className="border border-gray-300 w-full p-4 rounded-lg text-base text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-300"
        />
        <div className="space-y-4">
          <button className="w-full py-4 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-600 transition duration-300">
            Get Cost Estimate Now
          </button>
          <button className="w-full py-4 rounded-lg text-white text-lg bg-amber-900 font-semibold border-2 border-gray-300 hover:bg-gray-100 hover:text-indigo-600 transition duration-300">
            Talk to Our Expert
          </button>
        </div>
      </form>
    </div>
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

    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
      <button className="bg-orange-500 text-white py-4 px-8 rounded-lg hover:bg-orange-600 transition">Talk to Our Expert</button>
      <button className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition">Book Appointment Now</button>
    </div>
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

<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Frequently Asked Questions (FAQs)</h2>
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h3 className="font-semibold text-xl">Am I eligible for LASIK/Contoura vision treatment?</h3>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h3 className="font-semibold text-xl">How soon can I get back to normal activities?</h3>
      </div>
    </div>
  </div>
</section>

<footer className="py-8 bg-blue-900 text-white text-center text-sm">
  &copy; 2025 Aapka Care. All rights reserved.
</footer>



    </main>
  );
}

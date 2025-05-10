'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { db } from "@/module/firebaseConfig";
import { FaWhatsapp, FaCheckCircle, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const HerniaAdsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', insurance: '' });
  const [formErrors, setFormErrors] = useState({ name: '', mobile: '', insurance: '' });

  const faqs = [
    {
      question: "What causes a hernia?",
      answer: "Hernias can result from a combination of muscle weakness and strain, including factors like heavy lifting, obesity, and chronic coughing."
    },
    {
      question: "Is hernia surgery painful?",
      answer: " With laparoscopic techniques, the procedure is minimally invasive and associated with less pain and quicker recovery."
    },
    {
      question: "How long does recovery take?",
      answer: " Most patients resume daily activities within 2–3 days post-surgery."
    },
    {
      question: "Is hernia surgery covered by insurance?",
      answer: "Yes, we offer 100% assistance with all major insurance providers."
    },
    {
      question: "Can a hernia recur after surgery?",
      answer: " Recurrence is rare, especially when the surgery is performed by experienced surgeons and followed by proper post-operative care."
    },
    {
        question: "Are EMI options available for the surgery?",
        answer: "Absolutely! We offer Zero-Cost EMI for all eligible patients."
      },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
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
      const docRef = doc(db, 'AllHernia', currentYear.toString());
      const subcollectionRef = collection(docRef, yearMonth);
      const timestamp = new Date().toISOString();

      try {
        await setDoc(doc(subcollectionRef, timestamp), {
          name: formData.name,
          phone: formData.mobile,
          insurance: formData.insurance,
          createdAt: serverTimestamp(),
        });
       
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
             href="https://wa.me/919821527088?text=Hi%2C%20I%27m%20looking%20for%20Hernia%20Treatment.%20Please%20send%20me%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-500 font-medium py-3 px-5 rounded-4xl flex items-center text-base"
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            Chat with Hernia Expert
          </a>
        </div>
        <div className="flex sm:hidden gap-3">
          <a href="tel:9821527088" className="bg-red-600 p-2 rounded-full text-white">
            <PhoneCall className="w-5 h-5" />
          </a>
          <a
             href="https://wa.me/919821527088?text=Hi%2C%20I%27m%20looking%20for%20Hernia%20Treatment.%20Please%20send%20me%20details."
           
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 p-2 rounded-full text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>

      <section
        className="relative mt-0 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between bg-slate-200 md:bg-[url('/images/herniabanner.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ minHeight: '50vh' }}
      >
        <div className="text-black max-w-2xl p-4 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 text-sky-800">
          Advanced Hernia Treatment in Mumbai
          </h1>
          {[
            'Latest 3D Laparoscopic Surgery',
            'Free Doctor Consultation',
            'Zero Cost EMI',
            '100% Insurance Assistance',
           
          ].map((text, idx) => (
            <p key={idx} className="text-black text-sm sm:text-base mb-2 flex items-start">
              <FaCheckCircle className="text-green-800 mt-1 mr-2 text-base sm:text-lg md:text-xl" />
              {text}
            </p>
          ))}
        </div>

        

        <div className="md:fixed top-[100px] right-4 sm:right-10 z-50 w-[85%] max-w-[320px] mx-auto md:mx-0 md:w-[350px] my-6 md:my-0">
  <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6">
    <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 text-center">Book Free Consultation</h3>
    <input
      name="name"
      type="text"
      placeholder="Patient Name"
      value={formData.name}
      onChange={handleChange}
      className="border w-full mb-1 px-3 py-2 rounded focus:outline-none text-sm sm:text-base"
      aria-label="Patient Name"
    />
    {formErrors.name && <p className="text-red-500 text-xs sm:text-sm mb-2">{formErrors.name}</p>}
    <input
      name="mobile"
      type="text"
      placeholder="+91 Mobile Number"
      value={formData.mobile}
      onChange={handleChange}
      className="border w-full mb-1 px-3 py-2 rounded focus:outline-none text-sm sm:text-base"
      aria-label="Mobile Number"
    />
    {formErrors.mobile && <p className="text-red-500 text-xs sm:text-sm mb-2">{formErrors.mobile}</p>}
    <div className="mb-4">
      <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Do you have insurance?</p>
      <div className="flex gap-4">
        <label className="flex items-center gap-1 text-gray-700 text-sm sm:text-base">
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
        <label className="flex items-center gap-1 text-gray-700 text-sm sm:text-base">
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
      {formErrors.insurance && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.insurance}</p>}
    </div>
    <button
      onClick={handleSubmit}
      className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-full font-semibold text-sm sm:text-base"
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
                Check <span className="text-orange-600">Check Surgery Cost</span>
              </h3>
              <p className="mt-2 text-gray-700 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Find the total cost of hernia surgery at top-rated hospitals in your city with transparent and affordable pricing.

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
                className="fixed inset-0 backdrop-blur-sm  bg-opacity-40"
                onClick={closeDialog}
                aria-hidden="true"
              ></div>
              <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md z-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Connect With Aapka Care</h3>
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

          

          <section className="bg-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Risks of Delaying Hernia Treatment</h2>
            <ul className="list-disc ml-6 text-red-600 space-y-2">
              <li>Increase in size and pain</li>
              <li>Risk of strangulated hernia (cutting off blood supply)</li>
              <li>Digestive discomfort and restricted mobility</li>
              <li>Potential for emergency surgery, which carries more risks
              </li>
             
            </ul>
          </section>

          <section className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-6">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Why Choose Aapka Care?</h2>
            <ul className="list-disc ml-6 text-green-700 space-y-2">
              <li>100+ NABH & JCI Accredited Hospitals</li>
              <li>500+ Expert Surgeons</li>
              <li>10,000+ Happy Patients</li>
              <li>All Insurances Accepted</li>
              <li>Transparent Billing</li>
              <li>Zero Cost EMI Options</li>
            </ul>
          </section>

         

         

          <section className='mb-20'>
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
             href="https://wa.me/919821527088?text=Hi%2C%20I%27m%20looking%20for%20Hernia%20Treatment.%20Please%20send%20me%20details."
               
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
      <footer className=" bg-black  sm:mt-1 px-4 py-8 mb-20 md:mb-2">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-white mb-4">Need help?</h3>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <a
            href="tel:+919821527088"
            className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm hover:bg-amber-700 transition"
          >
            📞 Call For Free Consultation
          </a>
          <button
             onClick={openDialog}
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition"
          >
            🔁 Get a Call back
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white text-center">
          © {new Date().getFullYear()} All Rights Reserved by Aapka Care (A Unit of Fuerte Health Care Private Limited)

        </p>
      </div>
    </footer>
    </div>
  );
};

export default  HerniaAdsPage;
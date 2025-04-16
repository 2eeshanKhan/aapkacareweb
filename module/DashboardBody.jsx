"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import {db} from './firebaseConfig';
import {collection,addDoc} from 'firebase/firestore';
import { Timestamp } from "firebase/firestore"; 



import axios from "axios";
import { add } from "date-fns";

async function saveDataToFirebase(name,mobileNo,date,disease){
    const serverTime = new Date().toLocaleString();

    try {
        const docRef = await addDoc(collection(db, "Bookings"), {
            name: name,
            mobileNo: mobileNo,
            date: Timestamp.fromDate(new Date(date)), // Store as Timestamp
            disease: disease,
        });
        return true;
    } catch (error) {
        console.error("Error adding document:", error);
        return false;
    }
}

const   HeroSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        date: "",
        disease: "",
    });

    const [message, setMessage] = useState("");





    const stats = [
        { value: "200K+", label: "Happy Patients" },
        { value: "10K+", label: "Surgeries" },
        { value: "900+", label: "Hospitals" },
        { value: "2000+", label: "Doctors" },
        { value: "45+", label: "Cities" },
        { value: "500+", label: "Clinics" },
    ];

    const treatments = [
        { name: "Piles", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Fpiles.svg" },
        { name: "Anal Fistula", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffistula.svg" },
        { name: "Anal Fissure", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffissure.svg" },
        { name: "Gallstone", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FGalstone.svg" },
        { name: "Lasik Eye Surgery", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FLasik3.svg" },
        { name: "Hernia", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FHernia.svg" },
        { name: "Laser Circumcision", icon: "https://img.pristyncare.com/Update_disease_icons%2FIcons-Circumcision.svg" },
        { name: "Enlarged Prostate (BPH)", icon: "https://img.pristyncare.com/Update_disease_icons%2FIcons-ProstateEnlargement.svg" },
    ];

   
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "mobileNo" && !/^[0-9]*$/.test(value)) {
            return; // Prevents non-numeric input
        }
    
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
       

        e.preventDefault();
        const phoneRegex = /^[6-9]\d{9}$/;
        const { name, mobileNo, date, disease } = formData;
    
    if (!phoneRegex.test(mobileNo)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

        try {
            const added = await saveDataToFirebase(
                formData.name,
                formData.mobileNo,
                formData.date,
                formData.disease
            );

            if (added) {
                alert("Appointment has been booked");
                setFormData({ name: "", mobileNo: "", date: "", disease: "" });
            } else {
                setMessage("Failed to book appointment. Please try again.");
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
            setMessage("Failed to book appointment. Please try again.");
        }
    };

    return (






<div className="w-full px-4 py-10 bg-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div className="space-y-6 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-600 leading-tight">
        Experience Wellness at Your Fingertips with Aapkacare!
      </h1>
      <p className="text-gray-700 font-medium text-lg md:text-xl">
        Book Free Appointments With Our Expert Doctors Near You
      </p>

     

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[
    {
      img: "https://img.pristyncare.com/HomePage%2FComponent%2017%20%E2%80%93%201%403x.png",
      text: "Nationwide expert care for 100+ health conditions.",
    },
    {
      img: "https://img.pristyncare.com/HomePage%2Fdoctor%20(6)%403x.png",
      text: "Consult top doctors in person or online — at your convenience.",
    },
    {
      img: "https://img.pristyncare.com/HomePage%2FComponent%2016%20%E2%80%93%201%403x.png",
      text: "We’re with you from diagnosis to recovery.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white hover:shadow-xl transition-shadow border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 mb-4">
        <img src={item.img} alt={`card-icon-${i}`} className="w-full h-full object-contain" />
      </div>
      <p className="text-gray-700 font-medium text-sm">{item.text}</p>
    </div>
  ))}
</div>


      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center mx-auto lg:mx-0 w-fit">
        <PhoneCall className="w-5 h-5 mr-2" />
        Call Us: 9821-527-088
      </button>
    </div>

   


<div className="bg-sky-900 p-8 rounded-md text-white shadow-2xl max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-8 text-center">Book FREE Doctor Appointment</h2>
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label className="block mb-1 text-sm font-semibold">Patient Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-3 rounded text-black bg-white"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block mb-1 text-sm font-semibold">Mobile Number</label>
        <input
          type="tel"
          name="mobileNo"
          placeholder="10-digit mobile number"
          className="w-full p-3 rounded text-black bg-white"
          value={formData.mobileNo}
          onChange={handleChange}
          required
          pattern="[6-9]{1}[0-9]{9}"
          maxLength="10"
          inputMode="numeric"
        />
      </div>

     

<div>
  <label className="block mb-1 text-sm font-semibold">Preferred Date</label>
  <input
    type="date"
    name="date"
    className="w-full p-3 rounded text-black bg-white"
    value={formData.date}
    onChange={handleChange}
    required
    min={new Date().toISOString().split("T")[0]} // 👈 Restricts to today and future
  />
</div>

      {/* Disease Dropdown */}
      <div>
        <label className="block mb-1 text-sm font-semibold">Select Disease</label>
        <select
          name="disease"
          className="w-full p-3 rounded text-black bg-white"
          value={formData.disease}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose an option --</option>
          {treatments.map((treatment) => (
            <option key={treatment.name} value={treatment.name}>
              {treatment.name}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-8">
      <button className="w-full bg-orange-500 hover:bg-orange-600 transition duration-200 text-white py-3 rounded-xl font-bold text-lg">
        Book Free Appointment
      </button>
    </div>
  </form>

  {/* Message */}
  {message && <p className="mt-4 text-center text-sm text-green-400">{message}</p>}
</div>

  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12 bg-slate-100 p-6 rounded-lg shadow-inner">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex flex-col items-center text-center bg-slate-800 text-white p-4 rounded-lg shadow-md"
      >
        <div className="text-xl font-bold">{stat.value}</div>
        <div className="text-sm mt-1">{stat.label}</div>
      </div>
    ))}
  </div>
</div>

    );
};

export default HeroSection;

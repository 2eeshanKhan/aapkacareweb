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
        <div className="w-full  sm:px-30 py-8 px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-blue-500 leading-tight">
                        Simplifying Surgery Experience in <br /> Delhi
                    </h1>
                    <p className="text-gray-600 font-bold text-2xl">
                        Book Free Appointments With Our Expert Doctors Near You
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-100 rounded-none shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2FComponent%2017%20%E2%80%93%201%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                            Expert medical consultation for 50+ diseases, accessible anywhere in India!
                            </p>
                        </div>
                        <div className="p-4 bg-gray-100  rounded-none shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2Fdoctor%20(6)%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                            Receive personalized care through in-person and digital consultations with our skilled doctors
                            </p>
                        </div>
                        <div className="p-4 bg-gray-100  rounded-none shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2FComponent%2016%20%E2%80%93%201%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                            Complete care and expert assistance throughout your treatment journey
                            </p>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center mx-auto md:mx-0">
                        <PhoneCall className="w-5 h-5 mr-2" /> Call Us: 9821-527-088
                    </button>
                </div>
                {/* <div className="bg-slate-900 p-8 rounded-lg text-white">
                    <h2 className="text-xl font-bold mb-4">Book FREE Doctor Appointment</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Patient Name" className="w-full p-3 rounded text-black" value={formData.name} onChange={handleChange} required />
                        <input type="tel" name="mobileNo" placeholder="Mobile Number" className="w-full p-3 rounded text-black" value={formData.mobileNo} onChange={handleChange} required />
                        <input type="date" name="date" className="w-full p-3 rounded text-black" value={formData.date} onChange={handleChange} required />
                        <select name="disease" className="w-full p-3 rounded text-black" value={formData.disease} onChange={handleChange} required>
                            <option value="">Select Disease</option>
                            {treatments.map((treatment) => (
                                <option key={treatment.name} value={treatment.name}>{treatment.name}</option>
                            ))}
                        </select>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
                            Book Free Appointment
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center">{message}</p>}
                </div> */}
                <div className="bg-slate-900 p-8 rounded-lg text-white w-[80%] my-[2%] mx-auto flex flex-col md:w-[90%] sm:w-full">
                    <h2 className="text-xl font-bold mb-4">Book FREE Doctor Appointment</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Patient Name"
                            className="w-full p-3 rounded text-black bg-white"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile Number"
                             className="w-full p-3 rounded text-black bg-white"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            required
                            pattern="[6-9]{1}[0-9]{9}"
    maxLength="10"
    inputMode="numeric"
                        />
                        <input
                            type="date"
                            name="date"
                             className="w-full p-3 rounded text-black bg-white"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="disease"
                             className="w-full p-3 rounded text-black bg-white"
                            value={formData.disease}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Disease</option>
                            {treatments.map((treatment) => (
                                <option key={treatment.name} value={treatment.name}>
                                    {treatment.name}
                                </option>
                            ))}
                        </select>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
                            Book Free Appointment
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center">{message}</p>}
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-20 my-8 bg-slate-700 rounded-md p-4 border border-black">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center text-white">
                        <div className=" text-2xl  font-bold">{stat.value}</div>
                        <div className="text-2xl  hsl">{stat.label}</div>

                    </div>
                ))}
            </div>
            


            

            
        </div>
    );
};

export default HeroSection;

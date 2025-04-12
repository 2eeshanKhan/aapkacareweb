// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/module/firebaseConfig";

// import { motion } from "framer-motion";
// import HospitalSlider from "@/module/HospitalSlider";
// import Insurances from "@/module/Insurances";

// const HospitalDetails = () => {
//   const { id } = useParams();
//   const [hospital, setHospital] = useState<any>(null);

//   useEffect(() => {
//     const fetchHospital = async () => {
//       const idStr = Array.isArray(id) ? id[0] : id;
//       if (!idStr) return;

//       try {
//         const docRef = doc(db, "AllHospital", idStr);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setHospital({ id: idStr, ...docSnap.data() });
//         } else {
//           console.log("No hospital found with this ID.");
//         }
//       } catch (error) {
//         console.error("Error fetching hospital:", error);
//       }
//     };

//     fetchHospital();
//   }, [id]);

//   if (!hospital) {
//     return <div className="text-white p-10 text-center">Loading hospital details...</div>;
//   }

//   const doctors = hospital.doctors || [];
//   const amenities = hospital.amenities || [];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
//       {/* Hospital Info */}
//       <motion.div
//         className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <motion.div
//           className="w-full md:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl font-bold text-blue-400">{hospital.name}</h1>
//           <div className="flex items-center space-x-3">
//             <span className="text-yellow-500 text-3xl">★★★★☆</span>
//             <span className="text-lg text-gray-300">{hospital.rating || "4.6"} Rating</span>
//           </div>
//           <p className="text-gray-400 text-lg">{hospital.type || "Multi-Speciality Hospital"} | {hospital.city || "City"}</p>
//           <p className="text-green-400 font-semibold text-lg">🕒 {hospital.timing || "Open 24/7"}</p>
//           <p className="text-gray-300">📍 Address: {hospital.address}</p>
//           <div className="flex space-x-4 mt-4">
//             <motion.button className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">Book Appointment</motion.button>
//             <motion.button
//               className="border border-green-400 text-green-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition transform hover:scale-105"
//               onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${hospital.whatsappNumber || "%2B919821527088"}&text=Hello%21`)}
//             >
//               WhatsApp Expert
//             </motion.button>
//           </div>
//         </motion.div>

//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <HospitalSlider images={hospital.images || []} />
//         </motion.div>
//       </motion.div>

//       {/* Doctor List */}
//       <div className="max-w-7xl mx-auto mt-16 p-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-blue-400 text-center">Our Doctors</h2>
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
//           {doctors.map((doctor: any, index: number) => (
//             <motion.div
//               key={index}
//               className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition transform hover:scale-105"
//             >
//               <img src={doctor.image || "/images/doctor1.avif"} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
//               <h3 className="text-xl font-bold">{doctor.name}</h3>
//               <p className="text-gray-400">{doctor.specialization}</p>
//               <p className="text-gray-500">{doctor.experience} of experience</p>
//             </motion.div>
//           ))}
//         </div> */}
//       </div>

//       {/* Amenities Section */}
//       <div className="max-w-7xl mx-auto mt-16 p-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-blue-400 text-center">Amenities</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8">
//           {/* {amenities.map((item: any, index: number) => (
//             <motion.div
//               key={index}
//               className="flex items-center space-x-3 bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition transform hover:scale-105"
//             >
//               <span className="text-3xl">{item.icon || "🏥"}</span>
//               <p className="text-lg font-semibold">{item.title}</p>
//             </motion.div>
//           ))} */}
//         </div>
//       </div>

//       {/* Insurance Section */}
//       <div className="max-w-7xl mx-auto mt-12 p-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-blue-400 text-center">Insurances</h2>
//         <p className="text-gray-300 text-center mt-2 text-lg">{hospital.insuranceText || "Flexible insurance options available."}</p>
//         <Insurances />
//       </div>
//     </div>
//   );
// };

// export default HospitalDetails;


"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/module/firebaseConfig";
import { useSearchParams, useRouter } from "next/navigation"; 
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { motion } from "framer-motion";
import HospitalSlider from "@/module/HospitalSlider";
import { FaHeartbeat, FaProcedures, FaUserMd, FaClinicMedical, FaSyringe, FaPills } from 'react-icons/fa';

import Insurances from "@/module/Insurances";



const HospitalDetails = ({ id }) => {
  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchHospital = async () => {
      if (!id) {
        console.warn("No ID provided.");
        return;
      }

      try {
        console.log("Fetching hospital with uId:", id);
        const q = query(
          collection(db, "AllHospital"),
          where("uId", "==", id)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
        
          setHospital({ id: doc.id, ...data });
          const doctorsSnapshot = await getDocs(collection(db, "AllHospital", id, "Doctors"));
          const doctorsList = doctorsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDoctors(doctorsList);
          console.log("Doctor list is here.",doctorsList);
          
        } else {
          console.warn("No hospital found with uId:", id);
        }
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospital();
  }, [id]);
    const router = useRouter();

  if (loading) {
    return <div className="p-10 text-black text-center">Loading...</div>;
  }

  if (!hospital) {
    return (
      <div className="p-10 text-red-400 text-center">
        Hospital not found.
      </div>
    );
  }
  const handleClickEvent = (uId) => {
    console.log("Doctor is is sent:", uId); // ✅ Add this

  
    router.push(`/doctor?id=${uId}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      {/* Hospital Info */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-blue-400">{hospital.name}</h1>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-3xl">★★★★☆</span>
            <span className="text-lg text-gray-300">{hospital.rating} Rating</span>
          </div>
          <p className="text-gray-400 text-lg">Multi-Speciality Hospital | {hospital.city}</p>
          <p className="text-green-400 font-semibold text-lg">🕒 Open 24/7</p>
          <p className="text-gray-300">📍 Address: {hospital.address}</p>
          <div className="flex space-x-4 mt-4">
            <motion.button className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">Book Appointment</motion.button>
            <motion.button
              className="border border-green-400 text-green-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition transform hover:scale-105"
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21")}
            >
              WhatsApp Expert
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HospitalSlider image={hospital.imageUrls} />
        </motion.div>
      </motion.div>

      {/* Doctor List */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-xl shadow-lg">
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Our Doctors</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
    {doctors.map((doctor, index) => (
      <motion.div
        key={index}
        className="bg-gray-700 px-4 py-6 sm:px-6 sm:py-8 rounded-lg text-center hover:bg-gray-600 transition transform hover:scale-105"
        onClick={() => handleClickEvent(doctor.docId)}
      >
        <img
          src={doctor.imageUrl || "/images/noimg.webp"}
          alt={doctor.name}
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 object-cover"
        />
        <h3 className="text-lg sm:text-xl font-bold text-white">{doctor.name}</h3>
        <p className="text-sm sm:text-base text-gray-400">{doctor.speciality}</p>
        <p className="text-sm sm:text-base text-gray-500">{doctor.experience}</p>
      </motion.div>
    ))}
  </div>
</div>


      {/* Amenities Section */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-xl shadow-lg">
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Amenities</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-6">
    {hospital.amenities.map((item, index) => (
      <motion.div
        key={index}
        className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-gray-700 px-4 py-3 sm:px-6 sm:py-4 rounded-lg hover:bg-gray-600 transition transform hover:scale-105"
      >
        {/* You can include icon here if needed */}
        <p className="text-sm sm:text-base font-medium text-white">{item}</p>
      </motion.div>
    ))}
  </div>
</div>


      {/* Insurance Section */}
      <div className="max-w-7xl mx-auto mt-12 p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400 text-center">Insurances</h2>
        <p className="text-gray-300 text-center mb-5 mt-5 text-lg">Mumbai Eye Care provides flexible insurance options.</p>
        <Insurances />
      </div>
    </div>
  );
};

export default HospitalDetails;













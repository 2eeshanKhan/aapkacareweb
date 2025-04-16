// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "@/module/firebaseConfig";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from 'next/link';

// const DoctorList = () => {
//   const searchParams = useSearchParams();
//   const selectedCity = searchParams.get("city");
//   const router = useRouter(); // ✅ router defined

//   const [search, setSearch] = useState("");
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       if (!selectedCity) return;
//       setLoading(true);
//       try {
//         const q = query(
//           collection(db, "AllDoctors"),
//           where("city", "==", selectedCity)
//         );
//         const querySnapshot = await getDocs(q);
//         const doctorList = [];
//         querySnapshot.forEach((doc) => {
//             doctorList .push({ id: doc.id, ...doc.data() });
//         });
//         setDoctors(doctorList );
//         setFilteredDoctors(doctorList);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDoctors ();
//   }, [selectedCity]);

//   useEffect(() => {
//     setFilteredDoctors(
//       doctors.filter((doctor) =>
//         doctor.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, doctors]);

//   const handleClickEvent = (uId) => {
//     console.log("Doctor ID being sent:", uId); // ✅ Add this

  
//     router.push(`/doctor?id=${uId}`);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6"
//       >
//        Doctors in {selectedCity || "your city"}
//       </motion.h1>

//       {/* Search Input */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="flex justify-center mb-10"
//       >
//         <input
//           type="text"
//           placeholder="Search doctors..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
//         />
//       </motion.div>

//       {/* Doctors Cards */}
//       <motion.div
//         className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         {loading ? (
//           <p className="text-center text-gray-200 col-span-3">Loading...</p>
//         ) : filteredDoctors.length > 0 ? (
//           filteredDoctors.map((doctor, index) => (
//             <motion.div
//               key={doctor.id}
//               className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
            
//             onClick={()=>handleClickEvent(doctor.uId)}
//             >
//               <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
//                 <Image
                 
//                   src={doctor.imgUrl || "/images/noimg.webp"}
//                   alt={doctor.name}
//                   width={180}
//                   height={180}
//                   className="object-contain max-h-full max-w-full"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{doctor.name}</h2>
//                 <p className="text-gray-600">{doctor.city}</p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-200 col-span-3">
//             No doctors found in "{selectedCity}"
//           </p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default DoctorList;

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link component from next/link

const DoctorList = () => {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city");
  const router = useRouter(); // ✅ router defined

  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (!selectedCity) return;
      setLoading(true);
      try {
        const q = query(
          collection(db, "AllDoctors"),
          where("city", "==", selectedCity)
        );
        const querySnapshot = await getDocs(q);
        const doctorList = [];
        querySnapshot.forEach((doc) => {
          doctorList.push({ id: doc.id, ...doc.data() });
        });
        setDoctors(doctorList);
        setFilteredDoctors(doctorList);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [selectedCity]);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, doctors]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Doctors in {selectedCity || "your city"}
      </motion.h1>

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          placeholder="Search doctors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
        />
      </motion.div>

      {/* Doctors Cards */}
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {loading ? (
         <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white/70 z-50">
         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
       </div>
        ) : filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <Link key={doctor.id} href={`/doctor/${doctor.id}`}> {/* Use dynamic link */}
              <motion.div
                className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
                  <Image
                    src={doctor.imgUrl || "/images/noimg.webp"}
                    alt={doctor.name}
                    width={180}
                    height={180}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.city}</p>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-200 col-span-3">
            No doctors found in "{selectedCity}"
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default DoctorList;


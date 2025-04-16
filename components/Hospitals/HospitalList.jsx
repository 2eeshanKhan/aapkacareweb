"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import { motion } from "framer-motion";
import Image from "next/image";

const HospitalList = () => {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city");
  const router = useRouter(); // ✅ router defined

  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      if (!selectedCity) return;
      setLoading(true);
      try {
        const q = query(
          collection(db, "AllHospital"),
          where("city", "==", selectedCity)
        );
        const querySnapshot = await getDocs(q);
        const hospitalList = [];
        querySnapshot.forEach((doc) => {
          hospitalList.push({ id: doc.id, ...doc.data() });
        });
        setHospitals(hospitalList);
        setFilteredHospitals(hospitalList);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, [selectedCity]);

  useEffect(() => {
    setFilteredHospitals(
      hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, hospitals]);

  const handleClickEvent = (uId) => {
   

  
    router.push(`/hospital?id=${uId}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Hospitals in {selectedCity || "your city"}
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
          placeholder="Search hospital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
        />
      </motion.div>

      {/* Hospital Cards */}
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
       
        ) : filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            //   onClick={() => router.push(`/hospital/${hospital.uId}`)}
            //   onClick={() => router.push(`/hospital`)}
            // onClick={() => {
            //     console.log("Navigating to hospital ID:", hospital.uId); // ✅ Debug log
            //     router.push(`/hospital/${hospital.uId}`);
            //   }}
            onClick={()=>handleClickEvent(hospital.uId)}
            >
              <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
                <Image
                  src={hospital.logo}
                  alt={hospital.name}
                  width={180}
                  height={180}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{hospital.name}</h2>
                <p className="text-gray-600">{hospital.city}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-200 col-span-3">
            No hospitals found in "{selectedCity}"
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default HospitalList;

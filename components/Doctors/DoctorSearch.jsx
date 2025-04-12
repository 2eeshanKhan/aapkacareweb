"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { db } from "@/module/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation"; // ✅ Added for navigation

const steps = [
  
  { title: "Select Doctor", image: "/images/hs-1.png" },
  { title: "Choose Date", image: "/images/hs-3.png" },
  { title: "Book Appointment", image: "/images/hs-4.png" },
];

const DoctorSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [cities, setCities] = useState([]);
  const router = useRouter(); // ✅ Router instance

  // Fetch unique city names from Firestore
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "AllDoctors"));
        const citySet = new Set();
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.city) citySet.add(data.city);
        });
        setCities(Array.from(citySet));
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const filteredLocations = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelectedLocation(city);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (selectedLocation !== "Select Location") {
      router.push(`/doctors?city=${encodeURIComponent(selectedLocation)}`);
    } else {
      alert("Please select a city before searching.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-rose-800 to-blue-800 text-white p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Find the Best Doctors Near You</h1>
        <p className="text-lg text-gray-200">
          Book appointments with top doctors in just a few clicks.
        </p>
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-lg bg-white p-4 rounded-lg shadow-lg text-black"
      >
        <div className="flex items-center border border-gray-300 p-3 rounded-md w-full">
          <div
            className="flex-grow flex items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span className="truncate">{selectedLocation}</span>
          </div>
          <button
            onClick={handleSearch}
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <FaSearch />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-2 max-h-60 overflow-y-auto"
          >
            <input
              type="text"
              placeholder="Search City"
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="divide-y divide-gray-200">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((city, index) => (
                  <li
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(city)}
                  >
                    {city}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500">No cities found</li>
              )}
            </ul>
          </motion.div>
        )}
      </motion.div>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-4 bg-white text-black rounded-lg shadow-md hover:scale-105 transition"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={64}
                height={64}
                className="w-16 h-16 mb-2"
              />
              <p className="font-semibold text-sm">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DoctorSearch;

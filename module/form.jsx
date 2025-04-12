"use client"; // Ensure it's a client component

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import Image from "next/image"; // Next.js optimized image handling

const cities = ["Mumbai", "Noida", "Delhi", "Karimnagar", "Madhapur"];

const Form = () => {
  const [citySearch, setCitySearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  return (
   
    <div className="flex flex-col md:flex-row px-6 md:px-16 py-10 justify-evenly">
      {/* Left Section */}
      <div className="md:w-1/3 w-full space-y-4">
        <h2 className="text-2xl font-semibold text-center md:text-left">
          Best Surgery's
        </h2>
        <p className="text-center md:text-left">AapkaCare Provides Top Doctors</p>

        {/* Form Fields */}
        <label className="block">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg mt-1"
          />
        </label>

        <label className="block">
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg mt-1"
          />
        </label>

        {/* Dropdown */}
        <div className="relative">
          <button
            className="w-full p-3 border rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedCity || "Location"}
            <span>▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 w-full bg-white shadow-lg mt-2 rounded-lg p-2">
              {/* Search Box */}
              <div className="flex items-center border p-2 rounded-lg">
                <FaSearch className="mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search City"
                  className="w-full p-2 border-none outline-none"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                />
              </div>

              {/* City List */}
              <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(citySearch.toLowerCase())
                  )
                  .map((city) => (
                    <div
                      key={city}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelectedCity(city);
                        setDropdownOpen(false);
                      }}
                    >
                      {city}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Book Now
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-[720px] w-full mt-8 md:mt-0">
        <Image
          src="/images/form-img.png" // Use a proper public path
          alt="Online Doctor"
          width={720}
          height={350}
          className="w-full md:h-[350px] h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Form;


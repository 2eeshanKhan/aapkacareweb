


"use client";

import { useRouter } from "next/navigation";
import {
  FaHospital,
} from "react-icons/fa";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import React, { useEffect, useState } from "react";

const DoctorDetails = ({ id }) => {
  const [doctor, setDoctor] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true); // for initial doctor fetch loading

  const router = useRouter();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
  const bookAppointment = async () => {
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!validateEmail(email)) {
      alert("Enter a valid email");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "Bookings"), {
        name,
        phone,
        email,
        date,
        doctorId: doctor?.id,
        doctorName: doctor?.name,
        createdAt: new Date(),
      });

      alert("Appointment booked successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setDate(new Date().toISOString().split("T")[0]);
    } catch (error) {
      console.error("Failed to book appointment:", error);
      alert("Something went wrong: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDoctor = async () => {
      if (!id) return;

      try {
        const q = query(collection(db, "AllDoctors"), where("uId", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setDoctor({ id: doc.id, ...doc.data() });
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setPageLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Inline Loader */}
          {pageLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
            </div>
          ) : doctor ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img
                    src={doctor?.imgUrl || "/images/noimg.webp"}
                    alt="Doctor"
                    className="w-full h-56 object-fill"
                  />
                  <div className="bg-blue-800 text-white p-6">
                    <h2 className="text-lg font-semibold mb-4">{doctor?.name}</h2>
                    <p className="flex items-center text-md mb-2">
                      <FaHospital className="mr-2 text-md" /> {doctor?.workingHospital}
                    </p>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="bg-indigo-900 text-white p-6 rounded-lg shadow space-y-4">
                  <h2 className="text-lg font-semibold">Book Appointment</h2>

                  <select className="w-full p-2 rounded bg-indigo-700" disabled>
                    <option>{doctor?.name}</option>
                  </select>

                  <input
                    className="w-full p-2 rounded bg-indigo-700"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="w-full p-2 rounded bg-indigo-700"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <input
                    className="w-full p-2 rounded bg-indigo-700"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="date"
                    className="w-full p-2 rounded bg-indigo-700"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <button
                    onClick={bookAppointment}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                    disabled={loading}
                  >
                    {loading ? "Booking..." : "Book Appointment"}
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <p className="text-sm text-sky-900 mb-2 font-medium">Aapka Care</p>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-1">{doctor?.name}</h1>
                  <span className="text-blue-600 font-medium">{doctor?.speciality}</span>
                  <hr className="my-4" />
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {doctor?.about?.trim() || "About information is currently unavailable."}
                  </p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Education & Experience</h2>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700">Education</p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {doctor?.qualification?.trim() || "Not Available."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold text-gray-700">Field of Expertise</p>
                      <p className="text-gray-600">{doctor?.speciality?.trim() || "Not Available."}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Years of Practice</p>
                      <p className="text-gray-600">{doctor?.experience?.trim() || "Not Available."}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Availability</h2>
                  <p>{doctor?.availability?.trim() || "Not Available."}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600 font-medium">Doctor not found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;







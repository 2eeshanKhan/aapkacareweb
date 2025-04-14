// "use client";

// import { useRouter } from "next/navigation";
// import {
//   FaUserMd,
//   FaHospital,
//   FaMapMarkerAlt,
//   FaRegClock,
//   FaGraduationCap,
//   FaPhone,
//   FaEnvelope,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter
// } from "react-icons/fa";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   addDoc,
// } from "firebase/firestore";
// import { db, auth } from "@/module/firebaseConfig";
// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const DoctorDetails = ({ id }) => {
//   const [doctor, setDoctor] = useState(null);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const validateEmail = (email) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: () => {},
//         },
//         auth
//       );
//     }
//   };

//   const sendOtp = async () => {
//     if (!name.trim()) {
//       alert("Name is required");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }
//     if (!validateEmail(email)) {
//       alert("Enter a valid email");
//       return;
//     }

//     try {
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;
//       const result = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
//       setConfirmationResult(result);
//       setOtpSent(true);
//       alert("OTP sent to your phone number");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP: " + error.message);
//     }
//   };

//   const verifyOtpAndBook = async () => {
//     if (!otp.trim()) {
//       alert("Please enter OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       await confirmationResult.confirm(otp);

//       await addDoc(collection(db, "appointments"), {
//         name,
//         phone,
//         email,
//         date,
//         doctorId: doctor?.id,
//         doctorName: doctor?.name,
//         createdAt: new Date(),
//       });

//       alert("Appointment booked successfully!");
//       setName("");
//       setPhone("");
//       setEmail("");
//       setOtp("");
//       setOtpSent(false);
//       setDate(new Date().toISOString().split("T")[0]);
//     } catch (error) {
//       console.error("OTP Verification failed:", error);
//       alert("Invalid OTP or something went wrong: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       if (!id) return;

//       try {
//         const q = query(collection(db, "AllDoctors"), where("uId", "==", id));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           const doc = querySnapshot.docs[0];
//           setDoctor({ id: doc.id, ...doc.data() });
//         }
//       } catch (error) {
//         console.error("Error fetching doctor data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   if (loading) return <div className="p-10 text-white text-center">Loading...</div>;
//   if (!doctor) return <div className="p-10 text-red-400 text-center"></div>;

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Sidebar */}
//         <div className="lg:col-span-1 space-y-6">
//           {/* Doctor Profile */}
//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <img
//               src={doctor?.imgUrl || "/images/noimg.webp"}
//               alt="Doctor"
//               className="w-full h-56 object-fill"
//             />
//             <div className="bg-blue-800 text-white p-6">
//               <h2 className="text-lg font-semibold mb-4">{doctor?.name}</h2>
//               <p className="flex items-center text-md mb-2">
//                 <FaHospital className="mr-2 text-md" /> {doctor?.workingHospital}
//               </p>
//             </div>
//           </div>

//           {/* Appointment Booking */}
//           <div className="bg-indigo-900 text-white p-6 rounded-lg shadow space-y-4">
//             <h2 className="text-lg font-semibold">Book Appointment</h2>

//             <select className="w-full p-2 rounded bg-indigo-700" disabled>
//               <option>{doctor?.name}</option>
//             </select>

//             <input
//               className="w-full p-2 rounded bg-indigo-700"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <input
//               className="w-full p-2 rounded bg-indigo-700"
//               placeholder="Your Phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />

//             <input
//               className="w-full p-2 rounded bg-indigo-700"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="date"
//               className="w-full p-2 rounded bg-indigo-700"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />

//             {!otpSent ? (
//               <button
//                 onClick={sendOtp}
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
//               >
//                 Send OTP
//               </button>
//             ) : (
//               <>
//                 <input
//                   className="w-full p-2 rounded bg-indigo-700"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />

//                 <button
//                   onClick={verifyOtpAndBook}
//                   className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
//                   disabled={loading}
//                 >
//                   {loading ? "Verifying..." : "Verify & Book Appointment"}
//                 </button>
//               </>
//             )}

//             <div id="recaptcha-container"></div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:col-span-2 space-y-8">
//           <div className="bg-white shadow rounded-lg p-6">
//             <p className="text-sm text-sky-900 mb-2 font-medium">Aapka Care</p>
//             <h1 className="text-2xl font-semibold text-gray-800 mb-1">{doctor?.name}</h1>
//             <span className="text-blue-600 font-medium">{doctor?.speciality}</span>
//             <hr className="my-4" />
//             <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//               {doctor?.about?.trim() || "About information is currently unavailable."}
//             </p>
//           </div>

//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-lg font-semibold mb-4">Education & Experience</h2>

//             <div className="mb-4">
//               <p className="font-semibold text-gray-700">Education</p>
//               <p className="text-sm sm:text-base text-gray-600">
//                 {doctor?.qualification?.trim() || "Not Available."}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
//               <div>
//                 <p className="font-semibold text-gray-700">Field of Expertise</p>
//                 <p className="text-gray-600">{doctor?.speciality?.trim() || "Not Available."}</p>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Years of Practice</p>
//                 <p className="text-gray-600">{doctor?.experience?.trim() || "Not Available."}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-lg font-semibold mb-4">Availability</h2>
//             <p>{doctor?.availability?.trim() || "Not Available."}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDetails;


"use client";

import { useRouter } from "next/navigation";
import {
  FaUserMd,
  FaHospital,
  FaMapMarkerAlt,
  FaRegClock,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import React, { useEffect, useState } from "react";

const DoctorDetails = ({ id }) => {
  const [doctor, setDoctor] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <div className="p-10 text-white text-center">Loading...</div>;
  if (!doctor) return <div className="p-10 text-red-400 text-center">Doctor not found</div>;

  return (
    <>
     <Head>
        <title>{doctor?.name} | Aapka Care</title>
        <meta property="og:title" content={`${doctor?.name} - ${doctor?.speciality}`} />
        <meta property="og:description" content={doctor?.about || "Top-rated doctor available for appointments"} />
        <meta property="og:image" content={doctor?.imgUrl || "/images/noimg.webp"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://aapkacarewebsite.vercel.app/doctor/${id}`} />
      </Head>
      <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Doctor Profile */}
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

          {/* Appointment Booking */}
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

        {/* Right Section */}
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
    </div>
    </>
    
  );
};

export default DoctorDetails;


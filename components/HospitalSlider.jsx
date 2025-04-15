"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import {db} from '@/module/firebaseConfig'
import Link from 'next/link';


const HospitalSlider = () => {
    const [hospitals, setHospitals] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const router = useRouter();

    // Fetch Data from Firestore
    // useEffect(() => {
    //     const fetchHospitals = async () => {
    //         const querySnapshot = await getDocs(collection(db, "AllHospital"));
    //         const hospitalData = querySnapshot.docs.map(doc => ({
    //             id: doc.id,
    //             name: doc.data().name,
    //             img: doc.data().logo, // Assuming logo contains the image URL
    //         }));
    //         setHospitals(hospitalData);
    //     };

    //     fetchHospitals();
    // }, []);

    useEffect(() => {
        const fetchHospitals = async () => {
            const querySnapshot = await getDocs(collection(db, "AllHospital"));
            const hospitalData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                img: doc.data().logo,
            }));
    
            // Remove duplicates based on the first word of the hospital name
            const uniqueMap = new Map();
            for (let hospital of hospitalData) {
                const firstWord = hospital.name.split(" ")[0].toLowerCase();
                if (!uniqueMap.has(firstWord)) {
                    uniqueMap.set(firstWord, hospital);
                }
            }
    
            const filteredHospitals = Array.from(uniqueMap.values());
            setHospitals(filteredHospitals);
        };
    
        fetchHospitals();
    }, []);

    return (
//         <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
//             <div className="max-w-7xl mx-auto">
//                 {/* Title + Navigation Buttons */}
//                 <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//                     <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left mb-4 md:mb-0">
//                         🏥 Our Partner Hospitals
//                     </h2>
//                     <div className="flex space-x-4">
//                         <button
//                             ref={prevRef}
//                             className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
//                         >
//                             <FaChevronLeft className="text-xl" />
//                         </button>
//                         <button
//                             ref={nextRef}
//                             className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
//                         >
//                             <FaChevronRight className="text-xl" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Swiper Slider */}
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={15}
//                     autoplay={{ delay: 4000, disableOnInteraction: false }}
//                     pagination={{ clickable: true }}
//                     navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//                     onSwiper={(swiper) => {
//                         setTimeout(() => {
//                             if (swiper.params) {
//                                 swiper.params.navigation.prevEl = prevRef.current;
//                                 swiper.params.navigation.nextEl = nextRef.current;
//                                 swiper.navigation.init();
//                                 swiper.navigation.update();
//                             }
//                         });
//                     }}
//                     breakpoints={{
//                         640: { slidesPerView: 2, spaceBetween: 20 },
//                         768: { slidesPerView: 3, spaceBetween: 25 },
//                         1024: { slidesPerView: 4, spaceBetween: 30 },
//                     }}
//                     modules={[Navigation, Autoplay]}
//                     className="w-full"
//                 >
//                     {hospitals.length > 0 ? (
//                         hospitals.map((hospital, index) => (
//                             <SwiperSlide key={index} className="flex justify-center">
//                                {/* <Link href={`/hospital?id=${hospital.uId}`}> */}
//                                <div
//                                     className="bg-white rounded-lg  border border-gray-200 transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-between w-full max-w-[500px] sm:max-w-[300px] text-center overflow-hidden"
//                                     onClick={() => router.push(`/hospital?id=${hospital.id}`)}
//                                 >
//                                     <div className="relative w-full h-60">
//                                         <Image
//                                             src={hospital.img}
//                                             alt={hospital.name}
//                                             layout="fill"
//                                             objectFit="fill"
//                                             className="rounded-t-lg"
//                                         />
//                                     </div>
                                    
//                                 </div>
                              
//                                     <div className="bg-white h-20 flex items-center justify-center">
//   <h3 className="text-xl font-bold text-black text-center">
//     {hospital.name}
//   </h3>
// </div>

//                                {/* </Link> */}
//                             </SwiperSlide>


//                         ))
//                     ) : (
//                         <div className="flex justify-center items-center py-10">
//   <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-sky-500"></div>
// </div>
//                     )}
//                 </Swiper>
//             </div>
//         </div>



// <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6">
//   <div className="max-w-7xl mx-auto">
//     {/* Title + Navigation */}
//     <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//       <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left mb-4 md:mb-0">
//         🏥 Our Partner Hospitals
//       </h2>
//       <div className="flex space-x-4">
//         <button
//           ref={prevRef}
//           className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
//         >
//           <FaChevronLeft className="text-lg" />
//         </button>
//         <button
//           ref={nextRef}
//           className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
//         >
//           <FaChevronRight className="text-lg" />
//         </button>
//       </div>
//     </div>

//     {/* Swiper */}
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={16}
//       autoplay={{ delay: 4000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//       onSwiper={(swiper) => {
//         setTimeout(() => {
//           if (swiper.params) {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }
//         });
//       }}
//       breakpoints={{
//         640: { slidesPerView: 1.2, spaceBetween: 16 },
//         768: { slidesPerView: 2.2, spaceBetween: 20 },
//         1024: { slidesPerView: 3, spaceBetween: 24 },
//         1280: { slidesPerView: 4, spaceBetween: 30 },
//       }}
//       modules={[Navigation, Autoplay]}
//       className="w-full"
//     >
//       {hospitals.length > 0 ? (
//         hospitals.map((hospital, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//             <div
//               className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 w-full max-w-sm flex flex-col overflow-hidden cursor-pointer"
//               onClick={() => router.push(`/hospital?id=${hospital.id}`)}
//             >
//               {/* Image */}
//               <div className="relative w-full h-48 sm:h-52 md:h-56">
//                 <Image
//                   src={hospital.img}
//                   alt={hospital.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-xl"
//                 />
//               </div>
          
//               {/* Text */}
//               <div className="px-4 py-4 text-center min-h-[72px] flex items-center justify-center">
//                 <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
//                   {hospital.name}
//                 </h3>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))
//       ) : (
//         <div className="flex justify-center items-center py-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-sky-500"></div>
//         </div>
//       )}
//     </Swiper>
//   </div>
// </div>


<div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
<div className="max-w-7xl mx-auto">
  {/* Title + Navigation */}
  <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
      🏥 Our Partner Hospitals
    </h2>
    <div className="flex space-x-4 justify-center md:justify-end">
      <button
        ref={prevRef}
        className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        ref={nextRef}
        className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
      >
        <FaChevronRight className="text-lg" />
      </button>
    </div>
  </div>

  {/* Swiper Slider */}
  <Swiper
    slidesPerView={1}
    spaceBetween={15}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
    onSwiper={(swiper) => {
      setTimeout(() => {
        if (swiper.params) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      });
    }}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    }}
    modules={[Navigation]}
    className="w-full"
  >
    {hospitals.length > 0 ? (
      hospitals.map((hospital, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div
            className="bg-white rounded-lg border border-gray-200 transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-between w-full max-w-[500px] sm:max-w-[300px] overflow-hidden"
            onClick={() => router.push(`/hospital?id=${hospital.id}`)}
          >
            {/* <div className="relative w-full h-40">
              <Image
                src={hospital.img}
                alt={hospital.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div> */}
            {/* <div className="w-full flex justify-center">
  <div className="relative w-full max-w-md h-45 rounded-t-lg overflow-hidden">
    <Image
      src={hospital.img}
      alt={hospital.name}
      layout="fill"
      objectFit="cover"
      className="rounded-t-lg"
    />
  </div>
</div> */}
<div className="w-full flex justify-center">
  <div className="relative w-full max-w-md h-64 overflow-hidden rounded-t-lg">
    <Image
      src={hospital.img}
      alt={hospital.name}
      fill
      className="object-cover object-center w-full h-full"
    />
  </div>
</div>
            <div className="bg-white h-20 flex items-center justify-center px-4">
              <h3 className="text-md md:text-xl font-[oswald] text-black text-center truncate">
                {hospital.name}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))
    ) : (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-sky-500"></div>
      </div>
    )}
  </Swiper>
</div>
</div>
    );
};

export default HospitalSlider;




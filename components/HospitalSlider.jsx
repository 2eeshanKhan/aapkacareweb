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

const HospitalSlider = () => {
    const [hospitals, setHospitals] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const router = useRouter();

    // Fetch Data from Firestore
    useEffect(() => {
        const fetchHospitals = async () => {
            const querySnapshot = await getDocs(collection(db, "AllHospital"));
            const hospitalData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                img: doc.data().logo, // Assuming logo contains the image URL
            }));
            setHospitals(hospitalData);
        };

        fetchHospitals();
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Title + Navigation Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 text-center md:text-left mb-4 md:mb-0">
                        🏥 Our Partner Hospitals
                    </h2>
                    <div className="flex space-x-4">
                        <button
                            ref={prevRef}
                            className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
                        >
                            <FaChevronLeft className="text-xl" />
                        </button>
                        <button
                            ref={nextRef}
                            className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
                        >
                            <FaChevronRight className="text-xl" />
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
                    modules={[Navigation, Autoplay]}
                    className="w-full"
                >
                    {hospitals.length > 0 ? (
                        hospitals.map((hospital, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div
                                    className="bg-white rounded-lg shadow-lg border border-gray-200 transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col justify-between w-full max-w-[500px] sm:max-w-[300px] text-center overflow-hidden"
                                    onClick={() => router.push(`/hospitals/${hospital.id}`)}
                                >
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={hospital.img}
                                            alt={hospital.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div className="p-2 bg-sky-600">
                                        <h3 className="text-md font-serif text-white">
                                            {hospital.name}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Loading hospitals...</p>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default HospitalSlider;

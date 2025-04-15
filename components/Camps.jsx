"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"; // Next.js Link
import Image from "next/image"; // Optimized Image loading
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const camps = [
  { id: 1, date: "10 Feb, 2024", title: "First Global", image: "/images/camp-1.png" },
  { id: 2, date: "12 Feb, 2024", title: "Anarock Thane Camp", image: "/images/camp-2.png" },
  { id: 3, date: "1 Mar, 2024", title: "Dainik Bhaskar Group", image: "/images/camp-3.png" },
  // { id: 4, date: "1 Mar, 2024", title: "Dainik Bhaskar Group", image: "/images/camp-4.png" },
];

const CareCamps = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="bg-white py-12 px-4 md:px-1 lg:px-1">
      <div className="container mx-auto">
        {/* Title + Navigation Buttons */}
        <div className="flex flex-col md:flex-row my-5 items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Aapka Care Camps
          </h2>
          <div className="flex mt-4 md:mt-0">
            <button
              ref={prevRef}
              className="flex justify-center items-center w-8 h-8 bg-gray-300 hover:bg-gray-400 transition-all rounded-full mx-2"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              ref={nextRef}
              className="flex justify-center items-center w-8 h-8 bg-gray-300 hover:bg-gray-400 transition-all rounded-full mx-2"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {swiperReady && (
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              spaceBetween={20}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Navigation]}
              className="w-full"
            >
              {camps.map((camp) => (
                <SwiperSlide key={camp.id}>
                  <Link href={`/camp-details/${camp.id}`}>
                    <div className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer">
                      <Image
                        src={camp.image}
                        alt={camp.title}
                        width={400}
                        height={224}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-gray-900 text-white px-3 py-1 rounded-bl-lg text-sm md:text-lg">
                        {camp.date} <br />
                        {camp.title}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareCamps;

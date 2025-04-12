"use client";

import React from "react";
import Link from "next/link"; // Next.js Link
import Image from "next/image"; // Optimized Image loading

const BoardMembers = () => {
  const members = [
    {
      id: 1,
      name: "ADITYA PRAKASH",
      role: "Co-Founder",
      image: "/images/fou-1.png",
      bio: "Aditya Prakash is a visionary entrepreneur...",
    },
    {
      id: 2,
      name: "MOHIT AHUJA",
      role: "Co-Founder & CMO",
      image: "/images/fou-2.png",
      bio: "Mohit Ahuja is a marketing expert...",
    },
    {
      id: 3,
      name: "ABHISHEK KUMAR",
      role: "Co-Founder, Aapkacare",
      image: "/images/fou-3.png",
      bio: "Abhishek Kumar is passionate about healthcare...",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Title */}
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-10">
        Our Board Members
      </h2>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {members.map((member) => (
          <Link
            href={`/board-member/${member.id}`}
            key={member.id}
            className="w-full max-w-[340px] transform transition duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl flex flex-col items-center p-6 text-center">
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full border-4 border-blue-500"
              />
              {/* Member Details */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;

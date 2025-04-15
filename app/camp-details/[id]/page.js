"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";


const camps = [
  {
    id: 1,
    date: "10 Feb, 2024",
    title: "First Global",
    image: "/images/camp-1.png",
    city: "Mumbai",
    details: `
We're excited to share that Aapkacare recently collaborated with Mumbai Eye Care Hospital to organize an exceptional Eye Check-up Camp exclusively for the employees and families of First Global at Vashi premises in Navi Mumbai!
Ensuring the well-being of our community members is at the heart of what we do, and this initiative underscores our commitment to prioritize vision health. 

With the support of Mumbai Eye Care Hospital expert team, attendees had the opportunity to undergo comprehensive eye examinations, ensuring early detection of any potential issues and promoting proactive eye care practices. 

We believe that investing in preventive healthcare is crucial, and this Eye Check-up Camp reflects our dedication to fostering a culture of wellness within the First Global family and beyond. 

A huge thank you to all the participants and our partners for making this event a resounding success! Let's continue to prioritize our health and well-being together.`
  },
  {
    id: 2,
    date: "12 Feb, 2024",
    title: "Anarock Thane Camp",
    image: "/images/camp-2.png",
    city: "Mumbai",
    details: `
We're thrilled to announce our recent collaboration with Mumbai Eye Care Hospital to host an exclusive Eye Check-up Camp for the dedicated employees of ANAROCK at both BKC and Thane premises in Mumbai! 

At Aapkacare, we are deeply committed to ensuring the health and well-being of our community members, and this initiative further solidifies our dedication to prioritizing vision health. 

With the support of Mumbai Eye Care Hospital skilled team, attendees had the opportunity to undergo thorough eye examinations, facilitating early detection of potential issues and promoting proactive eye care practices. 

We firmly believe in the importance of preventive healthcare, and this Eye Check-up Camp is a testament to our ongoing efforts to cultivate a culture of wellness within the ANAROCK family and beyond. 

A heartfelt thank you to all the participants and our esteemed partners for contributing to the success of this event! Let's continue to prioritize our health and well-being together.`
  },
  {
    id: 3,
    date: "1 Mar, 2024",
    title: "Dainik Bhaskar Group",
    image: "/images/camp-3.png",
    city: "Naman Corporate Group",
    details: `
Clear Eyes, Bright Ideas! 

We're thrilled to share our recent collaboration with Mumbai Eye Care Hospital in hosting an exceptional Eye Check-up Camp for the amazing team at Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited! 

This successful event provided more than 100 employees with the opportunity to prioritize their vision health through comprehensive check-ups performed by our expert team. 

What did the employees receive? 

Comprehensive eye examinations: Vision tests, screenings for common conditions, and personalized consultations. 

Educational sessions: Learning about the importance of regular eye care, proper eyewear, and preventive measures. 

We're truly inspired by the enthusiasm and engagement of the Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited team in prioritizing their well-being! 

A big thank you to Mumbai Eye Care Hospital for their incredible partnership and dedication to promoting vision health. We also extend our gratitude to Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited for supporting their employees' wellness.`
  },
];

export default function CampDetailsPage() {
  const { id } = useParams();
  const campId = parseInt(id);
  const camp = camps.find((c) => c.id === campId);

  if (!camp) return <div className="text-center text-red-600">Camp not found</div>;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-12 px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold text-blue-800 mb-4"
      >
        {camp.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-sm text-gray-600 flex items-center mb-6"
      >
        <span className="mr-4">📍 <strong>{camp.city}</strong></span>
        <span>🗓 <strong>{camp.date}</strong></span>
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="overflow-hidden rounded-2xl shadow-md mb-8"
      >
        <Image
          src={camp.image}
          alt={camp.title}
          width={1000}
          height={500}
          className="object-cover w-full h-[350px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-[17px] leading-[1.9] whitespace-pre-wrap tracking-wide"
      >
        {camp.details}
      </motion.div>
    </motion.div>
  </div>
  );
}

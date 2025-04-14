// 'use client';
// import React from 'react'
// import  DoctorDetails  from '@/components/Doctors/DoctorDetails'
// import { useSearchParams } from 'next/navigation';
// import { Suspense } from 'react';

// const DoctorDetailsRoute = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <DoctorRoute />
//     </Suspense>
//   );
// };

// const DoctorRoute = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get('id');


//   return <DoctorDetails id={id} />;
// };

// export default DoctorDetailsRoute;

// import DoctorDetails from "@/components/Doctors/DoctorDetails";

// export default async function DoctorPage({ params }) {
//   return <DoctorDetails id={params.id} />;
// }

// import DoctorDetails from "@/components/Doctors/DoctorDetails";

// // No need to make the page function async
// export default async function DoctorPage({ params }) {
//   const { id } = await params;

//   return <DoctorDetails id={id} />;
// }


// app/doctor/[id]/page.js

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import DoctorDetails from "@/components/Doctors/DoctorDetails";

// Utility function to fetch doctor by ID
async function getDoctorById(id) {
  const ref = doc(db, "AllDoctors", id);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ✅ Metadata function (runs on the server)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile does not exist.",
    };
  }

  return {
    title: doctor.name,
    description: doctor.description || `Profile of Dr. ${doctor.name}`,
    openGraph: {
      title: doctor.name,
      description: doctor.description,
      url: `https://yourdomain.com/doctor/${id}`,
      images: [
        {
          url: doctor.imgUrl || "https://yourdomain.com/images/noimg.webp",
          width: 800,
          height: 600,
          alt: doctor.name,
        },
      ],
    },
  };
}

// ✅ Page component
export default async function DoctorPage({ params }) {
  const { id } = await params;
  return <DoctorDetails id={id} />;
}



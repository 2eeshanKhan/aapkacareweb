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

import DoctorDetails from "@/components/Doctors/DoctorDetails";

// No need to make the page function async
export default async function DoctorPage({ params }) {
  const { id } = params;

  return <DoctorDetails id={id} />;
}


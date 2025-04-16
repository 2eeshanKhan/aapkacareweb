// import React from 'react'
// // import HospitalSearch from '@/components/Hospitals/hospitalSearch'
// import HospitalList from '@/components/Hospitals/HospitalList'

// const Hospital = () => {
//   return (
//     <div>
//       {/* <HospitalSearch /> */}
//       <HospitalList />
//     </div>
//   )
// }

// export default Hospital;



'use client';
import HospitalList from '@/components/Hospitals/HospitalList'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ListOfHospitalRoute = () => {
  return (
    <Suspense fallback={<div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
    </div>
    }>
      <HospitalListRoute />
    </Suspense>
  );
};

const HospitalListRoute = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  return <HospitalList id={id} />;
};

export default ListOfHospitalRoute;

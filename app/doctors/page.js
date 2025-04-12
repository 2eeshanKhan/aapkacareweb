// import React from "react";

// import DoctorList from "@/components/Doctors/DoctorList";

// const Doctors = () => {
//     return(
//         <div>
//             <DoctorList />
//         </div>
//     );
// }

// export default Doctors;


'use client';
import DoctorList from "@/components/Doctors/DoctorList";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ListOfDoctorsRoute = () => {
  return (
    <Suspense fallback={<div></div>}>
      <DoctorListRoute />
    </Suspense>
  );
};

const DoctorListRoute = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  return <DoctorList id={id} />;
};

export default ListOfDoctorsRoute;
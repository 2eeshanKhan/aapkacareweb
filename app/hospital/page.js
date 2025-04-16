'use client';
import HospitalDetails from "@/components/Hospitals/HospitalDetails";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const HospitalDetailsRoute = () => {
  return (
    <Suspense fallback={<div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
    </div>
    }>
      <HospitalRoute />
    </Suspense>
  );
};

const HospitalRoute = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  return <HospitalDetails id={id} />;
};

export default HospitalDetailsRoute;
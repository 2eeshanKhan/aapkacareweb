'use client';
import HospitalDetails from "@/components/Hospitals/HospitalDetails";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const HospitalDetailsRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
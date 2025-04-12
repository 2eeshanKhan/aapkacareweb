'use client';
import React from 'react'
import  DoctorDetails  from '@/components/Doctors/DoctorDetails'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const DoctorDetailsRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorRoute />
    </Suspense>
  );
};

const DoctorRoute = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  return <DoctorDetails id={id} />;
};

export default DoctorDetailsRoute;
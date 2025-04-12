'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ toggle, hideSideMenu }) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
    hideSideMenu();
  };

  return (
    <div className={`fixed inset-0 bg-blue-200 transition-opacity ${toggle ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={hideSideMenu}>
      <div className="fixed top-0 left-0 w-[300px] bg-white h-full shadow-lg transform transition-transform">
        {/* Sidebar Header */}
        <div className="bg-[#1EB4FD] p-5 text-white flex justify-between items-center">
          <span className="text-xl font-bold">Aapka Care</span>
          <FaTimes className="text-2xl cursor-pointer" onClick={hideSideMenu} />
        </div>

        {/* Menu Items */}
        <div className="p-5 space-y-3">
          <div className="cursor-pointer text-lg" onClick={() => navigateTo("/hospitals")}>
            Hospitals
          </div>
          <div className="cursor-pointer text-lg" onClick={() => navigateTo("/doctors")}>
            Doctors
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

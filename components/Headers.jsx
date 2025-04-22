'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaHospital,
  FaUserMd,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaEye,
  FaHeartbeat,
  FaTint,
  FaSmile,
  FaBone,
  FaToiletPaper,
  FaWeight,
  FaBlog,
  FaCloudDownloadAlt
} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activePath, setActivePath] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const toggleSideMenu = () => setToggle((prev) => !prev);
  const hideSideMenu = () => setToggle(false);

  const handleNavClick = (path) => {
    setActivePath(path);
    hideSideMenu();
    router.push(path);
  };

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome className="text-blue-600" /> },
    { name: 'Hospitals', path: '/find-hospital', icon: <FaHospital className="text-green-600 md:text-white" /> },
    { name: 'Doctors', path: '/find-doctor', icon: <FaUserMd className="text-indigo-600 md:text-white" /> },
    { name: 'Download', path: 'https://play.google.com/store/apps/details?id=com.fuertedevelopers.aapkacare&hl=en_IN', icon: <FaCloudDownloadAlt className="text-cyan-600 md:text-white" /> },
    {
      name: 'Ophthalmology', icon: <FaEye className="text-purple-600" />, subLinks: [
        { name: 'Cataract', path: '/cataract' },
        { name: 'Lasik Surgery', path: '/lasikSurgery' },
      ],
    },
    {
      name: 'Laparoscopy', icon: <FaHeartbeat className="text-red-600" />, subLinks: [
        { name: 'Hernia', path: '/hernia' },
        { name: 'Appendicitis', path: '/appendicitis' },
        { name: 'Gallbladder stone', path: '/gallbladder-stone' },
      ],
    },
    {
      name: 'Urology', icon: <FaTint className="text-blue-500" />, subLinks: [
        { name: 'Circumcision', path: '/circumcision' },
        { name: 'Kidney Stone', path: '/kidney-stone' },
        { name: 'Hydrocele', path: '/hydrocele' },
        { name: 'Frenuloplasty', path: '/frenuloplasty' },
        { name: 'Kidney Transplant', path: '/kidney-transplant' },
        { name: 'Prostate Enlargement', path: '/prostate-enlargement' },
      ],
    },
    {
      name: 'Cosmetic', icon: <FaSmile className="text-pink-500" />, subLinks: [
        { name: 'Gynecomastia', path: '/gynecomastia' },
        { name: 'Lipoma', path: '/lipoma' },
        { name: 'Mole Removal', path: '/mole-removal' },
      ],
    },
    {
      name: 'Orthopaedic', icon: <FaBone className="text-orange-500" />, subLinks: [
        { name: 'Hip Replacement', path: '/hip-replacement' },
        { name: 'Knee Replacement', path: '/knee-replacement' },
        { name: 'ACL Tear', path: '/acl-tear' },
        { name: 'Disc Injury', path: '/disc-injury' },
        { name: 'Joint Replacement', path: '/joint-replacement' },
        { name: 'Knee Arthroscopy', path: '/knee-arthroscopy' },
        { name: 'Rotator Cuff Repair', path: '/rotator-cuff-repair' },
      ],
    },
    {
      name: 'Proctology', icon: <FaToiletPaper className="text-amber-700" />, subLinks: [
        { name: 'Piles', path: '/piles' },
        { name: 'Fissure', path: '/fissure' },
        { name: 'Fistula', path: '/fistula' },
      ],
    },
    {
      name: 'Vascular', icon: <FaHeartbeat className="text-rose-600" />, subLinks: [
        { name: 'Varicocele', path: '/varicocele' },
        { name: 'Varicose Vein', path: '/varicose-vein' },
      ],
    },
    {
      name: 'Bariatric', icon: <FaWeight className="text-lime-600" />, subLinks: [
        { name: 'Bariatric', path: '/bariatric' },
      ],
    },
    {
      name: 'Blog', icon: <FaBlog className="text-neutral-700" />, subLinks: [
        { name: 'Blog', path: '/blog' },
      ],
    },
  ];

  return (
    <div>
      <div className="px-5 bg-sky-600">
        <div className="flex justify-between items-center h-[70px] text-white">
          <Link href="/">
            <Image src="/aplogo.png" alt="Aapka Care Icon" width={150} height={70} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-4">
            {[menuItems[1], menuItems[2],menuItems[3]].map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                  activePath === item.path ? 'bg-orange-600 text-white' : 'bg-slate-700 text-white hover:bg-orange-600'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <FaBars className="text-3xl cursor-pointer md:hidden" onClick={toggleSideMenu} />
        </div>
      </div>

      {/* Sidebar / Mobile Menu */}
      {/* {toggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50">
          <div className="fixed top-0 left-0 w-72 h-full bg-white text-black p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-sky-700">Aapka Care</h2>
              <FaTimes className="text-2xl cursor-pointer text-sky-800" onClick={hideSideMenu} />
            </div>
            <nav className="space-y-2">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  {item.subLinks ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded-md"
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                      >
                        <span className="flex items-center gap-2">{item.icon} {item.name}</span>
                        {openDropdown === idx ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            className="ml-4 mt-1 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subLinks.map((sub, subIdx) => (
                              <button
                                key={subIdx}
                                onClick={() => handleNavClick(sub.path)}
                                className={`block w-full text-left px-2 py-1 rounded-md hover:bg-gray-200 ${
                                  activePath === sub.path ? 'bg-blue-300 font-semibold' : ''
                                }`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-left ${
                        activePath === item.path ? 'bg-blue-300 font-semibold' : ''
                      }`}
                    >
                      {item.icon} {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )} */}

{toggle && (
  <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40">
    {/* Drawer */}
    <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 text-black p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-sky-700">Aapka Care</h2>
        <FaTimes className="text-2xl cursor-pointer text-sky-800" onClick={hideSideMenu} />
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            {item.subLinks ? (
              <div>
                <button
                  className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded-md"
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                >
                  <span className="flex items-center gap-2">{item.icon} {item.name}</span>
                  {openDropdown === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.div
                      className="ml-4 mt-1 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.subLinks.map((sub, subIdx) => (
                        <button
                          key={subIdx}
                          onClick={() => handleNavClick(sub.path)}
                          className={`block w-full text-left px-2 py-1 rounded-md hover:bg-gray-200 ${
                            activePath === sub.path ? 'bg-blue-300 font-semibold' : ''
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-left ${
                  activePath === item.path ? 'bg-blue-300 font-semibold' : ''
                }`}
              >
                {item.icon} {item.name}
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  </div>
)}

    </div>
  );
};

export default Header;

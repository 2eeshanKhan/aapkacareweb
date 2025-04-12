// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => setToggle((prev) => !prev);
//   const closeMenu = () => setToggle(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Hospitals", path: "/search-hospital" },
//     { name: "Doctors", path: "/search-doctor" },
//     { name: "Contact", path: "/contact" }
//   ];

//   return (
//     <nav className="bg-[#1b7bb7] text-white py-4 px-6">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <span className="text-2xl font-bold cursor-pointer">Aapka Care</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {navItems.map((item, index) => (
//             <Link key={index} href={item.path}>
//               <span className="hover:bg-white hover:text-black px-4 py-2 rounded-md cursor-pointer">
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <FaBars className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
//       </div>

//       {/* Mobile Menu */}
//       {toggle && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeMenu}>
//           <div className="fixed top-0 left-0 w-[250px] h-full bg-white text-black shadow-lg flex flex-col p-5" onClick={(e) => e.stopPropagation()}>
//             <div className="flex justify-between items-center mb-6">
//               <span className="text-xl font-bold">Menu</span>
//               <FaTimes className="text-2xl cursor-pointer" onClick={closeMenu} />
//             </div>
//             {navItems.map((item, index) => (
//               <Link key={index} href={item.path}>
//                 <span className="block py-3 px-2 text-lg hover:bg-gray-200 rounded-md" onClick={closeMenu}>
//                   {item.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

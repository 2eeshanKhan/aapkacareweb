


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";

// const links = [
//     { label: "Home", path: "/" },
//     {
//       name: "Ophthalmology",
//       subLinks: [
//         { name: "Cataract", path: "/cataract" },
//         { name: "Lasik Surgery", path: "/lasikSurgery" },
//       ],
//     },
//     {
//       name: "Laparoscopy",
//       subLinks: [
//         { name: "Hernia", path: "/hernia" },
//         { name: "Appendicitis", path: "/appendicitis" },
//         { name: "Gallbladder stone", path: "/gallbladder-stone" },
//       ],
//     },
//     {
//       name: "Urology",
//       subLinks: [
//         { name: "Circumcision", path: "/circumcision" },
//         { name: "Kidney Stone", path: "/kidney-stone" },
//         { name: "Hydrocele", path: "/hydrocele" },
//         { name: "Frenuloplasty", path: "/frenuloplasty" },
//         { name: "Kidney Transplant", path: "/kidney-transplant" },
//         { name: "Prostate Enlargement", path: "/prostate-enlargement" },
//       ],
//     },
//     {
//       name: "Cosmetic",
//       subLinks: [
//         { name: "Gynecomastia", path: "/gynecomastia" },
//         { name: "Lipoma", path: "/lipoma" },
//         { name: "Mole Removal", path: "/mole-removal" },
//       ],
//     },
//     {
//       name: "Orthopaedic",
//       subLinks: [
//         { name: "Hip Replacement", path: "/hip-replacement" },
//         { name: "Knee Replacement", path: "/knee-replacement" },
//         { name: "ACL Tear", path: "/acl-tear" },
//         { name: "Disc Injury", path: "/disc-injury" },
//         { name: "Joint Replacement", path: "/joint-replacement" },
//         { name: "Knee Arthroscopy", path: "/knee-arthroscopy" },
//         { name: "Rotator Cuff Repair", path: "/rotator-cuff-repair" },
//       ],
//     },
//     {
//       name: "Proctology",
//       subLinks: [
//         { name: "Piles", path: "/piles" },
//         { name: "Fissure", path: "/fissure" },
//         { name: "Fistula", path: "/fistula" },
//       ],
//     },
//     {
//       name: "Vascular",
//       subLinks: [
//         { name: "Varicocele", path: "/varicocele" },
//         { name: "Varicose Vein", path: "/varicose-vein" },
//       ],
//     },
//     { name: "Bariatric", subLinks: [{ name: "Bariatric", path: "/bariatric" }] },
//     { name: "Blog", subLinks: [{ name: "Blog", path: "/blog" }] },
//   ];

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-slate-100 shadow-md w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-1">
       
        
//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden sm:flex space-x-6">
//           {links.map((item, index) => (
//             <div key={index} className="relative group">
//               {item.subLinks ? (
//                 <>
//                   <button
//                     className="flex items-center text-gray-700 font-semibold p-2 hover:text-orange-500"
//                     onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
//                   >
//                     {item.name} <ChevronDown size={16} className="ml-1" />
//                   </button>
//                   <div
//                     className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
//                       openDropdown === index ? "opacity-100" : ""
//                     }`}
//                   >
//                     {item.subLinks.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         href={subItem.path}
//                         className="block px-4 py-2 text-gray-700 hover:bg-[#577399] hover:text-white rounded-md"
//                         onClick={() => setOpenDropdown(null)}
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className="text-gray-700 font-semibold p-2 hover:text-blue-500"
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md p-4">
//           {links.map((item, index) => (
//             <div key={index} className="mb-2">
//               {item.subLinks ? (
//                 <>
//                   <button
//                     className="flex justify-between w-full text-gray-700 font-semibold p-2 hover:text-blue-500"
//                     onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
//                   >
//                     {item.name} <ChevronDown size={16} />
//                   </button>
//                   {openDropdown === index && (
//                     <div className="pl-4">
//                       {item.subLinks.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           href={subItem.path}
//                           className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white rounded-md"
//                           onClick={() => setOpenDropdown(null)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className="block text-gray-700 font-semibold p-2 hover:text-blue-500"
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
    { label: "Home", path: "/" },
    {
      name: "Ophthalmology",
      subLinks: [
        { name: "Cataract", path: "/cataract" },
        { name: "Lasik Surgery", path: "/lasikSurgery" },
      ],
    },
    {
      name: "Laparoscopy",
      subLinks: [
        { name: "Hernia", path: "/hernia" },
        { name: "Appendicitis", path: "/appendicitis" },
        { name: "Gallbladder stone", path: "/gallbladder-stone" },
      ],
    },
    {
      name: "Urology",
      subLinks: [
        { name: "Circumcision", path: "/circumcision" },
        { name: "Kidney Stone", path: "/kidney-stone" },
        { name: "Hydrocele", path: "/hydrocele" },
        { name: "Frenuloplasty", path: "/frenuloplasty" },
        { name: "Kidney Transplant", path: "/kidney-transplant" },
        { name: "Prostate Enlargement", path: "/prostate-enlargement" },
      ],
    },
    {
      name: "Cosmetic",
      subLinks: [
        { name: "Gynecomastia", path: "/gynecomastia" },
        { name: "Lipoma", path: "/lipoma" },
        { name: "Mole Removal", path: "/mole-removal" },
      ],
    },
    {
      name: "Orthopaedic",
      subLinks: [
        { name: "Hip Replacement", path: "/hip-replacement" },
        { name: "Knee Replacement", path: "/knee-replacement" },
        { name: "ACL Tear", path: "/acl-tear" },
        { name: "Disc Injury", path: "/disc-injury" },
        { name: "Joint Replacement", path: "/joint-replacement" },
        { name: "Knee Arthroscopy", path: "/knee-arthroscopy" },
        { name: "Rotator Cuff Repair", path: "/rotator-cuff-repair" },
      ],
    },
    {
      name: "Proctology",
      subLinks: [
        { name: "Piles", path: "/piles" },
        { name: "Fissure", path: "/fissure" },
        { name: "Fistula", path: "/fistula" },
      ],
    },
    {
      name: "Vascular",
      subLinks: [
        { name: "Varicocele", path: "/varicocele" },
        { name: "Varicose Vein", path: "/varicose-vein" },
      ],
    },
    { name: "Bariatric", subLinks: [{ name: "Bariatric", path: "/bariatric" }] },
    { name: "Blog", subLinks: [{ name: "Blog", path: "/blog" }] },
  ];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-slate-100 shadow-md w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-1">
       
        <div className="hidden sm:flex space-x-6">
          {links.map((item, index) => (
            <div key={index} className="relative dropdown-container">
              {item.subLinks ? (
                <>
                  <button
                    className="flex items-center text-gray-700 font-semibold p-2 hover:text-orange-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === index ? null : index);
                    }}
                  >
                    {item.name} <ChevronDown size={16} className="ml-1" />
                  </button>
                  {openDropdown === index && (
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10">
                      {item.subLinks.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-[#577399] hover:text-white rounded-md"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray-700 font-semibold p-2 hover:text-blue-500"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          {links.map((item, index) => (
            <div key={index} className="mb-2">
              {item.subLinks ? (
                <>
                  <button
                    className="flex justify-between w-full text-gray-700 font-semibold p-2 hover:text-blue-500"
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>
                  {openDropdown === index && (
                    <div className="pl-4">
                      {item.subLinks.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white rounded-md"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className="block text-gray-700 font-semibold p-2 hover:text-blue-500"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;




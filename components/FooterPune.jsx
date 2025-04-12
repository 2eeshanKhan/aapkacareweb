"use client";

import React from "react";
import Link from "next/link"; 

const services = [
  {
    title: "Ophthalmology",
    items: [
      { name: "Best Cataract Services in Pune", path: "/cataract" },
      { name: "Best Lasik Surgery Services in Pune", path: "/lasikSurgery" },
    ],
  },
  {
    title: "Laparoscopy",
    items: [
      { name: "Best Hernia Services in Pune", path: "/hernia" },
      { name: "Best Appendicitis Services in Pune", path: "/appendicitis" },
      { name: "Best Gallbladder Stone Services in Pune", path: "/gallbladder-stone" },
    ],
  },
  {
    title: "Urology",
    items: [
      { name: "Best Circumcision Services in Pune", path: "/circumcision" },
      { name: "Best Kidney Stone Services in Pune", path: "/kidney-stone" },
      { name: "Best Hydrocele Services in Pune", path: "/hydrocele" },
      { name: "Best Frenuloplasty Services in Pune", path: "/frenuloplasty" },
      { name: "Best Kidney Transplant Services in Pune", path: "/kidney-transplant" },
      { name: "Best Prostate Enlargement Services in Pune", path: "/prostate-enlargement" },
    ],
  },
  {
    title: "Cosmetic",
    items: [
      { name: "Best Gynecomastia Services in Pune", path: "/gynecomastia" },
      { name: "Best Lipoma Services in Pune", path: "/lipoma" },
      { name: "Best Mole Removal Services in Pune", path: "/mole-removal" },
    ],
  },
  {
    title: "Orthopaedic",
    items: [
      { name: "Best Hip Replacement Services in Pune", path: "/hip-replacement" },
      { name: "Best Knee Replacement Services in Pune", path: "/knee-replacement" },
      { name: "Best ACL Tear Services in Pune", path: "/acl-tear" },
      { name: "Best Disc Injury Services in Pune", path: "/disc-injury" },
      { name: "Best Joint Replacement Services in Pune", path: "/join-replacement" },
      { name: "Best Knee Arthroscopy Services in Pune", path: "/knee-arthroscopy" },
      { name: "Best Rotator Cuff Repair Services in Pune", path: "/rotator-cuff-repair" },
    ],
  },
  {
    title: "Proctology",
    items: [
      { name: "Best Piles Services in Pune", path: "/piles" },
      { name: "Best Fissure Services in Pune", path: "/fissure" },
      { name: "Best Fistula Services in Pune", path: "/fistula" },
    ],
  },
];

const FooterPune = () => {
  return (
    <div className="bg-gray-900 sm:p-10 p-7 text-white">
    <h1 className="text-3xl md:text-2xl font-bold text-left mb-8">Aapka Care Services In Pune</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {services.map((service, index) => (
        <div key={index} className="p-4">
          <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
          <ul className="space-y-2">
            {service.items.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="text-gray-300 hover:text-blue-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FooterPune;

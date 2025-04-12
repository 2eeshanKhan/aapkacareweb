"use client";

import React from "react";
import Link from "next/link"; // Correct Next.js import

const services = [
  {
    title: "Ophthalmology",
    items: [
      { name: "Best Cataract Services in Mumbai", path: "/cataract" },
      { name: "Best Lasik Surgery Services in Mumbai", path: "/lasikSurgery" },
    ],
  },
  {
    title: "Laparoscopy",
    items: [
      { name: "Best Hernia Services in Mumbai", path: "/hernia" },
      { name: "Best Appendicitis Services in Mumbai", path: "/appendicitis" },
      { name: "Best Gallbladder Stone Services in Mumbai", path: "/gallbladder-stone" },
    ],
  },
  {
    title: "Urology",
    items: [
      { name: "Best Circumcision Services in Mumbai", path: "/circumcision" },
      { name: "Best Kidney Stone Services in Mumbai", path: "/kidney-stone" },
      { name: "Best Hydrocele Services in Mumbai", path: "/hydrocele" },
      { name: "Best Frenuloplasty Services in Mumbai", path: "/frenuloplasty" },
      { name: "Best Kidney Transplant Services in Mumbai", path: "/kidney-transplant" },
      { name: "Best Prostate Enlargement Services in Mumbai", path: "/prostate-enlargement" },
    ],
  },
  {
    title: "Cosmetic",
    items: [
      { name: "Best Gynecomastia Services in Mumbai", path: "/gynecomastia" },
      { name: "Best Lipoma Services in Mumbai", path: "/lipoma" },
      { name: "Best Mole Removal Services in Mumbai", path: "/mole-removal" },
    ],
  },
  {
    title: "Orthopaedic",
    items: [
      { name: "Best Hip Replacement Services in Mumbai", path: "/hip-replacement" },
      { name: "Best Knee Replacement Services in Mumbai", path: "/knee-replacement" },
      { name: "Best ACL Tear Services in Mumbai", path: "/acl-tear" },
      { name: "Best Disc Injury Services in Mumbai", path: "/disc-injury" },
      { name: "Best Joint Replacement Services in Mumbai", path: "/joint-replacement" },
      { name: "Best Knee Arthroscopy Services in Mumbai", path: "/knee-arthroscopy" },
      { name: "Best Rotator Cuff Repair Services in Mumbai", path: "/rotator-cuff-repair" },
    ],
  },
  {
    title: "Proctology",
    items: [
      { name: "Best Piles Services in Mumbai", path: "/piles" },
      { name: "Best Fissure Services in Mumbai", path: "/fissure" },
      { name: "Best Fistula Services in Mumbai", path: "/fistula" },
    ],
  },
];

const FooterMumbai = () => {
  return (
    <div className="bg-gray-900 sm:p-10 p-7 text-white">
      <h1 className="text-3xl md:text-2xl font-bold text-left mb-6">Aapka Care Services In Mumbai</h1>
      
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

export default FooterMumbai;

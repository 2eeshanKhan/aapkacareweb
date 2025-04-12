import React from "react";
import { motion } from "framer-motion";

const insurances = [
  { name: "Acko Health Insurance", logo: "/images/hospital-img/acko.png" },
  { name: "Aditya Birla Health Insurance", logo: "/images/hospital-img/aditya-birla.png" },
  { name: "Bajaj Allianz", logo: "/images/hospital-img/bajaj-allianz.png" },
  { name: "Bharti AXA Health Insurance", logo: "/images/hospital-img/bharti-axa.png" },
  { name: "Cholamandalam MS Health Insurance", logo: "/images/hospital-img/cholamandalam.png" },
  { name: "Digit Health Insurance", logo: "/images/hospital-img/digit.png" },
  { name: "Edelweiss Health Insurance", logo: "/images/hospital-img/edelweiss.png" },
  { name: "Future Generali Health Insurance", logo: "/images/hospital-img/future-generali.png" },
  { name: "HDFC Ergo", logo: "/images/hospital-img/hdfc-ergo.png" },
  { name: "ICICI Lombard", logo: "/images/hospital-img/icici-lombard.png" },
  { name: "IFFCO Tokio Health Insurance", logo: "/images/hospital-img/iffco-tokio.png" },
  { name: "Kotak Health Insurance", logo: "/images/hospital-img/kotak.png" },
  { name: "Liberty Health Insurance", logo: "/images/hospital-img/liberty.png" },
  { name: "Manipal Cigna Health Insurance", logo: "/images/hospital-img/manipal-cigna.png" },
  { name: "Max Bupa Health Insurance", logo: "/images/hospital-img/max-bupa.png" },
  { name: "National Insurance", logo: "/images/hospital-img/national.png" },
  { name: "New India Assurance", logo: "/images/hospital-img/new-india.png" },
  { name: "Navi General", logo: "/images/hospital-img/navi.png" },
  { name: "Oriental Insurance", logo: "/images/hospital-img/oriental.png" },
  { name: "Raheja QBE", logo: "/images/hospital-img/raheja-qbe.png" },
  { name: "Reliance General Insurance", logo: "/images/hospital-img/reliance.png" },
  { name: "Royal Sundaram General Insurance", logo: "/images/hospital-img/royal-sundaram.png" },
  { name: "SBI Health Insurance", logo: "/images/hospital-img/sbi.png" },
  { name: "Shriram General Insurance", logo: "/images/hospital-img/shriram.png" },
  { name: "Star Health Insurance", logo: "/images/hospital-img/star.png" },
  { name: "TATA AIG Health Insurance", logo: "/images/hospital-img/tata-aig.png" },
  { name: "United India Insurance", logo: "/images/hospital-img/united-india.png" },
  { name: "Universal Sompo", logo: "/images/hospital-img/universal-sompo.png" }
];

const Insurances = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-900/50 rounded-xl shadow-lg px-4 sm:px-6 lg:px-10 py-8 backdrop-blur-lg">
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center mb-6">
    Available Insurances
  </h2>

  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
    {insurances.map((insurance, index) => (
      <motion.div
        key={index}
        className="bg-gray-800/50 flex flex-col items-center justify-center space-y-3 px-4 py-5 sm:p-5 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transition transform hover:scale-105 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={insurance.logo}
          alt={insurance.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md"
        />
        <span className="text-white text-sm sm:text-base font-medium text-center">
          {insurance.name}
        </span>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default Insurances;

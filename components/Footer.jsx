import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-5 flex justify-between items-center">
      <div className="text-sm">
        <p>Copyright &copy; 2025 All Rights Reserved by AAPKA CARE.</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/aapkacare" className="p-2 rounded-full bg-blue-600 transition">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/aapkacare" className="p-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@Aapkacare" className="p-2 rounded-full bg-red-600 transition">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/aapkacare/" className="p-2 rounded-full bg-blue-600 transition">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
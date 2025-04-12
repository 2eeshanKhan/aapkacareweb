import React from 'react';
import Header from '@/components/Headers';
import FooterMumbai from './FooterMumbai';
import FooterPune from './FooterPune';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <section className=" text-black min-h-[800px] justify-center">
        {children}
      </section>
      <FooterMumbai />
      <FooterPune />
      <Footer />

     
    </>
  );
};

export default Layout;

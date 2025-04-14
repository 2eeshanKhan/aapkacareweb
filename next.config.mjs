/** @type {import('next').NextConfig} */
const nextConfig = {
 
  trailingSlash: true,
  assetPrefix: '/',
  images: {
      domains: ["firebasestorage.googleapis.com", "encrypted-tbn0.gstatic.com","media.istockphoto.com","lh3.googleusercontent.com","www.medicoverhospitals.in","cdn.hexahealth.com"],
      unoptimized: true,  
    },
  
};

export default nextConfig;

import React from 'react';

const MainTop = () => {
    return (
    <>
    <div className="bg-[#E2F2FD] py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 px-6">
          <h2 className="text-3xl font-semibold">
            Your Health Care Journey <br />
            Made <span className="text-blue-600 italic font-bold">Hassle-Free</span>
          </h2>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <img
                src="/images/main-1.png"
                alt="Consultation"
                className="mx-auto h-12"
              />
              <h3 className="text-xl font-bold mt-2">10000+</h3>
              <p className="text-gray-600">Hassle-free Consultation</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <img
                src="/images/main-1.png"
                alt="Surgery"
                className="mx-auto h-12"
              />
              <h3 className="text-xl font-bold mt-2">5000+</h3>
              <p className="text-gray-600">Smooth Surgeries</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <img
                src="/images/main-1.png"
                alt="Doctors"
                className="mx-auto h-12"
              />
              <h3 className="text-xl font-bold mt-2">500+</h3>
              <p className="text-gray-600">Expert Doctors</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <img
                src="/images/main-4.png"
                alt="Hospital"
                className="mx-auto h-12"
              />
              <h3 className="text-xl font-bold mt-2">100+</h3>
              <p className="text-gray-600">Trusted Hospitals</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/images/main-docter.png"
            alt="Doctor"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </div>
    </>
    );
}

export default MainTop;

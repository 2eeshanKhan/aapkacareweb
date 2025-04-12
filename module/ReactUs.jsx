import React from 'react';

const ReactUs = () => {
    return (
    <>
    <section className="bg-[#E2F2FD] py-12 px-6">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">About our Doctors & Hospitals</h2>
        <p className="mt-4 text-gray-700">
          At Aapkacare Health we provide well-experienced and highly qualified doctors to give you the most accurate diagnosis and health care advice.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
        <img
          src="/images/about-1.png"
          alt="Doctor with stethoscope"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 text-gray-700">
          <p>
            To consult our skilled surgeons for any problems or to undergo cataract surgery,
            visit the nearest Eye clinic in Pune with Aapkacare Health. You can also schedule an
            online appointment and speak with the doctor live on video. Make an appointment at
            Aapkacare Health to speak with the Eye surgeons in Pune. The Pune Aapkacare Health
            multi-specialty clinics for Ophthal are sanitised, COVID-safe, and well-equipped.
            Book an appointment for the most advanced cataract procedure in Pune.
          </p>
        </div>
      </div>
      </section>
      <section className="bg-white py-12 px-6">
      <div className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-gray-900">
          <h2 className="text-3xl font-bold">Are you worried about the cost of cataract treatment?</h2>
          <p className="mt-4 text-gray-700">
            Aapkacare Health finds you the most affordable prices for your Cataract in Pune. Even so,
            the exact cost is hard to pinpoint since your Cataract surgery cost depends on various factors
            such as age, medical history, type of surgery, etc. Call us today to get a personalised cost breakdown.
          </p>
        </div>
        <img
          src="/images/about-2.png"
          alt="Hospital scene"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>
      </section>
    </>
    );
}

export default ReactUs;

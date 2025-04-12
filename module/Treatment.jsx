import React from 'react';

const Treatment = () => {
    return (
        <>
        <div className="flex justify-center bg-blue-100 py-6 px-4 sm:px-10 lg:px-20">
            <div className="flex flex-wrap md:flex-nowrap items-center p-6 max-w-full gap-6">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src="/images/docter.png" alt="Doctor" className="rounded-lg h-[300px] md:h-[400px] w-auto" />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment with Aapkacare</h2>
                    <p className="text-gray-600 mt-2">
                    At Aapkacare, we provide comprehensive mole removal surgery services. Our experienced dermatologists will thoroughly evaluate and offer the most suitable treatment options tailored to your needs. We ensure a safe and efficient mole removal procedure.
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Treatment;
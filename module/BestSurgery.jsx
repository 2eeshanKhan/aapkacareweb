'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BestSurgery = () => {
    const [selectedOption, setSelectedOption] = useState("doctor");
    const router = useRouter();

    const handleFindClick = () => {
        if (selectedOption === "doctor") {
            router.push('/docterSearch');
        } else {
            router.push('/hospitalSearch');
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-900">Best Surgeries</h2>
            <p className="text-gray-600">AapkaCare Provides Top Doctors</p>
            <div className="mt-4 w-full">
                <select 
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="doctor">Doctor</option>
                    <option value="hospital">Hospital</option>
                </select>
            </div>
            <button 
                className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={handleFindClick}
            >
                Find
            </button>
        </div>
    );
};

export default BestSurgery;
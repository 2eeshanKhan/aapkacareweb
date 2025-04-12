import React from 'react';
const features = [
    { text: '30 Min Procedure', checked: true },
    { text: 'Same Discharge', checked: true },
    { text: 'No Cost EMI', checked: true },
    { text: 'Free Pick Up & Drop', checked: true },
    { text: 'Complete Insurance Support', checked: true }
  ];
const Check = () => {
    return (
    <>
    <div className="sm:flex flex-row space-x-4 p-4 bg-white rounded-lg">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-400 text-white">
            {feature.checked ? '✔️' : '❌'}
          </div>
          <span className="ml-2">{feature.text}</span>
        </div>
      ))}
    </div>  
        </>
    );
}

export default Check;

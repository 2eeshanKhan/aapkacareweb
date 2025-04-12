import React from 'react';

const ReasonCard = ({ icon, title, description }) => {
    return (
      <div className="p-4 text-center">
        <img src={icon} alt={title} className="mx-auto w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };

export default ReasonCard;

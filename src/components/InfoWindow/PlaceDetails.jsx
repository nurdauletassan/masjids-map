import React from 'react';

const PlaceDetails = ({ place }) => {
  return (
    <div className="w-64 p-0 animate-fade-in">
      {/* Image */}
      <div className="w-full h-32 bg-gray-200 rounded-t-lg overflow-hidden mb-3">
        <img 
          src={place.photo} 
          alt={place.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200.png?text=Photo+Not+Available";
          }}
        />
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {place.name}
        </h3>
        
        {/* Address */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-600 leading-relaxed">
            {place.address}
          </p>
        </div>
        
        {/* Description */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-700 leading-relaxed">
            {place.description}
          </p>
        </div>
        
        {/* Action button */}
        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;

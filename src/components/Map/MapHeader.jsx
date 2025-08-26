import React from 'react';

const MapHeader = () => {
  return (
    <>
      {/* Mobile Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 md:hidden">
        <h1 className="text-lg font-semibold text-gray-900 text-center">
          Prayer Places Map
        </h1>
        <p className="text-sm text-gray-600 text-center mt-1">
          Find nearby namazkhana locations
        </p>
      </div>
      
      {/* Desktop Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-sm border-b border-gray-200 p-6 hidden md:block">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            Prayer Places Map
          </h1>
          <p className="text-gray-600 mt-1">
            Discover namazkhana locations across Almaty
          </p>
        </div>
      </div>
    </>
  );
};

export default MapHeader;

import React from 'react';

const MapInfoPanel = ({ placesCount, markersLoaded }) => {
  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-80 z-[1000]">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-gray-900">
            {placesCount} Prayer Places
          </span>
          {!markersLoaded && (
            <span className="text-xs text-gray-500">(Loading markers...)</span>
          )}
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Tap on markers to see details. Each marker shows a prayer place location.
        </p>
        {markersLoaded && (
          <p className="text-xs text-green-600 mt-2">
            ✓ Markers loaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default MapInfoPanel;

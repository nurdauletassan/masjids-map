import React from 'react';

const LoadingSpinner = ({ message = "Loading map...", apiKey }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {message}
        </h2>
        <p className="text-gray-600">
          Please wait while we load the map.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          API Key: {apiKey ? 'Present' : 'Missing'}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

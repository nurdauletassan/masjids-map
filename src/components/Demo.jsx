import React from 'react';
import NamazkhanaMap from './NamazkhanaMap';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Namazkhana Finder
              </h1>
              <p className="text-gray-600 mt-1">
                Find prayer places near you
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Add Location
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <div className="relative">
        <NamazkhanaMap />
      </div>

      {/* Mobile Bottom Sheet (optional) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-[999]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">
              Tap markers for details
            </p>
            <p className="text-xs text-gray-500">
              Zoom in to separate clusters
            </p>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;

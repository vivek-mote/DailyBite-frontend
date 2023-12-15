// PageNotFound.js
import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700">Page not found</p>
      </div>
    </div>
  );
};

export default PageNotFound;

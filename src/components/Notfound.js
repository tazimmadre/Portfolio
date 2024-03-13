import React from 'react';

const NotFound = () => {
  return (
    // lets redesign the 404 page using tailwindcss classes to make it look better
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <h1 className="text-9xl uppercase font-black ">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
    </div>
  );
};

export default NotFound;
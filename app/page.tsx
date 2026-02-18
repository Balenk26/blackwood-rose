"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Maintenance from './components/Maintenance';

export default function Home() {
  // TOGGLE THIS TO TRUE TO SHOW MAINTENANCE PAGE
  const isMaintenanceMode = true; 

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 flex items-center justify-center h-[80vh] bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            The Art of Living.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto mb-8 font-light">
            Timeless furniture, sourced for the discerning home.
          </p>
          <button className="bg-black text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-all uppercase">
            View Collection
          </button>
        </div>
      </div>
    </main>
  );
}
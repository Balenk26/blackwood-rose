"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

// Expanded database (12 items) so we have enough to scroll!
const products = [
  { id: 1, name: 'The Onyx Lounge Chair', price: 1250, color: 'Black', material: 'Leather' },
  { id: 2, name: 'Marble & Walnut Console', price: 890, color: 'Brown', material: 'Wood' },
  { id: 3, name: 'Velvet Accent Sofa', price: 2100, color: 'Green', material: 'Velvet' },
  { id: 4, name: 'Minimalist Oak Dining Table', price: 1850, color: 'Natural', material: 'Wood' },
  { id: 5, name: 'Brushed Brass Floor Lamp', price: 420, color: 'Gold', material: 'Metal' },
  { id: 6, name: 'Bouclé Armchair', price: 950, color: 'White', material: 'Fabric' },
  { id: 7, name: 'Travertine Coffee Table', price: 1100, color: 'Beige', material: 'Stone' },
  { id: 8, name: 'Charcoal Linen Bed Frame', price: 1600, color: 'Grey', material: 'Fabric' },
  { id: 9, name: 'Ebonized Ash Credenza', price: 2400, color: 'Black', material: 'Wood' },
  { id: 10, name: 'Bouclé Ottoman', price: 450, color: 'White', material: 'Fabric' },
  { id: 11, name: 'Walnut Sideboard', price: 1950, color: 'Brown', material: 'Wood' },
  { id: 12, name: 'Glass & Brass Pendant', price: 680, color: 'Gold', material: 'Metal' },
];

const colors = ['All', 'Black', 'White', 'Grey', 'Beige', 'Natural', 'Brown', 'Green', 'Gold'];
const materials = ['All', 'Wood', 'Fabric', 'Velvet', 'Leather', 'Metal', 'Stone'];

export default function ShopPage() {
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);

  const filteredProducts = products.filter(product => {
    const colorMatch = selectedColor === 'All' || product.color === selectedColor;
    const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial;
    const priceMatch = product.price <= maxPrice;
    return colorMatch && materialMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col relative">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-16 pb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-[0.2em] uppercase mb-6">
          The Collection
        </h1>
        <div className="w-12 h-[1px] bg-stone-300"></div>
      </div>

      {/* Main Content Area - Note the 'relative' and 'items-start' for the sticky effect */}
      <main className="flex-grow flex flex-col md:flex-row px-6 md:px-12 pb-32 max-w-[1400px] mx-auto w-full gap-12 items-start relative">
        
        {/* Left Side: STICKY Filter Sidebar */}
        {/* 'md:sticky top-32 h-fit' is the magic code that makes it follow you */}
        <aside className="w-full md:w-64 flex-shrink-0 md:sticky top-32 h-fit space-y-10 bg-[#FAFAFA] z-10 pb-4">
          
          {/* Color Filter */}
          <div>
            <h3 className="text-[10px] text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-200 pb-2">Color</h3>
            <ul className="flex flex-wrap gap-2">
              {colors.map(color => (
                <li key={color}>
                  <button 
                    onClick={() => setSelectedColor(color)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                      selectedColor === color 
                        ? 'bg-stone-900 text-white border-stone-900' 
                        : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-900'
                    }`}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Material Filter */}
          <div>
            <h3 className="text-[10px] text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-200 pb-2">Material</h3>
            <ul className="flex flex-wrap gap-2">
              {materials.map(material => (
                <li key={material}>
                  <button 
                    onClick={() => setSelectedMaterial(material)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                      selectedMaterial === material 
                        ? 'bg-stone-900 text-white border-stone-900' 
                        : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-900'
                    }`}
                  >
                    {material}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Slider */}
          <div>
            <h3 className="text-[10px] text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-200 pb-2 flex justify-between">
              <span>Max Price</span>
              <span className="text-stone-900">£{maxPrice}</span>
            </h3>
            <input 
              type="range" 
              min="0" 
              max="3000" 
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-stone-900"
            />
          </div>

        </aside>
        
        {/* Right Side: 3-Column Product Grid */}
        <div className="flex-grow w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col group cursor-pointer animate-fade-in">
                
                <div className="w-full aspect-[4/5] bg-stone-200 mb-6 flex items-center justify-center overflow-hidden relative">
                  <span className="text-[10px] text-stone-400 tracking-widest uppercase font-light group-hover:scale-105 transition-transform duration-700">
                    Image View
                  </span>
                  {/* Subtle hover overlay to make it feel interactive */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex flex-col text-left space-y-1">
                  <h3 className="text-xs text-stone-900 tracking-[0.15em] uppercase font-light">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 tracking-wider">
                    £{product.price.toLocaleString()}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State message */}
          {filteredProducts.length === 0 && (
            <div className="w-full text-center py-32 border border-stone-200 bg-white">
              <p className="text-stone-500 tracking-widest uppercase text-xs mb-6">No pieces found matching your criteria.</p>
              <button 
                onClick={() => {setSelectedColor('All'); setSelectedMaterial('All'); setMaxPrice(3000);}}
                className="text-[10px] text-stone-900 border border-stone-900 px-6 py-3 uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const products = [
  { id: 1, name: 'The Onyx Lounge Chair', price: 1250, color: 'Black', material: 'Leather', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Marble & Walnut Console', price: 890, color: 'Brown', material: 'Wood', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Velvet Accent Sofa', price: 2100, color: 'Green', material: 'Velvet', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Minimalist Oak Dining Table', price: 1850, color: 'Natural', material: 'Wood', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Brushed Brass Floor Lamp', price: 420, color: 'Gold', material: 'Metal', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Bouclé Armchair', price: 950, color: 'White', material: 'Fabric', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Travertine Coffee Table', price: 1100, color: 'Beige', material: 'Stone', image: 'https://images.unsplash.com/photo-1633505871343-85bb6cb14e21?auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'Charcoal Linen Bed Frame', price: 1600, color: 'Grey', material: 'Fabric', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80' },
  { id: 9, name: 'Ebonized Ash Credenza', price: 2400, color: 'Black', material: 'Wood', image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80' },
  { id: 10, name: 'Bouclé Ottoman', price: 450, color: 'White', material: 'Fabric', image: 'https://images.unsplash.com/photo-1567016432779-094069806ea1?auto=format&fit=crop&w=800&q=80' },
  { id: 11, name: 'Walnut Sideboard', price: 1950, color: 'Brown', material: 'Wood', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80' },
  { id: 12, name: 'Glass & Brass Pendant', price: 680, color: 'Gold', material: 'Metal', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
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

  const resetFilters = () => {
    setSelectedColor('All');
    setSelectedMaterial('All');
    setMaxPrice(3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      <Navbar />
      
      <div className="pt-20 pb-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-serif text-black tracking-[0.2em] uppercase mb-6">
          The Collection
        </h1>
        <div className="w-16 h-[2px] bg-[#D4AF37]"></div>
      </div>

      <main 
        className="px-6 md:px-12 pb-32 max-w-[1500px] mx-auto w-full"
        style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem', alignItems: 'start' }}
      >
        
        <aside 
          className="space-y-10 bg-white z-10 pr-6 pb-8"
          style={{ position: 'sticky', top: '8rem', height: 'fit-content', maxHeight: '80vh', overflowY: 'auto' }}
        >
          
          <div className="pb-2 border-b-2 border-black">
            <h2 className="text-lg font-serif text-black tracking-[0.15em] uppercase">
              Blackwood <span className="text-[#D4AF37]">&</span> Rose
            </h2>
            <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] mt-2">
              Filter Collection
            </p>
          </div>

          <div>
            <h3 className="text-[10px] text-black font-bold uppercase tracking-[0.2em] mb-4 border-b border-gray-200 pb-2">Color</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {colors.map(color => (
                <li key={color} className="p-0 m-0">
                  <button 
                    onClick={() => setSelectedColor(color)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 transition-all duration-300 border ${
                      selectedColor === color 
                        ? 'bg-black text-white border-black font-bold shadow-sm' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                    }`}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] text-black font-bold uppercase tracking-[0.2em] mb-4 border-b border-gray-200 pb-2">Material</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {materials.map(material => (
                <li key={material} className="p-0 m-0">
                  <button 
                    onClick={() => setSelectedMaterial(material)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 transition-all duration-300 border ${
                      selectedMaterial === material 
                        ? 'bg-black text-white border-black font-bold shadow-sm' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                    }`}
                  >
                    {material}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] text-black font-bold uppercase tracking-[0.2em] mb-4 border-b border-gray-200 pb-2 flex justify-between">
              <span>Max Price</span>
              <span className="text-black font-bold">£{maxPrice}</span>
            </h3>
            <input 
              type="range" 
              min="0" 
              max="3000" 
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black"
            />
          </div>

          <div className="pt-4">
            <button 
              onClick={resetFilters}
              className="w-full text-[10px] bg-white text-black border border-black px-4 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>

        </aside>
        
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              
              /* HERE IS THE MAGIC LINK WRAPPER */
              <Link href={`/preview/shop/${product.id}`} key={product.id} className="flex flex-col group cursor-pointer animate-fade-in">
                
                <div className="w-full aspect-[4/5] bg-gray-100 mb-6 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex flex-col text-left space-y-2 border-b border-transparent group-hover:border-black transition-colors pb-2">
                  <h3 className="text-xs text-black font-bold tracking-[0.15em] uppercase">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] tracking-wider font-medium">
                    £{product.price.toLocaleString()}
                  </p>
                </div>

              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="w-full text-center py-32 bg-gray-50 border border-gray-200">
              <p className="text-black tracking-widest uppercase text-xs mb-6">No pieces found matching your criteria.</p>
              <button 
                onClick={resetFilters}
                className="text-[10px] bg-black text-white px-8 py-4 uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
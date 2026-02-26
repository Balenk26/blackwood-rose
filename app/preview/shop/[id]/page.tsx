"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';

const products = [
  { id: 1, name: 'The Onyx Lounge Chair', price: 1250, color: 'Black', material: 'Leather', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80', description: 'A masterful blend of mid-century minimalism and modern comfort. Upholstered in premium Italian leather over a sculpted matte black steel frame.' },
  { id: 2, name: 'Marble & Walnut Console', price: 890, color: 'Brown', material: 'Wood', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80', description: 'Carved from rich, sustainably sourced walnut and topped with a solid slab of Carrara marble. The perfect anchor for an elegant entryway.' },
  { id: 3, name: 'Velvet Accent Sofa', price: 2100, color: 'Green', material: 'Velvet', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', description: 'Draped in emerald green velvet, this sofa features deep, plush seating and clean, geometric lines. A true statement piece.' },
  { id: 4, name: 'Minimalist Oak Dining Table', price: 1850, color: 'Natural', material: 'Wood', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80', description: 'Crafted from solid European oak with a bleached finish to highlight the natural wood grain. Seats six comfortably.' },
  { id: 5, name: 'Brushed Brass Floor Lamp', price: 420, color: 'Gold', material: 'Metal', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80', description: 'A slender, architectural silhouette cast in solid brushed brass. Casts a warm, ambient glow ideal for reading nooks.' },
  { id: 6, name: 'Bouclé Armchair', price: 950, color: 'White', material: 'Fabric', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80', description: 'Wrapped in highly textured, cloud-like white bouclé fabric. Features a curved backrest that hugs the sitter.' },
  { id: 7, name: 'Travertine Coffee Table', price: 1100, color: 'Beige', material: 'Stone', image: 'https://images.unsplash.com/photo-1633505871343-85bb6cb14e21?auto=format&fit=crop&w=800&q=80', description: 'A monolithic design carved from solid Italian travertine. Its porous texture and warm beige tones bring organic luxury to any room.' },
  { id: 8, name: 'Charcoal Linen Bed Frame', price: 1600, color: 'Grey', material: 'Fabric', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', description: 'An understated, low-profile bed frame fully upholstered in breathable, heavy-weight charcoal linen.' },
  { id: 9, name: 'Ebonized Ash Credenza', price: 2400, color: 'Black', material: 'Wood', image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80', description: 'Finished in a striking ebonized black that still allows the beautiful ash wood grain to show through. Features soft-close fluted doors.' },
  { id: 10, name: 'Bouclé Ottoman', price: 450, color: 'White', material: 'Fabric', image: 'https://images.unsplash.com/photo-1567016432779-094069806ea1?auto=format&fit=crop&w=800&q=80', description: 'The perfect companion to our Bouclé Armchair, doubling as a footrest or an extra seat.' },
  { id: 11, name: 'Walnut Sideboard', price: 1950, color: 'Brown', material: 'Wood', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80', description: 'Sleek, handle-less design emphasizing the continuous grain of the premium walnut veneer.' },
  { id: 12, name: 'Glass & Brass Pendant', price: 680, color: 'Gold', material: 'Metal', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'A blown glass globe suspended by a rigid brushed brass stem. Perfect hung in multiples above a kitchen island.' },
];

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === Number(params.id));
  
  // Connect to the brain
  const cartContext = useCart();
  
  // State to manage what the button says
  const [buttonText, setButtonText] = useState('Add to Cart');

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col text-black">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="tracking-widest uppercase text-sm">Piece not found.</p>
        </div>
      </div>
    );
  }

  // The function that runs when you click the button
  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart(product); // Sends to memory bank
      setButtonText('Added to Cart ✓'); // Changes text to show success
      
      // Changes it back after 2 seconds
      setTimeout(() => {
        setButtonText('Add to Cart');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      <Navbar />
      
      <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 pt-10">
        <Link href="/preview/shop" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">
          &larr; Back to Collection
        </Link>
      </div>

      <main className="flex flex-col md:flex-row max-w-[1500px] mx-auto w-full px-6 md:px-12 py-16 gap-16 md:gap-24 items-start">
        
        <div className="w-full md:w-1/2 aspect-[4/5] bg-gray-100 overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:sticky md:top-32 h-fit">
          
          <div className="border-b border-gray-200 pb-10 mb-10">
            <h1 className="text-3xl md:text-5xl font-serif tracking-[0.1em] uppercase mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-[#D4AF37] tracking-wider font-medium">
              £{product.price.toLocaleString()}
            </p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed tracking-wide mb-10 max-w-lg">
            {product.description}
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] w-32">Material</span>
              <span className="text-xs tracking-wider uppercase">{product.material}</span>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] w-32">Color</span>
              <span className="text-xs tracking-wider uppercase">{product.color}</span>
            </div>
          </div>

          {/* THE NEW WORKING BUTTON */}
          <button 
            onClick={handleAddToCart}
            className={`w-full py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
              buttonText === 'Add to Cart' 
                ? 'bg-black text-white hover:bg-[#D4AF37] hover:text-black' 
                : 'bg-[#D4AF37] text-black'
            }`}
          >
            {buttonText}
          </button>
          
          <p className="text-[9px] text-gray-400 tracking-widest uppercase text-center mt-6">
            Complimentary white-glove delivery on all orders
          </p>

        </div>
      </main>
    </div>
  );
}
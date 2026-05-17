"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminImporter() {
  const [loading, setLoading] = useState(false);
  const [supplierUrl, setSupplierUrl] = useState('');
  
  // Comprehensive product state tracking all your new options
  const [productData, setProductData] = useState({
    name: '',
    sku: '',
    category: 'living',
    price: 0,
    deliveryCharge: 0,
    deliveryTime: '3-5 Business Days',
    quantity: 1,
    colour: '',
    material: '',
    dimensions: '',
    description: '',
    features: [''],
    images: [''] // Array holding multiple image URLs
  });

  // Handle running the AI Scraper & Rewrite engine
  const handleAiImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supplierUrl) return alert('Please paste a supplier link first.');
    
    setLoading(true);
    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: supplierUrl })
      });
      
      const data = await res.json();
      if (data.success) {
        // Populate the form automatically with what the AI found and rewrote
        setProductData({
          ...productData,
          name: data.product.name,
          sku: data.product.sku,
          category: data.product.category || 'living',
          price: data.product.price,
          colour: data.product.colour || '',
          material: data.product.material || '',
          dimensions: data.product.dimensions || '',
          description: data.product.description,
          features: data.product.features || [''],
          images: data.product.images || ['']
        });
      } else {
        alert('AI Scrape failed: ' + data.error);
      }
    } catch (err) {
      alert('An error occurred while connecting to the AI engine.');
    } finally {
      setLoading(false);
    }
  };

  // Handle saving the verified data straight to your live database
  const handleSaveProduct = async () => {
    try {
      const res = await fetch('/api/import-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      const data = await res.json();
      if (data.success) {
        alert('✨ Masterpiece successfully published to Blackwood & Rose!');
        // Reset form
        setSupplierUrl('');
      } else {
        alert('Database Error: ' + data.error);
      }
    } catch (err) {
      alert('Failed to connect to database.');
    }
  };

  // Helper to add/modify multiple images
  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...productData.images];
    updatedImages[index] = value;
    setProductData({ ...productData, images: updatedImages });
  };

  const addImageField = () => {
    setProductData({ ...productData, images: [...productData.images, ''] });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-24">
      {/* Top Banner */}
      <div className="bg-black text-[#D4AF37] py-8 border-b border-gray-800 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-serif tracking-wide uppercase">Automated Dropship Importer</h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Blackwood & Rose Exclusive Control Panel</p>
        </div>
        <Link href="/preview" className="text-xs uppercase tracking-widest border border-[#D4AF37] px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition-all">
          View Storefront
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        
        {/* SECTION 1: AI URL Scraper Input */}
        <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">1. Fetch From Supplier</h2>
          <form onSubmit={handleAiImport} className="flex gap-4">
            <input 
              type="url" 
              placeholder="Paste Hill Interiors or supplier product URL here..."
              value={supplierUrl}
              onChange={(e) => setSupplierUrl(e.target.value)}
              className="flex-1 border border-gray-300 p-4 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-black text-[#D4AF37] px-8 py-4 font-medium text-xs uppercase tracking-widest hover:bg-gray-900 disabled:bg-gray-400 transition-colors"
            >
              {loading ? '✨ AI Rewriting Assets...' : '✨ AI Import'}
            </button>
          </form>
        </div>

        {/* SECTION 2: Comprehensive Form */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 space-y-10">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">2. Verify & Fine-Tune Listing</h2>

          {/* Sub-Section: Core Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Product Title</label>
              <input type="text" value={productData.name} onChange={(e) => setProductData({...productData, name: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">SKU / Model Number</label>
              <input type="text" value={productData.sku} onChange={(e) => setProductData({...productData, sku: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Category</label>
              <select value={productData.category} onChange={(e) => setProductData({...productData, category: e.target.value})} className="w-full border p-3 text-sm bg-white focus:border-[#D4AF37] rounded-sm">
                <option value="living">Living</option>
                <option value="dining">Dining</option>
                <option value="bedroom">Bedroom</option>
                <option value="upholstery">Upholstery</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>
          </div>

          {/* Sub-Section: Financials & Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Retail Price (£)</label>
              <input type="number" value={productData.price || ''} onChange={(e) => setProductData({...productData, price: parseFloat(e.target.value) || 0})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Delivery Charge (£)</label>
              <input type="number" value={productData.deliveryCharge || ''} onChange={(e) => setProductData({...productData, deliveryCharge: parseFloat(e.target.value) || 0})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Est. Delivery Time</label>
              <input type="text" value={productData.deliveryTime} onChange={(e) => setProductData({...productData, deliveryTime: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Stock Quantity Available</label>
              <input type="number" value={productData.quantity || ''} onChange={(e) => setProductData({...productData, quantity: parseInt(e.target.value) || 0})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
          </div>

          {/* Sub-Section: Luxury Brand Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Colour Palette</label>
              <input type="text" placeholder="e.g. Weathered Oak & Cream" value={productData.colour} onChange={(e) => setProductData({...productData, colour: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Material / Composition</label>
              <input type="text" placeholder="e.g. Solid Ash Wood, Belgian Linen" value={productData.material} onChange={(e) => setProductData({...productData, material: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Dimensions (H x W x D)</label>
              <input type="text" placeholder="e.g. 85cm x 120cm x 45cm" value={productData.dimensions} onChange={(e) => setProductData({...productData, dimensions: e.target.value})} className="w-full border p-3 text-sm focus:border-[#D4AF37] rounded-sm" />
            </div>
          </div>

          {/* Sub-Section: Image Gallery Manager */}
          <div className="pt-6 border-t border-gray-100">
            <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Product Image Gallery URLs</label>
            <div className="space-y-3">
              {productData.images.map((imgUrl, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <span className="text-xs text-gray-400 font-mono w-6">#{index + 1}</span>
                  <input 
                    type="text" 
                    value={imgUrl} 
                    placeholder="Paste image address link..."
                    onChange={(e) => handleImageChange(index, e.target.value)} 
                    className="flex-grow border p-2 text-xs focus:border-[#D4AF37] rounded-sm" 
                  />
                  {imgUrl && (
                    <img src={imgUrl} alt="Preview" className="w-10 h-12 object-cover border border-gray-200 bg-gray-50 rounded-xs" />
                  )}
                </div>
              ))}
            </div>
            <button 
              type="button" 
              onClick={addImageField}
              className="mt-3 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-black transition-colors font-medium"
            >
              + Add Another Gallery Image Link
            </button>
          </div>

          {/* Sub-Section: Copywriting */}
          <div className="pt-6 border-t border-gray-100">
            <label className="block text-xs uppercase tracking-wider font-semibold mb-2">AI Premium Copy Description</label>
            <textarea 
              rows={6} 
              value={productData.description} 
              onChange={(e) => setProductData({...productData, description: e.target.value})} 
              className="w-full border p-4 text-sm font-light leading-relaxed text-gray-700 focus:border-[#D4AF37] rounded-sm"
            />
          </div>

          {/* Master Submit Button */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <button 
              type="button" 
              onClick={handleSaveProduct}
              className="w-full md:w-auto bg-black text-[#D4AF37] px-16 py-5 font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all shadow-md"
            >
              Publish Masterpiece to Storefront
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
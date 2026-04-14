// app/data.ts

export const products = [
  // --- LISTING 1: RUSTIC CABINET ---
  {
    id: 1,
    name: "Rustic Elegance Tall Louvered Cabinet",
    price: 349,
    category: "living", 
    image: "/cabinet-1.jpg", // Main thumbnail
    
    // All 4 images added to the gallery!
    gallery: [
      "/cabinet-1.jpg", 
      "/cabinet-2.jpg",
      "/cabinet-3.jpg",
      "/cabinet-4.jpg"
    ],
    
    description: "Add a touch of timeless, rustic charm to your home with our beautifully crafted Tall Louvered Cabinet. Featuring a soft, distressed whitewash finish and a classic shutter-style door, this piece effortlessly complements farmhouse, coastal, and shabby-chic interiors. Designed with a clever, space-saving footprint, its slender profile makes it the perfect elegant storage solution for tight spaces. Whether you need stylish towel storage in a bathroom, an organizational hub in a narrow hallway, or a statement piece in a cozy living room, this cabinet offers ample room to tuck away your essentials completely out of sight.",
    features: [
      "Classic Design: Traditional louvered/shuttered door paneling.",
      "Artisan Finish: Beautifully distressed, light wood finish that highlights natural grain and texture.",
      "Space-Maximizing: Tall and narrow silhouette designed for rooms where floor space is at a premium.",
      "Versatile Storage: Perfect for linens, books, toiletries, or general household organization."
    ],
    sku: "BR-CAB-001",
    material: "Solid wood with a distressed finish",
    dimensions: "35L x 50W x 162H (cm)",
    doors: "1"
  },

  // --- LISTING 2: YOUR NEXT PRODUCT ---
  {
    id: 2, // Always give the next item a new ID number
    name: "Your Second Product Name",
    price: 499,
    category: "living", // Change to 'bedroom' or 'dining' to make it show up on those pages!
    image: "/your-next-image-1.jpg", 
    
    gallery: [
      "/your-next-image-1.jpg", 
      "/your-next-image-2.jpg"
    ],
    
    description: "Your beautiful description goes right here. Talk about the craftsmanship and how it elevates the space.",
    features: [
      "Feature 1: Description of your first feature.",
      "Feature 2: Description of your second feature."
    ],
    sku: "BR-NEW-002",
    material: "Describe the material here",
    dimensions: "100L x 50W x 100H (cm)",
    // Note: If an item doesn't have doors (like a chair), you can just delete the 'doors' line entirely for that specific product!
  }
];
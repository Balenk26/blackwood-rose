// app/data.ts

export const products = [
  {
    id: 1,
    name: "Rustic Elegance Tall Louvered Cabinet",
    price: 349,
    category: "living", 
    // Notice we changed this line! It now points to your local file.
    // (Make sure the name matches exactly what you named it in the public folder)
    image: "/cabinet-1.jpg/cabinet-2.jpg/cabinet-3.jpg/cabinet-4.jpg", 
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
  }
];
// app/data.ts

export const products = [
  // --- 1. RUSTIC CABINET ---
  {
    id: 1,
    name: "Rustic Elegance Tall Louvered Cabinet",
    price: 349,
    category: "living", 
    image: "/cabinet-1.jpg", 
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

  // --- 2. DELPHINE 6-DOOR DRESSER BASE ---
  {
    id: 2,
    name: "Delphine Collection 6-Door Large Dresser Base",
    price: 1150, 
    category: "dining", 
    image: "/delphine-dresser-1.jpg", 
    gallery: [
      "/delphine-dresser-1.jpg", 
      "/delphine-dresser-2.jpg",
      "/delphine-dresser-3.jpg"
    ],
    description: "Part of our exclusive Delphine Collection, this magnificent 6-door, 3-drawer dresser base brings sweeping French-inspired elegance to your home. Expertly crafted with a gently distressed, hand-painted finish and a natural wood top, it offers monumental storage without compromising on delicate, classic styling. Perfect for grand dining rooms or spacious living areas, the intricate molding and antique-brass hardware make it a breathtaking focal point.",
    features: [
      "Grand Scale Storage: Six spacious cupboards and three wide drawers for ultimate organization.",
      "Two-Tone Finish: Soft, distressed painted body contrasting beautifully with a natural rustic wood top.",
      "Exquisite Detailing: Classic panelled doors, turned feet, and vintage-style brass handles.",
      "Versatile Elegance: Functions flawlessly as a dining room sideboard, hallway credenza, or living room statement piece."
    ],
    sku: "BR-DEL-002",
    material: "Solid Pine & Oak Veneer with Antique Brass Hardware",
    dimensions: "214L x 50W x 90H (cm)",
    doors: "6 (with 3 top drawers)"
  },

  // --- 3. DELPHINE MASTER BEDROOM DRESSER ---
  {
    id: 3,
    name: "Delphine Master Bedroom Dresser Base",
    price: 1250, 
    category: "bedroom", 
    image: "/delphine-base-1.jpg", 
    gallery: [
      "/delphine-base-1.jpg", 
      "/delphine-base-2.jpg",
      "/delphine-base-3.jpg",
      "/delphine-base-4.jpg",
      "/delphine-base-5.jpg",
      "/delphine-base-6.jpg",
      "/delphine-base-7.jpg",
      "/delphine-base-8.jpg"
    ],
    description: "Commanding yet effortlessly refined, the Delphine 6-Door Dresser Base serves as the ultimate anchor for a principal bedroom. Crafted with a calm, muted finish and accented by meticulously considered hardware, this flagship piece offers an extraordinary volume of varied storage. From smooth-gliding drawers for everyday essentials to expansive cabinet compartments for larger linens and garments, it unifies your bedroom's organization into one magnificent silhouette. Engineered for exceptional longevity, the robust framework and flawless mechanisms ensure a lifetime of elegant, daily use. Pair it seamlessly with the Delphine Dresser Top to create a floor-to-ceiling focal point.",
    features: [
      "Masterful Organization: A generous configuration of six cabinet doors and three smooth-gliding drawers.",
      "Muted Elegance: A calm, hand-finished aesthetic accented by premium, vintage-inspired hardware.",
      "Architectural Anchor: Designed as the flagship storage piece for principal bedrooms, offering unmatched presence and utility.",
      "Heirloom Construction: Built with a robust carcass and engineered mechanisms for decades of smooth, daily operation."
    ],
    sku: "BR-DEL-003",
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "41L x 160W x 84H (cm)",
    doors: "6 (with 3 upper drawers)"
  },

  // --- 4. DELPHINE 2-DOOR 4-DRAWER DRESSER (New Listing) ---
  {
    id: 4,
    name: "Delphine 2-Door 4-Drawer Large Dresser Base",
    price: 950, // I put a placeholder price here, adjust as needed!
    category: "bedroom", 
    image: "/delphine-2door-base-1.jpg", 
    gallery: [
      "/delphine-2door-base-1.jpg", 
      "/delphine-2door-base-2.jpg",
      "/delphine-2door-base-3.jpg",
      "/delphine-2door-base-4.jpg",
      "/delphine-2door-base-5.jpg",
      "/delphine-2door-base-6.jpg",
      "/delphine-2door-base-7.jpg",
      "/delphine-2door-base-8.jpg"
    ],
    description: "Substantial in its storage provision and refined in its aesthetic, the Delphine 2-Door, 4-Drawer Large Dresser Base offers a commanding yet elegantly proportioned storage solution. Featuring a calm, muted tone with clean lines and meticulously considered hardware, this piece feels quietly luxurious and thoroughly at home in a well-appointed bedroom. The generous combination of expansive cabinet space and smooth-gliding drawers easily accommodates everything from folded garments and heavy bedding to smaller personal accessories. Engineered for decades of daily use with quiet-closure hinges and reliable drawer mechanisms, this dresser base serves as the sophisticated, functional core of your serene bedroom retreat.",
    features: [
      "Substantial Storage: Two spacious door-concealed compartments alongside four easy-access drawers.",
      "Quiet Luxury: A calm, muted finish accented by beautifully considered, vintage-inspired hardware.",
      "Premium Engineering: Built with durably constructed drawer mechanisms and smooth, quiet-close door hinges.",
      "Versatile Anchor: An elegantly proportioned core piece that elevates any principal bedroom scheme."
    ],
    sku: "24659", // Using your exact product code here
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "41L x 122W x 80H (cm)",
    doors: "2 (with 4 side drawers)"
  }
];
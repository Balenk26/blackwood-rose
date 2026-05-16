// app/data.ts

export const products = [
  // --- 1. RUSTIC CABINET ---
  {
    id: 1,
    name: "Rustic Elegance Tall Louvered Cabinet",
    price: 349,
    category: "living", 
    collection: "rustic", 
    image: "/cabinet-1.jpg", 
    gallery: ["/cabinet-1.jpg", "/cabinet-2.jpg", "/cabinet-3.jpg", "/cabinet-4.jpg"],
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

  // --- 3. DELPHINE MASTER BEDROOM DRESSER ---
  {
    id: 3,
    name: "Delphine Master Bedroom Dresser Base",
    price: 1250, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-base-1.jpg", 
    gallery: ["/delphine-base-1.jpg", "/delphine-base-2.jpg", "/delphine-base-3.jpg", "/delphine-base-4.jpg", "/delphine-base-5.jpg", "/delphine-base-6.jpg", "/delphine-base-7.jpg", "/delphine-base-8.jpg"],
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

  // --- 4. DELPHINE 2-DOOR 4-DRAWER DRESSER ---
  {
    id: 4,
    name: "Delphine 2-Door 4-Drawer Large Dresser Base",
    price: 950, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-2door-base-1.jpg", 
    gallery: ["/delphine-2door-base-1.jpg", "/delphine-2door-base-2.jpg", "/delphine-2door-base-3.jpg", "/delphine-2door-base-4.jpg", "/delphine-2door-base-5.jpg", "/delphine-2door-base-6.jpg", "/delphine-2door-base-7.jpg", "/delphine-2door-base-8.jpg"],
    description: "Substantial in its storage provision and refined in its aesthetic, the Delphine 2-Door, 4-Drawer Large Dresser Base offers a commanding yet elegantly proportioned storage solution. Featuring a calm, muted tone with clean lines and meticulously considered hardware, this piece feels quietly luxurious and thoroughly at home in a well-appointed bedroom. The generous combination of expansive cabinet space and smooth-gliding drawers easily accommodates everything from folded garments and heavy bedding to smaller personal accessories. Engineered for decades of daily use with quiet-closure hinges and reliable drawer mechanisms, this dresser base serves as the sophisticated, functional core of your serene bedroom retreat.",
    features: [
      "Substantial Storage: Two spacious door-concealed compartments alongside four easy-access drawers.",
      "Quiet Luxury: A calm, muted finish accented by beautifully considered, vintage-inspired hardware.",
      "Premium Engineering: Built with durably constructed drawer mechanisms and smooth, quiet-close door hinges.",
      "Versatile Anchor: An elegantly proportioned core piece that elevates any principal bedroom scheme."
    ],
    sku: "24659",
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "41L x 122W x 80H (cm)",
    doors: "2 (with 4 side drawers)"
  },

  // --- 5. DELPHINE 3-SHELF DRESSER TOP ---
  {
    id: 5,
    name: "Delphine Collection 3-Shelf Large Dresser Top",
    price: 650, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-top-1.jpg", 
    gallery: ["/delphine-top-1.jpg", "/delphine-top-2.jpg", "/delphine-top-3.jpg", "/delphine-top-4.jpg", "/delphine-top-5.jpg", "/delphine-top-6.jpg", "/delphine-top-7.jpg", "/delphine-top-8.jpg"],
    description: "Designed to sit flawlessly atop the Delphine Large Dresser Base, this magnificent three-shelf dresser top extends your storage and display capacity with an open, tiered configuration. It transforms a standard dresser into a breathtaking, full-height architectural feature. The three expansive open shelves provide an elegant and accessible stage for folded linens, curated decorative objects, or cherished personal accessories, adding a beautiful display dimension to the collection's concealed storage. Finished in the collection's signature calm, muted tone, it integrates seamlessly with the base below, anchoring your bedroom with quiet authority and a truly considered presence.",
    features: [
      "Tiered Display: Three expansive open shelves for beautifully styling curated objects, books, or accessible linens.",
      "Seamless Integration: Specifically designed to sit securely and flawlessly atop the Delphine Large Dresser Base.",
      "Architectural Presence: Creates a striking, floor-to-ceiling focal point when paired with its matching base.",
      "Heirloom Construction: Durably crafted to support meaningful displays with stable, long-term structural integrity."
    ],
    sku: "24666", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "32L x 163W x 127H (cm)"
  },

  // --- 6. DELPHIDE SLIDING GLASS DRESSER TOP ---
  {
    id: 6,
    name: "Delphine Collection Sliding Glass Dresser Top",
    price: 795, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-glass-top-1.jpg", 
    gallery: ["/delphine-glass-top-1.jpg", "/delphine-glass-top-2.jpg", "/delphine-glass-top-3.jpg", "/delphine-glass-top-4.jpg", "/delphine-glass-top-5.jpg", "/delphine-glass-top-6.jpg", "/delphine-glass-top-7.jpg", "/delphine-glass-top-8.jpg"],
    description: "Elegant in its proportions and brilliantly practical, the Delphine Sliding Glass Dresser Top introduces a sophisticated display solution for the well-appointed bedroom. The ingeniously engineered sliding glass mechanism provides smooth access to the interior without the swing clearance required by hinged doors, making it an exceptional choice for space-conscious interiors. The pristine glass paneling lends an airy, contemporary lightness to the piece, allowing you to showcase folded garments or cherished accessories while entirely preventing the visual weight of opaque cabinetry. Designed to unite seamlessly with the Delphine dresser base, it creates a magnificent, cohesive storage tower that anchors your suite with serene, ordered sophistication.",
    features: [
      "Space-Efficient Access: Smooth-gliding sliding glass mechanism requires zero outward swing clearance.",
      "Visual Lightness: Elegant glass paneling beautifully showcases curated items while maintaining a refined, airy aesthetic.",
      "Seamless Integration: Expertly designed to pair flawlessly with the Delphine Dresser Base for a cohesive, vertical storage tower.",
      "Premium Engineering: Durably constructed with robust tracking for reliable, quiet operation over decades of use."
    ],
    sku: "24568", 
    material: "Solid wood frame with muted finish and tempered glass paneling",
    dimensions: "38L x 126W x 120H (cm)",
    doors: "2 (Sliding Glass)"
  },

  // --- 7. DELPHINE 2-DOOR 2-DRAWER CHEST ---
  {
    id: 7,
    name: "Delphine Collection 2-Door 2-Drawer Chest",
    price: 695, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-chest-1.jpg", 
    gallery: ["/delphine-chest-1.jpg", "/delphine-chest-2.jpg", "/delphine-chest-3.jpg", "/delphine-chest-4.jpg", "/delphine-chest-5.jpg", "/delphine-chest-6.jpg", "/delphine-chest-7.jpg", "/delphine-chest-8.jpg"],
    description: "Versatile in its application and thoughtful in its design, the Delphine 2-Door, 2-Drawer Chest offers a beautifully compact yet capacious storage solution. The perfectly balanced configuration provides flexible options—expansive compartments for folded garments alongside smooth-gliding drawers for smaller essentials—within a refined footprint that suits both grand principal suites and elegant guest bedrooms. Finished in the collection's signature muted tone with clean lines and premium hardware, it maintains a quietly sophisticated aesthetic. Whether standing as a singular accent piece or pairing seamlessly with the broader Delphine collection, this chest brings calm, organized efficiency to any space.",
    features: [
      "Flexible Storage: A perfectly balanced combination of two concealed compartments and two smooth-gliding drawers.",
      "Compact Elegance: A refined, space-efficient footprint ideal for principal suites, guest bedrooms, or alcoves.",
      "Quiet Luxury: The collection's signature muted finish accented by beautifully considered, vintage-inspired hardware.",
      "Heirloom Construction: Durably crafted with engineered mechanisms for decades of smooth, dependable operation."
    ],
    sku: "24660", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "33L x 73W x 81H (cm)",
    doors: "2 (with 2 upper drawers)"
  },

  // --- 8. DELPHINE 3-DRAWER CHEST ---
  {
    id: 8,
    name: "Delphine Collection 3-Drawer Chest",
    price: 595, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-3drawer-1.jpg", 
    gallery: ["/delphine-3drawer-1.jpg", "/delphine-3drawer-2.jpg", "/delphine-3drawer-3.jpg", "/delphine-3drawer-4.jpg", "/delphine-3drawer-5.jpg", "/delphine-3drawer-6.jpg", "/delphine-3drawer-7.jpg"],
    description: "Clean in its lines and generous in its capacity, the Delphine 3-Drawer Chest presents a refined and considered solution for bedroom organization. The three-drawer format delivers a straightforward, uncluttered hierarchy—perfectly accommodating folded garments, accessories, and personal essentials across clearly defined tiers. Finished in the collection's signature calm, muted tone and accented with elegant hardware, this piece feels quietly premium and thoroughly at home in a well-appointed space. Serving as a beautiful standalone chest or a natural complement to the larger Delphine dressers, its smooth-gliding mechanisms ensure a flawless everyday experience, opening and closing with consistent, whisper-quiet precision.",
    features: [
      "Tiered Organization: Three spacious drawers provide a clear, uncluttered hierarchy for folded garments and essentials.",
      "Quiet Luxury: Finished in a calm, muted tone with clean lines and meticulously considered hardware.",
      "Premium Engineering: Built with smooth-gliding drawer mechanisms for reliable, whisper-quiet daily operation.",
      "Versatile Proportions: Perfectly scaled to sit beautifully beside an upholstered bed or beneath a wall-mounted mirror."
    ],
    sku: "24663", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "38L x 50W x 65H (cm)"
  },

  // --- 9. DELPHINE 1-DOOR 1-DRAWER CHEST (RIGHT HAND) ---
  {
    id: 9,
    name: "Delphine Collection 1-Door 1-Drawer Chest (Right Hand)",
    price: 495, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-right-chest-1.jpg", 
    gallery: ["/delphine-right-chest-1.jpg", "/delphine-right-chest-2.jpg", "/delphine-right-chest-3.jpg", "/delphine-right-chest-4.jpg", "/delphine-right-chest-5.jpg", "/delphine-right-chest-6.jpg", "/delphine-right-chest-7.jpg"],
    description: "Sharing the same considered design and compact storage efficiency as its left-hand counterpart, the Delphine 1-Drawer, 1-Door Chest in a right-hand configuration provides an essential, elegant solution for tailored spatial flow. Designed so the door opens from the right, this piece can be placed flush against a left-side wall or paired symmetrically with its mirror opposite to frame a bed or doorway perfectly. Finished in the collection's signature calm, muted tone and accented with refined hardware, it maintains a quietly sophisticated character at an accessible scale. The practical combination of a smooth-gliding drawer and a concealed lower compartment delivers flexible, organized storage for everyday essentials. Durably constructed for dependable daily use, this chest sits naturally alongside the broader Delphine collection to create a cohesive, meticulously curated interior.",
    features: [
      "Directional Design: Right-hand door configuration allows for optimal spatial flow or symmetrical pairing.",
      "Flexible Storage: Features one smooth-gliding top drawer and a spacious door-concealed lower compartment.",
      "Quiet Luxury: Finished in a calm, muted tone with clean lines and meticulously considered vintage-inspired hardware.",
      "Compact Footprint: Perfectly scaled to act as an elegant nightstand or supplementary storage in sophisticated spaces."
    ],
    sku: "24662", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "38L x 50W x 72H (cm)",
    doors: "1 (Right-Hand Hinge, with 1 upper drawer)"
  },

  // --- 10. DELPHINE 1-DOOR 1-DRAWER CHEST (LEFT HAND) ---
  {
    id: 10,
    name: "Delphine Collection 1-Door 1-Drawer Chest (Left Hand)",
    price: 495, 
    category: "bedroom", 
    collection: "delphine", 
    image: "/delphine-left-chest-1.jpg", 
    gallery: ["/delphine-left-chest-1.jpg", "/delphine-left-chest-2.jpg", "/delphine-left-chest-3.jpg", "/delphine-left-chest-4.jpg", "/delphine-left-chest-5.jpg", "/delphine-left-chest-6.jpg", "/delphine-left-chest-7.jpg"],
    description: "A perfect mirror to its right-hand counterpart, the Delphine 1-Drawer, 1-Door Chest in a left-hand configuration offers an essential, directional storage solution for refined interiors. Designed with a left-opening door, this piece is ideal for framing the left side of a bed or maximizing accessibility against a right-side wall. Featuring the collection's signature muted finish, clean lines, and vintage-inspired hardware, it provides flexible storage within a compact footprint. A smooth-gliding top drawer keeps daily essentials close at hand, while the concealed lower compartment seamlessly accommodates larger items. Whether standing alone as an elegant nightstand or paired symmetrically for a complete look, its heirloom-quality construction ensures decades of quiet, dependable use.",
    features: [
      "Directional Design: Left-hand door configuration designed for optimal spatial flow and symmetrical bedside pairing.",
      "Flexible Storage: Features one smooth-gliding top drawer for essentials and a spacious door-concealed lower compartment.",
      "Quiet Luxury: Finished in a calm, muted tone with clean lines and meticulously considered vintage-inspired hardware.",
      "Compact Footprint: Perfectly scaled to act as an elegant nightstand, hallway accent, or supplementary bedroom storage."
    ],
    sku: "24661", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "38L x 50W x 72H (cm)",
    doors: "1 (Left-Hand Hinge, with 1 upper drawer)"
  },

  // --- 11. DELPHINE 3-DRAWER CONSOLE WITH SHELF ---
  {
    id: 11,
    name: "Delphine Collection 3-Drawer Console With Shelf",
    price: 750, 
    category: "living", 
    collection: "delphine", 
    image: "/delphine-console-1.jpg", 
    gallery: ["/delphine-console-1.jpg", "/delphine-console-2.jpg", "/delphine-console-3.jpg", "/delphine-console-4.jpg", "/delphine-console-5.jpg", "/delphine-console-6.jpg", "/delphine-console-7.jpg", "/delphine-console-8.jpg"],
    description: "Marrying functional elegance with architectural grace, the Delphine 3-Drawer Console with an integrated lower shelf is a masterclass in versatile luxury. Designed to elevate hallways, living spaces, or grand bedrooms, this piece offers a beautifully refined combination of concealed organization and open display. Three smooth-gliding drawers provide a discreet home for everyday essentials, while the expansive lower shelf invites the curation of oversized art books, woven baskets, or sculptural ceramics. Finished in the collection's signature calm, muted tone and accented with vintage-inspired hardware, the console's clean-lined proportions make it an impeccable canvas for styling beneath a statement mirror or artwork. Crafted with exceptional durability, it promises a lifetime of quiet sophistication and daily utility.",
    features: [
      "Versatile Elegance: Perfectly proportioned to act as a sophisticated hallway anchor, living room display, or elegant dressing table.",
      "Dual Storage Design: Features three smooth-gliding drawers for concealed organization alongside an expansive lower shelf for curated display.",
      "Quiet Luxury: Finished in a calm, muted tone with clean lines and meticulously considered vintage-inspired hardware.",
      "Heirloom Construction: Durably crafted to support meaningful displays with stable, long-term structural integrity."
    ],
    sku: "24664", 
    material: "Solid wood frame with a muted, refined finish",
    dimensions: "40L x 120W x 80H (cm)"
  },

  // --- 12. REED COLLECTION 2-DRAWER CONSOLE ---
  {
    id: 12,
    name: "Reed Collection 2-Drawer Console",
    price: 650, 
    category: "living", 
    collection: "reed", 
    image: "/reed-console-1.jpg", 
    gallery: ["/reed-console-1.jpg", "/reed-console-2.jpg", "/reed-console-3.jpg", "/reed-console-4.jpg"],
    description: "Subtle detailing meets refined structure in the Reed Collection 2-Drawer Console. This striking piece features a distinctive linear profile complemented by a beautifully textured finish that adds depth and visual rhythm to any space. Perfectly proportioned for entryways, living rooms, or elegant corridors, it pairs a muted tonal palette with a polished silhouette that commands attention without overwhelming a room. Two smooth-gliding drawers provide discreet storage for everyday essentials, ensuring a clean, uncluttered look. Designed to act as an impeccable canvas for your styling—whether displaying sculptural ceramics, textured glass vases, or sitting gracefully beneath a statement mirror—this console brings an understated yet memorable presence to a curated home.",
    features: [
      "Textured Elegance: A distinctive linear profile elevated by a beautifully textured finish that catches the light.",
      "Discreet Storage: Two smooth-closing integrated drawers keep entryways or living spaces perfectly uncluttered.",
      "Versatile Proportions: A beautifully scaled silhouette designed to anchor hallways, living rooms, or dining spaces.",
      "Quiet Sophistication: A muted, adaptable palette that harmonizes seamlessly with both modern and classic interiors."
    ],
    sku: "24321", 
    material: "Textured frame with a muted, polished finish",
    dimensions: "33L x 90W x 80H (cm)"
  },

  // --- 13. REED COLLECTION 1-DRAWER CABINET ---
  {
    id: 13,
    name: "Reed Collection 1-Drawer Cabinet",
    price: 395, 
    category: "bedroom", 
    collection: "reed", 
    image: "/reed-cabinet-1.jpg", 
    gallery: ["/reed-cabinet-1.jpg", "/reed-cabinet-2.jpg", "/reed-cabinet-3.jpg", "/reed-cabinet-4.jpg"],
    description: "A refined combination of understated design and subtle detailing, the Reed 1-Drawer Cabinet is a striking choice for the modern home. Its balanced proportions and clean lines are harmonized with a delicately recessed panel front, offering a tactile contrast that speaks to modern minimalism while maintaining a warm, residential feel. The soft, muted tone of the finish allows the subtle grain to display a gentle depth, creating a sense of quiet quality that works effortlessly across a variety of interior themes. A discreet brushed metal handle provides a pleasing textural counterpoint, while shallow-angle tapered legs enhance its visual lightness. Perfectly scaled to act as an elegant nightstand or a sophisticated side table in living spaces, it pairs seamlessly with organic textures, ceramic accents, and muted palettes.",
    features: [
      "Modern Minimalism: Clean lines and a delicately recessed panel front offer a tactile, contemporary aesthetic.",
      "Subtle Textures: A muted, warm finish with gentle grain depth, accented by a discreet brushed metal handle.",
      "Visual Lightness: Shallow-angle tapered legs provide an airy, elevated silhouette perfect for compact spaces.",
      "Versatile Function: Perfectly proportioned to serve as an elegant bedside table or a sophisticated living room accent."
    ],
    sku: "24323", 
    material: "Solid wood frame with a muted, textured finish and brushed metal hardware",
    dimensions: "33L x 45W x 58H (cm)",
    doors: "1 (with 1 upper drawer)"
  },

  // --- 14. REED COLLECTION 3-DRAWER 2-DOOR CABINET ---
  {
    id: 14,
    name: "Reed Collection 3-Drawer 2-Door Cabinet",
    price: 895, 
    category: "living", 
    collection: "reed", 
    image: "/reed-large-cabinet-1.jpg", 
    gallery: [
      "/reed-large-cabinet-1.jpg", 
      "/reed-large-cabinet-2.jpg",
      "/reed-large-cabinet-3.jpg",
      "/reed-large-cabinet-4.jpg",
      "/reed-large-cabinet-5.jpg"
    ],
    description: "Blending subtle sophistication with capacious, practical storage, the Reed Collection 3-Drawer, 2-Door Cabinet is designed to elevate and anchor a variety of interior settings. Its surface showcases refined grain patterns and a beautifully balanced, warm-toned palette that complements both neutral and vibrant décor schemes. The thoughtfully paneled door fronts and sleek drawer profiles create a sense of understated geometry, conveying an inviting, polished ambiance perfectly suited for living rooms, dining spaces, or grand hallways. Built with heirloom durability in mind, it offers an exceptional volume of concealed organization to keep your home impeccably tidy while maintaining a commanding visual presence. Style its generous top surface with glazed ceramic table lamps, textured woven accents, or subtle metallic elements to create a seamlessly cohesive, curated focal point.",
    features: [
      "Understated Geometry: Paneled door fronts and sleek drawer profiles create structured, sophisticated visual interest.",
      "Warm Textural Finish: A beautifully balanced tonal palette with refined grain patterns that adapts to diverse interior styles.",
      "Generous Storage: Three smooth-gliding drawers and two spacious cabinet compartments support impeccably organized living.",
      "Versatile Anchor: Perfectly proportioned to serve as a stunning focal point in dining spaces, living rooms, or expansive hallways."
    ],
    sku: "24326", 
    material: "Solid wood frame with a muted, textured finish and sleek hardware",
    dimensions: "40L x 115W x 80H (cm)",
    doors: "2 (with 3 central drawers)"
  },

  // --- 15. REED COLLECTION 1-DRAWER 2-DOOR CABINET ---
  {
    id: 15,
    name: "Reed Collection 1-Drawer 2-Door Cabinet",
    price: 550, 
    category: "living", 
    collection: "reed", 
    image: "/reed-2door-cabinet-1.jpg", 
    gallery: [
      "/reed-2door-cabinet-1.jpg", 
      "/reed-2door-cabinet-2.jpg",
      "/reed-2door-cabinet-3.jpg",
      "/reed-2door-cabinet-4.jpg",
      "/reed-2door-cabinet-5.jpg"
    ],
    description: "Striking the perfect balance between beautifully proportioned styling and practical utility, the Reed Collection 1-Drawer, 2-Door Cabinet is an exceptionally versatile storage solution. Its distinctive linear form features a textured, muted finish that effortlessly bridges the gap between contemporary minimalism and warm, classic design. The single, full-width top drawer offers smooth-gliding access for smaller daily essentials, while the dual doors below reveal a generous cabinet space capable of stowing everything from dining room linens to living room media. Accented with the collection's signature brushed metal hardware, this mid-sized cabinet anchors any wall with quiet confidence, providing a stunning pedestal for layered displays of artwork, botanicals, or ceramics.",
    features: [
      "Linear Proportion: A beautifully balanced rectangular form featuring a modern, textured finish.",
      "Flexible Storage: Combines a convenient, full-width top drawer with a spacious two-door concealed compartment below.",
      "Subtle Accents: Muted tonal depth enhanced by cleanly integrated brushed metal hardware.",
      "Versatile Silhouette: Mid-sized proportions make it an ideal fit for hallways, alcoves, or compact living spaces."
    ],
    sku: "24324", 
    material: "Solid wood frame with a muted, textured finish and brushed metal hardware",
    dimensions: "35L x 80W x 80H (cm)",
    doors: "2 (with 1 upper drawer)"
  },

  // --- 16. REED COLLECTION 1-DRAWER SIDE TABLE ---
  {
    id: 16,
    name: "Reed Collection 1-Drawer Side Table",
    price: 295, 
    category: "living", 
    collection: "reed", 
    image: "/reed-side-table-1.jpg", 
    gallery: [
      "/reed-side-table-1.jpg", 
      "/reed-side-table-2.jpg",
      "/reed-side-table-3.jpg",
      "/reed-side-table-4.jpg",
      "/reed-side-table-5.jpg"
    ],
    description: "Graceful lines and a harmonious blend of textures make the Reed Collection 1-Drawer Side Table a flawless accent piece for discerning interiors. Its soft, muted finish brings a sense of quiet refinement, while the single smooth-gliding drawer offers a practical storage solution for daily essentials. Subtle grain patterns add depth to the surface, enhancing its character without overpowering your surrounding décor. Thoughtfully balanced and incredibly versatile, it acts as the perfect companion beside a living room sofa, tucked into a cozy reading nook, or utilized as an elegant nightstand alternative. The sleek detailing of the drawer hardware provides a beautiful textural contrast, elevating the table from a simple functional item to a beautifully curated design asset.",
    features: [
      "Graceful Proportions: A beautifully balanced silhouette ideal for framing a sofa, armchair, or bed.",
      "Quiet Refinement: Soft, muted finish with subtle grain patterns that add natural depth and character.",
      "Practical Storage: Features a single smooth-gliding drawer to keep everyday essentials neatly tucked away.",
      "Versatile Accent: An understated, highly adaptable design that harmonizes perfectly with both contemporary and traditional spaces."
    ],
    sku: "24320", 
    material: "Solid wood frame with a textured finish and sleek hardware",
    dimensions: "35L x 45W x 61H (cm)"
  },

  // --- 17. REED COLLECTION 2-DRAWER 2-DOOR CONSOLE ---
  {
    id: 17,
    name: "Reed Collection 2-Drawer 2-Door Console",
    price: 795, 
    category: "living", 
    collection: "reed", 
    image: "/reed-2door-console-1.jpg", 
    gallery: [
      "/reed-2door-console-1.jpg", 
      "/reed-2door-console-2.jpg",
      "/reed-2door-console-3.jpg",
      "/reed-2door-console-4.jpg"
    ],
    description: "Designed to enhance a variety of interior styles, the Reed Collection 2-Drawer, 2-Door Console presents a beautifully balanced interplay of texture and clean-lined structure. The understated facade is enriched with a subtle grain that lends depth to its surface, maintaining an uncluttered, harmonious aesthetic that integrates seamlessly into both contemporary and classic spaces. Two spacious cabinet compartments provide generous concealed storage, complemented by two smooth-gliding drawers for organizing smaller daily essentials. Its refined tonal quality is quietly impactful, allowing it to act as an impeccable foundation for styling with rich textiles, warm-toned ceramics, or woven accents. Whether positioned in an entranceway, lounge, or dining area, this console projects a quiet confidence that evolves beautifully with your changing seasonal decor.",
    features: [
      "Architectural Balance: A clean-lined, beautifully proportioned silhouette that anchors any living space or entranceway.",
      "Subtle Textures: An understated finish enriched with a delicate woodgrain depth and refined hardware.",
      "Comprehensive Storage: Dual smooth-gliding drawers and two spacious concealed cupboards offer exceptional organization.",
      "Styling Foundation: A versatile, elegant canvas perfectly suited for displaying ceramics, botanicals, or statement lighting."
    ],
    sku: "24325", 
    material: "Solid wood frame with a muted, textured finish and sleek hardware",
    dimensions: "30L x 106W x 80H (cm)",
    doors: "2 (with 2 upper drawers)"
  },

  // --- 18. REED COLLECTION 3-DRAWER BEDSIDE TABLE ---
  {
    id: 18,
    name: "Reed Collection 3-Drawer Bedside Table",
    price: 350, 
    category: "bedroom", 
    collection: "reed", 
    image: "/reed-bedside-1.jpg", 
    gallery: [
      "/reed-bedside-1.jpg", 
      "/reed-bedside-2.jpg",
      "/reed-bedside-3.jpg",
      "/reed-bedside-4.jpg",
      "/reed-bedside-5.jpg"
    ],
    description: "Understated yet rich in visual character, the Reed Collection 3-Drawer Bedside Table harmonizes clean structural lines with a subtle textural depth. Designed to bring a sense of order and calm to your bedroom sanctuary, this elegant piece features three smooth-gliding drawers that provide ample concealed storage while maintaining a beautifully streamlined silhouette. Its carefully balanced proportions and refined tonal finish allow it to integrate seamlessly into both contemporary and traditionally inspired spaces. The beautifully textured top surface offers an ideal pedestal for a reading lamp, a curated stack of books, or your evening essentials. Pairing flawlessly with the broader Reed collection, this bedside table delivers a perfect blend of everyday utility and lasting, quiet sophistication.",
    features: [
      "Textured Elegance: A subtle, refined tonal finish that beautifully complements both modern and classic bedroom interiors.",
      "Compact Capacity: Three smooth-gliding drawers offer generous concealed storage within a perfectly proportioned bedside footprint.",
      "Quiet Sophistication: Clean architectural lines accented by discreet, tactile hardware for a serene and uncluttered aesthetic.",
      "Heirloom Quality: Durably crafted to provide smooth, reliable daily operation and enduring visual appeal."
    ],
    sku: "24322", 
    material: "Solid wood frame with a muted, textured finish and sleek hardware",
    dimensions: "40L x 45W x 58H (cm)"
  },

  // --- 19. HALDON COLLECTION LARGE DINING TABLE ---
  {
    id: 19,
    name: "Haldon Collection Large Dining Table",
    price: 1295, 
    category: "dining", 
    collection: "haldon", 
    image: "/haldon-table-1.jpg", 
    gallery: [
      "/haldon-table-1.jpg", 
      "/haldon-table-2.jpg",
      "/haldon-table-3.jpg",
      "/haldon-table-4.jpg",
      "/haldon-table-5.jpg",
      "/haldon-table-6.jpg",
      "/haldon-table-7.jpg",
      "/haldon-table-8.jpg"
    ],
    description: "Generous in its proportions and considered in its construction, the Haldon Large Dining Table provides a commanding and refined centerpiece for your home. The substantial surface area comfortably accommodates generous place settings, making it perfectly suited for family gatherings, entertaining, and everyday shared meals. Finished with a clean-lined and quietly premium aesthetic, it feels thoroughly at home in a well-appointed dining room or open-plan living space. This large format table makes a confident architectural statement, anchoring the dining area with a sense of permanence and scale. Engineered for the demands of daily life, the robust tabletop and leg structure ensure long-term stability and enduring style. Pair it naturally with the Haldon Dining Bench and your choice of seating to create a cohesive, characterful dining sanctuary.",
    features: [
      "Generous Proportions: An expansive 200cm surface that comfortably accommodates large family meals and entertaining.",
      "Architectural Presence: Clean-lined and commanding, designed to anchor your dining space with a sense of permanence.",
      "Quiet Luxury: A refined, premium finish that perfectly complements well-appointed kitchens and open-plan interiors.",
      "Heirloom Durability: Robustly constructed for daily use, ensuring exceptional stability and long-lasting visual appeal."
    ],
    sku: "24671", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "90L x 200W x 78H (cm)"
  },

  // --- 20. HALDON COLLECTION 9-DRAWER CHEST WITH SHELF ---
  {
    id: 20,
    name: "Haldon Collection 9-Drawer Chest With Shelf",
    price: 1150, 
    category: "bedroom", 
    collection: "haldon", 
    image: "/haldon-9drawer-chest-1.jpg", 
    gallery: [
      "/haldon-9drawer-chest-1.jpg", 
      "/haldon-9drawer-chest-2.jpg",
      "/haldon-9drawer-chest-3.jpg",
      "/haldon-9drawer-chest-4.jpg",
      "/haldon-9drawer-chest-5.jpg",
      "/haldon-9drawer-chest-6.jpg",
      "/haldon-9drawer-chest-7.jpg",
      "/haldon-9drawer-chest-8.jpg"
    ],
    description: "Combining exceptional drawer capacity with the graceful addition of an integrated display shelf, the Haldon Collection 9-Drawer Chest offers a masterclass in versatile, considered storage. This substantial piece addresses both concealed organization and open display within a single, beautifully unified form. Nine smooth-gliding drawers deliver exceptional space for linens, garments, or daily essentials, while the expansive open shelf provides a curated stage for framed artwork, sculptural ceramics, or woven accessories. Finished in the collection's signature calm, refined aesthetic, it adapts effortlessly to bedroom, living room, or hallway settings. Durably constructed for a lifetime of dependable daily use, this chest perfectly balances functional necessity with the opportunity for personalized, decorative styling.",
    features: [
      "Substantial Capacity: Nine smooth-gliding drawers provide exceptional, organized storage for garments, linens, or daily essentials.",
      "Curated Display: An integrated open shelf invites personalized styling with ceramics, books, or framed artwork.",
      "Quiet Luxury: Finished in a clean-lined, refined aesthetic that elevates bedrooms, living spaces, or expansive hallways.",
      "Heirloom Construction: Durably engineered for reliable daily use, ensuring smooth operation and long-lasting structural integrity."
    ],
    sku: "24670", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "40L x 110W x 88H (cm)"
  },

  // --- 21. HALDON COLLECTION 12-DRAWER CHEST ---
  {
    id: 21,
    name: "Haldon Collection 12-Drawer Chest",
    price: 1450, 
    category: "bedroom", 
    collection: "haldon", 
    image: "/haldon-12drawer-1.jpg", 
    gallery: [
      "/haldon-12drawer-1.jpg", 
      "/haldon-12drawer-2.jpg",
      "/haldon-12drawer-3.jpg",
      "/haldon-12drawer-4.jpg",
      "/haldon-12drawer-5.jpg",
      "/haldon-12drawer-6.jpg",
      "/haldon-12drawer-7.jpg"
    ],
    description: "Bold in its presence and meticulous in its execution, the Haldon Collection 12-Drawer Chest presents an extraordinary storage solution that balances impressive capacity with a composed, refined aesthetic. The twelve drawers are arranged in a considered grid configuration, creating a striking visual rhythm across the chest's facade that feels both functional and deliberately decorative. Finished in the collection's signature calm, clean-lined style, the piece retains a unified and quietly luxurious presence despite its considerable scale. This expansive volume provides an unparalleled degree of organization, allowing for the precise categorization of garments, accessories, and personal items. Perfectly suited as a magnificent focal point for a principal bedroom or a bespoke dressing room, its robust, heirloom-quality construction ensures smooth, consistent operation across every drawer, bringing effortless order and architectural grace to your home.",
    features: [
      "Exceptional Organization: Twelve individual smooth-gliding drawers allow for precise categorization of garments and accessories.",
      "Architectural Rhythm: A bold, repetitive drawer grid creates a striking visual statement that anchors any wall.",
      "Quiet Luxury: Finished in a calm, refined aesthetic that maintains a unified, luxurious presence across its expansive scale.",
      "Heirloom Engineering: Durably constructed with a robust framework and premium drawer mechanisms for decades of dependable daily use."
    ],
    sku: "24669", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "40L x 170W x 88H (cm)"
  },

  // --- 22. HALDON COLLECTION 1-DRAWER SIDE TABLE WITH SHELF ---
  {
    id: 22,
    name: "Haldon Collection 1-Drawer Side Table With Shelf",
    price: 350, 
    category: "bedroom", 
    collection: "haldon", 
    image: "/haldon-side-table-1.jpg", 
    gallery: [
      "/haldon-side-table-1.jpg", 
      "/haldon-side-table-2.jpg",
      "/haldon-side-table-3.jpg",
      "/haldon-side-table-4.jpg",
      "/haldon-side-table-5.jpg",
      "/haldon-side-table-6.jpg",
      "/haldon-side-table-7.jpg",
      "/haldon-side-table-8.jpg"
    ],
    description: "Compact in its footprint yet considered in its detail, the Haldon Collection 1-Drawer Side Table with Shelf offers a beautifully proportioned bedside or occasional table solution. It perfectly balances practical, concealed storage with open display. A single smooth-gliding drawer provides discreet access for everyday essentials, while the integrated shelf below offers an elegant platform for books, botanicals, or a statement lamp. Finished in the collection's signature quiet luxury, it integrates seamlessly within a broader Haldon scheme or stands with quiet confidence as a singular accent piece. Directly built with durability in mind, it promises a lifetime of quiet sophistication and daily utility.",
    features: [
      "Discreet Storage: A single smooth-gliding drawer keeps personal everyday essentials neatly tucked away.",
      "Curated Display: An integrated lower shelf provides a perfect stage for oversized books, ceramics, or a reading lamp.",
      "Compact Elegance: A beautifully space-efficient footprint ideal for bedside use or alongside a living room armchair.",
      "Quiet Luxury: Finished in a refined, clean-lined aesthetic that complements both modern and classic interiors."
    ],
    sku: "24674", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "50L x 50W x 60H (cm)"
  },

  // --- 23. HALDON COLLECTION LARGE DINING BENCH ---
  {
    id: 23,
    name: "Haldon Collection Large Dining Bench",
    price: 450, 
    category: "dining", 
    collection: "haldon", 
    image: "/haldon-bench-1.jpg", 
    gallery: [
      "/haldon-bench-1.jpg", 
      "/haldon-bench-2.jpg",
      "/haldon-bench-3.jpg",
      "/haldon-bench-4.jpg",
      "/haldon-bench-5.jpg",
      "/haldon-bench-6.jpg",
      "/haldon-bench-7.jpg",
      "/haldon-bench-8.jpg"
    ],
    description: "Relaxed in its character yet refined in its execution, the Haldon Large Dining Bench provides a sociable and considered seating solution that perfectly complements the collection's dining table. The bench format encourages a convivial, informal dining experience, effortlessly accommodating multiple guests along a single continuous seat. With its clean lines and quiet authority, it offers the clever flexibility to be tucked neatly beneath the table when not in use, maximizing your floor space. Finished in the collection's signature premium aesthetic, it ensures visual consistency for a unified and deliberately curated dining ensemble. The generous scale mirrors the grand proportions of the dining table, providing ample seating for family gatherings and entertaining. Durably constructed for the demands of daily life, the robust frame offers a stable seating platform built for long-term performance. Pair it seamlessly with the Haldon Large Dining Table and a mix of dining chairs to create a relaxed, characterful, and inviting dining sanctuary.",
    features: [
      "Sociable Seating: A generous 200cm continuous seat that encourages convivial, relaxed dining for family and guests.",
      "Space-Saving Design: Perfectly proportioned to tuck neatly beneath the Haldon Large Dining Table when not in use.",
      "Quiet Luxury: Finished in the collection's signature premium aesthetic for a beautifully unified dining ensemble.",
      "Heirloom Durability: Robustly constructed to withstand the rigors of daily use, ensuring lasting stability and style."
    ],
    sku: "24672", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "35L x 200W x 45H (cm)"
  },

  // --- 24. HALDON COLLECTION 4-SHELF APEX UNIT ---
  {
    id: 24,
    name: "Haldon Collection 4-Shelf Apex Unit",
    price: 850, 
    category: "living", 
    collection: "haldon", 
    image: "/haldon-apex-1.jpg", 
    gallery: [
      "/haldon-apex-1.jpg", 
      "/haldon-apex-2.jpg",
      "/haldon-apex-3.jpg",
      "/haldon-apex-4.jpg",
      "/haldon-apex-5.jpg",
      "/haldon-apex-6.jpg",
      "/haldon-apex-7.jpg",
      "/haldon-apex-8.jpg"
    ],
    description: "Architectural in its silhouette and considered in its construction, the Haldon Collection 4-Shelf Apex Unit introduces a distinctive, peaked form to open display. The apex profile—defined by its triangular top—creates an immediately recognizable outline that draws the eye upward, adding genuine visual interest and distinguishing it from conventional shelving. Finished in the collection's signature clean, refined style, the unit feels quietly premium. Four generously proportioned shelves deliver a natural display hierarchy: lower, wider tiers effortlessly accommodate larger objects, while the narrowing upper shelves are perfectly suited to smaller, delicate pieces. This elegant tapering creates an inherent sense of order and balance, guiding your styling with ease. Durably constructed with a robust framework, the open format keeps your cherished items accessible and visually connected to the room, entirely avoiding the heaviness of closed cabinetry. It stands as a striking architectural focal point, pairing beautifully with trailing botanicals, ceramic vessels, and framed art in any contemporary or transitional space.",
    features: [
      "Architectural Silhouette: A distinctive peaked apex design that draws the eye upward and adds striking visual interest.",
      "Tiered Display: Four narrowing shelves create a natural, beautifully balanced hierarchy for styling objects of varied sizes.",
      "Quiet Luxury: Finished in a clean-lined, refined aesthetic that beautifully complements contemporary and Scandi-inspired interiors.",
      "Heirloom Durability: Robustly constructed to provide stable, load-bearing support for your curated collections."
    ],
    sku: "24668", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "40L x 160W x 180H (cm)"
  },

  // --- 25. HALDON COLLECTION CONSOLE ---
  {
    id: 25,
    name: "Haldon Collection Console",
    price: 550, 
    category: "living", 
    collection: "haldon", 
    image: "/haldon-console-1.jpg", 
    gallery: [
      "/haldon-console-1.jpg", 
      "/haldon-console-2.jpg",
      "/haldon-console-3.jpg",
      "/haldon-console-4.jpg",
      "/haldon-console-5.jpg",
      "/haldon-console-6.jpg"
    ],
    description: "Elegant in its restraint and multifunctional in its purpose, the Haldon Collection Console brings a refined and considered presence to any hallway, living room, or bedroom setting. Its clean, slender profile provides a practical surface for everyday essentials—from keys and correspondence to curated decorative objects—without imposing on your floor space. Finished in the collection's signature quiet luxury, it integrates seamlessly within a broader Haldon scheme or stands with quiet confidence as a singular accent piece. Perfectly proportioned to act as a welcoming focal point in an entranceway, a sophisticated behind-sofa table, or an elegant bedroom vanity, it offers endless styling potential. Durably constructed for daily use, it provides a stable and reliable platform for your favorite statement mirror, architectural ceramics, or trailing botanicals.",
    features: [
      "Slender Elegance: A beautifully proportioned, space-efficient profile perfect for hallways, behind sofas, or as a bedroom vanity.",
      "Quiet Luxury: Finished in a refined, clean-lined aesthetic that seamlessly complements both modern and classic interiors.",
      "Versatile Canvas: An impeccable surface for styling with statement mirrors, sculptural ceramics, or warm lighting.",
      "Heirloom Construction: Durably engineered to provide a stable, long-lasting platform for your everyday essentials and curated displays."
    ],
    sku: "24673", 
    material: "Solid wood with a refined, clean-lined finish",
    dimensions: "40L x 140W x 76H (cm)"
  },

  // --- 26. LENNOX BLACK 2-DOOR SIDEBOARD ---
  {
    id: 26,
    name: "Lennox Black 2-Door Sideboard",
    price: 695, 
    category: "dining", 
    collection: "lennox", 
    image: "/lennox-sideboard-1.jpg", 
    gallery: [
      "/lennox-sideboard-1.jpg", 
      "/lennox-sideboard-2.jpg",
      "/lennox-sideboard-3.jpg",
      "/lennox-sideboard-4.jpg",
      "/lennox-sideboard-5.jpg",
      "/lennox-sideboard-6.jpg",
      "/lennox-sideboard-7.jpg"
    ],
    description: "Stately proportions and aesthetics define this statement piece from the Lennox Collection. Finished in a deep noir that accentuates its clean lines and architectural presence, this two-door sideboard achieves a perfect equilibrium of form and function. The balanced composition marries contemporary urban sensibilities with generous storage capabilities, while the subtly grained, scratch-resistant surface treatment demonstrates unparalleled craftsmanship. Its monochromatic palette ensures seamless integration across diverse interior schemes, serving as a striking anchor for your dining or living space. Style it magnificently with metallic wall art, geometric mirrors, or textural woven accessories to create a cohesive, modern narrative in your home. With a deliberate restraint in its design language, this sideboard promises enduring style and practical, everyday utility.",
    features: [
      "Modern Linear Framework: Clean architectural lines that bring a contemporary, urban sensibility to your space.",
      "Deep Noir Finish: A beautifully rich, scratch-resistant black finish with subtle grain detailing.",
      "Generous Concealed Storage: Two spacious doors open to maximize your organizational potential for dining or living essentials.",
      "Enduring Craftsmanship: Precisely engineered to ensure lasting structural integrity and daily reliability."
    ],
    sku: "23956", 
    material: "Solid wood with a scratch-resistant noir finish",
    dimensions: "34L x 123W x 84H (cm)",
    doors: "2"
  },

  // --- 27. LENNOX BLACK DRINKS UNIT ---
  {
    id: 27,
    name: "Lennox Black Drinks Unit",
    price: 895, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-drinks-unit-1.jpg", 
    gallery: [
      "/lennox-drinks-unit-1.jpg", 
      "/lennox-drinks-unit-2.jpg",
      "/lennox-drinks-unit-3.jpg",
      "/lennox-drinks-unit-4.jpg",
      "/lennox-drinks-unit-5.jpg",
      "/lennox-drinks-unit-6.jpg",
      "/lennox-drinks-unit-7.jpg",
      "/lennox-drinks-unit-8.jpg"
    ],
    description: "Marrying sharp, contemporary style with dedicated functionality for entertaining, the Lennox Black Drinks Unit is the ultimate statement piece for the modern host. Finished in the collection’s signature deep matte black, its architecture offers a considered composition of solid forms and open frameworks. A thoughtful mix of closed cabinetry, open shelving, and a dedicated top surface transforms the storage and service of drinks into a beautifully curated experience—providing a proper home for your finest decanters, glassware, and spirits. Robust metal accents reinforce the structure, adding an industrial-chic edge that contrasts beautifully with the dark finish. Whether claiming a corner of your living room, sitting proudly in a study, or functioning as a sleek partition in an open-plan space, this drinks unit is more than mere furniture. It acts as a striking focal point for social gatherings, elevating the everyday ritual of hosting into an art form.",
    features: [
      "Dedicated Entertaining: Purpose-built storage for elegantly displaying and serving barware, bottles, and spirits.",
      "Dynamic Architecture: A thoughtful mix of open shelving and closed cabinetry creates visual intrigue and practical organization.",
      "Industrial-Chic Accents: Sleek metal supports add a robust, modern edge that perfectly complements the deep matte black finish.",
      "Versatile Placement: A striking, self-contained silhouette that anchors a living room corner, study, or open-plan space."
    ],
    sku: "24563", 
    material: "Solid wood with a matte black finish and metal accents",
    dimensions: "39L x 50W x 183H (cm)"
  },

  // --- 28. LENNOX BLACK CONSOLE TABLE ---
  {
    id: 28,
    name: "Lennox Black Console Table",
    price: 495, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-console-1.jpg", 
    gallery: [
      "/lennox-console-1.jpg", 
      "/lennox-console-2.jpg",
      "/lennox-console-3.jpg",
      "/lennox-console-4.jpg",
      "/lennox-console-5.jpg"
    ],
    description: "Offering a harmonious blend of generous surface space and sculptural solidarity, the Lennox Black Console Table acts as a foundational element for your hallways and living areas. The substantial matte black tabletop provides a durable and striking stage for displaying curated art, statement lamps, or your daily essentials. Its support structure—combining solid panels with geometric metal framing—introduces visual weight and architectural interest, ensuring the design feels anchored and intentional. This robust base contrasts beautifully with the sleek top to create a dynamic yet balanced form. Perfectly proportioned to fit comfortably behind a sofa, in an entryway, or along a blank wall, it fulfills multiple roles from a practical catch-all to a beautifully curated display platform. The deep noir finish acts as a perfect backdrop, making decorative objects and books stand out with stunning clarity. Defining your space with confident, structured elegance, its timeless appeal and robust construction make it a lasting investment for the modern home.",
    features: [
      "Architectural Presence: A robust, geometric base blending solid wood and metal framing for a sculptural, anchored look.",
      "Matte Black Finish: A sleek, deep noir surface that serves as a stunning, high-contrast backdrop for your curated decor.",
      "Versatile Proportions: Beautifully scaled to act as an entryway focal point, a behind-sofa anchor, or an elegant living room accent.",
      "Heirloom Durability: Engineered with a substantial tabletop and robust base to provide a stable, long-lasting display platform."
    ],
    sku: "24565", 
    material: "Solid wood with a matte black finish and metal framing",
    dimensions: "40L x 130W x 81H (cm)"
  },

  // --- 29. LENNOX BLACK 2-DOOR SMALL SIDEBOARD ---
  {
    id: 29,
    name: "Lennox Black 2-Door Small Sideboard",
    price: 450, 
    category: "dining", 
    collection: "lennox", 
    image: "/lennox-small-sideboard-1.jpg", 
    gallery: [
      "/lennox-small-sideboard-1.jpg", 
      "/lennox-small-sideboard-2.jpg",
      "/lennox-small-sideboard-3.jpg",
      "/lennox-small-sideboard-4.jpg",
      "/lennox-small-sideboard-5.jpg",
      "/lennox-small-sideboard-6.jpg",
      "/lennox-small-sideboard-7.jpg",
      "/lennox-small-sideboard-8.jpg"
    ],
    description: "Presenting a compact statement of tailored sophistication, the Lennox Black 2-Door Small Sideboard is defined by a deep, muted black finish that offers a grounding neutrality to any room. Its silhouette balances clean, vertical lines with beautifully considered proportions, featuring two panelled doors that provide orderly, discreet storage. Subtle detailing and minimalist hardware accentuate the form, creating quiet visual interest without unnecessary ornamentation—perfect for spaces where understated elegance is paramount. It serves as a versatile storage anchor for dining rooms, hallways, or living spaces, offering a sophisticated home for tableware, linens, or media essentials while maintaining a perfectly clutter-free environment. The modest scale ensures it fits seamlessly into tighter floor plans or acts as an elegant supplementary piece in larger rooms, delivering maximum utility without the bulk. Crafted for dependable, everyday use, it features a stable carcass, smooth-opening doors, and intelligent interior organization. This practical focus makes it an essential solution for curated living, where form and purpose are in perfect harmony. Style it effortlessly with a ceramic table lamp, sculptural objects, and natural textures to create a truly refined vignette.",
    features: [
      "Compact Elegance: A modest, space-efficient footprint ideal for tight floor plans, hallways, or cozy dining nooks.",
      "Deep Noir Finish: A grounding, muted black aesthetic with clean architectural lines and minimalist hardware.",
      "Discreet Storage: Two elegantly panelled doors open to reveal versatile organization for tableware, linens, or media.",
      "Versatile Styling: Acts as a sophisticated, dark backdrop that pairs beautifully with warm woods, metallic accents, and sculptural ceramics."
    ],
    sku: "24562", 
    material: "Solid wood with a scratch-resistant noir finish",
    dimensions: "42L x 49W x 67H (cm)",
    doors: "2"
  },

  // --- 30. LENNOX BLACK SIDE TABLE ---
  {
    id: 30,
    name: "Lennox Black Side Table",
    price: 295, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-side-table-1.jpg", 
    gallery: [
      "/lennox-side-table-1.jpg", 
      "/lennox-side-table-2.jpg",
      "/lennox-side-table-3.jpg",
      "/lennox-side-table-4.jpg",
      "/lennox-side-table-5.jpg",
      "/lennox-side-table-6.jpg"
    ],
    description: "Functioning as a versatile and sculptural accent, the Lennox Black Side Table provides reliable surface space while contributing distinct, modern character to your living areas. It features a beautifully proportioned top in the collection's signature deep matte black, offering a stable platform for statement lamps, evening drinks, or curated books. The design interest is concentrated in the base, which takes the form of a striking geometric frame. This architectural focus adds a tactile and visual counterpoint to the sleek tabletop, transforming it from a simple table into a curated object in its own right. Its modest scale ensures easy placement, allowing it to be used singly to anchor a reading nook or in pairs to frame a sofa symmetrically. Merging unabashedly modern form with timeless utility, this side table serves as an essential finishing layer, bringing texture, purpose, and detail-oriented design to your home.",
    features: [
      "Sculptural Base: A striking geometric frame that adds architectural interest and beautiful tactile contrast.",
      "Matte Black Finish: The collection's signature deep noir surface, perfect for high-contrast interior styling.",
      "Compact Versatility: Modest proportions ideal for flanking a sofa, an armchair, or anchoring a cozy reading nook.",
      "Curated Utility: Merges unabashedly modern form with practical stability for your everyday essentials."
    ],
    sku: "24566", 
    material: "Solid wood with a matte black finish and architectural base",
    dimensions: "50L x 50W x 65H (cm)"
  },

  // --- 31. LENNOX BLACK 2-DOOR SIDE CUPBOARD ---
  {
    id: 31,
    name: "Lennox Black 2-Door Side Cupboard",
    price: 395, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-side-cupboard-1.jpg", 
    gallery: [
      "/lennox-side-cupboard-1.jpg", 
      "/lennox-side-cupboard-2.jpg",
      "/lennox-side-cupboard-3.jpg",
      "/lennox-side-cupboard-4.jpg",
      "/lennox-side-cupboard-5.jpg",
      "/lennox-side-cupboard-6.jpg",
      "/lennox-side-cupboard-7.jpg",
      "/lennox-side-cupboard-8.jpg"
    ],
    description: "Engineered to maximize space with elegant efficiency, the Lennox Black 2-Door Side Cupboard shares the collection's signature matte black palette and minimalist detailing. Its considered, low-profile silhouette allows it to sit beautifully beneath windows, in cozy alcoves, or along empty stretches of wall, providing highly accessible storage without visually overwhelming your room. The dual doors present a seamless, flush facade that maintains a clean, architectural aesthetic while concealing a generously shelved interior—perfect for organizing media, books, toys, or living room essentials. Designed for modern homes where spatial economy and style are paramount, this piece delivers exceptional utility while contributing to your room's overall harmony. Its sleek, horizontal lines help to anchor your space, proving that intelligent, tailored design can resolve storage challenges with quiet, sophisticated authority.",
    features: [
      "Low-Profile Elegance: A considered, shallow-height design perfect for placing beneath windows or in compact living spaces.",
      "Seamless Storage: Two flush, minimalist doors open to reveal a generously shelved interior for media, books, or daily essentials.",
      "Deep Noir Finish: Features the collection's signature matte black palette for a grounding, highly contemporary aesthetic.",
      "Architectural Harmony: Clean, horizontal lines that effortlessly anchor your space while maximizing practical organization."
    ],
    sku: "24564", 
    material: "Solid wood with a scratch-resistant noir finish",
    dimensions: "43L x 49W x 67H (cm)",
    doors: "2"
  },

  // --- 32. LENNOX BLACK FRAMED CONSOLE ---
  {
    id: 32,
    name: "Lennox Black FRAMED CONSOLE",
    price: 595, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-framed-console-1.jpg", 
    gallery: [
      "/lennox-framed-console-1.jpg", 
      "/lennox-framed-console-2.jpg",
      "/lennox-framed-console-3.jpg",
      "/lennox-framed-console-4.jpg"
    ],
    description: "A stunning fusion of industrial aesthetics and modern minimalism, the Lennox Black Framed Console anchors your space with absolute architectural precision. Its sleek, black linear frame creates a powerful silhouette, deliberately contrasting robust metalwork with airy, open spaces so the piece appears to almost float within its surroundings. Perfectly proportioned for hallways, behind floating sofas, or along feature walls, this console offers an impeccable stage for styling minimalist metal wall art, geometric mirrors, or sculptural monochromatic vases. Adapting effortlessly from urban lofts to refined, contemporary homes, its clean lines and considered design strike the perfect balance between form and function. Engineered with heirloom-quality durability and an enduring matte finish, this console is a lasting investment for the detail-oriented homeowner.",
    features: [
      "Architectural Silhouette: A powerful linear frame that balances industrial edge with airy, minimalist openness.",
      "Sleek Noir Finish: Features a deep, durable matte black finish that serves as a high-contrast canvas for decor.",
      "Versatile Proportions: Beautifully streamlined to anchor entryways, living spaces, or feature walls without overwhelming the room.",
      "Heirloom Durability: Expertly crafted with a robust framework to provide long-lasting stability and enduring style."
    ],
    sku: "23959", 
    material: "Solid wood top with a robust metal framework",
    dimensions: "36L x 132W x 81H (cm)"
  },

  // --- 33. LENNOX BLACK FRAMED SET OF 2 SIDE TABLES ---
  {
    id: 33,
    name: "Lennox Black Framed Set of 2 Side Tables",
    price: 395, 
    category: "living", 
    collection: "lennox", 
    image: "/lennox-nesting-tables-1.jpg", 
    gallery: [
      "/lennox-nesting-tables-1.jpg", 
      "/lennox-nesting-tables-2.jpg",
      "/lennox-nesting-tables-3.jpg",
      "/lennox-nesting-tables-4.jpg",
      "/lennox-nesting-tables-5.jpg"
    ],
    description: "Contemporary urban design meets highly adaptable functionality in this pair of Lennox Black Framed Side Tables. Embodying the collection's refined aesthetic, these tables feature striking black frames that create a dramatic silhouette while maintaining an airy, open presence that never overwhelms a room. The industrial-inspired metal framework demonstrates precise engineering and geometric precision. The clever nesting design provides endless flexibility—keep them clustered together for a beautifully layered display, or separate them when hosting to offer convenient surfaces for drinks and styling. Their minimalist profile makes them an impeccable choice for contemporary spaces where understated refinement is paramount. Style them with abstract sculptures, metallic accents, or low atmospheric lighting to create a complete, cohesive modern narrative.",
    features: [
      "Flexible Nesting Design: Two perfectly proportioned tables that can be layered together or separated for entertaining.",
      "Architectural Silhouette: Striking, clean-lined frames that deliver industrial-chic style with a visually light footprint.",
      "Matte Black Finish: A deep, sophisticated noir finish that grounds your space and highlights curated decor.",
      "Heirloom Durability: Precision-engineered with robust metal construction for unwavering stability and daily use."
    ],
    sku: "23958", 
    material: "Solid wood tops with a robust metal framework",
    dimensions: "59L x 59W x 61H (cm)"
  },

  // --- 34. RUTLAND COLLECTION RECTANGULAR DINING TABLE ---
  {
    id: 34,
    name: "The Rutland Collection Rectangular Dining Table",
    price: 1295, 
    category: "dining", 
    collection: "rutland", 
    image: "/rutland-dining-table-1.jpg", 
    gallery: [
      "/rutland-dining-table-1.jpg", 
      "/rutland-dining-table-2.jpg",
      "/rutland-dining-table-3.jpg",
      "/rutland-dining-table-4.jpg",
      "/rutland-dining-table-5.jpg",
      "/rutland-dining-table-6.jpg",
      "/rutland-dining-table-7.jpg",
      "/rutland-dining-table-8.jpg"
    ],
    description: "Robust engineering and refined aesthetics converge in this spectacular centerpiece from the Rutland Collection. Showcasing impeccable craftsmanship, this rectangular dining table features clean lines and balanced proportions that reflect the very best of modern British design. Unwavering attention to detail is evident through its sturdy construction and meticulous finishing, while the thoughtful dimensioning ensures generous seating capacity for entertaining without overwhelming your room. The understated yet confident design language makes it an impeccable anchor for any residential dining space. A neutral palette allows for seamless integration with your existing decor, yet it maintains a strong, focal presence. Pair it beautifully with artisanal table runners, contemporary centerpiece bowls, or statement metallic wall mirrors to amplify its sophisticated charm. Designed for the discerning homeowner, this table perfectly balances everyday practicality with refined, minimalist elegance and substantial heirloom-quality build.",
    features: [
      "Modern British Design: Clean lines and balanced proportions that create a confident, architectural centerpiece.",
      "Generous Entertaining: Thoughtfully dimensioned at 200cm to comfortably accommodate family gatherings and dinner parties.",
      "Adaptable Styling: A refined neutral palette that effortlessly complements a variety of modern and transitional decor schemes.",
      "Heirloom Construction: Precision-engineered joints and a robust framework ensure lasting stability and enduring daily use."
    ],
    sku: "23980", 
    material: "Solid wood with a contemporary surface treatment",
    dimensions: "100L x 200W x 76H (cm)"
  },

  // --- 35. THE RUTLAND COLLECTION ROUND COFFEE TABLE ---
  {
    id: 35,
    name: "The Rutland Collection Round Coffee Table",
    price: 495, 
    category: "living", 
    collection: "rutland", 
    image: "/rutland-coffee-table-1.jpg", 
    gallery: [
      "/rutland-coffee-table-1.jpg", 
      "/rutland-coffee-table-2.jpg",
      "/rutland-coffee-table-3.jpg",
      "/rutland-coffee-table-4.jpg",
      "/rutland-coffee-table-5.jpg",
      "/rutland-coffee-table-6.jpg"
    ],
    description: "A standout centerpiece from the Rutland Collection, this round coffee table exemplifies modern British craftsmanship with its clean, minimalist silhouette and superior materials. The pristine circular top presents an expansive surface that establishes a brilliant focal point for contemporary living spaces, naturally maximizing flow and breaking up the sharp lines of modern upholstery. Its thoughtfully proportioned design reflects light beautifully, creating dynamic, airy plays of illumination throughout the day. The architectural base provides unwavering stability without compromising the overall lightness of the piece, seamlessly combining physical substance with elevated style. When styled with complementary accents—such as glass hurricane lanterns, metallic decorative bowls, or textured trays—the table's inherent beauty is enhanced even further. Designed to anchor your living room, its refined presence ensures enduring appeal across changing trends, providing a sophisticated foundation that gracefully evolves with your changing decor.",
    features: [
      "Socially Centric Design: The circular profile naturally improves spatial flow and encourages conversation in your living area.",
      "Modern British Craftsmanship: Clean, minimalist lines and superior materials create a striking, light-reflecting focal point.",
      "Architectural Base: Designed to provide unwavering structural stability while maintaining a visually light, airy footprint.",
      "Dynamic Finish: Beautifully treated surfaces create engaging plays of illumination and adapt seamlessly to your interior styling."
    ],
    sku: "23985", 
    material: "Premium solid wood with a light-reflecting finish",
    dimensions: "90L x 90W x 40H (cm)"
  },

  // --- 36. THE RUTLAND COLLECTION ROUND DINING TABLE ---
  {
    id: 36,
    name: "The Rutland Collection Round Dining Table",
    price: 995, 
    category: "dining", 
    collection: "rutland", 
    image: "/rutland-round-dining-1.jpg", 
    gallery: [
      "/rutland-round-dining-1.jpg", 
      "/rutland-round-dining-2.jpg",
      "/rutland-round-dining-3.jpg",
      "/rutland-round-dining-4.jpg",
      "/rutland-round-dining-5.jpg",
      "/rutland-round-dining-6.jpg",
      "/rutland-round-dining-7.jpg",
      "/rutland-round-dining-8.jpg"
    ],
    description: "Within the distinguished Rutland Collection, this circular dining table represents the pinnacle of modern British craftsmanship. The expansive round surface creates an inviting focal point that naturally encourages meaningful conversation and shared moments. Its balanced proportions and refined silhouette demonstrate outstanding attention to detail, while superior materials ensure heirloom-quality durability. The table's adaptable, elegant design flourishes in both traditional and contemporary settings, offering a stunning foundation for your dining space. It pairs beautifully with decorative elements—like metalwork mirrors, soft ambient lighting, or an artisanal glass centerpiece that echoes the table's graceful curves. By merging uncompromising build quality with a welcoming, communal shape, this table acts as the perfect anchor for family meals and sophisticated dinner parties alike, seamlessly evolving with your home’s changing style.",
    features: [
      "Sociable Dining: The 120cm circular profile naturally improves spatial flow and encourages intimate, convivial conversation.",
      "Modern British Craftsmanship: Clean, balanced lines and superior materials create a striking, refined focal point.",
      "Enduring Adaptability: A versatile design that integrates flawlessly into both traditional and highly contemporary interiors.",
      "Heirloom Durability: Precision-engineered with a robust framework to provide long-lasting stability for daily use."
    ],
    sku: "23986", 
    material: "Premium solid wood with a contemporary surface treatment",
    dimensions: "120L x 120W x 76H (cm)"
  },

  // --- 37. THE RUTLAND COLLECTION CONSOLE TABLE ---
  {
    id: 37,
    name: "The Rutland Collection Console Table",
    price: 550, 
    category: "living", 
    collection: "rutland", 
    image: "/rutland-console-1.jpg", 
    gallery: [
      "/rutland-console-1.jpg", 
      "/rutland-console-2.jpg",
      "/rutland-console-3.jpg",
      "/rutland-console-4.jpg",
      "/rutland-console-5.jpg",
      "/rutland-console-6.jpg",
      "/rutland-console-7.jpg",
      "/rutland-console-8.jpg"
    ],
    description: "Showcasing an unparalleled blend of form and finesse, the Rutland Collection Console Table is an architectural statement that defines modern luxury. Its thoughtfully proportioned 150cm silhouette and harmonious fusion of materials pair beautifully with minimalist decor while maintaining a commanding presence as a centerpiece. The distinguished construction reveals impeccable attention to detail through every curve and connection, reflecting a true commitment to heirloom-quality excellence. Designed to serve as a stunning focal point in an entryway, living room, or hallway, its clean lines meet functional beauty in perfect equilibrium. The versatile neutral palette allows for seamless integration into diverse interior schemes, from understated metropolitan spaces to richly layered traditional environments. Style it effortlessly with metallic vessels, abstract sculptures, or your favorite statement mirror to create a curated, sophisticated vignette.",
    features: [
      "Architectural Presence: A harmonious fusion of materials and clean lines that creates a striking modern focal point.",
      "Versatile Proportions: Generously scaled at 150cm wide to anchor hallways, living spaces, or feature walls beautifully.",
      "Adaptable Styling: A refined neutral palette that integrates seamlessly into both contemporary and traditional interior schemes.",
      "Heirloom Craftsmanship: Distinguished construction with impeccable attention to detail, built to provide lasting stability and enduring style."
    ],
    sku: "23982", 
    material: "Premium solid wood with an architectural base",
    dimensions: "40L x 150W x 80H (cm)"
  },

  // --- 38. THE RUTLAND COLLECTION RECTANGULAR BENCH ---
  {
    id: 38,
    name: "The Rutland Collection Rectangular Bench",
    price: 395, 
    category: "dining", 
    collection: "rutland", 
    image: "/rutland-bench-1.jpg", 
    gallery: [
      "/rutland-bench-1.jpg", 
      "/rutland-bench-2.jpg",
      "/rutland-bench-3.jpg",
      "/rutland-bench-4.jpg",
      "/rutland-bench-5.jpg",
      "/rutland-bench-6.jpg",
      "/rutland-bench-7.jpg",
      "/rutland-bench-8.jpg"
    ],
    description: "Minimalist authenticity meets luxury living in this rectangular bench from the distinguished Rutland Collection. Exemplifying superior British craftsmanship with its clean lines and considered proportions, it serves as a beautifully versatile addition to the modern home. Its understated silhouette harmonizes seamlessly with both traditional and contemporary settings, while the generous 160cm dimension allows for flexible placement in entryways, alongside dining tables, or as statement seating in an open-plan space. The collection's signature aesthetic shines through in the bench's balanced composition and meticulous attention to detail, reflecting a commitment to enduring quality. When styled with decorative cushions or layered with a textured throw, it easily transforms into an inviting focal point. The refined neutral palette ensures effortless integration into your existing decor, while the robust construction promises heirloom-quality longevity.",
    features: [
      "Superior Craftsmanship: Clean lines and balanced proportions that reflect the elegance of modern British design.",
      "Multi-Room Versatility: Generously scaled at 160cm for flexible placement in dining spaces, entryways, or living areas.",
      "Adaptable Styling: A refined neutral palette that integrates perfectly into diverse interior schemes.",
      "Heirloom Durability: Robustly constructed using premium materials to ensure lasting stability and everyday utility."
    ],
    sku: "23981", 
    material: "Premium solid wood construction",
    dimensions: "40L x 160W x 45H (cm)"
  },

  // --- 39. THE RUTLAND COLLECTION ROUND SIDE TABLE ---
  {
    id: 39,
    name: "The Rutland Collection Round Side Table",
    price: 295, 
    category: "living", 
    collection: "rutland", 
    image: "/rutland-round-side-table-1.jpg", 
    gallery: [
      "/rutland-round-side-table-1.jpg", 
      "/rutland-round-side-table-2.jpg",
      "/rutland-round-side-table-3.jpg",
      "/rutland-round-side-table-4.jpg",
      "/rutland-round-side-table-5.jpg",
      "/rutland-round-side-table-6.jpg"
    ],
    description: "A masterful blend of modern aesthetics and functional design, this circular side table represents a beautiful accent piece from the distinguished Rutland Collection. The perfectly proportioned round silhouette demonstrates unmatched attention to detail, featuring flawless joinery and superior materials that showcase the true quality of British furniture making. The balanced proportions and thoughtful design make this piece an ideal addition to contemporary living spaces, while its understated profile allows it to harmonize seamlessly with both minimalist and richly decorated interiors. As part of the wider Rutland Collection, this side table maintains cohesive design elements that flow throughout the range. For maximum visual impact, consider pairing it with a curated selection of metallic vases, a contemporary table lamp, or artisanal glass decorative pieces. The table's surface provides the perfect platform for displaying statement accents, while its considered dimensions ensure it fits beautifully into any room arrangement.",
    features: [
      "Impeccable Form: A perfectly proportioned circular silhouette ideal for corner or beside-sofa placement.",
      "Heirloom Durability: Superior construction ensures lasting stability and dependable everyday utility.",
      "Cohesive Aesthetic: Matches seamlessly with the broader Rutland Collection for a unified interior look.",
      "Versatile Styling: An understated profile that beautifully grounds both minimalist and layered, richly decorated rooms."
    ],
    sku: "23984", 
    material: "Premium solid wood with flawless joinery",
    dimensions: "60L x 60W x 60H (cm)"
  },

  // --- 40. THE RUTLAND COLLECTION SQUARE SIDE TABLE ---
  {
    id: 40,
    name: "The Rutland Collection Side Table",
    price: 295, 
    category: "living", 
    collection: "rutland", 
    image: "/rutland-square-side-table-1.jpg", 
    gallery: [
      "/rutland-square-side-table-1.jpg", 
      "/rutland-square-side-table-2.jpg",
      "/rutland-square-side-table-3.jpg",
      "/rutland-square-side-table-4.jpg",
      "/rutland-square-side-table-5.jpg",
      "/rutland-square-side-table-6.jpg"
    ],
    description: "Exemplifying modern British craftsmanship with its clean lines and perfectly balanced square proportions, this side table is a masterclass in functional elegance. Part of the distinguished Rutland Collection, it demonstrates superb attention to detail and a seamless fusion of materials, creating an atmosphere of understated luxury tailored for contemporary living. Its thoughtfully measured dimensions provide the perfect platform for displaying cherished objects, a sculptural table lamp, or serving evening refreshments. The table's restrained yet impactful presence makes it particularly well-suited to urban dwellings where space and style must coexist harmoniously. Whether sitting beautifully in a minimalist setting or anchoring a richly layered environment, it pairs effortlessly with metallic accents, artisanal glass vessels, and textured decorative elements to elevate your home's aesthetic.",
    features: [
      "Superior Craftsmanship: Crafted to exacting standards with premium materials for lasting stability.",
      "Adaptable Scale: Perfectly proportioned at 60cm to suit multiple room layouts and urban living spaces.",
      "Versatile Styling: Coordinates seamlessly with decorative accessories, metallic accents, and textured decor.",
      "Architectural Presence: Clean lines and a square profile provide an anchor of understated luxury."
    ],
    sku: "23983", 
    material: "Premium solid wood construction",
    dimensions: "60L x 60W x 60H (cm)"
  },

  // --- 41. THE CAMDEN COLLECTION LARGE TWO DRAWER CONSOLE TABLE ---
  {
    id: 41,
    name: "The Camden Collection Large Two Drawer Console Table",
    price: 695, 
    category: "living", 
    collection: "camden", 
    image: "/camden-console-table-1.jpg", 
    gallery: [
      "/camden-console-table-1.jpg", 
      "/camden-console-table-2.jpg",
      "/camden-console-table-3.jpg",
      "/camden-console-table-4.jpg",
      "/camden-console-table-5.jpg"
    ],
    description: "A testament to modern design sensibility, the Camden Collection Large Two-Drawer Console Table showcases clean lines and flawless proportions. Its purposeful two-drawer configuration provides discreet storage while maintaining an airy, uncluttered silhouette that flourishes in contemporary living spaces. Carefully considered dimensions allow for practical placement in entryways, living areas, or as a sophisticated behind-sofa display surface. Demonstrating the Camden Collection's commitment to the seamless integration of form and function, subtle details reflect exceptional craftsmanship throughout. The table's restrained yet impactful presence makes it an impeccable foundation for styling with statement mirrors, sculptural ceramics, or curated artwork. Designed for the discerning homeowner, its adaptable, enduring aesthetic effortlessly bridges the gap between traditional charm and understated modern luxury.",
    features: [
      "Discreet Storage: Two smooth-gliding drawers maximize organization while maintaining a clean, uncluttered facade.",
      "Versatile Proportions: Perfectly scaled at 120cm wide to anchor hallways, rest behind sofas, or elevate living spaces.",
      "Adaptable Styling: Clean lines and a refined aesthetic seamlessly complement both modern and transitional decor.",
      "Heirloom Quality: Expertly crafted with premium materials to ensure lasting stability and everyday utility."
    ],
    sku: "23955", 
    material: "Premium solid wood with refined hardware",
    dimensions: "40L x 120W x 81H (cm)",
    doors: "2 (Drawers)"
  },

  // --- 42. THE CAMDEN COLLECTION TWO DRAWER CONSOLE TABLE ---
  {
    id: 42,
    name: "The Camden Collection Two-Drawer Console Table",
    price: 495, 
    category: "living", 
    collection: "camden", 
    image: "/camden-compact-console-1.jpg", 
    gallery: [
      "/camden-compact-console-1.jpg", 
      "/camden-compact-console-2.jpg",
      "/camden-compact-console-3.jpg",
      "/camden-compact-console-4.jpg",
      "/camden-compact-console-5.jpg",
      "/camden-compact-console-6.jpg"
    ],
    description: "Unparalleled refinement meets functional design in this two-drawer console from the Camden Collection. Distinguished by its clean lines and perfectly measured proportions, this piece exhibits superior craftsmanship perfectly suited for the modern home. The understated silhouette displays meticulous attention to detail in every aspect, from the precisely fashioned drawer fronts to the thoughtfully arranged storage space. A lustrous finish enhances the natural characteristics of the wood, creating an atmosphere of understated luxury that effortlessly complements both traditional and contemporary settings. Making an elegant addition to any curated interior space, this console anchors your room while providing highly practical organization. Style it effortlessly with a statement wall mirror, atmospheric table lamps, or geometric decorative objects to complete its refined look. An authentic investment in enduring style, this console table promises to maintain its sophisticated appeal across changing interior trends.",
    features: [
      "Compact Elegance: Beautifully scaled at 90cm wide, making it an ideal fit for narrow hallways, alcoves, or smaller living spaces.",
      "Discreet Storage: Two seamlessly integrated drawers offer practical, elegant organization for your everyday essentials.",
      "Premium Engineering: Built with solid wood construction and precision-engineered drawer mechanisms for smooth, reliable daily use.",
      "Lustrous Finish: An expertly applied finish that enhances the natural wood grain, delivering an atmosphere of understated luxury."
    ],
    sku: "23954", 
    material: "Solid wood with a lustrous natural finish",
    dimensions: "35L x 90W x 81H (cm)",
    doors: "2 (Drawers)"
  },

  // --- 43. THE CAMDEN COLLECTION 3-DRAWER ROUND SIDE TABLE ---
  {
    id: 43,
    name: "The Camden Collection 3-Drawer Round Side Table",
    price: 350, 
    category: "living", 
    collection: "camden", 
    image: "/camden-round-side-table-1.jpg", 
    gallery: [
      "/camden-round-side-table-1.jpg", 
      "/camden-round-side-table-2.jpg"
    ],
    description: "A distinctive circular side table that delivers modern functionality with refined style, this three-drawer piece from the Camden Collection showcases intelligent design through its balanced proportions and considered details. The elegant round silhouette creates an inviting focal point while beautifully maximizing space efficiency in any room setting. Its carefully crafted construction demonstrates superior attention to detail, from the precise drawer alignment to the whisper-quiet mechanisms that ensure lasting reliability. Perfectly scaled for both compact spaces and larger rooms, it offers highly practical concealed storage without ever compromising on visual appeal. Whether sitting beside a reading chair or acting as a sophisticated bedside companion, its neutral palette harmonizes effortlessly with contemporary and traditional interiors alike. Style it beautifully with a decorative table lamp, artisanal vase, or curated objets d'art to complete your space.",
    features: [
      "Smart Organization: Three smooth-operating drawers offer highly practical, concealed storage for everyday essentials.",
      "Space-Maximizing Silhouette: The elegant circular design naturally softens a room's aesthetic while fitting perfectly into compact corners.",
      "Premium Engineering: Crafted with precise drawer alignment and high-quality mechanisms for lasting, dependable reliability.",
      "Versatile Placement: Beautifully proportioned to serve as an elegant living room accent or a sophisticated bedside table."
    ],
    sku: "23952", 
    material: "Solid wood with a refined finish and smooth-operating hardware",
    dimensions: "45L x 45W x 66H (cm)",
    doors: "3 (Drawers)"
  },

  // --- 44. THE CAMDEN COLLECTION ONE-DRAWER SIDE TABLE ---
  {
    id: 44,
    name: "The Camden Collection One-Drawer Side Table",
    price: 250, 
    category: "living", 
    collection: "camden", 
    image: "/camden-one-drawer-side-table-1.jpg", 
    gallery: [
      "/camden-one-drawer-side-table-1.jpg", 
      "/camden-one-drawer-side-table-2.jpg",
      "/camden-one-drawer-side-table-3.jpg",
      "/camden-one-drawer-side-table-4.jpg",
      "/camden-one-drawer-side-table-5.jpg",
      "/camden-one-drawer-side-table-6.jpg"
    ],
    description: "Embodying the refined simplicity that defines the Camden Collection, this minimalist one-drawer side table is a masterclass in understated craftsmanship. The perfectly balanced silhouette and clean lines allow it to sit harmoniously in both traditional and highly contemporary spaces. Thoughtfully scaled, its considered dimensions make it an exceptionally adaptable addition, particularly suited for intimate living areas or as a sophisticated bedside companion. The seamlessly integrated drawer provides highly practical, discreet storage for your daily essentials while maintaining the table's sleek, uncluttered aesthetic. Crafted from premium materials to ensure lasting stability and heirloom durability, this piece pairs beautifully with metallic accents, polished picture frames, or textured ceramics to create a cohesive, curated vignette in your home.",
    features: [
      "Discreet Storage: A seamlessly integrated single drawer offers smart, hidden organization for everyday essentials.",
      "Minimalist Elegance: Clean lines and a beautifully balanced silhouette that complement both traditional and modern decor.",
      "Versatile Proportions: Thoughtfully scaled at 50cm wide, making it an ideal companion beside an armchair or as a refined nightstand.",
      "Heirloom Construction: Expertly crafted with premium materials to ensure lasting stability and enduring daily utility."
    ],
    sku: "23953", 
    material: "Solid wood with a refined natural finish",
    dimensions: "38L x 50W x 75H (cm)",
    doors: "1 (Drawer)"
  },

  // --- 45. THE CAMDEN COLLECTION ROUND SIDE TABLE ---
  {
    id: 45,
    name: "The Camden Collection Round Side Table",
    price: 250, 
    category: "living", 
    collection: "camden", 
    image: "/camden-round-accent-table-1.jpg", 
    gallery: [
      "/camden-round-accent-table-1.jpg", 
      "/camden-round-accent-table-2.jpg",
      "/camden-round-accent-table-3.jpg",
      "/camden-round-accent-table-4.jpg"
    ],
    description: "Modern aesthetics merge seamlessly with practical design in this circular accent piece from the Camden Collection. The round silhouette presents a harmonious blend of materials that creates a striking statement in any setting, whether positioned as a standalone highlight or paired thoughtfully within a curated space. Its carefully considered proportions make it an ideal companion for contemporary living areas, bedrooms, or entryways, where its sleek presence adds immediate depth and visual interest. Maintaining the collection's dedication to heirloom-quality construction, it offers a fresh, elegant interpretation of classic forms. The design particularly flourishes when styled with complementary accents such as mirrored wall art, sculptural vases, or metallic-finish trinket boxes. Demonstrating a true understanding of modern design principles, its adaptable style allows it to harmonize flawlessly with both minimalist and richly decorated spaces.",
    features: [
      "Compact Elegance: A perfectly scaled 45cm circular profile that easily fits into cozy nooks, entryways, or beside an armchair.",
      "Versatile Application: Serves beautifully as a living room accent table, a sophisticated nightstand, or a chic entryway drop-zone.",
      "Curated Styling: A refined aesthetic that pairs brilliantly with mirrored decor, metallic accents, and sculptural ceramics.",
      "Heirloom Quality: Expertly crafted with premium materials to ensure lasting stability and enduring style."
    ],
    sku: "23949", 
    material: "Premium solid wood with a refined finish",
    dimensions: "45L x 45W x 60H (cm)"
  },

  // --- 46. THE CAMDEN COLLECTION TALL ROUND SIDE TABLE ---
  {
    id: 46,
    name: "The Camden Collection Tall Round Side Table",
    price: 295, 
    category: "living", 
    collection: "camden", 
    image: "/camden-tall-round-side-table-1.jpg", 
    gallery: [
      "/camden-tall-round-side-table-1.jpg", 
      "/camden-tall-round-side-table-2.jpg",
      "/camden-tall-round-side-table-3.jpg"
    ],
    description: "A stunning achievement in modern furniture design, this tall round side table exemplifies the meticulous attention to detail found throughout the Camden Collection. The elegant circular silhouette naturally enhances spatial flow in any room, while its considered 76cm height makes it an ideal companion piece for modern, high-arm seating arrangements or as a standalone display pedestal. The proportions have been carefully calculated to maintain visual balance without compromising on practicality. Each element reflects a dedication to superior materials and refined aesthetics, creating a statement piece that seamlessly blends form and function. Its clean lines and balanced profile make it an effortlessly adaptable addition to diverse interior styles, from minimalist urban settings to richly layered traditional spaces. When styled with curated accents—such as a statement table lamp, cascading botanicals, or a metallic candle holder—this side table becomes the cornerstone of a cohesive design narrative. The elevated height allows for dynamic layering of decorative elements, proving that intelligent design can serve both practical and exquisitely aesthetic purposes in the modern home.",
    features: [
      "Elevated Proportions: A thoughtfully considered 76cm height perfect for flanking taller seating or creating a dynamic display pedestal.",
      "Spatial Flow: The elegant circular design softens harsh architectural lines and maximizes flow within your living space.",
      "Heirloom Construction: Precision-engineered with superior materials to ensure unwavering stability and lasting quality.",
      "Versatile Styling: Clean lines and a refined aesthetic allow it to integrate seamlessly into both minimalist and traditional interiors."
    ],
    sku: "23950", 
    material: "Premium solid wood with a refined finish",
    dimensions: "45L x 45W x 76H (cm)"
  },

  // --- 47. THE CAMDEN COLLECTION HALF MOON 3-TIER TABLE ---
  {
    id: 47,
    name: "The Camden Collection Half Moon 3-Tier Table",
    price: 450, 
    category: "living", 
    collection: "camden", 
    image: "/camden-half-moon-table-1.jpg", 
    gallery: [
      "/camden-half-moon-table-1.jpg", 
      "/camden-half-moon-table-2.jpg",
      "/camden-half-moon-table-3.jpg",
      "/camden-half-moon-table-4.jpg",
      "/camden-half-moon-table-5.jpg",
      "/camden-half-moon-table-6.jpg"
    ],
    description: "Gracefully proportioned with three ascending tiers, this striking demilune statement piece from the Camden Collection exemplifies refined sensibility. The half-moon silhouette presents a seamless union of functional display and space-efficient design, making it an indispensable addition to hallways, tight entryways, or sophisticated living spaces. Each tier offers an elegant platform for displaying your cherished objects, while the graduated levels naturally create visual intrigue through dimensional layering. The table's distinctive curvature harmonizes with both classic and modern interior schemes, demonstrating remarkable adaptability across diverse style preferences. When paired with a statement decorative mirror or warm ambient lighting, this piece orchestrates a cohesive, elevated design narrative. The premium materials and construction reflect unwavering attention to detail, ensuring heirloom-quality durability. Consider styling it with metallic accessories, architectural glass vases, or organic pottery pieces to amplify its inherent refinement.",
    features: [
      "Multi-Level Display: Three graduated tiers provide a dynamic, elegant platform for showcasing curated decor, books, or trailing botanicals.",
      "Space-Saving Demilune Profile: The elegant half-moon shape sits perfectly flush against walls, maximizing floor space in hallways or compact rooms.",
      "Adaptable Elegance: Features a distinctive, sweeping curvature that harmonizes flawlessly with both traditional and contemporary interior styling.",
      "Heirloom Quality: Crafted with premium materials and unwavering attention to detail to ensure lasting stability and enduring beauty."
    ],
    sku: "23951", 
    material: "Solid wood with a refined finish",
    dimensions: "33L x 71W x 76H (cm)"
  },

  // --- 48. CROSS BACK DINING CHAIR (UNBRANDED) ---
  {
    id: 48,
    name: "Cross Back Dining Chair",
    price: 145,
    category: "dining", 
    collection: "", 
    image: "/cross-back-chair-1.jpg", 
    gallery: [
      "/cross-back-chair-1.jpg", 
      "/cross-back-chair-2.jpg",
      "/cross-back-chair-3.jpg",
      "/cross-back-chair-4.jpg",
      "/cross-back-chair-5.jpg"
    ],
    description: "Discover our Cross Back Chair: a perfect blend of Elm wood, comfort, and durability. Ideal for homes and restaurants alike, this versatile seat offers timeless style and lasting quality. Designed with practicality and comfort in mind, this piece makes for a remarkably hard-wearing dining chair. It features a cross-back design which adds ergonomic support, while the black finish of the metal gives a subtle industrial feel. The chair is finished with a traditional rush seat, ideal for comfort and longevity. Durable enough for the catering sector and a fantastically timeless addition to the modern home.",
    features: [
      "Premium Materials: Handcrafted from beautiful, hard-wearing Elm wood.",
      "Traditional Comfort: Features a hand-woven rush seat designed for long-lasting comfort.",
      "Industrial Edge: A stylish black metal cross-back provides sturdy support and visual contrast.",
      "Commercial Grade: Built with exceptional durability suitable for both busy homes and restaurants."
    ],
    sku: "20571", 
    material: "Elm wood, metal framing, and a rush seat",
    dimensions: "41L x 42W x 88H (cm)"
  },

  // --- 49. ADJUSTABLE TRACTOR SEAT (UNBRANDED) ---
  {
    id: 49,
    name: "Adjustable Tractor Seat",
    price: 125,
    category: "dining", 
    collection: "", 
    image: "/adjustable-tractor-seat-1.jpg", 
    gallery: [
      "/adjustable-tractor-seat-1.jpg", 
      "/adjustable-tractor-seat-2.jpg",
      "/adjustable-tractor-seat-3.jpg",
      "/adjustable-tractor-seat-4.jpg",
      "/adjustable-tractor-seat-5.jpg"
    ],
    description: "Elevate any space with this adjustable Tractor Seat, blending practical comfort and bold industrial style. The height-adjustable design and contoured seat ensure optimal ergonomics, while the sleek black metal lends a modern, eye-catching appeal. A perfectly practical and stylish addition of seating to inject personality into any interior whether it be a home, bar, hotel, or venue. The stool easily adjusts in height, while the seat has been shaped to ensure maximum comfort. The use of black metal gives a bold industrial feel that can be complemented with a range of other furnishings and styles to create your ideal look.",
    features: [
      "Industrial Styling: Bold black metal construction perfect for modern, loft, or eclectic interiors.",
      "Handcrafted Quality: Beautifully made and incredibly stylish for both residential and commercial spaces.",
      "Ergonomic Comfort: Features a contoured tractor-style seat designed for extended sitting.",
      "Adjustable Height: Easily adapts to fit various counter, bar, or dining table heights."
    ],
    sku: "19925", 
    material: "Sleek black metal",
    dimensions: "37L x 37W x 86H (cm)"
  },

  // --- 50. LIVE EDGE BENCH (UNBRANDED) ---
  {
    id: 50,
    name: "Live Edge Acacia Wood Bench",
    price: 295, 
    category: "dining", 
    collection: "", 
    image: "/live-edge-bench-1.jpg", 
    gallery: [
      "/live-edge-bench-1.jpg", 
      "/live-edge-bench-2.jpg",
      "/live-edge-bench-3.jpg",
      "/live-edge-bench-4.jpg",
      "/live-edge-bench-5.jpg"
    ],
    description: "Bring the raw splendor of Indian acacia wood into your retail space with this remarkable bench, featuring an authentic live edge that tells a unique story in every piece. The natural grain patterns and organic contours create an arresting visual narrative, while the understated grey metal cross-leg frame provides an industrial contrast to the wood's rustic character. This bench embodies the minimal, earthy aesthetics that modern homes actively seek, making it a reliable and striking addition in both traditional and contemporary settings. Perfect for dining spaces or as a statement hallway piece. To create a cohesive display, pair this piece with organic refinement like potted orchids, faux pampas grass, or ceramic accent bowls to seamlessly enhance the bench's natural elements.",
    features: [
      "Authentic Live Edge: Every bench features completely individual organic contours and natural wood grain.",
      "Earthy Minimalism: Beautiful Indian acacia wood brings a raw, handcrafted beauty to your space.",
      "Industrial Contrast: Supported by an understated, sturdy grey metal cross-leg frame.",
      "Versatile Styling: A reliable, striking centerpiece for dining rooms, hallways, or open-plan living areas."
    ],
    sku: "19744", 
    material: "Indian acacia wood and grey metal frame",
    dimensions: "40L x 180W x 45H (cm)"
  },

  // --- 51. FRANKLIN HARDWOOD SHAPED BAR STOOL (UNBRANDED) ---
  {
    id: 51,
    name: "Franklin Hardwood Shaped Bar Stool",
    price: 135,
    category: "dining", 
    collection: "", 
    image: "/franklin-bar-stool-1.jpg", 
    gallery: [
      "/franklin-bar-stool-1.jpg", 
      "/franklin-bar-stool-2.jpg",
      "/franklin-bar-stool-3.jpg",
      "/franklin-bar-stool-4.jpg"
    ],
    description: "This is the Franklin Hardwood Shaped Barstool. It features a beautifully crafted hardwood seat with complementing metal legs and frame. This immensely popular bar stool design effortlessly complements an extensive range of interiors, making it an ideal choice for a residential kitchen island, home bar, or commercial restaurant and hotel settings. Featuring a contoured, shaped seat, this barstool offers the perfect combination of industrial style, daily practicality, and genuine comfort.",
    features: [
      "Industrial Styling: A perfect pairing of a solid hardwood seat and a robust metal frame.",
      "Handcrafted Quality: Beautifully made and incredibly stylish for any interior setting.",
      "Ergonomic Comfort: Features a carefully shaped hardwood seat for extended sitting.",
      "Versatile Application: Highly popular design suited for kitchens, home bars, restaurants, or hotels."
    ],
    sku: "19924", 
    material: "Hardwood seat and metal frame",
    dimensions: "35L x 40W x 75H (cm)"
  },

  // --- 52. BLOOM COLLECTION OUTDOOR SOFA ---
  {
    id: 52,
    name: "Bloom Collection Outdoor Sofa",
    price: 1495,
    category: "outdoor", 
    collection: "bloom", 
    image: "/bloom-outdoor-sofa-1.jpg", 
    gallery: [
      "/bloom-outdoor-sofa-1.jpg", 
      "/bloom-outdoor-sofa-2.jpg",
      "/bloom-outdoor-sofa-3.jpg",
      "/bloom-outdoor-sofa-4.jpg"
    ],
    description: "Luxurious outdoor seating awaits with this sophisticated sofa that redefines contemporary garden living through its thoughtful design elements and superior construction. The piece showcases clean lines and modern proportions that create an inviting focal point for any outdoor space, whilst maintaining the refined aesthetic standards expected from the Bloom Collection. Rich textures and carefully selected materials combine to deliver a statement piece that seamlessly bridges indoor comfort with outdoor durability, making it an ideal choice for discerning customers seeking quality garden furniture. The sofa's generous proportions accommodate multiple guests comfortably, whilst its streamlined silhouette ensures it won't overwhelm smaller spaces, demonstrating remarkable adaptability across various garden settings. Weather-resistant fabrics and robust frame construction guarantee longevity in outdoor environments, providing retailers with confidence in product performance and customer satisfaction. The neutral colour palette allows for easy integration with existing garden schemes whilst providing the perfect backdrop for seasonal accessories and decorative elements. The piece's substantial presence commands attention whilst maintaining the understated sophistication that defines the Bloom Garden Furniture Range.",
    features: [
      "Contemporary Comfort: Combines comfort with modern design, perfect for sophisticated garden entertaining spaces.",
      "Generous Proportions: Ample seating capacity accommodates multiple guests with ease.",
      "Enduring Quality: Weather-resistant fabrics and robust frame construction guarantee longevity in outdoor environments.",
      "Adaptable Styling: A neutral colour palette allows for easy integration with existing garden schemes."
    ],
    sku: "24517", 
    material: "Weather-resistant fabric and robust frame",
    dimensions: "108L x 202W x 72H (cm)"
  },

  // --- 53. PROVENCE COLLECTION OUTDOOR SUN LOUNGER SET ---
  {
    id: 53,
    name: "Provence Collection Outdoor Sun Lounger Set",
    price: 895, 
    category: "outdoor", 
    collection: "provence", 
    image: "/provence-sun-lounger-1.jpg", 
    gallery: [
      "/provence-sun-lounger-1.jpg", 
      "/provence-sun-lounger-2.jpg"
    ],
    description: "Bask in the ultimate outdoor luxury with this stunning sun lounger set, arriving Spring '25 as part of our coveted Provence Collection. Crafted with meticulous attention to detail, these loungers represent the perfect marriage of aesthetic appeal and resilient construction. The substantial 5mm round HDPE wicker weave delivers an authentic rattan appearance while offering superior weather resistance that ordinary garden furniture simply cannot match. The lightweight yet robust powder-coated aluminium frame ensures these pieces remain completely resistant to rust and corrosion, allowing them to withstand year-round exposure to the elements. When your customers seek furniture that maintains its pristine condition despite challenging weather conditions, these loungers deliver unmatched performance. The thoughtfully designed seat cushions, upholstered in grade 5 Olefin fabric, offer remarkable resistance to moisture, UV damage, and mildew while drying quickly after exposure to rain. This practical consideration means less maintenance and more enjoyment for end users. The included 60cm Acacia wood table adds a touch of natural beauty with its renowned strength and distinctive grain patterns. For retailers looking to create enticing visual displays, consider pairing this lounger set with complementary accessories from our Provence Collection, such as our weather-resistant outdoor cushions in coordinating coastal tones, our collection of marine-inspired lanterns, or our signature outdoor rugs that echo the sophisticated weave pattern of the loungers. The neutral palette and refined silhouette of these pieces make them incredibly desirable for consumers seeking to create an atmosphere of resort-style comfort in their own gardens or patios. When stocked alongside our matching planters and decorative outdoor lighting options, these loungers help customers visualise a complete outdoor living solution that promises comfort, style and durability for seasons to come.",
    features: [
      "Authentic Design: Luxurious sun loungers with authentic 5mm HDPE wicker and rust-resistant aluminium frames.",
      "Low Maintenance Comfort: Quick-drying Olefin cushions provide supreme comfort with minimal maintenance.",
      "Enduring Quality: Superior grade 5 Olefin fabric resists moisture and UV damage, remaining outdoors year-round.",
      "Complete Set: Includes a matching 60cm Acacia wood side table for natural beauty and renowned strength."
    ],
    sku: "23911", 
    material: "5mm HDPE wicker, aluminium frames, Olefin cushions, Acacia wood table",
    dimensions: "164L x 77W x 87H (cm)"
  },

  // --- 54. CAPRI COLLECTION OUTDOOR CORNER SET ---
  {
    id: 54,
    name: "Capri Collection Outdoor Large Corner And Coffee Table Set",
    price: 1895, 
    category: "outdoor", 
    collection: "capri", 
    image: "/capri-corner-set-1.jpg", 
    gallery: [
      "/capri-corner-set-1.jpg", 
      "/capri-corner-set-2.jpg", 
      "/capri-corner-set-3.jpg", 
      "/capri-corner-set-4.jpg"
    ],
    description: "Transform your outdoor space into a luxurious retreat with this stunning Large Corner and Coffee Table Set from the Capri Collection. The graceful lines and substantial proportions of this outdoor furniture ensemble create a focal point for al fresco entertaining that rivals indoor comforts. Designed with both style and practicality in mind, the generous seating configuration accommodates multiple guests whilst the accompanying coffee table provides ample space for refreshments and decorative items. The robust construction ensures weather resilience throughout changing seasons, making it an investment piece for years of outdoor enjoyment. When merchandising this set in your showroom, consider positioning it as the cornerstone of a complete outdoor entertainment area. The neutral palette works harmoniously with a variety of garden settings, from contemporary urban balconies to expansive country patios. For retailers seeking to increase basket value, suggest pairing with complementary accessories from the Capri Collection such as decorative outdoor cushions, weather-resistant throws, and atmospheric garden lighting options. The modular nature of the corner arrangement offers flexibility for different spatial requirements, appealing to a diverse customer base. Each component has been thoughtfully proportioned to balance visual impact with practical function—the left and right sections create a welcoming embrace while the coffee table stands at the optimal height for casual dining and drinks. When displaying this collection, emphasise how the materials have been selected specifically to withstand British weather conditions whilst maintaining their aesthetic appeal. This combination of durability and design sophistication represents excellent value, with strong margins and repeat customer satisfaction. The Capri Collection consistently generates positive feedback for its combination of comfort, style longevity and ease of maintenance—all crucial selling points for today's discerning consumer who views their garden as an extension of their living space rather than a separate zone.",
    features: [
      "Robust Weather-Proof Construction: Designed specifically to withstand British weather conditions while maintaining aesthetic appeal.",
      "Modular Layout Adaptability: Flexible left and right corner arrangement to suit a variety of garden shapes and spatial requirements.",
      "Spacious Seating: Substantial proportions create an inviting focal point for al fresco entertaining for multiple guests.",
      "Complete Set: Includes a perfectly proportioned coffee table at the optimal height for casual dining and drinks."
    ],
    sku: "23913", 
    material: "Weather-resistant materials",
    dimensions: "212L x 80W x 80H (cm)"
  },

  // --- 55. CAPRI COLLECTION OUTDOOR DINING CHAIR ---
  {
    id: 55,
    name: "Capri Collection Outdoor Dining Chair",
    price: 295, 
    category: "outdoor", 
    collection: "capri", 
    image: "/capri-dining-chair-1.jpg", 
    gallery: [
      "/capri-dining-chair-1.jpg", 
      "/capri-dining-chair-2.jpg", 
      "/capri-dining-chair-3.jpg", 
      "/capri-dining-chair-4.jpg"
    ],
    description: "This is the Capri Collection Outdoor Dining Chair. This premium quality HDPE outdoor wicker dining chair is the perfect blend of style and durability. Every detail of its construction has been built with your long-lasting enjoyment in mind. With a frame built from lightweight yet sturdy powder-coated aluminium, it is protected against rust and corrosion within. Externally, the choice of 5mm half-round HDPE wicker weave delivers the most realistic and hardwearing wicker on the market. Eco-friendly, fast-growing acacia wood feet also offer long-lasting durability. Built to last, this dining chair is weatherproof, rustproof and can remain outdoors year around (although, like anything, it will last even longer if stored under cover from the elements). The chair comes with a comfortable seat cushion in a grade 5 Olefin fabric that keeps its colour. The cushion is shower-resistant, UV-resistant and easy to remove. Because Olefin is more resistant to mildew than polyester and drys more quickly, it is an excellent choice for furniture exposed to the elements. Ideally cover when not in extended periods of use and bring inside during winter months for increased longevity. Cleaning this outdoor furniture will be easy - HDPE wicker can be washed with mild soapy water (without abrasive solvents) and a soft brush. The cushion is sponge clean only.",
    features: [
      "Premium HDPE Wicker: 5mm half-round weave for a realistic look and ultimate durability.",
      "Weatherproof & Rustproof: Powder-coated aluminium frame allows for year-round outdoor use.",
      "Comfortable Olefin Cushion: Grade 5 fabric that is shower-resistant, UV-resistant, and mildew-resistant.",
      "Eco-Friendly Base: Finished with fast-growing, durable acacia wood feet."
    ],
    sku: "22951", 
    material: "HDPE wicker, powder-coated aluminium frame, acacia wood feet, Olefin cushion",
    dimensions: "60L x 48W x 103H (cm)"
  },

  // --- 56. PROVENCE COLLECTION OUTDOOR DINING CHAIR ---
  {
    id: 56,
    name: "Provence Collection Outdoor Dining Chair",
    price: 345, 
    category: "outdoor", 
    collection: "provence", 
    image: "/provence-dining-chair-1.jpg", 
    gallery: [
      "/provence-dining-chair-1.jpg", 
      "/provence-dining-chair-2.jpg", 
      "/provence-dining-chair-3.jpg", 
      "/provence-dining-chair-4.jpg",
      "/provence-dining-chair-5.jpg"
    ],
    description: "Bask in the unmatched luxury of our outdoor dining chair from the Provence Collection. This chair represents the pinnacle of al fresco seating, with its chunky 5mm round HDPE wicker weave offering an authentic rattan appearance while providing superior durability against the elements. The thoughtfully engineered powder-coated aluminium frame ensures this chair remains lightweight yet remarkably sturdy, completely protected against rust and corrosion even in challenging weather conditions. What truly distinguishes this dining chair is the meticulous attention to comfort—plush seat cushions crafted from grade 5 Olefin fabric retain their vibrant colour while resisting moisture and UV damage. The fabric's quick-drying properties make it vastly superior to standard polyester options for outdoor use. The chair's substantial proportions create a commanding presence in any garden setting, patio, or conservatory. The Provence Collection's distinctive styling pairs magnificently with decorative garden accessories to create a cohesive outdoor entertainment zone. Maintenance couldn't be simpler—the HDPE rattan requires only occasional cleaning with mild soapy water and a soft brush, maintaining its pristine appearance for years with minimal effort. While designed to withstand year-round outdoor placement, the chair's longevity can be further extended by storing cushions inside during winter months or covering during extended periods of non-use. This dining chair delivers an impressive combination of style, substance and practicality that your customers will appreciate season after season.",
    features: [
      "Authentic Aesthetics: Chunky 5mm round HDPE wicker weave offers a realistic rattan appearance with superior durability.",
      "Enduring Quality: Rust-proof, powder-coated aluminium frame ensures years of structural integrity.",
      "Premium Comfort: Quick-drying grade 5 Olefin cushions resist moisture and UV damage.",
      "Low Maintenance: Weather-resistant construction allows year-round outdoor placement with simple soap-and-water cleaning."
    ],
    sku: "23904", 
    material: "5mm HDPE wicker, powder-coated aluminium frame, Olefin fabric cushion",
    dimensions: "94L x 62W x 69H (cm)"
  },

  // --- 57. AMALFI COLLECTION OUTDOOR DINING CHAIR ---
  {
    id: 57,
    name: "Amalfi Collection Outdoor Dining Chair",
    price: 275, 
    category: "outdoor", 
    collection: "amalfi", 
    image: "/amalfi-dining-chair-1.jpg", 
    gallery: [
      "/amalfi-dining-chair-1.jpg", 
      "/amalfi-dining-chair-2.jpg", 
      "/amalfi-dining-chair-3.jpg", 
      "/amalfi-dining-chair-4.jpg"
    ],
    description: "Meticulously woven with 5mm half-round HDPE wicker, this outdoor dining chair showcases artisanal detail and authentic appeal. Built for outdoor endurance, the weather-resistant chair is perfect for creating resort-style dining spaces. The powder-coated aluminum frame ensures lasting stability while maintaining a graceful silhouette, beautifully complemented by eco-friendly acacia wood feet. The accompanying Olefin cushions offer superior weather resistance, resisting fading, UV rays, and moisture while providing quick-drying comfort. Style this chair alongside the Stamford Plank Collection coffee table and enhance your outdoor display with Tall Stone Effect Urn planters filled with Calabria olive trees. Complete the look with Kubu rattan storage baskets for a cohesive Mediterranean-inspired setting.",
    features: [
      "Authentic Appeal: Meticulously woven with 5mm half-round HDPE wicker for realistic texture and durability.",
      "Enduring Construction: Features a rust-proof aluminum frame grounded by eco-friendly acacia wood feet.",
      "Premium Comfort: Shower-resistant, UV-protected Olefin cushioning provides quick-drying, fade-resistant comfort.",
      "Resort-Style Living: Designed for year-round outdoor durability to elevate any patio or garden space."
    ],
    sku: "22950", 
    material: "HDPE wicker, powder-coated aluminum frame, acacia wood, Olefin fabric",
    dimensions: "52L x 52W x 94H (cm)"
  },

  // --- 58. AMALFI COLLECTION OUTDOOR CORNER SET ---
  {
    id: 58,
    name: "Amalfi Collection Outdoor Large Corner Set",
    price: 1895, 
    category: "outdoor", 
    collection: "amalfi", 
    image: "/amalfi-corner-set-1.jpg", 
    gallery: [
      "/amalfi-corner-set-1.jpg", 
      "/amalfi-corner-set-2.jpg"
    ],
    description: "Radiating Mediterranean allure, this sumptuous corner set transforms gardens into resplendent entertainment havens. The intricate weave pattern and generous proportions promise unmatched outdoor luxury. The Amalfi Collection Outdoor Large Corner Set delivers unrivalled outdoor opulence with its thoughtfully arranged seating configuration. This magnificent garden furniture piece boasts an intricate weave pattern that mirrors the tranquil Mediterranean coastlines of its namesake. The luxurious cushioning invites lengthy afternoon conversations while the robust framework ensures this set remains a garden fixture for many summers ahead. The harmonious balance of aesthetics and durability makes it an irresistible addition to any outdoor living space or showroom floor. Each section has been deliberately proportioned to maximise comfort without overwhelming even modest garden settings. The neutral palette works wonderfully across diverse exterior décors, from countryside retreats to urban balconies, allowing your customers to visualise this stunning set within their own spaces. As part of the wider Amalfi Garden Furniture Range, this corner set establishes a cohesive outdoor narrative when paired with other collection pieces. We suggest complementing this corner set with the Amalfi Outdoor Lanterns to create ambient evening illumination or the Amalfi Weather-Resistant Throw Cushions available in coordinating coastal hues. For the ultimate alfresco entertainment setup, consider recommending the Amalfi Outdoor Drinks Cooler which maintains the same refined design language while adding practical functionality. The architectural silhouette of this corner arrangement creates a defined outdoor room feeling, helping consumers transform previously underutilised garden spaces into profitable extended living areas. This range consistently outperforms competing options due to its perfect union of visual appeal and practical engineering. The spacious dimensions allow comfortable seating for numerous guests while the included table provides convenient placement for refreshments. When presented as part of your retail collection, this statement set invariably attracts attention and generates enquiries, making it a smart investment for forward-thinking stockists aiming to diversify their outdoor furniture offerings.",
    features: [
      "Mediterranean Allure: Intricate weave pattern and graceful silhouette inspired by coastal Italian design.",
      "Robust Construction: A durable framework ensures long-lasting stability across changing seasons.",
      "Versatile Proportions: Perfect for both spacious gardens and more intimate balcony or patio settings.",
      "Complete Entertainment Hub: Includes a practical matching table for refreshments and social gatherings."
    ],
    sku: "23912", 
    material: "Weather-resistant wicker weave and robust frame",
    dimensions: "80L x 212W x 80H (cm)"
  },

  // --- 59. BLOOM COLLECTION OUTDOOR LOUNGE CHAIR ---
  {
    id: 59,
    name: "Bloom Collection Outdoor Large Lounge Chair",
    price: 595, 
    category: "outdoor", 
    collection: "bloom", 
    image: "/bloom-lounge-chair-1.jpg", 
    gallery: [
      "/bloom-lounge-chair-1.jpg", 
      "/bloom-lounge-chair-2.jpg",
      "/bloom-lounge-chair-3.jpg",
      "/bloom-lounge-chair-4.jpg",
      "/bloom-lounge-chair-5.jpg"
    ],
    description: "Outdoor relaxation reaches new dimensions with this generously proportioned lounge chair that redefines comfort for commercial hospitality and retail environments. The oversized design creates an inviting sanctuary where customers can truly unwind, making it an irresistible centrepiece for any outdoor collection. Its substantial frame showcases meticulous attention to detail, with clean lines that speak to contemporary sensibilities whilst maintaining universal appeal across diverse customer demographics. The chair's impressive scale commands attention in showroom displays, instantly communicating quality and luxury to discerning buyers. Within the Bloom Garden Furniture Range, this piece represents the pinnacle of outdoor seating solutions, offering retailers a statement piece that drives sales through its undeniable presence and comfort credentials. The design philosophy centres on creating outdoor living spaces that rival interior comfort, positioning this chair as an essential investment for retailers targeting the growing outdoor lifestyle market. Its generous proportions accommodate various body types, ensuring broad customer appeal whilst the refined aesthetic attracts design-conscious consumers willing to invest in quality outdoor furniture. Perfect pairings from complementary collections include coordinating outdoor cushions in weather-resistant fabrics, decorative lanterns that enhance evening ambience, and stylish outdoor side tables for convenient placement of refreshments. Consider adding outdoor throws in coordinating colours, decorative planters that frame the seating area, and ambient lighting solutions that extend usage into evening hours. The chair's design language speaks fluently to both minimalist outdoor schemes and more elaborate garden settings, offering retailers flexibility in merchandising and display options. Its commercial-grade construction ensures longevity, providing retailers with confidence in product durability whilst the contemporary aesthetic ensures continued relevance in evolving outdoor furniture markets. This investment piece commands premium pricing whilst delivering exceptional value through its combination of comfort, style, and enduring appeal that keeps customers returning season after season.",
    features: [
      "Unmatched Comfort: Generous, oversized proportions maximise comfort appeal to create an inviting outdoor sanctuary.",
      "Enduring Durability: Commercial-grade, weather-resistant construction ensures lasting performance across changing seasons.",
      "Contemporary Aesthetic: Clean lines and modern design seamlessly suit diverse outdoor spaces from urban balconies to expansive patios.",
      "Versatile Styling: Perfectly pairs with outdoor throws, decorative lanterns, and stylish side tables for a complete look."
    ],
    sku: "24516", 
    material: "Weather-resistant fabric and robust frame construction",
    dimensions: "108L x 116W x 72H (cm)"
  },

  // --- 60. PROVENCE COLLECTION OUTDOOR 4 SEATER LOUNGE SET ---
  {
    id: 60,
    name: "Provence Collection Outdoor 4 Seater Lounge Set",
    price: 1295, 
    category: "outdoor", 
    collection: "provence", 
    image: "/provence-lounge-set-1.jpg", 
    gallery: [
      "/provence-lounge-set-1.jpg", 
      "/provence-lounge-set-2.jpg",
      "/provence-lounge-set-3.jpg",
      "/provence-lounge-set-4.jpg",
      "/provence-lounge-set-5.jpg",
      "/provence-lounge-set-6.jpg",
      "/provence-lounge-set-7.jpg",
      "/provence-lounge-set-8.jpg"
    ],
    description: "Outdoor relaxation reaches new heights with this four-seater lounge set that redefines comfort and style for contemporary garden spaces. The carefully proportioned seating arrangement creates an inviting social hub where conversations flow naturally, while the thoughtfully designed framework ensures durability against the elements without compromising on aesthetic appeal. Each piece within the Provence Collection demonstrates meticulous attention to detail, with clean lines and refined proportions that speak to modern sensibilities while maintaining the warmth and accessibility that makes outdoor living truly enjoyable. The neutral tones and understated finish allow this set to integrate seamlessly into diverse garden environments, from minimalist terraces to lush countryside settings, making it an ideal choice for retailers serving varied customer bases. The intelligent use of space means this configuration works beautifully in both intimate courtyards and expansive outdoor areas, offering flexibility that trade customers will appreciate when advising their own clients. Consider pairing this lounge set with coordinating outdoor cushions in complementary textures, stylish outdoor lanterns to create ambient lighting, and weather-resistant side tables that echo the collection's refined aesthetic. Decorative planters in matching tones would enhance the overall design concept, while outdoor rugs in natural fibres could define the seating area and add layers of comfort. The set's enduring appeal lies in its ability to serve as a foundation piece that retailers can build upon with seasonal accessories, creating complete outdoor living solutions that encourage repeat purchases and customer loyalty.",
    features: [
      "Social Configuration: Four-seater arrangement maximizes social interaction and comfort.",
      "Enduring Durability: Weather-resistant construction ensures longevity against the elements.",
      "Adaptable Styling: Neutral finish and refined proportions beautifully complement diverse garden styles.",
      "Complete Solution: Thoughtfully designed framework that perfectly balances modern aesthetics with everyday accessibility."
    ],
    sku: "24513", 
    material: "Weather-resistant framework and durable upholstery",
    dimensions: "152L x 85W x 75H (cm)"
  },

  // --- 61. PALMA COLLECTION OUTDOOR SET ---
  {
    id: 61,
    name: "Palma Collection Outdoor Set",
    price: 1595, 
    category: "outdoor", 
    collection: "palma", 
    image: "/palma-outdoor-set-1.jpg", 
    gallery: [
      "/palma-outdoor-set-1.jpg", 
      "/palma-outdoor-set-2.jpg",
      "/palma-outdoor-set-3.jpg",
      "/palma-outdoor-set-4.jpg",
      "/palma-outdoor-set-5.jpg",
      "/palma-outdoor-set-6.jpg",
      "/palma-outdoor-set-7.jpg",
      "/palma-outdoor-set-8.jpg"
    ],
    description: "A meticulously designed outdoor collection that sets new standards in durability and visual appeal. The intricate 5mm half-round HDPE wicker weave creates a realistic appearance while offering unmatched resilience against outdoor conditions. The lightweight yet robust powder-coated aluminum frame ensures lasting stability without compromising on style. The set showcases an eco-conscious approach with its fast-growing acacia hardwood table, demonstrating environmental responsibility while maintaining luxury standards. The attention to detail extends to the Grade 5 Olefin fabric cushions, which maintain their vibrancy while providing superior moisture resistance and quick-drying properties compared to conventional materials. This collection represents the perfect fusion of practicality and refinement, making it an essential addition to any outdoor space. For a cohesive outdoor aesthetic, we recommend pairing with the Siena Large Brown Amphora Pot, complemented by the understated charm of the Pula Table Lamp, and finished with the rustic appeal of our Large White Clock with Beaded Frame. The combination of weatherproof construction, year-round outdoor durability, and minimal maintenance requirements makes this set an incredible investment for high-quality outdoor living.",
    features: [
      "All-Weather Construction: Verified weather-resistant HDPE wicker for year-round outdoor use.",
      "Quick-Dry Cushion Technology: Features premium Grade 5 Olefin fabric that resists fading and moisture.",
      "Low-Maintenance: Rust-proof powder-coated aluminum frames offer easy cleaning and enduring stability.",
      "Complete Luxury Set: Includes a spacious 3-seater sofa, armchairs, and an eco-friendly acacia hardwood table."
    ],
    sku: "22957", 
    material: "HDPE wicker, powder-coated aluminum, acacia hardwood, Olefin fabric",
    dimensions: "Sofa: 180L x 80W x 77H | Chair: 80L x 80W x 77H | Table: 115L x 65W x 41H (cm)"
  },

  // --- 62. PROVENCE COLLECTION OUTDOOR BISTRO TABLE ---
  {
    id: 62,
    name: "Provence Collection Outdoor Bistro Table",
    price: 245, 
    category: "outdoor", 
    collection: "provence", 
    image: "/provence-bistro-table-1.jpg", 
    gallery: [
      "/provence-bistro-table-1.jpg", 
      "/provence-bistro-table-2.jpg",
      "/provence-bistro-table-3.jpg"
    ],
    description: "Outdoor dining takes on a refined character with this compact bistro table that seamlessly blends French provincial charm with contemporary functionality. The distinctive square proportions create an intimate dining experience perfect for courtyards, balconies, or café-style settings, while the robust construction ensures year-round durability against the elements. Within the Provence Collection, this piece maintains the characteristic weathered aesthetic that speaks to discerning customers seeking authentic outdoor furniture with enduring appeal. The carefully proportioned dimensions accommodate two diners comfortably, making it ideal for romantic meals or leisurely morning coffee rituals. Weather-resistant materials have been selected to withstand seasonal changes whilst maintaining the appealing patina that develops naturally over time. The table's neutral palette complements various architectural styles, from traditional cottage gardens to modern urban terraces. The compact footprint makes it suitable for space-conscious consumers, yet substantial enough to anchor outdoor seating arrangements effectively. This table represents the perfect intersection of practicality and style, ensuring strong customer satisfaction and an enduring luxury appeal.",
    features: [
      "Intimate Dining: Compact square design maximises intimate outdoor dining experiences.",
      "Enduring Quality: Weather-resistant construction maintains an authentic, appealing patina.",
      "Provincial Charm: French-inspired aesthetic with robust construction for year-round appeal.",
      "Versatile Placement: Perfect for courtyards, balconies, or café-style patio settings."
    ],
    sku: "24515", 
    material: "Weather-resistant materials with a weathered finish",
    dimensions: "70L x 70W x 72H (cm)"
  },

  // --- 63. BLOOM COLLECTION OUTDOOR FOOTSTOOL ---
  {
    id: 63,
    name: "Bloom Collection Outdoor Footstool",
    price: 150, 
    category: "outdoor", 
    collection: "bloom", 
    image: "/bloom-footstool-1.jpg", 
    gallery: [
      "/bloom-footstool-1.jpg", 
      "/bloom-footstool-2.jpg",
      "/bloom-footstool-3.jpg",
      "/bloom-footstool-4.jpg",
      "/bloom-footstool-5.jpg"
    ],
    description: "Relaxation takes centre stage with this outdoor footstool from the Bloom Collection, where contemporary style meets garden comfort in perfect harmony. The footstool's refined proportions and clean lines create an inviting presence that transforms any outdoor space into a sophisticated retreat. Its thoughtfully designed silhouette showcases modern aesthetics while maintaining practical functionality. The piece demonstrates superior construction quality, ensuring durability that withstands seasonal changes while retaining its visual appeal throughout years of use. Natural textures and carefully selected materials combine to create a surface that invites touch, while the neutral colour palette allows seamless integration with existing outdoor décor schemes. This footstool serves as both a functional seating addition and a decorative accent, offering ultimate flexibility. The Bloom Collection's cohesive design language ensures this piece works harmoniously with other elements from the range, creating beautifully coordinated outdoor living spaces. Pair it perfectly with outdoor cushions featuring botanical prints, woven storage baskets in natural fibres, and decorative planters that echo the collection's organic inspiration. Weather-resistant outdoor rugs in complementary tones provide the perfect foundation, while string lighting and lanterns create an atmospheric ambiance. The piece's compact dimensions make it ideal for smaller patios and balconies, offering luxury comfort even with limited outdoor space. Its low-maintenance requirements, fade-resistant properties, and timeless design guarantee continued enjoyment across changing seasons.",
    features: [
      "Contemporary Comfort: Combines style with comfort for modern garden spaces.",
      "Space-Saving Profile: Compact proportions perfectly suit limited spaces like urban balconies.",
      "Enduring Durability: Weather-resistant construction ensures longevity across changing seasons.",
      "Cohesive Design: Seamlessly coordinates with other Bloom Collection pieces for a unified look."
    ],
    sku: "24519", 
    material: "Weather-resistant fabric and frame",
    dimensions: "55L x 77W x 27H (cm)"
  },

  // --- 64. AMALFI COLLECTION OUTDOOR FIVE SEATER SET ---
  {
    id: 64,
    name: "Amalfi Collection Outdoor Five Seater Set",
    price: 1995, 
    category: "outdoor", 
    collection: "amalfi", 
    image: "/amalfi-5-seater-set-1.jpg", 
    gallery: [
      "/amalfi-5-seater-set-1.jpg", 
      "/amalfi-5-seater-set-2.jpg",
      "/amalfi-5-seater-set-3.jpg",
      "/amalfi-5-seater-set-4.jpg",
      "/amalfi-5-seater-set-5.jpg",
      "/amalfi-5-seater-set-6.jpg",
      "/amalfi-5-seater-set-7.jpg",
      "/amalfi-5-seater-set-8.jpg"
    ],
    description: "Embrace outdoor living with this meticulously designed five-seater set that combines authentic appearance with unmatched resilience. The round 12mm HDPE wicker weave creates an organic pattern that mimics natural materials while surpassing them in durability and weather resistance. The lightweight aluminum frame provides stability without compromising on portability, while the powder coating ensures long-term protection against environmental factors. The addition of grade 5 Olefin fabric cushions delivers superior comfort and practicality—their quick-drying properties and resistance to UV damage make them ideal for outdoor settings. The eco-conscious hardwood acacia coffee table crowned with tempered glass adds both functionality and refinement to the arrangement. For a coordinated outdoor aesthetic, consider pairing this set with the Pula or Leptis Magna table lamps for ambient evening lighting, or enhance the visual appeal with the Black Wood Round Framed Mirror or Washed Wood Window Mirror to create depth and reflection in your outdoor space. This collection maintains its fresh appearance with minimal maintenance—simple soap and water cleaning for the wicker and easy-care cushions that can be removed as needed. The set's year-round outdoor capability, combined with its shower-resistant and color-fast properties, ensures lasting value and ultimate customer satisfaction.",
    features: [
      "All-Weather Construction: Weather-resistant 12mm HDPE wicker over a rust-proof aluminum frame.",
      "Premium Comfort: Fast-drying, UV-protected Olefin cushions for lasting vibrancy and quick recovery from showers.",
      "Eco-Conscious Detailing: Includes a stylish acacia hardwood coffee table topped with tempered glass.",
      "Low-Maintenance Care: Designed for year-round outdoor use with simple soap-and-water cleaning."
    ],
    sku: "22947", 
    material: "12mm HDPE wicker, powder-coated aluminum, Olefin fabric, acacia wood, tempered glass",
    dimensions: "3-Seater: 210W x 92D x 72H | Armchair: 90W x 92D x 72H | Table: 120L x 63W x 42H (Seat height: 59cm)"
  },

  // --- 65. CAPRI COLLECTION OUTDOOR FOOT STOOL ---
  {
    id: 65,
    name: "Capri Collection Outdoor Foot Stool",
    price: 195, 
    category: "outdoor", 
    collection: "capri", 
    image: "/capri-footstool-1.jpg", 
    gallery: [
      "/capri-footstool-1.jpg", 
      "/capri-footstool-2.jpg",
      "/capri-footstool-3.jpg",
      "/capri-footstool-4.jpg",
      "/capri-footstool-5.jpg",
      "/capri-footstool-6.jpg"
    ],
    description: "Embrace outdoor luxury with this meticulously crafted wicker footstool, showcasing a refined 5mm half-round HDPE weave that replicates authentic natural materials while offering superior weather resistance. The lightweight aluminum frame ensures easy repositioning while maintaining structural integrity against the elements. The cushion features advanced Olefin fabric technology, providing quick-drying comfort and exceptional color retention through sun exposure and light rain. This maintenance-friendly piece requires only basic cleaning with mild soap and water to maintain its pristine appearance. For a cohesive outdoor sanctuary, pair this footstool with atmospheric accessories—like a standing wicker lantern, LED wax candles, or a framed mirror to reflect natural light and create depth in covered outdoor spaces. This thoughtfully engineered footstool demonstrates a commitment to combining aesthetics with practicality, making it an essential addition to any premium outdoor space. The acacia wood feet add an organic touch while ensuring stability and longevity, complementing both contemporary and traditional exterior design schemes.",
    features: [
      "Premium HDPE Wicker: 5mm half-round weave replicating authentic natural materials with superior weather resistance.",
      "Enduring Construction: Rust-proof aluminum frame grounded by eco-friendly acacia wood feet.",
      "Advanced Cushion Technology: Quick-drying, shower-resistant Olefin fabric ensures exceptional color retention.",
      "Low-Maintenance: Designed for year-round outdoor durability with simple soap-and-water cleaning."
    ],
    sku: "22954", 
    material: "HDPE wicker, powder-coated aluminum frame, Olefin fabric cushion, acacia wood feet",
    dimensions: "56L x 81W x 24H (cm)"
  },

  // --- 66. PROVENCE COLLECTION OUTDOOR 4 SEATER DINING SET ---
  {
    id: 66,
    name: "Provence Collection Outdoor 4 Seater Dining Set",
    price: 1095, 
    category: "outdoor", 
    collection: "provence", 
    image: "/provence-4-seater-dining-set-1.jpg", 
    gallery: [
      "/provence-4-seater-dining-set-1.jpg", 
      "/provence-4-seater-dining-set-2.jpg",
      "/provence-4-seater-dining-set-3.jpg"
    ],
    description: "Discover outdoor dining at its finest with this magnificent 4-Seater Dining Set from the Provence Collection. The harmonious blend of style and durability makes this set an irresistible addition to any garden space or patio area. Crafted with longevity as the cornerstone of its design, this outdoor furniture showcases a lightweight yet robust powder-coated aluminium frame that resists rust and corrosion, ensuring years of faithful service in varied weather conditions. The chunky 5mm round HDPE wicker weave creates an authentic rattan appearance while offering superior weather resistance compared to traditional materials. What sets this collection apart is its ability to remain outdoors year-round, though a protective covering will extend its lifespan further. The sumptuous seat cushions, upholstered in grade 5 Olefin fabric, maintain their vibrant appearance while offering remarkable shower and UV resistance. These cushions dry more swiftly than polyester alternatives, making them ideally suited for outdoor environments subject to occasional rain showers. Consider pairing this dining set with complementary accessories such as a lattice ceramic table lamp, which beautifully echoes the woven pattern of the furniture. A statement outdoor mirror offers a dramatic backdrop when displayed alongside the set, while floral stems provide lifelike botanical accents that enhance the outdoor living aesthetic. The clean lines and durable construction of the 5mm tempered glass tabletop offer both style and substance. As part of the wider Provence Garden Furniture Range, this dining set provides a beautifully coordinated outdoor living solution that combines everyday practicality with undeniable visual appeal.",
    features: [
      "Weatherproof Construction: Chunky 5mm round HDPE wicker and rust-proof aluminium frame withstands outdoor conditions year-round.",
      "Premium Comfort: Shower-resistant, quick-drying cushions in fade-resistant grade 5 Olefin fabric.",
      "Durable Tabletop: Features a sleek 5mm tempered glass surface offering thermal resistance and easy maintenance.",
      "Authentic Aesthetics: Highly realistic woven texture that perfectly balances French provincial charm with modern durability."
    ],
    sku: "23908", 
    material: "5mm HDPE wicker, powder-coated aluminium frame, Olefin fabric, 5mm tempered glass",
    dimensions: "90L x 90W x 72H (cm)"
  },

  // --- 67. AMALFI COLLECTION OUTDOOR THREE SEATER SOFA ---
  {
    id: 67,
    name: "Amalfi Collection Outdoor Three Seater Sofa",
    price: 1195, 
    category: "outdoor", 
    collection: "amalfi", 
    image: "/capri-3-seater-sofa-1.jpg", 
    gallery: [
      "/capri-3-seater-sofa-1.jpg", 
      "/capri-3-seater-sofa-2.jpg",
      "/capri-3-seater-sofa-3.jpg",
      "/capri-3-seater-sofa-4.jpg",
      "/capri-3-seater-sofa-5.jpg",
      "/capri-3-seater-sofa-6.jpg",
      "/capri-3-seater-sofa-7.jpg"
    ],
    description: "Make a statement in luxury outdoor living with this meticulously crafted wicker sofa that exemplifies durability and refinement. The authentic-looking 5mm half-round HDPE wicker weave creates an intricate pattern that catches the light while providing unmatched resilience against the elements. The sofa's graceful silhouette is enhanced by eco-conscious acacia wood feet, adding an organic touch to its modern design. The Grade 5 Olefin cushions offer both comfort and practicality, maintaining their color brilliance while resisting UV damage and moisture. This thoughtfully engineered piece demonstrates superior weatherproofing and rust resistance through its powder-coated aluminum frame, allowing for year-round outdoor placement. The neutral palette and detailed weave pattern make it an ideal centerpiece for any outdoor space. For the perfect finishing touches, we recommend pairing with our selection of weather-resistant decorative cushions, outdoor lanterns, and all-weather throw blankets. The combination of teak-finish serving trays and strategically placed outdoor lighting fixtures will create an inviting atmosphere for entertainment. Consider adding weather-resistant outdoor rugs and coordinating planters to complete the look of your outdoor sanctuary.",
    features: [
      "All-Weather Wicker: Authentic, intricate 5mm half-round HDPE weave construction built for resilience.",
      "Premium Cushioning: Fast-drying, mildew-resistant Grade 5 Olefin fabric offers UV protection and color stability.",
      "Enduring Frame: Rust-proof, powder-coated aluminum frame built for year-round outdoor placement.",
      "Organic Accents: Grounded by eco-conscious acacia wood feet to elevate the modern silhouette."
    ],
    sku: "22955", 
    material: "HDPE wicker, powder-coated aluminum, acacia wood feet, Olefin fabric",
    dimensions: "92L x 215W x 70H (cm)"
  },

  // --- 68. ECHO FRENCH GREY CHAIR ---
  {
    id: 68,
    name: "Echo French Grey Chair",
    price: 185, 
    category: "outdoor", 
    collection: "", 
    image: "/echo-chair-1.jpg", 
    gallery: [
      "/echo-chair-1.jpg", 
      "/echo-chair-2.jpg",
      "/echo-chair-3.jpg",
      "/echo-chair-4.jpg"
    ],
    description: "Rendered in a distinctive French Grey finish, this dining chair exemplifies refined outdoor living with its carefully curated aesthetic that bridges traditional charm with contemporary appeal. The weathered grey tone offers a sophisticated neutral palette that harmonises beautifully with natural garden settings whilst maintaining enough character to anchor modern patio arrangements. As part of The Outdoor Living Collection, this piece demonstrates meticulous attention to detail through its proportioned silhouette and durable construction that withstands seasonal elements without compromising visual appeal. The chair's clean lines and substantial frame provide both comfort and structural integrity, making it an ideal foundation piece for your patio or garden. This design seamlessly integrates with various complementary accessories, including coordinating outdoor cushions in neutral tones that enhance the chair's weathered finish, decorative lanterns that echo the grey palette, and textured throws that add seasonal warmth whilst maintaining a cohesive aesthetic. The French Grey finish develops a natural patina over time, creating an authentic weathered appearance that actually improves with age and exposure. This characteristic makes it particularly appealing if you are seeking low-maintenance outdoor furniture that gains character rather than deteriorating. The chair's proportions accommodate various body types whilst maintaining an unobtrusive profile that maximises spatial efficiency in smaller outdoor areas. Its neutral colourway serves as an excellent backdrop for seasonal styling changes, allowing you to refresh your outdoor spaces with different textile accessories throughout the year. The robust construction ensures longevity, whilst the timeless design transcends fleeting trends, making it a sound investment for your home.",
    features: [
      "Weather-Resistant: Durable construction maintains its structural integrity and appearance through changing seasons.",
      "Natural Patina: The French Grey finish develops an authentic, weathered appearance that improves with age and exposure.",
      "Spatial Efficiency: Proportioned design accommodates various body types while maximizing space in smaller outdoor areas.",
      "Versatile Palette: Neutral tone provides an excellent backdrop for seasonal styling with textiles and accessories."
    ],
    sku: "24299", 
    material: "Weather-resistant materials with a French Grey finish",
    dimensions: "50L x 55W x 77H (cm)"
  },

  // --- 69. AXIS FRENCH GREY CARVER CHAIR ---
  {
    id: 69,
    name: "Axis French Grey Carver Chair",
    price: 225, 
    category: "outdoor", 
    collection: "axis", 
    image: "/axis-carver-chair-1.jpg", 
    gallery: [
      "/axis-carver-chair-1.jpg", 
      "/axis-carver-chair-2.jpg", 
      "/axis-carver-chair-3.jpg"
    ],
    description: "This French Grey Carver Chair showcases refined outdoor dining luxury with its carefully selected tonal finish that complements any garden or patio setting. The carver design provides enhanced comfort and support through its smoothly integrated armrests, making it ideal for extended outdoor entertaining sessions. Part of the distinguished Axis collection, this piece demonstrates superior construction methods that ensure weather resistance whilst maintaining its sophisticated appearance throughout the changing seasons. The French Grey colourway offers a contemporary neutral palette that harmonises beautifully with various outdoor décor themes, from coastal schemes to modern architectural garden designs. The carver configuration makes it particularly stunning for head-of-table positioning, creating elegant focal points in outdoor dining arrangements. To complete the outdoor aesthetic, consider pairing with outdoor cushions in complementary tones, weatherproof table runners, or atmospheric garden lanterns that enhance the ambiance for evening al fresco dining.",
    features: [
      "Carver Silhouette: Built-in armrests provide enhanced upper-body comfort and support for long al fresco meals.",
      "Tonal Mastery: Refined French Grey neutral finish easily harmonizes with coastal or modern garden aesthetics.",
      "All-Weather Proof: Advanced construction methods ensure robust weather resistance throughout the changing British seasons.",
      "Head of Table Anchor: Striking geometric layout profile makes it ideal for anchoring dining table arrangements."
    ],
    sku: "24293", 
    material: "Weather-resistant materials with a French Grey finish",
    dimensions: "54L x 60W x 79H (cm)"
  },

  // --- 70. KYRA FRENCH GREY CHAIR ---
  {
    id: 70,
    name: "Kyra French Grey Chair",
    price: 165, // <-- Update this price to your actual retail price!
    category: "outdoor", 
    collection: "", 
    image: "/kyra-chair-1.jpg", 
    gallery: [
      "/kyra-chair-1.jpg", 
      "/kyra-chair-2.jpg", 
      "/kyra-chair-3.jpg", 
      "/kyra-chair-4.jpg"
    ],
    description: "Crafted with a distinctive French Grey finish, this dining chair delivers a sophisticated appeal that transforms any patio or garden layout into a sanctuary of refined living. The carefully selected French Grey tone creates a calming, neutral backdrop that harmonises beautifully with both traditional and contemporary exterior design schemes, maintaining an elegant presence across changing seasons. This chair showcases meticulous attention to detail through its thoughtfully proportioned silhouette and an expertly applied finish that actively resists fading and weathering. Its neutral palette provides endless styling possibilities, allowing you to create inviting setups with textile accessories like coordinating outdoor cushions in sage green or warm terracotta. The chair's refined, compact proportions make it particularly perfect for compact outdoor areas, satisfying urban balconies or compact patio spaces where style and high-end functionality must seamlessly coexist.",
    features: [
      "French Grey Finish: Refined, classic palette that blends flawlessly into modern and traditional garden setups.",
      "Weather-Resistant: Meticulously applied exterior coating resists fading, UV rays, and raw seasonal elements.",
      "Compact Silhouette: Built with scaled-back structural dimensions to maximize seating layout efficiency in intimate spaces.",
      "Versatile Accent: Acts as a premium backdrop that highlights colorful cushions, natural textures, or ambient lighting."
    ],
    sku: "24308", 
    material: "Weather-resistant materials with a French Grey finish",
    dimensions: "46L x 43W x 80H (cm)"
  }
];
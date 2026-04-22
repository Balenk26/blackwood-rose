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

  // --- 2. DELPHINE 6-DOOR DRESSER BASE ---
  {
    id: 2,
    name: "Delphine Collection 6-Door Large Dresser Base",
    price: 1150, 
    category: "dining", 
    collection: "delphine", 
    image: "/delphine-dresser-1.jpg", 
    gallery: ["/delphine-dresser-1.jpg", "/delphine-dresser-2.jpg", "/delphine-dresser-3.jpg"],
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

  // --- 6. DELPHINE SLIDING GLASS DRESSER TOP ---
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
    sku: "24658", 
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
    description: "Compact in its footprint yet considered in its detail, the Haldon Collection 1-Drawer Side Table with Shelf offers a beautifully proportioned bedside or occasional table solution. It perfectly balances practical, concealed storage with open display. A single smooth-gliding drawer provides discreet access for everyday essentials, while the integrated shelf below offers an elegant platform for books, botanicals, or a statement lamp. Finished in the collection's signature quiet luxury, it integrates seamlessly into a variety of interior styles. Whether anchoring a reading corner or serving as a refined bedside companion, this piece brings a sense of serene organization and exceptional craftsmanship to spaces where efficiency and elegance are paramount.",
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

  // --- 23. HALDON COLLECTION LARGE DINING BENCH (New Listing) ---
  {
    id: 23,
    name: "Haldon Collection Large Dining Bench",
    price: 450, // Placeholder price, adjust as needed!
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
  }
];
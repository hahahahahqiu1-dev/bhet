import { CuratedKit, CustomizationOption, IndustryServe, KitBuilderItem, OccasionItem, ProductItem } from '../types';

// Local Asset Image Imports
import heroBoxImg from '../assets/images/bhet_hero_box_1788012398181.jpg';
import execKitImg from '../assets/images/bhet_exec_kit_1788012415857.jpg';
import festiveHamperImg from '../assets/images/bhet_festive_hamper_1788012431844.jpg';
import stationeryCatImg from '../assets/images/bhet_cat_stationery_1788013372210.jpg';
import pensCatImg from '../assets/images/bhet_cat_pens_1788013389002.jpg';
import bottleCatImg from '../assets/images/bhet_cat_bottle_1788013411309.jpg';
import mugCatImg from '../assets/images/bhet_cat_mug_1788013428126.jpg';
import kitClassicImg from '../assets/images/bhet_kit_classic_1788013499879.jpg';
import kitEssentialImg from '../assets/images/bhet_kit_essential_1788013481085.jpg';
import prodBottlesImg from '../assets/images/bhet_prod_bottles_1788015154330.jpg';
import prodDeskImg from '../assets/images/bhet_prod_desk_1788015185642.jpg';
import prodEventsImg from '../assets/images/bhet_prod_events_1788015215725.jpg';
import prodMugsImg from '../assets/images/bhet_prod_mugs_1788015169698.jpg';
import prodPensImg from '../assets/images/bhet_prod_pens_1788015135518.jpg';
import prodWelcomeImg from '../assets/images/bhet_prod_welcome_1788015200321.jpg';

export const BRAND_INFO = {
  name: "BHET",
  fullName: "BHET Corporate Gifting Solutions",
  tagline: "Thoughtfully Given. Professionally Remembered.",
  intro: "At BHET, we believe a gift is more than just an item — it is a way to appreciate people, build relationships, and make every occasion memorable.",
  summary: "We provide corporate gifting solutions for businesses looking for practical, stylish, and customizable gifts for employees, clients, customers, partners, and events.",
  mission: "To make corporate gifting simple, professional, memorable, and accessible for every business.",
  vision: "To become a trusted corporate gifting partner known for quality, creativity, customization, and dependable service.",
  contactPhone: "+91 97697 04262",
  contactEmail: "hello@bhetgifting.com",
  corporateSalesEmail: "corporate@bhetgifting.com",
  whatsappNumber: "+919769704262",
  address: "BHET Headquarters, Corporate Towers, BKC / CyberCity Hub",
  deliveryCoverage: "Pan-India express delivery & International dispatch support"
};

export const CATEGORIES = [
  {
    id: 'stationery',
    title: 'Corporate Stationery',
    icon: 'BookOpen',
    count: '18+ Styles',
    description: 'Notebooks, diaries, planners and other useful stationery items customized with your company branding.',
    heroImage: stationeryCatImg
  },
  {
    id: 'pens',
    title: 'Branded Pens',
    icon: 'PenTool',
    count: '24+ Models',
    description: 'Professional pens with logo printing or laser engraving — perfect for everyday corporate use.',
    heroImage: pensCatImg
  },
  {
    id: 'bottles',
    title: 'Customized Bottles',
    icon: 'Droplets',
    count: '15+ Variants',
    description: 'Stylish reusable water bottles customized with your company logo or employee names.',
    heroImage: bottleCatImg
  },
  {
    id: 'mugs',
    title: 'Mugs & Drinkware',
    icon: 'Coffee',
    count: '12+ Designs',
    description: 'Corporate mugs and drinkware designed for offices, events, employees and clients.',
    heroImage: mugCatImg
  },
  {
    id: 'hampers',
    title: 'Corporate Gift Hampers',
    icon: 'Gift',
    count: '30+ Combinations',
    description: 'Beautifully curated gift sets combining multiple products into one memorable package.',
    heroImage: festiveHamperImg
  },
  {
    id: 'welcome-kits',
    title: 'Employee Welcome Kits',
    icon: 'Briefcase',
    count: '10+ Configurations',
    description: 'Complete onboarding kits designed to welcome new employees and make their first day special.',
    heroImage: execKitImg
  },
  {
    id: 'event-gifts',
    title: 'Event & Promotional Gifts',
    icon: 'Building2',
    count: '40+ Giveaways',
    description: 'Branded products for conferences, seminars, exhibitions, meetings, launches and promotional campaigns.',
    heroImage: prodEventsImg
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Executive Hardbound PU Leather Diary & Planner',
    category: 'stationery',
    categoryLabel: 'Corporate Stationery',
    price: 249,
    description: 'Ultra-smooth 80 GSM natural shade paper with ribbon bookmark, pen loop, magnetic clasp, and inner expandable pocket.',
    features: ['192 ruled pages', 'Matte vegan leather cover', 'Blind deboss / Gold foil branding', 'Year planner layout'],
    customizationMethods: ['Debossing', 'UV Printing', 'Laser Engraved Metal Tag'],
    colors: ['#2B2D42', '#8D99AE', '#1D3557', '#457B9D', '#DDA15E', '#1B4332'],
    minOrderQty: 25,
    popular: true,
    tag: 'Best Seller',
    image: stationeryCatImg
  },
  {
    id: 'p-2',
    name: 'Eco-Kraft Spiral Notebook with Recycled Pen',
    category: 'stationery',
    categoryLabel: 'Corporate Stationery',
    price: 119,
    description: 'Sustainable unbleached kraft paper notebook with elastic band closure, index tabs, and companion seed paper pen.',
    features: ['100% Recycled card cover', 'Seed paper pen included', 'Sticky memo flags inside', 'Biodegradable packaging'],
    customizationMethods: ['Screen Printing', 'Single Color Pad Print'],
    colors: ['#D4A373', '#CCD5AE', '#E9D8A6'],
    minOrderQty: 50,
    tag: 'Eco-Friendly',
    image: stationeryCatImg
  },
  {
    id: 'p-3',
    name: 'Metropolis Matte Metal Rollerball Pen',
    category: 'pens',
    categoryLabel: 'Branded Pens',
    price: 89,
    description: 'Weighted brass barrel with satin matte soft-touch finish and Swiss-engineered 0.7mm quick-dry German ink cartridge.',
    features: ['Precision laser engraving', 'Smooth 0.7mm rollerball', 'German ink refill', 'Weight balanced 28g'],
    customizationMethods: ['Laser Engraving (Silver / Golden mirror reveal)', 'UV Digital Print'],
    colors: ['#1E1E24', '#444140', '#0B3C5D', '#6B2737'],
    minOrderQty: 30,
    popular: true,
    tag: 'Signature',
    image: pensCatImg
  },
  {
    id: 'p-4',
    name: 'Monarch 2-in-1 Stylus Ballpoint Corporate Pen',
    category: 'pens',
    categoryLabel: 'Branded Pens',
    price: 49,
    description: 'Dual-purpose writing instrument with sensitive silicone capacitive stylus tip for tablets and touchscreens.',
    features: ['Dual capacitive stylus tip', 'Click action mechanism', 'High grip textured barrel'],
    customizationMethods: ['Laser Engraving', 'Pad Printing'],
    colors: ['#0A192F', '#333333', '#A88350', '#8A1C14'],
    minOrderQty: 50,
    image: prodPensImg
  },
  {
    id: 'p-5',
    name: 'AeroTherm Dual-Wall Vacuum Insulated Flask (500ml)',
    category: 'bottles',
    categoryLabel: 'Customized Bottles',
    price: 299,
    description: '304 Grade food-safe stainless steel bottle keeping beverages hot for 12 hours and ice cold for 24 hours without condensation.',
    features: ['Double wall vacuum insulation', 'Leakproof silicone seal cap', 'Sweat-free powder coat', 'BPA free'],
    customizationMethods: ['Precision Laser Engraving', 'UV Full Color Printing', 'Employee Name Personalization'],
    colors: ['#1A1A1A', '#2E4057', '#048A81', '#E76F51', '#F4F1DE'],
    minOrderQty: 25,
    popular: true,
    tag: 'Trending',
    image: bottleCatImg
  },
  {
    id: 'p-6',
    name: 'Smart Temp LED Touch Flask (500ml)',
    category: 'bottles',
    categoryLabel: 'Customized Bottles',
    price: 349,
    description: 'Interactive smart bottle with waterproof LED lid displaying real-time liquid temperature with a gentle tap.',
    features: ['Touch LED temperature screen', 'Built-in tea infuser strainer', '500-day battery life (no charge needed)'],
    customizationMethods: ['Laser Engraving', 'UV Logo Printing'],
    colors: ['#000000', '#1C2541', '#3A0CA3', '#8338EC'],
    minOrderQty: 25,
    image: prodBottlesImg
  },
  {
    id: 'p-7',
    name: 'Nordic Matte Ceramic Coffee Mug with Wooden Lid',
    category: 'mugs',
    categoryLabel: 'Mugs & Drinkware',
    price: 189,
    description: 'Minimalist stoneware coffee mug with natural acacia wood coaster lid and ergonomic comfortable handle.',
    features: ['350ml volume', 'Natural wooden coaster/lid', 'Microwave & dishwasher safe ceramic', 'Silky matte glaze'],
    customizationMethods: ['Screen Ceramic Print', 'Laser Engraved Wooden Lid', 'Sublimation Full Wrap'],
    colors: ['#222222', '#F8F9FA', '#2B4162', '#385F71'],
    minOrderQty: 30,
    popular: true,
    tag: 'Office Essential',
    image: mugCatImg
  },
  {
    id: 'p-8',
    name: 'Commuter Vacuum Travel Tumbler (400ml)',
    category: 'mugs',
    categoryLabel: 'Mugs & Drinkware',
    price: 269,
    description: 'Spill-proof flip lid coffee tumbler built for morning commutes, desktop hydration, and car cup holders.',
    features: ['Flip-lock sip lid', 'Thermal insulation 6h hot', 'Textured silicone grip band'],
    customizationMethods: ['Laser Engraving', 'Pad Print'],
    colors: ['#2B2D42', '#D90429', '#198754', '#6C757D'],
    minOrderQty: 25,
    image: prodMugsImg
  },
  {
    id: 'p-9',
    name: 'Day-One Premier Employee Onboarding Welcome Kit',
    category: 'welcome-kits',
    categoryLabel: 'Employee Welcome Kits',
    price: 699,
    description: 'The definitive onboarding experience. Includes custom diary, premium metal pen, stainless steel bottle, mug, metal keychain, and custom welcome card in a rigid magnetic box.',
    features: ['Custom branded rigid box', 'Die-cut high density foam slotting', 'CEO welcome message card', 'Individual name on bottle & diary'],
    customizationMethods: ['All items branded', 'Custom Box Lid Foiling', 'Variable Data Names'],
    colors: ['#0B132B', '#1C2541', '#3A506B', '#480CA8'],
    minOrderQty: 20,
    popular: true,
    tag: 'Top Pick for HRs',
    image: prodWelcomeImg
  },
  {
    id: 'p-10',
    name: 'Festive Luxury Corporate Celebration Hamper',
    category: 'hampers',
    categoryLabel: 'Corporate Gift Hampers',
    price: 1199,
    description: 'Festive hamper featuring gourmet brass diyas/candle, dry fruits jar duo, leather journal, copper bottle, and gold foil greeting card in an imperial velvet finish box.',
    features: ['Premium gourmet dry fruits (200g)', 'Artisan scented brass candle', 'Gold foil rigid gift box', 'Silk ribbon bow finish'],
    customizationMethods: ['Gold/Copper Foiling', 'Custom Outer Sleeve with festive greetings'],
    colors: ['#581845', '#900C3F', '#C70039', '#1C3144'],
    minOrderQty: 15,
    popular: true,
    tag: 'Festive Exclusive',
    image: festiveHamperImg
  },
  {
    id: 'p-11',
    name: 'Summit Delegate Conference & Seminar Kit',
    category: 'event-gifts',
    categoryLabel: 'Event & Promotional Gifts',
    price: 219,
    description: 'High-utility conference set packed in a customized conference folder bag: notepad, stylus pen, lanyard badge card, and metallic cardholder.',
    features: ['A4 Document conference folder', 'Lanyard with metal clip & ID holder', 'Recycled pen & notepad'],
    customizationMethods: ['Silk Screen Printing', 'Heat Transfer Logo'],
    colors: ['#1B263B', '#415A77', '#778DA9'],
    minOrderQty: 50,
    image: prodEventsImg
  },
  {
    id: 'p-12',
    name: 'Executive Leatherette Cardholder & Keychain Set',
    category: 'event-gifts',
    categoryLabel: 'Event & Promotional Gifts',
    price: 179,
    description: 'Sleek RFID-shielded stainless steel cardholder paired with a matching stitched vegan leather key organizer.',
    features: ['RFID protection', 'Holds up to 15 business cards', 'Heavy-duty alloy ring', 'Presentation gift box'],
    customizationMethods: ['Laser Engraving on metal', 'Blind Emboss on leather'],
    colors: ['#000814', '#001D3D', '#003566', '#5C4033'],
    minOrderQty: 30,
    image: prodDeskImg
  }
];

export const CURATED_KITS: CuratedKit[] = [
  {
    id: 'essential',
    name: 'BHET Essential',
    price: 199,
    tagline: 'Practical, crisp & high impact for large headcount corporate events and daily gifting.',
    badge: 'Budget Champion',
    itemsIncluded: [
      'Custom A5 Classic Notebook (160 Pages)',
      'Precision Branded Rollerball Pen',
      'Elegant Matte Gift Packaging with Company Sleeve'
    ],
    idealFor: 'Mass corporate events, training sessions, campus hiring, seminar attendees',
    packaging: 'Eco-Kraft or Matte Cardboard Sleeve Packaging with Custom Logo',
    popularFor: 'Offsite giveaways & bulk employee appreciation',
    rating: 4.8,
    reviewsCount: 142,
    image: kitEssentialImg
  },
  {
    id: 'classic',
    name: 'BHET Classic',
    price: 299,
    tagline: 'The timeless corporate combo balancing desk utility, hydration, and clean style.',
    badge: 'Most Popular',
    itemsIncluded: [
      'Premium Hardbound PU Notebook with Pen Loop',
      'Matte Metal Pen with Laser Engraving',
      'Customized 500ml Stainless Steel Water Bottle',
      'Sturdy Presentation Gift Box with Custom Sticker Seal'
    ],
    idealFor: 'General employee gifting, client appreciation, team achievements, vendor gifts',
    packaging: 'Rigid Top-Bottom Gift Box with custom printed sleeve',
    popularFor: 'Quarterly rewards and client thank-you kits',
    rating: 4.9,
    reviewsCount: 298,
    image: kitClassicImg
  },
  {
    id: 'professional',
    name: 'BHET Professional',
    price: 499,
    tagline: 'Comprehensive office companion kit crafted for everyday professional excellence.',
    badge: 'HR Favorite',
    itemsIncluded: [
      'Executive Vegan Leather Diary & Planner with Magnetic Closure',
      'Heavyweight Metal Rollerball Pen with Laser Engraving',
      'Double-Wall Vacuum Insulated Stainless Flask (500ml)',
      'Ceramic Matte Coffee Mug / Travel Tumbler with Wood Lid',
      'Custom Designed Rigid Box with High-Density Foam Insert'
    ],
    idealFor: 'New employee onboarding kits, managerial promotions, annual day rewards',
    packaging: 'Custom Rigid Magnetic Closure Box with Laser-cut Velvet Foam Tray',
    popularFor: 'Day-one joining boxes & Mid-level executive rewards',
    rating: 5.0,
    reviewsCount: 415,
    image: execKitImg
  },
  {
    id: 'executive',
    name: 'BHET Executive',
    price: 999,
    tagline: 'Luxury corporate hampers delivering an unforgettable bespoke unboxing experience.',
    badge: 'VIP & Leadership',
    itemsIncluded: [
      'Premium Gold-Edged Executive Diary with Page Marker',
      'Signature Heavyweight Luxury Brass Pen with Personalized Name Engraving',
      'Smart LED Temperature Display Insulated Flask',
      'Executive Vegan Leather Cardholder & Metal Keychain Pair',
      'Premium Desk Organizer / Wireless Fast-Charge Mat',
      'Gold Foil Personalized Corporate Greeting Message Card',
      'Imperial Velvet / Leatherette Rigid Luxury Gift Box'
    ],
    idealFor: 'CXO & Director gifting, key account clients, board members, milestone celebrations',
    packaging: 'Handcrafted Imperial Velvet-Lined Rigid Box with Gold Foil Stamping',
    popularFor: 'Diwali VIP hampers & high-value client relationship building',
    rating: 5.0,
    reviewsCount: 184,
    image: festiveHamperImg
  }
];

export const KIT_BUILDER_ITEMS: KitBuilderItem[] = [
  {
    id: 'kb-notebook',
    name: 'Notebook / Diary',
    category: 'stationery',
    price: 120,
    weightGrams: 280,
    options: [
      { name: 'Classic A5 Ruled Notebook', priceDelta: 0, description: 'Soft-touch cover, 160 pages, 80 GSM paper' },
      { name: 'Executive Hardbound Diary', priceDelta: 80, description: 'Vegan leather magnetic flap, ribbon marker, 192 pages' },
      { name: 'Eco-Kraft Spiral Planner', priceDelta: -20, description: 'Recycled kraft cover, wire-o bound, sustainable' },
      { name: 'Gold-Edge Luxury Journal', priceDelta: 140, description: 'Gold gilt edges, bookmark metal charm, ultra premium' }
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1E293B' },
      { name: 'Charcoal Black', hex: '#18181B' },
      { name: 'Saddle Tan', hex: '#78350F' },
      { name: 'Forest Emerald', hex: '#064E3B' },
      { name: 'Crimson Wine', hex: '#881337' }
    ],
    description: 'Essential branded notebook for meetings, reflections, and day-to-day notes.',
    iconName: 'BookOpen'
  },
  {
    id: 'kb-pen',
    name: 'Branded Pen',
    category: 'pen',
    price: 45,
    weightGrams: 35,
    options: [
      { name: 'Satin Matte Metal Ballpoint', priceDelta: 0, description: 'Smooth click action, aluminum alloy barrel' },
      { name: 'Heavyweight Laser-Engraved Rollerball', priceDelta: 45, description: 'Brass body, German 0.7mm quick-dry ink' },
      { name: '2-in-1 Stylus Touch Pen', priceDelta: 15, description: 'Capacitive silicone tip for smartphones & tablets' },
      { name: 'Natural Bamboo Wooden Pen', priceDelta: 25, description: 'Eco-friendly polished bamboo barrel with chrome clip' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#0F172A' },
      { name: 'Gunmetal Grey', hex: '#475569' },
      { name: 'Champagne Gold', hex: '#D97706' },
      { name: 'Royal Blue', hex: '#1D4ED8' }
    ],
    description: 'Precision writing tool featuring your logo laser-etched or screen printed.',
    iconName: 'PenTool'
  },
  {
    id: 'kb-bottle',
    name: 'Water Bottle / Flask',
    category: 'bottle',
    price: 195,
    weightGrams: 320,
    options: [
      { name: 'Single-Wall Stainless Bottle (750ml)', priceDelta: -45, description: 'Lightweight food-grade steel, leakproof loop lid' },
      { name: 'Dual-Wall Vacuum Insulated Flask (500ml)', priceDelta: 0, description: '12h hot / 24h cold, condensation-free powder coat' },
      { name: 'Smart LED Touch Temp Bottle (500ml)', priceDelta: 60, description: 'Lid display with real-time temperature sensor' },
      { name: 'Borosilicate Glass Bottle with Bamboo Cap (600ml)', priceDelta: 30, description: 'Thermal shock resistant with silicone protective sleeve' }
    ],
    colors: [
      { name: 'Matte Jet Black', hex: '#111827' },
      { name: 'Nordic White', hex: '#F3F4F6' },
      { name: 'Deep Teal', hex: '#0F766E' },
      { name: 'Terracotta Rust', hex: '#C2410C' },
      { name: 'Slate Blue', hex: '#334155' }
    ],
    description: 'Daily hydration bottle with high-visibility branding and long lifespan.',
    iconName: 'Droplets'
  },
  {
    id: 'kb-mug',
    name: 'Mug / Drinkware',
    category: 'mug',
    price: 130,
    weightGrams: 340,
    options: [
      { name: 'Ceramic Matte Coffee Mug (350ml)', priceDelta: 0, description: 'Smooth ceramic with comfortable ergonomic handle' },
      { name: 'Ceramic Mug with Natural Wooden Lid/Coaster', priceDelta: 40, description: 'Includes engraved acacia wood dual-use lid' },
      { name: 'Vacuum Insulated Travel Tumbler (400ml)', priceDelta: 85, description: 'Spill-resistant slider lid for car & desk coffee' },
      { name: 'Vintage Enamel Camp Mug (380ml)', priceDelta: 20, description: 'Lightweight rustic steel mug with rolled rim' }
    ],
    colors: [
      { name: 'Matte Charcoal', hex: '#1F2937' },
      { name: 'Ivory Cream', hex: '#FEF3C7' },
      { name: 'Dark Olive', hex: '#3F6212' },
      { name: 'Cobalt Blue', hex: '#1E3A8A' }
    ],
    description: 'Desktop staple keeping your brand in view during every morning brew.',
    iconName: 'Coffee'
  },
  {
    id: 'kb-keychain',
    name: 'Keychain & Organizer',
    category: 'keychain',
    price: 65,
    weightGrams: 40,
    options: [
      { name: 'Genuine Vegan Leather Loop Keychain', priceDelta: 0, description: 'Stitched strap with heavy-duty metal clasp' },
      { name: 'Spinning Metal Dual-Sided Keyring', priceDelta: 15, description: 'Zinc alloy medallion with 360 degree spin' },
      { name: 'Multi-Tool Carabiner Keyring', priceDelta: 35, description: 'Integrated bottle opener and mini hex wrench' }
    ],
    colors: [
      { name: 'Cognac Brown', hex: '#92400E' },
      { name: 'Raven Black', hex: '#09090B' },
      { name: 'Navy Blue', hex: '#1E3A5F' }
    ],
    description: 'Compact daily carry branded accessory for keys, bags, and work passes.',
    iconName: 'Key'
  },
  {
    id: 'kb-desk',
    name: 'Desk Accessories',
    category: 'desk',
    price: 110,
    weightGrams: 150,
    options: [
      { name: 'Executive RFID Metal Card Holder', priceDelta: 0, description: 'Protective stainless steel for 15+ cards' },
      { name: 'Fast Qi Wireless Charging Mousepad/Coaster', priceDelta: 160, description: '10W fast charge mat with leatherette finish' },
      { name: 'Solid Beechwood Mobile Phone Stand', priceDelta: -25, description: 'Angled desktop dock with cable routing slot' },
      { name: 'Metal Bookmark & Ruler Combo', priceDelta: -45, description: 'Laser-cut stainless steel bookmark' }
    ],
    colors: [
      { name: 'Brushed Silver', hex: '#E2E8F0' },
      { name: 'Space Grey', hex: '#4B5563' },
      { name: 'Walnut Wood', hex: '#713F12' }
    ],
    description: 'Functional workspace utilities that elevate every executive desk.',
    iconName: 'Laptop'
  },
  {
    id: 'kb-box',
    name: 'Gift Box & Packaging',
    category: 'box',
    price: 75,
    weightGrams: 200,
    options: [
      { name: 'Rigid Top-Bottom Gift Box with Custom Sleeve', priceDelta: 0, description: 'Hardboard sturdy box with full-color outer wrap sleeve' },
      { name: 'Magnetic Snap Luxury Box with Foam Insert', priceDelta: 110, description: 'Magnetic closure book-style box with velvet foam die-cut' },
      { name: 'Eco-Kraft Recycled Box with Jute Tie', priceDelta: -25, description: '100% natural kraft cardboard with branded sticker seal' },
      { name: 'Festive Gold Foil Rigid Box', priceDelta: 90, description: 'Metallic foiled embossed lid with satin pull ribbon' }
    ],
    colors: [
      { name: 'Classic Black', hex: '#09090B' },
      { name: 'Royal Navy', hex: '#0C4A6E' },
      { name: 'Kraft Brown', hex: '#B45309' },
      { name: 'Deep Burgundy', hex: '#4C0519' },
      { name: 'Emerald Pine', hex: '#064E3B' }
    ],
    description: 'The hero unboxing presentation that turns gifts into lasting memories.',
    iconName: 'Package'
  },
  {
    id: 'kb-message',
    name: 'Corporate Message Card',
    category: 'message',
    price: 20,
    weightGrams: 10,
    options: [
      { name: 'Gold Foil Embossed Welcome Note (350 GSM)', priceDelta: 0, description: 'Rich textured card with CEO message and logo' },
      { name: 'Interactive QR Video Card', priceDelta: 15, description: 'Scannable QR leading to custom team video or portal' },
      { name: 'Handwritten Style Thank You Postcard', priceDelta: -5, description: 'Warm personal greeting with custom typography' }
    ],
    colors: [
      { name: 'Warm Cream', hex: '#FFFBEB' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Metallic Charcoal', hex: '#1E293B' }
    ],
    description: 'Personalized heartfelt letter from leadership or event organizers.',
    iconName: 'MessageSquare'
  }
];

export const CUSTOMIZATION_OPTIONS: CustomizationOption[] = [
  {
    id: 'logo-print',
    title: 'Company Logo Printing',
    description: 'Vibrant screen, pad, and high-definition UV digital printing for exact Pantone color reproduction.',
    iconName: 'Sparkles',
    recommendedFor: 'Notebooks, bottles, drinkware, t-shirts, canvas sleeves'
  },
  {
    id: 'laser-engraving',
    title: 'Laser Engraving',
    description: 'Subtle, permanent, and ultra-crisp metal and wood laser etching that never fades or scratches off.',
    iconName: 'Crosshair',
    recommendedFor: 'Metal pens, steel flasks, wooden lids, metal keychains'
  },
  {
    id: 'name-personalization',
    title: 'Employee Name Personalization',
    description: 'Add individual employee or recipient names across diaries, pens, and bottles for a bespoke 1-on-1 touch.',
    iconName: 'UserCheck',
    recommendedFor: 'Joining kits, annual recognition, VIP client hampers'
  },
  {
    id: 'custom-boxes',
    title: 'Custom Gift Boxes',
    description: 'Rigid board boxes with custom dimensions, magnetic closures, and precision die-cut foam cradles.',
    iconName: 'Box',
    recommendedFor: 'Welcome kits, executive gift sets, product launch boxes'
  },
  {
    id: 'sleeves-packaging',
    title: 'Custom Sleeves & Packaging',
    description: 'Full-bleed 4-color printed wrapper bands, custom tissue wrapping, and branded wax seals.',
    iconName: 'Layers',
    recommendedFor: 'Festive gifts, conference kits, corporate events'
  },
  {
    id: 'brand-color-packaging',
    title: 'Brand-Color Packaging',
    description: 'Coordinate box exterior, inner lining, shredded paper filler, and satin ribbons to match brand guidelines.',
    iconName: 'Palette',
    recommendedFor: 'Brand milestone celebrations, PR swag boxes'
  },
  {
    id: 'corporate-messages',
    title: 'Corporate Messages & Inserts',
    description: 'Gold-foiled message cards, onboarding checklists, values booklets, and QR code greeting cards.',
    iconName: 'FileText',
    recommendedFor: 'HR onboarding, leadership appreciation notes'
  },
  {
    id: 'custom-combinations',
    title: 'Customized Gift Combinations',
    description: 'Mix and match any combination of products to match your precise per-kit budget constraint.',
    iconName: 'Sliders',
    recommendedFor: 'Tailored budgets from ₹199 to ₹5,000+'
  }
];

export const WHO_WE_SERVE: IndustryServe[] = [
  {
    id: 'startups',
    title: 'Startups & Scaleups',
    subtitle: 'High energy swag & agile joining kits',
    description: 'Fast turnarounds, flexible low MOQs, and modern aesthetic merchandise that new team members love to share on LinkedIn.',
    popularKits: ['Tech Swag Pack', 'Day-One Onboarding Box', 'Seed Funding Celebration Hamper'],
    avgBudget: '₹350 - ₹850 / kit',
    iconName: 'Rocket',
    tags: ['Low MOQ', 'Modern Swag', 'Quick Turnaround']
  },
  {
    id: 'corporates',
    title: 'Enterprises & Corporates',
    subtitle: 'Standardized procurement & bulk logistics',
    description: 'Pan-India direct-to-home dispatch, strict brand guideline compliance, GST billing, and dedicated corporate account managers.',
    popularKits: ['BHET Professional Kit', 'Annual Day Hampers', 'Long Service Awards'],
    avgBudget: '₹450 - ₹1,500 / kit',
    iconName: 'Building',
    tags: ['Pan-India Dispatch', 'Volume Pricing', 'GST Compliance']
  },
  {
    id: 'smb',
    title: 'Small & Medium Businesses',
    subtitle: 'Cost-effective high-impact relationships',
    description: 'Strengthen bonds with top clients, suppliers, and loyal employees without needing massive procurement minimums.',
    popularKits: ['BHET Classic Kit', 'Festive Sweet & Stationery Box'],
    avgBudget: '₹250 - ₹600 / kit',
    iconName: 'Store',
    tags: ['Flexible Budgets', 'Relationship Building']
  },
  {
    id: 'hr-admin',
    title: 'HR & Administration Teams',
    subtitle: 'Effortless onboarding & recognition',
    description: 'Automate your monthly onboarding kits. We stock your branded inventory and ship directly whenever a new hire joins.',
    popularKits: ['Welcome Onboarding Crate', 'Work Anniversary Plaque & Kit', 'Wellness Pack'],
    avgBudget: '₹499 - ₹1,200 / kit',
    iconName: 'Users',
    tags: ['Warehousing Support', 'Employee Engagement']
  },
  {
    id: 'marketing-sales',
    title: 'Marketing & Sales Teams',
    subtitle: 'Deal-closing corporate gifts & event swag',
    description: 'Memorable high-utility gifts for VIP prospective clients, trade shows, partner summits, and brand activation campaigns.',
    popularKits: ['Client Closing Gift Box', 'VIP Executive Hamper', 'Conference Giveaways'],
    avgBudget: '₹500 - ₹2,000 / kit',
    iconName: 'Target',
    tags: ['Lead Conversion', 'Premium First Impressions']
  },
  {
    id: 'institutions',
    title: 'Schools & Institutions',
    subtitle: 'Alumni merchandise & faculty gifts',
    description: 'Convocation kits, faculty appreciation stationery, alumni meet packages, and student orientation sets.',
    popularKits: ['Campus Orientation Diary & Pen', 'Faculty Milestone Plaque & Set'],
    avgBudget: '₹180 - ₹450 / kit',
    iconName: 'GraduationCap',
    tags: ['Alumni Swag', 'Academic Conferences']
  },
  {
    id: 'hospitality',
    title: 'Hotels & Hospitality',
    subtitle: 'Guest welcome gifts & VIP amenities',
    description: 'Custom guestroom drinkware, event delegate kits, and executive partner welcome hampers with pristine presentation.',
    popularKits: ['VIP Guest Welcome Hamper', 'Artisan Coffee & Mug Set'],
    avgBudget: '₹400 - ₹1,200 / kit',
    iconName: 'UtensilsCrossed',
    tags: ['Luxury Presentation', 'VIP Amenities']
  },
  {
    id: 'events-agencies',
    title: 'Event Organizers & Agencies',
    subtitle: 'Exhibition delegate kits & speaker mementos',
    description: 'Reliable countdown delivery for summit delegates, speaker appreciation gifts, sponsor gift bags, and media launch packs.',
    popularKits: ['Delegate Conference Bag', 'Keynote Speaker Luxury Hamper'],
    avgBudget: '₹200 - ₹950 / kit',
    iconName: 'CalendarCheck',
    tags: ['Hard Deadlines', 'Event Branding']
  }
];

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'events',
    title: 'Corporate Events & Summits',
    tagline: 'Make conferences, seminars and business events more memorable.',
    description: 'High-utility conference stationery, sleek water bottles, lanyards, and delegate kits that keep your brand front and center throughout the event and long after.',
    recommendedItems: ['Conference Folder & Notepad', 'Branded Metal Pen', 'Insulated Sipper', 'Eco Kraft Bag'],
    timingLeadDays: '3-6 Days',
    seasonTag: 'Year Round',
    image: prodEventsImg
  },
  {
    id: 'employee-gifting',
    title: 'Employee Recognition & Appreciation',
    tagline: 'Recognize, appreciate and celebrate your employees.',
    description: 'Reward outstanding contributions, celebrate team milestones, and boost workplace morale with personalized daily-use gifts and premium desk accessories.',
    recommendedItems: ['Executive Diary', 'Personalized Laser Pen', 'Smart Temp Flask', 'Recognition Card'],
    timingLeadDays: '4-7 Days',
    seasonTag: 'Quarterly',
    image: prodDeskImg
  },
  {
    id: 'client-gifting',
    title: 'Client & Customer Gifting',
    tagline: 'Strengthen business relationships with thoughtful gifts.',
    description: 'Show gratitude to key accounts, celebrate contract renewals, and nurture long-term partnerships with sophisticated corporate hampers.',
    recommendedItems: ['BHET Executive Hamper', 'Ceramic Mug Set', 'RFID Cardholder', 'Velvet Gift Box'],
    timingLeadDays: '5-8 Days',
    seasonTag: 'High Impact',
    image: festiveHamperImg
  },
  {
    id: 'joining-kits',
    title: 'Employee Joining & Onboarding Kits',
    tagline: 'Give new employees a warm and professional welcome.',
    description: 'Turn day one into an inspiring experience with a fully branded unboxing kit that makes new hires immediately feel valued and part of the mission.',
    recommendedItems: ['Custom Rigid Box', 'Welcome Diary & Pen', 'Insulated Water Bottle', 'Company Values Card'],
    timingLeadDays: '4-6 Days (Bulk pre-stock available)',
    seasonTag: 'Continuous',
    image: prodWelcomeImg
  },
  {
    id: 'festive-gifting',
    title: 'Festive Celebrations (Diwali, New Year)',
    tagline: 'Celebrate Diwali, New Year and other occasions with customized corporate gifts.',
    description: 'Festive season hampers combining luxury dry fruits, brass scented diyas, premium tech desk accessories, and gold foil greeting sleeves.',
    recommendedItems: ['Festive Gourmet Hamper', 'Brass Diya & Candle', 'Luxury Copper Bottle', 'Gold Foil Box'],
    timingLeadDays: '7-12 Days (Early booking recommended)',
    seasonTag: 'Festive Rush',
    image: festiveHamperImg
  },
  {
    id: 'milestones',
    title: 'Milestones & Achievements',
    tagline: 'Celebrate promotions, anniversaries, achievements and special business milestones.',
    description: 'Honor 5-year work anniversaries, funding announcements, merger celebrations, and corporate achievements with bespoke commemorative gift sets.',
    recommendedItems: ['Commemorative Plaque', 'Laser Engraved Trophy Set', 'Executive Pen Set', 'Luxury Box'],
    timingLeadDays: '5-8 Days',
    seasonTag: 'Special Occasions',
    image: heroBoxImg
  }
];

export const WHY_BHET = [
  {
    id: 'quality',
    title: 'Quality First',
    description: 'We focus on products that are practical, useful, and presentable. No cheap plastic giveaways — only durable, high-utility items people genuinely love to use.',
    iconName: 'ShieldCheck',
    badge: '100% Quality Checked'
  },
  {
    id: 'customization',
    title: 'Complete Customization',
    description: 'Make your gifts reflect your company’s identity. From precise Pantone-matched box sleeves to individual laser-engraved names.',
    iconName: 'Palette',
    badge: 'Precise Branding'
  },
  {
    id: 'flexible-budgets',
    title: 'Flexible Budgets',
    description: 'We offer gifting solutions across different price ranges — from accessible ₹199 starter essentials to opulent ₹2,500+ CXO luxury hampers.',
    iconName: 'Coins',
    badge: '₹199 to ₹2,500+'
  },
  {
    id: 'presentation',
    title: 'Professional Presentation',
    description: 'Because the packaging is part of the experience. Handcrafted rigid boxes, die-cut foam, butter paper wrap, and custom message cards.',
    iconName: 'Sparkles',
    badge: 'Luxury Unboxing'
  },
  {
    id: 'bulk-orders',
    title: 'Bulk Orders & Logistics',
    description: 'We cater to large corporate and institutional requirements with tiered volume discounts and reliable Pan-India doorstep delivery.',
    iconName: 'Truck',
    badge: 'Pan-India Express'
  },
  {
    id: 'one-stop',
    title: 'One-Stop Gifting',
    description: 'From selecting products to customization, packaging, assembly, and individual doorstep dispatch — we manage the end-to-end headache for you.',
    iconName: 'CheckCircle2',
    badge: 'End-to-End Hassle-Free'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tell Us Your Requirement',
    description: 'Share your occasion, required quantity, target budget per kit, and delivery timeline via our interactive builder or quick form.',
    iconName: 'MessageSquareText'
  },
  {
    step: '02',
    title: 'Choose Your Products',
    description: 'Select one of our proven curated gift kits or customize your own mix of stationery, drinkware, pens, and accessories.',
    iconName: 'PackageCheck'
  },
  {
    step: '03',
    title: 'Approve Free Digital Mockup',
    description: 'Our design team generates a high-resolution 3D digital mockup with your exact logo and Pantone brand colors within 2-4 hours.',
    iconName: 'Eye'
  },
  {
    step: '04',
    title: 'Production & Pan-India Delivery',
    description: 'Precision laser engraving & printing, individual gift assembly, rigorous quality check, and express delivery right to your office or employee homes.',
    iconName: 'Send'
  }
];

export const FAQS = [
  {
    question: 'What is the Minimum Order Quantity (MOQ) at BHET?',
    answer: 'Our standard Minimum Order Quantity starts at just 20-25 kits for customized orders. For sample testing or single-unit prototyping, you can order a sample box before finalizing your bulk run.'
  },
  {
    question: 'Can we add individual employee names on items like pens and water bottles?',
    answer: 'Yes! We specialize in variable-data laser engraving. You can supply an Excel spreadsheet with employee or recipient names, and each person will receive their custom kit with their own name cleanly etched on the pen, diary, or bottle.'
  },
  {
    question: 'What is the standard turnaround and delivery time?',
    answer: 'Standard customized orders are dispatched within 4 to 7 business days following digital artwork approval. For rush urgent corporate events, we offer expedited 48-72 hour express dispatch for select catalog lines.'
  },
  {
    question: 'How do we submit our company logo and brand assets?',
    answer: 'You can upload your logo in high-resolution vector format (.AI, .EPS, .PDF) or high-res .PNG. Our in-house design studio will prepare a digital proof for your sign-off before manufacturing starts.'
  },
  {
    question: 'Can BHET deliver directly to remote employees’ home addresses across India?',
    answer: 'Absolutely. We offer Multi-Address Direct-to-Doorstep Dispatch. Simply share your recipient address list in our secure format, and we handle individual bubble-wrapped packaging, tracking IDs, and door-to-door delivery across 19,000+ PIN codes.'
  },
  {
    question: 'Do you offer GST invoices and corporate credit terms for enterprise clients?',
    answer: 'Yes, 100% compliant B2B tax invoicing with your company GSTIN is provided. We also support corporate purchase orders (POs) and scheduled billing for recurring HR onboarding accounts.'
  }
];

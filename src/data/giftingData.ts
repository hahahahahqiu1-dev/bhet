import { CuratedKit, CustomizationOption, IndustryServe, KitBuilderItem, OccasionItem, ProductItem, ProductReview } from '../types';

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
  address: "PATKAR VARDE COLLEGE, Swami Vivekanand Rd, Piramal Nagar, Goregaon West, Mumbai, Maharashtra 400104",
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
    rating: 4.7,
    reviewsCount: 86,
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
    rating: 4.3,
    reviewsCount: 52,
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
    rating: 4.8,
    reviewsCount: 124,
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
    rating: 4.1,
    reviewsCount: 38,
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
    rating: 4.9,
    reviewsCount: 210,
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
    rating: 4.2,
    reviewsCount: 45,
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
    rating: 4.6,
    reviewsCount: 67,
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
    rating: 4.4,
    reviewsCount: 54,
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
    rating: 4.9,
    reviewsCount: 188,
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
    rating: 4.7,
    reviewsCount: 96,
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
    rating: 4.3,
    reviewsCount: 62,
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
    rating: 4.2,
    reviewsCount: 41,
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
    rating: 4.7,
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
    rating: 4.8,
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
    rating: 4.9,
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
    rating: 4.9,
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

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarText: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'BHET delivered 250 custom new hire welcome kits ahead of schedule. The quality of the rigid black boxes, laser-engraved metal bottles, and PU journals was top-notch. Our employees loved unboxing them!',
    author: 'Priya Sharma',
    role: 'Head of HR',
    company: 'FinTech Solutions India',
    rating: 5,
    avatarText: 'PS'
  },
  {
    id: 't2',
    quote: 'We ordered custom festive hampers for our clients and senior leadership. The attention to detail with our gold foil logo and artisan candles was spectacular. Truly world-class corporate gifting.',
    author: 'Vikram Malhotra',
    role: 'VP Operations',
    company: 'Apex Global Tech',
    rating: 5,
    avatarText: 'VM'
  },
  {
    id: 't3',
    quote: 'The AI kit builder and instant PDF proposal generator made our corporate procurement process effortless. Received our bulk shipment in Bangalore within 4 days!',
    author: 'Ananya Deshmukh',
    role: 'Procurement Lead',
    company: 'Innovate Labs',
    rating: 5,
    avatarText: 'AD'
  },
  {
    id: 't4',
    quote: 'Individual employee name laser engraving on diaries and pens without a single error! BHET\'s precision and responsiveness exceeded all our expectations.',
    author: 'Rajesh Nair',
    role: 'Director People & Culture',
    company: 'CloudScale Networks',
    rating: 5,
    avatarText: 'RN'
  }
];

export const PRODUCT_REVIEWS_MAP: Record<string, ProductReview[]> = {
  'p-1': [
    {
      id: 'rev-p1-1',
      author: 'Rohan Mehta',
      role: 'Head of HR',
      company: 'TechMatrix India',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 150 units',
      verified: true,
      title: 'Flawless gold debossing & 80 GSM paper',
      comment: 'Ordered 150 units of the Executive PU Leather Diary with gold debossing of our company logo for our Q3 leadership offsite. Paper quality is top notch with zero ink bleed.',
      helpfulCount: 24
    },
    {
      id: 'rev-p1-2',
      author: 'Kavita Reddy',
      role: 'Procurement Lead',
      company: 'Nexus Global',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 300 units',
      verified: true,
      title: 'Delivered early in Bangalore! Magnetic flap is snug.',
      comment: 'The navy leather texture looks high-end. BHET delivered our bulk order 2 days ahead of schedule. Magnetic flap felt slightly stiff on day one but works smoothly now.',
      helpfulCount: 18
    },
    {
      id: 'rev-p1-3',
      author: 'Siddharth Verma',
      role: 'Operations Lead',
      company: 'Horizon Fintech',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 80 units',
      verified: true,
      title: 'Solid build & very crisp blind deboss',
      comment: 'Great craft overall. The pen loop fits standard metal pens comfortably and the ribbon bookmark makes daily tracking effortless.',
      helpfulCount: 9
    },
    {
      id: 'rev-p1-4',
      author: 'Karthik N.',
      role: 'Admin Manager',
      company: 'BrightOps Systems',
      rating: 3,
      date: 'May 2026',
      orderSize: 'Ordered 50 units',
      verified: true,
      title: 'Good diary, wish ribbon color options were wider',
      comment: 'Paper and leather feel great for daily journaling. Would appreciate if the bookmark ribbon could be ordered in secondary brand accent colors.',
      helpfulCount: 5
    }
  ],
  'p-2': [
    {
      id: 'rev-p2-1',
      author: 'Sneha Kulkarni',
      role: 'Sustainability Lead',
      company: 'GreenScale Solutions',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 200 units',
      verified: true,
      title: 'Seed paper pens sprouted marigolds!',
      comment: 'We ordered these eco-kraft notebooks for our Sustainability Summit. Screen printing was clean and delegates sent us photos of marigolds sprouting from their pots!',
      helpfulCount: 31
    },
    {
      id: 'rev-p2-2',
      author: 'Amitabh Sen',
      role: 'Campus Hiring Manager',
      company: 'CloudSoft Tech',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 500 units',
      verified: true,
      title: 'Great eco giveaway for campus hiring',
      comment: 'Distributed 500 notebooks to students during placements. Kraft cover feels durable. Zero plastic packaging aligned well with ESG targets.',
      helpfulCount: 15
    },
    {
      id: 'rev-p2-3',
      author: 'Devraj P.',
      role: 'Event Co-ordinator',
      company: 'EcoVentures Hub',
      rating: 3,
      date: 'June 2026',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: 'Earthy aesthetic; sticky flags are small',
      comment: 'Loved the sustainable feel. Cover screen printing was neat. The inside sticky flags are compact, but good overall for a green event.',
      helpfulCount: 7
    }
  ],
  'p-3': [
    {
      id: 'rev-p3-1',
      author: 'Vikramaditya Rao',
      role: 'Director of Executive Ops',
      company: 'Vertex Capital',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 400 units',
      verified: true,
      title: 'Laser engraving reveal is silver mirror crisp',
      comment: 'Laser engraving on the matte black brass barrel reveals a silver mirror finish. German ink cartridge writes smoothly without skipping.',
      helpfulCount: 42
    },
    {
      id: 'rev-p3-2',
      author: 'Pooja Singhania',
      role: 'Corporate Communications',
      company: 'Elevate Banking',
      rating: 5,
      date: 'June 2026',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: '100 pens with individual names—zero typos!',
      comment: 'Requested individual name laser engraving on 100 pens for our milestone awards. Every single pen was 100% accurate.',
      helpfulCount: 29
    },
    {
      id: 'rev-p3-3',
      author: 'Sameer T.',
      role: 'General Manager',
      company: 'Infinia Corp',
      rating: 4,
      date: 'May 2026',
      orderSize: 'Ordered 150 units',
      verified: true,
      title: 'Heavyweight brass feel; dispatched in 4 days',
      comment: 'Substantial 28g weight feels premium in hand. Dispatch took 4 days due to custom name engraving, but quality justified the short wait.',
      helpfulCount: 11
    }
  ],
  'p-4': [
    {
      id: 'rev-p4-1',
      author: 'Deepak Joshi',
      role: 'IT Operations Manager',
      company: 'SmartLogistics India',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 250 units',
      verified: true,
      title: 'Essential for staff switching between paper & tablets',
      comment: 'Warehouse operations managers switch between paper manifests and iPad screens all day. Silicone stylus tip is responsive.',
      helpfulCount: 19
    },
    {
      id: 'rev-p4-2',
      author: 'Neha B.',
      role: 'Digital Worksite Lead',
      company: 'Digital Wave',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 120 units',
      verified: true,
      title: 'Practical 2-in-1 tool for conference attendees',
      comment: 'Clicker mechanism is snappy and pad print logo turned out clear. Good functional pen for daily tablet usage.',
      helpfulCount: 8
    },
    {
      id: 'rev-p4-3',
      author: 'Alok R.',
      role: 'Procurement Executive',
      company: 'Retail Solutions',
      rating: 3,
      date: 'May 2026',
      orderSize: 'Ordered 300 units',
      verified: true,
      title: 'Functional, pocket clip could be firmer',
      comment: 'Works well as both a pen and tablet stylus. Barrel grip is good; pocket metal clip is slightly flexible but does the job for bulk gifting.',
      helpfulCount: 4
    }
  ],
  'p-5': [
    {
      id: 'rev-p5-1',
      author: 'Tanvi Saxena',
      role: 'Employee Experience Specialist',
      company: 'CyberGrid Technologies',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 350 units',
      verified: true,
      title: 'Cold water stays ice cold for 24h in Mumbai heat!',
      comment: 'Handed out 350 black powder-coated AeroTherm bottles with personalized employee names. Water remains icy cold all day with zero condensation.',
      helpfulCount: 56
    },
    {
      id: 'rev-p5-2',
      author: 'Rajesh Iyer',
      role: 'Facilities & Admin Head',
      company: 'Apex Healthcare',
      rating: 5,
      date: 'July 2026',
      orderSize: 'Ordered 200 units',
      verified: true,
      title: 'True 304 food grade steel with leakproof lid',
      comment: 'Solid build, no metallic aftertaste, and laser engraving doesn\'t peel off after washing.',
      helpfulCount: 22
    },
    {
      id: 'rev-p5-3',
      author: 'Swati K.',
      role: 'HR Business Partner',
      company: 'Summit Tech Solutions',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: 'Great insulation; powder coating holds up well',
      comment: 'Keeps tea hot for 12 hours easily. The matte powder coat has survived 3 months of office desks without scuffs.',
      helpfulCount: 14
    }
  ],
  'p-6': [
    {
      id: 'rev-p6-1',
      author: 'Arjun Kapoor',
      role: 'VP People & Culture',
      company: 'NextGen AI Labs',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 120 units',
      verified: true,
      title: 'Touch LED temp display is a total hit!',
      comment: 'Everyone in our engineering team loves tapping the top of the bottle to see real-time liquid temperature. Tea infuser strainer is a nice touch.',
      helpfulCount: 38
    },
    {
      id: 'rev-p6-2',
      author: 'Mitesh S.',
      role: 'Admin Officer',
      company: 'FinTech One',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 80 units',
      verified: true,
      title: 'Futuristic look and accurate temp sensor',
      comment: 'LED display responds instantly to touch. Battery doesn\'t need charging. Good conversion item for tech teams.',
      helpfulCount: 10
    },
    {
      id: 'rev-p6-3',
      author: 'Pragya M.',
      role: 'Operations Manager',
      company: 'DataPulse Corp',
      rating: 3,
      date: 'June 2026',
      orderSize: 'Ordered 60 units',
      verified: true,
      title: 'Sleek tech flask; instruct staff on washing',
      comment: 'Sensors work accurately. Just need to remind employees to rinse lid gently by hand instead of soaking in harsh dishwashers.',
      helpfulCount: 6
    }
  ],
  'p-7': [
    {
      id: 'rev-p7-1',
      author: 'Neelam Sharma',
      role: 'Chief HR Officer',
      company: 'Design Studio Co',
      rating: 5,
      date: 'July 2026',
      orderSize: 'Ordered 180 units',
      verified: true,
      title: 'Acacia wood coaster lid looks insanely elegant',
      comment: 'Natural acacia wood lid doubles as a desk coaster and protects coffee from dust. Ceramic glaze is smooth and microwave safe.',
      helpfulCount: 27
    },
    {
      id: 'rev-p7-2',
      author: 'Gaurav C.',
      role: 'Creative Director',
      company: 'Architectural Mind',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 90 units',
      verified: true,
      title: 'Substantial stoneware weight prevents spills',
      comment: 'Heavy ceramic base feels sturdy on office desks. Engraving on the wood lid came out sharp.',
      helpfulCount: 12
    },
    {
      id: 'rev-p7-3',
      author: 'Ritu V.',
      role: 'Studio Lead',
      company: 'Pixel Craft Studio',
      rating: 4,
      date: 'May 2026',
      orderSize: 'Ordered 50 units',
      verified: true,
      title: 'Beautiful wood grain variations',
      comment: 'Every acacia lid has a slightly distinct natural grain texture, which gives it a handcrafted charm. Mugs are dishwasher safe.',
      helpfulCount: 8
    }
  ],
  'p-8': [
    {
      id: 'rev-p8-1',
      author: 'Preeti Deshmukh',
      role: 'Talent Acquisition Lead',
      company: 'Mobility Labs',
      rating: 5,
      date: 'June 2026',
      orderSize: 'Ordered 140 units',
      verified: true,
      title: 'Flip-lock sip lid is 100% leakproof',
      comment: 'Our team uses these tumblers during morning commutes. Flip-lock lid locks tight and keeps coffee piping hot for 6 hours.',
      helpfulCount: 16
    },
    {
      id: 'rev-p8-2',
      author: 'Tarun G.',
      role: 'Fleet Manager',
      company: 'Urban Fleet Logistics',
      rating: 4,
      date: 'May 2026',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: 'Fits car cup holders smoothly',
      comment: 'Tapered bottom fits standard car holders without rattling. Silicone grip band helps holding while driving.',
      helpfulCount: 9
    },
    {
      id: 'rev-p8-3',
      author: 'Anish K.',
      role: 'Field Lead',
      company: 'DriveLog India',
      rating: 3,
      date: 'April 2026',
      orderSize: 'Ordered 70 units',
      verified: true,
      title: 'Keeps coffee warm; lid latch is firm when new',
      comment: 'Great heat retention for 5-6 hours. The flip-lock latch takes two thumbs to snap open during the first few days, but loosens nicely.',
      helpfulCount: 5
    }
  ],
  'p-9': [
    {
      id: 'rev-p9-1',
      author: 'Sunil Merchant',
      role: 'HR Director',
      company: 'Enterprise Cloud India',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 450 units',
      verified: true,
      title: 'Unboxing experience rated 10/10 by 450 engineers',
      comment: 'BHET coordinated direct dispatches for 450 joining engineers across 6 cities. Rigid magnetic box with EVA foam slots made everyone feel valued on Day 1.',
      helpfulCount: 64
    },
    {
      id: 'rev-p9-2',
      author: 'Anushka Roy',
      role: 'Head of Talent',
      company: 'FinTech Horizon',
      rating: 5,
      date: 'July 2026',
      orderSize: 'Ordered 180 units',
      verified: true,
      title: 'Immaculate branding across all 6 items',
      comment: 'From thermoflask to leatherette diary, every item had consistent logo branding. Highly recommended for onboarding.',
      helpfulCount: 35
    },
    {
      id: 'rev-p9-3',
      author: 'Vikram S.',
      role: 'People Ops Lead',
      company: 'Growth Stack',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 90 units',
      verified: true,
      title: 'Premium impression for joining executives',
      comment: 'Very impressive welcome kit. Box outer sleeve printing was crisp. Took 5 days for full dispatch, but arrived safely.',
      helpfulCount: 16
    }
  ],
  'p-10': [
    {
      id: 'rev-p10-1',
      author: 'Harish Varma',
      role: 'Senior Director',
      company: 'Apex Global Partners',
      rating: 5,
      date: 'Festive Season',
      orderSize: 'Ordered 75 hampers',
      verified: true,
      title: 'CXO clients personally called to thank us!',
      comment: 'Sent these festive hampers to top clients. Hand-poured brass diya, dry fruit duo, and gold-foiled velvet box received immense praise.',
      helpfulCount: 48
    },
    {
      id: 'rev-p10-2',
      author: 'Meera N.',
      role: 'Corporate Relations',
      company: 'Heritage Advisory',
      rating: 4,
      date: 'Festive Season',
      orderSize: 'Ordered 120 hampers',
      verified: true,
      title: 'Brass diya and dry fruit jars looked regal',
      comment: 'Velvet finish box felt rich. Dry fruits were fresh and crisp. A great festive corporate gesture.',
      helpfulCount: 21
    },
    {
      id: 'rev-p10-3',
      author: 'Rahul D.',
      role: 'Admin Lead',
      company: 'Capital Works',
      rating: 4,
      date: 'Festive Season',
      orderSize: 'Ordered 100 hampers',
      verified: true,
      title: 'Great hampers; prompt replacement for 2 misaligned lids',
      comment: 'Overall quality was outstanding. 2 jars out of 100 had minor lid alignment during shipping, but BHET support replaced them within 24 hours.',
      helpfulCount: 12
    }
  ],
  'p-11': [
    {
      id: 'rev-p11-1',
      author: 'Manish Agarwal',
      role: 'Event Director',
      company: 'National Tech Summit',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 800 units',
      verified: true,
      title: 'Delivered 800 units on tight event deadline',
      comment: 'A4 conference folder bag and lanyard badges were sturdy and well-printed. 800 kits arrived at venue 24 hours before registration.',
      helpfulCount: 20
    },
    {
      id: 'rev-p11-2',
      author: 'Shilpa R.',
      role: 'Program Coordinator',
      company: 'Eventus India',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 350 units',
      verified: true,
      title: 'Practical conference kit for attendees',
      comment: 'Folder bag fits A4 documents smoothly. Stylus pen worked well during live voting sessions.',
      helpfulCount: 11
    },
    {
      id: 'rev-p11-3',
      author: 'Varun P.',
      role: 'Event Operations',
      company: 'Summit Media',
      rating: 3,
      date: 'June 2026',
      orderSize: 'Ordered 200 units',
      verified: true,
      title: 'Good utility set; folder fabric is basic',
      comment: 'Delivered on time. The lanyard and pen are great. Folder bag material is clean polyester, suitable for mass registration drives.',
      helpfulCount: 6
    }
  ],
  'p-12': [
    {
      id: 'rev-p12-1',
      author: 'Siddharth Menon',
      role: 'Business Development Head',
      company: 'Alliance Systems',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 200 units',
      verified: true,
      title: 'RFID cardholder is slim & protects cards',
      comment: 'Stainless steel RFID cardholder paired with leather keychain is a subtle, high-class token for event attendees.',
      helpfulCount: 14
    },
    {
      id: 'rev-p12-2',
      author: 'Shreya T.',
      role: 'Marketing Lead',
      company: 'Venture Point',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 150 units',
      verified: true,
      title: 'Keyring alloy feels heavy and premium',
      comment: 'Laser engraving on metal cardholder turned out sharp. Holds 12-15 business cards smoothly.',
      helpfulCount: 8
    },
    {
      id: 'rev-p12-3',
      author: 'Brijesh M.',
      role: 'Trade Relations Manager',
      company: 'TradeConnect India',
      rating: 3,
      date: 'May 2026',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: 'Compact cardholder; gift box cardboard is standard',
      comment: 'Product itself works nicely for shielding contactless cards. Presentation box is neat, good value for money.',
      helpfulCount: 5
    }
  ],
  'p-online-1': [
    {
      id: 'rev-po1-1',
      author: 'Nikhil Bhatt',
      role: 'VP Engineering',
      company: 'SaaS Scaleup',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 95 units',
      verified: true,
      title: '15W Qi wireless charger declutters desks',
      comment: 'Clean vegan leather stitching and wireless charger works with both iPhone and Android devices. Plaque engraving looks executive grade.',
      helpfulCount: 28
    },
    {
      id: 'rev-po1-2',
      author: 'Ananya D.',
      role: 'IT Operations',
      company: 'Apex Tech Solutions',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 60 units',
      verified: true,
      title: 'Charges through standard phone cases',
      comment: 'Desk mat is smooth for mouse gliding. Wireless charger output is consistent at 15W.',
      helpfulCount: 12
    }
  ],
  'p-online-2': [
    {
      id: 'rev-po2-1',
      author: 'Priyanka Mittal',
      role: 'Internal Comms Lead',
      company: 'Global Advisory',
      rating: 5,
      date: 'Festive Season',
      orderSize: 'Ordered 160 units',
      verified: true,
      title: 'Lavender-Oud scent is soothing & brass diya is solid',
      comment: 'Artisan brass diya has great weight and craft. Paired with soy wax candle in gold foil box, made for a memorable gift.',
      helpfulCount: 22
    },
    {
      id: 'rev-po2-2',
      author: 'Vineet K.',
      role: 'Admin Manager',
      company: 'Creative Solutions',
      rating: 4,
      date: 'Festive Season',
      orderSize: 'Ordered 100 units',
      verified: true,
      title: 'Soy wax burns evenly without smoke',
      comment: 'Nice subtle fragrance. Box packaging is gift-ready without requiring extra gift wrapping.',
      helpfulCount: 9
    }
  ],
  'p-online-3': [
    {
      id: 'rev-po3-1',
      author: 'Varun Khurana',
      role: 'Brand Lead',
      company: 'Regal Living',
      rating: 5,
      date: 'August 2026',
      orderSize: 'Ordered 300 boxes',
      verified: true,
      title: '1200 GSM thick rigid box with magnetic closure',
      comment: 'Extremely sturdy luxury box. Gold hot-stamped branding on soft-touch matte finish elevates any gift set instantly.',
      helpfulCount: 19
    },
    {
      id: 'rev-po3-2',
      author: 'Pallavi M.',
      role: 'Procurement Specialist',
      company: 'Luxe Retail India',
      rating: 4,
      date: 'July 2026',
      orderSize: 'Ordered 150 boxes',
      verified: true,
      title: 'Very thick card stock; magnetic snap is audible',
      comment: 'High quality construction. Custom foam insert die-cutting was precise to our bottleneck dimensions.',
      helpfulCount: 10
    }
  ],
  'p-online-4': [
    {
      id: 'rev-po4-1',
      author: 'Divya Swaminathan',
      role: 'ESG & Impact Officer',
      company: 'EcoCorp India',
      rating: 5,
      date: 'July 2026',
      orderSize: 'Ordered 220 units',
      verified: true,
      title: 'Zero plastic, 100% sustainable sugarcane paper',
      comment: 'Recycled cotton pulp cover embedded with marigold seeds and sprout pencils. Perfect for zero-waste initiatives.',
      helpfulCount: 25
    },
    {
      id: 'rev-po4-2',
      author: 'Sanjay K.',
      role: 'Sustainability Lead',
      company: 'Clean Energy Co',
      rating: 4,
      date: 'June 2026',
      orderSize: 'Ordered 140 units',
      verified: true,
      title: 'Plantable pencils sprouted basil!',
      comment: 'Great engagement product for eco campaigns. Paper is earthy and natural.',
      helpfulCount: 11
    },
    {
      id: 'rev-po4-3',
      author: 'Nivedita G.',
      role: 'Community Manager',
      company: 'Impact Hub',
      rating: 3,
      date: 'May 2026',
      orderSize: 'Ordered 80 units',
      verified: true,
      title: 'Earthy texture; fountain ink takes time to dry',
      comment: 'Unbleached sugarcane paper has nice character. Works great with ballpoint and gel pens; fountain pen ink needs a few extra seconds to absorb.',
      helpfulCount: 6
    }
  ]
};

export function getProductReviewsDetails(product: ProductItem): { rating: number; count: number; reviews: ProductReview[] } {
  const customReviews = (product.reviews && product.reviews.length > 0)
    ? product.reviews
    : (PRODUCT_REVIEWS_MAP[product.id] || []);

  if (customReviews.length > 0) {
    const totalRating = customReviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = Number((totalRating / customReviews.length).toFixed(1));
    return {
      rating: product.rating || avg,
      count: product.reviewsCount || (customReviews.length * 16 + 12),
      reviews: customReviews
    };
  }

  // Fallback realistic reviews tailored to product category
  const fallbackReviews: ProductReview[] = [
    {
      id: `rev-fb-${product.id}-1`,
      author: 'Anand Varma',
      role: 'Head of Procurement',
      company: 'Synergy Corporate Services',
      rating: 5,
      date: 'August 2026',
      orderSize: `Ordered ${product.minOrderQty * 4} units`,
      verified: true,
      title: `High quality & clean logo branding on ${product.name}`,
      comment: `We placed a bulk order of ${product.minOrderQty * 4} units. The logo printing was crisp, materials feel durable, and BHET delivered on time with GST invoicing.`,
      helpfulCount: 18
    },
    {
      id: `rev-fb-${product.id}-2`,
      author: 'Meenakshi Sundaram',
      role: 'Senior HR Manager',
      company: 'AeroTech Systems',
      rating: 4,
      date: 'July 2026',
      orderSize: `Ordered ${product.minOrderQty * 2} units`,
      verified: true,
      title: 'Good finish and dependable corporate service',
      comment: `Customized with our company colors and recipient names. Overall very pleased with the finish and turnaround time.`,
      helpfulCount: 12
    },
    {
      id: `rev-fb-${product.id}-3`,
      author: 'Kunal Shah',
      role: 'Admin Lead',
      company: 'Vanguard Labs',
      rating: 3,
      date: 'June 2026',
      orderSize: `Ordered ${product.minOrderQty} units`,
      verified: true,
      title: 'Solid utility for daily office use',
      comment: 'Decent product quality. Delivery took 4 days for custom color matching, but overall good value for money.',
      helpfulCount: 5
    }
  ];

  const totalRating = fallbackReviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = Number((totalRating / fallbackReviews.length).toFixed(1));

  return {
    rating: product.rating || avg,
    count: product.reviewsCount || 42,
    reviews: fallbackReviews
  };
}


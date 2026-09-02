import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Sliders, 
  CheckCircle, 
  Plus, 
  Eye, 
  FileText, 
  Layers, 
  Tag, 
  ArrowRight, 
  Palette, 
  Building, 
  RefreshCw,
  ShoppingBag,
  Zap,
  Star,
  ShieldCheck,
  Package,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS_CATALOG, BRAND_INFO, getProductReviewsDetails } from '../data/giftingData';
import { ProductItem } from '../types';
import { BhetLogo } from './BhetLogo';

// Local generated image assets
import heroBoxImg from '../assets/images/bhet_hero_box_1788012398181.jpg';
import execKitImg from '../assets/images/bhet_exec_kit_1788012415857.jpg';
import festiveHamperImg from '../assets/images/bhet_festive_hamper_1788012431844.jpg';
import stationeryCatImg from '../assets/images/bhet_cat_stationery_1788013372210.jpg';

interface OnlineProductsStudioProps {
  onOpenQuoteModal: (productOrKitName?: string) => void;
  onScrollToSection: (sectionId: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToGiftPack?: (product: ProductItem) => void;
}

// Expanded online products catalog with AI and online categories
const ONLINE_EXTENDED_PRODUCTS: ProductItem[] = [
  ...PRODUCTS_CATALOG,
  {
    id: 'p-online-1',
    name: 'Imperial 3-in-1 Executive Desk Organiser with Wireless Fast Charger',
    category: 'event-gifts',
    categoryLabel: 'Executive Desk Gear',
    price: 649,
    description: 'Precision stitched leatherette desk caddy featuring an integrated 15W Qi wireless charging dock, pen well, card slot, and stationery tray.',
    features: ['15W Qi fast charging pad', 'Premium vegan leather', 'USB-C woven cable included', 'Non-slip velvet base'],
    customizationMethods: ['Laser Engraved Metal Plaque', 'Blind Embossing', 'Gold Foil Stamping'],
    colors: ['#1C1917', '#44403C', '#78350F'],
    minOrderQty: 25,
    popular: true,
    tag: 'Tech Executive',
    image: execKitImg
  },
  {
    id: 'p-online-2',
    name: 'AromaTherapy Artisan Brass Diya & Scented Soy Candle Gift Duo',
    category: 'hampers',
    categoryLabel: 'Corporate Gift Hampers',
    price: 499,
    description: 'Handcrafted solid brass festive diya paired with an organic lavender-oud scented soy wax candle in a custom gold-foiled rigid box.',
    features: ['Pure solid brass construction', 'Hand-poured smokeless soy wax', '45+ hours burn time', 'Embossed magnetic gift box'],
    customizationMethods: ['Custom Printed Box Lid', 'Engraved Wooden Lid', 'Greeting Card'],
    colors: ['#D4AF37', '#854D0E'],
    minOrderQty: 20,
    popular: true,
    tag: 'Festive Bestseller',
    image: festiveHamperImg
  },
  {
    id: 'p-online-3',
    name: 'BHET Signature Matte Black Luxury Keepsake Box with Golden Ribbon',
    category: 'hampers',
    categoryLabel: 'Custom Packaging',
    price: 199,
    description: 'Rigid 1200 GSM presentation box with hidden magnetic front snap closure, satin gold ribbon bow tie, and custom die-cut EVA foam bed.',
    features: ['1200 GSM thick rigid board', 'Soft-touch velvet exterior laminate', 'Gold hot-stamped branding', 'Custom foam cutouts'],
    customizationMethods: ['Gold/Silver Hot Foil Stamping', 'UV Spot Gloss', 'Custom Ribbon Print'],
    colors: ['#0A0A0A', '#1E293B', '#3B0764', '#14532D'],
    minOrderQty: 30,
    popular: true,
    tag: 'Premium Packaging',
    image: heroBoxImg
  },
  {
    id: 'p-online-4',
    name: 'Plantable Seed Paper Journal & Sprout Herb Pencil Kit',
    category: 'stationery',
    categoryLabel: 'Corporate Stationery',
    price: 159,
    description: 'Zero-waste eco journal made from 100% recycled cotton pulp embedded with wildflower seeds. Includes 4 sprout herb graphite pencils.',
    features: ['Plantable cover with marigold seeds', '80 pages unbleached sugarcane paper', 'Herb seed capsule pencils', 'Zero plastic'],
    customizationMethods: ['Organic Soy-Ink Screen Print', 'Custom Belly Band'],
    colors: ['#E7E5E4', '#D7ECD9', '#FEF08A'],
    minOrderQty: 50,
    tag: '100% Sustainable',
    image: stationeryCatImg
  }
];

export const OnlineProductsStudio: React.FC<OnlineProductsStudioProps> = ({
  onOpenQuoteModal,
  onScrollToSection,
  onSelectProduct,
  onAddToGiftPack,
}) => {
  // Generator State
  const [generatorPersona, setGeneratorPersona] = useState('New Joiner / Onboarding');
  const [generatorBudget, setGeneratorBudget] = useState(499);
  const [generatorFinish, setGeneratorFinish] = useState('Gold Foil & Laser Engraved');
  const [generatorOccasion, setGeneratorOccasion] = useState('Employee Joining & Swag');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'catalog' | 'ai-generator' | 'branding-lab'>('catalog');

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'moq'>('popular');

  // Live 3D Branding Simulator State
  const [mockupItem, setMockupItem] = useState<'box' | 'flask' | 'diary' | 'mug' | 'pen'>('box');
  const [mockupBrandText, setMockupBrandText] = useState('BHET');
  const [mockupTagline, setMockupTagline] = useState('CORPORATE GIFTING');
  const [mockupFinishColor, setMockupFinishColor] = useState<'gold' | 'silver' | 'white' | 'deboss'>('gold');
  const [employeeName, setEmployeeName] = useState('Alex Morgan');

  // Compute AI Generated Recommendation based on criteria
  const generatedRecommendation = useMemo(() => {
    let title = 'BHET Signature Welcome Suite';
    let basePrice = generatorBudget;
    let items = ['Executive Vegan Leather Diary', 'Precision Laser Metal Pen', 'Double Wall Thermal Flask (500ml)'];
    let box = 'Matte Black Rigid Magnetic Box with Gold Ribbon';

    if (generatorBudget < 300) {
      title = 'BHET Essential Spark Kit';
      items = ['A5 Eco-Kraft Notebook', 'Stylus Metal Ballpoint Pen', 'Custom Message Card'];
      box = 'Kraft Sleeve Box with Custom Brand Seal';
    } else if (generatorBudget < 700) {
      title = `BHET ${generatorPersona.split('/')[0].trim()} Signature Suite`;
      items = ['Executive Hardbound PU Diary', 'Metropolis Laser Engraved Pen', 'AeroTherm Insulated Flask (500ml)', 'Ceramic Coffee Mug'];
      box = 'Luxury Rigid Magnetic Box with Gold Foil Branding';
    } else if (generatorBudget < 1200) {
      title = 'BHET Premier Executive Onboarding Hamper';
      items = ['Smart Temp LED Flask', 'Italian PU Leather Planner', 'Metropolis Gold Pen', 'Nordic Mug with Wood Lid', 'RFID Vegan Leather Cardholder', 'Gourmet Roasted Treats'];
      box = 'Handcrafted Rigid Keepsake Box with Satin Gold Ribbon Bow';
    } else {
      title = 'BHET Imperial CXO Prestige Crate';
      items = ['15W Wireless Charging Leather Desk Caddy', 'Smart Temp LED Thermal Flask', 'Gold Foil Hardcover Journal', 'Brass Artisan Pen', 'Aroma Candle in Solid Brass Jar', 'Belgian Truffles'];
      box = 'Custom Imperial Velvet-Lined Wooden Keepsake Crate with Gold Plaque';
    }

    return {
      title,
      items,
      box,
      unitPrice: basePrice,
      recommendedQty: 50,
      turnaround: '3-5 Business Days',
      mockupImg: generatorBudget > 800 ? festiveHamperImg : generatorBudget > 400 ? execKitImg : heroBoxImg
    };
  }, [generatorPersona, generatorBudget, generatorFinish, generatorOccasion]);

  // Handle AI Generate Click
  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 450);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return ONLINE_EXTENDED_PRODUCTS.filter((item) => {
      const matchesSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.customizationMethods.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCat;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'moq') return a.minOrderQty - b.minOrderQty;
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section id="online-products" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Online Product Catalog & AI Kit Generator</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100 tracking-tight">
            Explore Online Products & Live Studio
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-stone-300 font-normal">
            Generate custom AI corporate gift combinations, browse genuine inventory with live MOQ and pricing, or preview your brand logo in real-time.
          </p>

          {/* Navigation Mode Switcher */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-stone-950/80 border border-stone-800 shadow-md">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'catalog'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Online Catalog ({ONLINE_EXTENDED_PRODUCTS.length} Products)</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-generator')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'ai-generator'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-900" />
              <span>AI Kit Generator</span>
            </button>

            <button
              onClick={() => setActiveTab('branding-lab')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'branding-lab'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>3D Live Logo Studio</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ONLINE PRODUCTS CATALOG */}
        {activeTab === 'catalog' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Filter & Search Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative w-full lg:w-96">
                <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery || ''}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, materials, printing..."
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-stone-900 text-stone-100 placeholder-stone-500 border border-stone-700 focus:outline-hidden focus:border-amber-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-[10px] text-stone-400 hover:text-stone-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'stationery', label: 'Stationery' },
                  { id: 'pens', label: 'Pens' },
                  { id: 'bottles', label: 'Bottles' },
                  { id: 'mugs', label: 'Mugs' },
                  { id: 'welcome-kits', label: 'Welcome Kits' },
                  { id: 'hampers', label: 'Hampers' },
                  { id: 'event-gifts', label: 'Tech & Events' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                      selectedCategory === cat.id
                        ? 'bg-stone-800 text-amber-300 border-amber-500/50'
                        : 'bg-stone-900/80 text-stone-400 border-stone-800 hover:text-stone-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-stone-500 whitespace-nowrap">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg text-xs bg-stone-900 border border-stone-700 text-stone-300 focus:outline-hidden focus:border-amber-400"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="moq">Lowest MOQ First</option>
                </select>
              </div>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-lg transition-all group cursor-pointer"
                  id={`online-prod-${product.id}`}
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Tag badge */}
                    {product.tag && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-stone-950/90 text-amber-300 text-[10px] font-bold border border-amber-500/30 backdrop-blur-xs">
                        {product.tag}
                      </span>
                    )}

                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-stone-950/90 text-stone-300 text-[10px] font-medium border border-stone-800 backdrop-blur-xs">
                      MOQ: {product.minOrderQty} pcs
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {(() => {
                        const revInfo = getProductReviewsDetails(product);
                        return (
                          <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold mb-1">
                            <span>{product.categoryLabel}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-stone-300 font-bold">{revInfo.rating} ({revInfo.count})</span>
                            </div>
                          </div>
                        );
                      })()}

                      <h3 className="font-serif text-sm font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Customization Badges */}
                    <div className="pt-2 border-t border-stone-800/80 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {product.customizationMethods.slice(0, 2).map((m, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900 text-stone-300 border border-stone-800"
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center justify-between pt-1 gap-2">
                        <div>
                          <span className="text-[10px] text-stone-500 block">Unit Rate</span>
                          <span className="font-serif text-base font-black text-amber-200">
                            ₹{product.price}
                            <span className="text-[10px] text-stone-400 font-normal ml-0.5">/unit</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {onAddToGiftPack && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddToGiftPack(product);
                              }}
                              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-800 transition-colors cursor-pointer"
                              title="Add directly to Gift Pack"
                            >
                              <Package className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenQuoteModal(product.name);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-1 transition-colors shadow-2xs cursor-pointer"
                          >
                            <span>Quote</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quick CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="font-serif text-lg font-bold text-stone-100">
                  Can't find the exact product you're looking for?
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  We source over 500+ customized corporate products and luxury imported merchandise on request.
                </p>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Custom Sourced Corporate Gift Request')}
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs shrink-0 transition-colors shadow-md"
              >
                Request Custom Sourcing
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: AI CORPORATE GIFT GENERATOR */}
        {activeTab === 'ai-generator' && (
          <div className="bg-stone-950 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: AI Parameters */}
              <div className="lg:col-span-5 space-y-6">
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Instant Custom Kit Algorithm</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Smart Gift Combination Engine
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Select your corporate parameters and our engine will compose a balanced kit matching budget, tier, and presentation.
                  </p>
                </div>

                {/* Persona */}
                <div>
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-2">
                    Target Recipient Persona
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'New Joiner / Onboarding',
                      'Executive & CXO',
                      'Festive Employee Gift',
                      'Conference & Event Delegate',
                      'Key Corporate Client',
                      'Sales Performer Award'
                    ].map((persona) => (
                      <button
                        key={persona}
                        onClick={() => setGeneratorPersona(persona)}
                        className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                          generatorPersona === persona
                            ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-xs font-bold'
                            : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {persona}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-stone-300 uppercase tracking-wider">
                      Budget Per Gift Kit
                    </span>
                    <span className="font-serif text-lg font-black text-amber-300">
                      ₹{generatorBudget}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="199"
                    max="2499"
                    step="50"
                    value={generatorBudget}
                    onChange={(e) => setGeneratorBudget(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>₹199 (Essential)</span>
                    <span>₹799 (Popular)</span>
                    <span>₹2499 (Luxury CXO)</span>
                  </div>
                </div>

                {/* Occasion & Finish */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                      Occasion
                    </label>
                    <select
                      value={generatorOccasion}
                      onChange={(e) => setGeneratorOccasion(e.target.value)}
                      className="w-full p-2 text-xs rounded-xl bg-stone-900 border border-stone-800 text-stone-200 focus:outline-hidden focus:border-amber-400"
                    >
                      <option>Employee Joining & Swag</option>
                      <option>Diwali & New Year Festival</option>
                      <option>Corporate Annual Day</option>
                      <option>Client Appreciation</option>
                      <option>Summit / Tech Expo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                      Branding Style
                    </label>
                    <select
                      value={generatorFinish}
                      onChange={(e) => setGeneratorFinish(e.target.value)}
                      className="w-full p-2 text-xs rounded-xl bg-stone-900 border border-stone-800 text-stone-200 focus:outline-hidden focus:border-amber-400"
                    >
                      <option>Gold Foil & Laser Engraved</option>
                      <option>Laser Mirror Silver</option>
                      <option>Minimalist Blind Deboss</option>
                      <option>Full Color UV Brand Palette</option>
                    </select>
                  </div>
                </div>

                {/* Regenerate Trigger */}
                <button
                  onClick={handleRegenerate}
                  className="w-full py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>Recalculate AI Recommendation</span>
                </button>

              </div>

              {/* Right Column: Generated Solution Card */}
              <div className="lg:col-span-7 bg-stone-900/90 rounded-3xl p-6 sm:p-8 border border-amber-500/40 relative overflow-hidden flex flex-col justify-between space-y-6">
                
                {/* Top Generated Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2">
                    <BhetLogo size="sm" variant="gold" showTagline={false} />
                    <span className="text-xs font-mono font-bold text-amber-400">
                      GENERATED SPECIFICATION
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-stone-950 text-amber-300 border border-stone-800 font-medium">
                    Turnaround: {generatedRecommendation.turnaround}
                  </span>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Visual Render Preview */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-stone-950 border border-stone-800 relative group">
                    <img
                      src={generatedRecommendation.mockupImg}
                      alt={generatedRecommendation.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-3">
                      <div className="text-[10px] text-amber-200 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                        <span>Photorealistic 3D Simulation</span>
                      </div>
                    </div>
                  </div>

                  {/* Itemized Specification */}
                  <div className="sm:col-span-7 space-y-3">
                    <h4 className="font-serif text-xl font-bold text-white">
                      {generatedRecommendation.title}
                    </h4>

                    <div className="text-xs text-stone-300 space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        Included Products in this Kit:
                      </span>
                      {generatedRecommendation.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="text-stone-200 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-xs text-stone-400">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                        Packaging & Presentation:
                      </span>
                      <div className="text-stone-300 font-medium mt-0.5">
                        {generatedRecommendation.box}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Pricing & Order Actions */}
                <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">
                      Estimated Cost (MOQ {generatedRecommendation.recommendedQty} units)
                    </span>
                    <div className="font-serif text-2xl font-black text-amber-300">
                      ₹{generatedRecommendation.unitPrice}
                      <span className="text-xs font-normal text-stone-400 ml-1">/ kit (+ GST)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenQuoteModal(generatedRecommendation.title)}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Request Proposal for this Kit</span>
                    </button>
                    <button
                      onClick={() => onScrollToSection('kit-builder')}
                      className="px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
                    >
                      Customize Further
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 3: 3D LIVE LOGO & BRANDING STUDIO */}
        {activeTab === 'branding-lab' && (
          <div className="bg-stone-950 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Palette className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real-Time Brand Application</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Live 3D Customization Simulator
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    See the official BHET gold emblem or test your company logo on premium matte finishes with metallic laser reflections.
                  </p>
                </div>

                {/* Product Canvas Selector */}
                <div>
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-2">
                    Select Product Canvas:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'box', label: 'Rigid Gift Box' },
                      { id: 'diary', label: 'Leather Diary' },
                      { id: 'flask', label: 'Insulated Flask' },
                      { id: 'mug', label: 'Ceramic Mug' },
                      { id: 'pen', label: 'Metal Pen' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setMockupItem(item.id as any)}
                        className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                          mockupItem === item.id
                            ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-xs'
                            : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Text Input */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1">
                      Company / Brand Name:
                    </label>
                    <input
                      type="text"
                      value={mockupBrandText || ''}
                      onChange={(e) => setMockupBrandText(e.target.value)}
                      placeholder="e.g. ACME CORP"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-stone-900 border border-stone-700 text-white font-serif font-bold uppercase tracking-wider focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1">
                      Subtext / Tagline:
                    </label>
                    <input
                      type="text"
                      value={mockupTagline || ''}
                      onChange={(e) => setMockupTagline(e.target.value)}
                      placeholder="e.g. CORPORATE GIFTING"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-stone-900 border border-stone-700 text-stone-300 text-xs font-mono uppercase tracking-widest focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1">
                      Individual Employee Name (Variable Engraving):
                    </label>
                    <input
                      type="text"
                      value={employeeName || ''}
                      onChange={(e) => setEmployeeName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-stone-900 border border-stone-700 text-amber-200 text-xs font-medium focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Finish Options */}
                <div>
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-2">
                    Customization Finish / Foil:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'gold', label: '✨ 24K Gold Hot Foil', color: 'border-amber-400 text-amber-300' },
                      { id: 'silver', label: '🪞 Mirror Laser Silver', color: 'border-slate-300 text-slate-200' },
                      { id: 'white', label: '⚪ Crisp White Silk Screen', color: 'border-stone-400 text-white' },
                      { id: 'deboss', label: '⬛ Deep Blind Deboss', color: 'border-stone-700 text-stone-400' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setMockupFinishColor(f.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          mockupFinishColor === f.id
                            ? `bg-stone-800 ${f.color} shadow-xs font-bold`
                            : 'bg-stone-900 text-stone-500 border-stone-800'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Live Simulated 3D Canvas */}
              <div className="lg:col-span-7 bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-800 relative flex flex-col items-center justify-center min-h-[440px]">
                
                {/* 3D Mockup Container with dynamic styling based on product type */}
                <div className="relative w-full max-w-md aspect-square rounded-3xl bg-radial from-stone-800 via-stone-950 to-black p-8 border border-stone-700/60 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden">
                  
                  {/* Subtle Lighting Reflection Effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-3xl" />
                  
                  {/* Product Surface Representation */}
                  {mockupItem === 'box' && (
                    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-stone-900 to-black border-2 border-stone-800 shadow-2xl relative flex flex-col items-center justify-center p-6">
                      
                      {/* Golden Satin Ribbon Cross */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 shadow-md opacity-90" />
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-amber-600 via-amber-400 to-amber-700 shadow-md opacity-90" />
                      
                      {/* Center Medallion / Embossed Plaque */}
                      <div className="relative z-10 p-5 rounded-2xl bg-stone-950/95 border border-amber-500/60 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center">
                        <BhetLogo size="sm" variant={mockupFinishColor === 'silver' ? 'light' : 'gold'} showTagline={false} />
                        <span className={`font-serif text-lg font-black tracking-widest mt-2 uppercase ${
                          mockupFinishColor === 'silver' ? 'text-slate-200' : 'text-amber-300'
                        }`}>
                          {mockupBrandText || 'BHET'}
                        </span>
                        <span className="text-[8px] font-mono tracking-[0.25em] text-stone-400 mt-0.5">
                          {mockupTagline || 'CORPORATE GIFTING'}
                        </span>
                      </div>
                    </div>
                  )}

                  {mockupItem === 'flask' && (
                    <div className="w-28 h-72 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-950 border border-stone-700 shadow-2xl relative flex flex-col items-center justify-between py-6">
                      {/* Cap */}
                      <div className="w-16 h-8 rounded-t-xl bg-gradient-to-r from-stone-800 to-stone-950 border border-stone-700 -mt-3 shadow-md" />
                      
                      {/* Laser Engraved Logo on Flask */}
                      <div className="space-y-1 my-auto">
                        <BhetLogo size="sm" variant={mockupFinishColor === 'silver' ? 'light' : 'gold'} showTagline={false} />
                        <div className={`font-serif text-sm font-bold tracking-wider uppercase ${
                          mockupFinishColor === 'silver' ? 'text-slate-100' : 'text-amber-300'
                        }`}>
                          {mockupBrandText || 'BHET'}
                        </div>
                        {employeeName && (
                          <div className="text-[10px] font-sans font-medium text-amber-200/90 pt-3 border-t border-stone-700/60">
                            {employeeName}
                          </div>
                        )}
                      </div>

                      {/* Bottom Rim */}
                      <div className="w-24 h-2 rounded-b-xl bg-stone-700" />
                    </div>
                  )}

                  {mockupItem === 'diary' && (
                    <div className="w-52 h-72 rounded-r-2xl rounded-l-md bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-r-4 border-amber-600/40 shadow-2xl p-6 relative flex flex-col justify-between">
                      {/* Elastic Pen Loop */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-12 bg-amber-600 rounded-l-md" />
                      
                      {/* Bookmark ribbon */}
                      <div className="absolute top-0 right-8 w-2 h-16 bg-amber-400 shadow-sm" />

                      <div className="mt-8 flex flex-col items-center">
                        <BhetLogo size="md" variant={mockupFinishColor === 'silver' ? 'light' : 'gold'} showTagline={false} />
                        <span className={`font-serif text-base font-black tracking-widest mt-2 uppercase ${
                          mockupFinishColor === 'silver' ? 'text-slate-200' : 'text-amber-300'
                        }`}>
                          {mockupBrandText || 'BHET'}
                        </span>
                        <span className="text-[8px] font-mono tracking-[0.2em] text-stone-400 mt-1">
                          {mockupTagline || 'CORPORATE GIFTING'}
                        </span>
                      </div>

                      {employeeName && (
                        <div className="text-right text-[10px] font-medium text-amber-300/80 font-serif italic">
                          Personalized for: {employeeName}
                        </div>
                      )}
                    </div>
                  )}

                  {mockupItem === 'mug' && (
                    <div className="w-48 h-56 rounded-b-3xl rounded-t-lg bg-stone-900 border border-stone-700 shadow-2xl relative flex flex-col items-center justify-center p-4">
                      {/* Wooden Lid */}
                      <div className="w-52 h-5 rounded-md bg-amber-800/80 border border-amber-700 -mt-6 mb-4 shadow-xs" />
                      
                      {/* Mug Handle */}
                      <div className="absolute -right-6 top-12 w-8 h-28 rounded-r-2xl border-4 border-stone-800 border-l-0" />

                      <div className="flex flex-col items-center my-auto">
                        <BhetLogo size="sm" variant={mockupFinishColor === 'silver' ? 'light' : 'gold'} showTagline={false} />
                        <span className={`font-serif text-sm font-bold tracking-wider mt-1 uppercase ${
                          mockupFinishColor === 'silver' ? 'text-slate-200' : 'text-amber-300'
                        }`}>
                          {mockupBrandText || 'BHET'}
                        </span>
                      </div>
                    </div>
                  )}

                  {mockupItem === 'pen' && (
                    <div className="w-72 h-10 rounded-full bg-gradient-to-r from-stone-950 via-stone-800 to-stone-950 border border-stone-700 shadow-2xl flex items-center justify-between px-4 relative">
                      {/* Clip */}
                      <div className="w-16 h-2 bg-amber-400 rounded-full shadow-xs" />
                      <div className="text-[10px] font-serif font-bold text-amber-300 tracking-wider">
                        {mockupBrandText} • {employeeName}
                      </div>
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                    </div>
                  )}

                </div>

                {/* Action Bar */}
                <div className="mt-6 flex flex-wrap items-center justify-between w-full gap-3 pt-4 border-t border-stone-800">
                  <span className="text-xs text-stone-400">
                    Resolution: <span className="text-amber-300 font-mono">Vector High Precision (300 DPI)</span>
                  </span>
                  <button
                    onClick={() => onOpenQuoteModal(`Custom 3D Branded ${mockupItem.toUpperCase()} with ${mockupBrandText}`)}
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <span>Request Digital Proof & Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

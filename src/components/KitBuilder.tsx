import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  Check, 
  Package, 
  BookOpen, 
  PenTool, 
  Droplets, 
  Coffee, 
  Key, 
  Laptop, 
  MessageSquare,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Building,
  Type,
  Truck,
  Clock,
  Plus,
  Trash2,
  Search,
  X
} from 'lucide-react';
import { KIT_BUILDER_ITEMS, PRODUCTS_CATALOG } from '../data/giftingData';
import { KitBuilderItem, QuoteDraft, ProductItem } from '../types';

interface KitBuilderProps {
  onOpenCustomQuote: (draft: Partial<QuoteDraft>) => void;
  addedProducts?: ProductItem[];
  onRemoveAddedProduct?: (productId: string) => void;
  onAddProductToKit?: (product: ProductItem) => void;
}

export const KitBuilder: React.FC<KitBuilderProps> = ({ 
  onOpenCustomQuote,
  addedProducts = [],
  onRemoveAddedProduct,
  onAddProductToKit
}) => {
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [catalogSearch, setCatalogSearch] = useState('');
  const [catalogCategory, setCatalogCategory] = useState('all');
  // Selected items configuration state
  const [selectedItems, setSelectedItems] = useState<{
    [itemId: string]: {
      enabled: boolean;
      selectedOptionIndex: number;
      selectedColor: string;
    };
  }>({
    'kb-notebook': { enabled: true, selectedOptionIndex: 1, selectedColor: '#1E293B' },
    'kb-pen': { enabled: true, selectedOptionIndex: 1, selectedColor: '#0F172A' },
    'kb-bottle': { enabled: true, selectedOptionIndex: 1, selectedColor: '#111827' },
    'kb-mug': { enabled: false, selectedOptionIndex: 0, selectedColor: '#1F2937' },
    'kb-keychain': { enabled: true, selectedOptionIndex: 0, selectedColor: '#92400E' },
    'kb-desk': { enabled: false, selectedOptionIndex: 0, selectedColor: '#4B5563' },
    'kb-box': { enabled: true, selectedOptionIndex: 1, selectedColor: '#09090B' },
    'kb-message': { enabled: true, selectedOptionIndex: 0, selectedColor: '#FFFBEB' },
  });

  // Customization preferences
  const [customizationOptions, setCustomizationOptions] = useState<string[]>([
    'Company Logo Printing',
    'Laser Engraving',
    'Custom Box Sleeves & Packaging',
  ]);

  // Brand preview state
  const [companyBrandName, setCompanyBrandName] = useState<string>('TECHNOVA CORP');
  const [corporateTagline, setCorporateTagline] = useState<string>('Innovate • Create • Elevate');
  const [targetQuantity, setTargetQuantity] = useState<number>(50);

  const getItemIcon = (cat: string) => {
    switch (cat) {
      case 'stationery': return <BookOpen className="w-4 h-4" />;
      case 'pen': return <PenTool className="w-4 h-4" />;
      case 'bottle': return <Droplets className="w-4 h-4" />;
      case 'mug': return <Coffee className="w-4 h-4" />;
      case 'keychain': return <Key className="w-4 h-4" />;
      case 'desk': return <Laptop className="w-4 h-4" />;
      case 'box': return <Package className="w-4 h-4" />;
      case 'message': return <MessageSquare className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        enabled: !prev[itemId]?.enabled,
      },
    }));
  };

  const setOptionIndex = (itemId: string, optionIdx: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        selectedOptionIndex: optionIdx,
      },
    }));
  };

  const setColor = (itemId: string, colorHex: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        selectedColor: colorHex,
      },
    }));
  };

  const toggleCustomization = (optionTitle: string) => {
    setCustomizationOptions((prev) =>
      prev.includes(optionTitle)
        ? prev.filter((item) => item !== optionTitle)
        : [...prev, optionTitle]
    );
  };

  // Compute live price tally
  const { unitPrice, totalWeight, activeItemsCount, activeItemsList } = useMemo(() => {
    let total = 0;
    let weight = 0;
    let count = 0;
    const list: Array<{ item: KitBuilderItem; option: any; color: string }> = [];

    KIT_BUILDER_ITEMS.forEach((item) => {
      const state = selectedItems[item.id];
      if (state?.enabled) {
        const option = item.options[state.selectedOptionIndex] || item.options[0];
        const itemPrice = item.price + (option?.priceDelta || 0);
        total += itemPrice;
        weight += item.weightGrams;
        count += 1;
        list.push({ item, option, color: state.selectedColor });
      }
    });

    if (addedProducts && addedProducts.length > 0) {
      addedProducts.forEach((prod) => {
        const state = selectedItems[prod.id] || { enabled: true, selectedColor: prod.colors?.[0] || '#111827' };
        if (state.enabled) {
          const itemPrice = prod.price;
          total += itemPrice;
          weight += 300;
          count += 1;
          list.push({
            item: {
              id: prod.id,
              name: prod.name,
              category: prod.category as any,
              price: prod.price,
              weightGrams: 300,
              options: [{ name: prod.categoryLabel || 'Standard Edition', priceDelta: 0, description: prod.description }],
              colors: (prod.colors || ['#111827']).map(hex => ({ name: hex, hex })),
              description: prod.description,
              iconName: 'Package'
            },
            option: { name: prod.categoryLabel || 'Standard Edition', priceDelta: 0, description: prod.description },
            color: state.selectedColor || (prod.colors && prod.colors[0]) || '#111827'
          });
        }
      });
    }

    return {
      unitPrice: total,
      totalWeight: weight,
      activeItemsCount: count,
      activeItemsList: list,
    };
  }, [selectedItems, addedProducts]);

  const handleCreateCustomQuote = () => {
    const formattedItems = activeItemsList.map((entry) => ({
      itemId: entry.item.id,
      itemName: entry.item.name,
      optionName: entry.option.name,
      color: entry.color,
      unitPrice: entry.item.price + (entry.option.priceDelta || 0),
    }));

    const deliveryTimeline = targetQuantity <= 100 ? '3–5 Business Days' : targetQuantity <= 500 ? '5–7 Business Days' : '7–10 Business Days';

    onOpenCustomQuote({
      companyName: companyBrandName,
      corporateMessage: corporateTagline,
      quantity: targetQuantity,
      customKitItems: formattedItems,
      brandingType: customizationOptions,
      brandText: companyBrandName,
      targetBudgetPerKit: unitPrice,
      targetDeliveryDate: deliveryTimeline,
    });
  };

  const resetToDefault = () => {
    setSelectedItems({
      'kb-notebook': { enabled: true, selectedOptionIndex: 1, selectedColor: '#1E293B' },
      'kb-pen': { enabled: true, selectedOptionIndex: 1, selectedColor: '#0F172A' },
      'kb-bottle': { enabled: true, selectedOptionIndex: 1, selectedColor: '#111827' },
      'kb-mug': { enabled: false, selectedOptionIndex: 0, selectedColor: '#1F2937' },
      'kb-keychain': { enabled: true, selectedOptionIndex: 0, selectedColor: '#92400E' },
      'kb-desk': { enabled: false, selectedOptionIndex: 0, selectedColor: '#4B5563' },
      'kb-box': { enabled: true, selectedOptionIndex: 1, selectedColor: '#09090B' },
      'kb-message': { enabled: true, selectedOptionIndex: 0, selectedColor: '#FFFBEB' },
    });
  };

  return (
    <section id="kit-builder" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-300">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-900" />
            <span>Interactive Custom Configuration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Build Your Own Gift Kit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal">
            Create a corporate gift set according to your budget, occasion and brand identity. Mix and match items that represent your company with real-time price estimation.
          </p>
        </div>

        {/* Builder Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selection & Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Item Checklist */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                    <span>1. Select Included Products</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Toggle items on/off and choose preferred finishes & colors.
                  </p>
                </div>
                <button
                  onClick={resetToDefault}
                  className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Mix</span>
                </button>
              </div>

              {/* Add Product from Catalog Button */}
              <div className="pb-2">
                <button
                  onClick={() => setIsCatalogModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-amber-400 hover:border-amber-600 bg-amber-50/60 hover:bg-amber-50 text-amber-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                >
                  <Plus className="w-4 h-4 text-amber-700" />
                  <span>+ Choose Any Product from Full Catalog ({PRODUCTS_CATALOG.length} Available)</span>
                </button>
              </div>

              {/* Added Products from Catalog */}
              {addedProducts && addedProducts.length > 0 && (
                <div className="space-y-3 pb-2 border-b border-stone-200">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                    Custom Products Added from Catalog ({addedProducts.length})
                  </span>
                  {addedProducts.map((prod) => {
                    const state = selectedItems[prod.id] || { enabled: true, selectedColor: prod.colors?.[0] || '#111827' };
                    return (
                      <div
                        key={`added-${prod.id}`}
                        className="p-4 rounded-xl border bg-amber-50/70 border-amber-400 shadow-2xs ring-1 ring-amber-300/40 transition-all"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <label className="flex items-center gap-3 cursor-pointer select-none flex-1">
                            <input
                              type="checkbox"
                              checked={state.enabled}
                              onChange={() => toggleItem(prod.id)}
                              className="w-5 h-5 rounded-md text-amber-700 border-stone-300 focus:ring-amber-500 accent-amber-700"
                            />
                            <div className="flex items-center gap-2.5">
                              <span className="w-9 h-9 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                                <img src={prod.image} alt={prod.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                              </span>
                              <div>
                                <span className="text-xs font-bold text-stone-900 block line-clamp-1">{prod.name}</span>
                                <span className="text-[10px] text-amber-800 font-semibold">{prod.categoryLabel}</span>
                              </div>
                            </div>
                          </label>

                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="font-serif text-sm font-bold text-stone-900">₹{prod.price}</span>
                              <span className="text-[10px] text-stone-500 block">/ unit</span>
                            </div>
                            {onRemoveAddedProduct && (
                              <button
                                onClick={() => onRemoveAddedProduct(prod.id)}
                                className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                title="Remove from kit"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Color Selector */}
                        {state.enabled && prod.colors && prod.colors.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-stone-700">Finish Color:</span>
                            <div className="flex items-center gap-2">
                              {prod.colors.map((hex, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setColor(prod.id, hex)}
                                  style={{ backgroundColor: hex }}
                                  className={`w-5 h-5 rounded-full border-2 transition-transform ${
                                    state.selectedColor === hex ? 'scale-125 border-amber-600 shadow-sm' : 'border-stone-300'
                                  }`}
                                  title={hex}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Items List */}
              <div className="space-y-4">
                {KIT_BUILDER_ITEMS.map((item) => {
                  const state = selectedItems[item.id] || { enabled: false, selectedOptionIndex: 0, selectedColor: item.colors[0].hex };
                  const activeOption = item.options[state.selectedOptionIndex] || item.options[0];
                  const currentItemPrice = item.price + (activeOption?.priceDelta || 0);

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border transition-all ${
                        state.enabled
                          ? 'bg-amber-50/30 border-amber-300/80 shadow-2xs ring-1 ring-amber-300/40'
                          : 'bg-stone-50 border-stone-200 opacity-80 hover:opacity-100'
                      }`}
                      id={`builder-item-${item.id}`}
                    >
                      {/* Item Header / Toggle */}
                      <div className="flex items-center justify-between gap-3">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={state.enabled}
                            onChange={() => toggleItem(item.id)}
                            className="w-5 h-5 rounded-md text-amber-700 border-stone-300 focus:ring-amber-500 accent-amber-700"
                          />
                          <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-md bg-stone-100 text-stone-800">
                              {getItemIcon(item.category)}
                            </span>
                            <span className={`text-sm font-bold ${state.enabled ? 'text-stone-900' : 'text-stone-600'}`}>
                              {item.name}
                            </span>
                          </div>
                        </label>

                        <div className="text-right">
                          <span className="font-serif text-sm font-bold text-stone-900">
                            {state.enabled ? `₹${currentItemPrice}` : `from ₹${item.price}`}
                          </span>
                          <span className="text-[10px] text-stone-500 block">/ unit</span>
                        </div>
                      </div>

                      {/* Options & Color Selection (visible when enabled) */}
                      {state.enabled && (
                        <div className="mt-3 pt-3 border-t border-amber-200/60 space-y-3">
                          {/* Variant dropdown / buttons */}
                          <div>
                            <span className="text-[11px] font-semibold text-stone-700 block mb-1.5">
                              Model / Style:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {item.options.map((opt, optIdx) => (
                                <button
                                  key={optIdx}
                                  onClick={() => setOptionIndex(item.id, optIdx)}
                                  className={`p-2 rounded-lg text-left text-xs transition-all border ${
                                    state.selectedOptionIndex === optIdx
                                      ? 'bg-amber-100/80 border-amber-400 font-semibold text-amber-950 shadow-2xs'
                                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="truncate">{opt.name}</span>
                                    {opt.priceDelta !== 0 && (
                                      <span className="text-[10px] font-bold text-amber-800 shrink-0 ml-1">
                                        {opt.priceDelta > 0 ? `+₹${opt.priceDelta}` : `-₹${Math.abs(opt.priceDelta)}`}
                                      </span>
                                    )}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Color Swatches */}
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-semibold text-stone-700">
                              Color Finish:
                            </span>
                            <div className="flex items-center gap-1.5">
                              {item.colors.map((c, cIdx) => (
                                <button
                                  key={cIdx}
                                  onClick={() => setColor(item.id, c.hex)}
                                  title={c.name}
                                  className={`w-6 h-6 rounded-full border transition-transform ${
                                    state.selectedColor === c.hex
                                      ? 'scale-115 ring-2 ring-amber-600 ring-offset-1 border-stone-900'
                                      : 'border-stone-300 hover:scale-105'
                                  }`}
                                  style={{ backgroundColor: c.hex }}
                                />
                              ))}
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Step 2: Customization & Brand Personalization */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                  <span>2. Customization & Branding Options</span>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Select which personalization techniques you want applied.
                </p>
              </div>

              {/* Customization checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Company Logo Printing',
                  'Laser Engraving',
                  'Employee Name Personalization',
                  'Custom Gift Boxes',
                  'Custom Sleeves & Packaging',
                  'Brand-Color Packaging',
                  'Corporate Messages & Inserts',
                ].map((customOption) => {
                  const isChecked = customizationOptions.includes(customOption);
                  return (
                    <button
                      key={customOption}
                      onClick={() => toggleCustomization(customOption)}
                      className={`p-3 rounded-xl text-left text-xs font-medium border flex items-center gap-2.5 transition-all ${
                        isChecked
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-amber-400 text-stone-950 font-bold' : 'border border-stone-400'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className="truncate">{customOption}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Mockup Text Inputs */}
              <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5 mb-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-700" />
                    <span>Company Name for Mockup Preview:</span>
                  </label>
                  <input
                    type="text"
                    value={companyBrandName || ''}
                    onChange={(e) => setCompanyBrandName(e.target.value)}
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5 mb-1.5">
                    <Type className="w-3.5 h-3.5 text-amber-700" />
                    <span>Corporate Slogan / Message:</span>
                  </label>
                  <input
                    type="text"
                    value={corporateTagline || ''}
                    onChange={(e) => setCorporateTagline(e.target.value)}
                    placeholder="e.g. Innovate • Create • Elevate"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Mockup Simulation & Price Breakdown (Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Live Kit Visualizer Box */}
            <div className="bg-stone-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-stone-800 space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Live Custom Kit Preview
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700">
                  {activeItemsCount} Items Selected
                </span>
              </div>

              {/* 2D/3D Simulated Box Container */}
              <div className="rounded-2xl bg-gradient-to-b from-stone-800 to-stone-950 border border-stone-700 p-5 relative overflow-hidden shadow-inner min-h-[220px] flex flex-col justify-between">
                
                {/* Branding Mockup Reveal on the Lid */}
                <div className="text-center py-2 px-3 rounded-lg bg-stone-900/90 border border-amber-500/30 backdrop-blur-xs mb-3">
                  <div className="font-serif text-sm sm:text-base font-extrabold text-amber-300 tracking-wider uppercase truncate">
                    {companyBrandName || 'YOUR LOGO HERE'}
                  </div>
                  <div className="text-[10px] text-stone-400 tracking-wider truncate">
                    {corporateTagline || 'Thoughtfully Given. Professionally Remembered.'}
                  </div>
                </div>

                {/* Items Grid Visualization Inside Box */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2">
                  {activeItemsList.map((entry, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-stone-900/80 border border-stone-700/60 flex items-center gap-2 text-xs shadow-2xs"
                    >
                      <div
                        className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                        style={{ backgroundColor: entry.color }}
                      />
                      <div className="truncate">
                        <div className="font-semibold text-[11px] text-stone-200 truncate">
                          {entry.item.name.split('/')[0]}
                        </div>
                        <div className="text-[9px] text-stone-400 truncate">
                          {entry.option.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Packaging Label */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-stone-400 border-t border-stone-800">
                  <span>Approx Weight: ~{(totalWeight / 1000).toFixed(2)} kg</span>
                  <span>Full Color Digital Proof Included</span>
                </div>
              </div>

              {/* Price Calculation & Headcount */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-stone-400 font-medium">Estimated Kit Price:</span>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-black text-amber-400">₹{unitPrice}</span>
                      <span className="text-[10px] text-stone-400 block">/ custom kit</span>
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-300 font-medium">Order Headcount:</span>
                    <input
                      type="number"
                      min="20"
                      max="10000"
                      step="10"
                      value={isNaN(targetQuantity) || targetQuantity === undefined ? '' : targetQuantity}
                      onChange={(e) => setTargetQuantity(e.target.value === '' ? 1 : Math.max(1, Number(e.target.value)))}
                      className="w-24 px-2 py-1 rounded bg-stone-900 border border-stone-700 text-right font-bold text-amber-400 text-xs focus:outline-hidden"
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs text-stone-400 pt-1 border-t border-stone-800">
                    <span>Estimated Total Project:</span>
                    <span className="font-bold text-white font-serif text-sm">
                      ₹{(unitPrice * targetQuantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Estimated Delivery Field */}
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-stone-200 block">Estimated Delivery</span>
                      <span className="text-[10px] text-stone-400">Pan-India Express Dispatch</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-amber-300 block">
                      {targetQuantity <= 100 ? '3–5 Business Days' : targetQuantity <= 500 ? '5–7 Business Days' : '7–10 Business Days'}
                    </span>
                    <span className="text-[9px] text-emerald-400 font-medium flex items-center justify-end gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      Direct Delivery
                    </span>
                  </div>
                </div>

                {/* Main Action Button */}
                <button
                  onClick={handleCreateCustomQuote}
                  disabled={activeItemsCount === 0}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    activeItemsCount > 0
                      ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 cursor-pointer'
                      : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  }`}
                  id="builder-btn-request-quote"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Mockup & Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Free Virtual 3D Proof • No Commitment</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Catalog Product Selector Modal */}
      {isCatalogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Choose Product from Catalog</h3>
                <p className="text-xs text-stone-500 mt-0.5">Select any item to add directly to your custom gift pack.</p>
              </div>
              <button
                onClick={() => setIsCatalogModalOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 bg-stone-100 border-b border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={catalogSearch || ''}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  placeholder="Search products by name, features..."
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white text-stone-900 border border-stone-300 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'stationery', label: 'Stationery' },
                  { id: 'pens', label: 'Pens' },
                  { id: 'bottles', label: 'Bottles' },
                  { id: 'mugs', label: 'Mugs' },
                  { id: 'hampers', label: 'Hampers' },
                  { id: 'event-gifts', label: 'Tech' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCatalogCategory(c.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      catalogCategory === c.id
                        ? 'bg-amber-700 text-white shadow-2xs'
                        : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS_CATALOG.filter((prod) => {
                const matchesSearch = catalogSearch === '' || 
                  prod.name.toLowerCase().includes(catalogSearch.toLowerCase()) ||
                  prod.description.toLowerCase().includes(catalogSearch.toLowerCase());
                const matchesCat = catalogCategory === 'all' || prod.category === catalogCategory;
                return matchesSearch && matchesCat;
              }).map((product) => {
                const isAlreadyAdded = addedProducts.some(p => p.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:border-amber-400 hover:bg-white transition-all flex flex-col justify-between space-y-3 shadow-2xs"
                  >
                    <div>
                      <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-200 mb-3 relative">
                        <img src={product.image} alt={product.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-stone-900/90 text-amber-300 text-[10px] font-bold">
                          {product.categoryLabel}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">{product.name}</h4>
                      <p className="text-xs text-stone-600 mt-1 line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                      <div>
                        <span className="text-[10px] text-stone-500 block">Price</span>
                        <span className="font-serif text-base font-black text-amber-900">₹{product.price}</span>
                      </div>

                      <button
                        onClick={() => {
                          if (onAddProductToKit) {
                            onAddProductToKit(product);
                          }
                          setIsCatalogModalOpen(false);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                          isAlreadyAdded
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-amber-600 hover:bg-amber-700 text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isAlreadyAdded ? 'Added (Add More)' : 'Add to Gift Pack'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
              <button
                onClick={() => setIsCatalogModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

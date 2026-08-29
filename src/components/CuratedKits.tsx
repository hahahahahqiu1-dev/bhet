import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Package, 
  Calculator, 
  SlidersHorizontal, 
  Star,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { CURATED_KITS } from '../data/giftingData';
import { CuratedKit } from '../types';
import customKitImg from '../assets/images/bhet_kitbuilder_banner_1788013355069.jpg';

interface CuratedKitsProps {
  onOpenQuoteModal: (kitId?: string) => void;
  onCustomizeKit: (kitId: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const CuratedKits: React.FC<CuratedKitsProps> = ({
  onOpenQuoteModal,
  onCustomizeKit,
  onScrollToSection,
}) => {
  const [selectedKitForCalc, setSelectedKitForCalc] = useState<CuratedKit>(CURATED_KITS[1]); // Classic
  const [quantity, setQuantity] = useState<number>(100);

  const getVolumeDiscount = (qty: number) => {
    if (qty >= 1000) return 0.22;
    if (qty >= 500) return 0.18;
    if (qty >= 250) return 0.14;
    if (qty >= 100) return 0.10;
    if (qty >= 50) return 0.05;
    return 0;
  };

  const discountRate = getVolumeDiscount(quantity);
  const basePrice = selectedKitForCalc.price;
  const discountedUnitRate = Math.round(basePrice * (1 - discountRate));
  const totalSubtotal = discountedUnitRate * quantity;
  const savings = (basePrice * quantity) - totalSubtotal;

  const kitSteps = [
    {
      num: 1,
      title: 'Select Your Products',
      desc: 'Choose from notebooks, pens, bottles, mugs, accessories & more.',
    },
    {
      num: 2,
      title: 'Add Your Branding',
      desc: 'Logo printing, engraving, custom colors & personalized packaging.',
    },
    {
      num: 3,
      title: 'Choose Packaging',
      desc: 'Premium gift boxes, custom sleeves, hampers & ribbon finishes.',
    },
    {
      num: 4,
      title: 'Delivery to Your Doorstep',
      desc: 'Pan-India delivery with fast turnaround & bulk discounts.',
    },
  ];

  return (
    <section id="curated-kits" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main "Build Your Custom Gift Kit" Feature Section (from mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left Column: 4 Steps */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Build Your Custom Gift Kit
              </h2>
              <div className="w-12 h-0.5 bg-[#A26E2C] mt-2.5 mb-3.5 rounded-full" />
              <p className="text-stone-600 text-sm sm:text-base font-normal">
                Create personalized gift sets tailored to your brand, budget, and occasion.
              </p>
            </div>

            {/* 4 Steps List */}
            <div className="space-y-4">
              {kitSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-amber-300 text-[#A26E2C] font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                onClick={() => onScrollToSection('kit-builder')}
                className="px-6 py-3 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs"
                id="curated-btn-start-building"
              >
                Start Building Your Kit
              </button>
            </div>
          </div>

          {/* Right Column: Custom Kit Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden border border-stone-200/90 shadow-lg bg-stone-900 w-full max-w-lg">
              <img
                src={customKitImg}
                alt="BHET Custom Gift Kit with Notebook, Pen, Bottle, Mug and Box"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[420px]"
              />
            </div>
          </div>

        </div>

        {/* Pre-Curated Collections Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Popular Pre-Curated Gift Kits
          </h3>
          <div className="w-12 h-0.5 bg-[#A26E2C] mx-auto mt-2.5 mb-3 rounded-full" />
          <p className="text-stone-600 text-sm font-normal">
            Ready-to-brand collections ready for immediate customization and dispatch.
          </p>
        </div>

        {/* 4 Signature Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {CURATED_KITS.map((kit) => {
            const isSelectedForCalc = selectedKitForCalc.id === kit.id;
            return (
              <div
                key={kit.id}
                className="rounded-xl flex flex-col justify-between transition-all duration-300 relative border border-stone-200/90 bg-[#FAF8F5] hover:border-amber-400 hover:shadow-md"
                id={`curated-kit-${kit.id}`}
              >
                {/* Badge */}
                {kit.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#A26E2C] text-white text-[10px] font-bold tracking-wide uppercase shadow-xs">
                    {kit.badge}
                  </div>
                )}

                {/* Top Section */}
                <div className="p-5">
                  
                  {/* Image */}
                  <div className="aspect-16/10 rounded-lg overflow-hidden mb-4 bg-stone-100">
                    <img
                      src={kit.image}
                      alt={kit.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif text-lg font-bold text-stone-900">
                        {kit.name}
                      </h4>
                      <div className="flex items-center gap-1 text-amber-800 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                        <span>{kit.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed min-h-[32px]">
                      {kit.tagline}
                    </p>

                    <div className="mt-2.5 pt-2.5 border-t border-stone-200/80 flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl font-black text-stone-900">
                        ₹{kit.price}
                      </span>
                      <span className="text-[11px] font-medium text-stone-500">
                        / kit (MOQ 25)
                      </span>
                    </div>
                  </div>

                  {/* Included Items List */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-bold text-stone-900 uppercase tracking-wider">
                      Includes:
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {kit.itemsIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A26E2C] shrink-0 mt-0.5" />
                          <span className="leading-snug text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => {
                      setSelectedKitForCalc(kit);
                      const calcElem = document.getElementById('bulk-calculator');
                      calcElem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                      isSelectedForCalc
                        ? 'bg-amber-100 text-amber-950 border-amber-300'
                        : 'bg-white hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#A26E2C]" />
                    <span>{isSelectedForCalc ? 'Selected in Estimator' : 'Estimate Bulk Pricing'}</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(kit.id)}
                    className="w-full py-2.5 px-3 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <span>Request Kit Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bulk Pricing Calculator */}
        <div id="bulk-calculator" className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left: Calculator Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Bulk Order Savings Calculator
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Select your kit and quantity to view real-time volume discounts and estimated delivery timeline.
                </p>
              </div>

              {/* Tier Selector Buttons */}
              <div>
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">
                  1. Choose Base Kit:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CURATED_KITS.map((k) => (
                    <button
                      key={k.id}
                      onClick={() => setSelectedKitForCalc(k)}
                      className={`p-2.5 rounded-lg text-left border transition-all text-xs ${
                        selectedKitForCalc.id === k.id
                          ? 'bg-[#A26E2C] text-white font-bold border-[#A26E2C] shadow-xs'
                          : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="truncate font-semibold">{k.name}</div>
                      <div className="text-[11px] opacity-80">₹{k.price}/kit</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    2. Order Quantity (Headcount):
                  </label>
                  <span className="font-serif text-base font-bold text-[#A26E2C] px-3 py-0.5 rounded-md bg-amber-50 border border-amber-200">
                    {quantity.toLocaleString()} Units
                  </span>
                </div>

                <input
                  type="range"
                  min="25"
                  max="2000"
                  step="25"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#A26E2C]"
                />

                {/* Preset Shortcut Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[25, 50, 100, 250, 500, 1000, 1500].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setQuantity(preset)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                        quantity === preset
                          ? 'bg-[#A26E2C] text-white font-bold'
                          : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {preset} units
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Perk Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A26E2C] shrink-0" />
                  <span>Free Company Logo Printing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A26E2C] shrink-0" />
                  <span>Complimentary Gift Sleeve</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A26E2C] shrink-0" />
                  <span>GST Tax Credit Invoicing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A26E2C] shrink-0" />
                  <span>Dedicated Account Manager</span>
                </div>
              </div>

            </div>

            {/* Right: Price Breakdown Card */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-7 border border-stone-200/90 shadow-sm space-y-5">
              
              <div>
                <div className="text-[11px] text-[#A26E2C] font-bold uppercase tracking-wider mb-1">
                  Estimated Summary for {selectedKitForCalc.name}
                </div>
                <div className="font-serif text-3xl font-black text-stone-900">
                  ₹{totalSubtotal.toLocaleString()}
                  <span className="text-xs text-stone-500 font-normal block mt-1">
                    (Approx ₹{discountedUnitRate}/unit + standard GST)
                  </span>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-2 text-xs text-stone-700 border-t border-b border-stone-100 py-3.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Standard Tier Rate:</span>
                  <span>₹{basePrice} × {quantity} = ₹{(basePrice * quantity).toLocaleString()}</span>
                </div>
                
                {discountRate > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Volume Discount ({(discountRate * 100).toFixed(0)}%):</span>
                    <span>- ₹{savings.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-stone-500">Estimated Turnaround:</span>
                  <span className="text-amber-900 font-semibold">{quantity > 500 ? '5-7 Business Days' : '3-5 Business Days'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-stone-500">Digital 3D Proof:</span>
                  <span className="text-emerald-700 font-semibold">FREE</span>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <button
                  onClick={() => onOpenQuoteModal(selectedKitForCalc.id)}
                  className="w-full py-3 px-4 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <span>Lock In Quote for {quantity} Units</span>
                </button>
                <p className="text-[11px] text-center text-stone-500">
                  No immediate payment required • Free virtual sample included
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


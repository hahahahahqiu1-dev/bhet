import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/giftingData';

interface OfferingsCatalogProps {
  onOpenQuoteModal: (kitOrProductId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const OfferingsCatalog: React.FC<OfferingsCatalogProps> = ({
  onOpenQuoteModal,
  onScrollToSection,
}) => {
  return (
    <section id="offerings" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            What We Offer
          </h2>
          <div className="w-12 h-0.5 bg-[#A26E2C] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* 7 Offerings Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onScrollToSection('curated-kits')}
              className={`bg-[#FAF8F5] rounded-xl overflow-hidden border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer ${
                idx >= 4 ? 'lg:col-span-1' : ''
              }`}
              id={`cat-card-${cat.id}`}
            >
              {/* Product Category Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={cat.heroImage}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-2">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onScrollToSection('curated-kits')}
            className="px-8 py-3 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs"
            id="offerings-btn-view-all"
          >
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};


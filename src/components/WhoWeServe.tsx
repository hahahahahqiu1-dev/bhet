import React, { useState } from 'react';
import { 
  Rocket, 
  Building, 
  Store, 
  Users, 
  Target, 
  GraduationCap, 
  UtensilsCrossed, 
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { WHO_WE_SERVE } from '../data/giftingData';
import { IndustryServe } from '../types';

interface WhoWeServeProps {
  onOpenQuoteModal: (industryTitle?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({
  onOpenQuoteModal,
  onScrollToSection,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryServe>(WHO_WE_SERVE[0]);

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="who-we-serve" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-200">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            <span>Targeted Industry & Team Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Who We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal">
            Whether welcoming your 5th engineer or rewarding 5,000 conference delegates, BHET provides tailored corporate gifting workflows.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {WHO_WE_SERVE.map((item) => {
            const isSelected = selectedIndustry.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndustry(item)}
                className={`p-5 rounded-2xl text-left transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-500/40'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-amber-300 hover:bg-stone-50 shadow-2xs'
                }`}
                id={`serve-card-${item.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isSelected ? 'bg-amber-500 text-stone-950' : 'bg-amber-50 text-amber-900'
                    }`}>
                      {getIndustryIcon(item.iconName)}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {item.avgBudget}
                    </span>
                  </div>

                  <h3 className={`font-serif text-base font-bold mb-1 ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    isSelected ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/40 flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                        isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Deep Dive Feature Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <span>Tailored Gifting Playbook for</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {selectedIndustry.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Recommended Kits in this category */}
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                  Popular Gift Kits & Combos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.popularKits.map((kitName, kIdx) => (
                    <span
                      key={kIdx}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-amber-700" />
                      <span>{kitName}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4 text-center">
              <div className="text-xs text-stone-500 font-medium">Standard Price Range</div>
              <div className="font-serif text-2xl font-extrabold text-stone-900">
                {selectedIndustry.avgBudget}
              </div>
              <p className="text-[11px] text-stone-600">
                Volume tier discounts applied automatically for enterprise batch orders.
              </p>
              
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => onOpenQuoteModal(selectedIndustry.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-amber-950 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Request Proposal for {selectedIndustry.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onScrollToSection('kit-builder')}
                  className="w-full py-2 px-4 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold transition-colors"
                >
                  Customize Specific Kit
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

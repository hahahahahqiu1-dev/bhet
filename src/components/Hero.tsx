import React, { useState } from 'react';
import { 
  Award, 
  PenTool, 
  Clock, 
  Sparkles, 
  SlidersHorizontal, 
  Package, 
  Truck, 
  Tag, 
  CheckCircle2, 
  Gift, 
  Layers, 
  Users2, 
  ChevronRight,
  ShieldCheck,
  Palette
} from 'lucide-react';
import { BRAND_INFO } from '../data/giftingData';
import heroShowcaseImg from '../assets/images/bhet_hero_showcase_1788013312887.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenSampleModal,
  onScrollToSection,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const valueProps = [
    {
      icon: Award,
      title: 'Quality Products',
      subtitle: 'Practical & presentable',
    },
    {
      icon: PenTool,
      title: 'Full Customization',
      subtitle: 'Your brand. Your way.',
    },
    {
      icon: Tag,
      title: 'Flexible Budgets',
      subtitle: 'Gifting solutions for every budget.',
    },
    {
      icon: Package,
      title: 'Bulk Orders',
      subtitle: 'Special pricing for corporate & bulk orders.',
    },
    {
      icon: Gift,
      title: 'Professional Packaging',
      subtitle: 'Because presentation matters.',
    },
    {
      icon: Users2,
      title: 'One-Stop Gifting',
      subtitle: 'From selection to delivery, we handle everything.',
    },
  ];

  return (
    <section id="hero" className="relative bg-[#FAF8F5] pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Main Headline */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-black text-[#1C1917] tracking-tight leading-[1.18]">
                Thoughtfully Given. <br />
                <span className="text-[#A26E2C] font-serif">Professionally Remembered.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Premium corporate gifting solutions for employees, clients, partners and events.
            </p>

            {/* 3 Inline Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-700 pt-1">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#A26E2C]" />
                <span>Quality Products</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PenTool className="w-4 h-4 text-[#A26E2C]" />
                <span>Custom Branding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#A26E2C]" />
                <span>Timely Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onScrollToSection('curated-kits')}
                className="px-6 py-3 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-sm transition-all shadow-xs"
                id="hero-btn-explore-kits"
              >
                Explore Gift Kits
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="px-6 py-3 rounded-md bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm border border-stone-300 transition-all shadow-2xs"
                id="hero-btn-get-quote"
              >
                Get a Quote
              </button>
            </div>

            {/* Slide Pagination Dots */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 0 ? 'w-5 bg-[#A26E2C]' : 'w-2 bg-stone-300'
                }`}
                aria-label="Slide 1"
              />
              <button
                onClick={() => setActiveSlide(1)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 1 ? 'w-5 bg-[#A26E2C]' : 'w-2 bg-stone-300'
                }`}
                aria-label="Slide 2"
              />
              <button
                onClick={() => setActiveSlide(2)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 2 ? 'w-5 bg-[#A26E2C]' : 'w-2 bg-stone-300'
                }`}
                aria-label="Slide 3"
              />
            </div>

          </div>

          {/* Right Column: Hero Visual Product Display */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/90 bg-white">
              <img
                src={heroShowcaseImg}
                alt="BHET Corporate Gifting Luxury Suite with Gold Branding"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[460px]"
              />
            </div>
          </div>

        </div>

        {/* 6-Item Floating Feature Strip (Directly Below Hero) */}
        <div className="mt-14 lg:mt-18 bg-white rounded-xl border border-stone-200/90 shadow-sm p-6 lg:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
            {valueProps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={`space-y-2 flex flex-col items-center justify-start ${idx > 0 ? 'pt-4 md:pt-0' : ''} px-2`}>
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#A26E2C] border border-amber-200/60 flex items-center justify-center mb-1">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};



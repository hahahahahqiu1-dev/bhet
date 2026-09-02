import React from 'react';
import { 
  Palette, 
  Sparkles, 
  Box, 
  FileText,
  Layers
} from 'lucide-react';

interface CustomizationShowcaseProps {
  onOpenQuoteModal: () => void;
}

export const CustomizationShowcase: React.FC<CustomizationShowcaseProps> = ({ onOpenQuoteModal }) => {
  const customizationCards = [
    {
      icon: Palette,
      title: 'Logo Printing & Screen Print',
      description: 'Sharp, durable and vibrant logo reproduction on notebooks, bags, apparel & merchandise.',
    },
    {
      icon: Sparkles,
      title: 'Laser Engraving',
      description: 'Elegant, permanent precision engraving on metal pens, bottles, flasks & desk accessories.',
    },
    {
      icon: Box,
      title: 'Custom Packaging & Sleeves',
      description: 'Rigid branded gift boxes, custom color sleeves, printed tissue & foil stamped ribbons.',
    },
    {
      icon: FileText,
      title: 'Personalized Inserts & Cards',
      description: 'Custom greeting cards, welcome letters, certificates & branded messages.',
    },
  ];

  return (
    <section id="customization" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Customization & Branding Options
          </h2>
          <div className="w-12 h-0.5 bg-[#A26E2C] mx-auto mt-2.5 mb-3.5 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Make every gift uniquely yours with our professional branding techniques.
          </p>
        </div>

        {/* 4 Customization Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customizationCards.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#A26E2C] flex items-center justify-center mb-1">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


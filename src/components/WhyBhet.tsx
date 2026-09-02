import React from 'react';
import { 
  ShieldCheck, 
  Palette, 
  Coins, 
  Truck, 
  Headphones, 
  ReceiptText
} from 'lucide-react';
import { TestimonialCarousel } from './TestimonialCarousel';

interface WhyBhetProps {
  onOpenQuoteModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const WhyBhet: React.FC<WhyBhetProps> = ({
  onOpenQuoteModal,
  onScrollToSection,
}) => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Quality & Durability',
      desc: 'Carefully selected products designed for durability and everyday use.',
    },
    {
      icon: Palette,
      title: 'End-to-End Customization',
      desc: 'From product selection to packaging, everything is branded to perfection.',
    },
    {
      icon: Coins,
      title: 'Budget-Friendly Solutions',
      desc: 'Tailored gifting packages that fit your company budget without compromising quality.',
    },
    {
      icon: Truck,
      title: 'Reliable Pan-India Delivery',
      desc: 'Timely and safe delivery across India for single and multi-location orders.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      desc: 'Expert guidance and personalized service to make your corporate gifting hassle-free.',
    },
    {
      icon: ReceiptText,
      title: 'Transparent Pricing & GST',
      desc: 'Clear quotations with bulk discounts and complete GST input tax credit invoicing.',
    },
  ];

  return (
    <section id="why-bhet" className="py-16 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Enterprise Trust</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Why Choose BHET?
            </h2>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-2.5 mb-3.5 rounded-full" />
            <p className="text-stone-400 text-sm sm:text-base font-normal">
              We combine quality products, attractive presentation, and brand customization to create gifts that people are happy to receive and use.
            </p>
          </div>

          {/* 6 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-start text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Automated Testimonial Carousel */}
        <div className="space-y-6 pt-6 border-t border-stone-800">
          <div className="text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Trusted by HR & Procurement Leaders
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              See what our corporate clients say about our onboarding kits, festive hampers, and prompt dispatches.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

      </div>
    </section>
  );
};



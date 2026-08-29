import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/giftingData';
import aboutBoxImg from '../assets/images/bhet_about_box_1788013329465.jpg';

interface AboutSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onScrollToSection,
  onOpenQuoteModal,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image on top, Mission & Vision Cards below */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Box Image */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-900">
              <img
                src={aboutBoxImg}
                alt="BHET Corporate Gift Set Open Box"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            {/* Mission & Vision 2-Column Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Mission Card */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#A26E2C] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    Our Mission
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {BRAND_INFO.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#A26E2C] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    Our Vision
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {BRAND_INFO.vision}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: About Us Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                About Us
              </h2>
              <div className="w-12 h-0.5 bg-[#A26E2C] mt-2.5 rounded-full" />
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                BHET is a corporate gifting brand focused on creating meaningful and professional gifting experiences for businesses.
              </p>
              <p>
                From a simple branded pen or notebook to a complete corporate gift kit, we help businesses find the right gifts for every occasion and budget.
              </p>
              <p>
                Our collection includes notebooks, diaries, premium pens, water bottles, mugs, desk accessories, employee kits, gift boxes, and customized corporate hampers.
              </p>
              <p>
                We combine quality products, attractive presentation, and brand customization to create gifts that people are happy to receive and use.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onScrollToSection('offerings')}
                className="px-6 py-3 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs"
                id="about-btn-know-more"
              >
                Know More About Us
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


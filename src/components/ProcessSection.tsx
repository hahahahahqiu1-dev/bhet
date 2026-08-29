import React from 'react';
import { MessageSquareText, PackageCheck, Eye, Send, ArrowRight, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/giftingData';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenQuoteModal,
  onScrollToSection,
}) => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>How Corporate Gifting Works</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Our 4-Step Simple Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal">
            From initial brief to final doorstep delivery, we make the procurement process transparent, swift, and completely seamless.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between relative group"
              id={`process-step-${stepItem.step}`}
            >
              {/* Step Marker */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-black text-amber-800/40 group-hover:text-amber-700 transition-colors">
                  {stepItem.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-amber-400 transition-colors">
                  {getStepIcon(stepItem.iconName)}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-500 text-xs shadow-2xs">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="text-center pt-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-amber-950 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Step 01: Share Your Requirement</span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => onScrollToSection('kit-builder')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-xs sm:text-sm border border-stone-300 transition-colors"
            >
              Step 02: Build a Custom Kit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

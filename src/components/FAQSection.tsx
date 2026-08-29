import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { FAQS, BRAND_INFO } from '../data/giftingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal">
            Everything you need to know about ordering, customization, proofing, and delivery with BHET.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-amber-50/40 border-amber-300/80 shadow-xs'
                    : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  id={`faq-btn-${idx}`}
                >
                  <span className="font-serif text-base font-bold text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-amber-200/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              Have a specific corporate requirement?
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Our enterprise gifting consultants are available on WhatsApp and phone.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20BHET%20team,%20I%20have%20a%20question%20about%20corporate%20gifting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.contactPhone}`}
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

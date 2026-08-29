import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  ArrowUp, 
  CheckCircle,
  SlidersHorizontal,
  FileSpreadsheet
} from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '../data/giftingData';
import { BhetLogo } from './BhetLogo';

interface FooterProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onOpenSampleModal,
  onScrollToSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-stone-800 bg-stone-900/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Ready to elevate your corporate gifting?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Get Started with a Free 3D Digital Mockup Today
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Send us your company logo and get a photorealistic rendering within 2-4 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onScrollToSection('kit-builder')}
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold text-xs flex items-center gap-2 border border-stone-700 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Custom Kit Builder</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Instant Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BhetLogo size="md" variant="gold" />

            <p className="font-serif text-sm font-semibold italic text-amber-300">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              {BRAND_INFO.intro}
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Pan-India Doorstep & Multi-Address Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>100% Tax Compliant B2B GST Invoicing</span>
              </div>
            </div>
          </div>

          {/* Col 2: What We Offer */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              What We Offer
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onScrollToSection('offerings')}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onScrollToSection('curated-kits')}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  Curated Gift Kits (from ₹199+) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onScrollToSection('about')} className="hover:text-amber-300">
                  About Us & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('kit-builder')} className="hover:text-amber-300 font-semibold text-amber-300">
                  Build Your Own Kit
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('customization')} className="hover:text-amber-300">
                  Customization Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('who-we-serve')} className="hover:text-amber-300">
                  Who We Serve
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('occasions')} className="hover:text-amber-300">
                  Occasions & Events
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('why-bhet')} className="hover:text-amber-300">
                  Why Choose BHET
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('process')} className="hover:text-amber-300">
                  Our 4-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('faq')} className="hover:text-amber-300">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Desk */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Corporate Desk
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <a
                href={`mailto:${BRAND_INFO.corporateSalesEmail}`}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND_INFO.corporateSalesEmail}</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.contactPhone}`}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND_INFO.contactPhone}</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors text-emerald-400"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp Instant Support</span>
              </a>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSampleModal}
                className="w-full py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-stone-400" />
                <span>Request Sample Evaluation Kit</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Corporate GST Invoicing</span>
            <span>•</span>
            <span>Enterprise SLA Support</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

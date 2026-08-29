import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OfferingsCatalog } from './components/OfferingsCatalog';
import { OnlineProductsStudio } from './components/OnlineProductsStudio';
import { CuratedKits } from './components/CuratedKits';
import { KitBuilder } from './components/KitBuilder';
import { CustomizationShowcase } from './components/CustomizationShowcase';
import { WhoWeServe } from './components/WhoWeServe';
import { OccasionsSection } from './components/OccasionsSection';
import { WhyBhet } from './components/WhyBhet';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { QuoteDraft } from './types';
import { BRAND_INFO } from './data/giftingData';
import { MessageSquare, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [initialKitForQuote, setInitialKitForQuote] = useState<string | undefined>(undefined);
  const [customQuoteDraft, setCustomQuoteDraft] = useState<Partial<QuoteDraft> | undefined>(undefined);

  const handleOpenQuoteModal = (kitIdOrContext?: string) => {
    setInitialKitForQuote(kitIdOrContext);
    setCustomQuoteDraft(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCustomKitQuote = (draft: Partial<QuoteDraft>) => {
    setCustomQuoteDraft(draft);
    setInitialKitForQuote(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-900 selection:text-amber-50">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* Online Products Catalog, AI Generator & 3D Live Branding Studio */}
        <OnlineProductsStudio
          onOpenQuoteModal={(productOrKitName) => handleOpenQuoteModal(productOrKitName)}
          onScrollToSection={handleScrollToSection}
        />

        {/* About Us, Mission & Vision */}
        <AboutSection
          onScrollToSection={handleScrollToSection}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* What We Offer - 7 Categories Catalog */}
        <OfferingsCatalog
          onOpenQuoteModal={(prodOrCatId) => handleOpenQuoteModal(prodOrCatId)}
          onScrollToSection={handleScrollToSection}
        />

        {/* Curated BHET Gift Kits with Bulk Pricing Calculator */}
        <CuratedKits
          onOpenQuoteModal={(kitId) => handleOpenQuoteModal(kitId)}
          onCustomizeKit={() => handleScrollToSection('kit-builder')}
          onScrollToSection={handleScrollToSection}
        />

        {/* Interactive "Build Your Own Gift Kit" Studio */}
        <KitBuilder
          onOpenCustomQuote={handleOpenCustomKitQuote}
        />

        {/* Customization & Live Personalization Simulator */}
        <CustomizationShowcase
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Who We Serve - Sector and Department Solutions */}
        <WhoWeServe
          onOpenQuoteModal={(industryTitle) => handleOpenQuoteModal(industryTitle)}
          onScrollToSection={handleScrollToSection}
        />

        {/* Perfect For Every Occasion */}
        <OccasionsSection
          onOpenQuoteModal={(occTitle) => handleOpenQuoteModal(occTitle)}
        />

        {/* Why BHET - 6 Value Pillars */}
        <WhyBhet
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* Our Simple 4-Step Process */}
        <ProcessSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Quote Request & Proforma Invoice Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialKitId={initialKitForQuote}
        initialDraft={customQuoteDraft}
      />

      {/* Sample Evaluation Kit Modal */}
      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      {/* Floating Quick Action Widget for Instant Assistance */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20BHET%20team,%20I%20would%20like%20to%20inquire%20about%20corporate%20gifting.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:px-4 sm:py-2.5 rounded-full sm:rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
          id="floating-whatsapp-btn"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Expert</span>
        </a>

        <button
          onClick={() => handleOpenQuoteModal()}
          className="px-4 py-2.5 rounded-2xl bg-stone-900 hover:bg-amber-950 text-white font-bold text-xs shadow-xl border border-stone-700 flex items-center gap-2 transition-all transform hover:scale-105"
          id="floating-quote-btn"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Quick Quote</span>
        </button>
      </div>

    </div>
  );
}

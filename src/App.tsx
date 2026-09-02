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
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteDraft, ProductItem } from './types';
import { BRAND_INFO } from './data/giftingData';
import { MessageSquare, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [initialKitForQuote, setInitialKitForQuote] = useState<string | undefined>(undefined);
  const [customQuoteDraft, setCustomQuoteDraft] = useState<Partial<QuoteDraft> | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [addedKitProducts, setAddedKitProducts] = useState<ProductItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToGiftPack = (product: ProductItem) => {
    if (!addedKitProducts.some(p => p.id === product.id)) {
      setAddedKitProducts(prev => [...prev, product]);
    }
    setToastMessage(`Added "${product.name}" to your Custom Gift Pack!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRemoveAddedProduct = (productId: string) => {
    setAddedKitProducts(prev => prev.filter(p => p.id !== productId));
    setToastMessage('Removed item from Custom Gift Pack.');
    setTimeout(() => setToastMessage(null), 3000);
  };

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

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-900 selection:text-amber-50">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-amber-300 px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/40 text-xs font-bold flex items-center gap-3 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setToastMessage(null);
              handleScrollToSection('kit-builder');
            }}
            className="ml-2 underline text-white hover:text-amber-200 cursor-pointer"
          >
            View Kit Builder
          </button>
        </div>
      )}
      
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
          onSelectProduct={handleSelectProduct}
          onAddToGiftPack={handleAddToGiftPack}
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
        <div id="kit-builder">
          <KitBuilder
            onOpenCustomQuote={handleOpenCustomKitQuote}
            addedProducts={addedKitProducts}
            onRemoveAddedProduct={handleRemoveAddedProduct}
            onAddProductToKit={handleAddToGiftPack}
          />
        </div>

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

        {/* Why BHET - 6 Value Pillars & Testimonial Carousel */}
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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onAddToGiftPack={handleAddToGiftPack}
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

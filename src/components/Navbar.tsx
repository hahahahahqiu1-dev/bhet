import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Gift, Search, ShoppingBag, ChevronDown, Gem } from 'lucide-react';
import { BRAND_INFO } from '../data/giftingData';
import { BhetLogo } from './BhetLogo';

interface NavbarProps {
  onOpenQuoteModal: (initialKitId?: string) => void;
  onOpenSampleModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  onOpenSampleModal,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: 'hero' },
    { id: 'about', label: 'About Us', href: 'about' },
    { id: 'products', label: 'Our Products', href: 'offerings', hasDropdown: true },
    { id: 'kit-builder', label: 'Build Your Gift Kit', href: 'kit-builder' },
    { id: 'customization', label: 'Customization', href: 'customization' },
    { id: 'occasions', label: 'Occasions', href: 'occasions' },
    { id: 'why-bhet', label: 'Why BHET?', href: 'why-bhet' },
    { id: 'contact', label: 'Contact Us', href: 'contact' },
  ];

  const productCategories = [
    { label: 'Corporate Stationery', section: 'offerings' },
    { label: 'Branded Pens', section: 'offerings' },
    { label: 'Customized Bottles', section: 'offerings' },
    { label: 'Mugs & Drinkware', section: 'offerings' },
    { label: 'Corporate Gift Hampers', section: 'offerings' },
    { label: 'Employee Welcome Kits', section: 'offerings' },
    { label: 'Event & Promotional Gifts', section: 'offerings' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    onScrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-stone-200/90 shadow-2xs">
      {/* Top Black Announcement Bar */}
      <div className="bg-stone-950 text-stone-300 text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Tagline */}
          <div className="flex items-center gap-1.5 text-stone-300">
            <Gem className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-normal text-stone-300">Corporate Gifting. Thoughtfully Done.</span>
          </div>

          {/* Center: Bulk Promo */}
          <div className="hidden md:flex items-center gap-1.5 text-stone-200 font-medium cursor-pointer hover:text-amber-300 transition-colors" onClick={() => onOpenQuoteModal()}>
            <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Bulk Orders? Get Special Pricing!</span>
          </div>

          {/* Right: Email & Phone */}
          <div className="flex items-center gap-4 text-stone-300 shrink-0">
            <a
              href={`mailto:${BRAND_INFO.contactEmail}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400/90" />
              <span>{BRAND_INFO.contactEmail}</span>
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a
              href={`tel:${BRAND_INFO.contactPhone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400/90" />
              <span>{BRAND_INFO.contactPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home', 'hero')}
          className="flex items-center text-left focus:outline-hidden group shrink-0"
          id="nav-brand-logo"
        >
          <BhetLogo size="md" variant="light" />
        </button>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            if (link.hasDropdown) {
              return (
                <div key={link.id} className="relative group">
                  <button
                    onClick={() => handleNavClick(link.id, link.href)}
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    className={`flex items-center gap-1 py-2 text-stone-800 hover:text-amber-800 transition-colors ${
                      isActive ? 'text-amber-800 font-semibold' : ''
                    }`}
                    id={`nav-link-${link.id}`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-800 group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2.5 hidden group-hover:block transition-all z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="px-3.5 py-1.5 text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Categories
                    </div>
                    {productCategories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick('products', cat.section)}
                        className="w-full text-left px-4 py-2 text-xs text-stone-700 hover:bg-amber-50 hover:text-amber-900 transition-colors flex items-center justify-between"
                      >
                        <span>{cat.label}</span>
                      </button>
                    ))}
                    <div className="border-t border-stone-100 mt-1 pt-1">
                      <button
                        onClick={() => handleNavClick('products', 'online-products')}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-100/60 transition-colors"
                      >
                        View All Products →
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`py-2 relative text-stone-800 hover:text-amber-800 transition-colors whitespace-nowrap ${
                  isActive ? 'text-amber-800 font-semibold' : ''
                }`}
                id={`nav-link-${link.id}`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A26E2C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Actions: Search, Wishlist/Cart & Get a Quote Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onScrollToSection('offerings')}
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            title="Search Catalog"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollToSection('curated-kits')}
            className="relative p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            title="Selected Gift Items"
            aria-label="Wishlist / Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute 1 top-0 right-0 w-4 h-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-5 py-2.5 rounded-md bg-[#A26E2C] hover:bg-[#8D5E24] text-white font-semibold text-xs sm:text-[13px] tracking-wide transition-all shadow-xs"
            id="nav-btn-quote"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-3.5 py-1.5 rounded-md bg-[#A26E2C] text-white text-xs font-semibold"
            id="mobile-nav-quote"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200'
                    : 'bg-stone-50 text-stone-800 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 rounded-md bg-[#A26E2C] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs"
            >
              <Gift className="w-4 h-4 text-amber-200" />
              Get a Corporate Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-2.5 px-4 rounded-md bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2"
            >
              Request Sample Evaluation Kit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


import React, { useState, useEffect } from 'react';
import { 
  X, Star, ShieldCheck, CheckCircle2, ArrowRight, Calculator, ThumbsUp, 
  MessageSquare, PlusCircle, UserCheck, Sparkles, Filter, Package 
} from 'lucide-react';
import { ProductItem, ProductReview } from '../types';
import { getProductReviewsDetails } from '../data/giftingData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (productName: string) => void;
  onAddToGiftPack?: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenQuoteModal,
  onAddToGiftPack,
}) => {
  const [selectedQty, setSelectedQty] = useState<number>(25);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedCustomization, setSelectedCustomization] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  // Review states
  const [reviewsList, setReviewsList] = useState<ProductReview[]>([]);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // New review form states
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newRating, setNewRating] = useState<number>(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      const details = getProductReviewsDetails(product);
      setReviewsList(details.reviews);
      setSelectedQty(product.minOrderQty || 25);
      setSelectedColor((product.colors && product.colors[0]) || '');
      setSelectedCustomization((product.customizationMethods && product.customizationMethods[0]) || '');
      setActiveTab('details');
      setShowReviewForm(false);
      setFormSuccess(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const reviewDetails = getProductReviewsDetails(product);
  const activeColor = selectedColor || (product.colors && product.colors[0]) || '#1C1917';
  const activeCustomization = selectedCustomization || (product.customizationMethods && product.customizationMethods[0]) || 'Laser Engraving';

  // Tiered bulk pricing calculation
  let discountMultiplier = 1.0;
  if (selectedQty >= 100) discountMultiplier = 0.85; // 15% off
  else if (selectedQty >= 50) discountMultiplier = 0.90; // 10% off
  else if (selectedQty >= 25) discountMultiplier = 0.95; // 5% off

  const unitPrice = Math.round(product.price * discountMultiplier);
  const totalPrice = unitPrice * selectedQty;

  const handleProceedToQuote = () => {
    onClose();
    onOpenQuoteModal(`${product.name} (Qty: ${selectedQty}, Customization: ${activeCustomization})`);
  };

  const handleToggleHelpful = (reviewId: string) => {
    const isLiked = !!likedReviews[reviewId];

    setLikedReviews((prev) => ({
      ...prev,
      [reviewId]: !isLiked
    }));

    setHelpfulCounts((prev) => {
      const baseCount = reviewsList.find((r) => r.id === reviewId)?.helpfulCount || 0;
      const currentCount = prev[reviewId] ?? baseCount;
      const delta = isLiked ? -1 : 1;
      return {
        ...prev,
        [reviewId]: Math.max(0, currentCount + delta)
      };
    });
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim() || !newTitle.trim()) return;

    const userReview: ProductReview = {
      id: `user-rev-${Date.now()}`,
      author: newAuthor,
      role: newRole || 'Corporate Buyer',
      company: newCompany || 'Enterprise Client',
      rating: newRating,
      date: 'Just now',
      orderSize: `Verified Order (${selectedQty} units)`,
      verified: true,
      title: newTitle,
      comment: newComment,
      helpfulCount: 0
    };

    setReviewsList([userReview, ...reviewsList]);
    setFormSuccess(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setFormSuccess(false);
      setNewAuthor('');
      setNewRole('');
      setNewCompany('');
      setNewRating(5);
      setNewTitle('');
      setNewComment('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col lg:flex-row text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors border border-stone-700 shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Showcase */}
        <div className="lg:w-1/2 relative bg-stone-950 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800">
          <div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-stone-950/90 text-amber-300 text-xs font-bold border border-amber-500/30 shadow-md">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Nav Tabs between Overview & Corporate Reviews */}
            <div className="mt-5 flex rounded-xl bg-stone-900 p-1 border border-stone-800">
              <button
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'details'
                    ? 'bg-amber-400 text-stone-950 shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Product Details & Pricing
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'reviews'
                    ? 'bg-amber-400 text-stone-950 shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <span>Client Reviews</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-stone-950/40 text-amber-300">
                  {reviewsList.length}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Min Order</div>
                <div className="text-xs font-bold text-white mt-0.5">{product.minOrderQty} pcs</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Turnaround</div>
                <div className="text-xs font-bold text-amber-300 mt-0.5">3-5 Days</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Quality</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">100% Inspected</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Includes 100% B2B tax invoice with GSTIN credit support.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tab Content */}
        <div className="lg:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
              <span>{product.categoryLabel || 'Corporate Merchandise'}</span>
              <button 
                onClick={() => setActiveTab('reviews')}
                className="flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-200 font-bold">{reviewDetails.rating} ({reviewDetails.count} reviews)</span>
              </button>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
              {product.name}
            </h2>
          </div>

          {/* TAB 1: PRODUCT DETAILS & CALCULATOR */}
          {activeTab === 'details' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Key Specifications</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Methods */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Branding / Customization Finish</span>
                <div className="flex flex-wrap gap-2">
                  {product.customizationMethods.map((method, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCustomization(method)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        activeCustomization === method
                          ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-xs'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Available Finishes / Colors</span>
                  <div className="flex items-center gap-3">
                    {product.colors.map((hex, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(hex)}
                        style={{ backgroundColor: hex }}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          activeColor === hex ? 'scale-125 border-amber-400 shadow-md' : 'border-stone-700'
                        }`}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Bulk Calculator */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Quantity & Bulk Pricing</span>
                  </span>
                  <span className="text-[11px] text-amber-400 font-medium">
                    {selectedQty >= 100 ? '15% Bulk Discount Applied!' : selectedQty >= 50 ? '10% Bulk Discount Applied!' : selectedQty >= 25 ? '5% Bulk Discount Applied!' : 'Standard Tier'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={product.minOrderQty || 20}
                    max={5000}
                    value={isNaN(selectedQty) || selectedQty === undefined ? '' : selectedQty}
                    onChange={(e) => setSelectedQty(e.target.value === '' ? (product.minOrderQty || 20) : Math.max(product.minOrderQty || 20, Number(e.target.value)))}
                    className="w-28 px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white font-bold text-sm focus:outline-hidden focus:border-amber-400"
                  />
                  <div className="flex-1 flex justify-between items-center text-xs text-stone-400">
                    <div>
                      <span className="block text-[10px] text-stone-500">Unit Rate</span>
                      <span className="font-bold text-white">₹{unitPrice} / pc</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-stone-500">Total Est.</span>
                      <span className="font-serif font-black text-amber-300 text-base">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Qty Buttons */}
                <div className="flex gap-2 pt-1">
                  {[25, 50, 100, 250, 500].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setSelectedQty(qty)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        selectedQty === qty
                          ? 'bg-stone-800 text-amber-300 border-amber-500/50'
                          : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                      }`}
                    >
                      {qty} pcs
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleProceedToQuote}
                  className="flex-1 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Add to Quote & Request 3D Proof</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {onAddToGiftPack && product && (
                  <button
                    onClick={() => {
                      onAddToGiftPack(product);
                      onClose();
                    }}
                    className="px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-stone-700 cursor-pointer shadow-md"
                    title="Add directly to Custom Gift Pack"
                  >
                    <Package className="w-4 h-4 text-amber-400" />
                    <span>Add to Gift Pack</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CLIENT REVIEWS */}
          {activeTab === 'reviews' && (() => {
            const fiveStarCount = reviewsList.filter(r => r.rating === 5).length;
            const fourStarCount = reviewsList.filter(r => r.rating === 4).length;
            const threeStarCount = reviewsList.filter(r => r.rating === 3).length;
            const totalRevCount = reviewsList.length || 1;

            const fiveStarPct = Math.round((fiveStarCount / totalRevCount) * 100);
            const fourStarPct = Math.round((fourStarCount / totalRevCount) * 100);
            const threeStarPct = Math.max(0, 100 - fiveStarPct - fourStarPct);

            return (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Rating Summary Banner */}
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center pr-4 border-r border-stone-800">
                      <div className="font-serif text-3xl font-black text-white">{reviewDetails.rating}</div>
                      <div className="flex items-center justify-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="text-[10px] text-stone-400 mt-1">{reviewDetails.count} reviews</div>
                    </div>

                    <div className="space-y-1 text-xs text-stone-300">
                      <div className="flex items-center gap-2">
                        <span className="w-8 text-[10px] text-stone-400 font-bold">5 ★</span>
                        <div className="w-20 sm:w-28 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: `${fiveStarPct}%` }} />
                        </div>
                        <span className="text-[10px] text-stone-400">{fiveStarPct}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-8 text-[10px] text-stone-400 font-bold">4 ★</span>
                        <div className="w-20 sm:w-28 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400/80 rounded-full" style={{ width: `${fourStarPct}%` }} />
                        </div>
                        <span className="text-[10px] text-stone-400">{fourStarPct}%</span>
                      </div>
                      {threeStarCount > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="w-8 text-[10px] text-stone-400 font-bold">3 ★</span>
                          <div className="w-20 sm:w-28 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500/60 rounded-full" style={{ width: `${threeStarPct}%` }} />
                          </div>
                          <span className="text-[10px] text-stone-400">{threeStarPct}%</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Write Review</span>
                  </button>
                </div>

              {/* Interactive Write Review Form */}
              {showReviewForm && (
                <form 
                  onSubmit={handleAddReviewSubmit}
                  className="p-4 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-3 animate-fadeIn"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-amber-400" />
                      <span>Submit Corporate Feedback</span>
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="text-stone-400 hover:text-stone-200 text-xs"
                    >
                      Cancel
                    </button>
                  </div>

                  {formSuccess ? (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your verified review has been published below.</span>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          type="text"
                          placeholder="Your Name (e.g. Rahul Sharma)"
                          required
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white focus:outline-hidden focus:border-amber-400"
                        />
                        <input
                          type="text"
                          placeholder="Role (e.g. HR Director)"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white focus:outline-hidden focus:border-amber-400"
                        />
                        <input
                          type="text"
                          placeholder="Company (e.g. TechCorp)"
                          value={newCompany}
                          onChange={(e) => setNewCompany(e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white focus:outline-hidden focus:border-amber-400"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-xs font-bold text-stone-400">Rating:</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setNewRating(star)}
                              className="focus:outline-hidden"
                            >
                              <Star
                                className={`w-4 h-4 ${
                                  star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Review Headline (e.g. Excellent branding clarity & fast dispatch)"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white focus:outline-hidden focus:border-amber-400"
                      />

                      <textarea
                        rows={3}
                        placeholder="Describe your corporate procurement experience, product finish, or employee unboxing feedback..."
                        required
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white focus:outline-hidden focus:border-amber-400"
                      />

                      <button
                        type="submit"
                        className="w-full py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md"
                      >
                        Publish Verified Review
                      </button>
                    </>
                  )}
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {reviewsList.map((rev) => {
                  const currentHelpful = helpfulCounts[rev.id] ?? rev.helpfulCount;
                  const isLiked = likedReviews[rev.id];

                  return (
                    <div 
                      key={rev.id}
                      className="p-4 rounded-2xl bg-stone-950 border border-stone-800 hover:border-stone-700 transition-all space-y-2.5"
                    >
                      {/* Author Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                            {rev.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-bold text-white text-xs sm:text-sm">{rev.author}</div>
                            <div className="text-[11px] text-amber-300/90 font-medium">
                              {rev.role}, <span className="text-stone-400">{rev.company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] text-stone-500">{rev.date}</span>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      {rev.verified && (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                          <UserCheck className="w-3 h-3" />
                          <span>{rev.orderSize || 'Verified Corporate Order'}</span>
                        </div>
                      )}

                      {/* Title & Comment */}
                      <div>
                        <h5 className="text-xs font-bold text-stone-100">{rev.title}</h5>
                        <p className="text-xs text-stone-300 leading-relaxed mt-1">
                          "{rev.comment}"
                        </p>
                      </div>

                      {/* Helpful Button */}
                      <div className="pt-1 flex items-center justify-end">
                        <button
                          onClick={() => handleToggleHelpful(rev.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all flex items-center gap-1.5 ${
                            isLiked
                              ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                              : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                          }`}
                        >
                          <ThumbsUp className={`w-3 h-3 ${isLiked ? 'fill-amber-400 text-amber-400' : ''}`} />
                          <span>Helpful ({currentHelpful})</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
            );
          })()}

        </div>

      </div>
    </div>
  );
};

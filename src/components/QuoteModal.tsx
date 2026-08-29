import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle, 
  Send, 
  Printer, 
  MessageSquare, 
  Calculator, 
  Building, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  FileCheck,
  Download,
  FileText,
  Clock
} from 'lucide-react';
import { CURATED_KITS, BRAND_INFO } from '../data/giftingData';
import { QuoteDraft } from '../types';
import { BhetLogo } from './BhetLogo';
import { generatePdfProposal } from '../utils/generatePdfProposal';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialKitId?: string;
  initialDraft?: Partial<QuoteDraft>;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialKitId,
  initialDraft,
}) => {
  const [formData, setFormData] = useState<QuoteDraft>({
    companyName: initialDraft?.companyName || '',
    contactName: initialDraft?.contactName || '',
    email: initialDraft?.email || '',
    phone: initialDraft?.phone || '',
    occasion: initialDraft?.occasion || 'Employee Joining Kits',
    quantity: initialDraft?.quantity || 50,
    selectedKitId: initialKitId || initialDraft?.selectedKitId || 'classic',
    customKitItems: initialDraft?.customKitItems || [],
    brandingType: initialDraft?.brandingType || ['Company Logo Printing', 'Laser Engraving'],
    boxColor: initialDraft?.boxColor || 'Classic Black',
    brandText: initialDraft?.brandText || '',
    corporateMessage: initialDraft?.corporateMessage || '',
    city: initialDraft?.city || '',
    targetDeliveryDate: initialDraft?.targetDeliveryDate || '',
    additionalNotes: initialDraft?.additionalNotes || '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'invoice-preview'>('form');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  useEffect(() => {
    if (initialKitId) {
      setFormData((prev) => ({ ...prev, selectedKitId: initialKitId }));
    }
    if (initialDraft) {
      setFormData((prev) => ({ ...prev, ...initialDraft }));
    }
  }, [initialKitId, initialDraft]);

  if (!isOpen) return null;

  // Calculate pricing
  const isCustomKit = (formData.customKitItems && formData.customKitItems.length > 0);
  const baseKit = CURATED_KITS.find((k) => k.id === formData.selectedKitId) || CURATED_KITS[1];
  
  const unitPrice = isCustomKit 
    ? (formData.customKitItems?.reduce((acc, item) => acc + item.unitPrice, 0) || baseKit.price)
    : baseKit.price;

  const qty = Math.max(1, formData.quantity);

  // Volume discount
  const getVolumeDiscount = (q: number) => {
    if (q >= 1000) return 0.22;
    if (q >= 500) return 0.18;
    if (q >= 250) return 0.14;
    if (q >= 100) return 0.10;
    if (q >= 50) return 0.05;
    return 0;
  };

  const discountRate = getVolumeDiscount(qty);
  const discountedUnit = Math.round(unitPrice * (1 - discountRate));
  const subtotal = discountedUnit * qty;
  const gstAmount = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gstAmount;

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    const ref = submittedRef || `BHET-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    if (!submittedRef) {
      setSubmittedRef(ref);
    }

    try {
      generatePdfProposal({
        draft: formData,
        quoteRef: ref,
        discountRate,
        discountedUnit,
        subtotal,
        gstAmount,
        grandTotal,
      });
    } catch (err) {
      console.error('Failed to generate PDF proposal:', err);
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 800);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockRef = submittedRef || `BHET-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(mockRef);
    setActiveTab('invoice-preview');
  };

  const handleSendWhatsApp = () => {
    const kitName = isCustomKit ? `Custom Built Kit (${formData.customKitItems?.length} items)` : baseKit.name;
    const message = `*Corporate Gifting Inquiry - BHET*
*Ref:* ${submittedRef || 'New Request'}
*Company:* ${formData.companyName || 'N/A'}
*Contact Person:* ${formData.contactName || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Selected Kit:* ${kitName}
*Quantity:* ${qty} units
*Estimated Unit Price:* ₹${discountedUnit}
*Estimated Subtotal:* ₹${subtotal.toLocaleString()} (+18% GST)
*Occasion:* ${formData.occasion}
*City:* ${formData.city || 'Pan-India'}
*Delivery Timeline:* ${formData.targetDeliveryDate || 'Standard'}
*Branding Preferences:* ${formData.brandingType.join(', ')}

Please provide a formal digital proof and proforma invoice.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl relative flex flex-col">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center text-amber-400 font-serif font-black text-lg">
              B
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
                {submittedRef ? 'Quotation Summary & Invoice' : 'Instant Corporate Quotation'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {BRAND_INFO.fullName} • Free Virtual 3D Mockup
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {submittedRef && (
              <button
                onClick={() => setActiveTab(activeTab === 'form' ? 'invoice-preview' : 'form')}
                className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold"
              >
                {activeTab === 'form' ? 'View Quote Slip' : 'Edit Details'}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              id="quote-modal-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1">
          {activeTab === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Selected Kit Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                    {isCustomKit ? 'Custom Kit Configuration' : 'Selected Curated Tier'}
                  </span>
                  <div className="font-serif text-base font-bold text-stone-900">
                    {isCustomKit ? `Bespoke Kit (${formData.customKitItems?.length} Products)` : baseKit.name}
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {isCustomKit 
                      ? formData.customKitItems?.map((i) => i.itemName.split('/')[0]).join(' + ')
                      : baseKit.tagline}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs text-stone-500">Unit Price</div>
                  <div className="font-serif text-xl font-extrabold text-stone-900">
                    ₹{discountedUnit}
                    {discountRate > 0 && (
                      <span className="text-xs text-emerald-600 font-bold ml-1">
                        ({(discountRate * 100).toFixed(0)}% off)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Fields: Grid 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Company / Organization Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Technologies Pvt Ltd"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Priya Sharma (HR / Admin)"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields: Grid 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@acmecorp.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 97697 04262"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields: Grid 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Quantity (Headcount) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50000"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-bold text-stone-900"
                  />
                  <span className="text-[10px] text-stone-500 mt-1 block">
                    {qty >= 100 ? 'Volume discount applied!' : 'MOQ 20-25 for custom kits'}
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Occasion / Event Type
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium bg-white"
                  >
                    <option>Employee Joining Kits</option>
                    <option>Corporate Conference & Event</option>
                    <option>Festive Gifting (Diwali / New Year)</option>
                    <option>Client & Customer Appreciation</option>
                    <option>Annual Day & Milestones</option>
                    <option>General Corporate Swag</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                    Target Delivery City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai / Bangalore / Multi"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Special Instructions / Notes */}
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  Branding Notes or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="e.g. Need individual employee names on bottles; deliver by 15th next month; require gold foil logo on box lid..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

              {/* Live Quotation Summary Bar */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                    Instant Estimated Cost ({qty} units)
                  </span>
                  <div className="font-serif text-2xl font-black text-white">
                    ₹{subtotal.toLocaleString()}
                    <span className="text-xs font-normal text-stone-400 ml-1.5">
                      (+18% GST ₹{gstAmount.toLocaleString()} = ₹{grandTotal.toLocaleString()})
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    disabled={isGeneratingPdf}
                    className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Proposal'}</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Generate Formal Quotation</span>
                  </button>
                </div>
              </div>

            </form>
          )}

          {activeTab === 'invoice-preview' && (
            <div className="space-y-6">
              
              {/* Reference ID Banner */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-emerald-950">
                      Quotation Generated Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Reference ID: <span className="font-mono font-bold">{submittedRef}</span>
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                  Ready for Dispatch
                </span>
              </div>

              {/* Printable Invoice Sheet */}
              <div className="p-6 sm:p-8 rounded-2xl border border-stone-300 bg-stone-50 space-y-6 print:border-none print:p-0">
                
                {/* Header */}
                <div className="flex justify-between items-start border-b border-stone-200 pb-4">
                  <div>
                    <BhetLogo size="sm" variant="light" />
                    <p className="text-xs text-stone-600 mt-2">
                      {BRAND_INFO.contactEmail} • {BRAND_INFO.contactPhone}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-stone-900 uppercase">PROFORMA ESTIMATE</div>
                    <div className="text-xs font-mono font-bold text-amber-800">{submittedRef}</div>
                    <div className="text-[11px] text-stone-500">Date: {new Date().toLocaleDateString()}</div>
                  </div>
                </div>

                {/* Client Details */}
                <div className="grid grid-cols-2 gap-4 text-xs text-stone-700">
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">Prepared For:</span>
                    <div className="font-semibold text-stone-900">{formData.companyName || 'Company Name'}</div>
                    <div>Attn: {formData.contactName || 'Procurement Team'}</div>
                    <div>Email: {formData.email || 'corporate@client.com'}</div>
                    <div>Phone: {formData.phone || '+91-XXXXX-XXXXX'}</div>
                    <div>City: {formData.city || 'India'}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-stone-900 block mb-0.5">Order Details:</span>
                    <div>Occasion: {formData.occasion}</div>
                    <div>Quantity: {qty} units</div>
                    <div>Digital Artwork Proof: Included (FREE)</div>
                    <div>Packaging: Custom Gift Box with Brand Sleeve</div>
                  </div>
                </div>

                {/* Line Items Table */}
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-300 text-stone-500 font-bold uppercase text-[10px]">
                      <th className="py-2">Description</th>
                      <th className="py-2 text-center">Qty</th>
                      <th className="py-2 text-right">Unit Rate</th>
                      <th className="py-2 text-right">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="py-2.5">
                        <div className="font-bold text-stone-900">
                          {isCustomKit ? 'Custom Corporate Gift Kit' : baseKit.name}
                        </div>
                        <div className="text-[11px] text-stone-500">
                          {isCustomKit
                            ? formData.customKitItems?.map((i) => `${i.itemName} (${i.optionName})`).join(', ')
                            : baseKit.itemsIncluded.join(' • ')}
                        </div>
                        <div className="text-[10px] text-amber-800 mt-0.5">
                          Customization: {formData.brandingType.join(' + ')}
                        </div>
                      </td>
                      <td className="py-2.5 text-center font-bold">{qty}</td>
                      <td className="py-2.5 text-right font-mono">₹{discountedUnit}</td>
                      <td className="py-2.5 text-right font-mono font-bold">₹{subtotal.toLocaleString()}</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-t border-stone-300 text-xs">
                    <tr>
                      <td colSpan={3} className="py-1.5 text-right text-stone-500 font-medium">Subtotal:</td>
                      <td className="py-1.5 text-right font-mono font-bold">₹{subtotal.toLocaleString()}</td>
                    </tr>
                    {discountRate > 0 && (
                      <tr className="text-emerald-700">
                        <td colSpan={3} className="py-1 text-right font-medium">Volume Discount ({(discountRate * 100).toFixed(0)}%):</td>
                        <td className="py-1 text-right font-mono font-bold">- ₹{((unitPrice - discountedUnit) * qty).toLocaleString()}</td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={3} className="py-1 text-right text-stone-500 font-medium">Estimated GST (18%):</td>
                      <td className="py-1 text-right font-mono font-bold">₹{gstAmount.toLocaleString()}</td>
                    </tr>
                    <tr className="text-stone-900 font-bold border-t border-stone-300 text-sm">
                      <td colSpan={3} className="py-2 text-right">Total Payable:</td>
                      <td className="py-2 text-right font-mono font-black text-amber-900">₹{grandTotal.toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>

                {/* Notes */}
                <div className="text-[11px] text-stone-500 border-t border-stone-200 pt-3 space-y-1">
                  <div>• Price includes standard single-color logo customization and individual gift box presentation.</div>
                  <div>• Final invoice will feature full GST input tax credit credentials.</div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-2 transition-colors shadow-xs disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Proposal'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center gap-1.5 border border-stone-300 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save</span>
                </button>
                <button
                  onClick={handleSendWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quotation to WhatsApp</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

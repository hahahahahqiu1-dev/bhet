import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Package, Send, Building, User, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/giftingData';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    city: '',
    pincode: '',
    sampleType: 'BHET Classic Sample Kit',
    expectedQuantity: '50 - 250 units',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Package className="w-3.5 h-3.5 text-amber-800" />
                <span>Physical Evaluation Box</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Request a Sample Evaluation Kit
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Evaluate our vegan leather finish, laser engraving precision, and rigid box presentation before placing your bulk corporate order.
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={sampleForm.companyName}
                    onChange={(e) => setSampleForm({ ...sampleForm, companyName: e.target.value })}
                    placeholder="e.g. Acme Innovations"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={sampleForm.contactName}
                      onChange={(e) => setSampleForm({ ...sampleForm, contactName: e.target.value })}
                      placeholder="e.g. Rohan Mehta"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={sampleForm.email}
                      onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                      placeholder="rohan@acme.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={sampleForm.phone}
                      onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                      placeholder="+91 97697 04262"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                    Anticipated Bulk Quantity
                  </label>
                  <select
                    value={sampleForm.expectedQuantity}
                    onChange={(e) => setSampleForm({ ...sampleForm, expectedQuantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium bg-white"
                  >
                    <option>25 - 50 units</option>
                    <option>50 - 250 units</option>
                    <option>250 - 1,000 units</option>
                    <option>1,000+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                  Office Shipping Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <textarea
                    required
                    rows={2}
                    value={sampleForm.shippingAddress}
                    onChange={(e) => setSampleForm({ ...sampleForm, shippingAddress: e.target.value })}
                    placeholder="Floor, Building name, Street, Tech Park..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={sampleForm.city}
                  onChange={(e) => setSampleForm({ ...sampleForm, city: e.target.value })}
                  placeholder="City (e.g. Bangalore)"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                />
                <input
                  type="text"
                  required
                  value={sampleForm.pincode}
                  onChange={(e) => setSampleForm({ ...sampleForm, pincode: e.target.value })}
                  placeholder="PIN Code (e.g. 560001)"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
                />
              </div>

            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-3">
              <span className="text-[11px] text-stone-500">
                Sample cost is 100% credited against your final bulk order.
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-amber-950 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Submit Sample Request</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Sample Request Dispatched!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-stone-900">{sampleForm.contactName}</span>. Our enterprise gifting coordinator will contact you at <span className="font-semibold">{sampleForm.phone}</span> within 2 hours to confirm your sample box dispatch.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-amber-950 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

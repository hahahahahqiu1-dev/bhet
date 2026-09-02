import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/giftingData';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div 
      className="relative max-w-4xl mx-auto py-8 px-4 sm:px-8 bg-stone-900 rounded-3xl border border-stone-800 shadow-xl overflow-hidden text-stone-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id="testimonial-carousel"
    >
      {/* Background Decorative Quote Watermark */}
      <div className="absolute top-4 right-6 text-stone-800 pointer-events-none select-none">
        <Quote className="w-24 h-24 opacity-30" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <span>Client Success Stories</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Quote Content */}
        <div className="min-h-[110px] flex items-center">
          <p className="font-serif text-lg sm:text-xl text-stone-200 italic leading-relaxed">
            "{current.quote}"
          </p>
        </div>

        {/* Author Footer & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-amber-500 text-stone-950 font-bold font-serif text-base flex items-center justify-center shrink-0 shadow-sm">
              {current.avatarText}
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">{current.author}</div>
              <div className="text-xs text-amber-300/90 font-medium">
                {current.role}, <span className="text-stone-400">{current.company}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 flex items-center justify-center transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 flex items-center justify-center transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

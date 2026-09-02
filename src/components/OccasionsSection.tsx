import React from 'react';
import { 
  Users, 
  Award, 
  Handshake, 
  Sparkles, 
  Calendar, 
  Crown,
  ArrowRight
} from 'lucide-react';

interface OccasionsSectionProps {
  onOpenQuoteModal: (occasionTitle?: string) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({ onOpenQuoteModal }) => {
  const occasions = [
    {
      icon: Users,
      title: 'Employee Onboarding',
      desc: 'Welcome new hires with stylish starter kits and branded gear that make day one memorable.',
    },
    {
      icon: Award,
      title: 'Corporate Anniversaries',
      desc: 'Celebrate company milestones, years of service, and dedicated team achievements.',
    },
    {
      icon: Handshake,
      title: 'Client Appreciation',
      desc: 'Strengthen valued business partnerships with premium, memorable curated gift hampers.',
    },
    {
      icon: Sparkles,
      title: 'Festive & Holiday Gifting',
      desc: 'Diwali, New Year, and seasonal celebrations tailored with your company branding.',
    },
    {
      icon: Calendar,
      title: 'Conferences & Events',
      desc: 'Leave a lasting impression with functional attendee giveaways and conference delegate kits.',
    },
    {
      icon: Crown,
      title: 'VIP & Executive Gifting',
      desc: 'Bespoke luxury hampers and high-end executive gifts for key leadership and stakeholders.',
    },
  ];

  return (
    <section id="occasions" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Occasions We Cater To
          </h2>
          <div className="w-12 h-0.5 bg-[#A26E2C] mx-auto mt-2.5 mb-3.5 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Thoughtful gifts tailored for every business milestone, team celebration, and client moment.
          </p>
        </div>

        {/* 6 Occasions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occ, idx) => {
            const IconComp = occ.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#A26E2C] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {occ.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal(occ.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A26E2C] hover:text-[#8D5E24] transition-colors"
                  >
                    <span>Request Kit Ideas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


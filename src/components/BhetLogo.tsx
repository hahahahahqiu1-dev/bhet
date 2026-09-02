import React from 'react';

interface BhetLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  iconOnly?: boolean;
}

export const BhetLogo: React.FC<BhetLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showTagline = true,
  iconOnly = false,
}) => {
  // Size configurations
  const dimensions = {
    sm: { iconWidth: 28, iconHeight: 34, titleSize: 'text-xl', subSize: 'text-[8px]', gap: 'gap-2' },
    md: { iconWidth: 38, iconHeight: 46, titleSize: 'text-2xl sm:text-3xl', subSize: 'text-[9px] sm:text-[10px]', gap: 'gap-3' },
    lg: { iconWidth: 54, iconHeight: 64, titleSize: 'text-4xl sm:text-5xl', subSize: 'text-xs', gap: 'gap-4' },
    xl: { iconWidth: 72, iconHeight: 86, titleSize: 'text-5xl sm:text-6xl', subSize: 'text-sm', gap: 'gap-5' },
  }[size];

  const textColor = variant === 'dark' ? 'text-white' : variant === 'gold' ? 'text-amber-300' : 'text-stone-900';
  const subTextColor = variant === 'dark' ? 'text-amber-200/90' : variant === 'gold' ? 'text-amber-400' : 'text-stone-700';

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none ${className}`} id="bhet-brand-logo">
      {/* Golden Ribbon 'B' with Gift Bow Emblem */}
      <svg
        width={dimensions.iconWidth}
        height={dimensions.iconHeight}
        viewBox="0 0 160 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
      >
        <defs>
          {/* Rich 3D Gold Ribbon Gradients */}
          <linearGradient id="gold-grad-1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#F9E29D" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#B38728" />
            <stop offset="75%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          <linearGradient id="gold-grad-2" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#AA771C" />
            <stop offset="30%" stopColor="#E6CA65" />
            <stop offset="70%" stopColor="#FDF0A6" />
            <stop offset="100%" stopColor="#94621A" />
          </linearGradient>

          <linearGradient id="gold-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="40%" stopColor="#E5C158" />
            <stop offset="70%" stopColor="#BD8E2C" />
            <stop offset="100%" stopColor="#7E5316" />
          </linearGradient>

          <linearGradient id="bow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="45%" stopColor="#E5C055" />
            <stop offset="85%" stopColor="#9C6B1C" />
          </linearGradient>

          <filter id="gold-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#996515" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Ribbon Stem & Top Loop of B */}
        <g filter="url(#gold-glow)">
          {/* Main Ribbon B Backbone */}
          <path
            d="M 28 35 C 28 35 28 125 35 152 C 42 178 78 185 110 172 C 142 158 152 125 140 98 C 128 72 90 70 85 70 C 80 70 120 70 128 50 C 136 30 115 15 88 15 C 60 15 32 20 28 35 Z"
            fill="url(#gold-grad-1)"
          />

          {/* Inner cutout fold top loop */}
          <path
            d="M 46 38 C 55 32 80 30 92 38 C 104 46 98 62 82 65 C 68 67 46 64 46 38 Z"
            fill="url(#gold-grad-light)"
            opacity="0.95"
          />

          {/* Lower loop twist & ribbon fold */}
          <path
            d="M 48 88 C 65 80 115 85 124 112 C 132 135 118 158 92 162 C 68 166 48 150 48 120 Z"
            fill="url(#gold-grad-2)"
          />

          {/* Inner negative space for hollow B ribbon */}
          <path
            d="M 64 104 C 82 98 106 102 108 118 C 110 134 96 148 78 146 C 66 144 60 132 64 104 Z"
            fill={variant === 'dark' ? '#0c0a09' : variant === 'gold' ? '#1c1917' : '#fafaf9'}
          />

          {/* Inner negative space top */}
          <path
            d="M 52 42 C 60 36 82 34 88 42 C 94 50 86 58 72 60 C 58 60 50 54 52 42 Z"
            fill={variant === 'dark' ? '#0c0a09' : variant === 'gold' ? '#1c1917' : '#fafaf9'}
          />

          {/* Tied Gift Ribbon Bow on Top Curve */}
          {/* Bow Center Knot */}
          <ellipse cx="112" cy="46" rx="7" ry="9" fill="url(#bow-grad)" transform="rotate(-15 112 46)" />
          
          {/* Bow Upper Loop */}
          <path
            d="M 110 40 C 105 24 118 10 128 16 C 136 22 130 36 116 42 Z"
            fill="url(#gold-grad-light)"
          />
          <path
            d="M 112 40 C 108 26 118 16 124 20 C 128 24 122 34 115 41 Z"
            fill={variant === 'dark' ? '#0c0a09' : '#fafaf9'}
            opacity="0.8"
          />

          {/* Bow Right Ribbon Tail */}
          <path
            d="M 116 48 C 128 54 142 70 148 88 C 142 86 132 76 124 64 C 118 56 115 50 116 48 Z"
            fill="url(#gold-grad-1)"
          />

          {/* Bow Left Ribbon Tail */}
          <path
            d="M 108 50 C 98 62 86 78 80 94 C 86 90 98 80 106 68 C 110 60 110 54 108 50 Z"
            fill="url(#gold-grad-2)"
          />

          {/* Specular Highlight Sheen */}
          <path
            d="M 32 40 Q 32 140 40 160 Q 35 130 35 45 Z"
            fill="#FFFFFF"
            opacity="0.4"
          />
        </g>
      </svg>

      {/* Typography: BHET + CORPORATE GIFTING */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-extrabold ${dimensions.titleSize} tracking-[0.14em] uppercase leading-none ${textColor}`}
            style={{ fontFamily: "'Playfair Display', 'Cinzel', 'Bodoni MT', Georgia, serif" }}
          >
            BHET
          </span>
          {showTagline && (
            <span
              className={`font-sans font-semibold ${dimensions.subSize} tracking-[0.38em] uppercase ${subTextColor} mt-1.5 leading-tight`}
              style={{ letterSpacing: '0.34em' }}
            >
              CORPORATE GIFTING
            </span>
          )}
        </div>
      )}
    </div>
  );
};

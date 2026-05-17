'use client';

import { motion } from 'framer-motion';

type ProductBottleProps = {
  accent: string;
  deepAccent: string;
  size?: number;
  label?: string;
  shimmer?: boolean;
};

export const ProductBottle = ({
  accent,
  deepAccent,
  size = 280,
  label = 'Helen',
  shimmer = true,
}: ProductBottleProps) => {
  const id = label.replace(/\s+/g, '-').toLowerCase();
  return (
    <motion.svg
      viewBox="0 0 280 480"
      width={size}
      height={(size * 480) / 280}
      initial={{ y: 10 }}
      animate={{ y: [10, -10, 10] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="drop-shadow-[0_30px_60px_rgba(31,27,20,0.25)]"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`${accent}`} stopOpacity="0.6" />
          <stop offset="100%" stopColor={`${deepAccent}`} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`oil-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.65" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={deepAccent} />
        </linearGradient>
        <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="35%" stopColor="rgba(255,255,255,0)" />
          <stop offset="65%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
        </linearGradient>
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F1B14" />
          <stop offset="60%" stopColor="#3A3328" />
          <stop offset="100%" stopColor="#100E0A" />
        </linearGradient>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBF5E5" />
          <stop offset="40%" stopColor="#E5C779" />
          <stop offset="70%" stopColor="#B0822C" />
          <stop offset="100%" stopColor="#E5C779" />
        </linearGradient>
        <radialGradient id={`shine-${id}`} cx="0.3" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="140" cy="455" rx="80" ry="9" fill="#1F1B14" opacity="0.18" />

      <g>
        <rect x="116" y="10" width="48" height="22" rx="3" fill={`url(#cap-${id})`} />
        <rect x="118" y="14" width="44" height="2" fill={`url(#gold-${id})`} />
        <rect x="118" y="20" width="44" height="2" fill={`url(#gold-${id})`} opacity="0.6" />

        <rect x="124" y="32" width="32" height="38" fill={`url(#cap-${id})`} />
        <rect x="124" y="34" width="32" height="2" fill={`url(#gold-${id})`} opacity="0.75" />
        <rect x="124" y="64" width="32" height="2" fill={`url(#gold-${id})`} opacity="0.75" />

        <path
          d="M120 70h40c4 0 6 3 6 7v20c0 5 4 8 7 11 22 18 35 46 35 76v240c0 18-12 30-30 30H102c-18 0-30-12-30-30V184c0-30 13-58 35-76 3-3 7-6 7-11V77c0-4 2-7 6-7Z"
          fill={`url(#bg-${id})`}
        />
        <path
          d="M120 70h40c4 0 6 3 6 7v20c0 5 4 8 7 11 22 18 35 46 35 76v240c0 18-12 30-30 30H102c-18 0-30-12-30-30V184c0-30 13-58 35-76 3-3 7-6 7-11V77c0-4 2-7 6-7Z"
          fill={`url(#oil-${id})`}
          opacity="0.85"
        />

        <path
          d="M120 70h40c4 0 6 3 6 7v20c0 5 4 8 7 11 22 18 35 46 35 76v240c0 18-12 30-30 30H102c-18 0-30-12-30-30V184c0-30 13-58 35-76 3-3 7-6 7-11V77c0-4 2-7 6-7Z"
          fill={`url(#glass-${id})`}
        />

        <ellipse
          cx="100"
          cy="200"
          rx="14"
          ry="80"
          fill="rgba(255,255,255,0.55)"
          opacity="0.5"
        />

        <rect
          x="92"
          y="220"
          width="96"
          height="140"
          rx="4"
          fill="rgba(253,251,247,0.92)"
          stroke={accent}
          strokeWidth="0.8"
        />
        <text
          x="140"
          y="250"
          textAnchor="middle"
          fill="#8E6622"
          fontFamily="serif"
          fontSize="9"
          letterSpacing="3"
        >
          BOTANICAL
        </text>
        <line x1="106" y1="258" x2="174" y2="258" stroke={accent} strokeWidth="0.6" />
        <text
          x="140"
          y="290"
          textAnchor="middle"
          fill="#1F1B14"
          fontFamily="serif"
          fontSize="20"
          fontStyle="italic"
        >
          Helen
        </text>
        <text
          x="140"
          y="312"
          textAnchor="middle"
          fill="#3A3328"
          fontFamily="serif"
          fontSize="11"
          letterSpacing="1"
        >
          {label}
        </text>
        <line x1="106" y1="322" x2="174" y2="322" stroke={accent} strokeWidth="0.6" />
        <text
          x="140"
          y="340"
          textAnchor="middle"
          fill="#8E6622"
          fontFamily="serif"
          fontSize="7"
          letterSpacing="3"
        >
          PURE · COLD-PRESSED
        </text>
      </g>

      {shimmer && (
        <motion.ellipse
          cx="100"
          cy="170"
          rx="60"
          ry="90"
          fill={`url(#shine-${id})`}
          animate={{ cx: [80, 200, 80], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </motion.svg>
  );
};

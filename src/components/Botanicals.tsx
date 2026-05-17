'use client';

import { motion } from 'framer-motion';
import type { SVGProps } from 'react';

type LeafProps = SVGProps<SVGSVGElement> & {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const BotanicalLeaf = ({ variant = 1, ...props }: LeafProps) => {
  switch (variant) {
    case 1:
      return (
        <svg viewBox="0 0 200 320" fill="none" {...props}>
          <defs>
            <linearGradient id="leaf1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A5B587" />
              <stop offset="55%" stopColor="#647445" />
              <stop offset="100%" stopColor="#34402A" />
            </linearGradient>
          </defs>
          <path
            d="M100 10C40 80 20 180 60 280c10 25 30 35 50 30 30-8 60-40 70-90 12-65-10-150-80-210Z"
            fill="url(#leaf1)"
          />
          <path
            d="M100 30c-5 80-10 160 0 250"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            fill="none"
          />
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none">
            <path d="M100 70c-12 4-24 10-32 18" />
            <path d="M100 110c-16 4-30 12-40 22" />
            <path d="M100 150c-18 4-34 14-44 26" />
            <path d="M100 190c-18 4-32 14-42 26" />
            <path d="M100 70c12 4 24 10 32 18" />
            <path d="M100 110c16 4 30 12 40 22" />
            <path d="M100 150c18 4 34 14 44 26" />
            <path d="M100 190c18 4 32 14 42 26" />
          </g>
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 280 200" fill="none" {...props}>
          <defs>
            <linearGradient id="leaf2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#83965F" />
              <stop offset="100%" stopColor="#4D5934" />
            </linearGradient>
          </defs>
          <g>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = -50 + i * 20;
              return (
                <g
                  key={i}
                  transform={`translate(140 100) rotate(${angle}) translate(-140 -100)`}
                >
                  <ellipse
                    cx="220"
                    cy="100"
                    rx="70"
                    ry="16"
                    fill="url(#leaf2)"
                    opacity={0.9 - i * 0.05}
                  />
                  <ellipse
                    cx="220"
                    cy="100"
                    rx="70"
                    ry="16"
                    stroke="rgba(255,255,255,0.2)"
                    fill="none"
                  />
                </g>
              );
            })}
            <circle cx="140" cy="100" r="4" fill="#34402A" />
          </g>
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 200 200" fill="none" {...props}>
          <defs>
            <radialGradient id="leaf3" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0%" stopColor="#E5C779" />
              <stop offset="60%" stopColor="#B0822C" />
              <stop offset="100%" stopColor="#6C4D19" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="50" fill="url(#leaf3)" opacity="0.85" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(229,199,121,0.4)" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(229,199,121,0.18)" />
          <circle cx="100" cy="100" r="100" fill="none" stroke="rgba(229,199,121,0.08)" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 200 300" fill="none" {...props}>
          <defs>
            <linearGradient id="leaf4" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#A5B587" />
              <stop offset="100%" stopColor="#34402A" />
            </linearGradient>
          </defs>
          <path
            d="M100 10c-30 60-40 120-30 180 5 30 15 60 30 100 15-40 25-70 30-100 10-60 0-120-30-180Z"
            fill="url(#leaf4)"
          />
          <path d="M100 10v280" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        </svg>
      );
    case 5:
      return (
        <svg viewBox="0 0 240 240" fill="none" {...props}>
          <defs>
            <linearGradient id="leaf5" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C8D3B2" />
              <stop offset="100%" stopColor="#647445" />
            </linearGradient>
          </defs>
          {[0, 60, 120, 180, 240, 300].map((rot) => (
            <g key={rot} transform={`rotate(${rot} 120 120)`}>
              <path
                d="M120 120c0-40 10-70 40-90-15 30-15 60 0 90-30-20-55-15-80 10 20-25 25-50 40-10Z"
                fill="url(#leaf5)"
                opacity="0.6"
              />
            </g>
          ))}
          <circle cx="120" cy="120" r="12" fill="#E5C779" opacity="0.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 200" fill="none" {...props}>
          <defs>
            <radialGradient id="leaf6" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0%" stopColor="rgba(229,199,121,0.7)" />
              <stop offset="100%" stopColor="rgba(229,199,121,0)" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#leaf6)" />
        </svg>
      );
  }
};

export const OilDrop = ({
  className,
  size = 60,
}: {
  className?: string;
  size?: number;
}) => (
  <svg viewBox="0 0 100 130" width={size} height={size * 1.3} className={className}>
    <defs>
      <radialGradient id="drop" cx="0.4" cy="0.4" r="0.6">
        <stop offset="0%" stopColor="#FBF5E5" />
        <stop offset="50%" stopColor="#E5C779" />
        <stop offset="100%" stopColor="#8E6622" />
      </radialGradient>
    </defs>
    <path
      d="M50 5C50 35 15 50 15 85a35 35 0 0 0 70 0C85 50 50 35 50 5Z"
      fill="url(#drop)"
    />
    <ellipse cx="38" cy="55" rx="12" ry="20" fill="rgba(255,255,255,0.45)" />
  </svg>
);

type FloatingProps = {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
};

export const FloatingLeaf = ({
  variant,
  top,
  left,
  right,
  bottom,
  size = 140,
  rotate = 0,
  opacity = 0.45,
  delay = 0,
  duration = 10,
}: FloatingProps) => (
  <motion.div
    className="pointer-events-none absolute"
    style={{ top, left, right, bottom, width: size, height: size, opacity }}
    initial={{ y: 0, rotate }}
    animate={{
      y: [0, -24, 0, 16, 0],
      rotate: [rotate, rotate + 6, rotate - 4, rotate + 2, rotate],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <BotanicalLeaf variant={variant} style={{ width: '100%', height: '100%' }} />
  </motion.div>
);

export const GoldOrb = ({
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.5,
  delay = 0,
}: {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  delay?: number;
}) => (
  <motion.div
    className="pointer-events-none absolute rounded-full blur-3xl"
    style={{
      top,
      left,
      right,
      bottom,
      width: size,
      height: size,
      background:
        'radial-gradient(circle at 50% 50%, rgba(229,199,121,0.65) 0%, rgba(212,174,90,0.35) 35%, rgba(212,174,90,0) 70%)',
      opacity,
    }}
    animate={{
      scale: [1, 1.12, 0.95, 1.05, 1],
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 15, -10, 0],
    }}
    transition={{
      duration: 18,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

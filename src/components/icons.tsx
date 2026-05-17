import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const LeafIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <path d="M52 12C30 12 14 28 12 52c14-2 26-8 32-18 6-10 8-22 8-22Z" />
    <path d="M12 52c10-14 22-26 38-38" />
  </svg>
);

export const DropIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <path d="M32 6c0 14-14 22-14 36a14 14 0 0 0 28 0C46 28 32 20 32 6Z" />
    <path d="M28 44c1 3 3 5 6 6" strokeLinecap="round" />
  </svg>
);

export const SunIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <circle cx="32" cy="32" r="10" />
    <g strokeLinecap="round">
      <path d="M32 6v6M32 52v6M6 32h6M52 32h6M14 14l4 4M46 46l4 4M14 50l4-4M46 18l4-4" />
    </g>
  </svg>
);

export const SparkleIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <path d="M32 6c2 12 8 18 20 20-12 2-18 8-20 20-2-12-8-18-20-20 12-2 18-8 20-20Z" />
  </svg>
);

export const ShieldIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <path d="M32 6 12 14v18c0 14 12 22 20 26 8-4 20-12 20-26V14L32 6Z" />
    <path d="m24 32 6 6 12-12" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <path d="M32 54S10 41 10 25a12 12 0 0 1 22-7 12 12 0 0 1 22 7c0 16-22 29-22 29Z" />
  </svg>
);

export const benefitIcons = {
  leaf: LeafIcon,
  drop: DropIcon,
  sun: SunIcon,
  sparkle: SparkleIcon,
  shield: ShieldIcon,
  heart: HeartIcon,
} as const;

export const OdetteMonogram = (props: IconProps) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    <path
      d="M50 22c-9 0-15 7-15 18 0 6 3 11 8 14-4 3-7 8-7 14 0 7 6 12 14 12s14-5 14-12c0-6-3-11-7-14 5-3 8-8 8-14 0-11-6-18-15-18Z"
      fill="currentColor"
      opacity="0.18"
    />
    <text
      x="50"
      y="60"
      textAnchor="middle"
      fontFamily="serif"
      fontSize="36"
      fontWeight="300"
      fill="currentColor"
    >
      O
    </text>
  </svg>
);

import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 98 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M37.7929 0.114258L0.43634 37.3876L37.7929 74.661' stroke='white' strokeWidth={9} />
    <path d='M60.2071 0.114258L97.5637 37.3876L60.2071 74.661' stroke='white' strokeWidth={9} />
    <path d='M31.5668 0.114258L68.9233 37.3876L31.5668 74.661' stroke='white' strokeWidth={9} />
  </svg>
);

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };

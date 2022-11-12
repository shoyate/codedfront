import { memo, SVGProps } from 'react';

const AkarIconsLinkedinFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23.5725 22.4225H32.8575V27.0475C34.195 24.3875 37.625 21.9975 42.7775 21.9975C52.655 21.9975 55 27.2925 55 37.0075V55H45V39.22C45 33.6875 43.6625 30.5675 40.2575 30.5675C35.535 30.5675 33.5725 33.93 33.5725 39.2175V55H23.5725V22.4225V22.4225ZM6.425 54.575H16.425V21.9975H6.425V54.575V54.575ZM17.8575 11.375C17.8579 12.2132 17.6916 13.0431 17.3685 13.8165C17.0453 14.5898 16.5716 15.2913 15.975 15.88C14.766 17.0816 13.1295 17.7541 11.425 17.75C9.72347 17.7489 8.09078 17.078 6.88 15.8825C6.28553 15.2918 5.81346 14.5896 5.49086 13.8161C5.16825 13.0426 5.00145 12.2131 5 11.375C5 9.6825 5.675 8.0625 6.8825 6.8675C8.09221 5.6704 9.7256 4.99925 11.4275 5C13.1325 5 14.7675 5.6725 15.975 6.8675C17.18 8.0625 17.8575 9.6825 17.8575 11.375Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(AkarIconsLinkedinFillIcon);
export { Memo as AkarIconsLinkedinFillIcon };

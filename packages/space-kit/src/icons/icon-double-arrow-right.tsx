import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    width={24}
    height={25}
    {...props}
  >
    <title>{'icon-chevron-right'}</title>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="m12.153 23.307 10.629-10.629c.29-.29.29-.76 0-1.05h0L12.153.998M1 23.307l10.628-10.629c.29-.29.29-.76.001-1.05h0L1 .998" />
    </g>
  </svg>
);
export default SvgComponent;

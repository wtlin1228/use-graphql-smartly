import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title>{'streamline-icon-time-clock-circle@24x24 copy'}</title>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
    >
      <path
        strokeLinejoin="round"
        d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5ZM12 12V5.5"
      />
      <path d="M12 12h5.5" />
    </g>
  </svg>
);
export default SvgComponent;

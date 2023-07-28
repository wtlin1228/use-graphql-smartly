import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 140"
    width={140}
    height={140}
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8.749995}
      d="M66.838 124.07a9.333 9.333 0 0 0 6.33 0 79.683 79.683 0 0 1 50.75-2.614 9.374 9.374 0 0 0 11.701-9.094V28.747a9.374 9.374 0 0 0-6.533-8.914A80.955 80.955 0 0 0 73.167 21a9.392 9.392 0 0 1-6.329 0 80.972 80.972 0 0 0-55.924-1.167 9.374 9.374 0 0 0-6.539 8.914v83.615a9.374 9.374 0 0 0 11.702 9.094 79.7 79.7 0 0 1 50.761 2.613zM70 21.477v103.145"
    />
  </svg>
);
export default SvgComponent;

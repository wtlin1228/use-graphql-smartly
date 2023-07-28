import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title>
      {'Exported from Streamline App (https://app.streamlineicons.com)'}
    </title>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.5.75 10.72 10.72a.749.749 0 0 1 .001 1.059l-.001.001L5.5 23.25"
    />
  </svg>
);
export default SvgComponent;

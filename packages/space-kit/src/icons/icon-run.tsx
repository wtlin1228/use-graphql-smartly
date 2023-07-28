import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={40}
    height={40}
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
      strokeWidth={2.5000050000000003}
      d="M3.897 5.425v29.15a2.5 2.5 0 0 0 3.681 2.203l27.205-14.575a2.5 2.5 0 0 0 0-4.406L7.578 3.222a2.5 2.5 0 0 0-3.681 2.203z"
    />
  </svg>
);
export default SvgComponent;

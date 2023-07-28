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
    <path d="M20.06 3.5H3.94A3.94 3.94 0 0 0 0 7.44v9.12a3.94 3.94 0 0 0 3.94 3.94h16.12A3.94 3.94 0 0 0 24 16.56V7.44a3.94 3.94 0 0 0-3.94-3.94zM16.54 12l-6.77 4.36a.5.5 0 0 1-.77-.42V7.28a.5.5 0 0 1 .77-.42l6.77 4.33a.5.5 0 0 1 0 .84V12z" />
  </svg>
);
export default SvgComponent;

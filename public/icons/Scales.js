import * as React from 'react';
const SvgScales = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#292d32">
      <path
        d="M8 22h8c3 0 5-2 5-5V7c0-3-2-5-5-5H8C5 2 3 4 3 7v10c0 3 2 5 5 5"
        opacity={0.4}
      />
      <path d="M17.5 8a8.274 8.274 0 0 0-11 0c-.14.13-.17.33-.07.48l2.18 3.5c.06.09.16.16.26.17.11.02.22-.02.3-.09a4.244 4.244 0 0 1 5.64 0c.07.06.16.09.25.09h.05c.11-.02.21-.08.26-.17l2.18-3.5c.12-.15.09-.35-.05-.48" />
    </g>
  </svg>
);
export default SvgScales;

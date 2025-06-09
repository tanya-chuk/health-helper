import * as React from 'react';
const SvgCalendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fill="#bdc3c7"
      d="M5 4c-1.105 0-2 .9-2 2v14c0 1.1.895 2 2 2h14c1.105 0 2-.9 2-2V6c0-1.1-.895-2-2-2h-8z"
    />
    <path
      fill="#ecf0f1"
      d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-8z"
    />
    <path fill="#e74c3c" d="M5 3a2 2 0 0 0-2 2v4h18V5a2 2 0 0 0-2-2h-8z" />
    <path
      fill="#c0392b"
      d="M7.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0M19.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0"
    />
    <g fill="#bdc3c7">
      <path d="M5 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM5 14v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM5 17v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2z" />
    </g>
    <path
      fill="#95a5a6"
      d="M6 1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1"
    />
    <path
      fill="#bdc3c7"
      d="M6 1c-.552 0-1 .4-1 1v2h2V2c0-.6-.448-1-1-1m12 0c-.552 0-1 .4-1 1v2h2V2c0-.6-.448-1-1-1"
    />
  </svg>
);
export default SvgCalendar;

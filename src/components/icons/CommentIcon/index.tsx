import React from "react";

const CommentIcon: React.FC = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66668 12.6667H5.33334C2.66668 12.6667 1.33334 12 1.33334 8.66668V5.33334C1.33334 2.66668 2.66668 1.33334 5.33334 1.33334H10.6667C13.3333 1.33334 14.6667 2.66668 14.6667 5.33334V8.66668C14.6667 11.3333 13.3333 12.6667 10.6667 12.6667H10.3333C10.1267 12.6667 9.92668 12.7667 9.80001 12.9333L8.80001 14.2667C8.36001 14.8533 7.64001 14.8533 7.20001 14.2667L6.20001 12.9333C6.09334 12.7867 5.84668 12.6667 5.66668 12.6667Z"
        stroke="#181818"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66666 5.33334H11.3333"
        stroke="#181818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66666 8.66666H8.66666"
        stroke="#181818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommentIcon;

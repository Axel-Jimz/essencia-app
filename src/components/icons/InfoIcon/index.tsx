import React from 'react';

const InfoIcon: React.FC = () => {
  return (
    <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00001 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 7.99999C14.6667 4.33333 11.6667 1.33333 8.00001 1.33333C4.33334 1.33333 1.33334 4.33333 1.33334 7.99999C1.33334 11.6667 4.33334 14.6667 8.00001 14.6667Z"
            stroke="#181818"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 5.33333V8.66666"
            stroke="#181818"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99609 10.6667H8.00208"
            stroke="#181818"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
  );
};

export default InfoIcon;
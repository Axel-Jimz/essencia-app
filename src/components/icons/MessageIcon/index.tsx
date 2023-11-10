import React from 'react';

const  MessageIcon: React.FC = () => {
  return (
    <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3333 13.6667H4.66668C2.66668 13.6667 1.33334 12.6667 1.33334 10.3333V5.66667C1.33334 3.33334 2.66668 2.33334 4.66668 2.33334H11.3333C13.3333 2.33334 14.6667 3.33334 14.6667 5.66667V10.3333C14.6667 12.6667 13.3333 13.6667 11.3333 13.6667Z"
            stroke="#181818"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3333 6L9.24665 7.66667C8.55999 8.21333 7.43332 8.21333 6.74665 7.66667L4.66666 6"
            stroke="#181818"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
  );
};

export default  MessageIcon;
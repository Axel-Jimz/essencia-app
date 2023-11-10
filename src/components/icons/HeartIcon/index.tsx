import React from "react";

interface HeartIconProps {
  active: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({ active }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill={active ? "#ff5252" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41334 13.8733C8.18668 13.9533 7.81334 13.9533 7.58668 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79335C1.33334 3.73335 2.99334 2.06668 5.04001 2.06668C6.25334 2.06668 7.32668 2.65335 8.00001 3.56001C8.67334 2.65335 9.75334 2.06668 10.96 2.06668C13.0067 2.06668 14.6667 3.73335 14.6667 5.79335C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
        stroke="#181818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;

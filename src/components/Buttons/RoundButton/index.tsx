import React from "react";
import { RoundButtonProps } from "./props";
import "./styles/index.css";
import "./styles/theme.css";

const RoundButton: React.FC<RoundButtonProps> = ({
  icon,
  onClick,
  tooltipMessage,
  bg,
  bgOpacity,
}) => {
  const classes = ['round-button'];
  
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {icon}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default RoundButton;

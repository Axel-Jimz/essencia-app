import React from "react";
import { RectangleButtonProps } from "./props";
import "./styles/index.css";
import "./styles/theme.css";

const RectangleButton: React.FC<RectangleButtonProps> = ({
  children,
  icon,
  onClick,
  unstyled,
  bg,
  bgOpacity,
  tooltipMessage,
}) => {
  const classes = ['rectangle-button'];
  
  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);
  unstyled && classes.push(`unstyled`);

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {!unstyled && icon && <div className="icon-wrapper">{icon}</div>}
      {children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default RectangleButton;

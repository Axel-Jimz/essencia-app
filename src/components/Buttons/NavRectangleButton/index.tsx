import React from "react";
import { NavRectangleButtonProps } from "./props";
import { NavLink } from "react-router-dom";

import "./styles/index.css";
import "./styles/theme.css";

const NavRectangleButton: React.FC<NavRectangleButtonProps> = ({
  children,
  icon,
  navigateTo,
  unstyled,
  bg,
  bgOpacity,
  tooltipMessage,
}) => {
  const classes = ['nav-rectangle-button'];

  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);
  unstyled && classes.push(`unstyled`);

  return (
    <NavLink className={classes.join(' ')} to={navigateTo}>
      {!unstyled && icon && <div className="icon-wrapper">{icon}</div>}
      {children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </NavLink>
  );
};

export default NavRectangleButton;

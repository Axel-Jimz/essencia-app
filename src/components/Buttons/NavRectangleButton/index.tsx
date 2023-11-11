import React from "react";
import { NavRectangleButtonProps } from "./props";
import { NavLink } from "react-router-dom";
import "./styles/index.css";
import "./styles/theme.css";

const NavRectangleButton: React.FC<NavRectangleButtonProps> = ({
  children,
  icon,
  navigateTo,
  tooltipMessage,
  bg,
}) => {
  const classes = ['nav-rectangle-button'];

  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);

  return (
    <NavLink className={classes.join(' ')} to={navigateTo}>
      {icon && <div className="icon-wrapper">{icon}</div>}
      {children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </NavLink>
  );
};

export default NavRectangleButton;

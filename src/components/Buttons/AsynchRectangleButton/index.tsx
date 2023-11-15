import React, { useContext, useState } from "react";
import { AsynchRectangleButtonProps } from "./props";
import { NotificationsContext } from "../../../state/contexts/NotificationsContext";
import LoadingIcon from "../../icons/LoadingIcon";
import "./styles/index.css";
import "./styles/theme.css";

const AsynchRectangleButton: React.FC<AsynchRectangleButtonProps> = ({
  children,
  icon,
  onClick,
  unstyled,
  tooltipMessage,
  bg,
  bgOpacity,
  successTitle,
  successDescription,
  errorTitle,
  errorDescription,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showNotification } = useContext(NotificationsContext);

  const classes = ['asynch-rectangle-button'];

  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);
  unstyled && classes.push(`unstyled`);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick?.();
      successTitle && successDescription && showNotification('success', successTitle, successDescription);
    } catch (error) {
      console.error(error);
      errorTitle && errorDescription && showNotification('error', errorTitle, errorDescription);
    }
    setIsLoading(false);
  };

  return (
    <button className={classes.join(' ')} onClick={handleClick} disabled={isLoading}>
      {!unstyled && icon && <div className="icon-wrapper">{icon}</div>}
      {isLoading ? <LoadingIcon /> : children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default AsynchRectangleButton;
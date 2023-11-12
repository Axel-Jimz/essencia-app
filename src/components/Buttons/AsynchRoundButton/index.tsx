import React, { useContext, useState } from "react";
import { AsynchRectangleButtonProps } from "../AsynchRectangleButton/props";
import { NotificationsContext } from "../../../state/contexts/NotificationsContext";
import LoadingIcon from "../../icons/LoadingIcon";
import "./styles/index.css";
import "./styles/theme.css";

const AsynchRectangleButton: React.FC<AsynchRectangleButtonProps> = ({
  children,
  icon,
  onClick,
  tooltipMessage,
  bg,
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

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick?.();
      showNotification('success', successTitle, successDescription);
    } catch (error) {
      console.error(error);
      showNotification('error', errorTitle, errorDescription);
    }
    setIsLoading(false);
  };

  return (
    <button className={classes.join(' ')} onClick={handleClick} disabled={isLoading}>
      {icon && <div className="icon-wrapper">{icon}</div>}
      {isLoading ? <LoadingIcon /> : children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default AsynchRectangleButton;
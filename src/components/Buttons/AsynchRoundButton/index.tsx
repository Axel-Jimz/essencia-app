import React, { useContext, useState } from "react";
import { AsynchRoundButtonProps } from "./props";
import { NotificationContext } from "../../../state/contexts/NotificationContext";
import LoadingIcon from "../../icons/LoadingIcon";
import "./styles/index.css";
import "./styles/theme.css";

const AsynchRoundButton: React.FC<AsynchRoundButtonProps> = ({
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
  const { showNotification } = useContext(NotificationContext);

  const classes = ['asynch-round-button'];

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
      {isLoading ? <LoadingIcon /> : icon}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default AsynchRoundButton;

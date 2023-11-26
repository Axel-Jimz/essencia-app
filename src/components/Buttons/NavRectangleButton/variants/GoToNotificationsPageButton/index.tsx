import React, { useContext } from "react";
import NotificationIcon from "../../../../icons/NotificationIcon";
import NavRectangleButton from "../..";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import useViewedNotifications from "./hooks/useViewedNotifications";

const GoToNotificationsPageButton: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  const { viewedNotificationsData } = useViewedNotifications(userId);

  return (
    <NavRectangleButton
      icon={<NotificationIcon />}
      navigateTo="/notifications"
      bg="gray"
      bgOpacity="40"
      showNotificationDot={viewedNotificationsData && true}
    >
      Notificaciones
    </NavRectangleButton>
  );
};

export default GoToNotificationsPageButton;

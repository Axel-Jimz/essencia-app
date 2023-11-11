import React from "react";
import { NotificationsProviderProps, NotificationStatusProps } from "./props";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import useNotification from "./hook/useNotification";
import NoticeNotification from "../../../components/notifications/NoticeNotification";

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
  const { notifications, showNotification } = useNotification();

  const contextValue = {
    showNotification: (status: NotificationStatusProps['status'], title: string, message: string) => {
      showNotification(status, title, message);
    }
  };

  return (
    <NotificationsContext.Provider value={contextValue}>
      {children}
      {notifications.map((notification) => (
        <NoticeNotification key={notification.id} status={notification.status} title={notification.title} message={notification.message} />
      ))}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;

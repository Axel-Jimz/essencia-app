import React from "react";
import { NotificationProviderProps, NotificationStatusProps } from "./props";
import { NotificationContext } from "../../contexts/NotificationContext";
import useNotification from "./hook/useNotification";
import NoticeNotification from "../../../components/Notifications/NoticeNotification";

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { notifications, showNotification } = useNotification();

  const contextValue = {
    showNotification: (status: NotificationStatusProps['status'], title: string, message: string) => {
      showNotification(status, title, message);
    }
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {notifications.map((notification) => (
        <NoticeNotification key={notification.id} status={notification.status} title={notification.title} message={notification.message} />
      ))}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

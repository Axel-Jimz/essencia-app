import React from "react";
import { NotificationProviderProps } from "./types";
import { NotificationContext } from "../../contexts/NotificationContext";
import Notificacion from "../../../components/Notification";
import useNotification from "./hook/useNotification";

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { notification, showNotification } = useNotification();

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification.visible && <Notificacion message={notification.message} />}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

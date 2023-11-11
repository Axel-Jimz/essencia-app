import { useState, useEffect } from "react";
import { NotificationProps, NotificationStatusProps } from "../../props";

const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const showNotification = (status: NotificationStatusProps['status'], title: string, message: string) => {
    const newNotification: NotificationProps = {
      id: Date.now(),
      visible: true,
      status,
      title,
      message,
    };

    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(() => {
        setNotifications((prevNotifications) => prevNotifications.slice(1));
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [notifications]);

  return { notifications, showNotification };
};

export default useNotification;

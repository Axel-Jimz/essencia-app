import { useState, useEffect } from "react";
import { NotificationProps, NotificationStatusProps } from "../../types";

const useNotification = () => {
  const [notification, setNotification] = useState<NotificationProps>({
    visible: false,
    status: null,
    title: '',
    message: '',
  });

  const showNotification = (status: NotificationStatusProps['status'], title: string, message: string, ) => {
    setNotification({ visible: true, status, title, message });
  };

  useEffect(() => {
    if (notification.visible) {
      const timeout = setTimeout(() => {
        setNotification({ visible: false, status: null, title: '', message: '' });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return { notification, showNotification };
};

export default useNotification;

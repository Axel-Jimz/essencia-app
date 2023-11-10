import { useState, useEffect } from "react";
import { NotificationProps } from "../../types";

const useNotification = () => {
  const [notification, setNotification] = useState<NotificationProps>({
    visible: false,
    message: "",
  });

  const showNotification = (message: string) => {
    setNotification({ visible: true, message });
  };

  useEffect(() => {
    if (notification.visible) {
      const timeout = setTimeout(() => {
        setNotification({ visible: false, message: "" });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return { notification, showNotification };
};

export default useNotification;

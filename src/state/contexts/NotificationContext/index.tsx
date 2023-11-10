import { createContext } from "react";
import { NotificationContextProps } from "./props";

export const NotificationContext = createContext<NotificationContextProps>({
    showNotification: () => {},
});
  
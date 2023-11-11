import { createContext } from "react";
import { NotificationsContextProps } from "./props";

export const NotificationsContext = createContext<NotificationsContextProps>({
    showNotification: () => {},
});
  
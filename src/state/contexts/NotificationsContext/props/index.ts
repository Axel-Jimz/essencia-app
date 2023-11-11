export interface NotificationsContextProps {
  showNotification: (
    status: "success" | "error" | "info" | "warning" | null,
    title: string,
    message: string,
  ) => void;
}

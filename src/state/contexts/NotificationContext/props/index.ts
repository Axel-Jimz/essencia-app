export interface NotificationContextProps {
  showNotification: (
    status: "success" | "error" | "info" | "warning" | null,
    title: string,
    message: string,
    
  ) => void;
}

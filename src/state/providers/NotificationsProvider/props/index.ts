export interface NotificationsProviderProps {
  children: React.ReactNode;
}

export interface NotificationProps {
  id: number;
  visible: boolean;
  status: 'success' | 'error' | 'info' | 'warning' | null;
  title: string;
  message: string;
}

export interface NotificationStatusProps {
  status: 'success' | 'error' | 'info' | 'warning' | null;
}
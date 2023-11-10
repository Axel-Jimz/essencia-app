export interface NotificationProviderProps {
  children: React.ReactNode;
}

export interface NotificationProps {
  visible: boolean;
  status: 'success' | 'error' | 'info' | 'warning' | null;
  title: string;
  message: string;
}

export interface NotificationStatusProps {
  status: 'success' | 'error' | 'info' | 'warning' | null;
}
export interface NoticeNotificationProps {
    status: 'success' | 'error' | 'info' | 'warning' | null;
    title: string;
    message: string;
}
export interface AsynchRectangleButtonProps {
    children: React.ReactNode;
    icon?: React.ReactElement;
    onClick: () => Promise<void>;
    tooltipMessage?: string;
    bg: 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'pink' | 'orange' | 'gray';
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;

}

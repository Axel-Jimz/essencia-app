export interface RectangleButtonProps {
    children: React.ReactNode;
    icon?: React.ReactElement;
    onClick?: () => void;
    tooltipMessage?: string;
    bg: 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'pink' | 'orange' | 'gray';
}

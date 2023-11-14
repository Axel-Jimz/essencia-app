export interface AsynchRectangleButtonProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick: () => void;
  unstyled?: boolean;
  tooltipMessage?: string;
  bg?:
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "purple"
    | "pink"
    | "orange"
    | "white"
    | "gray";
  successTitle?: string;
  successDescription?: string;
  errorTitle?: string;
  errorDescription?: string;
  
}
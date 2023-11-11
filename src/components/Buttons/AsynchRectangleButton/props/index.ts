export interface AsynchRectangleButtonProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick: () => void;
  tooltipMessage?: string;
  bg:
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "purple"
    | "pink"
    | "orange"
    | "white"
    | "gray";
  successTitle: string;
  successDescription: string;
  errorTitle: string;
  errorDescription: string;
}

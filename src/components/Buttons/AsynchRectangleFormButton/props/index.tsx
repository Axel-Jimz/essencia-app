export interface AsynchRectangleFormButtonProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  isSubmitting: boolean;
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
  bgOpacity?: 
    | "10" 
    | "20" 
    | "40" 
    | "80";
}

export interface NavRectangleButtonProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  navigateTo: string;
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
}

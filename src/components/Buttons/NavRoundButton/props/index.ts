export interface NavRoundButtonProps {
  icon: React.ReactElement;
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
  bgOpacity?: 
    |"10" 
    | "20" 
    | "40" 
    | "80";
}

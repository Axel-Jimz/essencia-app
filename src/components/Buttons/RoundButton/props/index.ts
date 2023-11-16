export interface RoundButtonProps {
  icon: React.ReactElement;
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
  bgOpacity?: "10" | "20" | "40" | "80";
}

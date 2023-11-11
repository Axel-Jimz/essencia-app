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
    | "gray";
}

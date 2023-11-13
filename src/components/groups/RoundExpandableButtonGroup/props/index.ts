export interface RoundExpandableButtonGroupPropsProps {
  children: React.ReactNode;
  icon: React.ReactElement;
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
  tooltipMessage?: string;
  id: string;
}

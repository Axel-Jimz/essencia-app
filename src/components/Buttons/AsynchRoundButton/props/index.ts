export interface AsynchRoundButtonProps {
  icon: React.ReactElement;
  onClick: () => Promise<void> | null;
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

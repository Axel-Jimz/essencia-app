import { Colors, Sizes, Weights } from "../types";

export interface ParagraphProps {
    children: string;
    size: Sizes;
    weight: Weights;
    color: Colors;
    style?: React.CSSProperties;
    enableReadMore?: boolean;
  }
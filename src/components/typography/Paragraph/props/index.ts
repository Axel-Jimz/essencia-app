import { Colors, Sizes, Weights } from "../types";

export interface ParagraphProps {
    children: React.ReactNode;
    size: Sizes;
    weight: Weights;
    color: Colors;
    style?: React.CSSProperties;
  }
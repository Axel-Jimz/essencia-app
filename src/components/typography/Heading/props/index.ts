import { Colors, Families, Headings, Sizes, Weights } from "../types";

export interface HeadingProps {
  children: React.ReactNode;
  family: Families;
  as: Headings;
  size: Sizes;
  weight: Weights;
  color: Colors;
}

import { HTMLAttributes } from "react";

export type ElementTypeProps<Element extends HTMLElement> = {
  component?: React.ElementType;
} & HTMLAttributes<Element>;

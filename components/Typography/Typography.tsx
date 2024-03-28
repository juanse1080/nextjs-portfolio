import { ElementTypeProps } from "@portfolio/types";
import { mergeCls } from "@portfolio/utils";
import { forwardRef } from "react";

export type TypographyProps<
  Element extends HTMLElement = HTMLParagraphElement
> = ElementTypeProps<Element> & {
  variant?: "title" | "subtitle" | "body";
};

const Typography = forwardRef<
  HTMLParagraphElement,
  TypographyProps<HTMLParagraphElement>
>(
  (
    { className, variant = "body", component: Component = "p", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={mergeCls(
          {
            "2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl text-3xl":
              variant === "title",
            "2xl:text-5xl xl:text-8xl lg:text-5xl md:text-5xl text-3xl":
              variant === "subtitle",
            "2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm":
              variant === "body",
          },
          className
        )}
        {...props}
      />
    );
  }
);

export default Typography;

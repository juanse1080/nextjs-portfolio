import { ElementTypeProps } from "@portfolio/types";
import { mergeCls } from "@portfolio/utils";
import { ReactNode, forwardRef } from "react";

export type AppBarItemProps<Element extends HTMLElement = HTMLLIElement> = Omit<
  ElementTypeProps<Element>,
  "children"
> & {
  name: string;
  label: ReactNode;
  selected?: boolean;
};

const AppBarItem = forwardRef<HTMLLIElement, AppBarItemProps<HTMLLIElement>>(
  (
    { name, label, className, selected, component: Component = "li", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        aria-label={name}
        className={mergeCls(
          "2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs",
          "py-1 px-2 md:px-3 lg:px-5",
          "transition-colors duration-300",
          "rounded-full border-2 border-transparent",
          { "bg-white": selected },
          className
        )}
        {...props}
      >
        {label}
      </Component>
    );
  }
);

export default AppBarItem;

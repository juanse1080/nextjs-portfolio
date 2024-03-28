"use client";

import { ElementTypeProps } from "@portfolio/types";
import { mergeCls } from "@portfolio/utils";
import { usePathname } from "next/navigation";
import AppBarItem, { AppBarItemProps } from "../AppBarItem";

export type AppBarProps<Element extends HTMLElement = HTMLUListElement> = Omit<
  ElementTypeProps<Element>,
  "children"
> & {
  items: AppBarItemProps<HTMLElement>[];
};

const AppBar = ({
  items,
  className,
  component: Component = "ul",
  ...props
}: AppBarProps) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  return (
    <Component
      className={mergeCls("flex lg:gap-3 gap-1", className)}
      {...props}
    >
      {items.map((itemProps) => {
        return (
          <AppBarItem
            key={itemProps.name}
            {...itemProps}
            selected={currentPage === itemProps.name}
          />
        );
      })}
    </Component>
  );
};

export default AppBar;

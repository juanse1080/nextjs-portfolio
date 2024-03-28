import { ElementTypeProps } from "@portfolio/types";
import { mergeCls } from "@portfolio/utils";

export type AppBarContainerProps<Element extends HTMLElement = HTMLElement> =
  ElementTypeProps<Element>;

const AppBarContainer = ({
  children,
  className,
  component: Component = "nav",
  ...props
}: AppBarContainerProps) => {
  return (
    <Component
      className={mergeCls(
        "bg-gray-100 w-min py-2 px-3 rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AppBarContainer;

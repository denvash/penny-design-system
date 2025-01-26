import { cva, cx } from "cva";
import * as Headless from "@headlessui/react";
import { ICON_COMPONENT } from "../IconRenderer";

/**
 * Featues:
 * - Focus ring, inset for secondary intent
 *
 * Caveats:
 * - Only "plus" icon supported as icon type
 * - Mobile icon button variant supported only for `medium` size
 * - Viewport feature globaly triggered on "Mobile viewport" story (reset it manually).
 */
export const Button = (props: ButtonProps) => {
  const { className, label, intent, size = "medium", iconPosition } = props;

  const isIconEnabled = iconPosition !== undefined;

  /**
   * Just for the sake of the example, implemented only for the medium size
   */
  const isMobileIconSupport = isIconEnabled && size === "medium";

  const buttonClassName = buttonVariants({
    intent,
    size: isMobileIconSupport ? "mediumWithIcon" : size,
  });

  const buttonClassNameOverride = cx(buttonClassName, className);

  const labelClassName = labelVariants({
    iconPosition,
    viewport: isMobileIconSupport ? "mobile" : "default",
  });

  const iconComponent = isIconEnabled ? (
    <IconComponent className="size-6 sm:size-5" />
  ) : null;

  return (
    <Headless.Button type="button" className={buttonClassNameOverride}>
      {iconPosition === "left" && iconComponent}
      <div className={labelClassName}>{label}</div>
      {iconPosition === "right" && iconComponent}
    </Headless.Button>
  );
};

/**
 * Custom values based on Figma,
 * best approach is to override default theme sizings s/md/l
 */
export const buttonVariants = cva({
  base: "rounded-lg font-semibold inline-flex items-center gap-x-1.5 text-sm leading-[20px] focus:ring-brand focus:ring-2 focus:outline-hidden focus:ring-offset-2",
  variants: {
    intent: {
      primary: "text-white bg-brand hover:bg-brand-action",
      secondary:
        "bg-white text-primary ring-inset hover:bg-secondary-action border border-solid border-interactive",
      critical: "text-white bg-critical hover:bg-critical-action",
    },
    size: {
      small: "px-4 h-8",
      medium: "px-4 h-10",
      mediumWithIcon: "p-2 sm:px-4 sm:h-10",
      large: "px-6 h-12 text-base leading-6",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const labelVariants = cva({
  base: "w-full",
  variants: {
    viewport: {
      default: "inline-block",
      mobile: "hidden sm:inline-block",
    },
    iconPosition: {
      left: "pr-1",
      right: "pl-1",
    },
  },
});

/**
 * Assumption: only single icon currently supported
 */
const IconComponent = ICON_COMPONENT.plus;

export interface ButtonProps {
  /** Apply custom styling */
  className?: string;
  /** Button label text */
  label: string;
  /** The type of usage */
  intent: "primary" | "secondary" | "critical";
  /** Optional position to render the icon */
  iconPosition?: "left" | "right";
  /** Icon to render (**Unused**, only for example)  */
  icon?: "plus" | "minus" | "refresh";
  /** Optional click handler */
  onClick?: () => void;
  /** Button sizing */
  size?: "small" | "medium" | "large";
}

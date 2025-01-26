import { cva, type VariantProps } from "cva";
import * as Headless from "@headlessui/react";

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { children, intent, size } = props;

  return (
    <Headless.Button type="button" className={buttonVariants({ intent, size })}>
      {children}
    </Headless.Button>
  );
};

const buttonVariants = cva({
  base: "rounded-md font-semibold shadow-sm",
  variants: {
    intent: {
      primary:
        "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2",
      secondary:
        "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border border-solid",
      warning: "text-white bg-red-600 hover:bg-black",
    },
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-3.5 py-2.5 text-base",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
    },
    {
      intent: "primary",
      size: "small",
    },

    {
      intent: "secondary",
      size: "medium",
    },
    {
      intent: "secondary",
      size: "small",
    },

    {
      intent: "warning",
      size: "medium",
    },
    {
      intent: "warning",
      size: "small",
    },
  ],
  defaultVariants: {
    size: "medium",
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<ButtonVariantProps, "intent">,
    Required<Pick<ButtonVariantProps, "intent">> {}

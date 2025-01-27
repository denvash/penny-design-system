import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
  },
  argTypes: {
    icon: {
      control: { type: "select" },
    },
    size: {
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
    },
    iconPosition: {
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
  },
  args: { onClick: fn(), icon: "plus" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    intent: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    intent: "secondary",
  },
};

export const Warning: Story = {
  args: {
    ...Primary.args,
    intent: "critical",
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    iconPosition: "left",
  },
};

/**
 * Viewport global API triggered here;
 */
export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  args: {
    ...Primary.args,
    iconPosition: "left",
  },
};

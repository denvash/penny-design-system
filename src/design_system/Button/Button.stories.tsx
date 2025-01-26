import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "My Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary", "warning"],
    },
    children: { control: "text" },
    size: { control: "inline-radio", options: ["small", "medium"] },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    intent: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    intent: "secondary",
    size: "medium",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    intent: "warning",
    size: "medium",
  },
};

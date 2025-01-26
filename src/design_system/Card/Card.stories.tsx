import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { fn } from "@storybook/test";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    primaryActionLabel: {
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    primaryActionSize: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      table: {
        defaultValue: {
          summary: "small",
        },
      },
    },
  },
  args: { primaryActionOnClick: fn(), primaryActionSize: "small" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vene",
  },
};

export const RightAction: Story = {
  args: {
    title: "Request delivery details",
    description: "We'll email your vendor to set their delivery method.",
    primaryActionLabel: "Send request",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";

const meta: Meta<typeof Modal> = {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: { primaryOnClick: fn(), secondaryOnClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Modal Header",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcuest. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.`,
    primaryLabel: "Delete",
    secondaryLabel: "Cancel",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: { isOpen: false, primaryOnClick: fn(), secondaryOnClick: fn() },
  render: (props) => {
    const {
      title,
      isOpen: isOpenInitial,
      description,
      primaryLabel,
      secondaryLabel,
      primaryOnClick,
      secondaryOnClick,
    } = props;
    const [isOpen, setIsOpen] = useState(isOpenInitial);
    return (
      <div>
        <Modal
          isOpen={isOpen}
          title={title}
          description={description}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
          primaryOnClick={primaryOnClick}
          secondaryOnClick={secondaryOnClick}
        />
        <button
          className="hover:bg-secondary-action cursor-pointer rounded-md border p-4"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Modal Header",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcuest. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.`,
    primaryLabel: "Delete",
    secondaryLabel: "Cancel",
  },
};

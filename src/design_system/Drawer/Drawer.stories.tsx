import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { fn } from "@storybook/test";

const meta: Meta<typeof Drawer> = {
  title: "Design System/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Drawer title",
  },
};

export const WithContent: Story = {
  args: {
    isOpen: true,
    title: "Drawer title",
    children: (
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sollicitudin odio ut elit efficitur rhoncus. Maecenas convallis
          lobortis dignissim. Nullam lorem mauris, lacinia commodo turpis id,
          vestibulum consectetur augue. Morbi lacinia aliquam nunc nec pretium.
          Curabitur at mattis ligula. Integer nec tellus erat. Nullam laoreet
          sapien vel enim ornare consequat. Nam feugiat urna eget velit commodo
          tempor. Aliquam maximus ultricies mi a dictum. Nunc sed tortor
          pulvinar, rutrum ex vel, tincidunt risus. Fusce tincidunt purus purus,
          a elementum leo tincidunt vulputate. Sed tempus ultrices sem non
          elementum. In velit lorem, bibendum ac vulputate at, fringilla vitae
          tellus. Fusce lacinia eleifend tellus, a vulputate sem lobortis quis.
          Nunc facilisis sagittis elit, sit amet pellentesque augue.
        </p>
        <p>
          Nam convallis ante augue, aliquam interdum orci vulputate vitae.
          Vivamus sollicitudin faucibus turpis eu euismod. Curabitur vulputate,
          arcu quis volutpat tincidunt, enim felis pharetra nisl, id convallis
          augue lectus finibus lacus. Vivamus fermentum arcu ac massa malesuada,
          nec scelerisque nisi dapibus. Aliquam aliquet neque eu varius
          volutpat. Nullam imperdiet sed diam ut tincidunt. Vestibulum
          pellentesque libero nec diam suscipit tincidunt. Integer pretium magna
          nisl, non efficitur sem maximus id.
        </p>
        <p>
          Nunc dictum sit amet tellus porta euismod. Ut sed ipsum risus.
          Pellentesque blandit, arcu vitae facilisis varius, orci nisi mattis
          quam, imperdiet maximus sapien ante pellentesque dui. Fusce fringilla
          odio magna, eget dapibus justo interdum sed. Cras ornare est leo, in
          pharetra erat condimentum eu. Sed nec dui metus. Morbi convallis
          feugiat bibendum. Integer ut elit nulla. Integer hendrerit maximus
          risus eu ultricies. Aliquam id tellus sem. Proin congue ac neque vel
          lobortis. Sed non ex fringilla, congue nisl vel, egestas odio. Aliquam
          varius dolor risus, quis pharetra nisl luctus in.
        </p>
      </div>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { fn } from "@storybook/test";

import { glimmerMouse } from "../src/glimmer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  render: () => {
    const { onGlimmerMouseMove } = glimmerMouse();

    return (
      <div
        className="glimmer-mouse-story"
        onMouseMove={(event) => {
          onGlimmerMouseMove(event.nativeEvent);
        }}
        style={{ height: "30dvh", width: "50dvw", backgroundColor: "orange" }}
      ></div>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import glimmerMouse from "../src";
import { GlimmerMouseConfig } from "../src/types/config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "GlimmerMouse",
  render: (args) => {
    const { onGlimmerMouseMove } = glimmerMouse(args as GlimmerMouseConfig);

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
export const TimeBased: Story = {
  args: {
    type: "time",
    throttleMs: 150,
    itemSelection: {
      type: "random",
      items: ["🎈", "🎉", "🎊", "🎁", "🎀"],
    },
  },
};

export const DistanceBased: Story = {
  args: {
    type: "distance",
    delta: 20,
    itemSelection: {
      type: "random",
      items: ["🎈", "🎉", "🎊", "🎁", "🎀"],
    },
  } satisfies GlimmerMouseConfig,
};

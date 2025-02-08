import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../src/presets/preset.css";
import { distancePreset, timePreset } from "../src/presets";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "GlimmerMouse/Presets",
  render: (args) => {
    const { onMouseMove } = args.preset === "time" ? timePreset() : distancePreset();

    return (
      <div
        className="glimmer-mouse-story"
        onMouseMove={(event) => {
          onMouseMove(event.nativeEvent);
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

export const DistancePreset: Story = {
  args: {
    preset: "distance",
  },
};

export const TimePreset: Story = {
  args: {
    preset: "time",
  },
};

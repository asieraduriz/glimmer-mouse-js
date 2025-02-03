import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import glimmerMouse from "../src";
import "../src/glimmer.css";
import { GlimmerMouseConfig, GlimmerMouseFollow } from "../src/types/config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "GlimmerMouse/Follow",
  render: (args) => {
    glimmerMouse(args as GlimmerMouseConfig);

    return <div className="glimmer-mouse-story" style={{ height: "1500px", width: "50dvw", backgroundColor: "orange" }}></div>;
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const animations: { [key: string]: string[] } = {
  falling: ["fall-1", "fall-2", "fall-3"],
};

export const Default: Story = {
  args: {
    type: "follow",
    elClassname: "glimmer-mouse-story",
  } satisfies GlimmerMouseFollow,
};

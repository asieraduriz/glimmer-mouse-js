import { GlimmerMouseConfig, GlimmerMouseConfigArgs } from "../types";

const colouredElement = (...colors: string[]) =>
  colors.map(
    (color) =>
      `<svg width="24px" height="24px" viewBox="0 0 0.45 0.45" version="1.1"xmlns="http://www.w3.org/2000/svg"><path d="M0.417 0.202c-0.035 0.068 -0.129 0.159 -0.182 0.208a0.015 0.015 0 0 1 -0.02 0C0.162 0.362 0.068 0.27 0.033 0.202 -0.044 0.054 0.15 -0.045 0.225 0.103c0.075 -0.148 0.269 -0.049 0.192 0.099" fill="${color}"/>`
  );

const defaultConfig: GlimmerMouseConfigArgs = {
  elements: colouredElement("red", "pink", "blue", "green", "purple"),
  elementSelection: "sequential",
  elementThrottleMs: 150,
  animationDurationMs: 3000,
  preferredAnimationHTMLTag: "span",
  preferredElementClassname: "glimmer-mouse-js-element",
  animations: ["fall-1", "fall-2", "fall-3"],
};

export const assembleConfig = (config?: GlimmerMouseConfigArgs) => {
  return { ...defaultConfig, config } as GlimmerMouseConfig;
};

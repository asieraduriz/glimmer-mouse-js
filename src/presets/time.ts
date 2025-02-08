import glimmerMouse from "..";

import "./preset.css";

const colouredHearts = ["red", "gold", "blue", "purple", "orange"].map(
  (color) =>
    `<svg width="24px" height="24px" viewBox="0 0 0.45 0.45" version="1.1"xmlns="http://www.w3.org/2000/svg"><path d="M0.417 0.202c-0.035 0.068 -0.129 0.159 -0.182 0.208a0.015 0.015 0 0 1 -0.02 0C0.162 0.362 0.068 0.27 0.033 0.202 -0.044 0.054 0.15 -0.045 0.225 0.103c0.075 -0.148 0.269 -0.049 0.192 0.099" fill="${color}"/>`
);

const colouredStars = ["red", "gold", "blue", "purple", "orange"].map(
  (color) =>
    `<svg fill="${color}" width="24px" height="24px" viewBox="0 0 24 24" id="star" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"></path></svg>`
);

export const timePreset = () => {
  return glimmerMouse({
    type: "time",
    throttleMs: 150,
    itemSelection: {
      type: "random",
      items: [...colouredHearts, ...colouredStars],
    },
    animationDuration: {
      type: "fixed",
      durationMs: 1500,
    },
    animationSelection: {
      type: "random",
      animations: ["fall-1", "fall-2", "fall-3"],
    },
  });
};

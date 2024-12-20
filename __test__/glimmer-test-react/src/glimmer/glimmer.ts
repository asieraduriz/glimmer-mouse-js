import { assembleConfig } from "../defaults";
import { SelectionFactory } from "../factories";
import { GlimmerMouseConfigArgs } from "../types";

import "./glimmer.css";

export const glimmerMouse = (glimmerConfig?: GlimmerMouseConfigArgs) => {
  let lastElementTime = 0;
  const config = assembleConfig(glimmerConfig);

  const elementSelector = SelectionFactory.get(config.elementSelection);
  const animationSelector = SelectionFactory.get(config.animationSelection);

  const onGlimmerMouseMove = (mouseEvent: MouseEvent) => {
    const now = Date.now();

    if (now - lastElementTime >= config.elementThrottleMs) {
      console.log("Adding stars");
      const x = mouseEvent.clientX,
        y = mouseEvent.clientY;

      const element = document.createElement(config.preferredAnimationHTMLTag);
      element.innerHTML = elementSelector.selectFrom(config.elements);
      element.classList.add(config.preferredElementClassname);

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = "translate(-50%, -50%)";
      element.style.animationName = animationSelector.selectFrom(config.animations);
      element.style.animationDuration = `${config.animationDurationMs}ms`;

      document.body.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, config.animationDurationMs);

      lastElementTime = now;
    }
  };

  return {
    onGlimmerMouseMove,
  };
};

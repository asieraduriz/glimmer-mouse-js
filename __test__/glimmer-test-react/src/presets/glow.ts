import { assembleConfig } from "../defaults";
import { GlimmerMouseConfigArgs, Position } from "../types";

import "./glow.css";

const calculateDistance = (left: Position, right: Position) => {
  const dx = right.x - left.x;
  const dy = right.y - left.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const glowMouse = (glimmerConfig?: GlimmerMouseConfigArgs) => {
  assembleConfig(glimmerConfig);

  let previousPosition: Position;
  const onGlowMouseMove = (mouseEvent: MouseEvent) => {
    const currentPosition: Position = { x: mouseEvent.clientX, y: mouseEvent.clientY };

    if (!previousPosition) {
      previousPosition = currentPosition;
      return;
    }

    const distance = calculateDistance(previousPosition, currentPosition);

    if (distance > 20) {
      previousPosition = currentPosition;
      const element = document.createElement("span");

      element.className = "glimmer-mouse-glow";
      element.style.left = `${currentPosition.x}px`;
      element.style.top = `${currentPosition.y}px`;
      element.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 100);
    }
  };

  return {
    onGlowMouseMove,
  };
};

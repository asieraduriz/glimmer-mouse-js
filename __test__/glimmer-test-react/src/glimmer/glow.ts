import { assembleConfig } from "../defaults";
import { GlimmerMouseConfigArgs, Position } from "../types";

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

      element.style.position = "absolute";
      element.style.pointerEvents = "none";
      element.style.left = `${currentPosition.x}px`;
      element.style.top = `${currentPosition.y}px`;
      element.style.transform = "translate(-50%, -50%)";
      element.style.boxShadow = "0rem 0rem 2rem 1rem #b820ba";

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

import { AnimationSelectionFactory, DurationSelectionFactory, ItemSelectionFactory } from "../factories/selection";
import { Position } from "../types/position";
import { GlimmerMouseDistance } from "../types/config";
import { DistanceFactory } from "../factories/distance";

export const glimmerMouseDistance = ({
  delta,
  elClassname,
  preferredElementTag = "span",
  animationDuration,
  animationSelection,
  itemSelection,
}: GlimmerMouseDistance) => {
  let lastMousePosition: Position = { x: 0, y: 0 };

  const durationStrategy = DurationSelectionFactory.create(animationDuration);
  const animationStrategy = AnimationSelectionFactory.create(animationSelection);
  const selectionStrategy = ItemSelectionFactory.create(itemSelection);
  const distanceStrategy = DistanceFactory.create(delta);

  let hasStarted = false;

  const onMouseMove = (mouseEvent: MouseEvent) => {
    if (distanceStrategy.isFurtherThanDelta(lastMousePosition, { x: mouseEvent.pageX, y: mouseEvent.pageY })) {
      hasStarted = true;
      const x = mouseEvent.pageX;
      const y = mouseEvent.pageY;

      const element = document.createElement(preferredElementTag);

      element.innerHTML = selectionStrategy.select();
      itemSelection.className && element.classList.add(itemSelection.className);
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = "translate(-50%, -50%)";
      element.style.animationName = animationStrategy.select();
      element.style.animationDuration = `${durationStrategy.select()}ms`;
      element.style.position = "absolute";
      element.style.pointerEvents = "none";
      element.style.animationFillMode = "forwards";

      document.body.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, durationStrategy.select());

      lastMousePosition = { x, y };
    }
  };

  const start = () => {
    if (hasStarted) return;
    const el = document.querySelector<HTMLElement>(elClassname ?? "");

    hasStarted = true;
    el?.addEventListener("mousemove", onMouseMove);
  };

  const stop = () => {
    if (!hasStarted) return;
    const el = document.querySelector<HTMLElement>(elClassname ?? "");

    hasStarted = false;
    el?.removeEventListener("mousemove", onMouseMove);
  };

  return {
    onMouseMove,
    start,
    stop,
  };
};

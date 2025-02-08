import { AnimationSelectionFactory, DurationSelectionFactory, ItemSelectionFactory } from "../factories/selection";
import { GlimmerMouseTime } from "../types/config";

export const glimmerMouseTime = ({
  throttleMs,
  elClassname,
  preferredElementTag = "span",
  animationDuration,
  itemSelection,
  animationSelection,
}: GlimmerMouseTime) => {
  let lastElementTime = 0;

  const selectionStrategy = ItemSelectionFactory.create(itemSelection);
  const animationStrategy = AnimationSelectionFactory.create(animationSelection);
  const durationStrategy = DurationSelectionFactory.create(animationDuration);

  let hasStarted = false;

  const onMouseMove = (mouseEvent: MouseEvent) => {
    const now = Date.now();

    if (now - lastElementTime >= throttleMs) {
      hasStarted = true;
      const { pageX, pageY } = mouseEvent;

      const element = document.createElement(preferredElementTag);

      element.innerHTML = selectionStrategy.select();
      itemSelection.className && element.classList.add(itemSelection.className);
      element.style.left = `${pageX}px`;
      element.style.top = `${pageY}px`;
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

      lastElementTime = now;
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

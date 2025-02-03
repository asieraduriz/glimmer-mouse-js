import { GlimmerMouseFollow } from "../types/config";

export const glimmerMouseFollow = ({ elClassname, autoStart }: GlimmerMouseFollow) => {
  const onPointerMove = (event: PointerEvent) => {
    const { pageX, pageY } = event;
    blob.style.position = "absolute";

    blob.style.width = "300px";
    blob.style.height = "300px";
    blob.style.top = "50%";
    blob.style.left = "50%";
    blob.style.background = "purple";
    blob.style.borderRadius = "50%";
    blob.style.transform = "translate(-50%, -50%)";
    blob.style.filter = "blur(100px)";

    blob.animate(
      {
        left: `${pageX}px`,
        top: `${pageY}px`,
      },
      { duration: 10000, fill: "forwards" }
    );

    blob.style.display = "block";
  };

  let hasStarted = false;
  let blob: HTMLElement;

  const start = () => {
    if (hasStarted) return;

    blob = document.createElement("div");
    blob.classList.add("glimmer-mouse-blob");
    blob.style.display = "none";
    document.body.appendChild(blob);

    hasStarted = true;

    const el = document.querySelector<HTMLElement>(elClassname ?? "");
    el?.addEventListener("pointermove", onPointerMove);
  };

  const stop = () => {
    if (!hasStarted) return;

    hasStarted = false;

    const el = document.querySelector<HTMLElement>(elClassname ?? "");
    el?.removeEventListener("pointermove", onPointerMove);
    document.body.removeChild(blob);
  };

  if (autoStart) {
    start();
  }

  return {
    start,
    stop,
  };
};

import "./glimmer.css";

const colouredStars = ["red", "gold", "blue", "purple", "orange"].map(
  (color) =>
    `<svg width="24px" height="24px" viewBox="0 0 0.45 0.45" version="1.1"xmlns="http://www.w3.org/2000/svg"><path d="M0.417 0.202c-0.035 0.068 -0.129 0.159 -0.182 0.208a0.015 0.015 0 0 1 -0.02 0C0.162 0.362 0.068 0.27 0.033 0.202 -0.044 0.054 0.15 -0.045 0.225 0.103c0.075 -0.148 0.269 -0.049 0.192 0.099" fill="${color}"/>`
);

const animations: { [key: string]: string[] } = {
  falling: ["fall-1", "fall-2", "fall-3"],
  idle: ["idle-1", "idle-2", "idle-3"],
};

export const glimmerMouse = () => {
  let lastElementTime = 0;

  const onGlimmerMouseMove = (mouseEvent: MouseEvent) => {
    const now = Date.now();

    if (now - lastElementTime >= 150) {
      console.log("Adding stars");
      const x = mouseEvent.clientX,
        y = mouseEvent.clientY;

      const element = document.createElement("span");
      element.innerHTML = colouredStars[0];

      element.innerHTML = colouredStars[0];
      element.classList.add("glimmer-mouse-js-element");
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = "translate(-50%, -50%)";
      element.style.animationName = animations.falling[0];
      element.style.animationDuration = `1500ms`;
      element.style.position = "absolute";
      element.style.width = "12px";
      element.style.height = "12px";
      element.style.pointerEvents = "none";
      element.style.animationFillMode = "forwards";

      document.getElementsByClassName("glimmer-mouse-story")[0].appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 1500);

      lastElementTime = now;
    }
  };

  return {
    onGlimmerMouseMove,
  };
};

import "./App.css";

let lastElementTime = 0;
function App() {
  console.log("App rerendered");

  const onMouseMove = (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const now = Date.now();

    if (now - lastElementTime >= 500) {
      console.log("Adding stars");
      const { x, y } = {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      };

      const element = document.createElement("span");
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="green"/>
            </svg>
          `;
      element.classList.add("glimmer-mouse-js-element");

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = "translate(-50%, -50%)";
      element.style.animationName = "fall-1";
      element.style.animationDuration = "3000ms";

      document.body.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 3000);

      lastElementTime = now;
    }
  };
  return <div onMouseMove={onMouseMove} style={{ height: "100dvh", width: "100dvw" }}></div>;
}

export default App;

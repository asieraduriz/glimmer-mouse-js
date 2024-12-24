import "./App.css";
import { glowMouse } from "./presets";
import { stars } from "./presets/stars";
function App() {
  console.log("App rerendered");
  const { onGlowMouseMove } = glowMouse();

  const { onMouseMove } = stars({ animation: "idle" });
  return (
    <div
      onMouseMove={(event) => {
        onMouseMove(event.nativeEvent);
        onGlowMouseMove(event.nativeEvent);
      }}
      style={{ height: "100dvh", width: "50dvw" }}
    ></div>
  );
}

export default App;

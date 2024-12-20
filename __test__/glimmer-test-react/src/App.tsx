import "./App.css";
import { glimmerMouse } from "./glimmer";
import { glowMouse } from "./glimmer/glow";

function App() {
  console.log("App rerendered");
  const { onGlimmerMouseMove } = glimmerMouse({});
  const { onGlowMouseMove } = glowMouse();
  return (
    <div
      onMouseMove={(event) => {
        onGlimmerMouseMove(event.nativeEvent);
        onGlowMouseMove(event.nativeEvent);
      }}
      style={{ height: "100dvh", width: "50dvw" }}
    ></div>
  );
}

export default App;

# Glimmer Mouse JS

Bring some nice mouse animations to your projects.

## Origin

I've built this thin wrapper first as a pet project, and secondly, to dive deeper into Javascript, so any feedback and contributions are always welcomed.

## Intent

Animations are usually not prioritised when building web apps, and with a couple of lines of code, we can bring better UX.

With this small library, it aims to provide two different mouse events.

One, a time-diff based animation, and another a distance-diff based animation.

## How to set up locally

Simply fork the repository and do

```sh
npm install
npm run sb
```

This will open up your browser and help you see some of the features in play.

## How to use

After installing the package, simply import the default export.

### Time based configuration

**For React**

```css
/* Your css file */
@keyframes fall {
  0% {
    transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25);
    opacity: 0;
  }

  100% {
    transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1);
    opacity: 0;
  }
}
```

```javascript
// animatedComponent.jsx
import glimmerMouse from "glimmer-mouse-js";

export default function Component() {
  const { onMouseMove } = glimmerMouse({
    type: "time",
    throttleMs: 150,
    itemSelection: {
      type: "random",
      items: ["🌟", "❤️", "🔥", "🐬", "🦆"],
    },
    animationDuration: {
      type: "fixed",
      durationMs: 1500,
    },
    animationSelection: {
      type: "random",
      animations: ["fall"],
    },
  });

  return (
    <Layout>
      <SomeHeader />
      <div onMouseMove={onMouseMove}></div>
    </Layout>
  );
}
```

This is the original approach, however, if you prefer to control when the animation should start and when it should stop, there's also the `start` and `stop` methods coming from `glimmerMouse` method.

With one _caveat_, if you supply the `onMouseMove` to any HTMLElement onMouseMove event, it'll **already be active**.

In order to use the `start` and `stop` methods effectively, here's an example

```javascript
// animatedComponent.jsx
import glimmerMouse from "glimmer-mouse-js";

export default function Component() {
  const { start, stop } = glimmerMouse({
    type: "time",
    elClassname: "div-element-with-animation",
    throttleMs: 150,
    itemSelection: {
      type: "random",
      items: ["🌟", "❤️", "🔥", "🐬", "🦆"],
    },
    animationDuration: {
      type: "fixed",
      durationMs: 1500,
    },
    animationSelection: {
      type: "random",
      animations: ["fall"],
    },
  });

  useEffect(() => {
    return () => {
      stop(); // You should always clean up event listeners
    };
  }, []);

  return (
    <Layout>
      <SomeHeader />
      <div className="div-element-with-animation"></div>
      <button onClick={start}>Something that triggers the animation</button>
    </Layout>
  );
}
```

With this implementation, every 150ms that the mouse moves within the attached element, a random item will be falling from it.

### Distance based configuration

In essence, it stays true to what the time-based configuration exposes, with tiny tweaks
From

```ts
{
    type: 'time',
    throttleMs: 1500
}
```

To

```ts
{
    type: 'distance',
    delta: 80
}
OR
{
    type: 'distance',
    delta: {
        deltaX: 40,
        deltaY: 50,
        satisfy: 'both' | 'either'
    }
}
```

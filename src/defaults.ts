import { GlimmerMouseConfigProp } from "./types";

export const defaultConfig: GlimmerMouseConfigProp = {
  elements: [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="green"/>
            </svg>
          `,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="gold"/>
            </svg>
          `,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="purple"/>
            </svg>
          `,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="orange"/>
            </svg>
          `,
  ],
  elementSelection: "sequential",
  elementThrottleMs: 500,
  animationDurationMs: 33000,
  preferredAnimationHTMLTag: "span",
  preferredElementClassname: "glimmer-mouse-js-element",
  animations: ["fall-1", "fall-2", "fall-3"],
};

import { createConfig } from "./createConfig";
import { SelectionFactory } from "./factories";
import type { SelectionStrategy } from "./strategies";
import type { GlimmerMouseConfig, GlimmerMouseConfigProp, Position } from "./types";

export class GlimmerMouse {
  private lastElementTime: number;
  private container: HTMLElement | Window;

  private config: GlimmerMouseConfig;

  private elementSelection: SelectionStrategy;
  private animationSelection: SelectionStrategy;

  constructor() {
    this.lastElementTime = 0;
    this.container = {} as Window;
    this.config = {} as GlimmerMouseConfig;
    this.elementSelection = {} as SelectionStrategy;
    this.animationSelection = {} as SelectionStrategy;
  }

  public init(container?: HTMLElement, config?: GlimmerMouseConfigProp) {
    this.container = container || window;
    this.config = createConfig(config);
    this.animationSelection = SelectionFactory.get(this.config.animationSelection);
    this.elementSelection = SelectionFactory.get(this.config.elementSelection);
    this.container.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  public destroy() {
    this.container.removeEventListener("mousemove", this.onMouseMove.bind(this));
  }

  private onMouseMove(e: Event) {
    const mouseEvent = e as MouseEvent;
    const now = Date.now();

    if (now - this.lastElementTime >= this.config.elementThrottleMs) {
      const position = {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      };
      this.createElementAt(position);
      this.lastElementTime = now;
    }
  }

  private createElementAt({ x, y }: Position) {
    const element = document.createElement(this.config.preferredAnimationHTMLTag);
    element.innerHTML = this.elementSelection.selectFrom(this.config.elements);
    element.classList.add(this.config.preferredElementClassname);

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transform = "translate(-50%, -50%)";
    element.style.animationName = this.animationSelection.selectFrom(this.config.animations);
    element.style.animationDuration = `${this.config.animationDurationMs}ms`;

    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, this.config.animationDurationMs);
  }
}

export const Summ = (a: number, b: number) => a + b;

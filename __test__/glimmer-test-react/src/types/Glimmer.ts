export type GlimmerMouseSelection = "random" | "sequential";
export type GlimmerMouseConfigArgs = Partial<GlimmerMouseConfig>;

export type GlimmerMouseConfig = {
  container: HTMLElement | (Window & typeof globalThis);
  elements: string[];
  elementSelection: GlimmerMouseSelection;
  elementThrottleMs: number;
  animationDurationMs: number;
  preferredAnimationHTMLTag: keyof HTMLElementTagNameMap;
  preferredElementClassname: string;
  animations: string[];
  animationSelection: GlimmerMouseSelection;
};

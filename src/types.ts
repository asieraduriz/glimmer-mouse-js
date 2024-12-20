export interface Position {
  x: number;
  y: number;
}

export type GlimmerMouseAnimations = { animation?: string } | { animations?: string[] };
export type GlimmerMouseSelection = "random" | "sequential";

export type GlimmerMouseConfigProp = Partial<GlimmerMouseConfig>;

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

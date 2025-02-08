import { AnimationDurationStrategy, ItemAnimationStrategy, ItemSelectionStrategy } from "./strategies";

export type GlimmerMouseTime = {
  type: "time";
  elClassname?: string; // Target classname
  throttleMs: number;
  preferredElementTag?: keyof HTMLElementTagNameMap;
  animationDuration: AnimationDurationStrategy;
  animationSelection: ItemAnimationStrategy;
  itemSelection: ItemSelectionStrategy & { className?: string };
};

export type XYDelta = { deltaX: number; deltaY: number; satisfy: "both" | "either" };
export type Delta = number | XYDelta;

export type GlimmerMouseDistance = {
  type: "distance";
  elClassname?: string;
  delta: Delta;
  preferredElementTag?: keyof HTMLElementTagNameMap;
  animationDuration: AnimationDurationStrategy;
  animationSelection: ItemAnimationStrategy;
  itemSelection: ItemSelectionStrategy & { className?: string };
};

export type GlimmerMouseConfig = GlimmerMouseTime | GlimmerMouseDistance;

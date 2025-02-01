import { AnimationDurationStrategy, ItemAnimationStrategy, ItemSelectionStrategy } from "./strategies";

export type GlimmerMouseTime = {
  type: "time";
  throttleMs?: number;
  preferredElementTag?: keyof HTMLElementTagNameMap;
  itemSelection?: ItemSelectionStrategy;
  animationDuration?: AnimationDurationStrategy;
  animationSelection?: ItemAnimationStrategy;
};

export type XYDelta = { deltaX: number; deltaY: number; satisfy: "both" | "either" };
export type Delta = number | XYDelta;

export type GlimmerMouseDistance = {
  type: "distance";
  delta: Delta;
  preferredElementTag?: keyof HTMLElementTagNameMap;
  itemSelection?: ItemSelectionStrategy;
  animationDuration?: AnimationDurationStrategy;
  animationSelection?: ItemAnimationStrategy;
};

export type GlimmerMouseConfig = GlimmerMouseTime | GlimmerMouseDistance;

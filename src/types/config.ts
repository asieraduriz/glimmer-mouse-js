import { AnimationDurationStrategy, ItemAnimationStrategy, ItemSelectionStrategy } from "./strategies";

export type GlimmerMouseTime = {
  type: "time";
  autoStart?: boolean;
  elClassname?: string;
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
  autoStart?: boolean;
  elClassname?: string;
  delta: Delta;
  preferredElementTag?: keyof HTMLElementTagNameMap;
  animationDuration?: AnimationDurationStrategy;
  animationSelection?: ItemAnimationStrategy;
  itemSelection?: ItemSelectionStrategy & { className?: string };
};

export type GlimmerMouseFollow = {
  type: "follow";
  autoStart?: boolean;
  elClassname: string;
};

export type GlimmerMouseConfig = GlimmerMouseTime | GlimmerMouseDistance | GlimmerMouseFollow;

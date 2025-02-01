type PresetItemSelectionStrategy = {
  type: "sequential" | "random";
  items: any[];
};

type CustomSelectionStrategy = {
  type: "custom";
  select: () => any;
};

export type ItemSelectionStrategy = PresetItemSelectionStrategy | CustomSelectionStrategy;

type PresetAnimationSelectionStrategy = {
  type: "sequential" | "random";
  animations: any[];
};

type CustomAnimationStrategy = {
  type: "custom";
  select: () => any;
};

export type ItemAnimationStrategy = PresetAnimationSelectionStrategy | CustomAnimationStrategy;

type FixedAnimationDuration = {
  type: "fixed";
  durationMs: number;
};

type VariableAnimationDuration = {
  type: "variable";
  minMs: number;
  maxMs: number;
};

type CustomAnimationDuration = {
  type: "custom";
  duration: () => number;
};

export type AnimationDurationStrategy = FixedAnimationDuration | VariableAnimationDuration | CustomAnimationDuration;

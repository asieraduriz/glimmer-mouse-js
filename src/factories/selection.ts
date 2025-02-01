import { CustomDurationSelection, DurationStrategy, FixedDurationSelection, VariableDurationSelection } from "../strategies/duration";
import { CustomSelection, RandomSelection, SelectionStrategy, SequentialSelection } from "../strategies/selection";
import { AnimationDurationStrategy, ItemAnimationStrategy, ItemSelectionStrategy } from "../types";

export class ItemSelectionFactory {
  static create(strategy: ItemSelectionStrategy): SelectionStrategy {
    switch (strategy.type) {
      case "sequential":
        return new SequentialSelection(strategy.items);
      case "random":
        return new RandomSelection(strategy.items);
      case "custom":
        return new CustomSelection(strategy.select);
      default:
        throw new Error("Invalid selection type.");
    }
  }
}

export class AnimationSelectionFactory {
  static create(strategy: ItemAnimationStrategy): SelectionStrategy {
    switch (strategy.type) {
      case "sequential":
        return new SequentialSelection(strategy.animations);
      case "random":
        return new RandomSelection(strategy.animations);
      case "custom":
        return new CustomSelection(strategy.select);
      default:
        throw new Error("Invalid selection type.");
    }
  }
}

export class DurationSelectionFactory {
  static create(strategy: AnimationDurationStrategy): DurationStrategy {
    switch (strategy.type) {
      case "fixed":
        return new FixedDurationSelection(strategy.durationMs);
      case "variable":
        return new VariableDurationSelection(strategy.minMs, strategy.maxMs);
      case "custom":
        return new CustomDurationSelection(strategy.duration);
      default:
        throw new Error("Invalid selection type.");
    }
  }
}

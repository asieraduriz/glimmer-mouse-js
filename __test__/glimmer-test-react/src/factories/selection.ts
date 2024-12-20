import type { SelectionStrategy } from "../strategies/selection";
import { RandomSelection, SequentialSelection } from "../strategies/selection";

export class SelectionFactory {
  static get(type: "random" | "sequential"): SelectionStrategy {
    switch (type) {
      case "random":
        return new RandomSelection();
      case "sequential":
      default:
        return new SequentialSelection();
    }
  }
}

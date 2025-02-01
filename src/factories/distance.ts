import { DeltaStrategy, DeltaXYStrategy, DistanceStrategy } from "../strategies/distance";
import { Delta } from "../types/config";

export class DistanceFactory {
  static create(delta: Delta): DistanceStrategy {
    if (typeof delta === "number") {
      return new DeltaStrategy(delta);
    } else {
      return new DeltaXYStrategy(delta);
    }
  }
}

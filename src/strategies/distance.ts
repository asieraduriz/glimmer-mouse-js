import { XYDelta } from "../types/config";
import { Position } from "../types/position";

export abstract class DistanceStrategy {
  protected getDistance(left: Position, right: Position) {
    const dx = right.x - left.x;
    const dy = right.y - left.y;
    return { dx, dy };
  }

  abstract isFurtherThanDelta(left: Position, right: Position): boolean;
}

export class DeltaStrategy extends DistanceStrategy {
  private delta: number;

  constructor(delta: number) {
    super();
    this.delta = delta;
  }

  isFurtherThanDelta(left: Position, right: Position): boolean {
    const { dx, dy } = this.getDistance(left, right);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance > this.delta;
  }
}

export class DeltaXYStrategy extends DistanceStrategy {
  private deltaX: XYDelta["deltaX"];
  private deltaY: XYDelta["deltaY"];
  private satisfy: XYDelta["satisfy"];

  constructor({ deltaX, deltaY, satisfy }: XYDelta) {
    super();
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.satisfy = satisfy;
  }

  isFurtherThanDelta(left: Position, right: Position): boolean {
    const { dx, dy } = this.getDistance(left, right);

    switch (this.satisfy) {
      case "both":
        return dx > this.deltaX && dy > this.deltaY;
      case "either":
        return dx > this.deltaX || dy > this.deltaY;
    }
  }
}

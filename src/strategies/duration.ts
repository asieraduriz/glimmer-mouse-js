export interface DurationStrategy {
  select(): number;
}

export class FixedDurationSelection implements DurationStrategy {
  private durationMs: number;

  constructor(durationMs: number) {
    this.durationMs = durationMs;
  }

  select() {
    return this.durationMs;
  }
}

export class VariableDurationSelection implements DurationStrategy {
  private minMs: number;
  private maxMs: number;

  constructor(minMs: number, maxMs: number) {
    this.minMs = minMs;
    this.maxMs = maxMs;
  }

  select() {
    return Math.random() * (this.maxMs - this.minMs) + this.minMs;
  }
}

export class CustomDurationSelection implements DurationStrategy {
  private selectFn: () => number;

  constructor(selectFn: () => number) {
    this.selectFn = selectFn;
  }

  select() {
    return this.selectFn();
  }
}

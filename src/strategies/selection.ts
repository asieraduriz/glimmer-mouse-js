export interface SelectionStrategy {
  select(): any;
}

export class SequentialSelection implements SelectionStrategy {
  private currentIndex: number;
  private items: any[];

  constructor(items: any[]) {
    this.currentIndex = 0;
    this.items = items;
  }

  select() {
    const item = this.items[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    return item;
  }
}

export class RandomSelection implements SelectionStrategy {
  private items: any;
  constructor(items: any) {
    this.items = items;
  }

  select() {
    const item = this.items[Math.floor(Math.random() * this.items.length)];
    return item;
  }
}

export class CustomSelection implements SelectionStrategy {
  private selectFn: () => any;
  constructor(selectFn: () => any) {
    this.selectFn = selectFn;
  }

  select() {
    return this.selectFn();
  }
}

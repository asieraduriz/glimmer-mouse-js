export interface SelectionStrategy {
  selectFrom<T>(elements: T[]): T;
}

export class SequentialSelection implements SelectionStrategy {
  private currentIndex: number;

  constructor() {
    this.currentIndex = 0;
  }

  selectFrom<T>(elements: T[]) {
    const element = elements[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % elements.length;
    return element;
  }
}

export class RandomSelection implements SelectionStrategy {
  selectFrom<T>(elements: T[]) {
    const element = elements[Math.floor(Math.random() * elements.length)];
    return element;
  }
}

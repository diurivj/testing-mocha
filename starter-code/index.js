class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
  }

  get(pos) {
    if (this.items[pos - 1] === undefined) return new Error('OutOfBounds');
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) return new Error('EmptySortedList');
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) return new Error('EmptySortedList');
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, v) => acc + v, 0);
  }

  avg() {
    if (this.length === 0) return new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;

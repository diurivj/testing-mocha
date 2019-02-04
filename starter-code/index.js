class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) return new Error("OutOfBounds");
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => b - a)[0];
    }
  }

  min() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => a - b)[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0);
    }
  }

  avg() {
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    return pos > this.length ? new Error('OutOfBounds') : this.items[pos - 1];
  }

  max() {
    return this.length ? this.items[this.length - 1] : new Error('EmptySortedList');
  }

  min() {
    return this.length ? this.items[0] : new Error('EmptySortedList');
  }

  sum() {
    return this.length ? this.items.reduce((acc, cv) => acc + cv) : 0;
  }

  avg() {
    return this.length
      ? this.items.reduce((acc, cv) => acc + cv) / this.length
      : new Error('EmptySortedList');
  }
}

module.exports = SortedList;

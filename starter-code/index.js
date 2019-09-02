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
    if (pos > this.length) {
      return new Error('OutOfBounds');
    }
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) return new Error('EmptySortedList');
    return this.items.reduce((accum, currentItem) => {
      return accum > currentItem ? accum : currentItem;
    }, 0);
  }

  min() {
    if (this.length === 0) return new Error('EmptySortedList');
    return this.items.reduce((accum, currentItem) => {
      return accum < currentItem ? accum : currentItem;
    });
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((accum, currentItem) => {
      return accum + currentItem;
    });
  }

  avg() {
    if (this.length === 0) return new Error('EmptySortedList');
    return (
      this.items.reduce((accum, currentItem) => {
        return accum + currentItem;
      }) / this.length
    );
  }
}

module.exports = SortedList;

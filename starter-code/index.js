class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) =>{return a-b}) 
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos-1] === undefined) {
      return "Error: OutOfBounds"
    }
    return this.items[pos-1]
  }

  max() {
    if (this.items.length === 0) {
      return "Error: EmptySortedList";
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      return "Error: EmptySortedList";
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;}
}

module.exports = SortedList

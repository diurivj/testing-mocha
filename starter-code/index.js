class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.length++;
  }

  get(pos) {
    if (this.items[pos - 1] === undefined) return new Error("OutOfBounds");
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0) return new Error("EmptySortedList");
    else return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) return new Error("EmptySortedList");
    else return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) return 0;
    else return this.items.reduce((a,b)=> a + b, 0)
  }

  avg() {
    if (this.items.length === 0) return new Error("EmptySortedList");
   else return this.items.reduce((a,b)=> a + b, 0) / this.length

  }
}

const sl = new SortedList();
module.exports = SortedList;

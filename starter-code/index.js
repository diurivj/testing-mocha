class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length++;
  }

  get(pos) {
    if (this.items.length != 0) {
      return this.items[pos - 1];
    }
    else {
      return new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length != 0) {
      return Math.max(...this.items);
    }
    else {
      return new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length != 0) {
      return Math.min(...this.items);
    }
    else {
      return new Error("EmptySortedList");
    }
  }

  sum() {
    let result = 0;
    for (let i = 0; i < this.length; i++){
      result += this.items[i];
    }
    return result;
  }

  avg() {
      return this.sum()/this.length;
  }
}

module.exports = SortedList

class SortedList {
  constructor(items = [], length) {
    this.items = items
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length++
  }
  get(pos) {
    return  (!this.items[pos-1]) ? new Error("OutOfBounds") : this.items[pos-1]
  }
  max() {
    return (this.items.length === 0) ? new Error("EmptySortedList") : Math.max(...this.items) 
  }

  min() {
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce(function(a,b) {
      return a + b
    }, 0);
  }

  avg() {
    return this.items.reduce(function(a,b) {
      return a + b 
    }, 0) / this.length;
  }
};

module.exports = SortedList

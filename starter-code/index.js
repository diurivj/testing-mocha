class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => (a-b));
  }
  get(pos) {
    if(pos > this.items.length){
      return "Error: OutOfBounds"
    }

    return this.items[pos-1]
  }
  max() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }
    return Math.max.apply(null,this.items)
  }
  min() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }
    return Math.min.apply(null,this.items)
  }
  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }

    let sum = this.items.reduce((previous,current)=> current += previous)
    return sum / this.items.length
  }
  sum() {
    if (this.items.length === 0){
      return 0
    }

    return this.items.reduce((previous, current) => current += previous)

  }
};

module.exports = SortedList;


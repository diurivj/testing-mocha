class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
  }

  get(pos) {
    if (this.items.indexOf(pos) == -1){
      return 'Error: OutOfBounds'
    }
    return this.items[pos-1];
  }

  max() {
    if(!this.length){
      return new Error("EmptySortedList")
    }
    return Math.max(...this.items);
  }

  min() {
    if(!this.length){
      return new Error("EmptySortedList")
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce ((accumulator, currentValue) => {
      return accumulator+currentValue; 
    },0 )
  }

  avg() {
    return this.items.reduce ((accumulator, currentValue) => {
      return accumulator+currentValue; 
    },0 ) / this.items.length

  }
}

module.exports = SortedList

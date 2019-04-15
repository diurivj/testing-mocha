// PP MEX Albert Felipe
class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    
    return this.length
  }

  get(pos) {
    if (this.items.indexOf(pos) !== -1) {
      return pos
    } else {
      return 'Error: OutOfBounds'
    }
  }

  max() {
    if (this.length == 0) {
    return new Error("EmptySortedList")
    } else{
      console.log(Math.max(...this.items));
      return Math.max(...this.items)
    }

  }

  min() {
    if (this.length == 0) {
      return new Error("EmptySortedList")
      } else{
        return Math.min(...this.items)
      }
  }

  sum() {
    return this.items.reduce((a, b) => a + b,0)
  }

  avg() {
    return this.sum()/this.length
  }
}

module.exports = SortedList

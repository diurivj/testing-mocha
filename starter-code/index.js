class SortedList {
  constructor() {
    this.length = 0
    this.items = []
  }
  add(item) {
    this.items.push(item)
    this.length++
  }
  get(pos) {
    return (this.items[pos-1]) ? this.items[pos-1] : ("Error: OutOfBounds")
  }
  max() {
    return (this.items.sort()[this.items.length - 1]) ? this.items.sort()[this.items.length - 1] : ("Error: EmptySortedList") 
  }
  min() {
    return (this.items.sort()[this.items.length - 1]) ? this.items.sort()[0] : ("Error: EmptySortedList")
  }
  sum() {
    return (this.items[0]) ? this.items.reduce((acc, element)=> acc += element) : 0
  }
  avg() {
    return this.sum() / this.items.length
  }
}

module.exports = SortedList

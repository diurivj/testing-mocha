class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length

  }

  add(item) { 
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    if( pos > this.length ) return new Error("OutOfBounds")
    return this.items[pos -1]
  } 

  max() {
    if( this.items.length === 0 ) return new Error("EmptySortedList")
    return Math.max(...this.items)
  }

  min() {
    if( this.items.length === 0 ) return new Error("EmptySortedList")
    return Math.min(...this.items)
  }

  sum() {
    if( this.length === 0) return 0
    return this.items.reduce((acc, el) => acc += el)
  }

  avg() {
    return this.sum() / this.length
  }
}

module.exports = SortedList

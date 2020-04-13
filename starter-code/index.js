class SortedList {
  constructor() {
    this.length = 0
    this.items = []
  }

  add(x) {
    this.items.push(x)
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length) return new Error('OutOfBounds')
    else return this.items[pos - 1]
  }

  max() {
    if (this.items.length === 0) return new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) return new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0) return 0
    return this.items.reduce(function (a, b) {
      return a + b
    })
  }

  avg() {
    return this.sum() / this.items.length
  }
}

module.exports = SortedList

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
    if (!this.items[pos - 1]) return 'Error: OutOfBounds'
    else return this.items[pos - 1]
  }

  max() {
    if (this.items.length <= 0) return 'Error: EmptySortedList'
    else return Math.max(...this.items)
  }

  min() {
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0)
  }

  avg() {
    return this.sum() / this.items.length
  }
}

module.exports = SortedList

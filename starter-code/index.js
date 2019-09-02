class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }
  get(pos) {
    if (pos > this.items.length) {
      return ('Error: OutOfBounds')
    } else {
      return this.items[pos - 1]
    }
  }
  max() {
    if (this.items.length === 0)
      return 'Error: EmptySortedList'
    else {
      this.items.sort()
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if (this.items.length === 0)
      return 'Error: EmptySortedList'
    else {
      this.items.sort()
      return this.items[0]
    }
  }
  sum() {
    if (this.items.length === 0)
      return 0
    else
      return this.items.reduce((suma, current) => suma += current)
  }

  avg() {
    return this.sum() / this.items.length
  }
}

module.exports = SortedList
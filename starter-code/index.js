class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length


  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get(pos) {
    if (this.items[pos - 1] === undefined) {
      return 'Error: OutOfBounds'
    } else {
      return this.items[pos - 1]
    }

  }

  max() {


    if (this.items.length === 0) {
      return 'Error: EmptySortedList'
    } else {
      this.items.sort((a, b) => b - a)
      return this.items[0]
    }
  }

  min() {
    if (this.items.length === 0) {
      return 'Error: EmptySortedList'
    } else {
      this.items.sort((a, b) => a - b)
      return this.items[0]
    }

  }

  sum() {
    if (this.items.length === 0) return 0
    return this.items.reduce((pr, cu) => pr + cu)
  }
  avg() {
    return this.items.reduce((pr, cu) => pr + cu) / this.items.length
  }
}

module.exports = SortedList
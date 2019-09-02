class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length += 1
  }

  get(pos) {
    const result = this.items[pos - 1]
    if (result) {
      return result
    } else {
      return 'Error: OutOfBounds'
    }
  }

  max() {
    let maxVal = 0
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > maxVal) {
        maxVal = this.items[i]
      }
    }
    if (this.items.length === 0) {
      return 'Error: EmptySortedList'
    } else {
      return maxVal
    }
  }

  min() {
    let minVal = Number.POSITIVE_INFINITY
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < minVal) {
        minVal = this.items[i]
      }
    }
    if (this.items.length === 0) {
      return 'Error: EmptySortedList'
    } else {
      return minVal
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, cv) => acc + cv)
    }
  }

  avg() {
    return this.sum() / this.items.length
  }
}

module.exports = SortedList

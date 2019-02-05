class SortedList {
  constructor() {
      this.items = [];
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a , b) => {a < b})
  }

  get(pos) {
    if (pos >= this.length) {
      return "Error: OutOfBounds"
    } else {
    return this.items[pos-1]
    }
  }

  max() {
    let highest = 0
    if (items.length === 0) {
      return "Error: EmptySortedList"
    }
    this.items.map((index) => {
      if (items[index] > highest) {
        highest = items[index]
      }
    })
    return highest
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList

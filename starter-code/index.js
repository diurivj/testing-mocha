class SortedList {
  constructor() {
      this.items = [];
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a , b)=>{a < b})
  }

  get(pos) {
    if (pos >= this.length) {
      return "Error: OutOfBounds"
    } else {
    return this.items[pos-1]
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList

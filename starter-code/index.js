class SortedList {
  constructor() {
    //let items 
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {

    if (pos > this.length || pos < 0) {
      return new Error("OutOfBounds")
    } else {
      return this.items[pos-1]
    }

  }

  max() {
    if (this.length <= 0) {
      return new Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length <= 0) {
      return new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.items.length == 0 ) {
      return 0
    } else {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }

  avg() {
    return this.sum() / this.length
  }
}

module.exports = SortedList

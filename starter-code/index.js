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
    if(pos <= this.length){
      return this.items[pos-1]
    } else {
      return new Error("OutOfBounds")
    }
  }

  max() {
    if(!this.length){
      return new Error('EmptySortedList')
    }
    return Math.max(...this.items)
  }

  min() {
    if(!this.length){
      return new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    if(!this.length){
      return 0
    }
    return this.items.reduce((acc, currVal) => acc+currVal)
  }

  avg() {
    if(!this.length){
      return new Error('EmptySortedList')
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList

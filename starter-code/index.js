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
    if(!this.items[pos - 1]) {
      return new Error('OutOfBounds')
    } else {
      return this.items[pos-1]
    }
  }

  max() {
    if(this.length === 0){
      return new Error('EmptySortedList')
    }
    else {
    return Math.max(...this.items)
    }
  }

  min() {
    if(this.length === 0){
      return new Error('EmptySortedList')
    } else {
    return Math.min(...this.items)
    }
  }

  sum() {
    if (this.length!==0){
      return this.items.reduce((a,b) => a+b)
    }
    else {
      return 0
    }
  }

  avg() {
    return this.sum()/this.length
  }
}

module.exports = SortedList

class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length =  this.items.length
  }
  get(pos) {
    this.length =  this.items.length
    if (pos < this.length+1){
    return this.items[pos-1]
    } else {
      return new Error('OutOfBounds');
    }
  }
  max() {
    if(this.length>0){
      return Math.max(...this.items)
    } else{
      return new Error('EmptySortedList')
    }
  }

  min() {
    if(this.length>0){
        return Math.min(...this.items)
      } else{
        return new Error('EmptySortedList')
      }
  }

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return this.items.reduce(reducer, 0)
  }

  avg() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return ((this.items.reduce(reducer, 0))/this.length)
  }
}

module.exports = SortedList

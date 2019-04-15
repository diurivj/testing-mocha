class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(x) {
    this.items.push(x)
    this.length += 1
  }

  get(pos){
    if (this.items[pos - 1] === undefined) {
      return new Error('OutOfBounds')
    }else {
      return this.items[pos - 1]
    }
  }

  max(){
    //var max = Math.max(...arr);
    if (this.length === 0) {
      return new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }
  }

  min(){
    if (this.length === 0) {
      return new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }
  }

  sum(){
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg(){
    return this.items.reduce((a, b) => a + b, 0) / this.length
  }
}

let list = new SortedList()
list.add(0)
list.get(1)

module.exports = SortedList

class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length ++
  }

  get(pos) {
    if(this.items.indexOf(pos) != -1){
      return pos 
    } else {
      return 'Error: OutOfBounds'
    }
}

  
  max() {
    if(this.items.length > 0 ) return Math.max(...this.items) 
    else return new Error("EmptySortedList")
  }

  min() {
    if(this.items.length > 0 ) return Math.min(...this.items) 
    else return new Error("EmptySortedList")
  }

  sum() {
    return this.items.reduce((a,b) => a + b, 0)
  }

  avg() {
    return this.items.reduce((a,b) => a + b, 0) / this.items.length
  }
}

module.exports = SortedList


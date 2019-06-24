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
    if(this.items[pos -1]){
      return this.items[pos -1]
    } else {
      return new Error('OutOfBounds')
    }
  }
  max() {
    let max = 0
    if(this.items.length ===  0){
      return new Error ('EmptySortedList') 
    } else {
      for(let i=0; i < this.items.length; i++){
        if(this.items[i] > this.items[i + 1]){
          max = this.items[i]
          return max
        }
      }
    }
  }
  min() {
    let min = 0
    if(this.items.length ===  0){
      return new Error ('EmptySortedList') 
    } else {
        for(let i=0; i < this.items.length; i++){
          if(this.items[i] < this.items[i + 1]){
            min= this.items[i]
            return min
          }
        }
      }
  }
  sum() {
    let sum = 0
    if(this.items.length === 0 ) {
      return 0
    } else {
      for(let i =0; i<this.items.length; i++) {
        sum += this.items[i]
      }
      return sum
    }
  }

  avg() {
    let sum = 0
    for(let i =0; i<this.items.length; i++) {
      sum += this.items[i]
    }
    return sum/this.items.length
  }
}

module.exports = SortedList

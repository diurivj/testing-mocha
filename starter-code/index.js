class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.items.length){
      return 'Error: OutOfBounds'
    }else{
      return this.items[pos-1]
    }
  }

  max() {
    if(this.items.length === 0){
      return 'Error: EmptySortedList'
    }else{
      this.items.sort(function(a, b){return a-b})
      return this.items[this.length-1]
    }
  }

  min() {
    if(this.items.length === 0){
      return 'Error: EmptySortedList'
    }else{
      this.items.sort(function(a, b){return a-b})
      return this.items[0]
    }
  }

  sum() {
    const sum = this.items.reduce((acc,curr) => {
      return acc + curr
    },0)
    return sum
  }

  avg() {
    return this.sum()/this.items.length
  }
}

module.exports = SortedList
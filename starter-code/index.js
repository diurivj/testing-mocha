class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    
    this.length = this.items.push(item)
  }

  get(pos) {
    if(this.items[pos -1]){
      return this.items[pos -1]
    }else {return 'Error: OutOfBounds'}
  }

  max() {
    let max =  Math.max(...this.items)
    if (this.length === 0){
      return 'Error: EmptySortedList'
    }else {
      return max
    }
  
  }

  min() {
    let min = Math.min(...this.items)
    if (this.length ===0){
      return 'Error: EmptySortedList'
    }else{
      return min
    }
  }

  sum() {
    let sum = this.items.reduce((a,b)=>a+b,0)
    if (this.length ===0){
      return 0
    } else {
      return sum
    }
  }

  avg() {
    let avg = this.items.reduce((a,b)=>a+b,0)/this.length
    return avg
  }
}

module.exports = SortedList

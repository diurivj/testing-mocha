class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
      this.items.push(item)
      this.length = this.items.length
  }

  get(pos) {
    console.log(this.items)
    console.log(this.length)
    console.log(this)
    if(pos <= this.length) {
      return this.items[pos-1]} else {
        return new Error('OutOfBounds')
      }
  }

  max() {
    let max = 0
    if(this.length > 0){
      this.items.forEach(item => {
      if(item > max) max = item
    })
    return max
    } else {
      return new Error("EmptySortedList")
    }
  }

  min() {
    if(this.length > 0){
      let min = this.items[0]
      this.items.forEach(item => {
        if(item < min) min = item
      })
      return min
      } else {
        return new Error("EmptySortedList")
      }
  }

  sum() {
    if(this.length > 0){
      let sum = 0
      this.items.forEach(item => {
        sum+=item
      })
      return sum
      } else {
        return 0
      }
  }

  avg() {
    if(this.length > 0){
      let sum = 0
      this.items.forEach(item => {
        sum+=item
      })
      return sum/this.length
      } else {
        return 0
      }
  }
}

module.exports = SortedList

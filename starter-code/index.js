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
    if(pos > this.length){
      return new Error('OutOfBounds')
    } else {
      return this.items[pos-1]
    }
  }

  max() {
    // this.items.sort((a,b) => b.length - a.length)
    if(this.length === 0){
      return new Error('EmptySortedList')
    }else{
    this.items.sort((a,b) => b-a)
    return this.items[0]
    }
  }

  min() {
    if(this.length === 0){
      return new Error('EmptySortedList')
    }else{
    this.items.sort((a,b) => a-b)
    return this.items[0]
    }
  }

  sum() {
    if(this.length === 0){
      return 0
    } else {
     return this.items.reduce((acc, current) => {
        return acc += current
      })
    //   // let sum
    //   // this.items.forEach(value => sum+=value)
    //   // return sum
    }
  }

  avg() {
     return Math.floor(this.sum()/this.length)
    }
}
module.exports = SortedList

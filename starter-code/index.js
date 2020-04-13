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
    if(this.items.length < pos){
     return new Error("OutOfBounds")
    }else{
      return this.items[pos - 1]
    }
  }

  max() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }else{
      return Math.max( ...this.items)
    }
  }

  min() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }else{
      return Math.min( ...this.items)
    }
  }

  sum() {
    let counter = 0
    this.items.forEach((element)=>{
     counter += element
    })
    return counter
  }

  avg() {
    let counter = 0
    this.items.forEach((element)=>{
     counter += element
    })
    return counter / this.items.length
  }
}

module.exports = SortedList

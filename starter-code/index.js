class SortedList {
  constructor() {
    this.items=[],
    this.length=this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length=this.items.length
  }

  get(pos) {
    if (this.length<pos) {
      return new Error("OutOfBounds")
    }else{
      return this.items[pos-1]
    }

    
  }

  max() {
    if (this.length===0){
      return new Error("EmptySortedList")
    }else{
      return this.items[this.length-1]
    }

  }

  min() {
    if (this.length===0){
      return new Error("EmptySortedList")
    }else{
      return this.items[0]
    }
  }

  sum() {
    return this.items.reduce((acc,c)=>acc+c,0)
  }

  avg() {
    if (this.length===0){
      return new Error("EmptySortedList")
    }else{
      return this.sum()/this.length
    }
  }
}

module.exports = SortedList

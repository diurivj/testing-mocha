class SortedList {
  constructor() {
    this.items=[]
    this.length=items.length
  }

  add(item) {
    this.items.push(item)
  }

  get(pos) {
    
  }

  max() {
    if(this.items=[""]){
      return new Error("EmptySortedList")
    } else {
      Math.max(...this.items)
    }
  }

  min() {
    if(this.items=[""]){
      return new Error("EmptySortedList")
    } else {
      Math.min(...this.items)
    }
  }

  sum() {
    this.items=[].reduce(function(a,b){return a+b;})
  }

  avg() {
    this.items=[].reduce(function(a,b){return a+b;})/this.length
  }
}

module.exports = SortedList

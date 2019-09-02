class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
      this.items.sort(function(a,b){return a>b ? 1: a< b ? -1 : 0})
      this.length = this.items.length

}

  get(pos) {
    if (pos > this.items.length ) {
      return new Error("OutOfBounds");
    } else {
      return this.items[pos -1]
    }
  }

  max() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList");
    } else {
      return this.items[this.items.length -1]
    }

    

  }

  min() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList");
    } else {
      return this.items[0]
    }
  }

  sum() {
    if(this.items.length ===0) {
      return 0
    }else {
      return this.items.reduce((a,b)=> a+b)
    }
  }

  avg() {
    if(this.item === 0) {
      return new Error("EmptySortedList")
    }else{
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList

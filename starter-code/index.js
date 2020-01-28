class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item){
      this.items.push(item)
      this.items.sort()
      this.length=this.items.length
    
  }
  
  get(pos) {
    if( pos > this.items.length){
      return new Error("OutOfBounds")
    }else{
      return this.items[pos-1]
    }

  }

  max() {
    if( this.length > 0 ){
      return Math.max(...this.items)
    }else{
      return new Error("EmptySortedList")
    }
    
  }

  min() { 
    if( this.length > 0 ){
    return Math.min(...this.items)
  }else{
    return new Error("EmptySortedList")
  }
}

  sum() {
    return this.items.reduce((acc,c)=>acc+c,0)
  }

  avg() {
    if( this.length > 0 ){
      return this.items.reduce((acc,c)=>acc+c,0)/this.length
    }else{
      return new Error("EmptySortedList")
    }
  }
}

module.exports = SortedList

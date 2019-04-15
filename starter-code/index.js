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
   if (this.items[pos -1] === undefined){
     return new Error ('OutOfBounds');
   } return this.items[pos -1]
  }

  max() {
    if (this.items.length ===0){
      return new Error ("EmptySortedList")
    } return Math.max.apply(null, this.items)
  }

  min() {
    if (this.items.length ===0){
      return new Error ("EmptySortedList")
    } return Math.min.apply(null, this.items)
  }

  sum() {
    if (this.items.length ===0){
      return 0
    } return  this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length ===0){
      return new Error ("EmptySortedList")
    } return (this.items.reduce((a, b) => a +b,0))/this.items.length
  }
}

module.exports = SortedList


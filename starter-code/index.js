class SortedList {
  constructor() {
    this.items = [];
     this.length = this.items.length ;
 
  }

  add(x) {
    this.items.push(x);
    this.length = this.items.length ;
  }

  get(pos) {
    if (pos < this.items.length + 1){
    return this.items[pos - 1]
    
    }else {
      return 'Error: OutOfBounds'
    }
  }

  max() {
    if(this.items.length !== 0 ){
      return Math.max(...this.items)
    } else {
      return "Error: EmptySortedList"
    }
  }

  min() {

    if(this.items.length !== 0){
      return Math.min(...this.items)
    } else {
      return "Error: EmptySortedList"
    }
  }
  

  sum() {
    if(this.items.length !== 0){
      return this.items.reduce((acum, num) => acum + num, 0)
    } else {
      return 0
    }

  }

  avg() {
    if(this.items.length !== 0){
      return this.items.reduce((acum, num) => acum + num, 0) / this.items.length
    } else {
      return 0
    }
  }
}

module.exports = SortedList

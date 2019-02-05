class SortedList {
  
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length
  }

  get(pos) {
    if(this.items.length < pos ) {
      return new Error("OutOfBounds")
    } else {
      return this.items[pos -1];
    }
    
  }

  //array.sort(compareFunction)
  max() {
    if (this.items.length === 0){
      return new Error("EmptySortedList")
    } else {
      this.items.sort((a,b) => b - a)
      return this.items[0]

    }
  }
  //(function(a, b){return b-a})
  
  min() {
    if (this.items.length === 0){
      return new Error("EmptySortedList")
    } else {
      this.items.sort ((a,b) => a-b)
      return this.items [0]
     }
    }
  
  
  sum() {
    let suma = 0
    this.items.forEach((item) => {
      suma += item
    })
    return suma
  }

  avg() {
    let av = (this.sum() / this.length)
    return av
    
  }
}

module.exports = SortedList


// let mayor = 0
      // this.items.forEach((item) => {
      //   if (item > mayor) {
      //     mayor = item;
      //   }
      // })
      // return mayor
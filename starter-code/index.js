/*jshint esversion: 6 */

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
}
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => (a - b));
  }

  get(pos) {
    if(pos < this.items.length+1){
      return this.items[pos-1];
    } else{
      return new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    } else {
      return Math.min.apply(null, this.items);
    }
  }


  sum(a,b) {
    return this.items.reduce((a,b) => a + b, 0) ;
  }

  avg() {
    return this.items.reduce((a,b) => a + b, 0) / this.items.length ;

  }
}

module.exports = SortedList

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
    if (pos-1 >= this.items.length || pos-1 < 0) return 'Error: OutOfBounds';
    return this.items[pos -1]
    
  }
  

  max() {
    if (this.items.length === 0) return 'Error: EmptySortedList';
    return this.items.sort()[this.items.length-1];
  }

  min() {
    if (this.items.length === 0) return 'Error: EmptySortedList';
    return this.items.sort()[0];
  }

  sum() {
    if (this.items.length === 0) return 0;
    let counter = 0;
    this.items.forEach( (el) => {
      counter += el
    })
    return counter;
  }

  avg() {
    if (this.items.length === 0) return 0;
    return this.sum() / this.items.length
  }
}

module.exports = SortedList

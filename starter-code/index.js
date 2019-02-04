class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    // if(this.items[pos - 1 ] == undefined){
      this.length = this.items.length
      if(pos > this.items.length){
      return "Error: OutOfBounds"
    } else {
      return this.items[pos - 1];
    }

  }

  max() {
    let maxim = 0
    if(this.items.length === 0){
      return "Error: EmptySortedList"
    } else {
      this.items.forEach(x => {
        if(x > maxim) maxim = x;
      })
    return maxim;
  }
}

  min() {
    if(this.items.length === 0){
      return "Error: EmptySortedList"
    } else {
    return this.items.sort((a, b) => a - b)[0]
    }
  }

  sum() {
    let acum = 0
    this.items.forEach(x => {
      acum += x;
    })
    return acum;  
  }
  

  avg() {
    return this.sum()/this.items.length
  }
}

module.exports = SortedList

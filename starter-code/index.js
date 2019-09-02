class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(x) {
    this.items.push(x)
    this.length ++
  }

  get(pos) {
    if(pos > this.items.length){
      return 'Error: OutOfBounds'
    } else {
      return this.items[pos - 1]
    }
  }
  max() {
    if(this.items.length === 0){
      return 'Error: EmptySortedList'
    }
    else{
      this.items.sort()
      return this.items[this.items.length-1]
    } 
  }

  min() {
    if(this.items.length === 0){
      return 'Error: EmptySortedList'
    }
    else{
      this.items.sort(function(num1,num2){return num1-num2})
      return this.items[0]
    } 
  }

  sum() {
    let sumaTodos = this.items.reduce(function(acumulador, current){
      return acumulador + current
    }, 0)
    return sumaTodos
  }

  avg() {
    let promedio = this.items.reduce(function(acumulador, current){
      return acumulador + current
    }, 0)
    return promedio/this.items.length
  }
}

module.exports = SortedList
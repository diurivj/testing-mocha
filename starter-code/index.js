class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length){
      return new Error("OutOfBounds")
    }else{
      return this.items[pos-1];
    }
  }
    
  max(){
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }
    else{
      let valMax = this.get(1);
      for(let i = 1; i < this.items.length; i++){
        if(valMax < this.get(i+1)){
          valMax = this.get(i+1);
        }
      }
      return valMax;
    }
  }

  min() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }
    else{
      let valMin = this.get(1);
      for(let i = 1; i < this.items.length; i++){
        if(valMin > this.get(i+1)){
          valMin = this.get(i+1);
        }
      }
      return valMin;
    }
  }

  sum() {
    let sumResult = 0;
    this.items.forEach(element => {
      sumResult += element;
    });
    return sumResult;
  }

  avg() {
    if(this.items.length === 0){
      return new Error("EmptySortedList")
    }
    return this.sum()/this.items.length;
  }
}

module.exports = SortedList

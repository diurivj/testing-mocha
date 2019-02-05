class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a - b;
    })
    this.length++;
  }

  get(pos) {
    if(this.items[pos-1]===undefined){
      return new Error ('OutOfBounds')
    }
    return this.items[pos - 1];
  }

  max() {
    if(this.length===0){
      return new Error ("EmptySortedList")
    }else{
      return this.items[this.items.length - 1]
    }

  }

  min() {
    if(this.length===0){
      return new Error ("EmptySortedList")
    }else{
      return this.items.sort((a,b)=>a-b)[0]
    }
  }

  sum() {
    let summ=0;
    for(let i=0; i<this.items.length; i++){
      summ+=this.items[i]
    }
    return summ;
  }

  avg() {
    if(this.length===0){
      return new Error("EmptySortedList")
    }else{
      return this.items.reduce((acc, current)=>acc + current)/this.length;
    }
  }
}

module.exports = SortedList

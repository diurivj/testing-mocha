class SortedList {
  //Constructor
  //✓ should have the properties length and items
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  // #add(x)
  //     ✓ should add a single value to SortedList
  //     ✓ should add a third value to SortedList
  add(item) {
    this.items.push(item)
    this.length++
  }
  // #get(pos)
  // ✓ should return the nth element from the array
  // ✓ should return an OutOfBounds exception if there is no element in that position
  get(pos) {
    if (!this.items[pos - 1]) {
      return 'Error: OutOfBounds'
    } else {
      return this.items[pos - 1]
    }
  }

  //   Max
  // The max() method should return the highest value of the array.
  // In the case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:
  // ---------------------
  // return new Error("EmptySortedList")
  // #max()
  //     ✓ should return the highest value of the array
  //     ✓ should return an EmptySortedList exception if there is a empty list

  max() {
    if (this.items.length === 0) {
      return 'Error: EmptySortedList'
    } else {
      return this.items.reduce((max, value) => {
        return Math.max(max, value)
      })
    }
  }

  // #min()
  // ✓ should return the lowest value of the array
  // ✓ should return an EmptySortedList exception if there is a empty list
  min() {
    if (this.items.length === 0) {
      return 'error: EmptySortedList'
    } else {
      return this.items.reduce((min, value) => {
        return Math.min(min, value)
      })
    }
  }

  // #sum()
  //       ✓ should return the sum of all the elements in the array
  //       ✓ should return 0 for an empty sorted list
  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((sum, value) => {
        return sum + value
      })
    }
  }

  // #avg()
  //     ✓ should return the average of the elements in the array
  avg() {
    if (this.items.length === 0) {
      return 0
    } else {
      let total = this.items.reduce((sum, value) => {
        return sum + value
      })
      return total / this.items.length
    }
  }
}

module.exports = SortedList

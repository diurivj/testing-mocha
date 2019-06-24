class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b
    })
    this.length++
  }

  get(pos) {
    if (this.items[pos - 1] != undefined) {
      return this.items[pos - 1]
    } else return 'Error: OutOfBounds'
  }

  max() {
    if (this.length === 0) return new Error('EmptySortedList')
    return this.items.sort((a, b) => {
      return b - a
    })[0]
  }

  min() {
    if (this.length === 0) return 'Error: EmptySortedList'
    else return this.items[0]
  }

  sum() {
    return this.items.reduce((e, s) => {
      return e + s
    }, 0)
  }

  avg() {
    return (
      this.items.reduce((e, s) => {
        return e + s
      }, 0) / this.length
    )
  }
}

module.exports = SortedList

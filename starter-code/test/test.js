const assert = require('assert')
const SortedList = require('../index.js')
const sl = new SortedList()

describe('SortedList', () => {

  describe('Constructor', () => {
    it('should have the properties length and items', () => {
      assert.equal(sl instanceof SortedList, true)
      assert.equal(sl.length, 0)
      assert(Array.isArray(sl.items))
    })
  })

  describe('#add(x)', () => {
    it('should add a single value to SortedList', () => {
      assert.equal(sl.length, 0)
      sl.add(0)
      assert.equal(sl.length, 1)
    })
    it('should add a third value to SortedList', () => {
      sl.add(1)
      sl.add(2)
      sl.add(3)
      assert.equal(sl.length, 4)
    })
  })

  describe('#get(pos)', () => {
    beforeEach(() => {
      sl.items = []
      sl.add(1)
      sl.add(2)
    })
    it('should return the nth element from the array', () => {
      assert.equal(sl.get(2), 2)
    })
    it('should return an OutOfBounds exception if there is no element in that position', () => {
      assert.equal(sl.get(3), 'Error: OutOfBounds')
    })
  })

  describe('#max()', () => {
    beforeEach(() => {
      sl.items = []
      sl.add(1)
      sl.add(3)
      sl.add(2)
    })
    it('should return the highest value of the array', () => {
      assert.equal(sl.max(), 3)
    })
    it('should return an EmptySortedList exception if there is a empty list', () => {
      sl.items = []
      sl.length = 0
      assert.equal(sl.max(), 'Error: EmptySortedList')
    })
  })

  describe('#min()', () => {
    beforeEach(() => {
      sl.items = []
      sl.add(1)
      sl.add(3)
      sl.add(2)
    })
    it('should return the lowest value of the array', () => {
      assert.equal(sl.min(), 1)
    })
    it('should return an EmptySortedList exception if there is a empty list', () => {
      sl.items = []
      sl.length = 0
      assert.equal(sl.max(), 'Error: EmptySortedList')
    })
  })

  describe('#sum()', () => {
    beforeEach(() => {
      sl.items = []
      sl.length = 0
      sl.add(1)
      sl.add(2)
      sl.add(3)
    })
    it('should return the sum of all the elements in the array', () => {
      assert.equal(sl.sum(), 6)
    })
    it('should return 0 for an empty sorted list', () => {
      sl.items = []
      sl.length = 0
      assert.equal(sl.sum(), 0)
    })
  })

  describe('#avg()', () => {
    beforeEach(() => {
      sl.items = []
      sl.length = 0
      sl.add(1)
      sl.add(2)
      sl.add(3)
    })
    it('should return the average of the elements in the array', () => {
      assert.equal(sl.avg(), 2)
    })
  })

})
class SortedList {
	constructor() {
		this.items = [];
		this.length = this.items.length;
	}

	add(item) {
		this.length = this.items.push(item);
	}

	get(pos) {
		return this.items[pos - 1] ? this.items[pos - 1] : 'Error: OutOfBounds';
	}

	max() {
		return this.items.length > 0 ? Math.max(...this.items) : new Error('EmptySortedList');
	}

	min() {
		return this.items.length > 0 ? Math.min(...this.items) : new Error('EmptySortedList');
	}

	sum() {
		return this.items.length > 0 ? this.items.reduce((acc, el) => acc + el) : 0;
	}

	avg() {
		return this.sum() / this.items.length;
	}
}

module.exports = SortedList;


class CircularArray {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  rotate(val) {
    val = val % this.items.length;
    if (val < 0) {
      for (let i=0; i>val; i--) {
        this.items.unshift(this.items.pop());
      }
    } else {
      for (let i=0; i<val; i++) {
        this.items.push(this.items.shift());
      }
    }

    
  }

  printArray() {
    return this.items;
  }

  getByIndex(idx) {
    idx = idx % this.items.length;
    return this.items[idx];
  }

}


module.exports = CircularArray;
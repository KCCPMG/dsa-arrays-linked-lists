/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const foundVal = this.tail.val;
    let current = this.head;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current ? current : null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return foundVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    const foundVal = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return foundVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    for (let i=0; i<idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    for (let i=0; i<idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // edge case: empty LL
    if (this.head === null) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    // insert between idx-1, idx

    let beforeInsert; // idx-1
    for (let i=0; i<idx; i++) {
      beforeInsert = beforeInsert ? beforeInsert.next : this.head;
    }

    const afterInsert = beforeInsert.next; // idx

    const newNode = new Node(val);
    beforeInsert.next = newNode;
    newNode.prev = beforeInsert;
    
    newNode.next = afterInsert;

    if (!afterInsert) {
      this.tail = newNode;
    } else {
      afterInsert.prev = newNode;
    }
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let foundNode = {};
    let foundVal;
    
    if (this.head === null) {
      return null;
    } else if (idx === 0) {
      foundNode = this.head;
      foundVal = foundNode.val;
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      if (this.head === null) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i=0; i<idx-1; i++) {
        current = current.next;
      }
      const beforeRemoval = current;
      const foundNode = beforeRemoval.next;
      foundVal = foundNode.val;
      beforeRemoval.next = foundNode.next;
      if (foundNode.next) {
        foundNode.next.prev = beforeRemoval;
      }
      if (beforeRemoval.next === null) {
        this.tail = beforeRemoval;
      }
    }

    this.length = Math.max(this.length-1, 0);
    return foundVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    const vals = [current?.val];
    while (current?.next) {
      current = current.next;
      vals.push(current.val)
    }

    return (vals.reduce((a,b) => a+b, 0) / vals.length) || 0;
  }
}

module.exports = LinkedList;

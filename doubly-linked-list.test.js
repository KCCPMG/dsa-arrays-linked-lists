const LinkedList = require("./doubly-linked-list");

function checkValidity(lst) {
  if (lst.length === 1) {
    expect(lst.head).toBe(lst.tail);
  } else if (lst.length > 1) {
    expect(lst.head.prev).toBe(null);
    expect(lst.tail.next).toBe(null);
    let current = lst.head;
    while (current.next) {
      expect(current.next.prev).toBe(current);
      current = current.next;
    }
  }
}

describe("push", function() {
  it("appends node and increments length", function() {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    checkValidity(lst);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.prev).toBe(null);
    expect(lst.tail.val).toBe(10);
    checkValidity(lst);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.head.prev).toBe(null);
    expect(lst.tail.val).toBe(15);
    checkValidity(lst);
  });
});

describe("unshift", function() {
  it("adds node at start and increments length", function() {
    let lst = new LinkedList();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    checkValidity(lst);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.tail.prev.val).toBe(10);
    checkValidity(lst);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(15);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.tail.prev.prev.val).toBe(15);
    checkValidity(lst);
  });
});

describe("pop", function() {
  it("removes node at end and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.tail.next).toBe(null);
    expect(lst.head.prev).toBe(null);
    expect(lst.length).toBe(1);
    checkValidity(lst);

    expect(lst.pop()).toBe(5);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
    checkValidity(lst);
  });
});

describe("shift", function() {
  it("removes node at start and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail.val).toBe(10);
    expect(lst.length).toBe(1);
    checkValidity(lst);

    expect(lst.shift()).toBe(10);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
    checkValidity(lst);
  });
});

describe("getAt", function() {
  it("gets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
  });
});

describe("setAt", function() {
  it("sets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.setAt(0, 1));
    expect(lst.setAt(1, 2));
    expect(lst.head.val).toBe(1);
    expect(lst.head.next.val).toBe(2);
    checkValidity(lst);
  });
});


describe("insertAt", function() {
  it("inserts node and adjusts nearby nodes", function() {
    let lst = new LinkedList([5, 10, 15, 20]);

    lst.insertAt(2, 12);
    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.next.next.val).toBe(12);
    expect(lst.head.next.next.next.val).toBe(15);
    expect(lst.head.next.next.next.next.val).toBe(20);
    expect(lst.tail.val).toBe(20);
    expect(lst.tail.prev.val).toBe(15);
    expect(lst.tail.prev.prev.val).toBe(12);
    expect(lst.tail.prev.prev.prev.val).toBe(10);
    expect(lst.tail.prev.prev.prev.prev.val).toBe(5);
    checkValidity(lst);

    lst.insertAt(5, 25);
    expect(lst.head.next.next.next.next.next.val).toBe(25);
    expect(lst.tail.val).toBe(25);
    checkValidity(lst);
  });

  it("inserts into empty list", function() {
    let lst = new LinkedList();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    checkValidity(lst);
  });
});

describe("removeAt", function() {
  it("removes from 5-item list", function() {
    let lst = new LinkedList(["a", "b", "c", "d", "e"]);

    lst.removeAt(3);
    expect(lst.length).toBe(4);
    expect(lst.head.val).toBe("a");
    expect(lst.tail.val).toBe("e");
    checkValidity(lst);
  });

  it("removes from beginning of 5-item list", function() {
    let lst = new LinkedList(["a", "b", "c", "d", "e"]);

    expect(lst.removeAt(0)).toBe("a");
    expect(lst.length).toBe(4);
    expect(lst.head.val).toBe("b");
    expect(lst.tail.val).toBe("e");
    checkValidity(lst);
  });

  it("removes from end of 5-item list", function() {
    let lst = new LinkedList(["a", "b", "c", "d", "e"]);

    lst.removeAt(4);
    expect(lst.length).toBe(4);
    expect(lst.head.val).toBe("a");
    expect(lst.tail.val).toBe("d");
    checkValidity(lst);
  });

  it("removes from 1-item list", function() {
    let lst = new LinkedList(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
    checkValidity(lst);
  });
});

describe("average", function() {
  it("calculates the average of items in a list", function() {
    let lst = new LinkedList([2, 3, 1, 1, 7, 6, 9]);
    expect(lst.average()).toBeCloseTo(4.1429, 4);
  });

  it("returns 0 for empty lists", function() {
    let lst = new LinkedList();
    expect(lst.average()).toBe(0);
  });
});

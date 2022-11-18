Arrays/Linked Lists Exercises
=============================

[Download our starter code](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists.zip).

We’ve supplied you with a **_Node_** class and a constructor for the **_LinkedList_** class. Here are descriptions of the methods you should write for instances of **_LinkedList_**:

**_push(val)_**

Appends a new node with value **_val_** to the tail. Returns undefined.

**_unshift(val)_**

Add a new node with value **_val_** to the head. Returns undefined.

**_pop()_**

Remove & return tail value. Throws error if list is empty.

**_shift()_**

Remove & return head value. Throws error if list is empty.

**_getAt(idx)_**

Retrieve value at index position **_idx_**. Throws error if index is invalid.

**_setAt(idx, val)_**

Set value of node at index position **_idx_** to **_val_**. Throws error if index is invalid.

**_insertAt(idx, val)_**

Insert a new node at position **_idx_** with value **_val_**. Throws error if index is invalid. Returns undefined.

**_removeAt(idx)_**

Remove & return value at position **_idx_**. Throws error if index is invalid.

**Warning: Go Slow & Check Your Code!**

It’s very easy to make methods that don’t work for every case — make sure you properly handle cases of items being at the start, middle, or end of the list, as well as handling empty lists.

Average Of List
---------------

Given a linked list containing numbers, return the average of those numbers.

For example:

![](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists/_images/graphviz-b1603be0d98e203f053c14824a21a615be7b422f.svg)

would return 4.142857142857143.

### Further Study

Doubly Linked Lists
-------------------

Doubly Linked Lists are just like Singly Linked Lists, but each node has a pointer to the previous node as well as the next one. Implement a class for **_DoublyLinkedList_** with the same methods as above (be mindful of opportunities to speed up your code now that each node has two pointers!)

Reverse In Place
----------------

Write a function that reverses a linked list _in place_ — not by creating a new list or new nodes.

Sort Sorted Linked Lists
------------------------

Write a function that is passed two linked lists, **_a_** and **_b_**, both of which are already sorted.

It should return a _new_ linked list, in sorted order.

Pivot Around Value
------------------

Imagine we have a singly-linked linked list:

![](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists/_images/graphviz-5680d1bef0f4b7595bbae8d68b16af4f2b3bad76.svg)

In this challenge, you’ll be given a value and you want to rearrange the items in the linked list so that all items with data less than the given value are in the first half, and items with greater than or equal to the given value are in the second half.

For example, for the value 5:

![](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists/_images/graphviz-28668fece2f7a25cfca50f15104a4639453238a6.svg)

Notice that this list _isn’t sorted_; all we need to do is “pivot” it around the given value. Otherwise, items are still in the same order as they were (7 came before 6 in the original list, so it still does — but both of them are greater than 5, so they appear in the second half).

For example:
```
    let ll = new LinkedList([7, 6, 2, 3, 9, 1, 1])
    
    ll.pivot(5)
    
    // now list is 2 3 1 1 7 6 9
```    

If the given pivot value is in the list, it should appear in the second half (with other greater-than-or-equal-to values):
```
    let ll = new LinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1])
    
    ll.pivot(5)
    
    //  now list is 2 3 1 1 7 6 5 5 9
```    

Circular Arrays
---------------

In this challenge, you will create a “circular array” — like a list ADT but the end wraps around to the beginning (which makes for some interesting problems).

A circular array is defined by having a start and indexes (be sure to think about **optimizing runtime** for indexing, since we’ll do this so much more often than adding items to it):
```
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.printArray()
    // harry
    // hermione
    // ginny
    // ron
    
    circ.getByIndex(2)  // ginny
    circ.getByIndex(15) // null
```    

Because the last item circles back around to the first item, you can rotate the list and shift the indexes. Positive numbers rotate the list start (defined as the index 0) to the right (or higher indexes):
```
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(1)
    circ.printArray()
    // hermione
    // ginny
    // ron
    // harry
    
    circ.getByIndex(2)  // ron
```    

And negative numbers rotate the list start to the left (or lower indexes):
```
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(-1)
    circ.printArray()
    // ron
    // harry
    // hermione
    // ginny
    
    circ.getByIndex(2)  // hermione
```    

And you can also rotate more than once around the ring:
```
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(-17)
    circ.getByIndex(1)  // harry
```    

If you add a new item after rotating, it should go at the **end of the list in its current rotation**:
```
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(-2)
    circ.addItem('dobby')
    
    circ.printArray()
    // ginny
    // ron
    // harry
    // hermione
    // dobby
```    

Want a hint about the data structure?

**Data Structure**

Think about the data structure you’d want to use to store the items.

While it’s tempting to use something like a Linked List, the runtime to find an item by index in a linked list is **_O(n)_**.

You can use a standard array to store the items, but you’ll need to think about how to keep track of the head and handle rotations.

### Solution

See [Our solution](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists/solution/index.html).
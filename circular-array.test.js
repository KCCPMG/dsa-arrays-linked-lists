const CircularArray = require('./circular-array');


describe("printArray", function() {
  it("correctly constructs and prints", function(){
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
  
    expect(circ.printArray()).toStrictEqual([
      "harry", 
      "hermione",
      "ginny",
      "ron"
    ]);
  })
})


describe("rotate", function() {

  it("rotates positively", function(){
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(1)
    expect(circ.printArray()).toStrictEqual([
      "hermione",
      "ginny",
      "ron",
      "harry"
    ])
    
    expect(circ.getByIndex(2)).toBe("ron");
  })

  it("rotates negatively", function(){
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')
    
    circ.rotate(-1)
    expect(circ.printArray()).toStrictEqual([
      "ron",
      "harry",
      "hermione",
      "ginny"
    ])
    
    expect(circ.getByIndex(2)).toBe("hermione");
  })

  it("rotates multiple times around", function(){
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')

    circ.rotate(-17)
    expect(circ.getByIndex(1)).toBe("harry");
  })
})



describe("getByIndex", function() {
  it("", function(){
    let circ = new CircularArray()
    circ.addItem('harry')
    circ.addItem('hermione')
    circ.addItem('ginny')
    circ.addItem('ron')

    expect(circ.printArray()).toStrictEqual([
      "harry", 
      "hermione",
      "ginny",
      "ron"
    ]);


    expect(circ.getByIndex(2)).toEqual("ginny");
    expect(circ.getByIndex(15)).toBe("ron");
  })
})
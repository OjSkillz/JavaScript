const MyArray = require("./MyArray");

beforeEach(()=> {
    newArray = new MyArray()
})

test("Element can be added to my array from the rear", ()=> {
    
    newArray.pushElement(4);

    let answer = newArray.getSize();
    let result = 1;

    expect(result).toBe(answer);

})

test("Last element can be removed from my array", ()=> {
    newArray.pushElement(4,5,6,7,8);

    expect(newArray.getSize()).toBe(5);
    
    let actual = newArray.popArray();
    let expected = 8;

    expect(actual).toBe(expected);

    expect(newArray.getSize()).toBe(4);

})

test("First element can be removed from my array", ()=> {
    newArray.pushElement(4,5,6,7,8);

    expect(newArray.getSize()).toBe(5);

    let actual = newArray.shiftArray();
    let expected = 4;

    expect(actual).toBe(expected);

    expect(newArray.getSize()).toBe(4);

})

test("Add elements to the beginning of my array", ()=> {
    newArray.pushElement(4,5,6,7,8);

    let currentSize = newArray.unshiftArray(3);

    expect
})


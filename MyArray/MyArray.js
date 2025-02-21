class MyArray {
    #myArray
    #size
    constructor() {
        this.#myArray = [];
        this.#size = 0;
    }

    pushElement(element){
        this.#myArray += element;
      
    }

    pushElement(...elements){
        for (let element of elements){ 
            this.#myArray += element;
        
        }
    }

    getSize(){
        let count = 0;
        for (let element of this.#myArray) 
            count += 1;
        this.#size = count; 
        return this.#size
    }

    popArray(){
        let new_array = []; 
        let popped = this.#myArray[this.#size - 1];
        for (let element of this.#myArray) {
            if (element != popped) new_array += element
        }
        this.#myArray = new_array;
        return Number(popped)
    }

    shiftArray(){
        let new_array = []; 
        let shifted = this.#myArray[0];
        for (let element of this.#myArray) {
            if (element != shifted) new_array += element
        }
        this.#myArray = new_array;
        return Number(shifted)
    }
}
module.exports = MyArray;
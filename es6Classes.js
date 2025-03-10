/*

    Class --> Object

    Instance Properties : What they have 
        -name
        -age
        -height

    Instance Methods : What they do

        - tallk
        - run
        - jump
*/

class Rectangle { // Class declaration
    // it used to setup your Object
    constructor(width, height, color) { 
        console.log("Rectangle is created");

        this.width = width;
        this.height= height;
        this.color = color;
    }

    getArea(){ // Method
        return this.width * this.height;

    }

    printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} = ${this.width * this.height} and I am ${this.color}`)
    }

}

let myRectangle1 = new Rectangle(5,3,"blue"); // Object creation
let myRectangle2 = new Rectangle(10,5,"red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.printDescription());
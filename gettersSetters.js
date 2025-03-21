class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;// The height is set to the same value as the width by default.

    }

    // The 'get' keyword is used to define a getter method for the 'area' property.
    // This allows us to access the area of the square as a property, rather than calling a method.
    // It is placed here to provide a convenient way to calculate the area based on the current width and height.
    /*get area(){ ... }

    This defines a "getter" method called area. The get keyword is crucial here. It allows you to access the calculated area as if it were a property of the object, rather than a method you have to call with parentheses. */
    get area(){// Getter method ,when you call it call it without parentheses cuz it is a property
        return this.width * this.height;
    }

    set area (area){
        this.width = area;
        this.height = area;
    }
}

let square1 = new Square(25);
console.log(square1.area); // 625 //for the getter

square1.area = 4; // This will work because we have defined a setter method for the area property. 

console.log(square1.area); // 16
console.log(square1.width);
console.log(square1.height);
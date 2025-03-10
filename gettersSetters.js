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
    get area(){
        return this.width * this.height;
    }
}

let square1 = new Square(25);
console.log(square1.area); // 625
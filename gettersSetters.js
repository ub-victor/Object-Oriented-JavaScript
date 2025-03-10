class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;

    }

    // The 'get' keyword is used to define a getter method for the 'area' property.
    // This allows us to access the area of the square as a property, rather than calling a method.
    // It is placed here to provide a convenient way to calculate the area based on the current width and height.
    get area(){
        return this.width * this.height;
    }
}

let square1 = new Square(25);
console.log(square1.area); // 625
class Squares { // Define a class named Square  
    constructor (_width){ // Constructor method that takes a parameter _width  
        this.width = _width; // Initialize the width property to _width  
        this.height = _width; // Initialize the height property to the same value as width  
    }  
    
    get area (){ // Define a getter for the area property  
        return this.width * this.height; // Calculate and return the area of the square  
    }  
    
    set area (area) { // Define a setter for the area property  
        this.width = Math.sqrt(area); // Set the width to the square root of the new area value  
        this.height = this.width; // Set the height to be equal to the new width, maintaining the square shape  
    }  
    
}  

// Create an instance of Square with a width of 4  
let square = new Squares(4);   
console.log(square.area); // Outputs the area of square1; expect 16
square.area = 25; // Set the area to 25; this updates width and height  
console.log(square.area) // Outputs the area of square; should print 25  
console.log(square.width); // Outputs the width of square1 after setting area; expect ~5  
console.log(square.height); // Outputs the height of square1 after setting area; expect ~5  

// Outputs from the above console logs  
// Expected Output:  
// 25           // This is the area, explicitly set to 25  
// 5            // Width is updated to sqrt(25), which is 5  
// 5            // Height is also updated to 5, maintaining the square shape  
function Animal(name) {  
    this.name = name;  
}  

Animal.prototype.speak = function() {  
    console.log(`${this.name} makes a noise.`);  
};  

function Dog(name, breed) {  
    Animal.call(this, name); // Call the parent constructor with the current context  
    this.breed = breed;  
}  

Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog; // Set the constructor property to Dog  
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

Dog.prototype.speak = function() {  
    console.log(`${this.name} barks.`);  
};  

const dog = new Dog('Rex', 'German Shepherd');  
dog.speak();  // Output: Rex barks.  
console.log(dog.breed);  // Output: German Shepherd  

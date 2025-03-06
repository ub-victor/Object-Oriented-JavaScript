// the syntax for naming classes is PascalCase
// PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized.
// PascalCase is also known as Upper Camel Case.
//the 'new' keyword is used to create a new instance of a class
// the 'class' keyword is used to define a class
// the 'constructor' method is a special method for creating and initializing an object created with a class
// Creates a new emply object {}
// sets the value of 'this' to the new empty object
// calls the constructor method
// returns the new object
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;

    }
}
// any time you create a new instance of a class, the constructor method is called
// eg: var userOne = new User();
// the constructor method is called when a new instance of a class is created
var userOne = new User('ryu@victor.com', 'Victor');
var userTwo = new User('ryu@victorine.com', 'Victorine');
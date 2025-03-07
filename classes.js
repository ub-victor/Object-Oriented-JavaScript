// the syntax for naming classes is PascalCase
// PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized.
// PascalCase is also known as Upper Camel Case.
//the 'new' keyword is used to create a new instance of a class
// the 'class' keyword is used to define a class
// the 'constructor' method is a special method for creating and initializing an object created with a class
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;

    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}
// any time you create a new instance of a class, the constructor method is called
// eg: var userOne = new User();
// the constructor method is called when a new instance of a class is created
var user1 = new User('ryu@victor.com', 'Victor');
var user2 = new User('ryu@victorine.com', 'Victorine');

// Creates a new emply object {}
// sets the value of 'this' to the new empty object
// calls the constructor method
// returns the new object

console.log(user1);
console.log(user2);

//userOne.login();
function People(email, name) {  
    this.email = email;  
    this.name = name;  
    this.online = false;  
    /*this.logins = function() {  
       console.log(this.email, 'has logged in');  
    }*/  
}  

// what is a prototype?
// A prototype is a property of a function that points to an object.
//eg: People.prototype
People.prototype.login = function (){
    this.online = true;
    console.log(this.email, 'has logged in');
}
// here the function login , will not be show in the object p1, but it will be in the prototype of the object p1
People.prototype.logout = function (){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Adm (...args){// this is a rest operator which is used to adm arguments separately 
    People.apply(this, args);
}

var p1 = new People('ryu@victor.com', 'Victor');  
var p2 = new People('ryu@constant.com', 'Constant'); 
var adm = new Adm();
console.log(p1);
p1.logins("kakule@gmail.com", "joker"); // This should display: "ryu@victor.com has logged in"  

// Demonstrating the difference  
// p1.logout(); // This executes the method and logs "ryu@victor.com has logged out"  

// p1.logout;   // This references the logout method without executing it  
// You can later execute it like this: p1.logout(); // It can be executed here  

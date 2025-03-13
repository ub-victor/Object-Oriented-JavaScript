function People(email, name) {  
    this.email = email;  
    this.name = name;  
    this.online = false;  
    //this.logins = function() {  
    //    console.log(this.email, 'has logged in');  
    }  
}  

// what is a prototype?
// A prototype is a property of a function that points to an object.
//eg: People.prototype
People.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

var p1 = new People('ryu@victor.com', 'Victor');  
var p2 = new People('ryu@constant.com', 'Constant'); 
p1.logins(); // This should display: "ryu@victor.com has logged in"  
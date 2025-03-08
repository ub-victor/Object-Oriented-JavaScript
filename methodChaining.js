class Users {
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

var userF = new User('ryu@victor.com', 'Victor');
var userS = new User('ryu@victorine.com', 'Victorine');


console.log(userF);
console.log(userS);
//userOne.login(); 

// Method chaining: calling multiple methods on the same object in a single statement
userF.login().logout();
userS.login().logout();//7 ,1:57:

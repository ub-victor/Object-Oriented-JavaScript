class Users {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;

    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updatedScore() {
        this.score++;
        console.log(this.email, "Score is now", this.score);
        return this;
    }
}

var userF = new User('ryu@victor.com', 'Victor');
var userS = new User('ryu@victorine.com', 'Victorine');

//userOne.login(); 

// Method chaining: calling multiple methods on the same object in a single statement
userF.login().updatedScore().updatedScore().logout();
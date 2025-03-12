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
        return this; //here you can output it using console.log without getting undefined
    }
}

// Creating objects
var userF = new Users('ryu@victor.com', 'Victor');
var userS = new Users('ryu@victorine.com', 'Victorine');


userF.login().updatedScore().updatedScore().logout();


/* Why the User Instance Isn’t Outputted
Behavior of the Methods:

Each method logs a specific message to the console when it’s called. However, you haven’t included a console.log() for the instance itself in methods like login() or logout(). As a result, the output will only reflect the specific messages contained within those methods, not the entire user instance.*/
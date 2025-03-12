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

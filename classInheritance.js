class Person {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.scores = 0;

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
        this.scores++;
        console.log(this.email, "Score is now", this.score);
        return this; //here you can output it using console.log without getting undefined
    }
}

// Creating objects
var Person1 = new Person('ryu@victor.com', 'Victor');
var Person2 = new Person('ryu@victorine.com', 'Victorine');


userF.login().updatedScore().updatedScore().logout();

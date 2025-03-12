class Person {
    constructor(emails, names){
        this.emails = emails;
        this.names = names;
        this.scores = 0;

    }
    login(){
        console.log(this.emails, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.emails, 'just logged out');
        return this;
    }
    updatedScore() {
        this.scores++;
        console.log(this.emails, "Score is now", this.scores);
        return this; //here you can output it using console.log without getting undefined
    }
}

class Admin extends Person {
    deletePerson(){
         
    }
}

// Creating objects

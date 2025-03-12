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
        return this;
    }
}

class Admin extends Person {
    deletePerson(person){
        persons = persons.filter(p => {
            return p.emails != person.emails;
        })
    }
}

var person1 = new Person('ryu@victor.com', 'Victor');
var person2 = new Person('ryu@victorine.com', 'Victorine');
var admin = new Admin("vainqueur@gmail.com", "Vainqueur");

var persons = [person1, person2, admin];

admin.deletePerson(person2);
console.log(persons);
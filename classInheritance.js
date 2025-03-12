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

var Person1 = new Person('ryu@victor.com', 'Victor');
var Person2 = new Person('ryu@victorine.com', 'Victorine');
var admin = new Admin("vainqueur@gmail.com", "Vainqueur");

var persons = [Person1, Person2, admin];

admin.deletePerson(Person2);
console.log(persons);
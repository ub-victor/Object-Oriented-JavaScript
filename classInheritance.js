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

/*The deleteUser method filters the users array, removing the specified user (userOne), resulting in a new array that only includes users whose emails do not match "victoire@gmail.com" (i.e., userTwo and admin). After the filtering process, the remaining users are [userTwo, admin]. */
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

admin.deletePerson(person1);
// The deleteUser(user) method takes a user object (userOne) as a parameter,  
// and filters the global users array to exclude the user whose email matches  
// user.email. This effectively removes userOne from the array, leaving only  
// users with different emails (userTwo and admin) in the final array.  
console.log(persons);
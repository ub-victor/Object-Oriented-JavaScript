// Create user one
var userOne ={
    eamil: 'ryu@victor.com',
    name: 'Ryu',
    friends: 'Yoshi',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}

// Create user two

var userOneEmail = 'ryu@victorine.com';
var userOneName = 'Yoshi';
var userOneFriends = ['Ryu', 'Mario'];

// Create user three

var userOneEmail = 'ryu@Constant.com';
var userOneName = 'Mario';
var userOneFriends = ['Yoshi'];

function login(email){
    console.log(email, "is now online")
}

function logout(email){
    console.log(email, "has logged out")
}


function logFriends(friends){
    friends.forEach(friends =>{
        console.log(friends)
    });
}

login(userOneEmail);


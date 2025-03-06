// Create user one  
var userOne ={  
    email: 'ryu@victor.com',  
    name: 'Ryu',  
    friends: 'Yoshi',  
    login(){  
        console.log(this.email, 'has logged in');  
    },  
    logout(){  
        console.log(this.email, 'has logged out');  
    }  
};  

userOne.name = 'Victor';// Update the name property
// you can also acess a name and change it var name the name by saying  pro= name, userOne[pro] = 'Victor';
// to add properties on the object you can say userOne['age'] = 25; or userOne.age = 25;
userOne.age = 25;

// to add a function to the object you can say userOne.info = function(){console.log('this is a function')};

// Create user two

var userTwo ={  
    email: 'ryu@victorine.com',  
    name: 'Yoshi',  
    friends: ['Ryu', 'Mario'],  
    login(){  
        console.log(this.email, 'has logged in');  
    },  
    logout(){  
        console.log(this.email, 'has logged out');  
    }  
};

// Create user three

var userTwo ={  
    email: 'ryu@victorine.com',  
    name: 'Yoshi',  
    friends: ['Ryu', 'Mario'],  
    login(){  
        console.log(this.email, 'has logged in');  
    },  
    logout(){  
        console.log(this.email, 'has logged out');  
    }  
};

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

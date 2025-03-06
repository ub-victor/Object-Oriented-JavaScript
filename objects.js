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

userOne.login();  // Correct way to call the login method  
function People(email, name) {  
    this.email = email;  
    this.name = name;  
    this.online = false;  
    this.logins = function() {  
        console.log(this.email, 'has logged in');  
    }  
}  

var p1 = new People('ryu@victor.com', 'Victor');  
p1.login(); // This should display: "ryu@victor.com has logged in"  
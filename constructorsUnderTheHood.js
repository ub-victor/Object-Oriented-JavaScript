function People (email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
    this.logout = function(){
        console.log(this.email, "has logged out")
    }
}

var p1 = new People('ryu@victor.com', 'Victor');
var p2 = new People('ryu@victorine.com', 'Victorine');

console.log(userOne);

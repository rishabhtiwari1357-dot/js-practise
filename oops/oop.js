const user = {
  username: "rishabh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    console.log(`Username: ${this.username}`);
    console.log(this)
    
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLogged){
  this.username = username,
  this.loginCount = loginCount,
  this.isLogged = isLogged

  return this
}

const user1 = new User("rishabh", 7, true)
const user2 = new User("rishiraj", 7, true)
// console.log(user1);
console.log(user1.constructor);



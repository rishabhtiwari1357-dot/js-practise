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
console.log(user.getUserDetails());


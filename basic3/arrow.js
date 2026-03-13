
const user = {
    username: "rishabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "rishabh"
//     console.log(this.username)
// }

// chai()

// const chai = function() {
//     let username = "rishabh"
//     console.log(this.username)
// }

// chai()

// const chai =  () => {
//     let username = "rishabh"
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2    
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)     

const addTwo = (num1, num2) =>  ({username: "rishabh"})

console.log(addTwo(4, 3))


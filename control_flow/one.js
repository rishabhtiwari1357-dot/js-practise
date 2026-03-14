// if

const isLoggedIN = true
const temperature = 41


// if ( temperature < 50){
//     console.log("cannot boil water")
// } else{
//     console.log("water can be boiled")
// }


// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

const balance = 1000

// if (balance > 500) console.log("enough balance");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log(" You are allowed to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
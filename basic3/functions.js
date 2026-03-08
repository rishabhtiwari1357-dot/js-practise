// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

 addTwoNumbers(4,3)
// sum = addTwoNumbers(4,3)
// console.log("result is: ",sum)

// console.log(addTwoNumbers(4, 3))
// result = addTwoNumbers(2,3)
// console.log(result)


// function loginUserMessage(username = "kunal"){
//     if(!username){
//         console.log("Please enter a valid username")
//         return
//     }
//     return `Welcome back, ${username}!`
// }

// console.log(loginUserMessage("rohit_sharma"))


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a valid username")
        return
    }
    return `Welcome back, ${username}!`
}

// console.log(loginUserMessage())
loginUserMessage()
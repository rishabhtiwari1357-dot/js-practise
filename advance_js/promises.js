// const promiseOne = new Promise(function(reslove, reject){
//   setTimeout(function(){
//     console.log("Async task is completed");
//     reslove()
//   }, 1000)
// })

// promiseOne.then(function(){
//   console.log("Promise consumed")
// })


// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 2");
//     resolve()
//   }, 1000)
// }).then(function(){
//   console.log("Async 2 resolved")
// })


// const promiseThree = new Promise(function (resolve, reject){
//   setTimeout(function(){
//     resolve({username: "rishabh_rt", email: "rishabh1357@gmail.com"})
//   }, 1000)
// })

// promiseThree.then(function(user){
//   console.log(user)
// })


const promiseFour = new promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "rishabh", password: "123"})
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promiseFour.then( (user) => {console.log(user)} )
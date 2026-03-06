const mySym = Symbol("key1")

const jsUser = {
    name: "rishabh",
    "full name": "rishabh tiwari",
    age: 18,
    location: "Rudrapur",
    email: "rishabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
    [mySym]: "mykey1"

}
console.log(jsUser["email"]);
jsUser.email = "rishabh@chatgpt.com" 
Object.freeze(jsUser)
jsUser.email = "rishabh@microsoft.com"
console.log(jsUser[mySym])


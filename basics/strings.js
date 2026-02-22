// const name = "rishabh"
// console.log(`Hello my name is ${name}`);

const gameName = new String('rishabh_tiwari')

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// const game = gameName.substring(0, 4);
// console.log(game)

const newWord = gameName.slice(-7, 4)
// console.log(newWord)

const url = "https://rishabh.com/rishabh%20tiwari"

console.log(url.replace('%20', '_'))

console.log(url.includes("rishabh"))

console.log(gameName.split('_'))


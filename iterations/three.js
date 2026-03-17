// for of

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    // console.log(element);
    
}

const greetings = "Hello world"
for (const element of greetings) {
    // console.log(element)
}


const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('IND', "INDIA")

// console.log(map)

for (const [element , elements_val] of map) {
    // console.log(element, ':', elements_val)
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const element of myObj) {
    // console.log(element)
}
// for of

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    // console.log(element);
    
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}
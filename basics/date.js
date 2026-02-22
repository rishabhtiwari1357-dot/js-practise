let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString);
// console.log(date.toLocaleString());

// let createDate = new Date(2023, 0, 22)
// console.log(createDate)
// console.log(createDate.toLocaleDateString())

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())

// let ndate = new Date("2026-02-15")
// console.log(ndate.toLocaleString())

// let timeStamp = Date.now()
// console.log(timeStamp)

let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))
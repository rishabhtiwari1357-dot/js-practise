// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "rishabhs_twt"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Rishabh",
            LastName: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1, obj2)

// const obj3 = {obj1, obj2}

const obj3 = {...obj1, ...obj2} 
// this is spread operator 

// console.log(obj3)
// console.log(obj1)

const user = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    }
]

// console.log(user[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('id'))

const course = {
    courseName: "JavaScript",
    price: 222,
    courseInstructor: "rishabh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)
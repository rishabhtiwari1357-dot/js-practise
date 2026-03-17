const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by app'
}

// for (const element in myObj) {
//    console.log(`${element} is shortcut for ${myObj[element]}`)
// }

const progg_lang = ["js", "rb", "py", "java", "cpp"]

for (const key in progg_lang) {
    console.log(progg_lang[key]);
}
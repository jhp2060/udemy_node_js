const fs = require('fs')

// const book = {
//     title: 'Story of Your Life',
//     author: 'Ted Chang',
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const data = JSON.parse(dataBuffer.toString())
// console.log(dataJSON)


var data = JSON.parse(fs.readFileSync('./1-json.json'))
data.name = 'JinHyeok'
data.age = 25
fs.writeFileSync('1-json.json', JSON.stringify(data))

// uses node API (web API), which can invoke asynchronous process 
setTimeout( () => {
    // a callback funciton 
    // a function we provide as an argument to another function
    // with the intention of having it called later on.
    console.log('Two seconds are up')
}, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => names.length <= 4)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(JSON.stringify(data))
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add =  (a, b, callback) => {
    setTimeout( () => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
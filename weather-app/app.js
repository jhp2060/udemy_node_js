const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!process.argv[2]) {
    console.log('Enter the location to search')
    return
}

geocode(process.argv[2], (error, data) => {
    if (error){
        return console.log('Error', error)
    } 
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!process.argv[2]) {
    console.log('Enter the location to search')
    return
}

geocode(process.argv[2], (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log('Error', error)
    }
    console.log(location)
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(forecastData)
    })
})
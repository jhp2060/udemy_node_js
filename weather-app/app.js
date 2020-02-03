const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('서강대학교', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    if (!error) {
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
        })
    }
})


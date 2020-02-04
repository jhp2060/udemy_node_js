const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/414ae3e15f37932392fe1a82cf1ef155/${latitude},${longitude}?lang=ko&units=si`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connec to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + '\nIt is currently ' + body.currently.temperature + ' degrees out. ' + 'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}

module.exports = forecast

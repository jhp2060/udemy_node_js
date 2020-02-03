const request = require('request')

// const url = 'https://api.darksky.net/forecast/414ae3e15f37932392fe1a82cf1ef155/37.505903, 126.861852?lang=ko&units=si'

// request({ url: url, json: true }, (error, response)=> {
//     if (error) {
//         console.log('Unable to connec to weather service!')
//     } else if (response.body.error) {   
//         console.log('Unable to find the location')
//     } else {
//        const data = response.body.currently
//         console.log(response.body.daily.data[0].summary)
//         console.log('It is currently '+data.temperature+' degrees out.')
//         console.log('There is a '+data.precipProbability+'% chance of rain.')

//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Gocheok.json?access_token=pk.eyJ1IjoiamhwMjA2MCIsImEiOiJjazYzcWt5YjUwZXU3M21wcG11ZzZxYXAyIn0.D6pVNdphmgDzuu_8uZkPaA&limit=1'

request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
        console.log('something wrong')
    } else if (!response.body.features) {
        console.log('no search result matching')
    } else {
        const data = response.body.features[0]
        console.log(data.text + ' @(' + data.center[1] + ',' + data.center[0] + ')')
    }
})
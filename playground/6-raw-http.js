const https = require('https')

const url = `https://api.darksky.net/forecast/414ae3e15f37932392fe1a82cf1ef155/40,-75?lang=ko&units=si`

const request = https.request(url, (response)=>{
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)       
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
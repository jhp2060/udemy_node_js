const express= require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Welcome')
})

// app.com/help
app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('<title>about us</title>')
})

app.get('/weather', (req, res) => {
    const data ={
        forecast: 'forecast',
        location: 'location',
    }
    res.send(data)
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
const path = require('path')
const express= require('express')

const app = express()

// Define the paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup hanldebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jinhyeok',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'What can I do 4 u?',
    })
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
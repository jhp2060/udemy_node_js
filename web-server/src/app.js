const path = require('path')
const express= require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

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
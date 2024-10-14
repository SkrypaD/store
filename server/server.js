const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


app.get('/', (req, res) => {
    console.log('request')
    res.json({
        name: 'Danil',
        age: 19,
        hasJob: false
    })
})


app.listen(5000, () => {
    console.log(`app is rolling on port 5000`)
})

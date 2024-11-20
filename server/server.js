const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const productRoute = require('./routes/products')


app.use('/products', productRoute)

app.get('/', (req, res) => {
    res.json({ message : 'Hello world' })
})


app.listen(5000, () => {
    console.log(`app is rolling on port 5000`)
})

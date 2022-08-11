const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())
app.use('/api/v1', router)

app.use((req, res) => {
    res.status(404).send({
        message: 'not found'
    })
})
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})
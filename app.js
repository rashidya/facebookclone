const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4500

const url = 'mongodb://localhost/facebook'
const user = require('../facebookclone/routes/users.js')

mongoose.connect(url,{ useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB Connected!')
})

app.use(express.json())

app.use('/user', user)

app.listen(port, () => {
    console.log(`App is listening on port -  ${port}`);
})

const express = require('express')
const app = express()
const path = require('path')

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello world</h1>')
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.get('/contact', (req, res) => {
//     // res.send('<h1>Hello world</h1>')
//     res.sendFile(path.join(__dirname, 'contact.html'))
// })

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.get('/contact', (req, res) => {
    res.render('contact.pug')
})

app.listen(3000, () => {
    console.log('Express working on 3000 port');
})
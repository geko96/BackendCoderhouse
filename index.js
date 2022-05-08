const { randomBytes } = require('crypto')
const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080
let arr = JSON.parse(fs.readFileSync('./productos.txt','utf-8'))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

app.get('/', (req,res) => {
    return res.send('Pagina de prueba')
})

app.get('/productos', (req,res) => {
    return res.send(arr)
})

app.get('/productosRandom', (req,res) => {
    return res.send(arr[getRandomInt(1,7)])
})

const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})
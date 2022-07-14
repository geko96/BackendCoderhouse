var faker = require('faker');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.set('views','./views')
app.set('view engine','hbs')
const { engine } = require('express-handlebars')

const engineFN = engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
})

app.engine('hbs',engineFN)

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/', express.static('./public'))

app.get('/',(req,res)=>{
    res.render('layouts/main.hbs',{
        title: 'Home'
    })
})

app.get('/api/productos',(req,res) => {
    console.log(req.query)
    let n = req.query.n

    res.send(GetRandom(n))
})



const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})




//////////////////////////////////////////////////////////////////////////////////////////////
// Contenedor de datos

function GetRandom (number) {
    let ProdArray = []

    for (let i = 0; i < number; i++) {
        let Producto = {
            id: i,
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            stock: faker.datatype.number(),
            descripcion: faker.lorem.sentence(),

        }
        ProdArray.push(Producto)
    }

    return ProdArray
    
}
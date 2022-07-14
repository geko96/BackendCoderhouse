const { Console } = require('console')
const { randomUUID, randomBytes } = require('crypto')
const fs = require('fs')
let file = './datos.txt'
let id= 0
const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.set('views','./views')
app.set('view engine','hbs')

var path = require('path');

const { engine } = require('express-handlebars')

const engineFN = engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
})

app.engine('hbs',engineFN)





/////////////////////////////Contenedor de datos
class Item {
    constructor (id,data) {
        this.id = id,
        this.data = data
    }
}



class Contenedor {
    constructor(location) {
        this.location = location
    }

    save (dataIn) {
        
        return fs.readFile(this.location,'utf-8',(err,ok) => {
            if (err) {
                fs.writeFile(this.location,JSON.stringify([new Item(0,dataIn)]),(err,ok) => {
                    if (err) {
                        console.log('no se pudo crear el archivo')
                    }
                    if (ok) {
                        console.log('se genero un nuevo archivo')
                    }
                })
            }
            if (ok) {
                let arrFile = (fs.readFileSync(this.location,'utf-8'))
                let arr = JSON.parse(arrFile)
                let id =arr.length
                let dato = new Item(id,dataIn)

                arr.push(dato)
                
                
                console.log(arr)
                fs.writeFileSync(this.location,JSON.stringify(arr))
                return dato
            }
        })

    }
    getById (number) {
        try {
        let arrFile = (fs.readFileSync(this.location,'utf-8'))
        let arr = JSON.parse(arrFile)

        return arr[number]
        }catch {
            return ('Id no existente')
        }
        
    }

    getAll() {
        let arrFile = (fs.readFileSync(this.location,'utf-8'))
        let arr = JSON.parse(arrFile)
        return arr
        
    }

    getLastId() {
        let arrFile = (fs.readFileSync(this.location,'utf-8'))
        let arr = JSON.parse(arrFile)
        console.log(arr.length)
        return arr.length
        
    }

    deleteById (number) {
        try {
            let arrFile = (fs.readFileSync(this.location,'utf-8'))
            let arr = JSON.parse(arrFile)

            arr[number].data = ''
            
            fs.writeFileSync(this.location,JSON.stringify(arr))
            return ('Item Eliminado '+ number)
       
        }catch {}
    }

    deleteAll () {
        try {
            fs.writeFileSync(this.location,'')
        }catch {}
    }

    refresh (id,data){
        let arrFile = (fs.readFileSync(this.location,'utf-8'))
        let arr = JSON.parse(arrFile)

        let dataso = new Item(id,data)
        console.log('actualizando item '+ JSON.stringify(dataso))
        arr[id] = dataso

        fs.writeFileSync(this.location,JSON.stringify(arr))

    }
}

let contenedor1 = new Contenedor(file)




////////////////////////////////////Server Express////////////////////////////

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




app.get('/api/productos', (req,res) => {
    return res.send(contenedor1.getAll())
})

app.get('/api/productos/:id', (req,res) => {
    const id = (req.params.id)
    return res.send(contenedor1.getById(id))
})

app.post('/api/productos', (req,res) => {
    let newData = req.body
    let arreglo = contenedor1.save(newData)
    let UltimoId = contenedor1.getLastId();
    res.json(UltimoId)
})

app.put('/api/productos/:id', (req,res) => {
    const id = (req.params.id)
    const data = req.body.data

    return res.send(contenedor1.refresh(id,data))
})

app.delete('/api/productos/:id',(req,res) => {
    let item = req.params.id
    console.log('item eliminado '+ item)
    contenedor1.deleteById(item)
    res.status(204).json('Archivo eliminado')
})



//////////////////////////Plantillas

app.get('/', (req,res) => {
    const datos = contenedor1.getAll()
    const data = {
        Titulo:'Sitio Con HandleBars',
        mensaje: datos
    }

    return res.render('layouts/main',data)
})

app.post('/productos', (req,res) => {
    contenedor1.save(req.body)
    const data = {
        Titulo:'Sitio Con Pug',
        id:"ID" + contenedor1.getLastId(),
        mensaje:JSON.stringify(req.body)
    }
    
    return res.render('productos.pug',data)
})

app.get('/productos', (req,res) => {
    return res.json(contenedor1.getAll())
})

app.use('/', express.static('./public'))


const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})
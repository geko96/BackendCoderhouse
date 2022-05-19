const { Console } = require('console')
const { randomUUID, randomBytes } = require('crypto')
const fs = require('fs')
let file = './datos.txt'
let id= 0
const express = require('express')
const app = express()
const PORT = 8081

app.use(express.json())
app.use(express.urlencoded({ extended:true }))



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

app.get('/', (req,res) => {
    
    return res.send('Pagina de inicio')
})

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

const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})
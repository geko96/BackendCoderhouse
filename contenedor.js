const { Console } = require('console')
const { randomUUID } = require('crypto')
const fs = require('fs')
let file = './datos.txt'
let id= 0
const express = require('express')
const app = express()
const PORT = 8080



/////////////////////////////Contenedor de datos

class Contenedor {
    constructor(location) {
        this.location = location
    }

    save (dataIn) {
        let element = {
            id: 0,
            data: dataIn
        }
        
        let data = fs.readFile(this.location,'utf-8',(err,ok) => {
            if (err) {
                fs.writeFile(this.location,JSON.stringify(element),(err,ok) => {
                    if (err) {
                        console.log('no se pudo crear el archivo')
                    }
                    if (ok) {
                        console.log('se genero un nuevo archivo')
                    }
                })
            }
            if (ok) {
                let arr = fs.readFileSync(this.location,'utf-8').split(' ')
                console.log('array length')
                console.log(arr.length)
                let id = arr.length + 1
                console.log('archivos existentes')
                let dat = fs.readFileSync(this.location,'utf-8')
                 
                let guardar = dat+' '+JSON.stringify({'id':id,'dat':randomUUID()})
        
                fs.writeFileSync(this.location,guardar)

                
                element = {
                    'id': id,
                    'data': dataIn
                }
                console.log('entrada agregada con el index: ')
                console.log(id)
            }
        })

    }
    getById (number) {
        try {
        let arr = fs.readFileSync(this.location,'utf-8').split(' ')
        console.log('getById')

        console.log(JSON.parse(arr[number]))
        console.log(' ')

        }catch {
            console.log('getById')
            console.log('No existe base de datos')
        }
    }

    getAll() {
        try {
        let arr = fs.readFileSync(this.location,'utf-8').split(' ')
        console.log('getAll')
        let arre = []

        for (let i = 0; i < arr.length; i++){
            arre.push(JSON.parse(arr[i]))
            
        }
        console.log('')
        return arre
        }catch {

        }
    }

    deleteById (number) {
        try {
        let arr = fs.readFileSync(this.location,'utf-8').split(' ')
        let eliminar = arr[number]
        console.log('el siguiente elemento se eliminara')
        console.log(eliminar)
        console.log(' ')
        arr.splice(number,1)
        console.log('array actualizado')
        console.log(arr)
        console.log('')
        }catch {}
    }

    deleteAll () {
        try {
            fs.writeFileSync(this.location,'')
        }catch {}
    }
}

let contenedor1 = new Contenedor(file)
console.log(contenedor1.save('chau'))
contenedor1.getById(3);
contenedor1.getAll();
contenedor1.deleteById(1)
//contenedor1.deleteAll()

////////////////////////////////////Server Express////////////////////////////

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

app.get('/', (req,res) => {
    
    return res.send('Pagina de inicio')
})

app.get('/productos', (req,res) => {
    return res.send(contenedor1.getAll())
})

app.get('/productosRandom', (req,res) => {
    return res.send(contenedor1.getAll()[getRandomInt(1,contenedor1.getAll().length)])
})

const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})
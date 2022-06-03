
const PORT = 8080

const express = require('express');
const app = express();
const server = app.listen(PORT, () => {
    console.log("Server iniciado en puerto: " + PORT);
});
const io = require('socket.io')(server);

let users = []


const file = './datos.txt'
const fs = require('fs')



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


app.get('/', (req,res) => {
    let data = {
        Titulo:'Sitio Con HandleBars'
    }
    return res.render('layouts/main.hbs',data)
})

app.use('/', express.static('./public'))

io.on('connection', socket => {
    console.log('Nuevo usuario conectado')
})




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
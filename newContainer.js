
const PORT = 8080

const express = require('express');
const app = express();
const server = app.listen(PORT, () => {
    console.log("Server iniciado en puerto: " + PORT);
});
const io = require('socket.io')(server);



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
        Titulo:'Sitio Con Mysql y Sqlite3'
    }
    return res.render('layouts/main.hbs',data)
})

app.post('/api/productos', (req,res) => {
    let data = req.body
    console.log(req.params)
    console.log(data)
    products.save(data)
    io.emit('catalogo',products.getAll())
    
    return res.send('ok')
})

app.use('/', express.static('./public'))

io.on('connection', socket => {
    console.log('Nuevo usuario conectado')
    socket.emit('catalogo',products.getAll())


    socket.on('sendProduct', data => {
        console.log(data)
        products.save(data)
        
    })
})






/// knex
const optionsMysql = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'web'
    }
}

const optionsSqlite = {
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./db/ecomerce.sqlite"
    }
}


/// Contenedor 

class container {
    constructor(options,tableIn) {
        this.tableIn = tableIn
        this.options = options
        this.db = require('knex')(options)
    }

    save (data) {
        this.db(`${this.tableIn}`).insert(data).finally(() => {this.db.destroy()})
        
        
        
    }

    delete (id) {
        this.db(`${this.tableIn}`).where('id',id).del().finally(() => {console.log('ok')})
    }

    update (id,data) {
        this.db(`${this.tableIn}`).where('id',id).update(data).finally(() => {console.log('ok')})
    }

    getById (id) {
        return this.db(`${this.tableIn}`).where('id',id).first().finally(() => {console.log('ok')})
    }

    getAll () {
        let data = this.db(`${this.tableIn}`).select().finally(() => {console.log('getAll ok')})
        data.then(data => {
            console.log(data)
            return data
        })
       
    }

    deleteAll () {
        this.db(`${this.tableIn}`).del().finally(() => {console.log('ok')})
    }
}	


let products = new container(optionsMysql,'products')
let chats = new container(optionsSqlite,'chats')


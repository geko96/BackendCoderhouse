import { optionsMysql } from './db/options';
import { optionsSqlite } from './db/options';

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
        Titulo:'Sitio Con HandleBars'
    }
    return res.render('layouts/main.hbs',data)
})

app.use('/', express.static('./public'))

io.on('connection', socket => {
    console.log('Nuevo usuario conectado')
})


/// knex



/// Contenedor 

class container {
    constructor(options,tableIn) {
        this.tableIn = tableIn
        this.options = options
        this.db = require('knex')(options)
    }

    save (data) {
        this.db.schema.createTable(`${tableIn}`, (table) => {
            table.increments('id')
            table.string('name')
            table.float('price')
            table.integer('Stock')
          })
          .then(() => {
            this.db(`${tableIn}`).insert(data)
          })
        
    }

    delete (id) {
        this.db(`${tableIn}`).where('id',id).del()
    }

    update (id,data) {
        this.db(`${tableIn}`).where('id',id).update(data)
    }

    getById (id) {
        return this.db(`${tableIn}`).where('id',id).first()
    }

    getAll () {
        return this.db(`${tableIn}`).select()
    }

    deleteAll () {
        this.db(`${tableIn}`).del()
    }
}	


let products = new container(optionsMysql,'products')
let chats = new container(optionsSqlite,'chats')
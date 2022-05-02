const fs = require('fs')
const { json } = require('stream/consumers')
let file = './datos.txt'
let id= 0
class Contenedor {
    constructor(location) {
        this.location = location
    }

    save (dataIn) {
        let element = [dataIn]
        
        fs.readFile(this.location,'utf-8',(err,ok) => {
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
                console.log('archivos existentes')
                let dat = fs.readFileSync(this.location,'utf-8')
                dat = JSON.parse(dat)
                 
                let guardar = JSON.stringify(dat+' '+ element)
        
                fs.writeFileSync(this.location,guardar)

                let arr = fs.readFileSync(this.location,'utf-8').split(' ')
                console.log('entrada agregada con el index: ')
                console.log(arr.indexOf(element).id)
            }
        })
       
        
       

    }
}

let contenedor1 = new Contenedor(file)
console.log(contenedor1.save('chau'))

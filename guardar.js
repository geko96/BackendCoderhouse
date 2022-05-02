const fs = require('fs')
const { stringify } = require('querystring')

indexFile = './index.txt'



function Index () {
    let id = fs.readFile(indexFile,'utf-8',(err, ok) => {
        if (err) {
            console.log('No se pudo leer el archivo')
            console.log('creando archivo base')
            fs.writeFile(indexFile,'0',(err, ok) => {
                if (err) {
                    console.log('no se puede crear archivo')
                    id = 0
                }
                if (ok) {
                    console.log('archivo creado')
                }
            })
        }
        if (ok) {
            let arr = parseInt(id)
            console.log(arr)
        }
    })
}

Index();
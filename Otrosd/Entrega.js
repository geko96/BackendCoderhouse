let datos = './datos1.txt'





class Contenedor {
    constructor (location) {
        this.location = location

    }

    

    save (dataIn) {

        let Firstelement = {
            id: 0,
            data: dataIn
        }

        let data = fs.readFile(this.location,'utf-8',(err,ok) => {
            if (err) {
                fs.writeFile(this.location,JSON.stringify([firstElement]),(err,ok) => {
                    if (err) {
                        return console.log('no se pudo crear el archivo')
                    }
                    if (ok) {
                        return console.log('se genero un nuevo archivo')
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
                 
                let guardar = dat+' '+JSON.stringify({'id':id,'dat':'algo'})
        
                fs.writeFileSync(this.location,guardar)

                
                element = {
                    'id': id,
                    'data': dataIn
                }
                console.log('entrada agregada con el index: ')
                console.log(id)
                return element
            }
        })
    }
}
const fs = require('fs')

class producto {
    constructor (id,nombre,precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }

}

let prod1 = new producto('0',"Pan",100)
let prod2 = new producto('1',"Aceite",600)
let prod3 = new producto('2',"Sal",50)
let prod4 = new producto('3',"Tomate",200)
let prod5 = new producto('4',"Mayonesa",375)
let prod6 = new producto('5',"Mortadela",1500)

let arr = [prod1,prod2,prod3,prod4,prod5,prod6]

console.log(arr)

fs.writeFileSync('./productos.txt',JSON.stringify(arr))

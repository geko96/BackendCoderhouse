/* Requeriemiento de la entrega semanal */



class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas 
    }

    addMascota (name) {
        this.mascotas += `,${name}`
    }

    getFullName () {
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    
    countMascotas () {
        let localPet = this.mascotas
        let skere = localPet.split(",")
        return skere.length
    }
    
    addBook (nombre,editorial) {
        let newBook = {
            name: nombre,
            edit: editorial
        }
        this.libros.push(newBook)
    }

    getBookNames () {
        let localbook = this.libros

        for (var i = 0; i < localbook.lengt; i++){
            return localbook[i].map(x => x.name)
        }
        
        return JSON.stringify(localbook)
    }





}


const alberto = new Usuario("alberto","juarez",[],"perro")

alberto.addBook("libro1","editorial1")
alberto.addBook("libro2","editorial2")
alberto.addBook("libro3","editorial3")

alberto.addMascota("perry")
alberto.addMascota("langosta")
alberto.getFullName()
console.log(alberto.countMascotas())

console.log(" ")
console.log(alberto.getBookNames())






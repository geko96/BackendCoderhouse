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
        const boke = {
            nombre,
            editorial
        }
    
        this.libros.push(boke)
    }

    getBookNames () {
        for (let i = 0; i < this.libros.length; i++){
            return this.libros.map(x => x.nombre)
        }
        
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

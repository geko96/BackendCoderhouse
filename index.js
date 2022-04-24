/* Requeriemiento de la entrega semanal */
let usuarios = []

class Usuario {
    constructor (nombre,apellido,libros,mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

class libro {
    constructor (libro,editorial) {
        this.libro = libro
        this.editorial = editorial
    }
}

const mascotas = ["perro","gato","canario"]


let books = [
    
]

const alberto = new Usuario("alberto","juarez",books,JSON.stringify(mascotas))



function getFullName () {
    let fullname = alberto.nombre + " " + alberto.apellido
    console.log("getFullName function")
    console.log(fullname)
    console.log(" ")
}

getFullName();

function addMascota (name) {
    let pets = this.mascotas
    mascotas.push(name)
    console.log("addMascota function")
    console.log(mascotas)
    console.log(" ")
}

addMascota("perry");




function countMascotas () {
   
    console.log("countMascotas function")
    console.log(mascotas.length)
    console.log(" ")

}

countMascotas();

function addBook (nombre,editorial) {
    let lib = new libro(nombre,editorial)
    books.push(lib)
    console.log("addBook Function")
    console.log(lib)
    console.log("")

    
}

addBook("Endgame","James Frey")
addBook("Biblia", "reina no se que")
addBook("javascript", "algun programador")

function getBookNames () {
    console.log("getBookNames function")
    console.log(books.length)
    let arr = books
    console.log(arr.map(x => x.libro))

    for (var i = 0; i < books.lengt; i++){
        console.log(books[i])
    }
}

getBookNames();




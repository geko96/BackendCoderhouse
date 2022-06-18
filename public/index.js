

const socket = io()
let productos = []



socket.on('catalogo', data => {
    console.log(data)
    let container = document.getElementById('tableBody')
    data.map(product => {
        container.innerHTML += `<tr><td>${product.Id}</td><td>${product.Data}</td></tr>`
    })
    

})






document.getElementById('send').addEventListener('click', () => {
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let stock = document.getElementById('stock').value
    let data = {name,price,stock}
    socket.emit('sendProduct', data)
    

})
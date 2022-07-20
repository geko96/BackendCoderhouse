
axios.get('/api/productos?n=5')
    .then(function (response) {
        
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            let container = document.getElementById('tableBody')
            container.innerHTML += `
            <tr><td>${response.data[i].id}</td><td>${response.data[i].nombre}</td><td>${response.data[i].precio}</td><td>${response.data[i].stock}</td></tr>`
        }
})


const socket = io()

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
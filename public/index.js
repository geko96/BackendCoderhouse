
axios.get('/api/productos?n=5')
    .then(function (response) {
        
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            let container = document.getElementById('tableBody')
            container.innerHTML += `
            <tr><td>${response.data[i].id}</td><td>${response.data[i].nombre}</td><td>${response.data[i].precio}</td><td>${response.data[i].stock}</td></tr>`
        }
    })
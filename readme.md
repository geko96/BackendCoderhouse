# Backend Coderhouse

![](https://camo.githubusercontent.com/929001314046a472e018b69275ec25016a872605e8505ce9a32c5937612ad9ae/68747470733a2f2f6a6f62732e636f646572686f7573652e636f6d2f6173736574732f6c6f676f735f636f646572686f7573652e706e67)


## Entrega desafio crud en MongoDb

- Listar bases de datos
```
show databases
```


> admin   40.00 KiB
> config  60.00 KiB
> local   40.00 KiB
---

- Usar database ecomerce

```
use ecomerce
```
---

- Agregar 10 entradas en la tabla productos

```
let products = [
	{"id":1, "name":"Coca Cola", "price":250, "stock":200},
	{"id":2, "name":"Pepsi", "price":100, "stock":200},
	{"id":3, "name":"Papas Fritas", "price":115, "stock":200},
	{"id":4, "name":"Caramelos", "price":500, "stock":200},
	{"id":5, "name":"Soda", "price":3700, "stock":200},
	{"id":6, "name":"Agua", "price":850, "stock":200},
	{"id":7, "name":"Fanta", "price":777, "stock":200},
	{"id":8, "name":"Mirinda", "price":375, "stock":200},
	{"id":9, "name":"Vodka", "price":199, "stock":200},
	{"id":10, "name":"Wisky", "price":676, "stock":200},
]
```
```
db.products.insertMany(products)
```

> {
 acknowledged: true,
 insertedIds: {
   '0': ObjectId("62b7b161a25d6751ea84e700"),
   '1': ObjectId("62b7b161a25d6751ea84e701"),
    '2': ObjectId("62b7b161a25d6751ea84e702"),
    '3': ObjectId("62b7b161a25d6751ea84e703"),
    '4': ObjectId("62b7b161a25d6751ea84e704"),
    '5': ObjectId("62b7b161a25d6751ea84e705"),
    '6': ObjectId("62b7b161a25d6751ea84e706"),
    '7': ObjectId("62b7b161a25d6751ea84e707"),
    '8': ObjectId("62b7b161a25d6751ea84e708"),
    '9': ObjectId("62b7b161a25d6751ea84e709")
   }
}
---
- Agregar 10 entradas a tabla mensajes

```
let mensajes = [
	{"owner":"german","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Ricardo","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Fabian","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Marcos","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"german","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"german","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Fabian","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Ricardo","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Ricardo","date":"11/05/22","mensaje":"Mensaje de prueba"},
	{"owner":"Bruno","date":"11/05/22","mensaje":"Mensaje de prueba"},
]
```

```
db.mensajes.insertMany(mensajes)
```
> {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62b7b2eba25d6751ea84e70a"),
    '1': ObjectId("62b7b2eba25d6751ea84e70b"),
    '2': ObjectId("62b7b2eba25d6751ea84e70c"),
    '3': ObjectId("62b7b2eba25d6751ea84e70d"),
    '4': ObjectId("62b7b2eba25d6751ea84e70e"),
    '5': ObjectId("62b7b2eba25d6751ea84e70f"),
    '6': ObjectId("62b7b2eba25d6751ea84e710"),
    '7': ObjectId("62b7b2eba25d6751ea84e711"),
    '8': ObjectId("62b7b2eba25d6751ea84e712"),
    '9': ObjectId("62b7b2eba25d6751ea84e713")
  }
}
---

- Listar Productos

```
db.products.find()
```

> [
  {
    _id: ObjectId("62b7b161a25d6751ea84e700"),
    id: 1,
    name: 'Coca Cola',
    price: 250,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e701"),
    id: 2,
    name: 'Pepsi',
    price: 100,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e702"),
    id: 3,
    name: 'Papas Fritas',
    price: 115,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e703"),
    id: 4,
    name: 'Caramelos',
    price: 500,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e704"),
    id: 5,
    name: 'Soda',
    price: 3700,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e705"),
    id: 6,
    name: 'Agua',
    price: 850,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e706"),
    id: 7,
    name: 'Fanta',
    price: 777,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e707"),
    id: 8,
    name: 'Mirinda',
    price: 375,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e708"),
    id: 9,
    name: 'Vodka',
    price: 199,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e709"),
    id: 10,
    name: 'Wisky',
    price: 676,
    stock: 200
  }
]

---

- Listar mensajes

```
db.mensajes.find()
```

> [
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70a"),
    owner: 'german',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70b"),
    owner: 'Ricardo',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70c"),
    owner: 'Fabian',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70d"),
    owner: 'Marcos',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70e"),
    owner: 'german',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e70f"),
    owner: 'german',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e710"),
    owner: 'Fabian',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e711"),
    owner: 'Ricardo',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e712"),
    owner: 'Ricardo',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  },
  {
    _id: ObjectId("62b7b2eba25d6751ea84e713"),
    owner: 'Bruno',
    date: '11/05/22',
    mensaje: 'Mensaje de prueba'
  }
]

---
- Mostrar cantidad de items en cada taba


```
db.mensajes.count()
```
> 10

```
db.products.(count)
```

> 10

---

- Añadir un producto

```
db.products.insertOne({"name":"Hamburguesa","Price":800})
```

> {
  acknowledged: true,
  insertedId: ObjectId("62b7b5bea25d6751ea84e714")
}

---

- Listar productos con precio menor a $1000

```
db.products.find({price: {$lt: 1000}})
```

> [
  {
    _id: ObjectId("62b7b161a25d6751ea84e700"),
    id: 1,
    name: 'Coca Cola',
    price: 250,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e701"),
    id: 2,
    name: 'Pepsi',
    price: 100,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e702"),
    id: 3,
    name: 'Papas Fritas',
    price: 115,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e703"),
    id: 4,
    name: 'Caramelos',
    price: 500,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e705"),
    id: 6,
    name: 'Agua',
    price: 850,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e706"),
    id: 7,
    name: 'Fanta',
    price: 777,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e707"),
    id: 8,
    name: 'Mirinda',
    price: 375,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e708"),
    id: 9,
    name: 'Vodka',
    price: 199,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e709"),
    id: 10,
    name: 'Wisky',
    price: 676,
    stock: 200
  }
]

- Listar productos con precio mayor a $3000

```
db.products.find({price: {$gt: 3000}})
```

> [
  {
    _id: ObjectId("62b7b161a25d6751ea84e704"),
    id: 5,
    name: 'Soda',
    price: 3700,
    stock: 200
  }
]

-  Listar productos entre $1000 y $3000

```
db.products.find({$or: [{price: {$lt: 1000}},{price: {$gt: 3000}}]})
```
> [
  {
    _id: ObjectId("62b7b161a25d6751ea84e700"),
    id: 1,
    name: 'Coca Cola',
    price: 250,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e701"),
    id: 2,
    name: 'Pepsi',
    price: 100,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e702"),
    id: 3,
    name: 'Papas Fritas',
    price: 115,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e703"),
    id: 4,
    name: 'Caramelos',
    price: 500,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e704"),
    id: 5,
    name: 'Soda',
    price: 3700,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e705"),
    id: 6,
    name: 'Agua',
    price: 850,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e706"),
    id: 7,
    name: 'Fanta',
    price: 777,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e707"),
    id: 8,
    name: 'Mirinda',
    price: 375,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e708"),
    id: 9,
    name: 'Vodka',
    price: 199,
    stock: 200
  },
  {
    _id: ObjectId("62b7b161a25d6751ea84e709"),
    id: 10,
    name: 'Wisky',
    price: 676,
    stock: 200
  }
]
---
- Cambiar stock de todos los productos a 100

```
db.products.updateMany({id: {$gt:0}},{$set: {stock:100}})
```

> {
  acknowledged: true,
  insertedId: null,
  matchedCount: 10,
  modifiedCount: 0,
  upsertedCount: 0
}
---
- Cambiar stock a cero de productos con precio mayor a $1000

```
db.products.updateMany({price: {$gt:1000}},{$set: {stock:0}})
```
>{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
---


- Crear usuario Lector

```
use admin
```

```
 db.createUser({user:"pepe",pwd:"asd456",roles: [{role:"read",db:"ecomerce"}]})
```

> { ok: 1 }


